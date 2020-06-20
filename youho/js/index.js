//轮播
var mySwiper = new Swiper ('.swiper-container', {
effect:'fade',//切换方式

direction: 'horizontal', // 垂直切换选项
loop:true,
autoplay:{ //自动轮播
	delay:2000, //轮播的时间间隔
	disableOnInteraction: false,//用户操作swiper也不会停止自动播放
},
speed:100,
// 如果需要分页器
pagination: {
  el: '.swiper-pagination',
},

// 如果需要前进后退按钮
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
},

// 如果需要滚动条
scrollbar: {
  el: '.swiper-scrollbar',
},
});

$(function(){
	$("nav").not(".first").mouseover(function(){
		console.log("a");
	});
});