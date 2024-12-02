const players = [
  {
    name: "Lionel Messi",
    photo: "https://cdn.sofifa.net/players/158/023/25_120.png",
    position: "RW",
    nationality: "Argentina",
    flag: "https://cdn.sofifa.net/flags/ar.png",
    club: "Inter Miami",
    logo: "https://cdn.sofifa.net/meta/team/239235/120.png",
    rating: 93,
    pace: 85,
    shooting: 92,
    passing: 91,
    dribbling: 95,
    defending: 35,
    physical: 65,
  },
  {
    name: "Cristiano Ronaldo",
    photo: "https://cdn.sofifa.net/players/020/801/25_120.png",
    position: "ST",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Al Nassr",
    logo: "https://cdn.sofifa.net/meta/team/2506/120.png",
    rating: 91,
    pace: 84,
    shooting: 94,
    passing: 82,
    dribbling: 87,
    defending: 34,
    physical: 77,
  },
  {
    name: "Kevin De Bruyne",
    photo: "https://cdn.sofifa.net/players/192/985/25_120.png",
    position: "CM",
    nationality: "Belgium",
    flag: "https://cdn.sofifa.net/flags/be.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/flags/be.png",
    rating: 91,
    pace: 74,
    shooting: 86,
    passing: 93,
    dribbling: 88,
    defending: 64,
    physical: 78,
  },
  {
    name: "Kylian Mbappé",
    photo: "https://cdn.sofifa.net/players/231/747/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 92,
    pace: 97,
    shooting: 89,
    passing: 80,
    dribbling: 92,
    defending: 39,
    physical: 77,
  },
  {
    name: "Virgil van Dijk",
    photo: "https://cdn.sofifa.net/players/203/376/25_120.png",
    position: "CB",
    nationality: "Netherlands",
    flag: "https://cdn.sofifa.net/flags/nl.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 90,
    pace: 75,
    shooting: 60,
    passing: 70,
    dribbling: 72,
    defending: 92,
    physical: 86,
  },
  {
    name: "Antonio Rudiger",
    photo: "https://cdn.sofifa.net/players/205/452/25_120.png",
    position: "CB",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 82,
    shooting: 55,
    passing: 73,
    dribbling: 70,
    defending: 86,
    physical: 86,
  },
  {
    name: "Neymar Jr",
    photo: "https://cdn.sofifa.net/players/190/871/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 90,
    pace: 91,
    shooting: 83,
    passing: 86,
    dribbling: 94,
    defending: 37,
    physical: 61,
  },
  {
    name: "Mohamed Salah",
    photo:
      "https://imgs.search.brave.com/U0GsfmLmrCkU8yqQPMFuf1D_oOExTbrczeot-Oo-Aws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZnV0d2l6LmNvbS9h/c3NldHMvaW1nL2Zp/ZmEyMS9mYWNlcy8y/MDkzMzEucG5n",
    position: "RW",
    nationality: "Egypt",
    flag: "https://cdn.sofifa.net/flags/eg.png",
    club: "Liverpool",
    logo: "https://cdn.sofifa.net/meta/team/8/120.png",
    rating: 89,
    pace: 93,
    shooting: 87,
    passing: 81,
    dribbling: 90,
    defending: 45,
    physical: 75,
  },
  {
    name: "Joshua Kimmich",
    photo: "https://cdn.sofifa.net/players/212/622/25_120.png",
    position: "CM",
    nationality: "Germany",
    flag: "https://cdn.sofifa.net/flags/de.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 89,
    pace: 70,
    shooting: 75,
    passing: 88,
    dribbling: 84,
    defending: 84,
    physical: 81,
  },
  {
    name: "Jan Oblak",
    photo: "https://cdn.sofifa.net/players/200/389/25_120.png",
    position: "GK",
    nationality: "Slovenia",
    flag: "https://cdn.sofifa.net/flags/si.png",
    club: "Atletico Madrid",
    logo: "https://cdn.sofifa.net/meta/team/7980/120.png",
    rating: 91,
    diving: 89,
    handling: 90,
    kicking: 78,
    reflexes: 92,
    speed: 50,
    positioning: 88,
  },
  {
    name: "Luka Modrić",
    photo: "https://cdn.sofifa.net/players/177/003/25_120.png",
    position: "CM",
    nationality: "Croatia",
    flag: "https://cdn.sofifa.net/flags/hr.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 88,
    pace: 74,
    shooting: 78,
    passing: 89,
    dribbling: 90,
    defending: 72,
    physical: 65,
  },
  {
    name: "Vinicius Junior",
    photo: "https://cdn.sofifa.net/players/238/794/25_120.png",
    position: "LW",
    nationality: "Brazil",
    flag: "https://cdn.sofifa.net/flags/br.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 89,
    pace: 91,
    shooting: 88,
    passing: 85,
    dribbling: 94,
    defending: 39,
    physical: 61,
  },
  {
    name: "Brahim Diáz",
    photo: "https://cdn.sofifa.net/players/231/410/25_120.png",
    position: "LW",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Real Madrid",
    logo: "https://cdn.sofifa.net/meta/team/3468/120.png",
    rating: 82,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 85,
    defending: 31,
    physical: 56,
  },
  {
    name: "Karim Benzema",
    photo: "https://cdn.sofifa.net/players/165/153/25_120.png",
    position: "ST",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 90,
    pace: 77,
    shooting: 90,
    passing: 83,
    dribbling: 88,
    defending: 40,
    physical: 78,
  },
  {
    name: "Erling Haaland",
    photo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    position: "ST",
    nationality: "Norway",
    flag: "https://cdn.sofifa.net/flags/no.png",
    club: "Manchester City",
    logo: "https://cdn.sofifa.net/players/239/085/25_120.png",
    rating: 91,
    pace: 89,
    shooting: 94,
    passing: 65,
    dribbling: 80,
    defending: 45,
    physical: 88,
  },
  {
    name: "N'Golo Kanté",
    photo: "https://cdn.sofifa.net/players/215/914/25_120.png",
    position: "CDM",
    nationality: "France",
    flag: "https://cdn.sofifa.net/flags/fr.png",
    club: "Al-Ittihad",
    logo: "https://cdn.sofifa.net/meta/team/476/120.png",
    rating: 87,
    pace: 77,
    shooting: 66,
    passing: 75,
    dribbling: 82,
    defending: 88,
    physical: 82,
  },
  {
    name: "Alphonso Davies",
    photo: "https://cdn.sofifa.net/players/234/396/25_120.png",
    position: "LB",
    nationality: "Canada",
    flag: "https://cdn.sofifa.net/flags/ca.png",
    club: "Bayern Munich",
    logo: "https://cdn.sofifa.net/meta/team/503/120.png",
    rating: 84,
    pace: 96,
    shooting: 68,
    passing: 77,
    dribbling: 82,
    defending: 76,
    physical: 77,
  },
  {
    name: "Yassine Bounou",
    photo: "https://cdn.sofifa.net/players/209/981/25_120.png",
    position: "GK",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Al-Hilal",
    logo: "https://cdn.sofifa.net/meta/team/7011/120.png",
    rating: 84,
    diving: 81,
    handling: 82,
    kicking: 77,
    reflexes: 86,
    speed: 38,
    positioning: 83,
  },
  {
    name: "Bruno Fernandes",
    photo: "https://cdn.sofifa.net/players/212/198/25_120.png",
    position: "CM",
    nationality: "Portugal",
    flag: "https://cdn.sofifa.net/flags/pt.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 88,
    pace: 75,
    shooting: 85,
    passing: 89,
    dribbling: 84,
    defending: 69,
    physical: 77,
  },
  {
    name: "Jadon Sancho",
    photo: "https://cdn.sofifa.net/players/233/049/25_120.png",
    position: "LW",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 84,
    pace: 85,
    shooting: 74,
    passing: 78,
    dribbling: 88,
    defending: 34,
    physical: 63,
  },
  {
    name: "Trent Alexander-Arnold",
    photo: "https://cdn.sofifa.net/players/231/281/25_120.png",
    position: "RB",
    nationality: "England",
    flag: "https://cdn.sofifa.net/flags/gb-eng.png",
    logo: "https://cdn.sofifa.net/flags/gb-eng.png",
    club: "Liverpool",
    rating: 87,
    pace: 76,
    shooting: 66,
    passing: 89,
    dribbling: 80,
    defending: 79,
    physical: 71,
  },
  {
    name: "Achraf Hakimi",
    photo: "https://cdn.sofifa.net/players/235/212/25_120.png",
    position: "RB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 84,
    pace: 91,
    shooting: 76,
    passing: 80,
    dribbling: 80,
    defending: 75,
    physical: 78,
  },
  {
    name: "Youssef En-Nesyri",
    photo: "https://cdn.sofifa.net/players/235/410/25_120.png",
    position: "ST",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Fenerbahçe",
    logo: "https://cdn.sofifa.net/meta/team/88/120.png",
    rating: 83,
    pace: 82,
    shooting: 82,
    passing: 63,
    dribbling: 77,
    defending: 36,
    physical: 80,
  },
  {
    name: "Noussair Mazraoui",
    photo: "https://cdn.sofifa.net/players/236/401/25_120.png",
    position: "LB",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "Manchester United",
    logo: "https://cdn.sofifa.net/meta/team/14/120.png",
    rating: 81,
    pace: 78,
    shooting: 66,
    passing: 77,
    dribbling: 83,
    defending: 77,
    physical: 71,
  },
  {
    name: "Ismael Saibari",
    photo: "https://cdn.sofifa.net/players/259/480/25_120.png",
    position: "CM",
    nationality: "Morocco",
    flag: "https://cdn.sofifa.net/flags/ma.png",
    club: "PSV",
    logo: "https://cdn.sofifa.net/meta/team/682/120.png",
    rating: 83,
    pace: 89,
    shooting: 78,
    passing: 80,
    dribbling: 86,
    defending: 55,
    physical: 84,
  },
  {
    name: "Gianluigi Donnarumma",
    photo: "https://cdn.sofifa.net/players/230/621/25_120.png",
    position: "GK",
    nationality: "Italy",
    flag: "https://cdn.sofifa.net/flags/it.png",
    club: "Paris Saint-Germain",
    logo: "https://cdn.sofifa.net/meta/team/591/120.png",
    rating: 89,
    diving: 88,
    handling: 84,
    kicking: 75,
    reflexes: 90,
    speed: 50,
    positioning: 85,
  },
];

