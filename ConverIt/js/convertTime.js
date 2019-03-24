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
		if(dropFrom == "second")
		{
			if(dropTo == "minute")
			{
				sec2min(from);
			}
			else if(dropTo == "hour")
			{
				sec2hr(from);
			}
			else if(dropTo == "day")
			{
				sec2day(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "minute")
		{
			if(dropTo == "second")
			{
				min2sec(from);
			}
			else if(dropTo == "hour")
			{
				min2hr(from);
			}
			else if(dropTo == "day")
			{
				min2day(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "hour")
		{
			if(dropTo == "second")
			{
				hr2sec(from);
			}
			else if(dropTo == "minute")
			{
				hr2min(from);
			}
			else if(dropTo == "day")
			{
				hr2day(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
			else if(dropFrom == "day")
		{
			if(dropTo == "second")
			{
				day2sec(from);
			}
			else if(dropTo == "minute")
			{
				day2min(from);
			}
			else if(dropTo == "hour")
			{
				day2hr(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
	} 
};

//convert from second to minute
var sec2min = function(from)
{
	 var min = parseFloat(from) * 0.0166667;
	 setValue(min);
};

//convert from second to hour
var sec2hr = function(from)
{
	 var hr = parseFloat(from) * 0.00027777833333;
	 setValue(hr);
};

//convert from second to day
var sec2day = function(from)
{
	 var day = parseFloat(from)* 0.000011574;
	 setValue(day); 
};

//convert from minute to second
var min2sec = function(from)
{
	 var sec = parseFloat(from) * 60;
	 setValue(sec); 
};

//convert from minute to hour
var min2hr = function(from)
{
	 var hr = parseFloat(from)* 0.0166667;
	 setValue(hr); 
};

//convert from minute to day
var min2day = function(from)
{
	 var day = parseFloat(from) * 0.000694444;
	 setValue(day); 
};

//convert from hour to second
var hr2sec = function(from)
{
	 var sec = parseFloat(from) * 3600;
	 setValue(sec); 
};
//convert from hour to minute
var hr2min = function(from)
{
	 var min = parseFloat(from) * 60;
	 setValue(min); 
};
//convert from hour to day
var hr2day = function(from)
{
	 var day = parseFloat(from) * 0.0416667;
	 setValue(day); 
};
//convert from day to second
var day2sec = function(from)
{
	 var sec = parseFloat(from) * 86400.06912;
	 setValue(sec); 
};
//convert from day to minute
var day2min = function(from)
{
	 var min = parseFloat(from) * 1440;
	 setValue(min); 
};

//convert from days to hours
var day2hr = function(from)
{
	 var hr = parseFloat(from) * 24;
	 setValue(hr); 
};
//set the value that is passed in to be the converted value
//the value passed in is based on the calculation
var setValue = function(num)
{
	document.getElementById("converted_value").innerHTML = num.toFixed(4);
};
