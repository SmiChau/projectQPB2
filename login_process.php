<?php
session_start();
include 'connect.php';

if (isset($_POST['signUp'])) {
    $username = trim($_POST['username']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $password = $_POST['password'];
    $password=md5($password);
    $confirmPassword = $_POST['confirmPassword'];
    $confirmPassword=md5($confirmPassword);

        $insertQuery="INSERT INTO users(username,email,phone,password,confirmPassword)
        VALUES ('$username','$email','$phone','$password','$confirmPassword')";
        if($conn->query($insertQuery)==TRUE){
            header("location: login.php");
        }else{
            $error= "Error: ". $conn->error;
        }
    }

if (isset($_POST['signIn'])) {
    $username = trim($_POST['username']);
    $password = md5($_POST['password']);

    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $_SESSION['username'] = $row['username'];
        header("Location: homepage.html");
    } else {
        header("Location: login.php?loginError=Invalid username or password");
    }
    exit();
}
?>
