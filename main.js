//function calculateTip start
function calculateTip(){
    //create some variables to store values
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;

    //if statement start here
    if (billAmount === "" || serviceQuality == 0){
        window.alert("Please enter some values to get this baby up and running!");
        return; 
    }// end of if statement

    //if statement to check the input is 0 or greater than or equal to 1
    if(numPeople === "" || numPeople <= 1){
        numPeople = 1;
        document.getElementById("each").style.display = "none";
    } else{
        document.getElementById("each").style.display = "block";
    }// end of if statement

    //Math operation
    var total = (billAmount*serviceQuality)/ numPeople;
    total = Math.round(total*100)/100;
    total= total.toFixed(2);

    /* var total = (billAmount*(serviceQuality/100))/ numPeople;
    total = (total*100);
    total= total.toFixed(2); */


    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}
    //Hide the tip amount on load
    document.getElementById("totalTip"). style.display ="none";
    document.getElementById("each"). style.display = "none";


    