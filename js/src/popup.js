// popup.js
(function($){

var body = $('body');
// body 내부에 팝업상자 만들기
body.prepend('<div id="popup_box"><div class="pop_in"><button tabindex="0" type="button">닫기</button><p></p></div></div>');
var popup = $('#popup_box');
var popIn = popup.children('.pop_in');
popup.css({position:'fixed', top:0, left:0 , zIndex:5000, backgroundColor:'rgba(255,255,255,0.8)',
		   boxShadow:'0 0.3rem 0.3rem #333', width:'100%',  height:'auto',
		   boxSizing:'border-box', padding:'1rem'});
popIn.css({width:'auto' ,maxWidth:'960px', margin:'auto', border:'5px solid', padding:'2rem'});

var closeBtn = popIn.find('button');
closeBtn.css({padding:'0.5rem', backgroundColor:'#f06', color:'#fff', fontweight:'bold',
			borderRadius:'0.3rem', float:'right'});
closeBtn.on('focus',function() {$(this).css({backgroundColor:'#0ac'});});
closeBtn.on('blur',function(){$(this).css({backgroundColor:'#f06'});});
closeBtn.on('click',function(e){e.preventDefault();popup.remove();});

var narr = popIn.find('p');
narr.html('본 사이트는 어떠한 경우라도 상업 및 영리를 목적으로 제작돤 페이지가 아니며,취업 목적으로 한 개인 포트폴리오 사이트 임을 알려드립니다문제가 되건, 삭제를 요구하신다면 메일로 연락주시면 조치를 취하도록 하겠습니다시용된 이미지의 출처는 아래링크를 통해 학인하세요<a href = "./imgLink.html" target=_blank">이미지 출처 획인하기</a>')
narr.find('a').css({color:'f06', fontWeight:'bold'});
narr.find('a').on('focus',function() {
	$(this).css({color:'#fff', outline:0, padding:'0.3rem', borderRadius:'0.2rem'});

});
narr.find('a').on('blur',function() {
	$(this).css({color:'#f06'});
});


$(window).on('scroll', function() {
var scrollResult = $(this).scrollTop();
(scrollResult => 50) ? popup.slideUp(300) :popup.slideDown(300);
});

})(jQuery);