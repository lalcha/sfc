jQuery(document).ready(function(){

	$('#contactform').submit(function(){

		var action = $(this).attr('action');

		$("#message").fadeOut(200,function() {
		$('#message').hide();

 		$('#submit')
			.attr('disabled','disabled');

		$.post(action, {
			name: $('#name').val(),
			email: $('#email').val(),
			comments: $('#comments').val()
		},
			function(data){
				document.getElementById('message').innerHTML = data;
				$('#message').fadeIn(200);
				$('.hide').hide(0);
				$('#submit').removeAttr('disabled');
//				if(data.match('success') != null) $('#contactform').fadeOut('slow');

			}
		);

		});

		return false;

	});

});