$(document).ready(function(){
	
	/*初始技能数量*/
	$(".sskill3").hide();
	$(".skill3").hide();
	
	/*名字与称号位置*/
	var nameleft=parseInt($(".name p").css("width"))/2+15;
	$(".name").css("left",nameleft+"px");
	var titleleft=parseInt($(".title p").css("width"))/2;
	$(".title").css("left",titleleft+"px");
	
	$("#preview").click(function(){
		
		/*名字、称号、技能、标签文本*/
		$(".name p").text($("#name").val());
		$(".title p").text($("#title").val());
		$(".camp p").text($("#camp").val());
		$(".skillname1 p").text($("#skillname1").val());
		$(".skillname2 p").text($("#skillname2").val());
		$(".skillname3 p").text($("#skillname3").val());
		$(".skilltext1 p").text($("#skilltext1").val());
		$(".skilltext2 p").text($("#skilltext2").val());
		$(".skilltext3 p").text($("#skilltext3").val());
		$(".skill1 span").text($("#tag1").val());
		$(".skill2 span").text($("#tag2").val());
		$(".skill3 span").text($("#tag3").val());

		/*名字与称号位置*/
		nameleft=parseInt($(".name p").css("width"))/2+15;
		$(".name").css("left",nameleft+"px");
		titleleft=parseInt($(".title p").css("width"))/2;
		$(".title").css("left",titleleft+"px");
		
		/*是否主公武将*/
		if ($("#lord").val()=="主公") {
			$(".lord").show();
		} else{
			$(".lord").hide();
		};
		
		/*性别*/
		var sexname=$("#sex").val();
		var sexurl="img/"+sexname+".png";
		$(".sex img").attr("src",sexurl);
		
		/*体力*/
		var hp1=parseInt($("#hp1").val());
		var hp2=parseInt($("#hp2").val());
		$(".hp p").text(hp1+"/"+hp2);
		if (hp2>9) {
			$(".hp p").css("font-size","16px");
		} else{
			$(".hp p").css("font-size","24px");
		}
		
		/*势力主题颜色*/
		switch($("#camp").val()){
			case "汉":
			$(".head").css("background-color","red");
			$(".marks").css("background-color","red");
			$(".mark").css("background-color","orange");
			$(".title p").css("color","rgba(255, 255, 0, 0.4)");
			break;
			case "魏":
			$(".head").css("background-color","dodgerblue");
			$(".marks").css("background-color","dodgerblue");
			$(".mark").css("background-color","purple");
			$(".title p").css("color","rgba(128, 0, 128, 0.4)");
			break;
			case "吴":
			$(".head").css("background-color","green");
			$(".marks").css("background-color","green");
			$(".mark").css("background-color","sienna");
			$(".title p").css("color","rgba(170, 85, 0, 0.4)");
			break;
			case "群":
			$(".head").css("background-color","black");
			$(".marks").css("background-color","black");
			$(".mark").css("background-color","dimgray");
			$(".title p").css("color","rgba(105, 105, 105, 1.0)");
		}	
			
	});
	
	/*技能数量*/
	$("#skill").change(function(){
		switch($("#skill").val()){
			case "1":
			$(".sskill2").hide();
			$(".sskill3").hide();
			$(".skill2").hide();
			$(".skill3").hide();
			break;
			case "2":
			$(".sskill2").show();
			$(".skill2").show();
			$(".sskill3").hide();
			$(".skill3").hide();
			break;
			case "3":
			$(".sskill2").show();
			$(".sskill3").show();
			$(".skill2").show();
			$(".skill3").show();
		}	
	});
	
	/*图片上传*/
	$("#img").change(function(){
		let file = $('#img').get(0).files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(result){
		    let newimg = $(".body img").get(0);
		    newimg.src = result.target.result;
		}
	})	

	/*图片下载*/
	$("#download").click(function(){
		alert("暂时无法完成呢");
	});

	
});