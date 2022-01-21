
$(window).scroll(function(){
    if( $(window).scrollTop() > 30 ){
      $("header").addClass("active")
    }else{
      $("header").removeClass("active")
    }//if window scrollTop end
  })//window scroll end  


$(window).resize(function(){
    if( $(window).width() >= 768 ){
        // 當視窗寬度大於等於768時執行
        $("#pri-nav").css({"display":"flex"})
        $("#pricepic").attr("src","public/images/priceweb.jpg")
    }else{
        // 當視窗寬度小於768時執行
        $("#pri-nav").css({"display":"block"})
        $("#pri-nav").hide()
        $("#pricepic").attr("src","public/images/price.jpg")

       
    }
  })//window resize end

$(".menu-icon").on("click",function(){
    if ($(this).hasClass("active")){
        $(this).removeClass("active")
        $("#pri-nav").slideToggle()
    }else{
        $(this).addClass("active")
        $("#pri-nav").slideToggle()
    }
})//menu-btn click end

// 輪播


$(".card:last-child").clone().prependTo(".card-group")
$(".card").eq(1).clone().appendTo(".card-group")

let currentSlideOffset = -300

function next(){
    // 輪播的座標累減子項目寬度
    currentSlideOffset = currentSlideOffset - 300
    console.log(currentSlideOffset);
    //    第二層左邊界位移數字等同於currentSlideOffset

    //輪播的座標數字不等於-5700
    if(currentSlideOffset != -1200){
        $(".card-group").animate({"margin-left": currentSlideOffset},400)

    }else{
        //callback
        $(".card-group").animate({"margin-left": currentSlideOffset},400,function(){
            //動畫執行完才執行
            $(".card-group").css({"margin-left":-300})
        })
        currentSlideOffset = -300
    }//if currentSlideOffset end 
}//#next click end

function prev(){
    // 輪播的座標累加子項目寬度
    currentSlideOffset = currentSlideOffset + 300
    console.log(currentSlideOffset)
   
    if (currentSlideOffset == 0){
        $(".card-group").animate({"margin-left": currentSlideOffset},400,function(){
            $(".card-group").css({"margin-left":-1200})
        })//$(".slide_content").animate end
        currentSlideOffset = -1200
    }else{
        $(".card-group").animate({"margin-left": currentSlideOffset },400)     
    }

}//#prev click end


//按鈕事件，要放入click&計時器
$("#next").on("click",function(){
    next()
})//#next click end
$("#prev").on("click",function(){
    prev()
})//#prev click end

//loop function
function loop(){
    //放了setInterval計時器，依照間隔秒數執行
    setInterval(function(){
        next()
    },4000)
}//loop() end
// loop()

