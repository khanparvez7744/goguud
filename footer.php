<a href="https://wa.me/9811501150" target="_blank"><img src="images/whatsapp.png" alt="whatsapp" class="responsive-img whatsappCorn"></a>
<!-- <a href="#"><img src="images/comments.png" alt="call" class="responsive-img callCorn"></a> -->
<footer class="page-footer">
    <div class="footer-top">
      <div class="row">
        <div class="col l5 m12 s12">
        <form method="post">
         <img src="images/footerLogo.png" alt="Logo" class="responsive-img">
         <div class="row footSignUp">
            <input type="text" class="form-control browser-default" name="email" required placeholder="Enter email id">
            <button class="btn" type="submit" name="subscribe">Subscribe</button>
          </div>
        </form>
        </div>
        <div class="col l4 m6 s12">
          <h5 class="Helvetica-Bold">Connect with Us</h5>
          <ul>
            <li><a class="" href="#!"><i class="fab fa-facebook"></i> &nbsp;&nbsp;Facebook</a></li>
            <li><a class="" href="#!"><i class="fab fa-twitter"></i> &nbsp;&nbsp;Twitter</a></li>
            <li><a class="" href="#!"><i class="fab fa-instagram"></i> &nbsp;&nbsp;Instagram</a></li>
            <li><a class="" href="#!"><i class="fab fa-youtube"></i> &nbsp;&nbsp;Youtube</a></li>
            <li><a class="" href="#!"><i class="fab fa-linkedin"></i> &nbsp;&nbsp;LinkedIn</a></li>
          </ul>
        </div>
        <div class="col l3 m6 s12">
          <h5 class="Helvetica-Bold">Important Links</h5>
          <ul>
            <li><a class="" href="faq.php">FAQ</a></li>
            <li><a class="" href="recipe.php">Guud Recipe</a></li>
            <li><a class="" href="policy.php">Privacy Policy</a></li>
            <li><a class="" href="terms.php">Terms & Conditions</a></li>
            <li><a class="" href="sitemap.php">Sitemap</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="left">
        <span>© 2022 Guud. All rights reserved.</span>
      </div>
      <div class="right">
        <span>Website designed & developed by <a href="https://www.sociapa.com/" target="_blank" class="">Sociapa</a>.</span>
      </div>
    </div>
  </footer>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
  AOS.init();
</script>
  <script src="js/script.js" type="text/javascript"></script>
  <?php
if(isset($_POST["subscribe"])){
    $email=$_POST["email"];
    $sql="insert into subscribe(email,created_at) values('$email',NOW())";
    if($pdo->query($sql)){
        echo "<script>swal('Thank You','','success');</script>";
        $to = "web@sociapa.com";
        $from       = 'Goguud Subscribe <no-reply@sociapainfluencer.com>';
        $fromname   = 'Goguud';
        $subject = "'You\'ve been contacted by $email";
        $headers = "From: ".$fromname." <".$from."> \r\n";
        $headers   .= "Reply-To: ". $email . "\r\n";
        $headers   .= "MIME-Version: 1.0\r\n";
        $headers   .= "Content-type: text/html; charset=utf-8\r\n";
        $headers   .= "X-Mailer: PHP". phpversion() ."\r\n" ;
        $msg  = "<table style='max-width:600px;width: 100%;'>\r\n\n";
        $msg .= "<tr><td>Email Address</td><td>:</td><td>".$email."</td></tr>\r\n\n";
        $msg .= "-----------------------------------------\r\n";
        $result= mail($to,$subject,$headers);
    }
    else{
       echo "<script>swal('Recoed Not Saved');</script>";
    }
}
?>
  </body>
</html>
