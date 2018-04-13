// mainpage.js

(function($){
 
var skiNav = $('#ski_nav');
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




// allways_box안의 box제어
// 강습,체험 일떄에는 오른쪽 버튼만 생성되어 오른쪽으로만 이동
// 설문조사일떄는 왼쪽 버튼만 생성되게 만들어 왼쪽으로만 이동되게


var allwaysBox = $('#allways_box');
var lesson 		 = $('.lesson');
var reserach   = $('.reserach');
var btn        = allwaysBox.find('button');
var rbtn       = $('.rbtn');
var lbtn       = $('.lbtn');


reserach.slideUp();

rbtn.on('click' , function(e){
	e.preventDefault();
	lesson.slideUp();
	reserach.slideDown();
});
lbtn.on('click' , function(e){
	e.preventDefault();
	lesson.slideDown();
	reserach.slideUp();
});





// 3.hover&scroll
// mouse가 contnet에 hover시에만 스크롤로 이동되게

// var contentBox = $('#content_box');
// var contents = contentBox.children('div');
// console.log(contentWidth);  

// check_box제어 
// 선택한 메뉴 hover시에는 해당하는 메뉴가 커지면서 마우스가 각각 오른쪽 왼쪽으로 animation



})(this.jQuery); 
