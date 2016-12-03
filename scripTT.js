var click = new Image();
var original = new Image();
var spacer = new Image();
var copyTT = new Image();
click.src = "images/TTclick.jpg";
original.src = "images/TT.jpg";
spacer.src = "images/spacer.gif";
copyTT.src = "images/CopyrighTTv2-dark.gif";
var vertical = false;
var currentImage = 0;
var currentQuote = 0;
var lastImage = -1;
var currentGallery = new Array();

var spacerGallery = new Array();
spacerGallery.name = "spacer";
spacerGallery[0] = new Array("images/spacer.gif", "vertical");
spacerGallery[1] = new Array("images/spacer.gif", "horizontal");

var streetGallery = new Array();
streetGallery.name = "street";
streetGallery[0] = new Array("images/gallery/street/TamasToth-life.jpg", "vertical");
streetGallery[1] = new Array("images/gallery/street/TamasToth-marypoppins.jpg", "vertical");
streetGallery[2] = new Array("images/gallery/street/TamasToth-bezbrizno.jpg", "vertical");
streetGallery[3] = new Array("images/gallery/street/TamasToth-oktyabrskaya.jpg", "horizontal");
streetGallery[4] = new Array("images/gallery/street/TamasToth-boulevard.jpg", "horizontal");
streetGallery[5] = new Array("images/gallery/street/TamasToth-preseljeno.jpg", "horizontal");
streetGallery[6] = new Array("images/gallery/street/TamasToth-nikon.jpg", "vertical");
streetGallery[7] = new Array("images/gallery/street/TamasToth-cekajuci.jpg", "vertical");
streetGallery[8] = new Array("images/gallery/street/TamasToth-(k)raj.jpg", "horizontal");
streetGallery[9] = new Array("images/gallery/street/TamasToth-4353.jpg", "horizontal");
streetGallery[10] = new Array("images/gallery/street/TamasToth-mebijus.jpg", "horizontal");
streetGallery[11] = new Array("images/gallery/street/TamasToth-suboticatrans.jpg", "horizontal");
streetGallery[12] = new Array("images/gallery/street/TamasToth-polazak.jpg", "horizontal");
streetGallery[13] = new Array("images/gallery/street/TamasToth-zaprescen.jpg", "vertical");
streetGallery[14] = new Array("images/gallery/street/TamasToth-unrealtournament.jpg", "horizontal");
streetGallery[15] = new Array("images/gallery/street/TamasToth-suncandan.jpg", "vertical");
streetGallery[16] = new Array("images/gallery/street/TamasToth-spica.jpg", "vertical");

var wallsGallery = new Array();
wallsGallery.name = "walls";
wallsGallery[0] = new Array("images/gallery/walls/TamasToth-falak-35.jpg", "vertical");
wallsGallery[1] = new Array("images/gallery/walls/TamasToth-falak-18.jpg", "horizontal");
wallsGallery[2] = new Array("images/gallery/walls/TamasToth-falak-104-alkony.jpg", "horizontal");
wallsGallery[3] = new Array("images/gallery/walls/TamasToth-falak-gyules.jpg", "horizontal");
wallsGallery[4] = new Array("images/gallery/walls/TamasToth-falak-42.jpg", "vertical");
wallsGallery[5] = new Array("images/gallery/walls/TamasToth-falak-76.jpg", "horizontal");
wallsGallery[6] = new Array("images/gallery/walls/TamasToth-falak-84.jpg", "vertical");
wallsGallery[7] = new Array("images/gallery/walls/TamasToth-falak-169.jpg", "vertical");
wallsGallery[8] = new Array("images/gallery/walls/TamasToth-falak-228.jpg", "horizontal");

wallsGallery[9] = new Array("images/gallery/walls/TamasToth-falak-228heart.jpg", "horizontal");

wallsGallery[10] = new Array("images/gallery/walls/TamasToth-falak-340.jpg", "horizontal");
wallsGallery[11] = new Array("images/gallery/walls/TamasToth-falak-azra.jpg", "horizontal");
wallsGallery[12] = new Array("images/gallery/walls/TamasToth-falak-dukenukem.jpg", "vertical");
wallsGallery[13] = new Array("images/gallery/walls/TamasToth-falak-hmm.jpg", "horizontal");
wallsGallery[14] = new Array("images/gallery/walls/TamasToth-falak-183.jpg", "horizontal");
wallsGallery[15] = new Array("images/gallery/walls/TamasToth-falak-nyakiglab.jpg", "vertical");
wallsGallery[16] = new Array("images/gallery/walls/TamasToth-falak-tel.jpg", "horizontal");
wallsGallery[17] = new Array("images/gallery/walls/TamasToth-falak-291.jpg", "vertical");
wallsGallery[18] = new Array("images/gallery/walls/TamasToth-falak-autoportreTT.jpg", "horizontal");

