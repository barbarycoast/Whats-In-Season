var produce;

//return the month (0-11) in the specified date, according to local time. 
var today = new Date()
var currentMonthNumber = today.getMonth()


$(document).ready(function() {
  console.log( "ready!" );
  console.log(currentMonthNumber);

	//display the month name.
 	var currentMonthName = [ "January", "February", "March", "April", 
													 "May", "June", "July", "August",
													 "September", "October", "November", "December"
													 ]
	$("#month").text(currentMonthName[currentMonthNumber]);
	
	//show what's in season this month.
	loadProduceList();

	//show what's in season when a different month is clicked.
	$("nav li").click(function(event){
		$("#month").text(event.target.innerHTML);
		var clickedMonthNumber = $(this).index();
		updateInSeasonList(clickedMonthNumber);
	}); 

}); //end document.ready function

//Preps list of all produce, then hides all
function loadProduceList() {	
	
	//grab the Produce array from produce.js
	produce = _.shuffle(produce)
	
	var list = $("#in-season-list ul")

	//determine many elements in the produce array
	var length = produce.length

	//go through the entire array of Produce data
	for (i=0; i<length; i++) {
		var item_data = produce[i]
		var name = item_data.name
		var name_id = name.replace(" ", ""); //removes spaces from 2-word names

		//format item name in its own div as an h4
		var item_html = (
											" <li class='item' id='" + name_id + "'> " +
											" <h2> " + name + " </h2>" +
											" </li> "
										);
		list.append(item_html);
		$("#"+ name_id).addClass("hidden");
		$("#"+ name_id).css("background-color", "yellow");


		if (item_data.when_in_season[currentMonthNumber] === true){
			$("#"+ name_id).addClass("visible");
			console.log($("#"+ name_id).selector, "in season", currentMonthNumber);
		}
	}	
}

function updateInSeasonList(clickedMonthNumber) {

	//determine how many elements in the produce list 
	var list_length = $("#in-season-list li").length

	//go through the entire list to show what's in season and hide what's not
	for (i=0; i<list_length; i++) {
		var item_data = produce[i]
		var name = item_data.name
		var name_id = name.replace(" ", ""); //removes spaces from 2-word names

		//hide items that are no longer in season and are currently displayed
		if ( (item_data.when_in_season[clickedMonthNumber] === false) && $("#"+ name_id).hasClass("visible") ){ 
			$("#"+ name_id).removeClass("visible");			
			$("#"+ name_id).addClass("hidden");
			$("#"+ name_id).css("background-color", "blue");
			console.log($("#"+ name_id).selector, "going out of season", clickedMonthNumber)
		}	else if ( (item_data.when_in_season[clickedMonthNumber] === false) && $("#"+ name_id).hasClass("hidden") ){ 
			$("#"+ name_id).css("background-color", "green");
			console.log($("#"+ name_id).selector, "still not in season", clickedMonthNumber)
		} else if ( (item_data.when_in_season[clickedMonthNumber] === true) && $("#"+ name_id).hasClass("hidden")  ){ 
			$("#"+ name_id).removeClass("hidden");			
			$("#"+ name_id).addClass("visible");
			$("#"+ name_id).css("background-color", "red");
			console.log($("#"+ name_id).selector, "coming into season", clickedMonthNumber)
		} else if ( (item_data.when_in_season[clickedMonthNumber] === true) && $("#"+ name_id).hasClass("visible")  ){ 
			$("#"+ name_id).css("background-color", "orange");
		}	else {
			$("#"+ name_id).css("background-color", "purple");
		}

		// if ( (item_data.when_in_season[clickedMonthNumber] === true) && $("#"+ name_id).hasClass("visible")  ){ 
		// 	$("#"+ name_id).css("background-color", "orange");
		// 	console.log($("#"+ name_id).selector, "already in season", clickedMonthNumber)
		// }




	

		// if ( (item_data.when_in_season[clickedMonthNumber] === true) && ($("#"+ name_id).is(":visible") === true) ) {
		// 	$("#"+ name_id).slideUp();
		// }

	}
}


		



