$(document).ready(function() {

	$('#todo-input').keyup(function(event) {
    	if(event.which == 13) {
        	new_text = $('#todo-input').val();
        	if (!new_text == ''){
	        	new_elem = "<li>" + new_text + "</li>"
    	    	$('#todo').prepend(new_elem);
        		$('#todo-input').val('');
        	}
    	}
    });

});