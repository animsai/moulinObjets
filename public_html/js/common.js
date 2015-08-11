/* 
 * Contains all the global variables as well as all the file manifests needed for the game
 * Author : J. Travnjak
 * Date : may 2014
 * Latest update : avgust 2015
 */

var IMGFOLDER = "./media/images/";
var SNDFOLDER = "./media/sounds/";
var stage;
var nav;

var NAV_FOLDER = "nav/";
var ANIMAL_FOLDER = "animaux/";
var FB_FOLDER = "feedbacks/";

var OUTLINE_SUFFIX = "_outline";
var SOUND_SUFFIX = "_snd";
var SCENE_ID = "scene";
var FEEDBACK_SUFFIX = "_fb";
var CONSINGES = "consignes";


var userScore = [
    /*{user: "test", levelId: "animaux1", theme: "animaux", score: 1},
    {user: "test", levelId: "animaux2", theme: "animaux", score: 2}*/
];

var InteractionTypeEnum = {
    GUIDED: 1,
    FREEDRAG: 2,
    GUIDEDDRAG: 3
};

var themes = [
    {id: "nav"},
    {id: "objets"}
    
];

/*******************************global files, can be used anywhere in the game****************************************************/
var interLevel_fileManifest = [
    {id: "menu", src: IMGFOLDER + NAV_FOLDER + "menu.png", x: 180, y: 400},
    {id: "replay", src: IMGFOLDER + NAV_FOLDER + "replay.png", x: 410, y: 400},
    {id: "next", src: IMGFOLDER + NAV_FOLDER + "next.png", x: 630, y: 400}
];

//global var used to inform user that there is a sound going on and that he has to wait
var speakerIconFile = {id: "speaker", src: IMGFOLDER + NAV_FOLDER + "ear.png", x: 410, y: 350};
//global file used in different contexts to go back to previous screen
var backButtonFile = {id: "previous_small", src: IMGFOLDER + NAV_FOLDER + "previous_small.png", x: 35, y: 35};
var repeatButtonFile = {id: "repeat", src: IMGFOLDER + NAV_FOLDER + "repeat.png", x: 35, y: 650};
var closeButtonFile = {id: "close", src: IMGFOLDER + NAV_FOLDER + "close.png", x: 135, y: 35};
//var introSnd = {id: "intro_snd", src: SNDFOLDER + NAV_FOLDER + "intro.mp3"};
var introImg = {id: "introImg", src: IMGFOLDER + NAV_FOLDER + "ecran_debut_couleurs.png", x: 0, y: 0};

var feedback_fileManifest = [
    {id: "pos0_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.bon.1.mp3"},
    {id: "pos1_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.bon.2.mp3"},
    {id: "pos2_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.bon.3.mp3"},
    {id: "neg0_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.mauvais.1.mp3"},
    {id: "neg1_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.mauvais.2.mp3"},
    {id: "neg2_fb", src: SNDFOLDER + FB_FOLDER + "1animaux.reponse.mauvais.3.mp3"},
    {id: "objets_conclusion_fb", src: SNDFOLDER + "objets/" + FB_FOLDER + "3objets.conclusion.mp3"}

];
/***********************************************************************""""""""""""""""""""""""""""**************************/


/***************************************NAVIGATION FILES ****************************""""""""""""""""******************************/
var nav_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + NAV_FOLDER + "niveau1_decor_grand.png"},
    //level images
   
    {id: "objets", src: IMGFOLDER + NAV_FOLDER + "niveau1_objets.png", x: 410, y: 180},

    //instruction and feedback sounds
    {id: "nav_consignes_fb", src: SNDFOLDER + NAV_FOLDER + "consignes.mp3"},
    {id: "subNav_consignes_fb", src: SNDFOLDER + NAV_FOLDER + "son_5.mp3"}
];

