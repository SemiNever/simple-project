
window.addEventListener("load", function(){
//使qq,微信达到hover效果。
	var aLabel=document.getElementsByClassName("hover");
	var aDiv=document.getElementsByClassName("QRcode");
	for(var i=0;i<aLabel.length;i++){
		aLabel[i].index=i;
		aLabel[i].onmousemove=function(){
			aDiv[this.index].style.display="block";
		}
		aLabel[i].onmouseleave=function(){
			aDiv[this.index].style.display="none";
		}

	}


//日历：
	var date=new Date();
	var year=date.getFullYear();
	var month=date.getMonth()+1;
	var date2=date.getDate();
	var day=date.getDay();
	var day2;
	switch(day){
		case 1:day2="一";break;
		case 2:day2="二";break;
		case 3:day2="三";break;
		case 4:day2="四";break;
		case 5:day2="五";break;
		case 6:day2="六";break;
		case 0:day2="日";break;
	}
	var string1=year+"年"+month+"月"+date2+"号";
	var string2="星期"+day2;
	var calendar=document.getElementsByClassName("calendar")[0];
	var aSpan=calendar.getElementsByTagName("span");
	aSpan[0].innerHTML=string1;
	aSpan[1].innerHTML=string2;
	showCal(aSpan[2]);

	//天气效果：

	var oWeather=document.getElementsByClassName("weather")[0];
	var aSpan=oWeather.getElementsByTagName("span");
	var request=new XMLHttpRequest();
	request.open("get","http://wthrcdn.etouch.cn/weather_mini?city=徐州");
	request.send();
	request.onload=function(){
				//alert(request.responseText);
		var json=JSON.parse(request.responseText);
		var todayType=json.data.forecast[0].type;
		var todayLow=json.data.forecast[0].low.split("温")[1].split("℃")[0];
		var todayHigh=json.data.forecast[0].high.split("温")[1];	
		var tomorrowType=json.data.forecast[1].type;
		var tomorrowLow=json.data.forecast[1].low.split("温")[1].split("℃")[0];
		var tomorrowHigh=json.data.forecast[1].high.split("温")[1];
		aSpan[2].innerHTML=todayType;
		aSpan[3].innerHTML=todayLow+"~"+todayHigh;
		aSpan[5].innerHTML=tomorrowType;
		aSpan[6].innerHTML=tomorrowLow+"~"+tomorrowHigh;
	}

});