var hikingGallery = new Array();
hikingGallery.name = "hiking";
hikingGallery[0] = new Array("images/gallery/hiking/TamasToth-icecave.jpg", "horizontal");
hikingGallery[1] = new Array("images/gallery/hiking/TamasToth-view.jpg", "horizontal");
hikingGallery[2] = new Array("images/gallery/hiking/TamasToth-umrakudivancvijet.jpg", "horizontal");
hikingGallery[3] = new Array("images/gallery/hiking/TamasToth-mostnasoci.jpg", "vertical");
hikingGallery[4] = new Array("images/gallery/hiking/TamasToth-america.jpg", "horizontal");
hikingGallery[5] = new Array("images/gallery/hiking/TamasToth-blackforest.jpg", "horizontal");
hikingGallery[6] = new Array("images/gallery/hiking/TamasToth-travnik.jpg", "vertical");
hikingGallery[7] = new Array("images/gallery/hiking/TamasToth-logarskadolina.jpg", "horizontal");
hikingGallery[8] = new Array("images/gallery/hiking/TamasToth-djurdjevicatara.jpg", "horizontal");
hikingGallery[9] = new Array("images/gallery/hiking/TamasToth-dvoje.jpg", "horizontal");
hikingGallery[10] = new Array("images/gallery/hiking/TamasToth-szamartovis.jpg", "horizontal");
hikingGallery[11] = new Array("images/gallery/hiking/TamasToth-gerinc.jpg", "horizontal");
hikingGallery[12] = new Array("images/gallery/hiking/TamasToth-s.jpg", "vertical");
hikingGallery[13] = new Array("images/gallery/hiking/TamasToth-bajka.jpg", "vertical");
hikingGallery[14] = new Array("images/gallery/hiking/TamasToth-maglic.jpg", "horizontal");
hikingGallery[15] = new Array("images/gallery/hiking/TamasToth-namarsu.jpg", "vertical");
hikingGallery[16] = new Array("images/gallery/hiking/TamasToth-pejzaz.jpg", "vertical");
hikingGallery[17] = new Array("images/gallery/hiking/TamasToth-povetarac.jpg", "horizontal");
hikingGallery[18] = new Array("images/gallery/hiking/TamasToth-usamljenodrvo.jpg", "horizontal");

var childrenGallery = new Array();
childrenGallery.name = "children";
childrenGallery[0] = new Array("images/gallery/children/TamasToth-heyyou.jpg", "vertical");
childrenGallery[1] = new Array("images/gallery/children/TamasToth-dalmaportre.jpg", "horizontal");
childrenGallery[2] = new Array("images/gallery/children/TamasToth-sankanje.jpg", "horizontal");
childrenGallery[3] = new Array("images/gallery/children/TamasToth-osvezenje.jpg", "horizontal");
childrenGallery[4] = new Array("images/gallery/children/TamasToth-veselaporodica.jpg", "vertical");
childrenGallery[5] = new Array("images/gallery/children/TamasToth-mona.jpg", "horizontal");
childrenGallery[6] = new Array("images/gallery/children/TamasToth-keklilafiu.jpg", "horizontal");
childrenGallery[7] = new Array("images/gallery/children/TamasToth-cekajucitatu.jpg", "horizontal");
childrenGallery[8] = new Array("images/gallery/children/TamasToth-ifjhamingway.jpg", "horizontal");
childrenGallery[9] = new Array("images/gallery/children/TamasToth-marslakok.jpg", "horizontal");
childrenGallery[10] = new Array("images/gallery/children/TamasToth-kakosezoves.jpg", "vertical");
childrenGallery[11] = new Array("images/gallery/children/TamasToth-virko.jpg", "horizontal");
childrenGallery[12] = new Array("images/gallery/children/TamasToth-vattacukor.jpg", "horizontal");

