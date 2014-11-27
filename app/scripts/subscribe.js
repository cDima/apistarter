
'use strict';
/*globals $:false, trackEvent:false */
/* email subscribe form */


$('.successsubscribe').hide();

$('.subscribe-form').submit(function(e) {
  var $this = $(this);
  $.ajax({
      type: 'POST', // GET & url for json slightly different
      url: 'https://APIStarter.us9.list-manage.com/subscribe/post-json?u=83c6f205a4379f5136e187d52&amp;id=e62d6b2ea2&c=?',
      data: $this.serialize(),
      dataType: 'jsonp',
      contentType: 'application/json; charset=utf-8',
      error: errorOnEmailSubmit,
      success: function(data) {
      	if (trackEvent !== undefined) {
      		trackEvent('button', 'click', 'subscribe-success', 0, false);
      	}
		if (data.result !== 'success') {
		  // Something went wrong, parse data.msg string and display message
		  errorOnEmailSubmit();
		} else {
		  // It worked, so hide form and display thank-you message.
		  $('.subscribe-form').removeClass('error'); 
		  $('.subscribe-form').addClass('ok'); 
		  $('.successsubscribe').show(); 
		  $('.subscribe-form').hide();               
		}
      }
  });
  return false;
});

function errorOnEmailSubmit(){
	$('.subscribe-form').addClass('error'); 
	$('.subscribe-form').addClass('shake');
	$('.subscribe-form').bind('oanimationend animationend webkitAnimationEnd', function() { 
		$('.subscribe-form').removeClass('shake');
	});
	if (trackEvent !== undefined) {
		trackEvent('button', 'click', 'subscribe-error', 0, false);
	}
}
 