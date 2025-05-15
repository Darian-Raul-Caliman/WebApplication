<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RBetting</title>
    <link rel="stylesheet" href="styleMainPage.css">
    <script src="https://kit.fontawesome.com/e3d7aeba37.js" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@400;700&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_forward" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css">
    
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    />
    <style>

    </style>
</head>
<body>
    
        
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
                    <a href="#" class="navbar__links casino">
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

    
<!--SIDE BAR NAV -->
<aside class="sidebar">
    <!--SIDE BAR HEADER -->
    <header class="sidebar-header">
        <a href="#" class="header-logo">
        <img src="images\web-awesome-regular.svg" alt="">
        
        </a>
        <button class="toggler sidebar-toggler">
            <div class="button-toggle">
            <span class="material-symbols-outlined">
chevron_left
</span>
            </div>

        </button>
    </header>
    <nav class="sidebar-nav">
        <!--PRIMARY TOP NAV -->
        <ul class="nav-list primary-nav">
            <li class="nav-item footbal">
                <a href="#" class="nav-link">
                <span class="material-symbols-outlined">
                sports_soccer
</span>
                    <span class="nav-label">Footbal</span>
                </a>
                <span class="nav-tooltip">Dashboard</span>
            </li>
            <li class="nav-item basketball">
                <a href="#" class="nav-link">
                <span class="material-symbols-outlined">
sports_basketball
</span>
                    <span class="nav-label">Basketball</span>
                </a>
                <span class="nav-tooltip">Calendar</span>
            </li>
            <li class="nav-item tennis">
                <a href="#" class="nav-link">
                <span class="material-symbols-outlined">
                sports_tennis
</span>
                    <span class="nav-label">Tennis</span>
                </a>
                <span class="nav-tooltip">Dashboard</span>
            </li>
            <li class="nav-item golf">
                <a href="#" class="nav-link">
                <span class="material-symbols-outlined">
                sports_golf
</span>
                    <span class="nav-label">Golf</span>
                </a>
                <span class="nav-tooltip">Dashboard</span>
            </li>
            <li class="nav-item rugby">
                <a href="#" class="nav-link">
                <span class="material-symbols-outlined">
                sports_rugby
</span>
                    <span class="nav-label">Rugby</span>
                </a>
                <span class="nav-tooltip">Dashboard</span>
            </li>
            <li class="nav-item motorsports">
                <a href="#" class="nav-link">
                <span class="material-symbols-outlined">
                sports_motorsports
</span>
                    <span class="nav-label">F1</span>
                </a>
                <span class="nav-tooltip">Dashboard</span>
            </li>
            <li class="nav-item chess">
                <a href="#" class="nav-link">
                <span class="material-symbols-outlined">
chess
</span>
                    <span class="nav-label">Chess</span>
                </a>
                <span class="nav-tooltip">Dashboard</span>
            </li>
            <li class="nav-item esports">
                <a href="#" class="nav-link">
                <span class="material-symbols-outlined">
sports_esports
</span>
                    <span class="nav-label">Esports</span>
                </a>
                <span class="nav-tooltip">Dashboard</span>
            </li>
        </ul>
<!--Secondary bottom nav -->
        <ul class="nav-list secondary-nav">
        <li class="nav-item">
                <a href="#" class="nav-link">
                <span class="material-symbols-outlined">
chevron_left
</span>
                    <span class="nav-label">Profile</span>
                </a>
                <span class="nav-tooltip">Dashboard</span>
            </li>
            <li class="nav-item">
                <a href="#" class="nav-link">
                <span class="material-symbols-outlined">
chevron_left
</span>
                    <span class="nav-label">Logout</span>
                </a>
                <span class="nav-tooltip">Dashboard</span>
            </li>
        </ul>
    </nav>
</aside>

<div class="main_container">

<!--  Main page Promotions -->

