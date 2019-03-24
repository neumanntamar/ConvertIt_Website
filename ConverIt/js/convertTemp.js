var convertClick = function () 
{
	var from = document.getElementById("numFrom").value;		//measurment you want to convert from
	
	if(isNaN(from) || from.length == 0)
	{
		document.getElementById("error").innerHTML = "*amount must be a valid number";
	}
	else if(dropFrom == null)
	{
		document.getElementById("error").innerHTML = "*you must select a unit of measure to convert from";
	}
	else if(dropTo == null)
	{
		document.getElementById("error").innerHTML = "*you must select a unit of measure to convert to";
	}
	else 
	{
		document.getElementById("error").innerHTML= "";
		//search for the appropirate function to call based on the unit of measure
		//that the user wants to convert to and from
		if(dropFrom == "farenheit")
		{
			if(dropTo == "celcius")
			{
				far2cel(from);
			}
			else if(dropTo == "kelvin")
			{
				far2kel(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "celcius")
		{
			if(dropTo == "kelvin")
			{
				cel2kel(from);
			}
			else if(dropTo == "farenheit")
			{
				cel2far(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "kelvin")
		{
			if(dropTo == "farenheit")
			{
				kel2far(from);
			}
			else if(dropTo == "celcius")
			{
				kel2cel(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
	} 
};

//convert from farenheit to celcius
var far2cel = function(from)
{
	 var celcius = (parseFloat(from) - 32) * (5/9);
	 setValue(celcius);
};

//convert from farenheit to kelvin
var far2kel = function(from)
{
	 var kelvin = (5/9) * (parseFloat(from) - 32) + 273.15;
	 setValue(kelvin);
};

//convert from celcius to kelvin
var cel2kel = function(from)
{
	 var kelvin = parseFloat(from) + 273.15;
	 setValue(kelvin); 
};

//convert from celcius to farenheit
var cel2far = function(from)
{
	 var farenheit = parseFloat(from) * (9/5) + 32;
	 setValue(farenheit); 
};

//convert from kelvin to farenheit
var kel2far = function(from)
{
	 var farenheit = (parseFloat(from) - 273.15) * (9/5) + 32;
	 setValue(farenheit); 
};

//convert from kelvin to celcius
var kel2cel = function(from)
{
	 var celcius = parseFloat(from) - 273.15;
	 setValue(celcius); 
};

//set the value that is passed in to be the converted value
//the value passed in is based on the calculation
var setValue = function(num)
{
	document.getElementById("converted_value").innerHTML = num.toFixed(4);
};
