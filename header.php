<?php
    require('conn.php');
    $conn= new dbconn();
    $pdo=$conn->connect();
?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guud</title>
  <link rel="shortcut icon" type="image/png" href="images/favicon.png">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
  <link href="css/mt-cuctom.css" type="text/css" rel="stylesheet" />
  <link href="css/owl-custom.css" type="text/css" rel="stylesheet" />
  <link href="css/fa-custom.css" type="text/css" rel="stylesheet" />
  <link href="css/style2.css" type="text/css" rel="stylesheet" />
  <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
  <link href="http://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
  <link rel="stylesheet" type="text/css" href="css/jquery-picZoomer.css">
  <style type="text/css">
    .piclist li {
      display: inline-block;
      width: 50px;
      height: 50px
    }

    .piclist li img {
      width: 100%;
      height: auto
    }

    .picZoomer-pic-wp,
    .picZoomer-zoom-wp {
      border: 0px solid #fff
    }
  </style>
  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script type="text/javascript" src="js/jquery.picZoomer.js"></script>
  <script type="text/javascript">
    $(function () {
      $('.picZoomer').picZoomer();
    });
  </script>
</head>

<body>
  <div class="row stickybar">
    <div class="col s12">
      <div class="left">
        <span class="emailSpan">
          <i class="fa fa-envelope"></i> <a href="mailto:care@goguud.com">&nbsp;care@goguud.com</a>
        </span>
        <span class="phoneSpan">
          <i class="fa fa-phone"></i> <a href="tel:91-9116771122">&nbsp;91-9116771122</a>
        </span>
      </div>
      <div class="right">
        <span>Follow us on &nbsp;- </span>
        <span class="fbSocial">
          <a href="#"><i class="fab fa-facebook"></i></a>
        </span>
        <span>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </span>
      </div>
    </div>
  </div>
  <header id="stickyNav">
    <nav>
      <div class="nav-wrapper">
        <a href="our-root.php" class="brand-logo right" id="brand-logo">
          <img src="images/patrikaMenu.png" alt="" class="responsive-img logo" id="hidePatrLogo">
        </a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul class="hide-on-med-and-down mainMenuUl" style="color:red;font-size:40px;">
          <li>
            <a href="index.php">
              <img src="images/logo2.png" alt="logo" class="responsive-img gudLogo">
            </a>
          </li>
          <li>
            <a href="#" data-target="ddlMeet" class="dropdown-trigger clickMeet">Meet Guud &nbsp;<i
                class="fa fa-chevron-down"></i></a>
            <ul id='ddlMeet' class='dropdown-content ulMeet'>
              <li><a href="our-root.php">Our Roots</a></li>
              <li class="divider" tabindex="-1"></li>
              <li><a href="vision.php">Vision & Mission</a></li>
            </ul>
          </li>
          <li>
            <a href="#prdModal" class="modal-trigger">Guud Products &nbsp;<i class="fa fa-chevron-down"></i></a>
          </li>
          <li>
            <a href="guud-words.php">Guud Words</a>
          </li>
          <li><a href="blog.php">Blog</a></li>
          <li><a href="ping.php">Contact Us</a></li>

        </ul>
        <form method="post" action="search.php" class="d-flex searchForm">
          <input type="search" placeholder="Search..." required="" name="search" class="browser-default">
          <button class="btn btnSearch" type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    </nav>
    <ul class="sidenav" id="mobile-demo">
      <li>
        <a href="#" data-target="ddlMeetMob" class="dropdown-trigger clickMeet">Meet Guud</a>
        <ul id='ddlMeetMob' class='dropdown-content ulMeet'>
          <li><a href="our-root.php">Our Roots</a></li>
          <li class="divider" tabindex="-1"></li>
          <li><a href="vision.php">Vision and Mission</a></li>
        </ul>
      </li>
      <li>
        <a href="sugar.php" class="dropdown-trigger" data-target="ddlSquadMob">Guud Product</a>
        <ul id='ddlSquadMob' class='dropdown-content'>
          <li><a href="ayursugar.php">Ayur Sugar</a></li>
          <li class="divider" tabindex="-1"></li>
          <li><a href="vitasugar.php">Vita Sugar</a></li>
          <li class="divider" tabindex="-1"></li>
          <li><a href="familyfitsugar.php">Family-Fit Sugar</a></li>
          <li class="divider" tabindex="-1"></li>
          <li><a href="slimfitsugar.php">Slim-Fit Sugar</a></li>
          <li class="divider" tabindex="-1"></li>
          <li><a href="diafitsugar.php">Dia-Fit Sugar</a></li>
        </ul>
      </li>
      <li>
        <a href="guud-words.php">Guud Words</a>
      </li>
      <li><a href="blog.php">Blog</a></li>
      <li><a href="ping.php">Contact Us</a></li>
    </ul>
    <div id="prdModal" class="modal prdModal">
      <div class="modal-content">
        <div class="row">
          <div class="col s4 center">
            <a href="ayursugar.php">
              <img src="images/ayurMenu.jpg" alt="AYUR SUGAR" class="responsive-img">
              <h6>AYUR SUGAR</h6>
              <p>Enriched with Herbs</p>
            </a>
          </div>
          <div class="col s4 center">
            <a href="vitasugar.php">
              <img src="images/vitaMenu.jpg" alt="VITA SUGAR" class="responsive-img">
              <h6>VITA SUGAR</h6>
              <p> Fortified with micronutrients</p>
            </a>
          </div>
          <div class="col s4 center">
            <a href="familyfitsugar.php">
              <img src="images/familyMenu.jpg" alt="FAMILY-FIT SUGAR" class="responsive-img">
              <h6>FAMILY-FIT SUGAR</h6>
              <p>Lab Tested Low GI
              </p>
            </a>
          </div>
          <div class="col s4 center">
            <a href="slimfitsugar.php">
              <img src="images/slimfitMenu.jpg" alt="SLIM-FIT SUGAR" class="responsive-img">
              <h6>SLIM-FIT SUGAR</h6>
              <p>Contains 50% Less Calories
              </p>
            </a>
          </div>
          <div class="col s4 center">
            <a href="diafitsugar.php">
              <img src="images/diafitMenu.jpg" alt="DIA-FIT SUGAR" class="responsive-img">
              <h6>DIA-FIT SUGAR</h6>
              <p>Contains 60% Less Calories
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>