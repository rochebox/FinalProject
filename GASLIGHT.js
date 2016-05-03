


alert('hi!');

var picList = new Array(3);

var fButtonListener;
var bButtonListener;

var whichPic;

//this is the pic
	picList[0] = "images/pic1.jpg";
	picList[1] = "images/pic2.jpg";
	picList[2] = "images/pic3.jpg";



window.onload = function(){
	
	whichPic=0;
	document.getElementById('picid').src=picList[0];

	fButtonListener = document.getElementById("forwards");
	bButtonListener = document.getElementById("backwards");

	fButtonListener.addEventListener('click', function(event){
		++whichPic;
		if (whichPic>= picList.length){
			whichPic=0;
		};
		document.getElementById('picid').src=picList[whichPic];

	});

	bButtonListener.addEventListener('click', function(event){
		whichPic=whichPic-1;
		if (whichPic<0) {
			whichPic=picList.length-1;
		};

		document.getElementById('picid').src=picList[whichPic];
	});




};