var animalsGallery = new Array();
animalsGallery.name = "animals";
animalsGallery[0] = new Array("images/gallery/animals/TamasToth-blup.jpg", "vertical");
animalsGallery[1] = new Array("images/gallery/animals/TamasToth-rupicapra.jpg", "vertical");
animalsGallery[2] = new Array("images/gallery/animals/TamasToth-palic.jpg", "vertical");
animalsGallery[3] = new Array("images/gallery/animals/TamasToth-cricket.jpg", "vertical");
animalsGallery[4] = new Array("images/gallery/animals/TamasToth-drotmadar.jpg", "vertical");
animalsGallery[5] = new Array("images/gallery/animals/TamasToth-jendva.jpg", "horizontal");
animalsGallery[6] = new Array("images/gallery/animals/TamasToth-woops.jpg", "vertical");
animalsGallery[7] = new Array("images/gallery/animals/TamasToth-NStaxi.jpg", "horizontal");
animalsGallery[8] = new Array("images/gallery/animals/TamasToth-vonatpuli.jpg", "horizontal");
animalsGallery[9] = new Array("images/gallery/animals/TamasToth-passenger.jpg", "horizontal");
animalsGallery[10] = new Array("images/gallery/animals/TamasToth-hatranezokutyus.jpg", "horizontal");
animalsGallery[11] = new Array("images/gallery/animals/TamasToth-harmadiktipusutalalkozas.jpg", "horizontal");

var sestmeseciGallery = new Array();
sestmeseciGallery.name = "sestmeseci";
sestmeseciGallery[0] = new Array("images/gallery/6meseci/TamasToth-buco.jpg", "horizontal");
sestmeseciGallery[1] = new Array("images/gallery/6meseci/TamasToth-jutarnjevezbe.jpg", "horizontal");
sestmeseciGallery[2] = new Array("images/gallery/6meseci/TamasToth-marenda.jpg", "horizontal");
sestmeseciGallery[3] = new Array("images/gallery/6meseci/TamasToth-orao.jpg", "horizontal");
sestmeseciGallery[4] = new Array("images/gallery/6meseci/TamasToth-budnjenje.jpg", "horizontal");
sestmeseciGallery[5] = new Array("images/gallery/6meseci/TamasToth-dnevnazapovest.jpg", "horizontal");
sestmeseciGallery[6] = new Array("images/gallery/6meseci/TamasToth-gadjanje.jpg", "vertical");
sestmeseciGallery[7] = new Array("images/gallery/6meseci/TamasToth-radovi.jpg", "horizontal");
sestmeseciGallery[8] = new Array("images/gallery/6meseci/TamasToth-smotra.jpg", "horizontal");
sestmeseciGallery[9] = new Array("images/gallery/6meseci/TamasToth-Rvovic.jpg", "horizontal");
sestmeseciGallery[10] = new Array("images/gallery/6meseci/TamasToth-sdo.jpg", "horizontal");
sestmeseciGallery[11] = new Array("images/gallery/6meseci/TamasToth-izlezavanje.jpg", "horizontal");
sestmeseciGallery[12] = new Array("images/gallery/6meseci/TamasToth-kantina.jpg", "horizontal");
sestmeseciGallery[13] = new Array("images/gallery/6meseci/TamasToth-komunikacija.jpg", "horizontal");
sestmeseciGallery[14] = new Array("images/gallery/6meseci/TamasToth-oraozovesokola.jpg", "horizontal");
sestmeseciGallery[15] = new Array("images/gallery/6meseci/TamasToth-prvisneg.jpg", "horizontal");
sestmeseciGallery[16] = new Array("images/gallery/6meseci/TamasToth-prvisnegciscenje.jpg", "horizontal");
sestmeseciGallery[17] = new Array("images/gallery/6meseci/TamasToth-ponossrbije.jpg", "vertical");
sestmeseciGallery[18] = new Array("images/gallery/6meseci/TamasToth-kupanje.jpg", "horizontal");

var whosthatgirlGallery = new Array();
whosthatgirlGallery.name = "whosthatgirl";
whosthatgirlGallery[0] = new Array("images/gallery/whosthatgirl/TamasToth-plavivoz.jpg", "horizontal");
whosthatgirlGallery[1] = new Array("images/gallery/whosthatgirl/TamasToth-kutak.jpg", "vertical");
whosthatgirlGallery[2] = new Array("images/gallery/whosthatgirl/TamasToth-kisa.jpg", "horizontal");
whosthatgirlGallery[3] = new Array("images/gallery/whosthatgirl/TamasToth-san.jpg", "vertical");
whosthatgirlGallery[4] = new Array("images/gallery/whosthatgirl/TamasToth-nightingale.jpg", "vertical");
whosthatgirlGallery[5] = new Array("images/gallery/whosthatgirl/TamasToth-vidi.jpg", "horizontal");
whosthatgirlGallery[6] = new Array("images/gallery/whosthatgirl/TamasToth-korak.jpg", "horizontal");
whosthatgirlGallery[7] = new Array("images/gallery/whosthatgirl/TamasToth-prizor.jpg", "horizontal");
whosthatgirlGallery[8] = new Array("images/gallery/whosthatgirl/TamasToth-suncica.jpg", "vertical");
whosthatgirlGallery[9] = new Array("images/gallery/whosthatgirl/TinaSolar.jpg", "horizontal");

