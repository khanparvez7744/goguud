<?php require('header.php') ?>
<section>
    <div class="row">
        <img src="images/contactBnr.jpg" alt="contact" class="responsive-img">
    </div>
</section>
<section class="formSec">
    <div class="container">
        <div class="row">
            <div class="col s6">
                <div class="contactFormAddress">
                    <div class="contactFormInner">
                        <div class="d-flex">
                         <i class="fa fa-map-marked-alt fa-2x"></i>
                         <div>
                        <h6>Patrika Wellness</h6>
                            <p>
                              Patrika Building Rajasthan Patrika, Patrika Building, E-5, Patrikayan, 
                              Jhalana Institutional Area, Jhalana Doongri, 
                              Jaipur, Rajasthan 302004
                            </p>
                            
                            <h6>Corporate Office</h6>
                            <p>
                              Rajasthan Patrika Pvt. Ltd.
                             Plot Number 68-69, Sector 35, Udyog Vihar, Gurugram, Haryana 122004
                            </p>
                            <ul>
                                <li>
                                    <a href="#"><i class="fa fa-phone"></i> +91 9116771122</a>
                                </li>
                                <li>
                                    <a href="#"><i class="fa fa-envelope"></i> care@goguud.com</a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
             </div>
            <div class="col s6 verticleBorder">
                <h1>Share your feedback with us !</h1>
                <p>Have any questions? We’d love to hear from you.</p>
                <form method="post">
                    <div class="row">
                        <div class="">
                            <input placeholder="Full Name" name="name" type="text" class="form-control browser-default" required>
                        </div>
                        <div class="">
                            <input placeholder="Email ID" name="email" type="email" class="form-control browser-default" required>
                        </div>
                        <div class="">
                            <input placeholder="Phone Number" name="phone" type="text" class="form-control browser-default" maxlength="10" required>
                        </div>
                        <div class="">
                            <textarea placeholder="Message" name="message" class="form-control"></textarea>
                        </div>
                        <div class="">
                            <button class="btn" type="submit" name="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</section>
<section class="gMapSec">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.8537310837733!2d75.81350816504418!3d26.876387883143178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db670400000f9%3A0x48f9bd2814480b10!2sRajasthan%20Patrika!5e0!3m2!1sen!2sin!4v1656590308902!5m2!1sen!2sin" width="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</section>
<?php
if(isset($_POST["submit"])){
    $name=$_POST["name"];
    $email=$_POST["email"];
    $phone=$_POST["phone"];
    $message=$_POST["message"];
    $sql="insert into contact(name,email,phone,message,created_at) values('$name','$email','$phone','$message',NOW())";
    if($pdo->query($sql)){
        echo "<script>swal('Thank You', 'We will get back you soon', 'success');</script>";
        $to = "web@sociapa.com";
        $from       = 'Goguud <no-reply@sociapainfluencer.com>';
        $fromname   = 'Goguud';
        $subject = "'You\'ve been contacted by $name";
        $headers = "From: ".$fromname." <".$from."> \r\n";
        $headers   .= "Reply-To: ". $email . "\r\n";
        $headers   .= "MIME-Version: 1.0\r\n";
        $headers   .= "Content-type: text/html; charset=utf-8\r\n";
        $headers   .= "X-Mailer: PHP". phpversion() ."\r\n" ;
        $msg  = "<table style='max-width:600px;width: 100%;'>\r\n\n";
        $msg .= "<tr><td>Name</td><td>:</td><td>".$name."</td></tr>\r\n\n";
        $msg .= "<tr><td>Email Address</td><td>:</td><td>".$email."</td></tr>\r\n\n";
        $msg .= "<tr><td>Contact</td><td>:</td><td>".$phone."</td></tr>\r\n\n";
        $msg .= "<tr><td>Message</td><td>:</td><td>".$message."</td></tr>\r\n\n";
        $msg .= "-----------------------------------------\r\n";
        $result= mail($to,$subject,$message,$headers);
    }
    else{
       echo "<script>swal('Data Not Saved');</script>";
    }
}
?>
<?php require('footer.php'); ?>