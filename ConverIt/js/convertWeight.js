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
		if(dropFrom == "pound")
		{
			if(dropTo == "kilogram")
			{
				pound2kilogram(from);
			}
			else if(dropTo == "ton")
			{
				pound2ton(from);
			}
			else if(dropTo == "gram")
			{
				pound2gram(from);
			}
			else if(dropTo == "ounce")
			{
				pound2ounce(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "kilogram")
		{
			if(dropTo == "pound")
			{
				kilogram2pound(from);
			}
			else if(dropTo == "ton")
			{
				kilogram2ton(from);
			}
			else if(dropTo == "gram")
			{
				kilogram2gram(from);
			}
			else if(dropTo == "ounce")
			{
				kilogram2ounce(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "ton")
		{
			if(dropTo == "pound")
			{
				ton2pound(from);
			}
			else if(dropTo == "kilogram")
			{
				ton2kilogram(from);
			}
			else if(dropTo == "gram")
			{
				ton2gram(from);
			}
			else if(dropTo == "ounce")
			{
				ton2ounce(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "gram")
		{
			if(dropTo == "pound")
			{
				gram2pound(from);
			}
			else if(dropTo == "kilogram")
			{
				gram2kilogram(from);
			}
			else if(dropTo == "ton")
			{
				gram2ton(from);
			}
			else if(dropTo == "ounce")
			{
				gram2ounce(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "ounce")
		{
			if(dropTo == "pound")
			{
				ounce2pound(from);
			}
			else if(dropTo == "kilogram")
			{
				ounce2kilogram(from);
			}
			else if(dropTo == "ton")
			{
				ounce2ton(from);
			}
			else if(dropTo == "gram")
			{
				ounce2gram(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
	} 
};

//convert from pounds to kilogram
var pound2kilogram = function(from)
{
	 var kilogram = parseFloat(from) * 0.45359237;
	 setValue(kilogram);
};

//convert from pounds to ton
var pound2ton = function(from)
{
	 var ton = parseFloat(from) / 2204.6226199999;
	 setValue(ton);
};

//convert from pounds to gram
var pound2gram = function(from)
{
	 var gram = parseFloat(from) / 0.0022046;
	 setValue(gram);
};

//convert from pounds to ounce
var pound2ounce = function(from)
{
	 var oz = parseFloat(from) * 16;
	 setValue(oz);
};

//convert from kilogram to pounds
var kilogram2pound = function(from)
{
	 var pound = parseFloat(from) / 0.45359237;
	 setValue(pound);
};

//convert from kilogram to ton (metric)
var kilogram2ton = function(from)
{
	 var ton = parseFloat(from) / 1000;
	 setValue(ton);
};

//convert from kilogram to gram
var kilogram2gram = function(from)
{
	 var gram = parseFloat(from) * 1000;
	 setValue(gram);
};

//convert from kilogram to oz
var kilogram2ounce = function(from)
{
	 var oz = parseFloat(from) / 0.02834952;
	 setValue(oz);
};

//convert from (metric) ton to pound
var ton2pound = function(from)
{
	 var pound = parseFloat(from) * 2204.6226199999;
	 setValue(pound);
};

//convert from (metric) ton to kilogram
var ton2kilogram = function(from)
{
	 var kilogram = parseFloat(from) * 1000;
	 setValue(kilogram);
};

//convert from (metric) ton to gram
var ton2gram = function(from)
{
	 var gram = parseFloat(from) * 1000000;
	 setValue(gram);
};

//convert from (metric) ton to oz
var ton2ounce = function(from)
{
	 var oz = parseFloat(from) * 35273.9619;
	 setValue(oz);
};

//convert from gram to pound
var gram2pound = function(from)
{
	 var pound = parseFloat(from) * 0.0022046;
	 setValue(pound);
};

//convert from gram to kilogram
var gram2kilogram = function(from)
{
	 var kilogram = parseFloat(from) / 1000;
	 setValue(kilogram);
};

//convert from gram to (metric) ton 
var gram2ton = function(from)
{
	 var ton = parseFloat(from) / 1000000;
	 setValue(ton);
};

//convert from gram to ounce 
var gram2ounce = function(from)
{
	 var ounce = parseFloat(from) / 28.34952;
	 setValue(ounce);
};

//convert from ounces to pounds
var ounce2pound = function(from)
{
	 var pound = parseFloat(from) / 16;
	 setValue(pound);
};

//convert from oz to kilogram
var ounce2kilogram = function(from)
{
	 var kilogram = parseFloat(from) * 0.02834952;
	 setValue(kilogram);
};

//convert from oz to (metric) ton
var ounce2ton = function(from)
{
	 var oz = parseFloat(from) / 35273.9619;
	 setValue(oz);
};

//convert from ounce to gram 
var ounce2gram = function(from)
{
	 var gram = parseFloat(from) * 28.34952;
	 setValue(gram);
};

//set the value that is passed in to be the converted value
//the value passed in is based on the calculation
var setValue = function(num)
{
	document.getElementById("converted_value").innerHTML = num.toFixed(4);
};

