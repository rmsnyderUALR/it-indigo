async function convCurrency() {
    "use strict";

    // Get a reference to the form - Use the ID of the form
    let form = $("#myform");
    
    // If all of the form elements are valid, the get the form values
    if (form.valid()) {
        
        let baseCurrency = document.getElementById("baseCurrency").value;
        let toCurrency = document.getElementById("toCurrency").value;
        let apiKey = "uVFhJsaAtoeFUuK6ycmOUcClt9EsVaRD"
        let FromDate = document.getElementById("FromDate").value;
        let ToDate = document.getElementById("ToDate").value;

        /* URL for AJAX Call */
        let myURL1 = "https://api.massive.com/v3/reference/dividends" + baseCurrency + "?apiKey=" + apiKey;
        /* Make the AJAX call */
        let msg1Object = await fetch(myURL1);
        /* Check the status */
        if (msg1Object.status >= 200 && msg1Object.status <= 299) {            
            let msg1JSONText = await msg1Object.text();
            // Parse the JSON string into an object
        }
        else {
            /* AJAX complete with error - probably invalid stock ticker symbol */
                /* Your code to process the result goes here - 
                   display the returned message */
            alert("Stock Not Found - Status: " + msg1Object.status)
            return;
        }        
 
        /* URL for AJAX Call */
        let myURL2 = "https://api.polygon.io/v2/aggs/ticker/" + StockSymbol + "/range/1/day/" + FromDate + "/" + ToDate + "?unadjusted=false&sort=asc&limit=32&apiKey=" + apiKey;
        /* Make the AJAX call */
        let msg2Object = await fetch(myURL2);
        /* Check the status */
        if (msg2Object.status >= 200 && msg2Object.status <= 299) {            
            let msg2JSONText = await msg2Object.text();
            // Parse the JSON string into an object
            let msg2 = JSON.parse(msg2JSONText);
            /* Your code to process the result goes here - 
               display the returned message */
                /* Your code to process the result goes here  
                    display the returned message */
                let stockdate = [];
                let stockvalue = [];
                let stockvolume = [];
                let numdays = msg2.results.length;
                if (numdays > 0) {
                    for (let i = 0; i < numdays; i++) {
                        /* stock close value */
                        stockvalue[i] = msg2.results[i].c;
                        /* stock volume */
                        stockvolume[i] = msg2.results[i].v;
                        /* date is in Unix milleseconds - create a temporary date variable */
                        let tempdate = new Date(msg2.results[i].t);
                        /* extract the date string from the value */
                        stockdate[i] = tempdate.toLocaleDateString();
                    }
                }


                let ctx0 = document.getElementById("chartjs-0");
                let myChart0 = new Chart(ctx0, {
                    "type":"line",
                    "data": {
                        "labels": stockdate,
                        "datasets":[{"label":"Stock Close",
                        "data": stockvalue,
                        "fill":false,
                        "borderColor":"rgb(75, 192, 192)",
                        "lineTension":0.1}]},
                        "options":{ 
                            responsive: false,
                            maintainAspectRatio: true,
                        }
                    }
                );         
        }
        else {
            /* AJAX completed with error - probably invalid stock ticker symbol */
            alert("Stock Not Found - Status: " + msg2Object.status)
            return
        }
    }
}

function ClearForm() {
    "use strict;"

    document.getElementById("baseCurrency").value = "";
    document.getElementById("baseCurrencyError").innerHTML = "";
    document.getElementById("toCurrency").value = "";
    document.getElementById("toCurrencyError").innerHTML = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("FromDateError").innerHTML = "";
    document.getElementById("ToDate").value = "";
    document.getElementById("ToDateError").innerHTML = "";
    document.getElementById("url").innerHTML = "";
    document.getElementById("url").href = "";
    
    /* Ugly Code to Erase Canvas */
    let canvas0 = document.getElementById("chartjs-0");
    let context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    let canvas1 = document.getElementById("chartjs-1");
    let context1 = canvas1.getContext('2d');    
    context1.clearRect(0, 0, canvas1.width, canvas1.height);
}