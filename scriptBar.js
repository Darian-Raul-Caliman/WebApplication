
const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
sidebarToggler.addEventListener("click", () => {
  sidebar.classList.toggle("collapsed");
});

const oddNumber = 0;
const addedMatches = new Set();
const currentOdds = [];
const stakeInput = document.querySelector('.bet_section_bottombar_input[type="text"]');
const winDisplay = document.querySelector('.bet_section_bottombar_input.win');
const betButton = document.querySelector('.bet_section_bottombar_');


const swiper = new Swiper(".swiper-testimonials", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
   

window.addEventListener("scroll", () => {
  const section = document.querySelector(".bet_section");

  // Height bounds
  const minVH = 49;
  const maxVH = 85;

  // Scroll progress from 0 to 1
  const scrollProgress = window.scrollY / (document.body.scrollHeight - window.innerHeight);

  // Calculate dynamic height
  let newHeight;

  if (scrollProgress > 0.8) {
    section.style.marginBottom = "36vh";
    newHeight = 50;
  } else if (scrollProgress > 0.3 && scrollProgress < 0.8) {
    newHeight = 85;
    section.style.marginBottom = "0.1vh";
  } else {
    newHeight = minVH + (maxVH - minVH) * scrollProgress;
    section.style.marginBottom = "0.1vh";
  }

  section.style.height = `${newHeight}vh`;
});

function formatDay(dateString) {
  const options = { day: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', options); // Adjust the locale if needed
}

//Calendar 
// --- Calendar Handling ---
const today = new Date();
const calendarItems = document.querySelectorAll(".calendar_item");
const calendarDates = document.querySelectorAll(".calendar_date");

// Fill in next 7 days
for (let i = 0; i < 7; i++) {
  const date = new Date();
  date.setDate(today.getDate() + i);
  calendarDates[i].innerText = date.getDate();
}

//Selected Tab

const footbal = document.querySelector(".footbal");
const basketball = document.querySelector(".basketball");
const tennis = document.querySelector(".tennis");
const golf = document.querySelector(".golf");
const rugby = document.querySelector(".rugby");
const motorsports = document.querySelector(".motorsports");
const chess = document.querySelector(".chess");
const esports = document.querySelector(".esports");
// footbal.addEventListener("click", function () {
//   footbal.style.background = "green";
// });




//Casino ------------------------------------------------------------------
const casino = document.querySelector(".navbar__links.casino");
const main_container = document.querySelector(".main_container");
casino.addEventListener("click", () => {
  const rouletteContainer = document.createElement('section');
rouletteContainer.classList.add('roulette');
rouletteContainer.innerHTML = `
  <h2>🎰 Roulette Game</h2>
  <p>Pick a number (0-36) and place your bet!</p>
  <input type="number" id="roulette-number" min="0" max="36" placeholder="Your number (0-36)">
  <input type="number" id="roulette-bet" placeholder="Your bet amount">
  <button id="spin-roulette">Spin</button>
  <p id="roulette-result"></p>
`;

// Add the section to the page
document.body.appendChild(rouletteContainer);

// Add game logic
document.getElementById('spin-roulette').addEventListener('click', () => {
  const chosenNumber = parseInt(document.getElementById('roulette-number').value);
  const betAmount = parseFloat(document.getElementById('roulette-bet').value);
  const resultDisplay = document.getElementById('roulette-result');

  // Input validation
  if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 36) {
    resultDisplay.textContent = "Please choose a number between 0 and 36.";
    return;
  }
  if (isNaN(betAmount) || betAmount <= 0) {
    resultDisplay.textContent = "Please enter a valid bet amount.";
    return;
  }

  // Spin the roulette
  const rouletteResult = Math.floor(Math.random() * 37);
  if (rouletteResult === chosenNumber) {
    const winAmount = betAmount * 35; // Standard roulette payout
    resultDisplay.textContent = `🎉 Lucky! The ball landed on ${rouletteResult}. You win $${winAmount.toFixed(2)}!`;
  } else {
    resultDisplay.textContent = `❌ The ball landed on ${rouletteResult}. You lose $${betAmount.toFixed(2)}. Try again!`;
  }
});

})







// Basketball ---------------------------------------------------------------------------


basketball.addEventListener("click",()=>{
  calendarItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      calendarItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
  
      const clickedDay = parseInt(item.querySelector(".calendar_date").innerText);
      const selectedDate = new Date(today);
      selectedDate.setDate(today.getDate() + (clickedDay - today.getDate()));
  
      const selectedFormatted = selectedDate.toISOString().split('T')[0];
      console.log("Fetching matches for:", selectedFormatted);
  
      fetchAndDisplayMatches(selectedFormatted);
    });
  });
  
  // ---- Default: show today matches ----
  const todayFormatted = today.toISOString().split('T')[0];
  fetchAndDisplayMatches(todayFormatted);
  
  // ---- Random number generator for odds ----
  function getRandomNumber() {
    return (Math.random() * (3.0 - 1.0) + 1.0).toFixed(2);
  }
  
  function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric' , hour: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }



  function fetchAndDisplayMatches(dateString) {
    matchesContainer.innerHTML = ''; // Clear previous matches
  
    fetch(`https://v1.basketball.api-sports.io/games?date=${dateString}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1.basketball.api-sports.io",
        "x-rapidapi-key": "da9a7d826b00a51b28f92d31ef999384"
      }
    })
    .then(response => response.json())
    .then(data => {
      const matchesList = data.response;
  
      if (matchesList.length === 0) {
        matchesContainer.innerHTML = "<p class='no_matches'>No matches on this day</p>";
        return;
      }
  
      matchesList.forEach(match => {
        const matchSection = createMatchSection(match);
        matchesContainer.appendChild(matchSection);
      });
    })
    .catch(err => {
      console.error(err);
    });
  }
  
  
  
  
  // ---- Create match sections Basketball ----
  
  
  function createMatchSection(data) {
    const section = document.createElement('section');
    section.classList.add('main_event_section');
  
    const oddHome = getRandomNumber();
    const oddDraw = getRandomNumber();
    const oddAway = getRandomNumber();
  
    const matchTime = data.status?.short === 'FT'
      ? 'Full Time'
      : data.status?.elapsed
      ? data.status.elapsed + "'"
      : formatDate(data.date);
  
    section.innerHTML = `
      <div class="main_event">
        <div class="main_event_names">
          <div class="title-box">
            <p class="elapsed">${matchTime}</p>
          </div>
          <div class="title-box">
            <div class="team">
                <img src="${data.teams.home.logo}" alt="">
                <p>${data.teams.home.name}</p>
            </div>
            <p class="goals">${data.scores.home.total ?? ''} - ${data.scores.away.total ?? ''}</p>
            <div class="team">
                <img src="${data.teams.away.logo}" alt="">
                <p>${data.teams.away.name}</p>
            </div>
          </div>
        </div>
        <div class="main_event_quick_odds">
          <div class="main_event_quick_odds_cell">
              <h1 class="main_event_quick_odds_number">1</h1>
              <input type="button" value="${oddHome}" class="main_event_quick_odds_btn"> 
          </div>
          <div class="main_event_quick_odds_cell">
              <h1 class="main_event_quick_odds_number">X</h1>
              <input type="button" value="${oddDraw}" class="main_event_quick_odds_btn"> 
          </div>
          <div class="main_event_quick_odds_cell">
              <h1 class="main_event_quick_odds_number">2</h1>
              <input type="button" value="${oddAway}" class="main_event_quick_odds_btn"> 
          </div>
        </div>
      </div>
    `;
  
    section.querySelectorAll('.main_event_quick_odds_btn').forEach(button => {
      button.addEventListener('click', function () {
        const odd = parseFloat(this.value);
        const teamNames = section.querySelectorAll('.team p');
        const homeTeam = teamNames[0]?.textContent ?? 'Home';
        const awayTeam = teamNames[1]?.textContent ?? 'Away';
        const matchKey = `${homeTeam} vs ${awayTeam}`;
  
        if (addedMatches.has(matchKey)) {
          alert("You already placed a bet on this match!");
          return;
        }
  
        if (matchTime === 'Full Time') {
          alert("The match has already been played!");
          return;
        }
  
        const li = document.createElement('li');
        li.innerHTML = `
          ${matchKey} - <strong>${odd}</strong>
          <button class="delete-bet">🗑️</button>
        `;
  
        const betList = document.querySelector(".bet_list");
        betList.appendChild(li);
        addedMatches.add(matchKey);
        currentOdds.push({ matchKey, odd });
        updateTotalOdds();
  
        // Individual delete
        li.querySelector('.delete-bet').addEventListener('click', () => {
          li.remove();
          addedMatches.delete(matchKey);
          const index = currentOdds.findIndex(item => item.matchKey === matchKey);
          if (index !== -1) currentOdds.splice(index, 1);
          updateTotalOdds();
        });
      });
    });
    document.querySelector(".material-symbols-outlined.bets")?.addEventListener("click", () => {
      document.querySelector(".bet_list").innerHTML = '';
      addedMatches.clear();
      currentOdds.length = 0;
      updateTotalOdds();
    });
    
    function updateTotalOdds() {
      const oddsNumberLive = document.querySelector(".odds_number_live");
      const total = currentOdds.reduce((acc, entry) => acc * entry.odd, 1);
      oddsNumberLive.textContent = currentOdds.length > 0 ? total.toFixed(2) : "0.00";

      
    }


    
  
    return section;
  }
  
  
  
  
  
  
  
  fetch(`https://v1.basketball.api-sports.io/games?date=${todayFormatted}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v1.basketball.api-sports.io",
      "x-rapidapi-key": "da9a7d826b00a51b28f92d31ef999384"
    }
  }) 
  .then(response => response.json())
  .then(data => {
    const matchesList = data.response; // <-- Important!
    console.log(matchesList); // You will see the matches array
  
    const container = document.querySelector('#matchesContainer'); // Make sure you have this div in your HTML!
  
    matchesList.forEach(match => {
      const matchSection = createMatchSection(match);
      container.appendChild(matchSection);
    });
  })
  .catch(err => {
    console.log(err);
  });
})