var egoGallery = new Array();
egoGallery.name = "ego";
egoGallery[0] = new Array("images/gallery/ego/TTriglav.jpg", "horizontal");
egoGallery[1] = new Array("images/gallery/ego/TamasToth-kapecini.jpg", "vertical");
egoGallery[2] = new Array("images/gallery/ego/TamasToth-alien.jpg", "horizontal");
egoGallery[3] = new Array("images/gallery/ego/TamasToth-cudovisteizledinackogjezera.jpg", "horizontal");
egoGallery[4] = new Array("images/gallery/ego/TamasToth-lokalpatrioTTa.jpg", "horizontal");
egoGallery[5] = new Array("images/gallery/ego/TamasToth-autoportretsadaljinskim.jpg", "horizontal");
egoGallery[6] = new Array("images/gallery/ego/TamasToth-ja.jpg", "vertical");
egoGallery[7] = new Array("images/gallery/ego/SeliYuki-pink.jpg", "horizontal");

var lgbtGallery = new Array();
lgbtGallery.name = "lgbt";
lgbtGallery[0] = new Array("images/gallery/lgbt/TamasToth-lgbt-01.jpg", "horizontal");
lgbtGallery[1] = new Array("images/gallery/lgbt/TamasToth-lgbt-02.jpg", "horizontal");
lgbtGallery[2] = new Array("images/gallery/lgbt/TamasToth-lgbt-03.jpg", "horizontal");
lgbtGallery[3] = new Array("images/gallery/lgbt/TamasToth-lgbt-04.jpg", "horizontal");
lgbtGallery[4] = new Array("images/gallery/lgbt/TamasToth-lgbt-05.jpg", "horizontal");
lgbtGallery[5] = new Array("images/gallery/lgbt/TamasToth-lgbt-06.jpg", "vertical");
lgbtGallery[6] = new Array("images/gallery/lgbt/TamasToth-lgbt-07.jpg", "horizontal");
lgbtGallery[7] = new Array("images/gallery/lgbt/TamasToth-lgbt-08.jpg", "horizontal");
lgbtGallery[8] = new Array("images/gallery/lgbt/TamasToth-lgbt-09.jpg", "vertical");
lgbtGallery[9] = new Array("images/gallery/lgbt/TamasToth-lgbt-10.jpg", "horizontal");
lgbtGallery[10] = new Array("images/gallery/lgbt/TamasToth-lgbt-11.jpg", "horizontal");
lgbtGallery[11] = new Array("images/gallery/lgbt/TamasToth-lgbt-12.jpg", "vertical");
lgbtGallery[12] = new Array("images/gallery/lgbt/TamasToth-lgbt-13.jpg", "vertical");
lgbtGallery[13] = new Array("images/gallery/lgbt/TamasToth-lgbt-14.jpg", "vertical");
lgbtGallery[14] = new Array("images/gallery/lgbt/TamasToth-lgbt-15.jpg", "horizontal");
lgbtGallery[15] = new Array("images/gallery/lgbt/TamasToth-lgbt-16.jpg", "horizontal");
lgbtGallery[16] = new Array("images/gallery/lgbt/TamasToth-lgbt-17.jpg", "horizontal");
lgbtGallery[17] = new Array("images/gallery/lgbt/TamasToth-lgbt-18.jpg", "horizontal");
lgbtGallery[18] = new Array("images/gallery/lgbt/TamasToth-lgbt-19.jpg", "horizontal");
lgbtGallery[19] = new Array("images/gallery/lgbt/TamasToth-lgbt-20.jpg", "horizontal");
lgbtGallery[20] = new Array("images/gallery/lgbt/TamasToth-lgbt-21.jpg", "horizontal");
lgbtGallery[21] = new Array("images/gallery/lgbt/TamasToth-lgbt-22.jpg", "horizontal");
lgbtGallery[22] = new Array("images/gallery/lgbt/TamasToth-lgbt-23.jpg", "horizontal");
lgbtGallery[23] = new Array("images/gallery/lgbt/TamasToth-lgbt-24.jpg", "horizontal");
lgbtGallery[24] = new Array("images/gallery/lgbt/TamasToth-lgbt-25.jpg", "horizontal");

