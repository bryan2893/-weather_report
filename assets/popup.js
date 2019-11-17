document.addEventListener('DOMContentLoaded', function(){

    let pTagError = document.querySelector('p');
    let temperatura = document.getElementById("temperatura");
    let humedad = document.getElementById("humedad");

    function showError(errorMessage){
        pTagError.textContent = errorMessage;
    }

    function cleanErrorMessage(){
        pTagError.textContent = "";
    }

    let params = {
        headers:{"X-Auth-Token":"A1E-s3k2vFfW10F7fx551gkujgEJP2ScBqUgTl738ghr30qUgFxtdHB9bwKW",
                "Content-Type":"application/json",
                "Accept":"application/json"}
    }
    
    fetch('http://things.ubidots.com/api/v1.6/variables/',params).then((response) => response.json()).then((result) => {

        let variableList = result.results;

        for(let i = 0;i<variableList.length;i++){
            let variable = variableList[i];
            if(variable.name === "temperatura"){
                temperatura.value = variable.last_value.value;
            }
            if(variable.name === "humedad"){
                humedad.value = variable.last_value.value;
            }
        }
        
    }).catch((error)=>{
        showError(error.message);
    });

},false);