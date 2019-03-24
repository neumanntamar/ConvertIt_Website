<?php


$FROM_CURRENCY = $_POST['from'];
$TO_CURRENCY = $_POST['to'];
$AMOUNT = $_POST['amt'];

//conver the currecny to the 3 letter code
if($FROM_CURRENCY == "us_dollar")
	$FROM_CURRENCY = "USD";
else if($FROM_CURRENCY == "israeli_shekel")
	$FROM_CURRENCY = "ILS";
else if($FROM_CURRENCY == "euro")
	$FROM_CURRENCY = "EUR";
else if($FROM_CURRENCY == "british_pound")
	$FROM_CURRENCY = "GBP";
else if($FROM_CURRENCY == "canadian_dollar")
	$FROM_CURRENCY == "CAD";

if($TO_CURRENCY == "us_dollar")
	$TO_CURRENCY = "USD";
else if($TO_CURRENCY == "israeli_shekel")
	$TO_CURRENCY = "ILS";
else if($TO_CURRENCY == "euro")
	$TO_CURRENCY = "EUR";
else if($TO_CURRENCY == "british_pound")
	$TO_CURRENCY = "GBP";
else if($TO_CURRENCY == "canadian_dollar")
	$TO_CURRENCY = "CAD";

$url = "https://www.exchangerate-api.com/" . $FROM_CURRENCY . "/" 
					. $TO_CURRENCY . "/" . $AMOUNT . "?k=" . "bfe4ced123054d17e4048402";
$result = file_get_contents($url);
echo $result;

?>