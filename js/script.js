$(document).ready(function(){
	$('.smoothscroll').smoothScroll();

	$('#map').simplegmaps({
		MapOptions: {
			center: new google.maps.LatLng(58.589236, 16.179097),
	        draggable: true,
	        scrollwheel: false,
	        streetViewControl: true,
	        panControl: false,
	        zoom: 3,
	        zoomControl: true,
	        zoomControlOptions: {
	            style: 'DEFAULT'
	        }
	    }
	});

/*
	$('.whatTitle').hover(function(){
	  $(this).tab('show')
	},function(){});*/


});
