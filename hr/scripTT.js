var click=new Image(); 
var original=new Image(); 
var spacer=new Image(); 
var copytt=new Image(); 
click.src="images/TTclick.jpg";
original.src="images/TT.jpg";
spacer.src="images/spacer.gif";
copytt.src="images/CopyrighTTanimation.gif";
var vertical = false;

var currentImage = 0;
var currentGallery = new Array();

function press() {
	document.getElementById("phoTTo-home").src=click.src;
	document.getElementById("phoTTo-gallery").src=click.src;
}

function release() {
	document.getElementById("phoTTo-home").src=original.src;
	document.getElementById("phoTTo-gallery").src=original.src;
}

function changepic(source, url) {
	document.getElementById(source).src=url;
}

function changegallerypic(orientation, url) {
	show("loading-holder");
	document.getElementById("copyTT").src=copytt.src;
	hide("image-holder");
	if (orientation=="verticalpic") {
		document.getElementById("loading-holder").style.left="186px";
		document.getElementById("image-holder").style.width="402px";
		document.getElementById("image-holder").style.height="602px";
		document.getElementById("image-holder").style.position="absolute";
		document.getElementById("image-holder").style.top="-101px";
		document.getElementById("image-holder").style.left="38px";
	}
	if (orientation=="horizontalpic" || orientation=="whosthatgirlpic") {
		document.getElementById("loading-holder").style.left="251px";
		document.getElementById("image-holder").style.width="602px";
		document.getElementById("image-holder").style.height="400px";
		document.getElementById("image-holder").style.position="absolute";
		document.getElementById("image-holder").style.top="0px";
		document.getElementById("image-holder").style.left="0px";
	}
	if (orientation=="verticalpic") {
		if (!vertical) {
			hide("pic");
			hide("whosthatgirlpic");				
		}
		changepic("pic", url);
		vertical=true;
	}
	if (orientation=="horizontalpic") {
		hide("whosthatgirlpic");
		if (vertical) {
			hide("pic");
		}
		changepic("pic", url);
		vertical=false;
	}
	if (orientation=="whosthatgirlpic") {
		hide("pic");
		hide("whosthatgirlpic");
		changepic("whosthatgirlpic", url);
		vertical=false;
	}
	show("image-holder");
}

function hide() {
	for (var i=0; i<arguments.length; i++) {
		document.getElementById(arguments[i]).style.visibility='hidden';
		document.getElementById(arguments[i]).style.display='none';
	}
}

function hideAll() {
	hide("gallerytitle-whosthatgirl",
		 "gallerytitle-kadabizidoviznalidagovore",
		 "gallerytitle-street",
		 "gallerytitle-hiking",
		 "gallerytitle-children",
		 "gallerytitle-animals",
		 "gallerytitle-6meseci",
		 "gallerytitle-hr",
		 "gallerytitle-ego",
		 "gallery",
		 "home",
		 "bio",
		 "news",
		 "galleryhover",
		 "gallerytitles",
		 "pic",
 		 "whosthatgirlpic");
}

function show() {
	for (var i=0; i<arguments.length; i++) {
		document.getElementById(arguments[i]).style.visibility='visible';
		document.getElementById(arguments[i]).style.display='block';
	}
}

function expand(element) {
	document.getElementById(element).style.visibility='visible';
	document.getElementById(element).style.display='inline';
}

function navigate(location) {
	hideAll();
	show(location);
}

function loadNews() {
	navigate('news');	
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
	document.getElementById("gallerytitle").innerHTML=newTitle;
}

function changeOpacity(element, opacity) {
	document.getElementById(element).style.opacity=opacity/100;
	document.getElementById(element).style.filter="alpha(opacity=" + opacity + ")";
}

function changegallery(gallery) {
	currentImage=0;
	currentGallery=gallery;
	highlightCurrentImage(0);
}

function highlightCurrentImage(current) {	
	prefix = currentGallery.name;
	currentImage=current;
	//alert("h " + currentImage);
	for (iterator=0; iterator<=75; iterator++) {
		if (iterator==current) {
			changeClass(prefix+iterator, "activeImage");
			//alert("change active " + prefix+iterator);
		} else {
			changeClass(prefix+iterator, "");
			//alert("change active " + prefix+iterator + " semmi");
		}
	}
}

