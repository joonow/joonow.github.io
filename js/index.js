$(document).ready(function(){
	
	//图片上传
	$("#img").change(function(){
		let file = $('#img').get(0).files[0];
		let reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(result){
		    let img = $(".img").get(0);
		    img.src = result.target.result;
		};
	});
	
	//图片大小
	$("#size").change(function(){
		switch($("#size").val()){
			case "w":
			$(".img").css("width","500px");
			$(".img").css("height","auto");
			/*$("#site1").removeAttr("disabled");
			$("#site2").attr("disabled","true");*/
			break;
			case "h":
			$(".img").css("width","auto");
			$(".img").css("height","650px");
			/*$("#site2").removeAttr("disabled");
			$("#site1").attr("disabled","true");*/
		}
	});
		
	//图片垂直位置
	var ph;
	$("#site1").change(function(){
		ph=parseInt($(".img").css("height"));
		ch=0-(ph-650)/2;
		switch($("#site1").val()){
			case "b":
			$(".img").css("bottom","0");
			$(".img").css("top","auto");
			break;
			case "t":
			$(".img").css("bottom","auto");
			$(".img").css("top","50px");
			break;
			case "c":
			$(".img").css("bottom",ch+"px");
			$(".img").css("top","auto");
		}
	});
	
	//图片水平位置
	var pw;
	$("#site2").change(function(){
		pw=parseInt($(".img").css("width"));
		cw=0-(pw-500)/2;
		switch($("#site2").val()){
			case "l":
			$(".img").css("left","0");
			$(".img").css("right","auto");
			break;
			case "r":
			$(".img").css("left","auto");
			$(".img").css("right","0");
			break;
			case "c":
			$(".img").css("left",cw+"px");
			$(".img").css("right","auto");
		}
	});

	//势力
	$("#camp").change(function(){
		$(".camp p").text($("#camp").val());
		
		//势力主题颜色
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
			$(".head").css("background-color","rgb(57, 57, 57)");
			$(".marks").css("background-color","dimgray");
			$(".mark").css("background-color","gray");
			$(".title p").css("color","rgba(128, 128, 128, 0.4)");
		};
	
	});
	
	//主题颜色
	var c1;
	var c2;
	$("#color1").change(function(){
		c1=$("#color1").val();
		$(".head").css("background-color",c1);
		$(".marks").css("background-color",c1);
	});
	$("#color2").change(function(){
		c2=$("#color2").val();
		$(".title p").css("color",c2);
		$(".mark").css("background-color",c2);
	});
	
	//是否主公
	$("#lord").change(function(){
		if ($("#lord").val()=="主公") {
			$(".lord").show();
		} else{
			$(".lord").hide();
		};
	});
	
	//性别
	$("#sex").change(function(){
		$(".sex p").text($("#sex").val());
	});
	
	//体力
	var hp1;
	var hp2;
	$("#hp1").change(function(){
		hp1=$("#hp1").val();
		hp2=$("#hp2").val();
		$(".hp p").text(hp1+"/"+hp2);
		if (hp2>9) {
			$(".hp p").css("font-size","14px");
		} else{
			$(".hp p").css("font-size","20px");
		}
	});
	$("#hp2").change(function(){
		hp1=$("#hp1").val();
		hp2=$("#hp2").val();
		$(".hp p").text(hp1+"/"+hp2);
		if (hp2>9) {
			$(".hp p").css("font-size","14px");
		} else{
			$(".hp p").css("font-size","20px");
		}
	});
	
	//名字
	var namesite;
	$("#name").change(function(){
		$(".name p").text($("#name").val());
		namesite=parseInt($(".name p").css("width"))/2+15;
		$(".name").css("left",namesite+"px");
	});
	
	//称号
	var titlesite;
	$("#title").change(function(){
		$(".title p").text($("#title").val());
		titlesite=parseInt($(".title p").css("width"))/2;
		$(".title").css("left",titlesite+"px");
	});
	
	//技能数量
	$(".sskill3").hide();
	$(".skill3").hide();
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
	
	//技能名字
	$("#skillname1").change(function(){
		$(".skillname1 p").text($("#skillname1").val());
	});
	$("#skillname2").change(function(){
		$(".skillname2 p").text($("#skillname2").val());
	});
	$("#skillname3").change(function(){
		$(".skillname3 p").text($("#skillname3").val());
	});
	
	// 技能标签
	$("#tag1").change(function(){
		$(".skill1 span").text($("#tag1").val());
	});
	$("#tag2").change(function(){
		$(".skill2 span").text($("#tag2").val());
	});
	$("#tag3").change(function(){
		$(".skill3 span").text($("#tag3").val());
	});
	
	//技能描述
	$("#skilltext1").change(function(){
		$(".skilltext1 p").html($("#skilltext1").val());
	});
	$("#skilltext2").change(function(){
		$(".skilltext2 p").html($("#skilltext2").val());
	});
	$("#skilltext3").change(function(){
		$(".skilltext3 p").html($("#skilltext3").val());
	});
	
	//图片下载
	$("#download").click(function(){
		alert("暂时无法完成呢");
	});
	
	
});