var objets_nav_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + NAV_FOLDER + "niveau2_objets_decor.png"},
    //level images
    {id: "objetsEx1", levelId: "objets1", src: IMGFOLDER + NAV_FOLDER + "niveau2_objets_ex1.png", x: 42, y: 254},
    {id: "objetsEx2", levelId: "objets2", src: IMGFOLDER + NAV_FOLDER + "niveau2_objets_ex2.png", x: 228, y: 254},
    {id: "objetsEx3", levelId: "objets3", src: IMGFOLDER + NAV_FOLDER + "niveau2_objets_ex3.png", x: 408, y: 254},
    {id: "objetsEx4", levelId: "objets4", src: IMGFOLDER + NAV_FOLDER + "niveau2_objets_ex4.png", x: 595, y: 254},
    {id: "objetsEx5", levelId: "objets5", src: IMGFOLDER + NAV_FOLDER + "niveau2_objets_ex5.png", x: 778, y: 254},
    {id: "objetsEx6", levelId: "objets6", src: IMGFOLDER + NAV_FOLDER + "niveau2_objets_ex6.png", x: 42, y: 454},
    {id: "objetsEx7", levelId: "objets7", src: IMGFOLDER + NAV_FOLDER + "niveau2_objets_ex7.png", x: 228, y: 454},
    {id: "objetsEx8", levelId: "objets8", src: IMGFOLDER + NAV_FOLDER + "niveau2_objets_ex8.png", x: 408, y: 454}
];

/**************************************************************************************************************************/


/*******************************************************LEVEL SPECIFIC FILES ******************************************************/

//keep the levels in the correct order, otherwise it won't work for the score calculations
var levels = [
    {id: "objets1", theme: "objets", media: "objets1_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "objets2", theme: "objets", media: "objets2_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "objets3", theme: "objets", media: "objets3_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "objets4", theme: "objets", media: "objets4_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "objets5", theme: "objets", media: "objets5_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "objets6", theme: "objets", media: "objets6_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "objets7", theme: "objets", media: "objets7_fileManifest", interaction: InteractionTypeEnum.GUIDED},
    {id: "objets8", theme: "objets", media: "objets8_fileManifest", interaction: InteractionTypeEnum.GUIDED}
   ];


/***
 * array of files needed in  levels
 * respect the following order
 * first item shall be the background of the scene
 * followed by outline images
 * then clickable images
 * then  level instructions
 * */

var objets1_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + "objets/level1/objets_decor.png"},
    //level images
    {id: "avion", src: IMGFOLDER + "objets/level1/objets_avion.png", x: 470, y: 490, width: 110, height: 57},
    {id: "balle", src: IMGFOLDER + "objets/level1/objets_balle.png", x: 769, y: 640, width: 100, height: 100},
    {id: "cles", src: IMGFOLDER + "objets/level1/objets_cles.png", x: 546, y: 645, width: 85, height: 45},
    {id: "poupee", src: IMGFOLDER + "objets/level1/objets_poupee.png", x: 484, y: 188, width: 102, height: 125},
    {id: "livre", src: IMGFOLDER + "objets/level1/objets_livre.png", x: 180, y: 463, width: 116, height: 46},
    {id: "tasse", src: IMGFOLDER + "objets/level1/objets_tasse.png", x: 280, y: 604, width: 77, height: 45},
    //level sounds
    {id: "avion_snd", src: SNDFOLDER + "objets/level1/3objets.serie1.3.mp3"},
    {id: "balle_snd", src: SNDFOLDER + "objets/level1/3objets.serie1.4.mp3"},
    {id: "cles_snd", src: SNDFOLDER + "objets/level1/3objets.serie1.2.mp3"},
    {id: "poupee_snd", src: SNDFOLDER + "objets/level1/3objets.serie1.6.mp3"},
    {id: "livre_snd", src: SNDFOLDER + "objets/level1/3objets.serie1.5.mp3"},
    {id: "tasse_snd", src: SNDFOLDER + "objets/level1/3objets.serie1.1.mp3"},
    //instruction and feedback sounds
    {id: "consignes_objets1", src: SNDFOLDER + "objets/level1/3objets.consigne.1.mp3"}
];

