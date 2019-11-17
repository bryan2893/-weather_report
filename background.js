let params = {
    headers:{"X-Auth-Token":"A1E-s3k2vFfW10F7fx551gkujgEJP2ScBqUgTl738ghr30qUgFxtdHB9bwKW",
            "Content-Type":"application/json",
            "Accept":"application/json"}
}

fetch('http://things.ubidots.com/api/v1.6/variables/',params).then((response) => response.json()).then((result) => {
    console.log(result);
});

/*
chrome.runtime.onMessage.addListener(
    (request, sender, senderResponse) => {
      switch (request.message) {
        case 'save_text': {
          saveExtractedText(request.data);
          break;
        }
        default:
      }
    }
);
*/