$(document).mousemove(function(e){
    $("#jedface").css({left:e.pageX, top:e.pageY});
});

$(document).on('ready', function(){
	var $theTitle = $('#theTitle'),
		$theSubtitle = $('#theSubtitle'),
		odd = true;

	setInterval(function() {
		if (odd) {
			$theTitle.animate({
				'font-size': '100px'
			}, 2000);
		} else {
			$theTitle.animate({
				'font-size': '2em'
			}, 2000);
		}
		odd = !odd;
	}, 2000);

});