<!-- TESTIMONIALS -->
<section class="testimonials-section py-5">
 

  <div class="container-promotions">
    <div class="swiper mySwiper swiper-testimonials">
      <div class="swiper-wrapper">

        <!-- Slide 1 -->
        <div class="swiper-slide">
          <img src="images\WebPromotion1.png" class="img-fluid" alt="Testimonial 1">
        </div>

        <!-- Slide 2 -->
        <div class="swiper-slide">
          <img src="images\Prmotionsimg2.png" class="img-fluid" alt="Testimonial 2">
        </div>

        <!-- Slide 3 -->
        <div class="swiper-slide">
          <img src="images\Promotionimg3.png" class="img-fluid" alt="Testimonial 3">
        </div>

        <!-- Slide 4 -->
        <div class="swiper-slide">
          <img src="images\promotionnr4.png" class="img-fluid" alt="Testimonial 4">
        </div>

        <!-- Add more slides as needed -->

      </div>

      <!-- Pagination (optional) -->
      <div class="swiper-pagination mt-3"></div>
    </div>
  </div>
</section>

<!-- Mini Calendar -->

<div class="calendar_container">
  <ul class="calendar_grid">
    <li class="calendar_item">
      <span class="calendar_date">1</span>
      <span class="calendar_day">Monday</span>
    </li>
    <li class="calendar_item">
      <span class="calendar_date">2</span>
      <span class="calendar_day">Tuesday</span>
    </li>
    <li class="calendar_item">
      <span class="calendar_date">3</span>
      <span class="calendar_day">Wednesday</span>
    </li>
    <li class="calendar_item">
      <span class="calendar_date">4</span>
      <span class="calendar_day">Thursday</span>
    </li>
    <li class="calendar_item">
      <span class="calendar_date">5</span>
      <span class="calendar_day">Friday</span>
    </li>
    <li class="calendar_item">
      <span class="calendar_date">6</span>
      <span class="calendar_day">Saturday</span>
    </li>
    <li class="calendar_item">
      <span class="calendar_date">7</span>
      <span class="calendar_day">Sunday</span>
    </li>
  </ul>
</div>









<!--  Main page Events -->
<div id="matchesContainer"></div>

<!--Bet section-->

<section class="bet_section">
    <div class="bet_section_bets">
        <div class="bet_section_bets_topbar">  
        <span class="material-symbols-outlined info">
contact_support
</span>
        <button class="material-symbols-outlined bets">
delete
</button>
        </div>
        <div class="bet_section_bets_live">

        <ul class="bet_list"></ul>

        </div>
        <div class="bet_section_bottombar">
            <div class="bet_section_bottombar_oddinfo">
                <p class="odds_number_text">Odds bet</p>
                <p class="odds_number_live"></p>
                
            </div>
            <div class="bet_section_bottombar_action">
                <p class="bet_section_bottombar_input win">Win:</p>
                
                <input type="text" class="bet_section_bottombar_input" placeholder="Stake">
                <button class="bet_section_bottombar_">BET</button>
            </div>
        </div>

    </div>

</section>

<!-- Footer Section -->

<div class="footer__container">
        <div class="footer__links">
            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2>About us</h2>
                    <a href="/">How it works</a>
                    <a href="/">Testimonials</a>
                    <a href="/">Careers</a>
                    <a href="/">Investments</a>
                    <a href="/">Terms of Service</a>
                </div>
                <div class="footer__link--items">
                    <h2>About us</h2>
                    <a href="/">How it works</a>
                    <a href="/">Testimonials</a>
                    <a href="/">Careers</a>
                    <a href="/">Investments</a>
                    <a href="/">Terms of Service</a>
                </div>
            </div>
            <div class="footer__link--wrapper">
                <div class="footer__link--items">
                    <h2>About us</h2>
                    <a href="/">How it works</a>
                    <a href="/">Testimonials</a>
                    <a href="/">Careers</a>
                    <a href="/">Investments</a>
                    <a href="/">Terms of Service</a>
                </div>
                <div class="footer__link--items">
                    <h2>About us</h2>
                    <a href="/">How it works</a>
                    <a href="/">Testimonials</a>
                    <a href="/">Careers</a>
                    <a href="/">Investments</a>
                    <a href="/">Terms of Service</a>
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





<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script src="scriptBar.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
</body>
</html>


