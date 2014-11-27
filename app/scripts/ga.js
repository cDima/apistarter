'use strict';

/* exported: trackEvent*/
/* jshint ignore:start */

//Google Analytics

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-32350099-1', 'auto');
ga('require', 'displayfeatures');
ga('send', 'pageview');


function trackEvent(category, action, label, value, nonInteraction) {
	if (nonInteraction === undefined) {
		nonInteraction = 1;
	}
	ga('send', 'event', category, action, {
		'nonInteraction': nonInteraction, 
		'label': label, 
		'value': value
	}); 
}

/* jshint ignore:end */