let activePlayer = [];

let filteredPlayer = players;

let existName = null;

let playerList = document.querySelector(".players_list");

let sideBar_title = document.getElementById("sideBar_title");

let playerForm = document.getElementById("playerForm");

let createPlayerPop = document.getElementById("createPop");

const openListPlayers = () => {
  document.getElementById("players_list").toggleAttribute("open", true);
};

const closeListPlayers = () => {
  document.getElementById("players_list").toggleAttribute("open", false);
};

const onOpenCreatePlayer = () => {
  createPlayerPop.toggleAttribute("open", true);
};

const onCloseCreatePlayer = () => {
  createPlayerPop.toggleAttribute("open", false);
};

const checkPlaceholders = () => {
  document.querySelectorAll(".placeholder_player").forEach((ele) => {
    ele.onclick = () => {
      const targetPosition = ele;
      sideBar_title.textContent = "Remplacement";
      filteredPlayer = players.filter(
        (player) =>
          player.position === targetPosition.id &&
          !activePlayer.some((active) => active.name === player.name)
      );
      openListPlayers();
      renderListPlayers(targetPosition);
    };
  });
};

checkPlaceholders();

const seeDetails = (playerName) => {
  let player_details = document.getElementById("player_details");
  player_details.toggleAttribute("open");

  sideBar_title.textContent = "Player Details";

  const detailsPlayer = players.filter(
    (pl) => pl.name.split(" ")[0] === playerName.split(" ")[0]
  );

  let badge = "badge_gold.webp";

  const cardDetails = `
  <div class="cursor-pointer bg-zinc-50 rounded-lg shadow-md max-w-lg p-3">
  <div class="flex items-center justify-between mb-3 ">
    <h3 class="font-bold text-xl text-neutral-700">
     Card details
    </h3>
    <img src="./Assets/Icons/+.webp" class="w-5" onclick="closeDetails()" >
  </div>
  <div class="flex ">
  <img src=${detailsPlayer[0].photo} alt="" class="me-2 w-20 lg:w-32" />
  <div class="flex-grow">
    <div class="flex justify-between pe-5 flex-wrap gap-x-1 gap-y-2">
        <h3 class="font-bold text-xl  text-neutral-700">${
          detailsPlayer[0].name
        }</h3>
        <div class="flex gap-x-2">
        ${
          detailsPlayer[0].flag
            ? `<img src=${detailsPlayer[0].flag} class="w-7" >`
            : ""
        }
        ${
          detailsPlayer[0].logo
            ? `<img src=${detailsPlayer[0].logo} class="w-7" >`
            : ""
        }
        </div>
    </div>
    <div class="flex items-center gap-x-2 mt-1">
      <img src="./assets/position.svg" alt="" class="w-5" />
      <span class="font-bold text-red-400">${detailsPlayer[0].position}</span>
    </div>
    <div class="text-[70%] mt-3 lg:text-[100%] flex items-start gap-x-6 flex-wrap">
        <h4 class="font-bold">More info :</h4>
        ${
          detailsPlayer[0].pace
            ? `<p class="font-bold text-blue-800">PAC : <span>${detailsPlayer[0].pace} |</span></p>`
            : ""
        }
        ${
          detailsPlayer[0].shooting
            ? `<p class="font-bold text-blue-800">SHO : <span>${detailsPlayer[0].shooting} |</span></p>`
            : ""
        }
        ${
          detailsPlayer[0].passing
            ? `<p class="font-bold text-blue-800">PAS : <span>${detailsPlayer[0].passing} |</span></p>`
            : ""
        }
        ${
          detailsPlayer[0].dribbling
            ? `<p class="font-bold text-blue-800">DRB : <span>${detailsPlayer[0].dribbling} |</span></p>`
            : ""
        }
        ${
          detailsPlayer[0].defending
            ? `<p class="font-bold text-blue-800">DEF : <span>${detailsPlayer[0].defending} |</span></p>`
            : ""
        }
        ${
          detailsPlayer[0].physical
            ? `<p class="font-bold text-blue-800">PHY : <span>${detailsPlayer[0].physical} |</span></p>`
            : ""
        }
        ${
          detailsPlayer[0].diving
            ? `<p class="font-bold text-blue-800">DIV : <span>${detailsPlayer[0].diving} |</span></p>`
            : ""
        }
        ${
          detailsPlayer[0].handling
            ? `<p class="font-bold text-blue-800">HDL : <span>${detailsPlayer[0].handling} |</span></p>`
            : ""
        }
        ${
          detailsPlayer[0].kicking
            ? `<p class="font-bold text-blue-800">KIK : <span>${detailsPlayer[0].kicking} |</span></p>`
            : ""
        }
        ${
          detailsPlayer[0].reflexes
            ? `<p class="font-bold text-blue-800">RFL : <span>${detailsPlayer[0].reflexes} |</span></p>`
            : ""
        }
        ${
          detailsPlayer[0].speed
            ? `<p class="font-bold text-blue-800">SPD : <span>${detailsPlayer[0].speed} |</span></p>`
            : ""
        }
        ${
          detailsPlayer[0].positioning
            ? `<p class="font-bold text-blue-800">POS : <span>${detailsPlayer[0].positioning} |</span></p>`
            : ""
        }
    </div>
  </div>
  </div>
  </div>
`;
  player_details.innerHTML = cardDetails;

  renderListPlayers();
};

