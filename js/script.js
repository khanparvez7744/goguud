$(document).ready(function(){
  // start Blog
  $('#diabeticClk').hover(function(){
    $('#ulFaq li').removeClass('activeFaq');
    $(this).addClass('activeFaq');
    $('.diabeticUl').fadeIn();
    $('.fitnesUl').fadeOut();
    $('.helthUl').fadeOut();
    $('.pcosUl').fadeOut();
  });
  $('#fitnesClk').hover(function(){
    $('#ulFaq li').removeClass('activeFaq');
    $(this).addClass('activeFaq');
    $('.diabeticUl').fadeOut();
    $('.fitnesUl').fadeIn();
    $('.helthUl').fadeOut();
    $('.pcosUl').fadeOut();
  });
  $('#helthClk').hover(function(){
    $('#ulFaq li').removeClass('activeFaq');
    $(this).addClass('activeFaq');
    $('.diabeticUl').fadeOut();
    $('.fitnesUl').fadeOut();
    $('.helthUl').fadeIn();
    $('.pcosUl').fadeOut();
  });
  $('#pcosClk').hover(function(){
    $('#ulFaq li').removeClass('activeFaq');
    $(this).addClass('activeFaq');
    $('.diabeticUl').fadeOut();
    $('.fitnesUl').fadeOut();
    $('.helthUl').fadeOut();
    $('.pcosUl').fadeIn();
  });
  // end Blog
  // start faq
  $('#genericUl').fadeIn();
  $('#ayurUl').fadeOut();
  $('#vitaUl').fadeOut();
  $('#familyUl').fadeOut();
  $('#slimUl').fadeOut();
  $('#diaUl').fadeOut();
  $('#genericClk').hover(function(){
    $('#ulFaq li').removeClass('activeFaq');
    $(this).addClass('activeFaq');
    $('#genericUl').fadeIn();
    $('#ayurUl').fadeOut();
    $('#vitaUl').fadeOut();
    $('#familyUl').fadeOut();
    $('#slimUl').fadeOut();
    $('#diaUl').fadeOut();
  });
  $('#ayurClk').hover(function(){
    $('#ulFaq li').removeClass('activeFaq');
    $(this).addClass('activeFaq');
    $('#ayurUl').fadeIn();
    $('#genericUl').fadeOut();
    $('#vitaUl').fadeOut();
    $('#familyUl').fadeOut();
    $('#slimUl').fadeOut();
    $('#diaUl').fadeOut();
  });
  $('#vitaClk').hover(function(){
    $('#ulFaq li').removeClass('activeFaq');
    $(this).addClass('activeFaq');
    $('#vitaUl').fadeIn();
    $('#genericUl').fadeOut();
    $('#ayurUl').fadeOut();
    $('#familyUl').fadeOut();
    $('#slimUl').fadeOut();
    $('#diaUl').fadeOut();
  });
  $('#familyClk').hover(function(){
    $('#ulFaq li').removeClass('activeFaq');
    $(this).addClass('activeFaq');
    $('#familyUl').fadeIn();
    $('#genericUl').fadeOut();
    $('#ayurUl').fadeOut();
    $('#vitaUl').fadeOut();
    $('#slimUl').fadeOut();
    $('#diaUl').fadeOut();
  });
  $('#slimClk').hover(function(){
    $('#ulFaq li').removeClass('activeFaq');
    $(this).addClass('activeFaq');
    $('#slimUl').fadeIn();
    $('#genericUl').fadeOut();
    $('#ayurUl').fadeOut();
    $('#vitaUl').fadeOut();
    $('#familyUl').fadeOut();
    $('#diaUl').fadeOut();
  });
  $('#diaClk').hover(function(){
    $('#ulFaq li').removeClass('activeFaq');
    $(this).addClass('activeFaq');
    $('#diaUl').fadeIn();
    $('#genericUl').fadeOut();
    $('#ayurUl').fadeOut();
    $('#vitaUl').fadeOut();
    $('#familyUl').fadeOut();
    $('#slimUl').fadeOut();
  });
  // end faq
  // start home
  $('.homeBanner .carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });
  // end home
  $('.guudRangeCaro').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});
$('#ayurCardSec').hide();
$('#showProDdl').click(function(){
  $('#ayurCardSec').show();
});
$('#hideProDdl').click(function(){
  $('#ayurCardSec').hide();
});
  // start product information
  $('.collapsible').collapsible();
  // end product information
  $('#prdModal').modal();
    // start home carousel
    $('.homeSlidSec .carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true,
    });
    autoplay();
    function autoplay() {
        $('.homeSlidSec .carousel.carousel-slider').carousel('next');
        setTimeout(autoplay, 4500);
    }
    // start hide patrika logo
    if($(window).width()<=992){
      $('#hidePatrLogo').attr('src','images/logo2.png');
      $('#brand-logo').attr('href','index.php');
    }
    // end hide patrika logo
    // start post change ayur
    $('#ayurPostUl #ayurImg1').click(function(){
      $('#ayurLineSlider .line').removeClass('active');
      $('#ayurLine1').addClass('active');
      var post=$(this).attr('src');
      $('#ayurBig').attr('src',post);
    });
    $('#ayurPostUl #ayurImg2').click(function(){
      $('#ayurLineSlider .line').removeClass('active');
      $('#ayurLine2').addClass('active');
      var post=$(this).attr('src');
      $('#ayurBig').attr('src',post);
    });
    $('#ayurPostUl #ayurImg3').click(function(){
      $('#ayurLineSlider .line').removeClass('active');
      $('#ayurLine3').addClass('active');
      var post=$(this).attr('src');
      $('#ayurBig').attr('src',post);
    });
    $('#ayurPostUl #ayurImg4').click(function(){
      $('#ayurLineSlider .line').removeClass('active');
      $('#ayurLine4').addClass('active');
      var post=$(this).attr('src');
      $('#ayurBig').attr('src',post);
    });
    // end post change ayur
     // start line slider ayur
     $('#ayurLineSlider #ayurLine1').click(function(){
      $('#ayurBig').attr('src','images/ayurLeaf500.png')
      $('#ayurLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#ayurLineSlider #ayurLine2').click(function(){
      $('#faayurBig').attr('src','images/ayurPerfect500.png')
      $('#ayurLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#ayurLineSlider #ayurLine3').click(function(){
      $('#ayurBig').attr('src','images/ayurIngredient500.png')
      $('#ayurLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#ayurLineSlider #ayurLine4').click(function(){
      $('#ayurBig').attr('src','images/ayurNutritional500.png')
      $('#ayurLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    // end line slider ayur
    // start post change vita
    $('#vitaPostUl #vitaImg1').click(function(){
      $('#vitaLineSlider .line').removeClass('active');
      $('#vitaLine1').addClass('active');
      var post=$(this).attr('src');
      $('#vitaBig').attr('src',post);
    });
    $('#vitaPostUl #vitaImg2').click(function(){
      $('#vitaLineSlider .line').removeClass('active');
      $('#vitaLine2').addClass('active');
      var post=$(this).attr('src');
      $('#vitaBig').attr('src',post);
    });
    $('#vitaPostUl #vitaImg3').click(function(){
      $('#vitaLineSlider .line').removeClass('active');
      $('#vitaLine3').addClass('active');
      var post=$(this).attr('src');
      $('#vitaBig').attr('src',post);
    });
    $('#vitaPostUl #vitaImg4').click(function(){
      $('#vitaLineSlider .line').removeClass('active');
      $('#vitaLine4').addClass('active');
      var post=$(this).attr('src');
      $('#vitaBig').attr('src',post);
    });
    // end post change vita
    // start line slider vita
    $('#vitaLineSlider #vitaLine1').click(function(){
      $('#vitaBig').attr('src','images/vitaLeaf500.png')
      $('#vitaLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#vitaLineSlider #vitaLine2').click(function(){
      $('#vitaBig').attr('src','images/vitaPerfect500.png')
      $('#vitaLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#vitaLineSlider #vitaLine3').click(function(){
      $('#vitaBig').attr('src','images/vitaIngredient500.png')
      $('#vitaLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#vitaLineSlider #vitaLine4').click(function(){
      $('#vitaBig').attr('src','images/vitaNutritional500.png')
      $('#vitaLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    // end line slider vita
    // start post change family
    $('#familyPostUl #familyImg1').click(function(){
      $('#familyLineSlider .line').removeClass('active');
      $('#familyLine1').addClass('active');
      var post=$(this).attr('src');
      $('#familyBig').attr('src',post);
    });
    $('#familyPostUl #familyImg2').click(function(){
      $('#familyLineSlider .line').removeClass('active');
      $('#familyLine2').addClass('active');
      var post=$(this).attr('src');
      $('#familyBig').attr('src',post);
    });
    $('#familyPostUl #familyImg3').click(function(){
      $('#familyLineSlider .line').removeClass('active');
      $('#familyLine3').addClass('active');
      var post=$(this).attr('src');
      $('#familyBig').attr('src',post);
    });
    $('#familyPostUl #familyImg4').click(function(){
      $('#familyLineSlider .line').removeClass('active');
      $('#familyLine4').addClass('active');
      var post=$(this).attr('src');
      $('#familyBig').attr('src',post);
    });
    // end post change family
    // start line slider family
    $('#familyLineSlider #familyLine1').click(function(){
      $('#familyBig').attr('src','images/familyLeaf500.png')
      $('#familyLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#familyLineSlider #familyLine2').click(function(){
      $('#familyBig').attr('src','images/familyPerfect500.png')
      $('#familyLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#familyLineSlider #familyLine3').click(function(){
      $('#familyBig').attr('src','images/familyIngredient500.png')
      $('#familyLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#familyLineSlider #familyLine4').click(function(){
      $('#familyBig').attr('src','images/familyNutritional500.png')
      $('#familyLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    // end line slider family
    // start post change slim
    $('#slimPostUl #slimImg1').click(function(){
      $('#slimLineSlider .line').removeClass('active');
      $('#slimLine1').addClass('active');
      var post=$(this).attr('src');
      $('#slimBig').attr('src',post);
    });
    $('#slimPostUl #slimImg2').click(function(){
      $('#slimLineSlider .line').removeClass('active');
      $('#slimLine2').addClass('active');
      var post=$(this).attr('src');
      $('#slimBig').attr('src',post);
    });
    $('#slimPostUl #slimImg3').click(function(){
      $('#slimLineSlider .line').removeClass('active');
      $('#slimLine3').addClass('active');
      var post=$(this).attr('src');
      $('#slimBig').attr('src',post);
    });
    $('#slimPostUl #slimImg4').click(function(){
      $('#slimLineSlider .line').removeClass('active');
      $('#slimLine4').addClass('active');
      var post=$(this).attr('src');
      $('#slimBig').attr('src',post);
    });
    // end post change slim
    // start line slider slim
    $('#slimLineSlider #slimLine1').click(function(){
      $('#slimBig').attr('src','images/slimLeaf500.png')
      $('#slimLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#slimLineSlider #slimLine2').click(function(){
      $('#slimBig').attr('src','images/slimPerfect500.png')
      $('#slimLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#slimLineSlider #slimLine3').click(function(){
      $('#slimBig').attr('src','images/slimIngredient500.png')
      $('#slimLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#slimLineSlider #slimLine4').click(function(){
      $('#slimBig').attr('src','images/slimNutritional500.png')
      $('#slimLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    // end line slider slim
     // start post change dia
     $('#diaPostUl #diaImg1').click(function(){
      $('#diaLineSlider .line').removeClass('active');
      $('#diaLine1').addClass('active');
      var post=$(this).attr('src');
      $('#diaBig').attr('src',post);
    });
    $('#diaPostUl #diaImg2').click(function(){
      $('#diaLineSlider .line').removeClass('active');
      $('#diaLine2').addClass('active');
      var post=$(this).attr('src');
      $('#diaBig').attr('src',post);
    });
    $('#diaPostUl #diaImg3').click(function(){
      $('#diaLineSlider .line').removeClass('active');
      $('#diaLine3').addClass('active');
      var post=$(this).attr('src');
      $('#diaBig').attr('src',post);
    });
    $('#diaPostUl #diaImg4').click(function(){
      $('#diaLineSlider .line').removeClass('active');
      $('#diaLine4').addClass('active');
      var post=$(this).attr('src');
      $('#diaBig').attr('src',post);
    });
    // end post change dia
    // start line slider dia
    $('#diaLineSlider #diaLine1').click(function(){
      $('#diaBig').attr('src','images/diaLeaf500.png')
      $('#diaLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#diaLineSlider #diaLine2').click(function(){
      $('#diaBig').attr('src','images/diaPerfect500.png')
      $('#diaLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#diaLineSlider #diaLine3').click(function(){
      $('#diaBig').attr('src','images/diaIngredient500.png')
      $('#diaLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    $('#diaLineSlider #diaLine4').click(function(){
      $('#diaBig').attr('src','images/diaNutritional500.png')
      $('#diaLineSlider .line').removeClass('active');
      $(this).addClass('active');
    });
    // end line slider dia
  // start our root
    if($(window).width()<=600){
      $('#patrikaSec img').removeClass('right');
      $('.meetCont').addClass('center');
    }
  // end our root
    $('#talkFaq1').collapsible();
    $('#talkFaq2').collapsible();
  // start hide blog
    $("#demystifyingSec").hide();
    $("#demystifyingBtn").click(function(){
      $("#demystifyingSec").toggle('slow');
    });
    $("#amountSugSec").hide();
    $("#amountSugBtn").click(function(){
      $("#amountSugSec").toggle('slow');
    });
    $("#runnerNedSec").hide();
    $("#runnerNedBtn").click(function(){
      $("#runnerNedSec").toggle('slow');
    });
    $("#pcosSec").hide();
    $("#pcosBtn").click(function(){
      $("#pcosSec").toggle('slow');
    });
    $("#diabetesSec").hide();
    $("#diabetesBtn").click(function(){
      $("#diabetesSec").toggle('slow');
    });
  // end hide blog
   // start sticky navbar
   $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('#stickyNav').addClass('navbarFixed');
    }
    if ($(window).scrollTop() < 50) {
      $('#stickyNav').removeClass('navbarFixed');
    }
  });
  // end sticky navbar
  $('.squadSlide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
$('.testimoSec .owl-carousel').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});
$('#pooja-carousel').owlCarousel({
  loop:true,
  margin:50,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      1201:{
          items:2
      }
  }
});
$('.prodSlidSec .owl-carousel').owlCarousel({
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  loop:true,
  margin:0,
  nav:true,
  responsive:{
      0:{
          items:4
      }
  }
});
$('.gudWordSlid').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});
    if($(window).width()<=600){
        $('.footer-copyright .left').removeClass('left').addClass('center');
        $('.footer-copyright .right').removeClass('right').addClass('center');
    }
  $('.sidenav').sidenav();
  $('.recCarousel').carousel();
  $('.ayurRecCarousel').carousel();
  $('.ayurCardCarousel').carousel();
  $('.dropdown-trigger').dropdown();


  $(".ayurKnowJs").hide();
  $(".ayurKnowBtn").click(function(){
    $(".ayurKnowJs").toggle('slow');
  });


  $(".knowSecJs").hide();
  $(".knowBtnJs").click(function(){
    $(".knowSecJs").toggle('slow');
  });

  $(".arjunaSecJs").hide();
  $(".arjunaBtnJs").click(function(){
    $(".arjunaSecJs").toggle('slow');
  });

  $(".steviaSecJs").hide();
  $(".steviaBtnJs").click(function(){
    $(".steviaSecJs").toggle('slow');
  });

  $(".garciniaSecJs").hide();
  $(".garciniaBtnJs").click(function(){
    $(".garciniaSecJs").toggle('slow');
  });

  $(".tulsiSecJs").hide();
  $(".tulsiBtnJs").click(function(){
    $(".tulsiSecJs").toggle('slow');
  });

  $(".zinkSecJs").hide();
  $(".zinkBtnJs").click(function(){
    $(".zinkSecJs").toggle('slow');
  });

  $(".vitaminSecJs").hide();
  $(".vitaminBtnJs").click(function(){
    $(".vitaminSecJs").toggle('slow');
  });

  $(".vitaminDSecJs").hide();
  $(".vitaminDBtnJs").click(function(){
    $(".vitaminDSecJs").toggle('slow');
  });

  $(".ironSecJs").hide();
  $(".ironBtnJs").click(function(){
    $(".ironSecJs").toggle('slow');
  });

  $(".ashwaganSecJs").hide();
  $(".ashwaganBtnJs").click(function(){
    $(".ashwaganSecJs").toggle('slow');
  });

  $(".brahmiSecJs").hide();
  $(".brahmiBtnJs").click(function(){
    $(".brahmiSecJs").toggle('slow');
  });

  $(".erythriSecJs").hide();
  $(".erythriBtnJs").click(function(){
    $(".erythriSecJs").toggle('slow');
  });

  $(".punarnavaSecJs").hide();
  $(".punarnavaBtnJs").click(function(){
    $(".punarnavaSecJs").toggle('slow');
  });

  $(".magnesiumSecJs").hide();
  $(".magnesiumBtnJs").click(function(){
    $(".magnesiumSecJs").toggle('slow');
  });

  $(".steviaSecJs").hide();
  $(".steviaaBtnJs").click(function(){
    $(".steviaSecJs").toggle('slow');
  });

  $(".polydextroseSecJs").hide();
  $(".polydextroseBtnJs").click(function(){
    $(".polydextroseSecJs").toggle('slow');
  });

  $(".erythritolSecJs").hide();
  $(".erythritolBtnJs").click(function(){
    $(".erythritolSecJs").toggle('slow');
  });

  $('.stuffCarousel').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    responsive:{
        0:{
            items:2,
            margin:20

        },
        600:{
            items:2,
            margin:30
        },
        768:{
            items:3,
            margin:20
        },
        1200:{
            items:4,
            margin:30
        },
        1400:{
            items:4
        }
    }
});

$('.slimsmartCar').owlCarousel({
  loop:true,
  margin:50,
  nav:true,
  responsive:{
      0:{
          items:2,
          margin:20

      },
      600:{
          items:2,
          margin:30
      },
      768:{
          items:3,
          margin:20
      },
      1200:{
          items:4,
          margin:30
      },
      1400:{
          items:4
      }
  }
});
$('.steviaCarousel').owlCarousel({
  loop:true,
  margin:50,
  nav:true,
  responsive:{
      0:{
          items:2,
          margin:20

      },
      600:{
          items:2,
          margin:30
      },
      768:{
          items:3,
          margin:20
      },
      1200:{
          items:4,
          margin:30
      },
      1400:{
          items:4
      }
  }
});
$('.diafitCarousel').owlCarousel({
  loop:true,
  margin:50,
  nav:true,
  responsive:{
      0:{
          items:2,
          margin:20

      },
      600:{
          items:2,
          margin:30
      },
      768:{
          items:3,
          margin:20
      },
      1200:{
          items:4,
          margin:30
      },
      1400:{
          items:4
      }
  }
});


$('.ayurCarousel').owlCarousel({
  loop:true,
  responsive:{
      0:{
          items:1,
          margin:0
      },
      600:{
          items:2,
          margin:20
      },
      768:{
          margin:20,
          items:2
      },
      992:{
          items:3,
          margin:40
      },
      1200:{
          margin:50
      },
      1400:{
          margin:100
      },
      1600:{
          margin:200
      }
  }
});


$('.slimfitCarousel').owlCarousel({
  loop:true,
  margin:50,
  nav:true,
  responsive:{
      0:{
          items:2,
          margin:20

      },
      600:{
          items:2,
          margin:30
      },
      768:{
          items:3,
          margin:20
      },
      1200:{
          items:3,
          margin:30
      },
      1400:{
          items:3
      }
  }
});

$('.vitaCarousel').owlCarousel({
  loop:true,
  margin:50,
  nav:true,
  responsive:{
      0:{
          items:2,
          margin:20

      },
      600:{
          items:2,
          margin:30
      },
      768:{
          items:3,
          margin:20
      },
      1200:{
          items:3,
          margin:30
      },
      1400:{
          items:3
      }
  }
});


    // start move top
    window.onscroll = function () {
        if (pageYOffset >= 200) {
                document.getElementById('moveTop').style.visibility = "visible";
        }
        else {
                document.getElementById('moveTop').style.visibility = "hidden";
            }
     };
    // end move top
});
