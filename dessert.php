<?php require('header.php'); ?>
<?php
    $sql="select * from recipe where category='dessert'";
    $result=$pdo->query($sql);
    $data=$result->fetchAll();
?>
<section class="bevBnrSec">
    <div class="row">
        <img src="images/desertBnr.jpg" alt="desert" class="responsive-img">
    </div>
</section>
<section class="beverSec">
<?php
    foreach($data as $value){
?>
<div class="row">
    <div class="col s12 m4">
        <img src="images/<?php echo $value["image"]; ?>" alt="<?php echo $value["name"]; ?>" class="responsive-img">
    </div>
    <div class="col s12 m8">
        <h2 class="Futura-Bold"><?php echo $value["name"]; ?></h2>
        <p class="text-justify"><?php echo $value["description"]; ?></p>
        <a href="recipe-child.php?id=<?php echo $value['id']; ?>" class="">
            <button class="btn Futura-Bold stufBatan">Read More</button>
        </a>
    </div>
</div>
<?php
    }
?>
</section>
<?php require('footer.php'); ?>