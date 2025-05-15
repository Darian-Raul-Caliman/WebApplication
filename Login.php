<?php
session_start();

$errors = [
    'login' => $_SESSION['login_error'] ?? '',
    'register' => $_SESSION['register_error'] ?? ''
    
];
$activeForm = $_SESSION['active_form'] ?? 'login';

session_unset();

function showError($error){
    return !empty($error) ? "<p class='error-message'>$error</p>" : '';
}

function isActiveForm($formName, $activeForm){
    return $formName === $activeForm ? 'active' : '';
}

?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styleLogin.css">
    <title>Document</title>
    <script src="https://kit.fontawesome.com/e3d7aeba37.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">  
    <video autoplay loop muted plays-inline class="background-clip">
           <source src="images\background_clip.mp4" type="video/mp4">
        </video> 
        <div class="form-box <?= isActiveForm('login',$activeForm); ?>" id="login-form">
            
            <form action="login_register.php" method="post">
                <h2>Login</h2>
                <?= showError($errors['login']); ?>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <button type="submit" name="login">Login</button>
                <p>Don't have an account? <a href="#" onclick="showForm('register-form')">Register</a></p>
            </form>
        </div>
        <div class="form-box <?= isActiveForm('register',$activeForm); ?>" id="register-form">
            <form action="login_register.php " method="post">
                <h2>Register</h2>
                <?= showError($errors['register']); ?>
                <input type="text" name="name" placeholder="Name" required>
                <input type="email" name="email" placeholder="Email" required>
                <input type="password" name="password" placeholder="Password" required>
                <select name="gender" required>
                    <option value="">--Select Gender-- </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="undiscovered">Rather not say</option>
                </select>
                <input type="text" name="phone_number" placeholder="Phone number" required>

                <button class="age" type="submit" name="register">register</button>
                
                <p>Already have an account? <a href="#" onclick="showForm('login-form')">Login</a></p>
            </form>
        </div>
    </div>
    <script src="app.js"></script>
</body>
</html>

