"use strict";

jQuery(document).ready(function ($) {
	jQuery("#enviarSubmit").click(function (event) {
		event.preventDefault();
		var margin = jQuery(".group-chat-input:first-child").css('margin-top');
		var number = margin.replace('px', '');
		number = number - 170;
		if (number >= -1620) {
			jQuery(".group-chat-input:first-child").css('margin-top', number + 'px');
		}
	});
});
//# sourceMappingURL=../maps/test.js.map
