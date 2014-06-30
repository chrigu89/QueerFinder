'use strict';

var init = {
	initialize: function() {

		console.log('init.initialize');

		if (document.location.protocol == "file:") {
			// file protocol indicates phonegap
			document.addEventListener("deviceready", init.onDeviceReady, false);
		} else {
			// browser on localhost, no phonegap
			init.onDomReady();
		}
	},
	onDeviceReady: function() {

		console.log('init.onDeviceReady ❤ running on DEVICE');
		navigator.splashscreen.hide();
		init.run();

		document.addEventListener("online", onOnline, false);
		document.addEventListener("offline", onOffline, false);
	},
	onDomReady: function() {
		console.log('init.onDomReady ❤ running on DESKTOP');
		init.run();
	},
	run: function() {

		console.log('init.run');
		//
		// 
	}
};

init.initialize();



function onOnline() {
	console.warn('NETWORK: Device is now online');
}

function onOffline() {
	console.warn('NETWORK: Device is now offline');
}
