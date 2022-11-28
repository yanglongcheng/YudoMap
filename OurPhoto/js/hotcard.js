window.addEventListener('load', function() {
	//获取元素
	var hotcardImages = document.querySelector("#hotcardImages");
	var nowcardImages = document.querySelector("#nowcardImages");
	var hotcard = hotcardImages.querySelectorAll('.card');
	// var nowcard = nowcardImages.querySelectorAll('.card');
	console.log(nowcardImages);
	var allCard = document.querySelectorAll(".card");
	var allmodal = document.querySelectorAll(".allmodal");

	for (var i = 0; i < allCard.length; i++) {
		//设置属性值
		var ItemImages = allCard.item(i).querySelectorAll("img");
		if (i <= hotcard.length) {
			allCard[i].setAttribute("data-toggle", "modal");
			allCard[i].setAttribute("data-target", "#hotcard");
			allCard[i].addEventListener('click', function() {
				console.log(allmodal);
				// 动态获取点击的卡片名字
				var Itemtext = this.querySelector('a');
				console.log(Itemtext);
				// 动态获取点击的卡片图片
				var ItemImages = this.querySelectorAll("img");
				// 动态获取点击的卡片标题
				var allTitle = this.querySelector("h5");
				//获取点赞数,评论数
				var allLikes = this.querySelectorAll("p");
				var allComment = this.querySelectorAll("span");
				console.log(i);
				//赋值模态框图片url 以及名字
				var UserimgPath = allmodal.item(0).querySelectorAll("img");
				var allComment = allmodal.item(0).querySelectorAll("span");
				var UserName = allmodal.item(0).querySelectorAll('h5');
				// console.log(comtUl);
				//赋值图片url
				UserimgPath[0].src = ItemImages[1].src;
				UserimgPath[1].src = ItemImages[0].src;
				UserimgPath[2].src = ItemImages[0].src;
				//赋值标题
				UserName.item(1).innerText = "“" + allTitle.innerText + "”";
				UserName.item(0).innerText = Itemtext.innerText;
				// 赋值点赞数评论数
				allComment[0].innerText = allLikes[0].innerText;
				allComment[3].innerText = allLikes[1].innerText;

				//判断图片高度是否超出并进行高度处理
				if (ItemImages[0].height > 500) {
					UserimgPath[1].style.width = (ItemImages[0].width) / 1.5 + 'px';
					UserimgPath[1].style.height = (ItemImages[0].height) / 1.5 + 'px';
				} else {
					UserimgPath[1].style.width = (ItemImages[0].width * 2) + 'px';
					UserimgPath[1].style.height = (ItemImages[0].height * 2) + 'px';
				}

				var close = allmodal.item(0).querySelector(".close");
				close.addEventListener('click', function() {
					comtUl.innerHTML = "";
					comtText.value = "";
				})

			})
		} else {
			allCard[i].setAttribute("data-toggle", "modal");
			allCard[i].setAttribute("data-target", "#nowcard");
			allCard[i].addEventListener('click', function() {
				console.log(allmodal);
				// 动态获取点击的卡片名字
				var Itemtext = this.querySelector('a');
				console.log(Itemtext);
				// 动态获取点击的卡片图片
				var ItemImages = this.querySelectorAll("img");
				// 动态获取点击的卡片标题
				var allTitle = this.querySelector("h5");
				//获取点赞数,评论数
				var allLikes = this.querySelectorAll("p");
				var allComment = this.querySelectorAll("span");
				console.log(i);
				//赋值模态框图片url 以及名字
				var UserimgPath = allmodal.item(1).querySelectorAll("img");
				var allComment = allmodal.item(1).querySelectorAll("span");
				var UserName = allmodal.item(1).querySelectorAll('h5');
				// console.log(comtUl);
				//赋值图片url
				UserimgPath[0].src = ItemImages[1].src;
				UserimgPath[1].src = ItemImages[0].src;
				UserimgPath[2].src = ItemImages[0].src;
				//赋值标题
				UserName.item(1).innerText = "“" + allTitle.innerText + "”";
				UserName.item(0).innerText = Itemtext.innerText;
				// 赋值点赞数评论数
				allComment[0].innerText = allLikes[0].innerText;
				allComment[3].innerText = allLikes[1].innerText;

				//判断图片高度是否超出并进行高度处理
				if (ItemImages[0].height > 500) {
					UserimgPath[1].style.width = (ItemImages[0].width) / 1.5 + 'px';
					UserimgPath[1].style.height = (ItemImages[0].height) / 1.5 + 'px';
				} else {
					UserimgPath[1].style.width = (ItemImages[0].width * 2) + 'px';
					UserimgPath[1].style.height = (ItemImages[0].height * 2) + 'px';
				}

				var close = allmodal.item(1).querySelector(".close");
				close.addEventListener('click', function() {
					comtUl.innerHTML = "";
					comtText.value = "";
				})
			})
		}


	}
	// 点赞功能
	var clicklike = allmodal.item(0).querySelector('#clicklike');
	var flag = 1;
	clicklike.addEventListener('click', function() {
		setTimeout(function() {
			var likesnum = clicklike.querySelector('span');
			var likecolor = clicklike.querySelector('i');
			if (flag == 1) {
				likecolor.style.color = '#ff0000';
				likesnum.textContent = parseInt(likesnum.textContent) + flag;
				return flag = 0;
			} else {
				likecolor.style.color = '#b6b6b6';
				likesnum.textContent = parseInt(likesnum.textContent) - 1;
				return flag = 1;
			}
		}, 100)
	})
	//留言模块
	var comtUl = allmodal.item(0).querySelector("form").querySelector("ul");
	var comtText = allmodal.item(0).querySelector("textarea");
	var sendBtn = allmodal.item(0).querySelector("form").querySelector("button");
	var cardalert = allmodal.item(0).querySelector('.cardalert');
	sendBtn.addEventListener('click', function() {
		console.log(1111);
		// 判断内容是否为空 为空弹出弹框
		if (comtText.value == '') {
			cardalert.style.display = "flex";
			setTimeout(function() {
				cardalert.style.height = "90%";
				cardalert.style.opacity = 1;
			}, 100)
			//为防止用户短时间多次点击按钮，在弹窗出来时进行禁用
			sendBtn.disabled = true;
			setTimeout(function() {
				cardalert.style.opacity = 0;
				cardalert.style.height = "100%";
				cardalert.style.display = "none";
				sendBtn.disabled = false;
			}, 2000)
			return false;
		} else {
			var li = document.createElement('li');
			li.innerHTML = comtText.value +
				'<a href="javascript:;" class="float-right text-danger">删除</a>';
			comtUl.insertBefore(li, comtUl.children[0]);
			var as = comtUl.querySelectorAll('a');
			for (var i = 0; i < as.length; i++) {
				as[i].onclick = function() {
					comtUl.removeChild(this.parentNode);
				}
			}
		}
	})
})
