$(function(){
    let banerBox = $(".banner-con");
    let imgs = $(".banner-con img");
    //console.log(imgs);
    let point = $(".triggers a");
    let lbtn = $(".btnl");
    let rbtn = $(".btnr");

    // 设置当前下标的参数
    let index = 0;
    // 定时器参数
    let timer = null;
    
    lbtn.click(function(){
        index --;
        if(index == -1){
            index = imgs.length - 1;
        }
        imgs.eq(index).css("opacity",1);
        imgs.eq(index).parents("li").siblings().find("img").css("opacity",0);

        point.eq(index).css("background","#000");
        point.eq(index).siblings().css("background","#ccc");
    })

    rbtn.click(function(){
        index ++;
        if(index == imgs.length){
            index = 0;
        }
        imgs.eq(index).css("opacity",1);
        imgs.eq(index).parents("li").siblings().find("img").css("opacity",0);

        point.eq(index).css("background","#000");
        point.eq(index).siblings().css("background","#ccc");
    })


    lbtn.hover(function(){
        $(this).css("background","#000");
    },function(){
        $(this).css("background","#ccc");
    })

    rbtn.hover(function(){
        $(this).css("background","#000");
    },function(){
        $(this).css("background","#ccc");
    })

    point.click(function(){
        let index2 = $(this).index();
        imgs.eq(index2).css("opacity",1);
        imgs.eq(index2).parents("li").siblings().find("img").css("opacity",0);

        point.eq(index2).css("background","#000");
        point.eq(index2).siblings().css("background","#ccc");
        index = index2;
    })

    function autoplay(){
        index ++;
        if(index == imgs.length){
            index = 0;
        }

        imgs.eq(index).css("opacity",1);
        imgs.eq(index).parents("li").siblings().find("img").css("opacity",0);

        point.eq(index).css("background","#000");
        point.eq(index).siblings().css("background","#ccc");
    }

    function slide(){
        timer = setInterval(function(){
            autoplay();
        },2000)
    }
    
    slide();
    
    banerBox.hover(function(){
        clearInterval(timer);
    },function(){
        slide();
    })
})