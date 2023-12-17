<?php
session_start();

// Set session variables
$_SESSION['user_id'] = 123;
$_SESSION['username'] = 'john_doe';

// Access session variables
$user_id = $_SESSION['user_id'];
$username = $_SESSION['username'];
?>