function changeClass(element, newClass) {
	if (document.getElementById(element)) document.getElementById(element).className=newClass; //cross browser
	//element.setAttribute("class", newClass); //For Most Browsers
	//element.setAttribute("className", newClass); //For IE; harmless to other browsers.
}

var streetGallery = new Array();
streetGallery.name="street";
streetGallery[0]=new Array("images/gallery/street/TamasToth-life.jpg", "verticalpic");
streetGallery[1]=new Array("images/gallery/street/TamasToth-marypoppins.jpg", "verticalpic");
streetGallery[2]=new Array("images/gallery/street/TamasToth-bezbrizno.jpg", "verticalpic");
streetGallery[3]=new Array("images/gallery/street/TamasToth-oktyabrskaya.jpg", "horizontalpic");
streetGallery[4]=new Array("images/gallery/street/TamasToth-boulevard.jpg", "horizontalpic");
streetGallery[5]=new Array("images/gallery/street/TamasToth-preseljeno.jpg", "horizontalpic");
streetGallery[6]=new Array("images/gallery/street/TamasToth-nikon.jpg", "verticalpic");
streetGallery[7]=new Array("images/gallery/street/TamasToth-cekajuci.jpg", "verticalpic");
streetGallery[8]=new Array("images/gallery/street/TamasToth-(k)raj.jpg", "horizontalpic");
streetGallery[9]=new Array("images/gallery/street/TamasToth-4353.jpg", "horizontalpic");
streetGallery[10]=new Array("images/gallery/street/TamasToth-mebijus.jpg", "horizontalpic");
streetGallery[11]=new Array("images/gallery/street/TamasToth-suboticatrans.jpg", "horizontalpic");
streetGallery[12]=new Array("images/gallery/street/TamasToth-polazak.jpg", "horizontalpic");
streetGallery[13]=new Array("images/gallery/street/TamasToth-zaprescen.jpg", "verticalpic");
streetGallery[14]=new Array("images/gallery/street/TamasToth-unrealtournament.jpg", "horizontalpic");
streetGallery[15]=new Array("images/gallery/street/TamasToth-suncandan.jpg", "verticalpic");
streetGallery[16]=new Array("images/gallery/street/TamasToth-spica.jpg", "verticalpic");

var wallsGallery = new Array();
wallsGallery.name="walls";
wallsGallery[0]=new Array("images/gallery/walls/TamasToth-falak-35.jpg", "verticalpic");
wallsGallery[1]=new Array("images/gallery/walls/TamasToth-falak-18.jpg", "horizontalpic");
wallsGallery[2]=new Array("images/gallery/walls/TamasToth-falak-104-alkony.jpg", "horizontalpic");
wallsGallery[3]=new Array("images/gallery/walls/TamasToth-falak-gyules.jpg", "horizontalpic");
wallsGallery[4]=new Array("images/gallery/walls/TamasToth-falak-42.jpg", "verticalpic");
wallsGallery[5]=new Array("images/gallery/walls/TamasToth-falak-76.jpg", "horizontalpic");
wallsGallery[6]=new Array("images/gallery/walls/TamasToth-falak-84.jpg", "verticalpic");
wallsGallery[7]=new Array("images/gallery/walls/TamasToth-falak-169.jpg", "verticalpic");
wallsGallery[8]=new Array("images/gallery/walls/TamasToth-falak-228.jpg", "horizontalpic");
wallsGallery[9]=new Array("images/gallery/walls/TamasToth-falak-340.jpg", "horizontalpic");
wallsGallery[10]=new Array("images/gallery/walls/TamasToth-falak-azra.jpg", "horizontalpic");
wallsGallery[11]=new Array("images/gallery/walls/TamasToth-falak-dukenukem.jpg", "verticalpic");
wallsGallery[12]=new Array("images/gallery/walls/TamasToth-falak-hmm.jpg", "horizontalpic");
wallsGallery[13]=new Array("images/gallery/walls/TamasToth-falak-183.jpg", "horizontalpic");
wallsGallery[14]=new Array("images/gallery/walls/TamasToth-falak-nyakiglab.jpg", "verticalpic");
wallsGallery[15]=new Array("images/gallery/walls/TamasToth-falak-tel.jpg", "horizontalpic");
wallsGallery[16]=new Array("images/gallery/walls/TamasToth-falak-291.jpg", "verticalpic");
wallsGallery[17]=new Array("images/gallery/walls/TamasToth-falak-autoportreTT.jpg", "horizontalpic");

