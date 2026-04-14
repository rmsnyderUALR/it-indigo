async function getHeight(){
    "use strict";

    // Get a reference to the form - Use the ID of the form
    let form = $("#myform");

    // If all of the form elements are valid, the get the form values
    if (form.valid()){

        // URL for call
        // let url = "https://api.waterdata.usgs.gov/ogcapi/v0/collections/latest-continuous/items?f=json&lang=en-US&limit=10000&properties=monitoring_location_id,parameter_code,statistic_id,time,value,unit_of_measure&skipGeometry=true&offset=0&monitoring_location_id=USGS-07055646%2C%20USGS-07055660%2C%20USGS-07055680%2C%20USGS-07055780&parameter_code=00065&time=P7D";
        let url = "https://api.waterdata.usgs.gov/ogcapi/v0/collections/continuous/items?f=json&lang=en-US&limit=10000&properties=monitoring_location_id,parameter_code,statistic_id,time,value,unit_of_measure&skipGeometry=true&offset=0&monitoring_location_id=USGS-07055660%2C%20USGS-07055646%2C%20USGS-07055680&parameter_code=00065&time=P7D"

        // Make call
        let msgObject = await fetch(url);

        let msgJSONText = await msgObject.text();
        // Parse JSON string into object
        let msg = JSON.parse(msgJSONText);

        // Check status
        if (msgObject.status >= 200 && msgObject.status <= 299) {
            

            // Check if result was found
            if (msg.features) {
                document.getElementById("id0").innerHTML = msg.features[0].properties.monitoring_location_id;
                
                // Check if height is > 0
                if (msg.features[0].properties.value != null){
                    document.getElementById("heightValue0").innerHTML = msg.features[0].properties.value + " ";
                }
                else{
                    document.getElementById("heightValue0").innerHTML = "0";
                }
                document.getElementById("heightUnit0").innerHTML = msg.features[1].properties.unit_of_measure;


                document.getElementById("id1").innerHTML = msg.features[1].properties.monitoring_location_id;
                
                // Check if height is > 0
                if (msg.features[1].properties.value != null){
                    document.getElementById("heightValue1").innerHTML = msg.features[1].properties.value + " ";
                }
                else{
                    document.getElementById("heightValue1").innerHTML = "0";
                }
                document.getElementById("heightUnit1").innerHTML = msg.features[1].properties.unit_of_measure;


                document.getElementById("id2").innerHTML = msg.features[2].properties.monitoring_location_id;
                
                // Check if height is > 0
                if (msg.features[2].properties.value != null){
                    document.getElementById("heightValue2").innerHTML = msg.features[2].properties.value + " ";
                }
                else{
                    document.getElementById("heightValue2").innerHTML = "0";
                }
                document.getElementById("heightUnit2").innerHTML = msg.features[2].properties.unit_of_measure;


                document.getElementById("id3").innerHTML = msg.features[3].properties.monitoring_location_id;
                
                // Check if height is > 0
                if (msg.features[3].properties.value != null){
                    document.getElementById("heightValue3").innerHTML = msg.features[3].properties.value + " ";
                }
                else{
                    document.getElementById("heightValue3").innerHTML = "0";
                }
                document.getElementById("heightUnit3").innerHTML = msg.features[3].properties.unit_of_measure;
            }
            else {
                //Error message
                alert("No Match Found")
                return;
            }
        }

        /* Site 1 */
        /* Information about the PID */
        var sitename = "Ponca"
        var sitecode = "USGS-07055660"
        var siteDescription = "Ponca Bridge"

        /* Holds the dates and values to be graphed */
        var dates = [];
        var values = [];

        /* fLen contains the length of the array (number of values) */
        var fLen = msg.features.length
        for (var i = 0; i < fLen; i++) {
            if (msg.features[i].properties.monitoring_location_id == sitecode) {
                // values.push(msg.features[i].properties.value);
                // dates.push(msg.features[i].properties.time);
                values[i] = msg.features[i].properties.value;
                dates[i] = msg.features[i].properties.time;
            }
        }
        /* Put your code here to display a graph of values and dates for Site 1*/

        var ctx = document.getElementById("chartjs-0");
        var myChart = new Chart(ctx, {
            "type":"line",
            "data": {
                "labels": dates,
                "datasets":
                [{"label":"River Height",
                    "data": values,
                    "fill": false,
                    "borderColor":"#228B22",
                    "color":"#000",
                    "pointRadius":1,
                    "pointBackgroundColor":"#fff",
                    "lineTension":0.1
                }]},
            "options":{ 
                responsive: false,
                maintainAspectRatio: true,
            }
        });

        /* Site 2 */
        /* Information about the PID */
        var sitename = "Boxley"
        var sitecode = "USGS-07055646"
        var siteDescription = "Near Boxley"

        /* Holds the dates and values to be graphed */
        var dates2 = [];
        var values2 = [];

        /* fLen contains the length of the array (number of values) */
        var fLen = msg.features.length
        for (var i = 0; i < fLen; i++) {
            if (msg.features[i].properties.monitoring_location_id == sitecode) {
                // values.push(msg.features[i].properties.value);
                // dates.push(msg.features[i].properties.time);
                values2[i] = msg.features[i].properties.value;
                dates2[i] = msg.features[i].properties.time;
            }
        }
        /* Put your code here to display a graph of values and dates for Site 2*/

        var ctx = document.getElementById("chartjs-1");
        var myChart = new Chart(ctx, {
            "type":"line",
            "data": {
                "labels": dates2,
                "datasets":
                [{"label":"River Height",
                    "data": values2,
                    "fill": false,
                    "borderColor":"#228B22",
                    "color":"#000",
                    "pointRadius":1,
                    "pointBackgroundColor":"#fff",
                    "lineTension":0.1
                }]},
            "options":{ 
                responsive: false,
                maintainAspectRatio: true,
            }
        });

        /* Site 3 */
        /* Information about the PID */
        var sitename = "Pruitt"
        var sitecode = "USGS-07055680"
        var siteDescription = "Pruitt"

        /* Holds the dates and values to be graphed */
        var dates3 = [];
        var values3 = [];

        /* fLen contains the length of the array (number of values) */
        var fLen = msg.features.length
        for (var i = 0; i < fLen; i++) {
            if (msg.features[i].properties.monitoring_location_id == sitecode) {
                // values.push(msg.features[i].properties.value);
                // dates.push(msg.features[i].properties.time);
                values3[i] = msg.features[i].properties.value;
                dates3[i] = msg.features[i].properties.time;
            }
        }
        /* Put your code here to display a graph of values and dates for Site 3*/

        var ctx = document.getElementById("chartjs-2");
        var myChart = new Chart(ctx, {
            "type":"line",
            "data": {
                "labels": dates3,
                "datasets":
                [{"label":"River Height",
                    "data": values3,
                    "fill": false,
                    "borderColor":"#228B22",
                    "color":"#000",
                    "pointRadius":1,
                    "pointBackgroundColor":"#fff",
                    "lineTension":0.1
                }]},
            "options":{ 
                responsive: false,
                maintainAspectRatio: true,
            }
        });
    }
}

function clearform(){
    "use strict;"

    document.getElementById("id0").innerHTML = "";
    document.getElementById("heightValue0").innerHTML = "";
    document.getElementById("heightUnit0").innerHTML = "";
    document.getElementById("id1").innerHTML = "";
    document.getElementById("heightValue1").innerHTML = "";
    document.getElementById("heightUnit1").innerHTML = "";
    document.getElementById("id2").innerHTML = "";
    document.getElementById("heightValue2").innerHTML = "";
    document.getElementById("heightUnit2").innerHTML = "";
    document.getElementById("id3").innerHTML = "";
    document.getElementById("heightValue3").innerHTML = "";
    document.getElementById("heightUnit3").innerHTML = "";
}