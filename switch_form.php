<?php
session_start();

$form = $_GET['form'] ?? 'login';
$_SESSION['active_form'] = $form;

header('Location: Login.php');
exit();

?>