new WOW().init();
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
        // $("#pricepic").attr("src","public/images/priceweb.jpg")
    }else{
        // 當視窗寬度小於768時執行
        $("#pri-nav").css({"display":"block"})
        $("#pri-nav").hide()
        // $("#pricepic").attr("src","public/images/price.jpg")

       
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

$("#search-btn").on("click",function(){
    if ($(this).hasClass("active")){
        $(this).removeClass("active")
        $("#searchbar-nav").slideToggle()
    }else{
        $(this).addClass("active")
        $("#searchbar-nav").slideToggle()
    }
})//menu-btn click end
let currentSlideOffset = 0

function next(){
    currentSlideOffset = currentSlideOffset - 320
    if (currentSlideOffset != -960){
        $(".card-group").animate({"margin-left": currentSlideOffset},400)
    }else{
        $(".card-group").animate({"margin-left": currentSlideOffset},400,function(){
            $(".card-group").css({"margin-left": 0})
        })
        currentSlideOffset = 0
    }
}

function prev(){
    currentSlideOffset = currentSlideOffset + 320
    if (currentSlideOffset < 0){
        $(".card-group").animate({"margin-left": currentSlideOffset},400)    
    }else{
        $(".card-group").animate({"margin-left": currentSlideOffset},400,function(){
            $(".card-group").css({"margin-left":0})
        })
        currentSlideOffset = 0
    }
}

$("#next").on("click",function(){
   next()
})//#next click end
$("#prev").on("click",function(){
    prev()
})//#prev click end


