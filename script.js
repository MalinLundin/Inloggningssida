//variabler till if stats för att kollar om det finns en user inloggad eller inte
let correctuser = "test";
let correctpass = "1234";

//if sats kollar om user eller password finns i localStorage.
// Sant gå till användarsidan.Falskt går till logga in sidan
if  (localStorage.user===correctuser && localStorage.pass===correctpass) 
    {  
        userLog();
    } 
    else {
        href="index.html";
    }        

//Knappen på inloggningsidan(Logga in), när klickad kolla om input stämmer för user och password
//Sant läggs i localStorage samt går till användarsidan.Falskt till errorsidan
    button.addEventListener('click', function () {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;
    if (username == "test" && password == "1234") {
        localStorage.setItem("user", username);
        localStorage.setItem("pass", password);
        userLog();
    }
    else {
        errLog();
    }
});

//Användarsidan.Ny knapp,logga ut till utloggadsidan samt tar bort user och password från localStorage
function userLog(){
    document.getElementById('header').innerHTML = ("<h1>Välkommen till din sida! </h1>");
    document.getElementById('content').innerHTML = ('<p> Du är nu inloggad på din sida</p> <br> <h4>Vill du logga ut?</h4>');
    document.getElementById('but').innerHTML = ("<input type='button' value='logga ut' onClick='localStorage.clear(); outLog().innerHTML;'/>");
    }

//Errosidan.När det fel user eller password i input kommer man hit.Länk för att komma tillbaka till inloggningsidan.
function errLog(){
   document.getElementById("header").innerHTML =('<h1>Fel meddelande</h1>');
   document.getElementById("content").innerHTML =("<h3>Fel användarmamn eller lösenord vid inloggning</h3> <p>Vill du testa logga in igen <a href='index.html'>Klicka här</a> </p>");
   document.getElementById('but').innerHTML = ('');
   }

//Utloggadsidan.Här man hamnar med logga ut knappen.Länk tillbaka till inloggningsidan.
function outLog(){
    document.getElementById('header').innerHTML = ("<h1> Du är nu utloggad</h1>");
    document.getElementById('content').innerHTML = ("<p>Vill du logga in igen <a href='index.html'>Klicka här</a> </p>")
    document.getElementById('but').innerHTML = ('');
   
    }


  