var hikingGallery = new Array();
hikingGallery.name="hiking";
hikingGallery[0]=new Array("images/gallery/hiking/TamasToth-icecave.jpg", "horizontalpic");
hikingGallery[1]=new Array("images/gallery/hiking/TamasToth-view.jpg", "horizontalpic");
hikingGallery[2]=new Array("images/gallery/hiking/TamasToth-umrakudivancvijet.jpg", "horizontalpic");
hikingGallery[3]=new Array("images/gallery/hiking/TamasToth-mostnasoci.jpg", "verticalpic");
hikingGallery[4]=new Array("images/gallery/hiking/TamasToth-america.jpg", "horizontalpic");
hikingGallery[5]=new Array("images/gallery/hiking/TamasToth-blackforest.jpg", "horizontalpic");
hikingGallery[6]=new Array("images/gallery/hiking/TamasToth-travnik.jpg", "verticalpic");
hikingGallery[7]=new Array("images/gallery/hiking/TamasToth-logarskadolina.jpg", "horizontalpic");
hikingGallery[8]=new Array("images/gallery/hiking/TamasToth-djurdjevicatara.jpg", "horizontalpic");
hikingGallery[9]=new Array("images/gallery/hiking/TamasToth-dvoje.jpg", "horizontalpic");
hikingGallery[10]=new Array("images/gallery/hiking/TamasToth-szamartovis.jpg", "horizontalpic");
hikingGallery[11]=new Array("images/gallery/hiking/TamasToth-gerinc.jpg", "horizontalpic");
hikingGallery[12]=new Array("images/gallery/hiking/TamasToth-s.jpg", "verticalpic");
hikingGallery[13]=new Array("images/gallery/hiking/TamasToth-bajka.jpg", "verticalpic");
hikingGallery[14]=new Array("images/gallery/hiking/TamasToth-maglic.jpg", "horizontalpic");
hikingGallery[15]=new Array("images/gallery/hiking/TamasToth-namarsu.jpg", "verticalpic");
hikingGallery[16]=new Array("images/gallery/hiking/TamasToth-pejzaz.jpg", "verticalpic");
hikingGallery[17]=new Array("images/gallery/hiking/TamasToth-povetarac.jpg", "horizontalpic");
hikingGallery[18]=new Array("images/gallery/hiking/TamasToth-usamljenodrvo.jpg", "horizontalpic");

var childrenGallery = new Array();
childrenGallery.name="children";
childrenGallery[0]=new Array("images/gallery/children/TamasToth-heyyou.jpg", "verticalpic");
childrenGallery[1]=new Array("images/gallery/children/TamasToth-dalmaportre.jpg", "horizontalpic");
childrenGallery[2]=new Array("images/gallery/children/TamasToth-sankanje.jpg", "horizontalpic");
childrenGallery[3]=new Array("images/gallery/children/TamasToth-osvezenje.jpg", "horizontalpic");
childrenGallery[4]=new Array("images/gallery/children/TamasToth-veselaporodica.jpg", "verticalpic");
childrenGallery[5]=new Array("images/gallery/children/TamasToth-mona.jpg", "horizontalpic");
childrenGallery[6]=new Array("images/gallery/children/TamasToth-keklilafiu.jpg", "horizontalpic");
childrenGallery[7]=new Array("images/gallery/children/TamasToth-cekajucitatu.jpg", "horizontalpic");
childrenGallery[8]=new Array("images/gallery/children/TamasToth-ifjhamingway.jpg", "horizontalpic");
childrenGallery[9]=new Array("images/gallery/children/TamasToth-marslakok.jpg", "horizontalpic");
childrenGallery[10]=new Array("images/gallery/children/TamasToth-kakosezoves.jpg", "verticalpic");
childrenGallery[11]=new Array("images/gallery/children/TamasToth-virko.jpg", "horizontalpic");
childrenGallery[12]=new Array("images/gallery/children/TamasToth-vattacukor.jpg", "horizontalpic");

