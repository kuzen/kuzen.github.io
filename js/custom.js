$(document).ready(() => {
	
	$('.container').eq(1).click(function(event){
		event.stopPropagation();
	});   
	
    $('.section').on('click', () => {
		var timestamp = Date.parse(new  Date());
        $('.is-2-column').css('background-image', 'url(https://api.ixiaowai.cn/api/api.php?timestamp='+timestamp+')');
    });
});