var objets2_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + "objets/level2/objets_decor.png"},
    //level images
    {id: "ballon", src: IMGFOLDER + "objets/level2/objets_ballon.png", x: 63, y: 216, width: 85, height: 85},
    {id: "biberon", src: IMGFOLDER + "objets/level2/objets_biberon.png", x: 816, y: 435, width: 42, height: 80},
    {id: "telephone", src: IMGFOLDER + "objets/level2/objets_telephone.png", x: 608, y: 242, width:45, height: 75},
    {id: "cadeau", src: IMGFOLDER + "objets/level2/objets_cadeau.png", x: 270, y: 550, width: 102, height: 102},
    {id: "verre", src: IMGFOLDER + "objets/level2/objets_verre.png", x: 450, y: 480, width: 45, height: 60},
    {id: "voiture", src: IMGFOLDER + "objets/level2/objets_voiture.png", x: 680, y: 625, width: 102, height: 90},
    //level sounds
    {id: "ballon_snd", src: SNDFOLDER + "objets/level2/3objets.serie2.5.mp3"},
    {id: "biberon_snd", src: SNDFOLDER + "objets/level2/3objets.serie2.3.mp3"},
    {id: "telephone_snd", src: SNDFOLDER + "objets/level2/3objets.serie2.2.mp3"},
    {id: "cadeau_snd", src: SNDFOLDER + "objets/level2/3objets.serie2.6.mp3"},
    {id: "verre_snd", src: SNDFOLDER + "objets/level2/3objets.serie2.1.mp3"},
    {id: "voiture_snd", src: SNDFOLDER + "objets/level2/3objets.serie2.4.mp3"},
    //instruction and feedback sounds
    {id: "consignes_objets2", src: SNDFOLDER + "objets/level2/3objets.consigne.1.mp3"}
];

var objets3_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + "objets/level3/objets_decor.png"},
    //level images
    {id: "bouteille", src: IMGFOLDER + "objets/level3/objets_bouteille.png", x: 99, y: 180, width: 45, height: 120},
    {id: "cadeau_v2", src: IMGFOLDER + "objets/level3/objets_cadeau_v2.png", x: 797, y: 435, width: 137, height: 148},
    {id: "lampe", src: IMGFOLDER + "objets/level3/objets_lampe.png", x: 430, y: 450, width: 65, height: 78},
    {id: "poubelle", src: IMGFOLDER + "objets/level3/objets_poubelle.png", x: 885, y: 500, width: 100, height: 200},
    {id: "sirop", src: IMGFOLDER + "objets/level3/objets_sirop.png", x: 593, y: 370, width: 80, height: 90},
    {id: "train", src: IMGFOLDER + "objets/level3/objets_train.png", x: 185, y: 630, width: 155, height: 95},
    //level sounds
    {id: "bouteille_snd", src: SNDFOLDER + "objets/level3/3objets.serie3.5.mp3"},
    {id: "cadeau_v2_snd", src: SNDFOLDER + "objets/level3/3objets.serie3.4.mp3"},
    {id: "lampe_snd", src: SNDFOLDER + "objets/level3/3objets.serie4.4.mp3"},
    {id: "poubelle_snd", src: SNDFOLDER + "objets/level3/3objets.serie4.6.mp3"},
    {id: "sirop_snd", src: SNDFOLDER + "objets/level3/3objets.serie3.2.mp3"},
    {id: "train_snd", src: SNDFOLDER + "objets/level3/3objets.serie3.3.mp3"},
    //instruction and feedback sounds
    {id: "consignes_objets3", src: SNDFOLDER + "objets/level3/3objets.consigne.1.mp3"}
];
var objets4_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + "objets/level4/objets_decor.png"},
    //level images
    {id: "bateau", src: IMGFOLDER + "objets/level4/objets_bateau.png", x: 163, y: 360, width: 122, height: 150},
    {id: "boite", src: IMGFOLDER + "objets/level4/objets_boite.png", x: 637, y: 565, width: 121, height: 88},
    {id: "bol", src: IMGFOLDER + "objets/level4/objets_bol.png", x: 500, y: 470, width: 92, height: 62},
    {id: "vase", src: IMGFOLDER + "objets/level4/objets_vase.png", x: 885, y: 500, width: 60, height: 150},
    {id: "photo", src: IMGFOLDER + "objets/level4/objets_photo.png", x: 573, y: 170, width: 96, height: 110},
    {id: "appareilPhoto", src: IMGFOLDER + "objets/level4/objets_appareil_photo.png", x: 285, y: 630, width: 88, height: 55},
    //level sounds
    {id: "bateau_snd", src: SNDFOLDER + "objets/level4/3objets.bateau.mp3"},
    {id: "boite_snd", src: SNDFOLDER + "objets/level4/3objets.boite.mp3"},
    {id: "bol_snd", src: SNDFOLDER + "objets/level4/3objets.bol.mp3"},
    {id: "vase_snd", src: SNDFOLDER + "objets/level4/3objets.vase.mp3"},
    {id: "photo_snd", src: SNDFOLDER + "objets/level4/3objets.photo.mp3"},
    {id: "appareilPhoto_snd", src: SNDFOLDER + "objets/level4/3objets.appareilPhoto.mp3"},
    //instruction and feedback sounds
    {id: "consignes_objets4", src: SNDFOLDER + "objets/level4/3objets.consigne.1.mp3"}
];