var animalsGallery = new Array();
animalsGallery.name="animals";
animalsGallery[0]=new Array("images/gallery/animals/TamasToth-blup.jpg", "verticalpic");
animalsGallery[1]=new Array("images/gallery/animals/TamasToth-rupicapra.jpg", "verticalpic");
animalsGallery[2]=new Array("images/gallery/animals/TamasToth-palic.jpg", "verticalpic");
animalsGallery[3]=new Array("images/gallery/animals/TamasToth-cricket.jpg", "verticalpic");
animalsGallery[4]=new Array("images/gallery/animals/TamasToth-drotmadar.jpg", "verticalpic");
animalsGallery[5]=new Array("images/gallery/animals/TamasToth-jendva.jpg", "horizontalpic");
animalsGallery[6]=new Array("images/gallery/animals/TamasToth-woops.jpg", "verticalpic");
animalsGallery[7]=new Array("images/gallery/animals/TamasToth-NStaxi.jpg", "horizontalpic");
animalsGallery[8]=new Array("images/gallery/animals/TamasToth-vonatpuli.jpg", "horizontalpic");

var sestmeseciGallery = new Array();
sestmeseciGallery.name="sestmeseci";
sestmeseciGallery[0]=new Array("images/gallery/6meseci/TamasToth-buco.jpg", "horizontalpic");
sestmeseciGallery[1]=new Array("images/gallery/6meseci/TamasToth-jutarnjevezbe.jpg", "horizontalpic");
sestmeseciGallery[2]=new Array("images/gallery/6meseci/TamasToth-marenda.jpg", "horizontalpic");
sestmeseciGallery[3]=new Array("images/gallery/6meseci/TamasToth-orao.jpg", "horizontalpic");
sestmeseciGallery[4]=new Array("images/gallery/6meseci/TamasToth-budnjenje.jpg", "horizontalpic");
sestmeseciGallery[5]=new Array("images/gallery/6meseci/TamasToth-dnevnazapovest.jpg", "horizontalpic");
sestmeseciGallery[6]=new Array("images/gallery/6meseci/TamasToth-gadjanje.jpg", "verticalpic");
sestmeseciGallery[7]=new Array("images/gallery/6meseci/TamasToth-radovi.jpg", "horizontalpic");
sestmeseciGallery[8]=new Array("images/gallery/6meseci/TamasToth-smotra.jpg", "horizontalpic");
sestmeseciGallery[9]=new Array("images/gallery/6meseci/TamasToth-Rvovic.jpg", "horizontalpic");
sestmeseciGallery[10]=new Array("images/gallery/6meseci/TamasToth-sdo.jpg", "horizontalpic");
sestmeseciGallery[11]=new Array("images/gallery/6meseci/TamasToth-izlezavanje.jpg", "horizontalpic");
sestmeseciGallery[12]=new Array("images/gallery/6meseci/TamasToth-kantina.jpg", "horizontalpic");
sestmeseciGallery[13]=new Array("images/gallery/6meseci/TamasToth-komunikacija.jpg", "horizontalpic");
sestmeseciGallery[14]=new Array("images/gallery/6meseci/TamasToth-oraozovesokola.jpg", "horizontalpic");
sestmeseciGallery[15]=new Array("images/gallery/6meseci/TamasToth-prvisneg.jpg", "horizontalpic");
sestmeseciGallery[16]=new Array("images/gallery/6meseci/TamasToth-prvisnegciscenje.jpg", "horizontalpic");
sestmeseciGallery[17]=new Array("images/gallery/6meseci/TamasToth-ponossrbije.jpg", "verticalpic");
sestmeseciGallery[18]=new Array("images/gallery/6meseci/TamasToth-kupanje.jpg", "horizontalpic");

