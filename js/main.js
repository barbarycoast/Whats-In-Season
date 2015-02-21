var produce;

$(document).ready(function() {
  console.log( "ready!" );

	//return the month (0-11) in the specified date, according to local time. 
	var today = new Date()
	var currentMonth = today.getMonth()
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

	//grab the Produce array from produce.js
	produce = produce
	var list = $("#in-season-list")

 //determine many elements in the produce array
	var length = produce.length
	
	//go through the entire array of Produce data
	for (i=0; i<length; i++) {
		var item_data = produce[i]
		var name = item_data.name

		//format item name in its own div as an h4
		var item_html = (
											" <div class='item' id='" + name + "'> " +
											" <h4> " + name + " </h4>" +
											" </div> "
										);

		//add items that are in season and remove any that are no longer in season.
		if (item_data.when_in_season[currentMonth] === true) {
			// var randomDivs = $(".item").get().sort(function(){
			// 	return Math.round(Math.random())-0.5;
			// });
			// $(randomDivs)

			list.append(item_html);
		}	else {
			$('#' + name).remove();
		}
	}
});
		



