let personfirstname = document.getElementById("personfirstname");
let personlastname = document.getElementById("personlastname");
let date = document.getElementById("date");
let email = document.getElementById("email");
let fatherfirstname = document.getElementById("fatherfirstname");
let fatherlastname = document.getElementById("fatherlastname");
let motherfirstname = document.getElementById("motherfirstname");
let motherlastname = document.getElementById("motherlastname");
let gender = document.getElementById("gender");
let nationality = document.getElementById("nationality");
let homeaddress = document.getElementById("homeaddress");
let Telehome = document.getElementById("Telehome");
let Mobile = document.getElementById("Mobile");
let hscname = document.getElementById("hscname");
let hscper = document.getElementById("hscper");
let selectdiv = document.getElementById("selectdiv");
let sscname = document.getElementById("sscname");
let sscper = document.getElementById("sscper");
let currentpursuing = document.getElementById("currentpursuing");
let currentinstitutionname = document.getElementById("currentinstitutionname");
let overallpercentage = document.getElementById("overallpercentage");
let blacklog = document.getElementById("blacklog");
let img = document.getElementById("img");
let hsccer = document.getElementById("hsccer");
let ssccer = document.getElementById("ssccer");

let allsem = document.getElementById("allsem");

function submit() {

    let personfirstnames = personfirstname.value;
    localStorage.setItem('personfirstname', personfirstnames);



    let personlastnames = personlastname.value;
    localStorage.setItem('personlastname', personlastnames);



    let dates = date.value;
    localStorage.setItem('date', dates);


    let emails = email.value;
    localStorage.setItem('email', emails);


    let fatherlastnames = fatherlastname.value;
    localStorage.setItem('fatherlastname', fatherlastnames);



    let motherlastnames = motherlastname.value;
    localStorage.setItem('motherlastname', motherlastnames);



    let motherfirstnames = motherfirstname.value;
    localStorage.setItem('motherfirstname', motherfirstnames);


    let fatherfirstnames = fatherfirstname.value;
    localStorage.setItem('fatherfirstname', fatherfirstnames);


    localStorage.setItem("gender", gender);

    let nationalitys = nationality.value;
    localStorage.setItem('nationality', nationalitys);

    let Telehomes = Telehome.value;
    localStorage.setItem("Telehome", Telehomes);



    let Mobiles = Mobile.value;
    localStorage.setItem("Mobile", Mobiles);

    let hscnames = hscname.value;
    localStorage.setItem("hscname", hscnames);


    let selectdivs = selectdiv.value;
    localStorage.setItem("selectdiv", selectdivs);



    let hscpers = hscper.value;
    localStorage.setItem("hscper", hscpers);

    let sscnames = sscname.value;
    localStorage.setItem("sscname", sscnames);


    let sscpers = sscper.value;
    localStorage.setItem("sscper", sscpers);

    let currentpursuings = currentpursuing.value;
    localStorage.setItem("currentpursuing", currentpursuings);



    let currentinstitutionnames = currentinstitutionname.value;
    localStorage.setItem("currentinstitutionname", currentinstitutionnames);



    let overallpercentages = overallpercentage.value;
    localStorage.setItem("overallpercentage", overallpercentages);


    let blacklogs = blacklog.value;
    localStorage.setItem("blacklog", blacklogs);



    let imgs = img.src;
    localStorage.setItem("img", imgs);


    let hsccers = hsccer.src;
    localStorage.setItem("img", hsccers);

    let ssccers = ssccer.src;
    localStorage.setItem("ssccer", ssccers);


    let allsems = allsem.src;
    localStorage.setItem("allsem", allsems);




}