var hrGallery = new Array();
hrGallery.name="hr";
hrGallery[0]=new Array("images/gallery/hr/TamasToth-studenac.jpg", "verticalpic");
hrGallery[1]=new Array("images/gallery/hr/TamasToth-split.jpg", "verticalpic");
hrGallery[2]=new Array("images/gallery/hr/TamasToth-sajberbrod.jpg", "horizontalpic");
hrGallery[3]=new Array("images/gallery/hr/TamasToth-ftv.jpg", "horizontalpic");
hrGallery[4]=new Array("images/gallery/hr/TamasToth-omis.jpg", "horizontalpic");
hrGallery[5]=new Array("images/gallery/hr/TamasToth-zakonkurs.jpg", "verticalpic");
hrGallery[6]=new Array("images/gallery/hr/TamasToth-zmija.jpg", "horizontalpic");
hrGallery[7]=new Array("images/gallery/hr/TamasToth-ftv2.jpg", "horizontalpic");
hrGallery[8]=new Array("images/gallery/hr/TamasToth-jeldobrodrzisaparat.jpg", "horizontalpic");
hrGallery[9]=new Array("images/gallery/hr/TamasToth-robot.jpg", "horizontalpic");
hrGallery[10]=new Array("images/gallery/hr/TamasToth-tatoo.jpg", "horizontalpic");
hrGallery[11]=new Array("images/gallery/hr/TamasToth-zakonkurs2.jpg", "verticalpic");
hrGallery[12]=new Array("images/gallery/hr/TamasToth-vao.jpg", "horizontalpic");
hrGallery[13]=new Array("images/gallery/hr/TamasToth-hajna.jpg", "horizontalpic");
hrGallery[14]=new Array("images/gallery/hr/TamasToth-vezivanje.jpg", "horizontalpic");
hrGallery[15]=new Array("images/gallery/hr/TamasToth-szokes.jpg", "horizontalpic");
hrGallery[16]=new Array("images/gallery/hr/TamasToth-kuhanje.jpg", "verticalpic");
hrGallery[17]=new Array("images/gallery/hr/TamasToth-sunset.jpg", "verticalpic");
hrGallery[18]=new Array("images/gallery/hr/TamasToth-kapetanmeda.jpg", "horizontalpic");
hrGallery[19]=new Array("images/gallery/hr/TamasToth-400mell.jpg", "verticalpic");
hrGallery[20]=new Array("images/gallery/hr/TamasToth-tridvajedan.jpg", "verticalpic");
hrGallery[21]=new Array("images/gallery/hr/TamasToth-podmornica.jpg", "horizontalpic");
hrGallery[22]=new Array("images/gallery/hr/TamasToth-viszlaat.jpg", "horizontalpic");
hrGallery[23]=new Array("images/gallery/hr/TamasToth-motorkutya1365.jpg", "horizontalpic");
hrGallery[24]=new Array("images/gallery/hr/TamasToth-krknjasi6232.jpg", "horizontalpic");
hrGallery[25]=new Array("images/gallery/hr/TamasToth-krknjasi6275.jpg", "horizontalpic");
hrGallery[26]=new Array("images/gallery/hr/TamasToth-quest2.jpg", "verticalpic");
hrGallery[27]=new Array("images/gallery/hr/TamasToth-estipalma.jpg", "horizontalpic");
hrGallery[28]=new Array("images/gallery/hr/TamasToth-feloshazorzo6401.jpg", "verticalpic");
hrGallery[29]=new Array("images/gallery/hr/TamasToth-bicikli.jpg", "horizontalpic");
hrGallery[30]=new Array("images/gallery/hr/TamasToth-parasmiling.jpg", "verticalpic");
hrGallery[31]=new Array("images/gallery/hr/TamasToth-kikoto.jpg", "horizontalpic");
hrGallery[32]=new Array("images/gallery/hr/TamasToth-teke.jpg", "horizontalpic");
hrGallery[33]=new Array("images/gallery/hr/TamasToth-ahjdku.jpg", "horizontalpic");
hrGallery[34]=new Array("images/gallery/hr/TamasToth-hanyevesakapitany.jpg", "horizontalpic");
hrGallery[35]=new Array("images/gallery/hr/TamasToth-bigblue.jpg", "horizontalpic");
hrGallery[36]=new Array("images/gallery/hr/TamasToth-atbillen.jpg", "verticalpic");
hrGallery[37]=new Array("images/gallery/hr/TamasToth-sos.jpg", "verticalpic");
hrGallery[38]=new Array("images/gallery/hr/TamasToth-el.jpg", "horizontalpic");
hrGallery[39]=new Array("images/gallery/hr/TamasToth-hajo.jpg", "horizontalpic");
hrGallery[40]=new Array("images/gallery/hr/TamasToth-trajekt.jpg", "horizontalpic");
hrGallery[41]=new Array("images/gallery/hr/TamasToth-hangar.jpg", "horizontalpic");
hrGallery[42]=new Array("images/gallery/hr/TamasToth-titanic.jpg", "horizontalpic");
hrGallery[43]=new Array("images/gallery/hr/TamasToth-stomorska.jpg", "horizontalpic");
hrGallery[44]=new Array("images/gallery/hr/TamasToth-bloki.jpg", "horizontalpic");
hrGallery[45]=new Array("images/gallery/hr/TamasToth-tamo.jpg", "verticalpic");
hrGallery[46]=new Array("images/gallery/hr/TamasToth-maslinica.jpg", "horizontalpic");
hrGallery[47]=new Array("images/gallery/hr/TamasToth-krajsezone.jpg", "horizontalpic");
hrGallery[48]=new Array("images/gallery/hr/TamasToth-szazlabu.jpg", "verticalpic");
hrGallery[49]=new Array("images/gallery/hr/TamasToth-tukorkep.jpg", "horizontalpic");
hrGallery[50]=new Array("images/gallery/hr/TamasToth-siraly.jpg", "horizontalpic");
hrGallery[51]=new Array("images/gallery/hr/TamasToth-macskaszem.jpg", "horizontalpic");
hrGallery[52]=new Array("images/gallery/hr/TamasToth-hamvadocigarettaveg.jpg", "verticalpic");
hrGallery[53]=new Array("images/gallery/hr/TamasToth-sun.jpg", "verticalpic");
hrGallery[54]=new Array("images/gallery/hr/TamasToth-pirostorony.jpg", "verticalpic");
hrGallery[55]=new Array("images/gallery/hr/TamasToth-ina.jpg", "horizontalpic");
hrGallery[56]=new Array("images/gallery/hr/TamasToth-moonlander.jpg", "horizontalpic");
hrGallery[57]=new Array("images/gallery/hr/TamasToth-cica.jpg", "verticalpic");
hrGallery[58]=new Array("images/gallery/hr/TamasToth-tengerszem.jpg", "verticalpic");
hrGallery[59]=new Array("images/gallery/hr/TamasToth-tengerszem2.jpg", "verticalpic");
hrGallery[60]=new Array("images/gallery/hr/TamasToth-pjesackazona.jpg", "verticalpic");
hrGallery[61]=new Array("images/gallery/hr/TamasToth-zbogom.jpg", "horizontalpic");
hrGallery[62]=new Array("images/gallery/hr/TamasToth-cruiser.jpg", "horizontalpic");
hrGallery[63]=new Array("images/gallery/hr/TamasToth-lapospuli.jpg", "horizontalpic");
hrGallery[64]=new Array("images/gallery/hr/TamasToth-lapospuli2.jpg", "verticalpic");
hrGallery[65]=new Array("images/gallery/hr/TamasToth-leghajo.jpg", "horizontalpic");
hrGallery[66]=new Array("images/gallery/hr/TamasToth-zora.jpg", "horizontalpic");
hrGallery[67]=new Array("images/gallery/hr/TamasToth-tandem.jpg", "horizontalpic");
hrGallery[68]=new Array("images/gallery/hr/TamasToth-vlak.jpg", "horizontalpic");
hrGallery[69]=new Array("images/gallery/hr/TamasToth-preoluje.jpg", "verticalpic");
hrGallery[70]=new Array("images/gallery/hr/TamasToth-breakdance.jpg", "horizontalpic");
hrGallery[71]=new Array("images/gallery/hr/TamasToth-ja.jpg", "verticalpic");

