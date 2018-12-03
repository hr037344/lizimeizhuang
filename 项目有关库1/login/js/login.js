$(function(){
	//给登录按钮加点击事件
	$("#login").click(function(){
		//获取用户输入的用户名和密码
		var usn = $("#username").val();
		var pwd = $("#password").val();
		
		//校验用户名和密码是否正确
		//获取到cookie中的用户信息
		var users = $.cookie("registerUsers") ? $.cookie("registerUsers") : "";
		//将字符串转为对象
		users = convertStrToObj(users);
		
		if(users[usn] == pwd){
			//登录成功
			$.cookie("loginedUsers",usn,{expires:7,path:"/"});
			console.log("登录成功!");
			location.href = "index.html";
		}else{
			//登录失败
			alert("用户名和密码不匹配，请确认后重试！");
		}
	});
	$("#goRegister").click(function(){
		//跳转到注册页
		location.href = "register.html";
	});
});
//将字符串转为对象
function convertStrToObj(str){
	if(!str){ //如果是空字符串
		return {}; //返回空对象
	}
	var users = str.split(":");
	var obj = {};
	for(var i = 0; i < users.length; i ++){
		var userData = users[i].split(",");
		obj[userData[0]] = userData[1];
	}
	return obj;
}

//将对象转为字符串
function convertObjToStr(obj){
	var str = "";
	//遍历对象
	for(var usn in obj){
		var pwd = obj[usn];
		if(str){
			str += ":";
		}
		str += usn + ',' + pwd;
	}
	return str;
}
