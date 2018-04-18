// sport_alpiane.js

(function($){

var headBox = $('#head_box');
var guide = $('.guide');
var guideLi = guide.children('li');
var guideNar = $('.guide_nar');
var narChild = guideNar.children();



// banner

var bannerWrap = $('.banner_wrap').children('ul').children('li'); //banner_wrap의 ul의 자식 li 변수처리
var bannerIndicator = $('.banner_indicator').find('li');


guideLi.on('click', function(e){     //guide안에 li에서 선택한  메뉴 클릭시
	e.preventDefault();								//li의 이벤트 있는것을 방지처리
	
	var _this = $(this);							//guideLi
	var thisI = _this.index();				//guideLi의 값(개수) 파악
	// console.log(thisI);

	var view = _this.hasClass('active');  //guide안의 li에 있는 .active를 가져오기

	if(!view){
		_this.siblings().removeClass('active'); //li안에준  모든 .active 지우기
		_this.addClass('active'); 								

		guideNar.addClass('active');						//nar에도 동일하게 .active 주고 
		narChild.eq(thisI).addClass('active');	//.guideNar의 자식들(div)에도 모두 active 
		narChild.eq(thisI).siblings().removeClass('active'); //나머지는 .active 지우기

	}else{
		guideLi.removeClass('active');					//클릭하지 않았을때에는 모든 .active 값지우기
		guideNar.removeClass('active');
		narChild.removeClass('active');
	}

	bannerWrap.eq(thisI).siblings().removeClass('active');		//bannerWrap안에서 선택한것 외에 모든 active값 지우기
	bannerWrap.eq(thisI).addClass('active');								//선택한 li의 배너는 .active과 주기

	bannerIndicator.eq(thisI).siblings().removeClass('active');  //선택한 inddicator 외에는 .active지우기
	bannerIndicator.eq(thisI).addClass('active');									//선택한 idicaotor .active추가
});



bannerIndicator.on('click',function(e) {						//bannerindicator를 선택시 
	e.preventDefault();																//이벤트를 미리 방지해 중복성이 없게 하고
	var cator = $(this).index();											//indicator를 값을 파악해

	$(this).siblings().removeClass('active');					//해당하지 않은것 외에는 지우고
	$(this).addClass('active');												//선택한것에는 active 준다

	bannerWrap.eq(cator).siblings().removeClass('active');  //indicator로 제어할때는 선택한 indicator에 맞지 않은 banner는 지우고 
	bannerWrap.eq(cator).addClass('active');								//선택한 indicator에 맞는 banner는 active를 주기

});

// guide_nar이 나와 있을 때 guide의 선택에따라 banner와 indicator가 제어된다.
// -------------------------------------------------------------------






})(this.jQuery);