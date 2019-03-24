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
		
		if(dropFrom == "millimeter")
		{
			if(dropTo == "centimeter")
			{
			    mm2cm(from);
			}
			else if(dropTo == "inch")
			{
				mm2inch(from);
			}
			else if(dropTo == "foot")
			{
				mm2foot(from);
			}
			else if(dropTo == "meter")
			{
				mm2meter(from);
			}
			else if(dropTo == "kilometer")
			{
				mm2kilometer(from);
			}
			else if(dropTo == "yard")
			{
				mm2yard(from);
			}
			else if(dropTo == "mile")
			{
				mm2mile(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "centimeter")
		{
			if(dropTo == "millimeter")
			{
				cm2mm(from);
			}
			else if(dropTo == "inch")
			{
				cm2inch(from);
			}
			else if(dropTo == "foot")
			{
				cm2foot(from);
			}
			else if(dropTo == "yard")
			{
				cm2yard(from);
			}
			else if(dropTo == "meter")
			{
				cm2meter(from);
			}
			else if(dropTo == "kilometer")
			{
				mm2kilometer(from);
			}
			else if(dropTo == "mile")
			{
				cm2mile(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "inch")
		{
			if(dropTo == "centimeter")
			{
				inch2cm(from);
			}
			else if(dropTo == "millimeter")
			{
				inch2mm(from);
			}
			else if(dropTo == "meter")
			{
				inch2meter(from);
			}
			else if(dropTo == "kilometer")
			{
				inch2kilometer(from);
			}
			else if(dropTo == "foot")
			{
				inch2foot(from);
			}
			else if(dropTo == "yard")
			{
				inch2yard(from);
			}
			else if(dropTo == "mile")
			{
				inch2mile(from);
			}
			
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "foot")
		{
			if(dropTo == "millimeter")
			{
				foot2mm(from);
			}
			else if(dropTo == "centimeter")
			{
				foot2cm(from);
			}
			else if(dropTo == "inch")
			{
				foot2inch(from);
			}
			else if(dropTo == "meter")
			{
				foot2meter(from);
			}
			else if(dropTo == "yard")
			{
				foot2yard(from);
			}
			else if(dropTo == "kilometer")
			{
				mm2kilometer(from);
			}
			else if(dropTo == "mile")
			{
				foot2mile(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		else if(dropFrom == "meter")
		{
			if(dropTo == "centimeter")
			{
				meter2cm(from);
			}
			else if(dropTo == "millimeter")
			{
				meter2mm(from);
			}
			else if(dropTo == "inch")
			{
				meter2inch(from);
			}
			else if(dropTo == "foot")
			{
				meter2foot(from);
			}
			else if(dropTo == "yard")
			{
				meter2yard(from);
			}
			else if(dropTo == "kilometer")
			{
				mm2kilometer(from);
			}
			else if(dropTo == "mile")
			{
				meter2mile(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
	else if(dropFrom == "yard")
		{
			if(dropTo == "millimeter")
			{
				yard2mm(from);
			}
			else if(dropTo == "centimeter")
			{
				yard2cm(from);
			}
			else if(dropTo == "inch")
			{
				yard2inch(from);
			}
			else if(dropTo == "foot")
			{
				yard2foot(from);
			}
			else if(dropTo == "meter")
			{
				yard2meter(from);
			}
			else if(dropTo == "kilometer")
			{
				yard2kilometer(from);
			}
			else if(dropTo == "mile")
			{
				yard2mile(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
	else if(dropFrom == "mile")
		{
			if(dropTo == "centimeter")
			{
				mile2cm(from);
			}
			else if(dropTo == "milimeter")
			{
				mile2mm(from);
			}
			else if(dropTo == "inch")
			{
				mile2inch(from);
			}
			else if(dropTo == "foot")
			{
				mile2foot(from);
			}
			else if(dropTo == "yard")
			{
				mile2yard(from);
			}
			else if(dropTo == "meter")
			{
				mile2meter(from);
			}
			else if(dropTo == "kilometer")
			{
				mile2kilometer(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
		
		else if(dropFrom == "kilometer")
		{
			if(dropTo == "centimeter")
			{
			   kilometer2cm(from);
			}
			else if(dropTo == "milimeter")
			{
				kilometer2mm(from);
			}
			else if(dropTo == "inch")
			{
				kilometer2inch(from);
			}
			else if(dropTo == "foot")
			{
				kilometer2foot(from);
			}
			else if(dropTo == "yard")
			{
				kilometer2yard(from);
			}
			else if(dropTo == "meter")
			{
				kilometer2meter(from);
			}
			else if(dropTo == "mile")
			{
				kilometer2mile(from);
			}
			else
			{
				document.getElementById("error").innerHTML = "*Convert to and from have to be different units of measure";
			}
		}
	} 
};


//convert from millimeter to centimeters
var mm2cm = function(from)
{
	 var cm = parseFloat(from) * 0.1;
	 setValue(cm);
};

//convert from millimeter to inches
var mm2inch = function(from)
{
	 var inch = parseFloat(from) * 0.0393701;
	 setValue(inch);
};

//convert from millimeter to feet
var mm2foot = function(from)
{
	 var foot = parseFloat(from)* 0.003280841666667;
	 setValue(foot);
};

//convert from millimeter to meters
var mm2meter = function(from)
{
	 var meter = parseFloat(from) * 0.001;
	 setValue(meter);
};

//convert from millimeter to kilometers
var mm2kilometer = function(from)
{
	 var kilometer = parseFloat(from) * 0.000001;
	 setValue(kilometer);
};

//convert from millimeter to yards
var mm2yard = function(from)
{
	 var yard = parseFloat(from) * 0.00109361;
	 setValue(yard);
};

//convert from millimeter to miles
var mm2mile = function(from)
{
	 var mile = parseFloat(from) * 0.00000062;
	 setValue(mile);
};

//convert from centimeters to millimeters
var cm2mm = function(from)
{
	 var mm = parseFloat(from) * 10;
	 setValue(mm);
};

//convert from centimeters to inches
var cm2inch = function(from)
{
	 var inch = parseFloat(from) * 0.393701;
	 setValue(inch);
};
//convert from centimeters to feet
var cm2foot = function(from)
{
	 var foot = parseFloat(from) * 0.0328084;
	 setValue(foot);
};
//convert from centimeters to yards
var cm2yard = function(from)
{
	 var yard = parseFloat(from) * 0.0109361;
	 setValue(yard);
};
//convert from centimeters to meters
var cm2meter = function(from)
{
	 var meter = parseFloat(from) * 0.01;
	 setValue(meter);
};
//convert from centimeters to kilometers
var cm2kilometers = function(from)
{
	 var kilometers = parseFloat(from) * 0.00001;
	 setValue(kilometers);
};
//convert from centimeters to miles
var cm2mile = function(from)
{
	 var mile = parseFloat(from) * 0.00000621;
	 setValue(mile);
};


//convert from inches to millimeters
var inch2mm = function(from)
{
	 var mm = parseFloat(from) / 25.4;
	 setValue(mm);
};

//convert from inches to centimeters
var inch2cm = function(from)
{
	 var cm = parseFloat(from) * 2.54;
	 setValue(cm);
};


//convert from inches to meters
var inch2meter = function(from)
{
	 var meter = parseFloat(from) * 0.0254;
	 setValue(meter);
};

//convert from inches to kilometers
var inch2kilometer = function(from)
{
	 var kilometer = parseFloat(from) * 0.0000254;
	 setValue(kilometer);
};
//convert from inches to feet
var inch2foot = function(from)
{
	 var foot = parseFloat(from) * .0833333;
	 setValue(foot);
};

//convert from inches to yards
var inch2yard = function(from)
{
	 var inch = parseFloat(from) * 0.0277778;
	 setValue(inch);
};

//convert from inches to miles
var inch2mile = function(from)
{
	 var mile = parseFloat(from) * 0.00001578;
	 setValue(mile);
};
//convert from feet to millimeters
var foot2mm = function(from)
{
	 var mm = parseFloat(from) * 304.8;
	 setValue(mm);
};
//convert from feet to centimeters
var foot2cm = function(from)
{
	 var cm = parseFloat(from) * 30.48;
	 setValue(cm);
};

//convert from feet to inches
var foot2inch = function(from)
{
	 var inch = parseFloat(from) * 12;
	 setValue(inch);
};

//convert from feet to meters
var foot2meter = function(from)
{
	 var meter = parseFloat(from) * 0.3048;
	 setValue(meter);
};

//convert from feet to kilometers
var foot2kilometer = function(from)
{
	 var kilometer = parseFloat(from) * 0.0003048;
	 setValue(kilometer);
};

//convert from feet to yards
var foot2yard = function(from)
{
	 var yard = parseFloat(from) * 0.333333;
	 setValue(yard);
};

//convert from feet to miles
var foot2mile = function(from)
{
	 var mile = parseFloat(from) * 0.000189394;
	 setValue(mile);
};

//convert from meter to millimeters
var meter2mm = function(from)
{
	 var mm = parseFloat(from) * 1000;
	 setValue(mm);
};

//convert from meter to centimeters
var meter2cm = function(from)
{
	 var cm = parseFloat(from) * 100;
	 setValue(cm);
};

//convert from meter to inches
var meter2inch = function(from)
{
	 var inch = parseFloat(from) * 39.3701;
	 setValue(inch);
};
//convert from meter to yards
var meter2yard = function(from)
{
	 var yard = parseFloat(from) * 1.09361;
	 setValue(yard);
};
//convert from meter to feet
var meter2foot = function(from)
{
	 var foot = parseFloat(from) * 3.28084;
	 setValue(foot);
};

//convert from meters to kilometers
var meter2kilometer = function(from)
{
	 var kilometer = parseFloat(from) * 0.001;
	 setValue(kilometer);
};

//convert from meter to miles
var meter2mile = function(from)
{
	 var mile = parseFloat(from) * 0.000621371;
	 setValue(mile);
};
//convert from yards to millimeters
var yard2mm = function(from)
{
	 var mm = parseFloat(from) * 914.4;
	 setValue(mm);
};
//convert from yards to centimeters
var yard2cm = function(from)
{
	 var cm = parseFloat(from) * 91.44;
	 setValue(cm);
};
//convert from yards to inches
var yard2inch = function(from)
{
	 var inch = parseFloat(from) * 36;
	 setValue(inch);
};
//convert from yards to feet
var yard2foot = function(from)
{
	 var foot = parseFloat(from) * 0.0009144;
	 setValue(foot);
};

//convert from yards to meters
var yard2meter = function(from)
{
	 var meter = parseFloat(from) * 0.9144;
	 setValue(meter);
};

//convert from yards to kilometers
var yard2kilometer = function(from)
{
	 var kilometer = parseFloat(from) * 0.0009144;
	 setValue(kilometer);
};
//convert from yards to miles 
var yard2mile = function(from)
{
	 var mile = parseFloat(from) * 0.000568182;
	 setValue(mile);
};
//convert from mile to millimeters
var mile2mm = function(from)
{
	 var mm = parseFloat(from) * 1609340.0007802;
	 setValue(mm);
};
//convert from miles to centimeters
var mile2cm = function(from)
{
	 var cm = parseFloat(from) * 160934;
	 setValue(cm);
};
//convert from miles to inches 
var mile2inch = function(from)
{
	 var inch = parseFloat(from) * 63360;
	 setValue(inch);
};
//convert from miles to feet
var mile2foot = function(from)
{
	 var foot = parseFloat(from) * 5280;
	 setValue(foot);
};
//convert from miles to meters
var mile2meter = function(from)
{
	 var meter = parseFloat(from) * 1609.34;
	 setValue(meter);
};
//convert from miles to yards 
var mile2yard = function(from)
{
	 var yard = parseFloat(from) * 1760;
	 setValue(yard);
};

//convert from miles to kilometers
var mile2kilometer = function(from)
{
	 var kilometer = parseFloat(from) * 1.60934;
	 setValue(kilometer);
};

//convert from kilometer to millimeters
var kilometer2mm = function(from)
{
	 var mm = parseFloat(from) * 1000000;
	 setValue(mm);
};
//convert from kilometer to centimeters
var kilometer2cm = function(from)
{
	 var cm = parseFloat(from) * 100000;
	 setValue(cm);
};
//convert from kilometer to inches
var kilometer2inch = function(from)
{
	 var inch = parseFloat(from) * 39370.08;
	 setValue(inch);
};
//convert from kilometer to feet
var kilometer2foot = function(from)
{
	 var foot = parseFloat(from) * 3280.84;
	 setValue(foot);
};
//convert from kilometer to meters
var kilometer2meter = function(from)
{
	 var meter = parseFloat(from) * 1000;
	 setValue(meter);
};
//convert from kilometer to yards
var kilometer2yard = function(from)
{
	 var yard = parseFloat(from) * 1093.61;
	 setValue(yard);
};

//convert from kilometer to miles
var kilometer2mile = function(from)
{
	 var mile = parseFloat(from) * 0.621371;
	 setValue(mile);
};

//set the value that is passed in to be the converted value
//the value passed in is based on the calculation
var setValue = function(num)
{
	document.getElementById("converted_value").innerHTML = num.toFixed(4);
};