var objets5_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + "objets/level5/objets_decor.png"},
    //level images
    {id: "bol", src: IMGFOLDER + "objets/level5/objets_bol.png", x: 580, y: 383, width: 92, height: 62},
    {id: "helico", src: IMGFOLDER + "objets/level5/objets_helico.png", x: 57, y: 218, width: 90, height: 79},
    {id: "couteau", src: IMGFOLDER + "objets/level5/objets_couteau.png", x: 450, y: 500, width: 128, height: 32},
    {id: "panier", src: IMGFOLDER + "objets/level5/objets_panier.png", x: 755, y: 500, width: 177, height: 163},
    {id: "plante", src: IMGFOLDER + "objets/level5/objets_plante.png", x: 250, y: 320, width: 170, height: 217},
    {id: "velo", src: IMGFOLDER + "objets/level5/objets_velo.png", x: 45, y: 450, width: 394, height: 238},
    //level sounds
    {id: "bol_snd", src: SNDFOLDER + "objets/level5/3objets.bol.mp3"},
    {id: "helico_snd", src: SNDFOLDER + "objets/level5/3objets.helico.mp3"},
    {id: "couteau_snd", src: SNDFOLDER + "objets/level5/3objets.couteau.mp3"},
    {id: "panier_snd", src: SNDFOLDER + "objets/level5/3objets.panier.mp3"},
    {id: "plante_snd", src: SNDFOLDER + "objets/level5/3objets.plante.mp3"},
    {id: "velo_snd", src: SNDFOLDER + "objets/level5/3objets.velo.mp3"},
    //instruction and feedback sounds
    {id: "consignes_objets5", src: SNDFOLDER + "objets/level5/5objets.consigne.1.mp3"}
];

var objets6_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + "objets/level6/objets_decor.png"},
    //level images
    {id: "horloge", src: IMGFOLDER + "objets/level6/objets_horloge_v2.png", x: 590, y: 370, width: 70, height: 70},
    {id: "poupee", src: IMGFOLDER + "objets/level6/objets_poupee_v2.png", x: 57, y: 248, width: 104, height: 82},
    {id: "pot", src: IMGFOLDER + "objets/level6/objets_pot.png", x: 450, y: 570, width: 133, height: 136},
    {id: "traineau", src: IMGFOLDER + "objets/level6/objets_traineau.png", x: 755, y: 570, width: 260, height: 109},
    {id: "raquette", src: IMGFOLDER + "objets/level6/objets_raquette.png", x: 150, y: 385, width: 158, height: 140},
    //level sounds
    {id: "horloge_snd", src: SNDFOLDER + "objets/level6/3objets.horloge.mp3"},
    {id: "poupee_snd", src: SNDFOLDER + "objets/level6/3objets.poupee.mp3"},
    {id: "pot_snd", src: SNDFOLDER + "objets/level6/3objets.pot.mp3"},
    {id: "traineau_snd", src: SNDFOLDER + "objets/level6/3objets.traineau.mp3"},
    {id: "raquette_snd", src: SNDFOLDER + "objets/level6/3objets.raquette.mp3"},
    //instruction and feedback sounds
    {id: "consignes_objets6", src: SNDFOLDER + "objets/level5/5objets.consigne.1.mp3"}
];

