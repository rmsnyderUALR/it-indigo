async function getHeight(){
    "use strict";

    // Get a reference to the form - Use the ID of the form
    let form = $("#myform");

    // If all of the form elements are valid, the get the form values
    if (form.valid()){

        // URL for call
        let url = "https://api.waterdata.usgs.gov/ogcapi/v0/collections/latest-continuous/items?f=json&lang=en-US&limit=10000&properties=monitoring_location_id,parameter_code,statistic_id,time,value,unit_of_measure&skipGeometry=true&offset=0&monitoring_location_id=USGS-07055646%2C%20USGS-07055660%2C%20USGS-07055680%2C%20USGS-07055780&parameter_code=00065&time=P7D";

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
    }
}

function clearform(){
    "use strict;"

    document.getElementById("id").innerHTML = "";
    document.getElementById("heightValue").innerHTML = "";
    document.getElementById("heightUnit").innerHTML = "";
}