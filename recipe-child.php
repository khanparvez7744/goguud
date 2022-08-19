<?php require('header.php') ?>
<?php
    $id=$_GET['id'];
    $sql="select * from recipe where id='$id'";
    $result=$pdo->query($sql);
    $data=$result->fetch();
?>
<section class="recChildBnrSec">
    <div class="row">
        <img src="images/<?php echo $data['banner']; ?>" alt="<?php echo $data['name']; ?>" class="responsive-img">
    </div>
</section>
<section class="ingrSec">
    <div class="row">
        <div class="col s12 m4">
            <h1 class="Futura-Bold">Ingredients</h1>
            <?php echo $data['ingredient']; ?>
        </div>
        <div class="col s12 m8">
            <h1 class="Futura-Bold">Instructions</h1>
            <?php echo $data['method']; ?>
</div>
    </div>
</section>
<?php require('footer.php'); ?>