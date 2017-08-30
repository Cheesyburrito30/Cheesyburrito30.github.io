$(function(){

	$("#Github").mouseover(function(){
		$(this).attr('src', './public/images/GitHub-Mark-Light-32px.png')
	})
	$("#Github").mouseleave(function(){
		$(this).attr('src', './public/images/GitHub-Mark-32px.png')
	})

	$("#linkedIn").mouseover(function(){
		$(this).attr('src', './public/images/social-linkedin-box-white-icon.png')
	})
	$("#linkedIn").mouseleave(function(){
		$(this).attr('src', './public/images/linkedin-logo.svg')
	})
})