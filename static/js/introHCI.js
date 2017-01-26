'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("It worked!");
		$(".jumbotron p").toggleClass("active");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

}

function projectClick(e) {
	
	e.preventDefault();
	$(this).css("background-color", "#7fff00")

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);

	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if(!description.is(":visible")){
    	description.fadeIn();
    } else {
    	description.fadeOut();
    }

    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
       description.hide();
       description.fadeIn();
    }
}