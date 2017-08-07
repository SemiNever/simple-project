//搜索栏

		var oInput=document.getElementById('search-text');
		var oBtn=document.getElementById('search-btn');
		var oA =document.getElementById('search-check');
		var oRadio =document.getElementById('baidu-radio');
		oBtn.onclick=function(){
			if(oRadio.checked==true)
			{
                 var temp=oInput.value;
			     var temp_href=oA.href;
			     temp_href+=temp;
                 oA.href=temp_href;
			}else{
		    var temp=oInput.value;
		    var temp1='&rsv_spt=1&rsv_iqid=0xbdd8abdf00010f24&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&rsv_t=0013LoYL989Atwbu3f3quIWO8byj4O/i8ZUJ4edkBXqVgMAqApu7+sKSSZd24tMNH0Iq&inputT=1870&si=cumt.edu.cn&ct=2097152';
			     var temp_href=oA.href;
			     temp_href+=temp;
			     temp_href+=temp1;
                 oA.href=temp_href;
			}
		}

   //图片切换
	var oPrev = document.getElementsByClassName('leftTri');
	var oNext = document.getElementsByClassName('rightTri');
	var oShowPage = document.getElementsByClassName('showPage');
	var oImg1 = document.getElementsByClassName('Img1');
	var oImg2 = document.getElementsByClassName('Img2');
	var oImg3 = document.getElementsByClassName('Img3');
	var oHeadline1 = document.getElementsByClassName('Headline1');
	var oHeadline2 = document.getElementsByClassName('Headline2');
	var oHeadline3 = document.getElementsByClassName('Headline3');
	var oImgweb1 = document.getElementsByClassName('imgweb1');
	var oImgweb2 = document.getElementsByClassName('imgweb2');
	var oImgweb3 = document.getElementsByClassName('imgweb3');
    var num1 = 0;
    var num2 = 0;
    var num3 = 0;
     var arrUrl1 = [ 'img/中间1-1.png', 'img/中间1-2.png', 'img/中间1-3.png', 'img/中间1-4.png' ];
     var arrUrl2 = [ 'img/中间1-1.png', 'img/中间1-2.png', 'img/中间1-3.png', 'img/中间1-4.png' ];
     var arrUrl3 = [ 'img/中间1-1.png', 'img/中间1-2.png', 'img/中间1-3.png', 'img/中间1-4.png' ];
	var arrText1 = [ '中国矿业大学第一届猫咪摄影大赛正式开始', 
	'点击参与报名！“中国矿业大学第一界壁纸制作大赛” 最高... ...',
	'周杰伦全球巡回演出徐州站门票免费放送中 ! ! !', 
	'陈奕迅全球巡回演出徐州站门票免费放送中 ! ! !' ,'444444','5555' ,'6666','7777',
	'8888'];
	var arrText2 = [ '2中国矿业大学第一届猫咪摄影大赛正式开始', 
	'2点击参与报名！“中国矿业大学第一界壁纸制作大赛” 最高... ...',
	'2周杰伦全球巡回演出徐州站门票免费放送中 ! ! !', 
	'2陈奕迅全球巡回演出徐州站门票免费放送中 ! ! !' ,'444','555' ,'666','777',
	'888'];
	var arrText3 = [ '3中国矿业大学第一届猫咪摄影大赛正式开始', 
	'3点击参与报名！“中国矿业大学第一界壁纸制作大赛” 最高... ...',
	'3周杰伦全球巡回演出徐州站门票免费放送中 ! ! !', 
	'3陈奕迅全球巡回演出徐州站门票免费放送中 ! ! !','44','55' ,'66','77',
	'88'];
	var arrweb1 = ['1-1','1-2','1-3','1-4','1-5','1-6','1-7','1-8','1-9'];
	var arrweb2 = ['2-1','2-2','2-3','2-4','2-5','2-6','2-7','2-8','2-9'];
	var arrweb3 = ['3-1','3-2','3-3','3-4','3-5','3-6','3-7','3-8','3-9'];


   function fnTab1(){
   	    for(var i=0;i<4;i++)
   	    {
   	    	oHeadline1[i].innerHTML = arrText1[4*num1+i];
            oImg1[i].src = arrUrl1[4*num1+i];
            oImgweb1[i].href = arrweb1[4*num1+i];
   	    }
		
		oShowPage[0].innerHTML = num1+1 + ' / ' +  Math.ceil(arrText1.length/4)+' 页';
	}
  function fnTab2(){
   	    for(var i=0;i<4;i++)
   	    {
   	    	oHeadline2[i].innerHTML = arrText2[4*num2+i];
            oImg2[i].src = arrUrl2[4*num2+i];
            oImgweb2[i].href = arrweb2[4*num2+i];
   	    }
		oShowPage[1].innerHTML = num2+1 + ' / ' +  Math.ceil(arrText1.length/4)+' 页';
	}
	 function fnTab3(){
   	    for(var i=0;i<4;i++)
   	    {

   	    	oHeadline3[i].innerHTML = arrText3[4*num3+i];
            oImg3[i].src = arrUrl3[4*num3+i];
            oImgweb3[i].href = arrweb3[4*num3+i];

   	    }
		oShowPage[2].innerHTML = num3+1 + ' / ' +  Math.ceil(arrText1.length/4)+' 页';
	}
  fnTab1();
  fnTab2();
  fnTab3();

  oPrev[0].onclick = function (){
		num1 --;
		if( num1 == -1 ){
				num1 = Math.ceil(arrText1.length/4)-1;
		}
		fnTab1();
	};
	oPrev[1].onclick = function (){
		num2 --;
		if( num2 == -1 ){
				num2 = Math.ceil(arrText2.length/4)-1;
		}
		fnTab2();
	};
	oPrev[2].onclick = function (){
		num3 --;
		if( num3 == -1 ){
				num3 = Math.ceil(arrText3.length/4)-1;
		}
		fnTab3();
	};

	oNext[0].onclick = function (){
		num1 ++;
		if( num1 == Math.ceil(arrText1.length/4)){
				num1 = 0;
		}
		fnTab1();
	};
	oNext[1].onclick = function (){
		num2 ++;
		if( num2 == Math.ceil(arrText2.length/4)){
				num2 = 0;
		}
		fnTab2();
	};
	oNext[2].onclick = function (){
		num3 ++;
		if( num3 == Math.ceil(arrText1.length/4)){
				num3 = 0;
		}
		fnTab3();
	};