var quotes = new Array();
quotes.name = "quotes";
quotes[0] = "quote-zamurovic";
quotes[1] = "quote-edvard";
quotes[2] = "quote-tina";
quotes[3] = "quote-laki";
quotes[4] = "quote-evdokia";
quotes[5] = "quote-risovic";
quotes[6] = "quote-joe";
quotes[7] = "quote-sneg";

function press() {
    $("#phoTTo-home").attr("src", click.src);
    $("#phoTTo-gallery").attr("src", click.src);
}

function release() {
    $("#phoTTo-home").attr("src", original.src);
    $("#phoTTo-gallery").attr("src", original.src);
}

function changepic(source, url) {
    var oldPhoto = document.getElementById(source);
    var newPhoto = new Image();
    if (!newPhoto.addEventListener) {
        newPhoto.attachEvent("onload", onImageLoadEvent);
    } else {
        newPhoto.addEventListener("load", onImageLoadEvent, false);
    }
    newPhoto.src = url;
    oldPhoto.src = newPhoto.src;
}

function onImageLoadEvent() {
    hide('loading-holder');
    show('pic');
    positionNavigationIcons();
    setTimeout(positionNavigationIcons, 10);
}

function changegallerypic(gallery, index) {
    photoOrientation = gallery[index][1];
    url = gallery[index][0];
    checkFirstLast(-1);
    checkFirstLast(index);
    if (lastImage != index) {
        show("loading-holder");
    }
    hide("image-holder");
    if (photoOrientation == "vertical") {
        $("#loading-holder").css("left", "186px");
        $("#image-holder").css({
            "width": "402px",
            "height": "602px",
            "position": "absolute",
            "top": "-101px",
            "left": "38px"
        });
    }
    if (photoOrientation == "horizontal") {
        $("#loading-holder").css("left", "251px");
        $("#image-holder").css({
            "width": "602px",
            "height": "400px",
            "position": "absolute",
            "top": "0px",
            "left": "0px"
        });
    }
    if (photoOrientation == "vertical") {
        if (!vertical) {
            hide("pic");
        }
        changepic("pic", url);
        vertical = true;
    }
    if (photoOrientation == "horizontal") {
        if (vertical) {
            hide("pic");
        }
        changepic("pic", url);
        vertical = false;
    }
    show("image-holder");
    $('.prev-holder').fadeTo(0, 0.5);
    $('.next-holder').fadeTo(0, 0.5);
    $('.close-holder').fadeTo(0, 0.5);
    highlightCurrentImage(index);
    lastImage = index;
}

function hide() {
    for (var i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).style.visibility = 'hidden';
        document.getElementById(arguments[i]).style.display = 'none';
    }
}

function hideAll() {
    hide("gallerytitle-whosthatgirl",
        "gallerytitle-walls",
        "gallerytitle-street",
        "gallerytitle-hiking",
        "gallerytitle-children",
        "gallerytitle-animals",
        "gallerytitle-sestmeseci",
        "gallerytitle-ego",
        "gallerytitle-lgbt",
        "gallery",
        "home",
        "bio",
        "news",
        "galleryhover",
        "gallerytitles",
        "pic",
        "biografija",
        "oneletrajz");
    hideQuotes();
}

function hideQuotes() {
    for (var i = 0; i < quotes.length; i++) {
        hide(quotes[i]);
    }
}

function show() {
    for (var i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).style.visibility = 'visible';
        document.getElementById(arguments[i]).style.display = 'block';
    }
}

function fadeIn() {
    for (var i = 0; i < arguments.length; i++) {
        document.getElementById(arguments[i]).style.visibility = 'visible';
        document.getElementById(arguments[i]).style.display = 'block';
        element = document.getElementById(arguments[i]);
        $(element).hide();
        $(element).fadeIn();
    }
}

function expand(element) {
    document.getElementById(element).style.visibility = 'visible';
    document.getElementById(element).style.display = 'inline';
}

function navigate(location) {
    hideAll();
    show(location);
    currentQuote = 0;
}

