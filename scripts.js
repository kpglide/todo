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
    	$('.instructions').show();

    	if (event.which == 13) {
        	new_text = $('#todo-input').val();
        	
        	if (!new_text == ''){
	        	new_elem = "<li>" + new_text + "<div class='x'>X</div>" + "</li>";
    	    	$('#todo').prepend(new_elem);
        		$('#todo-input').val('Type your to-do here & press enter');
        		$('#instructions').show();
        	}
        	$('li').on('dblclick', swipeleftHandler);
        	$('li').on('mouseenter', showDelete);
        	$('li').on('mouseleave', hideDelete);

        	$('.x').click(function() {
        		$(this).parent().remove();
        	});
    	}
    });

	function swipeleftHandler(event) {
   		//alert('this works');
    	if (!$(event.target).hasClass('swipe-left')) {
	    	$(event.target).addClass('swipe-left');
	    } else { $(event.target).removeClass('swipe-left'); }
    }

    function showDelete(event) {
    	$(event.target).children('.x').show();
    	$(event.target).children('.x').css('cursor', 'pointer');
    }

    function hideDelete(event) {
    	$(event.target).children('.x').hide();
    }
});