//Footbal---------------------------------------------------------------------------



footbal.addEventListener("click",()=>{
  calendarItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      calendarItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
  
      const clickedDay = parseInt(item.querySelector(".calendar_date").innerText);
      const selectedDate = new Date(today);
      selectedDate.setDate(today.getDate() + (clickedDay - today.getDate()));
  
      const selectedFormatted = selectedDate.toISOString().split('T')[0];
      console.log("Fetching matches for:", selectedFormatted);
  
      fetchAndDisplayMatches(selectedFormatted);
    });
  });
  
  // ---- Default: show today matches ----
  const todayFormatted = today.toISOString().split('T')[0];
  fetchAndDisplayMatches(todayFormatted);
  
  // ---- Random number generator for odds ----
  function getRandomNumber() {
    return (Math.random() * (3.0 - 1.0) + 1.0).toFixed(2);
  }
  
  function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric' , hour: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }



  function fetchAndDisplayMatches(dateString) {
    matchesContainer.innerHTML = ''; // Clear previous matches
  
    fetch(`https://v3.football.api-sports.io/fixtures?date=${dateString}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "da9a7d826b00a51b28f92d31ef999384"
      }
    })
    .then(response => response.json())
    .then(data => {
      const matchesList = data.response;
  
      if (matchesList.length === 0) {
        matchesContainer.innerHTML = "<p class='no_matches'>No matches on this day</p>";
        return;
      }
  
      matchesList.forEach(match => {
        const matchSection = createMatchSection(match);
        matchesContainer.appendChild(matchSection);
      });
    })
    .catch(err => {
      console.error(err);
    });
  }
  
  
  
  
  // ---- Create match sections footbal ----

  function createMatchSection(data) {
    const section = document.createElement('section');
    section.classList.add('main_event_section');
    const deleteBtn = document.querySelector(".material-symbols-outlined bets")  ;
  
    const oddHome = getRandomNumber();
    const oddDraw = getRandomNumber();
    const oddAway = getRandomNumber();
    const addedMatches = new Set();
  
    const matchTime = data.fixture.status?.short === 'FT'
      ? 'Full Time'
      : data.fixture.status?.elapsed
      ? data.fixture.status.elapsed + "'"
      : formatDate(data.date);
  
    section.innerHTML = `
<div class="main_event">
        <div class="main_event_names">
          <div class="title-box">
            <p class="elapsed">${data.fixture.status.short === 'FT' ? 'Full Time' 
              : data.fixture.status.elapsed ? data.fixture.status.elapsed + "'" 
              : formatDate(data.fixture.date)}</p>
          </div>
  
          <div class="title-box">
            <div class="team">
                <img src="${data.teams.home.logo}" alt="">
                <p>${data.teams.home.name}</p>
            </div>
            <p class="goals">${data.goals.home ?? ''} - ${data.goals.away ?? ''}</p>
            <div class="team">
                <img src="${data.teams.away.logo}" alt="">
                <p>${data.teams.away.name}</p>
            </div>
          </div>
  
          <div class="matches-table"></div>
        </div>
        <div class="main_event_quick_odds">
            <div class="main_event_quick_odds_cell">
                <h1 class="main_event_quick_odds_number">1</h1>
                <input type="button" value="${oddHome}" class="main_event_quick_odds_btn"> 
            </div>
            <div class="main_event_quick_odds_cell">
                <h1 class="main_event_quick_odds_number">X</h1>
                <input type="button" value="${oddDraw}" class="main_event_quick_odds_btn"> 
            </div>
            <div class="main_event_quick_odds_cell">
                <h1 class="main_event_quick_odds_number">2</h1>
                <input type="button" value="${oddAway}" class="main_event_quick_odds_btn"> 
            </div>
        </div>
      </div>
    `;

    section.querySelectorAll('.main_event_quick_odds_btn').forEach(button => {
      button.addEventListener('click', function () {
        const odd = this.value;

        // Get team names
        const teamNames = section.querySelectorAll('.team p');
        const homeTeam = teamNames[0]?.textContent ?? 'Home';
        const awayTeam = teamNames[1]?.textContent ?? 'Away';
        const matchKey = `${homeTeam} vs ${awayTeam}`;
        if (addedMatches.has(matchKey)) {
          alert("You already placed a bet on this match!");
          return;
        }
        else if(matchTime=='Full Time'){
          alert("The match has already been played !");
          return;
        }


        // Create list item with delete button
        const li = document.createElement('li');
        
        li.innerHTML = `
          ${homeTeam} vs ${awayTeam} - <strong>${odd}</strong>
          <button class="delete-bet">🗑️</button>
        `;
        const deleteBtn = document.querySelector(".material-symbols-outlined.bets");
        const betList = document.querySelector(".bet_list");
        
        deleteBtn.addEventListener("click", () => {
          betList.innerHTML = ''; // This removes all <li> elements inside the list
          addedMatches.clear();
        });
        
    
        // Append to list
      
        betList.appendChild(li);
        addedMatches.add(matchKey);
    
        // Add delete functionality
        li.querySelector('.delete-bet').addEventListener('click', () => {
          li.remove();
          addedMatches.delete(matchKey);
        });
        

        const betNumber = document.querySelector(".odds_number_live");
        for (const value of addedMatches) {
          betNumber.value *= value; 
      }
        

      });
    });
    function updateTotalOdds() {
      const oddsNumberLive = document.querySelector(".odds_number_live");
      const total = currentOdds.reduce((acc, entry) => acc * entry.odd, 1);
      const totalFixed = currentOdds.length > 0 ? total.toFixed(2) : "0.00";
      oddsNumberLive.textContent = totalFixed;
    
      // Also update win display if stake is entered
      const stake = parseFloat(stakeInput.value);
      if (!isNaN(stake)) {
        const winAmount = (stake * total).toFixed(2);
        winDisplay.textContent = `Win: ${winAmount}`;
      } else {
        winDisplay.textContent = "Win: 0.00";
      }
    }

  
    return section;
  }
  


  
  
  
  
  
  fetch(`https://v3.football.api-sports.io/fixtures?date=${todayFormatted}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": "da9a7d826b00a51b28f92d31ef999384"
    }
  }) 
  .then(response => response.json())
  .then(data => {
    const matchesList = data.response; // <-- Important!
    console.log(matchesList); // You will see the matches array
  
    const container = document.querySelector('#matchesContainer'); // Make sure you have this div in your HTML!
  
    matchesList.forEach(match => {
      const matchSection = createMatchSection(match);
      container.appendChild(matchSection);
    });
  })
  .catch(err => {
    console.log(err);
  });
})