function loadNews() {
    navigate('news');
    changepic('tt', 'images/toth-tamas-tt.jpg');
    changepic('bobotov', 'images/TamasToth-bobotovkuk.jpg');
    changepic('newlogo', 'images/newlogo.gif');
    changepic('seliyuki', 'images/SeliYuki.jpg');
    changepic('harmadiktipusutalalkozas', 'images/harmadiktipusutalalkozas.jpg');
    changepic('behindthescenes-old', 'images/behindthescenes-old.jpg');
    changepic('behindthescenes-new', 'images/behindthescenes-new.jpg');
    changepic('hatranezokutyus', 'images/hatranezokutyus.jpg');
    changepic('lgbt', 'images/EdvardMolnar-lgbt-3257.jpg');
    changepic('cffks-1', 'images/DanijelaOluic-cffks.jpg');
    changepic('cffks-2', 'images/VladimirMaksimovic-cffks.jpg');
    changepic('cffks-3', 'images/TamasToth-cffks.jpg');
    changepic('refoto71cover', 'images/refoto71cover.jpg');
    changepic('refoto46cover', 'images/refoto46cover.jpg');
    changepic('passenger', 'images/passenger.jpg');
    changepic('talpraesetttom', 'images/TamasToth-talicnitom.jpg');
    changepic('losthighway', 'images/losthighway.jpg');
    changepic('piroshajna', 'images/piroshajna.jpg');
    changepic('sestmeseci-ed-3581', 'images/EdvardMolnar-6meseci-3581.jpg');
    changepic('sestmeseci-ed-3592', 'images/EdvardMolnar-6meseci-3592.jpg');
    changepic('sestmeseci-ed-3597', 'images/EdvardMolnar-6meseci-3597.jpg');
    changepic('sestmeseci-ed-3638', 'images/EdvardMolnar-6meseci-3638.jpg');
    changepic('sestmeseci-ed-3641', 'images/EdvardMolnar-6meseci-3641.jpg');
    changepic('sestmeseci-ed-3670', 'images/EdvardMolnar-6meseci-3670.jpg');
    changepic('sestmeseci-ed-3675', 'images/EdvardMolnar-6meseci-3675.jpg');
    changepic('sestmeseci-ed-3687', 'images/EdvardMolnar-6meseci-3687.jpg');
    changepic('sestmeseci-ed-3694', 'images/EdvardMolnar-6meseci-3694.jpg');
    changepic('banner', 'images/phoTTo-banner.jpg');
    changepic('meghivo', 'images/TamasToth-kismeghivo.jpg');
    changepic('megnyito1', 'images/TamasToth-megnyiTTo.jpg');
    changepic('megnyito2', 'images/AntonToth-megnyiTTo.jpg');
    changepic('soltis1', 'images/NikolaTumbas-soltis1.jpg');
    changepic('soltis2', 'images/NikolaTumbas-soltis2.jpg');
    changepic('gornjimilanovac', 'images/AleksandarSnegic-gornjimilanovac.jpg');
    changepic('sestmeseci-1', 'images/TamasToth-6meseci-pozivnica.jpg');
}

function changetitle(newTitle) {
    show("gallerytitle");
    document.getElementById("gallerytitle").innerHTML = newTitle;
}

function changeOpacity(element, opacity) {
    document.getElementById(element).style.opacity = opacity / 100;
    document.getElementById(element).style.filter = "alpha(opacity=" + opacity + ")";
}

function createMask(currentgallery) {
    changepic('copyTT', copyTT.src);
    $('#streetLink').fadeTo('0', 0.1);
    $('#wallsLink').fadeTo('0', 0.1);
    $('#hikingLink').fadeTo('0', 0.1);
    $('#childrenLink').fadeTo('0', 0.1);
    $('#animalsLink').fadeTo('0', 0.1);
    $('#sestmeseciLink').fadeTo('0', 0.1);
    $('#whosthatgirlLink').fadeTo('0', 0.1);
    $('#egoLink').fadeTo('0', 0.1);
    $('.ttclick').fadeTo('400', 0.2);
    $('#' + currentgallery + 'Link').fadeTo('400', 0.5);
    $('body').css("background-color", "#333");
    $('#perforation-bottom').css({
        "background-color": "#333",
        "background-position": "0px -63px"
    });
    $('.bottomcell').css({
        "background-color": "#333",
        "background-position": "0px -63px"
    });
    $('#perforation-top').css({
        "background-color": "#333",
        "background-position": "0px -189px"
    });
}

function changegallery(gallery, pic) {
    lastImage = -1;
    navigate("gallery");
    hide("galleryhover");
    show("gallerytitles", "gallerytitle-" + gallery.name);
    currentGallery = gallery;
    changegallerypic(gallery, pic);
    createMask(gallery.name);
    $('#gallerytitles').show();
}