var whosthatgirlGallery = new Array();
whosthatgirlGallery.name="whosthatgirl";
whosthatgirlGallery[0]=new Array("images/gallery/whosthatgirl/TamasToth-plavivoz.jpg", "horizontalpic");
whosthatgirlGallery[1]=new Array("images/gallery/whosthatgirl/TamasToth-kutak.jpg", "verticalpic");
whosthatgirlGallery[2]=new Array("images/gallery/whosthatgirl/TamasToth-kisa.jpg", "horizontalpic");
whosthatgirlGallery[3]=new Array("images/gallery/whosthatgirl/TamasToth-san.jpg", "verticalpic");
whosthatgirlGallery[4]=new Array("images/gallery/whosthatgirl/TamasToth-nightingale.jpg", "verticalpic");
whosthatgirlGallery[5]=new Array("images/gallery/whosthatgirl/TamasToth-vidi.jpg", "horizontalpic");
whosthatgirlGallery[6]=new Array("images/gallery/whosthatgirl/TamasToth-korak.jpg", "horizontalpic");
whosthatgirlGallery[7]=new Array("images/gallery/whosthatgirl/TamasToth-prizor.jpg", "horizontalpic");
whosthatgirlGallery[8]=new Array("images/gallery/whosthatgirl/TamasToth-suncica.jpg", "verticalpic");
whosthatgirlGallery[9]=new Array("images/gallery/whosthatgirl/TinaSolar.jpg", "whosthatgirlpic");

