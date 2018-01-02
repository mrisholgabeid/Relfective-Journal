jQuery(document).ready(function() {
	
	// define our variables
	var fullHeightMinusHeader, sideScrollHeight = 0;
	
	// create function to calculate ideal height values
	function calcHeights() {
		
		// set height of main columns
		fullHeightMinusHeader = jQuery(window).height() - jQuery(".app-header").outerHeight();
		jQuery(".main-content, .sidebar-two, .sidebar-one").height(fullHeightMinusHeader);
		
		// set height of sidebar scroll content
		sideScrollHeight = fullHeightMinusHeader - jQuery(".nav-menu").outerHeight() - jQuery(".buttons").outerHeight();
		jQuery(".side-scroll").height(sideScrollHeight);
					
	} // end calcHeights function
	
	// run on page load
	calcHeights();
	
	// run on window resize event
	jQuery(window).resize(function() {
		calcHeights();
	});
	
});

$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		// swap image
		var imageURL = $(this).attr("href");
		$("#image").attr("src", imageURL);
		
		//swap caption
		var name = $(this).attr("title");
		$("#name").text(name);
				
		// cancel the default action of the link
	    evt.preventDefault();  // jQuery method that's cross-browser compatible
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a:first-child").focus();
}); // end ready