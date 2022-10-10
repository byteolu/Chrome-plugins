


chrome.runtime.onMessage.addListner((msg, sender, response) => {

    if(msg.name == "runCommands"){

        //..
        var scapeObj = msg.data; 
        /*
        Example Object
        [
            {
                "type": "wait",
                "one": "200ms",
                "two": "",
            }, 
            {
                "type": "click",
                "one": "body .button-one", 
                "two": "",
            },
            {
                "type": "enter",
                "one": "body .input-one",
                "two": "input text",
            },
            {
                "type": "save",
                "one": "body .input-two",
                "two": "",
            },
        ]
        */
        //run.. 
    }

});