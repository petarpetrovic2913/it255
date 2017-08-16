<?php
	session_start();



?>



<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<div class="header">
	<h1>Domaci zadatak 8</h1>
</div>
<h1>Home</h1>
<div><h4>Welcome <?php echo $_SESSION['username']; ?></h4></div>
<dir><a href="logout.php">Logout</a></dir>

</body>
</html>