var egoGallery = new Array();
egoGallery.name="ego";
egoGallery[0]=new Array("images/gallery/ego/TTriglav.jpg", "horizontalpic");
egoGallery[1]=new Array("images/gallery/ego/TamasToth-kapecini.jpg", "verticalpic");
egoGallery[2]=new Array("images/gallery/ego/TamasToth-alien.jpg", "horizontalpic");
egoGallery[3]=new Array("images/gallery/ego/TamasToth-cudovisteizledinackogjezera.jpg", "horizontalpic");
egoGallery[4]=new Array("images/gallery/ego/TamasToth-lokalpatrioTTa.jpg", "horizontalpic");
egoGallery[5]=new Array("images/gallery/ego/TamasToth-autoportretsadaljinskim.jpg", "horizontalpic");
egoGallery[6]=new Array("images/gallery/ego/TamasToth-ja.jpg", "verticalpic");

function prevNext(direction) {
	//alert("prevnext " + currentImage);
	currentImage += direction;
	if (currentImage < 0)
		currentImage = 0;
	if (currentImage == currentGallery.length)
		currentImage = currentGallery.length - 1;
	switch (currentGallery[currentImage][0])
	{
	case "images/gallery/whosthatgirl/TamasToth-plavivoz.jpg":
	  pageTracker._trackPageview('/hr/gallery/whosthatgirl/plavivoz');
	  break;
	case "images/gallery/whosthatgirl/TamasToth-kutak.jpg":
	  pageTracker._trackPageview('/hr/gallery/whosthatgirl/kutak');
	  break;
	case "images/gallery/whosthatgirl/TamasToth-kisa.jpg":
	  pageTracker._trackPageview('/hr/gallery/whosthatgirl/kisa');
	  break;
	case "images/gallery/whosthatgirl/TamasToth-san.jpg":
	  pageTracker._trackPageview('/hr/gallery/whosthatgirl/san');
	  break;
	case "images/gallery/whosthatgirl/TamasToth-nightingale.jpg":
	  pageTracker._trackPageview('/hr/gallery/whosthatgirl/nightingale');
	  break;
	case "images/gallery/whosthatgirl/TamasToth-vidi.jpg":
	  pageTracker._trackPageview('/hr/gallery/whosthatgirl/vidi');
	  break;
	case "images/gallery/whosthatgirl/TamasToth-korak.jpg":
	  pageTracker._trackPageview('/hr/gallery/whosthatgirl/korak');
	  break;
	case "images/gallery/whosthatgirl/TamasToth-prizor.jpg":
	  pageTracker._trackPageview('/hr/gallery/whosthatgirl/prizor');
	  break;
	case "images/gallery/whosthatgirl/TamasToth-suncica.jpg":
	  pageTracker._trackPageview('/hr/gallery/whosthatgirl/suncica');
	  break;
	case "images/gallery/whosthatgirl/TinaSolar.jpg":
	  pageTracker._trackPageview('/hr/gallery/whosthatgirl/www');
	  break;

	  case "images/gallery/ego/TTriglav.jpg":
	  pageTracker._trackPageview('/hr/gallery/ego/triglav');
	  break;
	case "images/gallery/ego/TamasToth-kapecini.jpg":
	  pageTracker._trackPageview('/hr/gallery/ego/kapecini');
	  break;
	case "images/gallery/ego/TamasToth-alien.jpg":
	  pageTracker._trackPageview('/hr/gallery/ego/alien');
	  break;
	case "images/gallery/ego/TamasToth-cudovisteizledinackogjezera.jpg":
	  pageTracker._trackPageview('/hr/gallery/ego/cudovisteizledinackogjezera');
	  break;
	case "images/gallery/ego/TamasToth-lokalpatrioTTa.jpg":
	  pageTracker._trackPageview('/hr/gallery/ego/lokalpatriota');
	  break;
	case "images/gallery/ego/TamasToth-autoportretsadaljinskim.jpg":
	  pageTracker._trackPageview('/hr/gallery/ego/autoportretsadaljinskim');
	  break;
	case "images/gallery/ego/TamasToth-ja.jpg":
	  pageTracker._trackPageview('/hr/gallery/ego/ja');
	  break;
	default:
	}
	changegallerypic(currentGallery[currentImage][1], currentGallery[currentImage][0]);
	highlightCurrentImage(currentImage);
}