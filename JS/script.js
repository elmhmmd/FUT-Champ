document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('badgesModal');
  const modalClose = document.querySelector('.close-modal');
  const badgesGrid = document.getElementById('badgesGrid');
  
  // Predefined list of player badge data
const playerBadges = [
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/158/023/25_120.png',
    overall: '93',
    name: 'Lionel Messi',
    type: 'RW',
    stats: {
      PAC: '85',
      SHO: '92',
      PAS: '91',
      DRI: '95',
      DEF: '35'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/020/801/25_120.png',
    overall: '91',
    name: 'Cristiano Ronaldo',
    type: 'ST',
    stats: {
      PAC: '84',
      SHO: '94',
      PAS: '82',
      DRI: '87',
      DEF: '34'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/192/985/25_120.png',
    overall: '91',
    name: 'Kevin De Bruyne',
    type: 'CM',
    stats: {
      PAC: '74',
      SHO: '86',
      PAS: '93',
      DRI: '88',
      DEF: '64'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/231/747/25_120.png',
    overall: '92',
    name: 'Kylian Mbappé',
    type: 'ST',
    stats: {
      PAC: '97',
      SHO: '89',
      PAS: '80',
      DRI: '92',
      DEF: '39'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/203/376/25_120.png',
    overall: '90',
    name: 'Virgil van Dijk',
    type: 'CB',
    stats: {
      PAC: '75',
      SHO: '60',
      PAS: '70',
      DRI: '72',
      DEF: '92'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/205/452/25_120.png',
    overall: '88',
    name: 'Antonio Rudiger',
    type: 'CB',
    stats: {
      PAC: '82',
      SHO: '55',
      PAS: '73',
      DRI: '70',
      DEF: '86'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/190/871/25_120.png',
    overall: '90',
    name: 'Neymar Jr',
    type: 'LW',
    stats: {
      PAC: '91',
      SHO: '83',
      PAS: '86',
      DRI: '94',
      DEF: '37'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/192/985/25_120.png',
    overall: '89',
    name: 'Mohamed Salah',
    type: 'RW',
    stats: {
      PAC: '93',
      SHO: '87',
      PAS: '81',
      DRI: '90',
      DEF: '45'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/212/622/25_120.png',
    overall: '89',
    name: 'Joshua Kimmich',
    type: 'CM',
    stats: {
      PAC: '70',
      SHO: '75',
      PAS: '88',
      DRI: '84',
      DEF: '84'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/200/389/25_120.png',
    overall: '91',
    name: 'Jan Oblak',
    type: 'GK',
    stats: {
      DIV: '89',
      HAN: '90',
      KIC: '78',
      REF: '92',
      SPD: '50',
      POS: '88'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/177/003/25_120.png',
    overall: '88',
    name: 'Luka Modrić',
    type: 'CM',
    stats: {
      PAC: '74',
      SHO: '78',
      PAS: '89',
      DRI: '90',
      DEF: '72'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/238/794/25_120.png',
    overall: '89',
    name: 'Vinicius Junior',
    type: 'LW',
    stats: {
      PAC: '91',
      SHO: '88',
      PAS: '85',
      DRI: '94',
      DEF: '39'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/231/410/25_120.png',
    overall: '82',
    name: 'Brahim Diáz',
    type: 'LW',
    stats: {
      PAC: '85',
      SHO: '74',
      PAS: '78',
      DRI: '85',
      DEF: '31'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/165/153/25_120.png',
    overall: '90',
    name: 'Karim Benzema',
    type: 'ST',
    stats: {
      PAC: '77',
      SHO: '90',
      PAS: '83',
      DRI: '88',
      DEF: '40'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/239/085/25_120.png',
    overall: '91',
    name: 'Erling Haaland',
    type: 'ST',
    stats: {
      PAC: '89',
      SHO: '94',
      PAS: '65',
      DRI: '80',
      DEF: '45'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/215/914/25_120.png',
    overall: '87',
    name: 'NGolo Kanté',
    type: 'CDM',
    stats: {
      PAC: '77',
      SHO: '66',
      PAS: '75',
      DRI: '82',
      DEF: '88'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/234/396/25_120.png',
    overall: '84',
    name: 'Alphonso Davies',
    type: 'LB',
    stats: {
      PAC: '96',
      SHO: '68',
      PAS: '77',
      DRI: '82',
      DEF: '76'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/209/981/25_120.png',
    overall: '84',
    name: 'Yassine Bounou',
    type: 'GK',
    stats: {
      DIV: '81',
      HAN: '82',
      KIC: '77',
      REF: '86',
      SPD: '38',
      POS: '83'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/212/198/25_120.png',
    overall: '88',
    name: 'Bruno Fernandes',
    type: 'CM',
    stats: {
      PAC: '75',
      SHO: '85',
      PAS: '89',
      DRI: '84',
      DEF: '69'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/233/049/25_120.png',
    overall: '84',
    name: 'Jadon Sancho',
    type: 'LW',
    stats: {
      PAC: '85',
      SHO: '74',
      PAS: '78',
      DRI: '88',
      DEF: '34'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/231/281/25_120.png',
    overall: '87',
    name: 'Trent Alexander-Arnold',
    type: 'RB',
    stats: {
      PAC: '76',
      SHO: '66',
      PAS: '89',
      DRI: '80',
      DEF: '79'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/235/212/25_120.png',
    overall: '84',
    name: 'Achraf Hakimi',
    type: 'RB',
    stats: {
      PAC: '91',
      SHO: '76',
      PAS: '80',
      DRI: '80',
      DEF: '75'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/235/410/25_120.png',
    overall: '83',
    name: 'Youssef En-Nesyri',
    type: 'ST',
    stats: {
      PAC: '82',
      SHO: '82',
      PAS: '63',
      DRI: '77',
      DEF: '36'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/236/401/25_120.png',
    overall: '81',
    name: 'Noussair Mazraoui',
    type: 'LB',
    stats: {
      PAC: '78',
      SHO: '66',
      PAS: '77',
      DRI: '83',
      DEF: '77'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/259/480/25_120.png',
    overall: '83',
    name: 'Ismael Saibari',
    type: 'CM',
    stats: {
      PAC: '89',
      SHO: '78',
      PAS: '80',
      DRI: '86',
      DEF: '55'
    }
  },
  {
    badgeImg: './Assets/Images/badge_gold.webp',
    playerImg: 'https://cdn.sofifa.net/players/230/621/25_120.png',
    overall: '89',
    name: 'Gianluigi Donnarumma',
    type: 'GK',
    stats: {
      DIV: '88',
      HAN: '84',
      KIC: '75',
      REF: '90',
      SPD: '50',
      POS: '85'
    }
  }
];

  // Track selected players
  const selectedPlayers = new Set();

  // Variable to track which slot was clicked
  let currentSlot = null;

  // Function to clear and populate badges grid
  function populateBadgesGrid(slotPosition) {
    // Clear existing badges
    badgesGrid.innerHTML = '';

    // Filter badges based on exact position match and not already selected
    const filteredBadges = playerBadges.filter(player => 
      player.type === slotPosition && !selectedPlayers.has(player.name)
    );

    // Populate filtered badges
    filteredBadges.forEach(player => {
      const badgeEl = document.createElement('div');
      badgeEl.className = "w-full aspect-[1/1.4] relative hover:scale-105 transition-transform cursor-pointer";
      
      // Create the badge image
      const badgeImgEl = document.createElement('img');
      badgeImgEl.src = player.badgeImg;
      badgeImgEl.alt = "Player badge";
      badgeImgEl.className = "absolute w-full h-full z-10";
      
      // Create the relative container for player details
      const playerDetailsEl = document.createElement('div');
      playerDetailsEl.className = "relative z-20 w-full h-full";
      
      // Create player image
      const playerImgEl = document.createElement('img');
      playerImgEl.src = player.playerImg;
      playerImgEl.alt = "Player Photo";
      playerImgEl.className = "absolute w-[60%] top-[20%] right-[20%]";
      
      // Create overall rating
      const overallEl = document.createElement('div');
      overallEl.className = "absolute top-[27%] left-[16%] text-center text-neutral-700";
      overallEl.innerHTML = `
        <p class="text-[40%] lg:text-[90%] font-bold">${player.overall}</p>
        <p class="text-[27%] lg:text-[78%] font-semibold">${player.type}</p>
      `;
      
      // Create player name and stats container
      const playerInfoEl = document.createElement('div');
      playerInfoEl.className = "absolute top-[65%] w-full text-center text-neutral-700";
      
      // Player name
      const nameEl = document.createElement('p');
      nameEl.className = "text-[50%] lg:text-[80%] font-semibold";
      nameEl.textContent = player.name;
      
      // Stats container
      const statsEl = document.createElement('div');
      statsEl.className = "flex justify-between items-center px-[16%]";
      
      // Generate stats dynamically
      const statsHtml = Object.entries(player.stats).map(([key, value]) => `
        <div class="text-center font-semibold text-neutral-700">
          <p class="text-[15%] md:text-[50%]">${key}</p>
          <p class="text-[15%] md:text-[50%] font-semibold">${value}</p>
        </div>
      `).join('');
      
      statsEl.innerHTML = statsHtml;
      
      // Assemble the badge element
      playerInfoEl.appendChild(nameEl);
      playerInfoEl.appendChild(statsEl);
      
      playerDetailsEl.appendChild(playerImgEl);
      playerDetailsEl.appendChild(overallEl);
      playerDetailsEl.appendChild(playerInfoEl);
      
      badgeEl.appendChild(badgeImgEl);
      badgeEl.appendChild(playerDetailsEl);
      
      // Add click event to select player
      badgeEl.addEventListener('click', () => {
        if (currentSlot) {
          // Clone the entire badge element
          const playerBadgeClone = badgeEl.cloneNode(true);
          
          // Remove the hover and cursor classes
          playerBadgeClone.classList.remove('hover:scale-105', 'cursor-pointer', 'transition-transform');
          
          // Clear the current slot
          currentSlot.innerHTML = '';
          
          // Add the cloned badge to the slot
          currentSlot.appendChild(playerBadgeClone);
          
          // Mark the player as selected
          selectedPlayers.add(player.name);
          
          // Close the modal
          modal.style.display = 'none';
          
          // Reset current slot
          currentSlot = null;
        }
      });
      
      // Add to grid
      badgesGrid.appendChild(badgeEl);
    });
  }

  // Add click event to all badge triggers
  document.querySelectorAll('.badge-trigger').forEach(badge => {
    badge.addEventListener('click', (event) => {
      // Store the parent slot that was clicked
      currentSlot = event.target.closest('.player-slot');
      
      // Get the slot's position
      const slotPosition = currentSlot.id;
      
      // Populate grid with players for this exact position
      populateBadgesGrid(slotPosition);
      
      modal.style.display = 'block';
    });
  });

  // Close modal when clicking on close button or outside the modal
  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
    currentSlot = null;
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      currentSlot = null;
    }
  });
});