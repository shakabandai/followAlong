$(document).ready(function(){
	//attach event listener to buttons(input?)
	//create function stub for read/write/delete
	  // research local storage

	// $().on("click", function(){

	// });

	$('.store-btn').on("click", function(event){
	  	let titleValue = $('.input-field-title').val();
	  	let contentValue = $('.input-field-body').val();
	  	
	  	localStorage.setItem('.titleValue', titleValue);
	  	localStorage.setItem('.contentValue', contentValue);
   
	});

	$('.get-btn').on("click", function(event){
	  	let titleValue = localStorage.getItem('.titleValue');
	  	let contentValue = localStorage.getItem('.contentValue');

	  	$('.debug').html(`<p>$(contentValue) $(contentValue)</p>`);
	});

	$('.delete-btn').on("click", function(event){
	  	localStorage.removeItem('.titleValue');
	  	localStorage.removeItem('contentValue');

	  	$('.debug').html(`<p>Items Deleted</p>`);
	});
});
