<?php
	session_start();

	//Conect to database
	$db = mysqli_connect("localhost","root","","authentication");

	if(isset($_POST['register_btn'])){

		
		$username = mysqli_real_escape_string($db,$_POST['username']);
		$email = mysqli_real_escape_string($db,$_POST['email']);
		$password = mysqli_real_escape_string($db,$_POST['password']);
		$password2 = mysqli_real_escape_string($db,$_POST['password2']);

		if($password = $password2){

			$password = md5($password);
			$sql = "INSERT INTO users(username,email,password) VALUES('$username','$email','$password')";
			mysqli_query($db,$sql);
			$_SESSION['message'] = "You are now logged in";
			$_SESSION['username'] = $username;
			header("location: home.php");

		}else{

			$_SESSION['message'] = "Two password do not match";

		}


	}

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

<form method="post" action="register.php">
	<table>
	<tr>
		<td>Username</td>
		<td><input type="text" name="username" class="textInput"></td>
	</tr>
	<tr>
		<td>Email</td>
		<td><input type="email" name="email" class="textInput"></td>
	</tr>
	<tr>
		<td>Password</td>
		<td><input type="password" name="password" class="textInput"></td>
	</tr>
	<tr>
		<td>Password</td>
		<td><input type="password" name="password2" class="textInput"></td>
	</tr>
	<tr>
		<td></td>
		<td><input type="submit" name="register_btn" value="Register"></td>
	</tr>
	</table>
</form>

</body>
</html>