// Rugby ------------------------------------------------------------------------








rugby.addEventListener("click",()=>{
  calendarItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      calendarItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');
  
      const clickedDay = parseInt(item.querySelector(".calendar_date").innerText);
      const selectedDate = new Date(today);
      selectedDate.setDate(today.getDate() + (clickedDay - today.getDate()));
  
      const selectedFormatted = selectedDate.toISOString().split('T')[0];
      console.log("Fetching matches for:", selectedFormatted);
  
      fetchAndDisplayMatches(selectedFormatted);
    });
  });
  
  // ---- Default: show today matches ----
  const todayFormatted = today.toISOString().split('T')[0];
  fetchAndDisplayMatches(todayFormatted);
  
  // ---- Random number generator for odds ----
  function getRandomNumber() {
    return (Math.random() * (3.0 - 1.0) + 1.0).toFixed(2);
  }
  
  function formatDate(dateString) {
    const options = { month: 'long', day: 'numeric' , hour: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  }



  function fetchAndDisplayMatches(dateString) {
    matchesContainer.innerHTML = ''; // Clear previous matches
  
    fetch(`https://v1.rugby.api-sports.io/games?date=${dateString}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v1.rugby.api-sports.io",
        "x-rapidapi-key": "da9a7d826b00a51b28f92d31ef999384"
      }
    })
    .then(response => response.json())
    .then(data => {
      const matchesList = data.response;
  
      if (matchesList.length === 0) {
        matchesContainer.innerHTML = "<p class='no_matches'>No matches on this day</p>";
        return;
      }
  
      matchesList.forEach(match => {
        const matchSection = createMatchSection(match);
        matchesContainer.appendChild(matchSection);
      });
    })
    .catch(err => {
      console.error(err);
    });
  }
  
  
  
  
  // ---- Create match sections rugby ----
  

  
  
  function createMatchSection(data) {
    const section = document.createElement('section');
    section.classList.add('main_event_section');
    const deleteBtn = document.querySelector(".material-symbols-outlined bets")  ;
  
    const oddHome = getRandomNumber();
    const oddDraw = getRandomNumber();
    const oddAway = getRandomNumber();
    const addedMatches = new Set();
  
    const matchTime = data.status?.short === 'FT'
      ? 'Full Time'
      : data.status?.elapsed
      ? data.status.elapsed + "'"
      : formatDate(data.date);
  
    section.innerHTML = `
      <div class="main_event">
        <div class="main_event_names">
          <div class="title-box">
            <p class="elapsed">${matchTime}</p>
          </div>
  
          <div class="title-box">
            <div class="team">
                <img src="${data.teams.home.logo}" alt="">
                <p>${data.teams.home.name}</p>
            </div>
            <p class="goals">${data.scores?.home ?? ''} - ${data.scores?.away ?? ''}</p>
            <div class="team">
                <img src="${data.teams.away.logo}" alt="">
                <p>${data.teams.away.name}</p>
            </div>
          </div>
        </div>
        <div class="main_event_quick_odds">
            <div class="main_event_quick_odds_cell">
                <h1 class="main_event_quick_odds_number">1</h1>
                <input type="button" value="${oddHome}" class="main_event_quick_odds_btn"> 
            </div>
            <div class="main_event_quick_odds_cell">
                <h1 class="main_event_quick_odds_number">X</h1>
                <input type="button" value="${oddDraw}" class="main_event_quick_odds_btn"> 
            </div>
            <div class="main_event_quick_odds_cell">
                <h1 class="main_event_quick_odds_number">2</h1>
                <input type="button" value="${oddAway}" class="main_event_quick_odds_btn"> 
            </div>
        </div>
      </div>
    `;

    section.querySelectorAll('.main_event_quick_odds_btn').forEach(button => {
      button.addEventListener('click', function () {
        const odd = this.value;

        // Get team names
        const teamNames = section.querySelectorAll('.team p');
        const homeTeam = teamNames[0]?.textContent ?? 'Home';
        const awayTeam = teamNames[1]?.textContent ?? 'Away';
        const matchKey = `${homeTeam} vs ${awayTeam}`;
        if (addedMatches.has(matchKey)) {
          alert("You already placed a bet on this match!");
          return;
        }
        else if(matchTime=='Full Time'){
          alert("The match has already been played !");
          return;
        }


        // Create list item with delete button
        const li = document.createElement('li');
        
        li.innerHTML = `
          ${homeTeam} vs ${awayTeam} - <strong>${odd}</strong>
          <button class="delete-bet">🗑️</button>
        `;
        const deleteBtn = document.querySelector(".material-symbols-outlined.bets");
        const betList = document.querySelector(".bet_list");
        
        deleteBtn.addEventListener("click", () => {
          betList.innerHTML = ''; // This removes all <li> elements inside the list
          addedMatches.clear();
        });
        
    
        // Append to list
      
        betList.appendChild(li);
        addedMatches.add(matchKey);
    
        // Add delete functionality
        li.querySelector('.delete-bet').addEventListener('click', () => {
          li.remove();
          addedMatches.delete(matchKey);
        });
        

      });
    });

  
    return section;
  }

  
  
  
  
  fetch(`https://v1.rugby.api-sports.io/games?date=${todayFormatted}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v1.rugby.api-sports.io",
      "x-rapidapi-key": "da9a7d826b00a51b28f92d31ef999384"
    }
  }) 
  .then(response => response.json())
  .then(data => {
    const matchesList = data.response; // <-- Important!
    console.log(matchesList); // You will see the matches array
  
    const container = document.querySelector('#matchesContainer'); // Make sure you have this div in your HTML!
  
    matchesList.forEach(match => {
      const matchSection = createMatchSection(match);
      container.appendChild(matchSection);
    });
  })
  .catch(err => {
    console.log(err);
  });
})
