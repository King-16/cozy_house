$(document).ready(function(){$(".btn").on("click","a",function(e){e.preventDefault();var a=$(this).attr('href'),r=$(a).offset().top;$('body,html').animate({scrollTop:r},1500)})}),$(document).ready(function(){var e=$(".header");$(window).scroll(function(){$(this).scrollTop()>80&&e.hasClass("no__fixed")?e.removeClass("no__fixed").addClass("fixed"):$(this).scrollTop()<=80&&e.hasClass("fixed")&&e.removeClass("fixed").addClass("no__fixed")})}),$(document).ready(function(){$('.friend__wrapper').slick({dots:!1,arrows:!0,prevArrow:'<div class="friend__arrows_item"><img src="img/arrow__left.svg" alt="arrow"></div>',nextArrow:'<div class="friend__arrows_item"><img src="img/arrow__right.svg" alt="arrow"></div>',infinite:!1,autoplay:!0,autoplaySpeed:5e3,slidesToShow:3,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:2,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:720,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,arrows:!1,infinite:!0}}]})}),new WOW.init(),$(document).ready(function(){$("form").submit(function(){var e=$(this);$.ajax({type:"POST",url:"../mail.php",data:e.serialize()}).done(function(){alert("Thank you!");setTimeout(function(){e.trigger("reset")},1e3)});return!1})}),$(document).ready(function(){$('.header__burger').click(function(){$(this).toggleClass('active');$('.header__menu').toggleClass('active');$('body').toggleClass('lock');$('.overlay').toggleClass('active')})})