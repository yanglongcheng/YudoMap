window.onload = function() {
	// topImg();
	var adTime = 5;

	function topImg() {
		var topimg = document.querySelector('.topAdImage');
		topimg.style.display = 'none';
	}
	closeAd();
	var timer = setInterval(closeAd, 1000);

	function closeAd() {
		if (adTime == 0) {
			clearInterval(timer);
			topImg();
			adTime = 5;
		} else {
			var closeAd = document.querySelector('#closeAd');
			closeAd.innerHTML = adTime + '秒后自动关闭';
			adTime--;
		}
	}
}
