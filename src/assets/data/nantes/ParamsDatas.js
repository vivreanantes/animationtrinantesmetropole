var _paramsDatas = {
	'geo.boundsMinLong' : "-2.26",
	'geo.boundsMinLat' : "47.84",
	'geo.boundsMaxLong' : "-1.13",
	'geo.boundsMaxLat' : "47.11",
	'geo.defaultLat' : "47.197",
	'geo.defaultLong' : "-1.543",
	'geo.zoomInit' : "14",
	'geo.zoomMin' : "11",
	'geo.zoneDistance' : "1500",
	'geo.zoneDistanceAvantRedessiner' : "300",
	'pages.page1.nom' : "accueil_nantes",
	'pages.page2.nom' : "dechets",
	'pages.page3.nom' : "carte",
	'pages.page4.nom' : "fiches",
	'pages.page5.nom' : "lieux",
	'pages.page6.nom' : "a_domicile",
	'pages.page7.nom' : "trisacs_nantes",
	'available_language' : "fr,en",
	'defaultlanguage' : "fr"
};

var _paramFilterTypePlacesDatas = [{
		"id": "1",
		"code": "smco_reemp|modco_decheterie|modco_ecopoint|modco_encombrants_resume|ventevracstruct",
		"nom": "Tous les lieux"
	}, {
		"id": "2",
		"code": "smco_reemp",
		"nom": "Réemploi"
	}, {
		"id": "3",
		"code": "modco_decheterie|modco_ecopoint",
		"nom": "Déchèteries / Ecopoints",
		"nom_en": "Déchèteries / Ecopoints"
	}, {
		"id": "4",
		"code": "modco_encombrants_resume",
		"nom": "Encombrants",
		"nom_en": "Containers"
	}, {
		"id": "5",
		"code": "ventevracstruct",
		"nom": "Vente vrac",
		"nom_en": "No packaging shops"
	}
];
var _paramFilterTypeFiches = [{
		"id": "1",
		"code": "solutions_entreprises_nantes|initiative_locale|zero_dechet_nantes|consigne_locale|general_tri",
		"nom": "Tout"
	}, {
		"id": "2",
		"code": "solutions_entreprises_nantes",
		"nom": "Solutions pour les entreprises"
	}, {
		"id": "3",
		"code": "initiative_locale",
		"nom": "Initiatives locales réduc. déchets"
	}, {
		"id": "4",
		"code": "zero_dechet_nantes",
		"nom": "Mode de vie zéro déchets"
	}, {
		"id": "5",
		"code": "consigne_locale|general_tri",
		"nom": "Collecte des déchets"
	}
];

var _paramFilterTypeMapDatas = [{
		"id": "1",
		"code": "smco_reemp",
		"nom": "Réemploi (86)",
		"nom_en": "Re-use (86)",
		"image": "assets/icons/marker-icon-blue.png"
	}, {
		"id": "2",
		"code": "modco_contmpb,modco_contverre,modco_contembjournmag,modco_contomr,modco_dechetssecs",
		"nom": "Conteneurs (837 points tri)",
		"nom_en": "Containers (837 points tri)",
		"image": "assets/icons/marker-icon-brown.png"
//	}, {
//		"id": "3",
//		"code": "modco_ecopoint,modco_decheterie",
//		"nom": "Déchèteries / Ecopoints (16)",
//		"nom_en": "Déchèteries / Ecopoints (16)",
//		"image": "assets/icons/marker-icon-green.png"
	}, {
		"id": "4",
		"code": "modco_compostage",
		"nom": "Composteurs (248)",
		"nom_en": "Composting (248)",
		"image": "assets/icons/marker-icon-yellow.png"
	}, {
		"id": "5",
		"code": "smco_conteneurlerelais",
		"nom": "Conteneurs vêtements (53)",
		"nom_en": "Containers clothes (53)",
		"image": "assets/icons/marker-icon-pink.png"
	}, {
		"id": "6",
		"code": "ventevracstruct,ventevracpoints",
		"nom": "Vente vrac (221)",
		"nom_en": "No packaging shops (221)",
		"image": "assets/icons/marker-icon-red.png"
	}, {
//	}, {
//		"id": "7",
//		"code": "trisacs",
//		"nom": "Trisac (116)",
//		"nom_en": "Trisac (116)",
//		"image": "assets/icons/marker-icon-purple.png"
//	}, {
//		"id": "8",
//		"code": "modco_bouchons",
//		"nom": "Collecteurs bouchons (38)",
//		"nom_en": "Collector corks (38)",
//		"image": "assets/icons/marker-icon-grey.png"

			"id": "3",
			"code": "modco_decheterie",
			"nom": "Déchetteries/écopoints (10)",
			"nom_en": "Recycling center (10)",
			"image": "assets/icons/marker-icon-grey.png"

	}, {
		"id": "9",
		"code": "coreparation",
		"nom": "Ateliers co-réparations",
		"nom_en": "Self repair workshop",
		"image": "assets/icons/marker-icon-grey.png"
	}
];
var paramAllPlaces = 'smco_reemp|modco_decheterie|modco_ecopoint|modco_encombrants_resume|ventevracstruct';

var paramIconsMap = {
			default_icon: {},
			reemploi: {
				iconUrl: "assets/icons/marker-icon-blue.png"
			},
			conteneurs: {
				iconUrl: "assets/icons/marker-icon-brown.png"
			},
			decheterie: {
				iconUrl: "assets/icons/marker-icon-green.png"
			},
			composteurs: {
				iconUrl: "assets/icons/marker-icon-yellow.png"
			},
			conteneurlerelais: {
				iconUrl: "assets/icons/marker-icon-pink.png"
			},
			ventevrac: {
				iconUrl: "assets/icons/marker-icon-red.png"
			},
			trisac: {
				iconUrl: "assets/icons/marker-icon-purple.png"
			},
			collectors: {
				iconUrl: "assets/icons/marker-icon-grey.png"
			}
		};