function highlightCurrentImage(current) {
    prefix = currentGallery.name;
    currentImage = current;
    for (iterator = 0; iterator < currentGallery.length; iterator++) {
        if (iterator == current) {
            if (document.getElementById(prefix + iterator)) {
                changeClass(prefix + iterator, "activeImage");
                element = document.getElementById(prefix + iterator);
                $(element).hide();
                $(element).fadeIn().delay(1).show();
            }
        } else {
            if (document.getElementById(prefix + iterator)) {
                changeClass(prefix + iterator, "");
            }
        }
    }
}

function checkFirstLast(current) {
    prefix = currentGallery.name;
    switch (current) {
        case 0:
            changeOpacity(prefix + "Prev", 0);
            document.getElementById(prefix + "Prev").style.cursor = "default";
            break;
        case currentGallery.length - 1:
            changeOpacity(prefix + "Next", 0);
            document.getElementById(prefix + "Next").style.cursor = "default";
            break;
        default:
            changeOpacity(prefix + "Prev", 100);
            changeOpacity(prefix + "Next", 100);
            document.getElementById(prefix + "Prev").style.cursor = "pointer";
            document.getElementById(prefix + "Next").style.cursor = "pointer";
    }
}

function changeClass(element, newClass) {
    if (document.getElementById(element)) document.getElementById(element).className = newClass;
}

function prevNext(direction) {
    currentImage += direction;
    if (currentImage < 0)
        currentImage = 0;
    if (currentImage == currentGallery.length)
        currentImage = currentGallery.length - 1;
    changegallerypic(currentGallery, currentImage);
    trackImageview(currentGallery[currentImage][0]);
}

function changeQuote(direction) {
    currentQuote += direction;
    if (currentQuote < 0)
        currentQuote = quotes.length - 1;
    if (currentQuote == quotes.length)
        currentQuote = 0;
    if (currentQuote == 0)
        _gaq.push(['_trackPageview', '/menu/bio/quotes']);
    hideQuotes();
    show(quotes[currentQuote]);
    element = document.getElementById(quotes[currentQuote]);
    $(element).hide();
    $(element).fadeIn();
}

function trackImageview(image) {
    switch (image) {
        case "images/gallery/whosthatgirl/TamasToth-plavivoz.jpg":
            _gaq.push(['_trackPageview', '/gallery/whosthatgirl/plavivoz']);
            break;
        case "images/gallery/whosthatgirl/TamasToth-kutak.jpg":
            _gaq.push(['_trackPageview', '/gallery/whosthatgirl/kutak']);
            break;
        case "images/gallery/whosthatgirl/TamasToth-kisa.jpg":
            _gaq.push(['_trackPageview', '/gallery/whosthatgirl/kisa']);
            break;
        case "images/gallery/whosthatgirl/TamasToth-san.jpg":
            _gaq.push(['_trackPageview', '/gallery/whosthatgirl/san']);
            break;
        case "images/gallery/whosthatgirl/TamasToth-nightingale.jpg":
            _gaq.push(['_trackPageview', '/gallery/whosthatgirl/nightingale']);
            break;
        case "images/gallery/whosthatgirl/TamasToth-vidi.jpg":
            _gaq.push(['_trackPageview', '/gallery/whosthatgirl/vidi']);
            break;
        case "images/gallery/whosthatgirl/TamasToth-korak.jpg":
            _gaq.push(['_trackPageview', '/gallery/whosthatgirl/korak']);
            break;
        case "images/gallery/whosthatgirl/TamasToth-prizor.jpg":
            _gaq.push(['_trackPageview', '/gallery/whosthatgirl/prizor']);
            break;
        case "images/gallery/whosthatgirl/TamasToth-suncica.jpg":
            _gaq.push(['_trackPageview', '/gallery/whosthatgirl/suncica']);
            break;
        case "images/gallery/whosthatgirl/TinaSolar.jpg":
            _gaq.push(['_trackPageview', '/gallery/whosthatgirl/www']);
            break;

        case "images/gallery/ego/TTriglav.jpg":
            _gaq.push(['_trackPageview', '/gallery/ego/triglav']);
            break;
        case "images/gallery/ego/TamasToth-kapecini.jpg":
            _gaq.push(['_trackPageview', '/gallery/ego/kapecini']);
            break;
        case "images/gallery/ego/TamasToth-alien.jpg":
            _gaq.push(['_trackPageview', '/gallery/ego/alien']);
            break;
        case "images/gallery/ego/TamasToth-cudovisteizledinackogjezera.jpg":
            _gaq.push(['_trackPageview', '/gallery/ego/cudovisteizledinackogjezera']);
            break;
        case "images/gallery/ego/TamasToth-lokalpatrioTTa.jpg":
            _gaq.push(['_trackPageview', '/gallery/ego/lokalpatriota']);
            break;
        case "images/gallery/ego/TamasToth-autoportretsadaljinskim.jpg":
            _gaq.push(['_trackPageview', '/gallery/ego/autoportretsadaljinskim']);
            break;
        case "images/gallery/ego/TamasToth-ja.jpg":
            _gaq.push(['_trackPageview', '/gallery/ego/ja']);
            break;
            //case "images/gallery/ego/SeliYuki-pink.jpg":
            //  _gaq.push(['_trackPageview', '/gallery/ego/seliyuki']);
            //  break;
        default:
    }
}

