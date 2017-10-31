var fullscreen = document.getElementById('fullscreen');
fullscreen.addEventListener('click',function() {
	document.webkitRequestFullscreen();
	alert("Going FullScreen Mode!");
});
