let request = new Request('http://things.ubidots.com/api/v1.6/datasources/', {
    method: 'GET',
    headers: new Headers({
        'X-Auth-Token':'A1E-THAbwBpux0ZtQWpt8Rbr16i1jXhOk6cwJGQGjhZzyofVrdd7IGYVi6Vv',
        'Content-Type': 'application/json'
    })
});

fetch(request).then(function(response) { 

    chrome.tabs.query({currentWindow:true,active:true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{type:"showWhetherInfo",payload:response});
    });

 }).catch((error) => {

    chrome.tabs.query({currentWindow:true,active:true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id,{type:"error",payload:error});
    });
    
 });