var objets7_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + "objets/level7/objets_decor.png"},
    //level images
    {id: "appareilPhoto", src: IMGFOLDER + "objets/level7/objets_appareilPhoto.png", x: 200, y: 440, width: 88, height: 55},
    {id: "balai", src: IMGFOLDER + "objets/level7/objets_balai.png", x: 690, y: 308, width: 94, height: 248},
    {id: "telecommande", src: IMGFOLDER + "objets/level7/objets_telecommande.png", x: 500, y: 650, width: 70, height: 60},
    {id: "cube", src: IMGFOLDER + "objets/level7/objets_cube.png", x: 855, y: 620, width: 62, height: 72},
    {id: "bus", src: IMGFOLDER + "objets/level7/objets_bus.png", x: 500, y: 255, width: 115, height: 58},
    //level sounds
    {id: "appareilPhoto_snd", src: SNDFOLDER + "objets/level7/3objets.appareilPhoto.mp3"},
    {id: "balai_snd", src: SNDFOLDER + "objets/level7/3objets.balai.mp3"},
    {id: "telecommande_snd", src: SNDFOLDER + "objets/level7/3objets.telecommande.mp3"},
    {id: "cube_snd", src: SNDFOLDER + "objets/level7/3objets.cube.mp3"},
    {id: "bus_snd", src: SNDFOLDER + "objets/level7/3objets.bus.mp3"},
    //instruction and feedback sounds
    {id: "consignes_objets7", src: SNDFOLDER + "objets/level5/5objets.consigne.1.mp3"}
];

var objets8_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + "objets/level8/objets_decor.png"},
    //level images
    {id: "ballon", src: IMGFOLDER + "objets/level8/objets_ballon.png", x: 530, y: 550, width: 85, height: 85},
    {id: "horloge", src: IMGFOLDER + "objets/level8/objets_horloge.png", x: 523, y: 130, width: 166, height: 166},
    {id: "coussin", src: IMGFOLDER + "objets/level8/objets_coussin.png", x: 130, y: 585, width: 149, height: 92},
    {id: "verre", src: IMGFOLDER + "objets/level8/objets_verre.png", x: 590, y: 385, width: 45, height: 60},
    {id: "biberon", src: IMGFOLDER + "objets/level8/objets_biberon.png", x: 450, y: 460, width: 42, height: 80},
    //level sounds
    {id: "ballon_snd", src: SNDFOLDER + "objets/level8/3objets.ballon.mp3"},
    {id: "horloge_snd", src: SNDFOLDER + "objets/level8/3objets.horloge.mp3"},
    {id: "coussin_snd", src: SNDFOLDER + "objets/level8/3objets.coussin.mp3"},
    {id: "verre_snd", src: SNDFOLDER + "objets/level8/3objets.verre.mp3"},
    {id: "biberon_snd", src: SNDFOLDER + "objets/level8/3objets.biberon.mp3"},
    //instruction and feedback sounds
    {id: "consignes_objets8", src: SNDFOLDER + "objets/level5/5objets.consigne.1.mp3"}
];

var objets9_fileManifest = [
    //background
    {id: "scene", src: IMGFOLDER + "objets/level9/objets_decor.png"},
    //level images
    {id: "ballon", src: IMGFOLDER + "objets/level9/objets_ballon.png", x: 530, y: 550, width: 85, height: 85},
    {id: "horloge", src: IMGFOLDER + "objets/level9/objets_horloge.png", x: 523, y: 130, width: 166, height: 166},
    {id: "coussin", src: IMGFOLDER + "objets/level9/objets_coussin.png", x: 130, y: 585, width: 149, height: 92},
    {id: "verre", src: IMGFOLDER + "objets/level9/objets_verre.png", x: 590, y: 385, width: 45, height: 60},
    {id: "biberon", src: IMGFOLDER + "objets/level9/objets_biberon.png", x: 450, y: 460, width: 42, height: 80},
    //level sounds
    {id: "ballon_snd", src: SNDFOLDER + "objets/level9/3objets.ballon.mp3"},
    {id: "horloge_snd", src: SNDFOLDER + "objets/level9/3objets.horloge.mp3"},
    {id: "coussin_snd", src: SNDFOLDER + "objets/level9/3objets.coussin.mp3"},
    {id: "verre_snd", src: SNDFOLDER + "objets/level9/3objets.verre.mp3"},
    {id: "biberon_snd", src: SNDFOLDER + "objets/level9/3objets.biberon.mp3"},
    //instruction and feedback sounds
    {id: "consignes_objets9", src: SNDFOLDER + "objets/level5/5objets.consigne.1.mp3"}
];


/**************************************************************************************************************************/



/************************************************CONTAINERS FOR ALL THE OTHER MANIFESTS **************************************************************************/

/*these files are the ones that are loaded in the beggining of the game
 * they are the most needed for the player to start playing*/
var coreFiles = [interLevel_fileManifest, nav_fileManifest, feedback_fileManifest, speakerIconFile, backButtonFile, introImg,
     objets_nav_fileManifest];

/**************************************************************************************************************************/