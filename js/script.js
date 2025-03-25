let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie",
    "Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans",
    "Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy",
    "Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect",
    "Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine",
    "Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel",
    "Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd",
    "Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno",
    "Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing",
    "Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime",
    "Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon",
    "Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini",
    "Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.getElementById("host-name").textContent = "Alex";
document.querySelector("#collaborator-name").textContent = "Bob";
document.getElementById("collaborator-2-name").textContent = "Fall";

//Question 2


//Question 3
let firstNameInput = document.getElementById("first_name");
let lastNameInput = document.getElementById("last_name");

firstNameInput.addEventListener('input', function(){
    if(firstNameInput.value.toLowerCase() == 'john'){
        lastNameInput.value = 'Doe';
    }
    else{
        lastNameInput.value = '';
    }
})

//Question 4
const usernameInput = document.getElementById('user_name');
const usernameAlert = document.getElementById('username-alert')

usernameInput.addEventListener('input', function(){
    const enteredUsername = usernameInput.value.trim();
    let usernameExists = false;

    for (let username of pokemonList){
        if(username.toLowerCase() === enteredUsername.toLowerCase()){
            usernameExists = true;
            break
        }
    }

    if(usernameExists){
        usernameAlert.textContent = "Username already exists";
    }
    else{
        usernameAlert.textContent = "Unique username created";
    }
});

//Question 5
const password_input = document.getElementById('password');
let confirm_input = document.getElementById('confirm_password');
const passwordAlert = document.getElementById('password-alert');

password_input.addEventListener('input', function(){
    const enteredPassword = password_input.value.trim();
    let same_password = false;

    if(confirm_input.value === enteredPassword.value){
        same_password = true;
    }

    else if(same_password){
        passwordAlert.textContent = "Passwords match";
    }
    else{
        passwordAlert.textContent = "Passwords does not match";
    }
})

confirm_input.addEventListener('input', function(){
    const enteredPassword = confirm_input.value.trim();
    let same_password = false;

    if(passowrd_input.value === enteredPassword.value){
        same_password = true;
    }

    else if(same_password){
        passwordAlert.textContent = "Passwords match";
    }
    else{
        passwordAlert.textContent = "Passwords does not match";
    }
})

//Question 6


//Question 7


//Question 8


//Extra challenge: reset button

