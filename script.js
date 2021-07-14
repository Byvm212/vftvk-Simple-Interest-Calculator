//here the parameters through which the numbers will pass and, the conditions that must be met for the page to yield a valid result//
function compute() 
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value; //Gets all the values from html (Amount, rate and number of years).

    if (principal<=0){ 
        alert("Please enter a positive number!");
        document.getElementById("principal").focus();
    }

    else{ 
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML = "If you deposit: <a style='background-color:yellow'>" + principal + "</a><br>" + `
        at an interest rate of: <a style='background-color:yellow'>` + rate + "</a><br>" + `You will receive an amount of: 
        <a style='background-color:yellow'>` + interest + "</a><br>" + "In the year: <a style='background-color:yellow'>" + year + "</a><br>";

       

       

    }

    
    
}

function updateRate(){ 
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}
        

