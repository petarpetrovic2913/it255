<?php
	session_start();

	//Conect to database
	$db = mysqli_connect("localhost","root","","authentication");

	if(isset($_POST['login_btn'])){

		
		$username = mysqli_real_escape_string($db,$_POST['username']);
		$password = mysqli_real_escape_string($db,$_POST['password']);
		
		$password = md5($password);
		$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
		$result = mysqli_query($db,$sql);

		if(mysqli_num_rows($result) == 1){

			$_SESSION['message'] = "You are now logged in";
			$_SESSION['username'] = $username;
			header("location: home.php");

		}else{

			$_SESSION['message'] = "Username/password combination incorrect";
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

<form method="post" action="login.php">
	<table>
	<tr>
		<td>Username</td>
		<td><input type="text" name="username" class="textInput"></td>
	</tr>
	
	<tr>
		<td>Password</td>
		<td><input type="password" name="password" class="textInput"></td>
	</tr>
	<tr>
		<td></td>
		<td><input type="submit" name="login_btn" value="Login"></td>
	</tr>
	</table>
</form>

</body>
</html>