function blinkGallery() {
    $('#gallerytitle').hide();
    $('#gallerytitle').fadeIn('slow');
    $('#streetLink').hide();
    $('#streetLink').fadeIn('slow');
    $('#wallsLink').hide();
    $('#wallsLink').delay(50).fadeIn('slow');
    $('#hikingLink').hide();
    $('#hikingLink').delay(100).fadeIn('slow');
    $('#childrenLink').hide();
    $('#childrenLink').delay(150).fadeIn('slow');
    $('#animalsLink').hide();
    $('#animalsLink').delay(200).fadeIn('slow');
    $('#sestmeseciLink').hide();
    $('#sestmeseciLink').delay(250).fadeIn('slow');
    $('#whosthatgirlLink').hide();
    $('#whosthatgirlLink').delay(300).fadeIn('slow');
    $('#egoLink').delay(350).hide();
    $('#egoLink').delay(350).fadeIn('slow');
}

function restoreMask() {
    changepic('copyTT', "images/CopyrighTTv2.gif");
    $('.ttclick').fadeTo('400', 1);
    $('#streetLink').fadeTo('0', 1);
    $('#wallsLink').fadeTo('0', 1);
    $('#hikingLink').fadeTo('0', 1);
    $('#childrenLink').fadeTo('0', 1);
    $('#animalsLink').fadeTo('0', 1);
    $('#sestmeseciLink').fadeTo('0', 1);
    $('#whosthatgirlLink').fadeTo('0', 1);
    $('#egoLink').fadeTo('0', 1);
    $('body').css("background-color", "#999");
    $('#perforation-bottom').css({
        "background-color": "#999",
        "background-position": "left top"
    });
    $('.bottomcell').css({
        "background-color": "#999",
        "background-position": "left top"
    });
    $('#perforation-top').css({
        "background-color": "#999",
        "background-position": "0px -126px"
    });
}

function closeGallery() {
    $('#gallerytitles').slideUp('fast');
    $('#image-holder').fadeOut('fast', function() {
        navigate('home');
        changetitle('gallery');
        show('gallerylinks');
        fadeIn('galleryhover');
        changegallerypic(spacerGallery, 1);
        changegallerypic(spacerGallery, 0);
        hideNavigationIcons(0, 0);
    });
    restoreMask();
    blinkGallery();
}

function positionNavigationIcons() {
    width = $("#pic").width();
    left = width + parseInt($("#image-holder").css("left").replace("px", ""));
    if (currentImage == 0) $('.prev-holder').fadeOut('slow');
    if (currentImage == currentGallery.length - 1) $('.next-holder').fadeOut('slow');
}

function showNavigationIcons(speed) {
    if (currentImage != 0) $('.prev-holder').stop().fadeTo(speed, 0.5);
    $('.close-holder').stop().fadeTo(speed, 0.5);
    if (currentImage != currentGallery.length - 1) $('.next-holder').stop().fadeTo(speed, 0.5);
    $('.gallerytitle-placeholder').stop().fadeTo(speed, 1);
}

function hideNavigationIcons(wait, speed) {
    $('.prev-holder').delay(wait).fadeOut(speed);
    $('.close-holder').delay(wait).fadeOut(speed);
    $('.next-holder').delay(wait).fadeOut(speed);
    $('.gallerytitle-placeholder').delay(wait).fadeOut(speed);
}

$(document).ready(function() {
    $('.prev-holder').hide();
    $('.close-holder').hide();
    $('.next-holder').hide();
    $('.close-holder').click(function(event) {
        hideNavigationIcons(0, 0);
    });
    $('#pic').mouseenter(function(event) {
        showNavigationIcons('slow');
    });
    $('#gallerytitles').mouseenter(function(event) {
        showNavigationIcons('slow');
    });
    $('.highlight').fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200);

    // on load go straight to news
    restoreMask();
    loadNews();
    show('galleryhover', 'gallerylinks');
    fadeIn('news-scroll');
    changetitle('');
});
