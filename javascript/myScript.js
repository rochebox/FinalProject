

window.onload = function(){
	
	var myIndex = 0;
	carousel();
    $('#nav1Div').addClass('inActive');

    $('#nav2Div').addClass('inActive');

    $('#nav3Div').addClass('inActive');

    $('#nav4Div').addClass('inActive');

    $('#nav5Div').addClass('inActive');

	function carousel() {
		var i;
		var x = document.getElementsByClassName("mySlides");
		for (i = 0; i < x.length; i++) {
			x[i].style.display = "none";  
		}
		myIndex++;
		if (myIndex > x.length) {myIndex = 1}    
			x[myIndex-1].style.display = "block";  
    		setTimeout(carousel, 2000); // Change image every 2 seconds
	}


	$("#navbaritem1").click(function(){
		$(dropcontent1).removeClass('inActive');
		$(dropcontent1).addClass('active');
		$(slideshow).hide(1000);
		$(dropcontent2).removeClass('active');
		$(dropcontent2).addClass('inActive');
		$(dropcontent3).removeClass('active');
		$(dropcontent3).addClass('inActive');
		$(dropcontent4).removeClass('active');
		$(dropcontent4).addClass('inActive');
		$(dropcontent5).removeClass('active');
		$(dropcontent5).addClass('inActive');

		$('#nav1Div').removeClass('inActive');
		$('#nav1Div').addClass('active');
		$('#nav2Div').removeClass('active');
		$('#nav2Div').addClass('inActive');
		$('#nav3Div').removeClass('active');
		$('#nav3Div').addClass('inActive');
		$('#nav4Div').removeClass('active');
		$('#nav4Div').addClass('inActive');
		$('#nav5Div').removeClass('active');
		$('#nav5Div').addClass('inActive');
	});

	$("#navbaritem2").click(function(){
		$(dropcontent2).removeClass('inActive');
		$(dropcontent2).addClass('active');
		$(slideshow).hide(1000);
		$(dropcontent1).removeClass('active');
		$(dropcontent1).addClass('inActive');
		$(dropcontent3).removeClass('active');
		$(dropcontent3).addClass('inActive');
		$(dropcontent4).removeClass('active');
		$(dropcontent4).addClass('inActive');
		$(dropcontent5).removeClass('active');
		$(dropcontent5).addClass('inActive');


		$('#nav2Div').removeClass('inActive');
		$('#nav2Div').addClass('active');
		$('#nav1Div').removeClass('active');
		$('#nav1Div').addClass('inActive');
		$('#nav3Div').removeClass('active');
		$('#nav3Div').addClass('inActive');
		$('#nav4Div').removeClass('active');
		$('#nav4Div').addClass('inActive');
		$('#nav5Div').removeClass('active');
		$('#nav5Div').addClass('inActive');
	});


	$("#navbaritem3").click(function(){
		$(dropcontent3).removeClass('inActive');
		$(dropcontent3).addClass('active');
		$(slideshow).hide(1000);
		$(dropcontent2).removeClass('active');
		$(dropcontent2).addClass('inActive');
		$(dropcontent1).removeClass('active');
		$(dropcontent1).addClass('inActive');
		$(dropcontent4).removeClass('active');
		$(dropcontent4).addClass('inActive');
		$(dropcontent5).removeClass('active');
		$(dropcontent5).addClass('inActive');

		$('#nav3Div').removeClass('inActive');
		$('#nav3Div').addClass('active');
		$('#nav1Div').removeClass('active');
		$('#nav1Div').addClass('inActive');
		$('#nav2Div').removeClass('active');
		$('#nav2Div').addClass('inActive');
		$('#nav4Div').removeClass('active');
		$('#nav4Div').addClass('inActive');
		$('#nav5Div').removeClass('active');
		$('#nav5Div').addClass('inActive');
	});


	$("#navbaritem4").click(function(){
		$(dropcontent4).removeClass('inActive');
		$(dropcontent4).addClass('active');
		$(slideshow).hide(1000);
		$(dropcontent2).removeClass('active');
		$(dropcontent2).addClass('inActive');
		$(dropcontent3).removeClass('active');
		$(dropcontent3).addClass('inActive');
		$(dropcontent1).removeClass('active');
		$(dropcontent1).addClass('inActive');
		$(dropcontent5).removeClass('active');
		$(dropcontent5).addClass('inActive');

		$('#nav4Div').removeClass('inActive');
		$('#nav4Div').addClass('active');
		$('#nav1Div').removeClass('active');
		$('#nav1Div').addClass('inActive');
		$('#nav3Div').removeClass('active');
		$('#nav3Div').addClass('inActive');
		$('#nav2Div').removeClass('active');
		$('#nav2Div').addClass('inActive');
		$('#nav5Div').removeClass('active');
		$('#nav5Div').addClass('inActive');
	});

	$("#navbaritem5").click(function(){
		$(dropcontent5).removeClass('inActive');
		$(dropcontent5).addClass('active');
		$(slideshow).hide(1000)
		$(dropcontent2).removeClass('active');
		$(dropcontent2).addClass('inActive');
		$(dropcontent3).removeClass('active');
		$(dropcontent3).addClass('inActive');
		$(dropcontent4).removeClass('active');
		$(dropcontent4).addClass('inActive');
		$(dropcontent1).removeClass('active');
		$(dropcontent1).addClass('inActive');

		$('#nav5Div').removeClass('inActive');
		$('#nav5Div').addClass('active');
		$('#nav1Div').removeClass('active');
		$('#nav1Div').addClass('inActive');
		$('#nav3Div').removeClass('active');
		$('#nav3Div').addClass('inActive');
		$('#nav4Div').removeClass('active');
		$('#nav4Div').addClass('inActive');
		$('#nav2Div').removeClass('active');
		$('#nav2Div').addClass('inActive');
	});




};







