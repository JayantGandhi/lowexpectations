$(document).mousemove(function(e){
    $("#jedface").css({left:e.pageX, top:e.pageY});
});

$(document).on('ready', function(){
	var $theTitle = $('#theTitle'),
		$theSubtitle = $('#theSubtitle'),
		$links = $('a'),
		odd = true;
	console.log($links);
	$links.mouseover(function() {
		console.log("EEEK~!");
        var dWidth = 400, // 100 = image width
            dHeight = 400, // 100 = image height
            nextX = Math.floor(Math.random() * dWidth),
            nextY = Math.floor(Math.random() * dHeight);
        $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
    });

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
