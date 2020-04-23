$(document).ready(() => {
    $('#back-to-top').on('click', () => {
        $('body, html').animate({ scrollTop: 0 }, 400);
    });
	
	$('.container').eq(1).click(function(event){
		event.stopPropagation();
		return false;
	});   
	
    $('.section').on('click', () => {
		var timestamp = Date.parse(new  Date());
        $('.is-2-column').css('background-image', 'url(https://api.ixiaowai.cn/api/api.php?timestamp='+timestamp+')');
    });


});