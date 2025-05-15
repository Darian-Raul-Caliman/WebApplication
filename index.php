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
    <title>RBetting</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://kit.fontawesome.com/e3d7aeba37.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    
    <!--NAVBAR section-->
    <nav class="navbar">
        <div class="navbar__container">
            <a href="/" id="navbar__logo"><i class="fa-brands fa-web-awesome"></i> RBetting</a>
            <div class="navbar__toggle" id="mobile-menu">
                <span class="bar"></span> 
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            <ul class="navbar__menu">
                <li class="navbar__item">
                    <a href="/" class="navbar__links">
                        Sport
                    </a>
                </li>
                <li class="navbar__item">
                    <a href="/tech.html" class="navbar__links">
                        Casino
                    </a>
                </li>

                    <li class="navbar__item">
                        <a href="/" class="navbar__links">
                            Deposit
                        </a>
                    </li>
                    <li class="navbar__btn">
                        <a href="switch_form.php?form=register" class="button">
                            Sign Up
                        </a>
                    </li>
                <li class="navbar__btn">
                    <a href="Login.php" class="button">
                        Login
                    </a>
                </li>


            </ul>
        </div>
    </nav>
    <!--Hero secion-->
    <div class="main">
        <div class="main__container">
            <div class="main__content">
                <h1>Place your bet</h1>
                <h2>Sports and more</h2>
                <p>Every league in the world</p>
                <button class="main__btn"><a href="switch_form.php?form=register">Get Started</a></button>
            </div>
            <div class="main__img--container">
                <img src="images\Layer 1.png" alt="pic" id="main__img">
            </div>      
        </div>
    </div>

    <!-- Services Section -->
     <div class="services">
        <h1>See what the hype is about</h1>
        <a href="Login.php">
        <div class="services__container" >
            <div class="services__card">
                <h2>Experience Bliss</h2>
                <p>Play responsible</p>
                <button >Get Started</button>
            </div>
            </a>
            <div class="services__card">
                <h2>Are you Ready?</h2>
                <p>Take the leap</p>
                <button>Get Started</button>
            </div>
        </div>
     </div>
     <!-- Footer Section -->
      <div class="footer__container">
        <div class="footer__links">
            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2 class="links_footerh2">About us</h2>
                    <a href="services.php#About-us">How it works</a>
                    <a href="/">Data Protection</a>
                    <a href="/">Careers</a>
                    <a href="/">Contact Us</a>
                </div>
                <div class="footer__link--items">
                    <h2 class="links_footerh2">Support</h2>
                    <a href="/">Help Center</a>
                    <a href="/">Responsible Gambling</a>
                    <a href="/">Betting Rules</a>
                    <a href="/">Terms & Conditions</a>
                    <a href="/">Privacy Policy</a>
                </div>
            </div>
            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2 class="links_footerh2">Popular Markets</h2>
                    <a href="/">Sports Betting</a>
                    <a href="/">Live Betting</a>
                    <a href="/">Casino Games</a>
                    <a href="/">Promotions</a>
                </div>
                <div class="footer__link--items">
                    <h2 class="links_footerh2">Legal & Security</h2>
                    <a href="/">Licensed by ANAF</a>
                    <a href="/">Age 18+ Only</a>
                    <a href="/">Secure Payments</a>
                    <a href="/">Fair Play Guaranteed</a>
                    <a href="/">Gambling Therapy Links</a>
                </div>
            </div>
        </div>
        <div class="social__media">
            <div class="social__media--wrap">
                <div class="footer__logo">
                    <a href="/" id="footer__logo"><i class="fa-brands fa-web-awesome"></i>Rbetting</a>
                </div>
                <p class="website__rights">© Rbetting 2025. All rights rezerved</p>
                <div class="social__icons">
                    <a href="/" class="social__icon--link" target="_blank">
                        <i class="fab fa-facebook"></i>
                    </a>
                    <a href="/" class="social__icon--link" target="_blank">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a href="/" class="social__icon--link" target="_blank">
                        <i class="fab fa-youtube"></i>
                    </a>
                    <a href="/" class="social__icon--link" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </div>
      </div>




    <script src="app.js"></script>
</body>
</html>