/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

/*jslint browser: true*/
/*global $, jQuery, alert, google, init*/
/*jshint strict: true */


// jQuery to collapse the navbar on scroll
$(window).scroll(function () {
	"use strict";
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    "use strict";
	$('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
	"use strict";
    $('.navbar-toggle:visible').click();
});







// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
	"use strict";
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 3,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(40.7127, -74.0059),  // Centered on NYC-ish / East coast because this is where you have most chapters for now

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        //styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#193341"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#2c5a71"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#29768a"},{"lightness":-37}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#406d80"}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#2c5a71"}]}]
        //styles: [{"featureType": "administrative", "elementType": "labels.text.fill", "stylers":[{"color":"#444444"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"off"},{"hue":"#ff0000"},{"saturation":"94"},{"lightness":"88"},{"weight":"3.01"},{"invert_lightness":true}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#ffffff"},{"visibility":"on"}]}]
        styles: [{"featureType": "administrative", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{"color": "#444444"}]}, {"featureType": "administrative.country", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#d6d7d8"}]}, {"featureType": "poi", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "all", "stylers": [{"saturation": -100}, {"lightness": 45}, {"visibility": "off"}]}, {"featureType": "road.highway", "elementType": "all", "stylers": [{"visibility": "simplified"}]}, {"featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "all", "stylers": [{"color": "#ffffff"}, {"visibility": "on"}]}]
        //styles: [{"featureType":"all","elementType":"geometry","stylers":[{"gamma":"0.82"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"gamma":"1.21"}]},{"featureType":"all","elementType":"labels","stylers":[{"lightness":"-60"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"gamma":"5.37"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"color":"#419d8c"},{"lightness":"-39"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"saturation":"0"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#42738d"},{"gamma":"5.37"}]}]
        //styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
    
    },

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
		mapElement = document.getElementById('map'),
		
    // Create the Google Map using out element and options defined above
		map = new google.maps.Map(mapElement, mapOptions),
	//Custom Map Marker Icon
		image = new google.maps.MarkerImage(
        
			'img/blue-pin.png', //'img/pin.png',
			null, /* size is determined at runtime */
			null, /* origin is 0,0 */
			null, /* anchor is bottom center of the scaled image */
			new google.maps.Size(28, 37)
		),
		
	//NeuroTech Chapter markers
	//More recent Chapters are at the top!
		
	//Los Angeles
		neuroTechLAX = new google.maps.Marker({
			position: new google.maps.LatLng(34.0500, -118.2500),
			map: map,
			icon: image,
			title: 'NeuroTechLAX',
			animation: google.maps.Animation.DROP
		}),
		
		
	 
	//Paris
		neuroTechPAR = new google.maps.Marker({
			position: new google.maps.LatLng(48.8567, 2.3508),
			map: map,
			icon: image,
			title: 'NeuroTechPAR',
			animation: google.maps.Animation.DROP
		}),
		
    //Amsterdam
		neuroTechAMS = new google.maps.Marker({
			position: new google.maps.LatLng(52.3667, 4.9000),
			map: map,
			icon: image,
			title: 'NeuroTechAMS',
			animation: google.maps.Animation.DROP
		}),

    
	//Toronto
		neuroTechTO = new google.maps.Marker({
			position: new google.maps.LatLng(43.7000, -79.4000),
			map: map,
			icon: image,
			title: 'NeuroTechTO',
			animation: google.maps.Animation.DROP
		}),

	//New York City
		neuroTechNYC = new google.maps.Marker({
			position: new google.maps.LatLng(40.7127, -74.0059),
			map: map,
			icon: image,
			title: 'NeuroTechNYC',
			animation: google.maps.Animation.DROP
		}),

	//Tel-Aviv
		neuroTechTLV = new google.maps.Marker({
			position: new google.maps.LatLng(32.0667, 34.8000),
			map: map,
			icon: image,
			title: 'NeuroTechTLV',
			animation: google.maps.Animation.DROP
		}),
    
    
    
	//San Francisco
		neuroTechSF = new google.maps.Marker({
			position: new google.maps.LatLng(37.7833, -122.4167),
			map: map,
			icon: image,
			title: 'NeuroTechSF',
			animation: google.maps.Animation.DROP
		}),
		
	//Vancouver
		neuroTechVAN = new google.maps.Marker({
			position: new google.maps.LatLng(45.5017, -73.5673),
			map: map,
			icon: image,
			title: 'NeuroTechVAN',
			animation: google.maps.Animation.DROP
		}),

 //Pop-up window contents
		
 // Ana's notes: 
		//My code editor (Brackets + JSLint) wouldn't allow reassigning values of infowindow in and of their own,
		// so I made infowindow variables for each chapter, and all event listeners are in a block of their own. 
		// Please correct it if there's a better way to implement this.
		// Javascript isn't quite my forte.
 
    // neuroTechLAX
		contentLAX = '<div style="color: black;font-family: \"Helvetica Neue\";">'
		+ '<b>NeuroTechLAX</b><br>Los Angeles chapter of NeuroTechX<br>'
		+ '<b><a href="" target="_blank">lax.neurotechx.com</a></b></div>',
		
		infowindowLAX = new google.maps.InfoWindow({
			content: contentLAX
		}),
   
				
    // neuroTechPAR
		contentPAR = '<div style="color: black;font-family: \"Helvetica Neue\";">'
		+ '<b>NeuroTechNYC</b><br>Paris chapter of NeuroTechX<br>'
		+ '<b><a href="" target="_blank">par.neurotechx.com</a></b></div>',
		
		infowindowPAR = new google.maps.InfoWindow({
			content: contentPAR
		}),
		
		
    // neuroTechNYC
		contentNYC = '<div style="color: black;font-family: \"Helvetica Neue\";">'
		+ '<b>NeuroTechNYC</b><br>New York City chapter of NeuroTechX<br>'
		+ '<b><a href="http://meetup.com/NeuroTechNYC" target="_blank">nyc.neurotechx.com</a></b></div>',
		
		infowindowNYC = new google.maps.InfoWindow({
			content: contentNYC
		}),
		
    // neuroTechVAN
		contentVAN = '<div style="color: black;font-family: \"Helvetica Neue\";">'
        + '<b>NeuroTechVAN</b><br>Montréal chapter of NeuroTechX<br>'
        + '<b><a href="http://van.neurotechx.com" target="_blank">van.neurotechx.com</a></b></div>',
		infowindowVAN = new google.maps.InfoWindow({
			content: contentVAN
		}),

    // neuroTechTO
		contentTO = '<div style="color: black;font-family: \"Helvetica Neue\";">'
        + '<b>NeuroTechTO</b><br>Toronto chapter of NeuroTechX<br>'
        + '<b><a href="http://meetup.com/NeuroTechTO" target="_blank">to.neurotechx.com</a></b></div>',
		infowindowTO = new google.maps.InfoWindow({
			content: contentTO
		}),


    // neuroTechSF
		contentSF = '<div style="color: black;font-family: \"Helvetica Neue\";">'
        + '<b>NeuroTechSF</b><br>San Francisco chapter of NeuroTechX<br>'
        + '<b><a href="http://meetup.com/NeuroTechSF" target="_blank">sf.neurotechx.com</a></b></div>',
		infowindowSF = new google.maps.InfoWindow({
			content: contentSF
		}),
    
		
  // neuroTechAMS
		contentAMS = '<div style="color: black;font-family: \"Helvetica Neue\";">'
        + '<b>NeuroTechNYC</b><br>Amsterdam chapter of NeuroTechX<br>'
        + '<b><a href="http://meetup.com/NeuroTechAMS" target="_blank">ams.neurotechx.com</a></b></div>',
		infowindowAMS = new google.maps.InfoWindow({
			content: contentAMS
		}),
		
    // neuroTechTLV
		contentTLV = '<div style="color: black;font-family: \"Helvetica Neue\";">'
        + '<b>NeuroTechTLV</b><br>Tel-Aviv chapter of NeuroTechX<br>'
        + '<b><a href="http://brainihack.org" target="_blank">tlv.neurotechx.com</a></b></div>',
		infowindowTLV = new google.maps.InfoWindow({
			content: contentTLV
		});

	
	
	
	
	
	//google maps event listeners
	
	//ntLAX
	google.maps.event.addListener(neuroTechLAX, 'click', function () {
		infowindowLAX.open(map, neuroTechLAX);
    });

	//ntPAR
    google.maps.event.addListener(neuroTechPAR, 'click', function () {
		infowindowPAR.open(map, neuroTechPAR);
    });
	
	//ntNYC
    google.maps.event.addListener(neuroTechNYC, 'click', function () {
		infowindowNYC.open(map, neuroTechNYC);
    });
	
	//ntVAN
    google.maps.event.addListener(neuroTechVAN, 'click', function () {
		infowindowVAN.open(map, neuroTechVAN);
    });
	
	//ntTO
    google.maps.event.addListener(neuroTechTO, 'click', function () {
		infowindowTO.open(map, neuroTechTO);
    });
	
	//ntSF
	google.maps.event.addListener(neuroTechSF, 'click', function () {
		infowindowSF.open(map, neuroTechSF);
    });
	
	//ntAMS
    google.maps.event.addListener(neuroTechAMS, 'click', function () {
		infowindowNYC.open(map, neuroTechAMS);
    });
	
	//ntTLV
    google.maps.event.addListener(neuroTechTLV, 'click', function () {
		infowindowTLV.open(map, neuroTechTLV);
    });
	
}
