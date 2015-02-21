var produce;

//return the month (0-11) in the specified date, according to local time. 
var today = new Date()
var currentMonth = today.getMonth()


$(document).ready(function() {
  console.log( "ready!" );
  console.log(currentMonth);

	//display the month name.
	if (currentMonth === 0) {
		$("#month").text("January");
	} else if (currentMonth === 1) {
		$("#month").text("February");
	} else if (currentMonth === 2) {
		$("#month").text("March");
	} else if (currentMonth === 3) {
		$("#month").text("April");
	} else if (currentMonth === 4) {
		$("#month").text("May");
	} else if (currentMonth === 5) {
		$("#month").text("June");
	} else if (currentMonth === 6) {
		$("#month").text("July");
	} else if (currentMonth === 7) {
		$("#month").text("August");
	} else if (currentMonth === 8) {
		$("#month").text("September");
	} else if (currentMonth === 9) {
		$("#month").text("October");
	} else if (currentMonth === 10) {
		$("#month").text("November");
	} else {
		$("#month").text("December");
	} 
	
	//show what's in season this month.
	showWhatsInSeason(currentMonth);

	$("#january").click(function(){
		$("#month").text("January");
		showWhatsInSeason(0);
	});

	$("#february").click(function(){
		$("#month").text("February");
		showWhatsInSeason(1);
	});

	$("#march").click(function(){
		$("#month").text("March");
		showWhatsInSeason(2);
	});

	$("#april").click(function(){
		$("#month").text("April");
		showWhatsInSeason(3);
	});

	$("#may").click(function(){
		$("#month").text("May");
		showWhatsInSeason(4);
	});
	
	$("#june").click(function(){
		$("#month").text("June");
		showWhatsInSeason(5);
	});

	$("#July").click(function(){
		$("#month").text("July");
		showWhatsInSeason(6);
	});

	$("#august").click(function(){
		$("#month").text("August");
		showWhatsInSeason(7);
	});

	$("#september").click(function(){
		$("#month").text("September");
		showWhatsInSeason(8);
	});

	$("#october").click(function(){
		$("#month").text("October");
		showWhatsInSeason(9);
	});

	$("#november").click(function(){
		$("#month").text("November");
		showWhatsInSeason(10);
	});

	$("#december").click(function(){
		$("#month").text("December");
		showWhatsInSeason(11);
	});

	$("#january").click(function(){
		$("#month").text("January");
		showWhatsInSeason(0);
	});

});

//displays the fruits & veggies in season for a selected month.
function showWhatsInSeason(monthNumber) {	
	//grab the Produce array from produce.js
	produce = produce
	var list = $("#in-season-list ul")

	//determine many elements in the produce array
	var length = produce.length

	//go through the entire array of Produce data
	for (i=0; i<length; i++) {
		var item_data = produce[i]
		var name = item_data.name

		//remove spaces from 2-word names
		var name_id = name.replace(" ", "");

		//format item name in its own div as an h4
		var item_html = (
											" <li class='item' id='" + name_id + "'> " +
											" <h2> " + name + " </h2>" +
											" </li> "
										);

		//add items that are in season and remove any that are no longer in season.
		if ( (item_data.when_in_season[monthNumber] === true) && ($('#' + name_id).length === 0) ) {
			// var randomDivs = $(".item").get().sort(function(){
			// 	return Math.round(Math.random())-0.5;
			// });
			// $(randomDivs)

			list.append(item_html);
		}	
		if (item_data.when_in_season[monthNumber] === false) {
			$('#' + name_id).remove();
		}
	}
}

function chooseMonth(monthNumber, monthName) {
	//change "Month" displayed to whatever is chosen
	$("#month").text(monthName);
	//add items that are in season and remove any that are no longer in season.
}
		



