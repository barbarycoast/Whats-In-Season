var produce;

//return the month (0-11) in the specified date, according to local time. 
var today = new Date()
var currentMonthNumber = today.getMonth()

var monthNames = [ "Jan.", "Feb.", "Mar.", "Apr.", 
									 "May", "Jun.", "Jul.", "Aug.",
									 "Sept.", "Oct.", "Nov.", "Dec."
								  ]

// var monthNames = [ "January", "February", "March", "April", 
// 									 "May", "June", "July", "August",
// 									 "September", "October", "November", "December"
// 								  ]

$(document).ready(function() {
  console.log( "ready!" );
  console.log(currentMonthNumber);

	//display the month name.
	$("#month").text(monthNames[currentMonthNumber]);
	
	//show what's in season this month.
	loadProduceList();

	//show what's in season when a different month is clicked.
	$("nav li").click(function(event){
		$("#month").text(event.target.innerHTML);
		var clickedMonthNumber = $(this).index();
		updateInSeasonList(clickedMonthNumber);
	}); 

	$(".up").click(function() {
		moveMonthNav("up");
	});

		$(".down").click(function() {
		moveMonthNav("down");
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
		var item_html = (" <li class='item' id='" + name_id + "'> " + name + " </li> " );
		list.append(item_html);
		$("#"+ name_id).addClass("hidden");

		if (item_data.when_in_season[currentMonthNumber] === true){
			$("#"+ name_id).removeClass("hidden");
			$("#"+ name_id).addClass("visible");
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

		} else if ( (item_data.when_in_season[clickedMonthNumber] === true) && $("#"+ name_id).hasClass("hidden")  ){ 
			$("#"+ name_id).removeClass("hidden");			
			$("#"+ name_id).addClass("visible");

		} else if ( (item_data.when_in_season[clickedMonthNumber] === true) && $("#"+ name_id).hasClass("visible")  ){ 
			// do nothing

		}	else if ( (item_data.when_in_season[clickedMonthNumber] === false) && $("#"+ name_id).hasClass("hidden") ){ 
			// do nothing
		
		}	else {
						// do nothing
		}
	}
}

//functionality for arrow nav
function moveMonthNav(direction) {
	var newMonthNumber
	var selectedMonth = $("#month").text()
	var selectedMonthNumber = monthNames.indexOf(selectedMonth)
	if (direction === "up") {
		newMonthNumber = selectedMonthNumber - 1
	}
	if ( (direction === "up") && (selectedMonthNumber === 0) ) {
		newMonthNumber = 11
	}
	if (direction === "down") {
		newMonthNumber = selectedMonthNumber + 1
	}
	if ( (direction === "down") && (selectedMonthNumber === 11) ) {
		newMonthNumber = 0
	}

	//replace text box with new month name
	$("#month").text(monthNames[newMonthNumber]);

	//update in season list
	updateInSeasonList(newMonthNumber);
}
		



