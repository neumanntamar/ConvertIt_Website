var calculate = function() {
	if(date1 == null || date2 == null)
	{
		document.getElementById("error2").innerHTML = "*you must select a valid date";
	}
	else if (date1 > date2)
		document.getElementById("error2").innerHTML = "*the start date must be before the end date";
	else {
		document.getElementById("error2").innerHTML = "";
		//you only compare days if same year and same month
		if (date1.getMonth() == date2.getMonth() && date1.getFullYear() == date2.getFullYear()) {
			assignDay(dateDiff(date1, date2));
			assignHour(dateDiff(date1, date2));
		} else {
			var total = multipleMonth(date1, date2);
			assignDay(total);
			assignHour(total);
		}
	}
};

var dateDiff = function(start, end) {
	return end.getDate() - start.getDate();
};

var assignDay = function(amt) {
	document.getElementById("days").innerHTML = amt + " Days";
};

var assignHour = function(amt) {
	document.getElementById("hours").innerHTML = (amt * 24) + " Hours";
};

var multipleMonth = function(start, end) {
	var total = 0;
	total += dateDiff(start, new Date(start.getFullYear(), start.getMonth() + 1, 0));
	if (start.getMonth() == 11) {
		var currMonth = 0;
		var currYear = start.getFullYear() + 1;
	} else {
		var currMonth = start.getMonth() + 1;
		var currYear = start.getFullYear();
	}

	while (currMonth != end.getMonth() || currYear != end.getFullYear()) {
		total += daysInMonth(currMonth + 1, currYear);
		if (currMonth != 11) {
			currMonth++;
		} else if (currMonth == 11) {
			currMonth = 0;
			currYear++;
		}
	}
	total += dateDiff(new Date(end.getFullYear(), end.getMonth() + 1, 1), end);
	total++;
	//you lose a day when subtracting in 2 months so you add the day here
	return total;
};

var daysInMonth = function(m, y) {
	return m === 2 ? y & 3 || !(y % 25) && y & 15 ? 28 : 29 : 30 + (m + (m >> 3) & 1);
}
