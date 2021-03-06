$(document).ready(function() {

	$('#todo-input').val('Type your to-do here & press enter');
	$('#todo-input').click(function() {
    		$(this).val('');
    	});

	var placeholder = $('#todo-input').val();
	$('#todo-input').keydown(function () {
		if (this.value == placeholder) {
			this.value = '';
		}
	});

	$('#instructions').hide();
	
	$('#todo-input').keyup(function(event) {

    	if (event.which == 13) {
        	new_text = $('#todo-input').val();
        	
        	if (!new_text == ''){
	        	new_elem = "<li>" + new_text + "<div class='x'>X</div>" + "</li>";
    	    	$('#todo').prepend(new_elem);
        		$('#todo-input').val('Type your to-do here & press enter');
        		$('#instructions').show();
        	}
    	}

    });

    $('ul').on('dblclick', 'li', doneHandler)
                .on('mouseenter', 'li', showDelete)
                .on('mouseleave', 'li', hideDelete);

    $('ul').on('click', '.x', function() {
        $(this).parent().remove();
    });

	function doneHandler(event) {
    	if (!$(event.target).hasClass('done')) {
	    	$(this).addClass('done');
	    } else { $(this).removeClass('done'); }
    }

    function showDelete(event) {
    	$(event.target).children('.x').show();
    	$(event.target).children('.x').css('cursor', 'pointer');
    }

    function hideDelete(event) {
    	$(event.target).children('.x').hide();
    }

});

//comment to test git