const closeDetails = () => {
  player_details.toggleAttribute("open", false);
};

const deletePlayer = (target) => {
  const playerName = target.getAttribute("data-name");

  activePlayer = activePlayer.filter(
    (pl) => pl.name.split(" ")[0] !== playerName
  );

  // Create a new placeholder card
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
      <div
        id="${target.id}"
        class="placeholder_player w-16 sm:w-24 md:w-30 lg:w-32 aspect-[1/1.4] relative hover:scale-105 cursor-pointer transition-transform"
      >
        <img
          src="./Assets/Images/badge_gold.webp"
          alt="Player badge"
          class="absolute w-full h-full z-10"
        />
        <div
          class="relative z-20 w-[35%] aspect-square rounded-full bg-white flex items-center justify-center top-[40%] left-[35%]"
        >
          <img src="./Assets/Images/+.webp" alt="" class="w-[40%] rotate-45" />
        </div>
      </div>
    `;

  const placeholderCard = newDiv.firstElementChild;
  target.replaceWith(placeholderCard);
  checkPlaceholders();
};

const editPlayer = (player) => {
  existName = player.name.split(" ")[0];
  const targetPosition = document.querySelector(`[data-name='${existName}']`);
  sideBar_title.textContent = "Switch Player";

  activePlayer = activePlayer.filter((pl) => pl.name !== player.name);
  openListPlayers();
  filteredPlayer = players.filter(
    (pl) =>
      pl.position === targetPosition.id && pl.name.split(" ")[0] !== existName
  );

  if (targetPosition) {
    renderListPlayers(targetPosition);
  } else {
    console.error("Target position not found for editing.");
  }
  existName = null;
};

const createPlayerCard = (player) => {

  const card = document.createElement("div");
  card.dataset.name = player.name.split(" ")[0];
  card.id = player.position;
  card.className =
    "w-16 sm:w-24 md:w-30 group lg:w-32 xl:w-36 aspect-[1/1.4] relative z-20 cursor-pointer hover:scale-110 transition-transform activePlayers";

  card.innerHTML = `
        <div class="absolute hidden z-30 group-hover:flex w-[110%] lg:w-[100%] items-center justify-between p-2 shadow-lg left-0 -top-[20%] lg:-top-[3%] bg-white rounded-lg">
        </div>
        <img src="./Assets/Images/badge_gold.webp" alt="Player badge" class="absolute w-full h-full z-10"/>
        <div class="relative z-20 w-full h-full">
            <img src="${player.photo}" alt="Player Photo" class="absolute w-[60%] top-[20%] right-[20%]"/>
            <div class="absolute top-[27%] left-[16%] text-center text-white">
                <p class="text-[40%] lg:text-[90%] font-bold">${player.rating}</p>
                <p class="text-[27%] lg:text-[78%] font-semibold">${player.position}</p>
            </div>
            <div class="absolute top-[65%] w-full text-center text-white">
                <p class="text-[50%] max-w-[70%] mx-auto w-full truncate lg:text-[80%] font-semibold">${player.name}</p>
                <div class="flex items-center justify-center gap-x-2"> 
                    <img src="${player.logo}" class="w-[10%] h-[10%]">
                    <img src="${player.flag}" class="w-[10%] h-[10%]">
                </div>
            </div>
        </div>
    `;

  const actionMenu = card.querySelector(".absolute.hidden");
  const seeDet = document.createElement("img");
  seeDet.src = "./Assets/Icons/view.svg";
  seeDet.className = "w-4";
  seeDet.onclick = () => seeDetails(player.name);

  const editpl = document.createElement("img");
  editpl.src = "./Assets/Icons/modify-icon.webp";
  editpl.className = "w-4";
  editpl.onclick = () => editPlayer(player, card);

  const deletPl = document.createElement("img");
  deletPl.src = "./Assets/Icons/Trash Can Icon.png";
  deletPl.className = "w-4";
  deletPl.onclick = () => deletePlayer(card);

  actionMenu.appendChild(seeDet);
  actionMenu.appendChild(editpl);
  actionMenu.appendChild(deletPl);

  return card;
};

const appendPlayer = (player, targetElement) => {
  openListPlayers();
  if (!targetElement) {
    console.error("Invalid target element.");
    return;
  }

  if (existName && typeof existName === "string") {
    activePlayer = players.filter((pl) => pl.name.split(" ")[0] !== existName);
  }

  const newCard = createPlayerCard(player);
  activePlayer.push(player);

  targetElement.replaceWith(newCard);

  existName = null;
  closeListPlayers();
};

const renderListPlayers = (targetPosition) => {
  playerList.innerHTML = "";

  filteredPlayer.forEach((player) => {
    const playerCard = document.createElement("div");
    playerCard.className = `flex py-3 ${
      targetPosition && "cursor-pointer"
    } bg-slate-300 rounded-lg shadow-md`;

   playerCard.innerHTML = `
    <div class="flex items-center bg-slate-300 rounded-lg p-4">
        <img src=${player.photo} alt="" class="me-4 w-24 lg:w-32 rounded-lg" />
        <div class="flex-grow">
            <div class="flex justify-between items-center pe-5 mb-2">
                <h3 class="font-bold text-xl text-black">${player.name}</h3>
                <div class="flex gap-x-2">
                    ${player.flag ? `<img src=${player.flag} class="w-7 rounded-full" >` : ""}
                    ${player.logo ? `<img src=${player.logo} class="w-7 rounded-full" >` : ""}
                </div>
            </div>
            <div class="mb-2">
                <span class="font-bold text-black">${player.position}</span>
            </div>
            <div class="grid grid-cols-3 gap-2 text-[70%] lg:text-[100%]">
                ${
                    player.pace
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">PAC: <span class="text-white">${player.pace}</span></p>`
                        : ""
                }
                ${
                    player.shooting
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">SHO: <span class="text-white">${player.shooting}</span></p>`
                        : ""
                }
                ${
                    player.passing
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">PAS: <span class="text-white">${player.passing}</span></p>`
                        : ""
                }
                ${
                    player.dribbling
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">DRB: <span class="text-white">${player.dribbling}</span></p>`
                        : ""
                }
                ${
                    player.defending
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">DEF: <span class="text-white">${player.defending}</span></p>`
                        : ""
                }
                ${
                    player.physical
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">PHY: <span class="text-white">${player.physical}</span></p>`
                        : ""
                }
                ${
                    player.diving
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">DIV: <span class="text-white">${player.diving}</span></p>`
                        : ""
                }
                ${
                    player.handling
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">HDL: <span class="text-white">${player.handling}</span></p>`
                        : ""
                }
                ${
                    player.kicking
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">KICK: <span class="text-white">${player.kicking}</span></p>`
                        : ""
                }
                ${
                    player.reflexes
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">RFL: <span class="text-white">${player.reflexes}</span></p>`
                        : ""
                }
                ${
                    player.speed
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">SPD: <span class="text-white">${player.speed}</span></p>`
                        : ""
                }
                ${
                    player.positioning
                        ? `<p class="bg-amber-900/20 p-1 rounded text-center font-bold text-amber-900">POS: <span class="text-white">${player.positioning}</span></p>`
                        : ""
                }
            </div>
            <div class="w-full flex justify-end px-3 mt-3">
                ${
                    existName
                        ? `<img src="./Assets/Icons/modify-icon.webp" class="w-7" >`
                        : ""
                }
            </div>
        </div>
    </div>
`;

    if (targetPosition) {
      playerCard.onclick = () => {
        appendPlayer(player, targetPosition);
      };
    }

    playerList.appendChild(playerCard);
  });
};

const positionAttributes = {
  GK: [
    { name: "diving", label: "Diving", type: "number" },
    { name: "handling", label: "Handling", type: "number" },
    { name: "kicking", label: "Kicking", type: "number" },
    { name: "reflexes", label: "Reflexes", type: "number" },
    { name: "speed", label: "Speed", type: "number" },
    { name: "positioning", label: "Positioning", type: "number" },
  ],
  CM: [
    { name: "pace", label: "Pace", type: "number" },
    { name: "shooting", label: "Shooting", type: "number" },
    { name: "passing", label: "Passing", type: "number" },
    { name: "dribbling", label: "Dribbling", type: "number" },
    { name: "defending", label: "Defending", type: "number" },
    { name: "physical", label: "Physical", type: "number" },
  ],
};

document.getElementById("positionSelect").addEventListener("change", (e) => {
  let dynamicFields = document.getElementById("dynamicFields");

  dynamicFields.innerHTML = "";

  let position = e.target.value === "GK" ? "GK" : "CM";

  positionAttributes[position].forEach((attr) => {
    const field = document.createElement("div");
    field.className = "mb-3";
    field.innerHTML = `
        <div class="mb-2 block">
        <label class="font-medium">${attr.label}</label>
        <input
          type="${attr.type}"
          name="${attr.name}"
          data-ref = "player_statistic"
          class="w-full border rounded px-3 py-2"
          placeholder="${attr.label}"
        />
        <small class="text-red-500 hidden">

        </small>
        </div>
      `;
    dynamicFields.appendChild(field);
  });
});

document.getElementById("playerForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const playerForm = document.getElementById("playerForm");
  let formData = new FormData(playerForm);
  let playerData = Object.fromEntries(formData.entries());

  const nameInput = e.target["name"];
  const photoInput = e.target["photo"];
  const flagInput = e.target["flag"];
  const logoInput = e.target["logo"];
  const ratingInput = e.target["rating"];
  const nameError = nameInput.nextElementSibling;
  const photoError = photoInput.nextElementSibling;
  const flagError = flagInput.nextElementSibling;
  const logoError = logoInput.nextElementSibling;
  const ratingError = ratingInput.nextElementSibling;

  console.log(flagInput.value);
  console.log(logoInput.value);
  console.log(ratingInput.value);

  let isValid = true;

  const urlRegex =
    /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;

  // Name validation
  if (
    nameInput.value.trim().length < 2 ||
    /[^a-zA-Z\s]/.test(nameInput.value.trim())
  ) {
    nameError.textContent = "Invalid name. Please enter at least 2 letters.";
    nameError.classList.remove("hidden");
    isValid = false;
  } else {
    nameError.textContent = "";
    nameError.classList.add("hidden");
  }

  // Photo  validation

  if (photoInput.value.length < 2 && !urlRegex.test(photoInput.value.trim())) {
    photoError.textContent = "Please provide a valid URL.";
    photoError.classList.remove("hidden");
    isValid = false;
  } else {
    photoError.textContent = "";
    photoError.classList.add("hidden");
  }

  // logo validation

  if (logoInput.value.length < 2 && !urlRegex.test(logoInput.value.trim())) {
    logoError.textContent = "Please provide a valid URL.";
    logoError.classList.remove("hidden");
    isValid = false;
  } else {
    logoError.textContent = "";
    logoError.classList.add("hidden");
  }

  // flag validation

  if (flagInput.value.length < 2 && !urlRegex.test(flagInput.value.trim())) {
    flagError.textContent = "Please provide a valid URL.";
    flagError.classList.remove("hidden");
    isValid = false;
  } else {
    flagError.textContent = "";
    flagError.classList.add("hidden");
  }

  // rating validation
  if (
    !ratingInput.value.trim() ||
    isNaN(ratingInput.value) ||
    ratingInput.value < 1 ||
    ratingInput.value > 100
  ) {
    ratingError.textContent = "Rating must be a number between 1 and 100.";
    ratingError.classList.remove("hidden");
    isValid = false;
  } else {
    ratingError.textContent = "";
    ratingError.classList.add("hidden");
  }

  let statisctics = document.querySelectorAll(
    "input[data-ref='player_statistic']"
  );
  statisctics.forEach((ele) => {
    if (ele.value < 1) {
      ele.nextElementSibling.classList.remove("hidden");
      ele.nextElementSibling.textContent = "Field is required!";
      isValid = false;
      return;
    } else if (ele.value > 100) {
      ele.nextElementSibling.classList.remove("hidden");
      ele.nextElementSibling.textContent = "number must be between 1 and 100";
      isValid = false;
    } else {
      ele.nextElementSibling.classList.add("hidden");
    }
  });

  if (!isValid) {
    return;
  }
  document.querySelectorAll("small").forEach((ele) => {
    ele.classList.add("hidden");
  });
  document.querySelectorAll("#playerForm input").forEach((ele) => {
    ele.value = "";
  });

  players.push(playerData);

  e.target["name"].value = "";
  e.target["photo"].value = "";
  e.target["flag"].value = "";
  e.target["logo"].value = "";
  e.target["rating"].value = "";
  e.target["position"].value = "";

  onCloseCreatePlayer();
});

const showAllPlayers = () => {
  sideBar_title.textContent = "All Players available";
  existName = null;
  filteredPlayer = players;
  renderListPlayers();
  openListPlayers();
};
