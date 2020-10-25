var _theGoodSortingData = {
  questions: [
    {
      name: "ampoule_basse_conso",
      descr: "Ampoule basse consommation",
      descr_en: "Low-energy bulb",
      advice:
        "A mettre dans les bornes dédiées que l’on trouve en déchèterie et dans certains magasins et grandes surfaces.",
      advice_en: "To put in the dedicated terminals that are found in refuse and in some stores and supermarkets.",
      image: "ampoule_basse_conso.png",
      reponses: ["retour", "decheterie"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "appareil_photo",
      descr: "Appareil photo",
      descr_en: "Camera",
      resume: "( HS )",
      resume_en: "( out of use )",
      advice:
        "En déchèterie dans la benne « appareils électriques et électroniques » . Les magasins de plus de 400 m² qui vendent des petits appareils électriques et électroniques de 25 cm maximum les reprennent également sans obligation d'achat.",
      advice_en: "",
      image: "appareil_photo.png",
      reponses: ["decheterie", "retour"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "ballon_trinormal",
      descr: "Ballon de basket",
      descr_en: "Basket ball",
      resume: "( crevé )",
      resume_en: "( burst )",
      advice: "En déchèterie, dans la benne « autres déchets ».",
      advice_en: 'In waste disposal, in the dump "other waste"',
      image: "ballon.png",
      reponses: ["decheterie"],
      exclude_filters: ["tri_extension", "niveau_enfant"]
    },
    {
      name: "ballon_extensiondetri",
      descr: "Ballon de basket",
      descr_en: "Basket ball",
      resume: "( crevé )",
      resume_en: "( burst )",
      advice: "En déchèterie, dans la benne « autres déchets ».",
      advice_en: 'In waste disposal, in the dump "other waste"',
      image: "ballon.png",
      reponses: ["decheterie"],
      exclude_filters: ["tri_normal", "niveau_enfant"]
    },
    {
      name: "barquette_alu",
      descr: "Barquette aluminium",
      descr_en: "Aluminium container",
      advice: "Recyclage : l'aluminium se recycle",
      advice_en: "Recycling : aluminum recycles.",
      image: "barquette_alu.png",
      reponses: ["jaune"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "batterie",
      descr: "Batterie de voiture",
      descr_en: "Car’s battery",
      advice:
        "En déchèterie, au niveau des produits toxiques. Les magasins qui vendent ce produit le reprennent également sans obligation d'achat.",
      advice_en:
        "In waste, at the level of toxic products. Stores that sell this product also take it back with no obligation to purchase.",
      image: "batterie.png",
      reponses: ["decheterie", "retour"],
      exclude_filters: [ "niveau_enfant"]
    },
    {
      name: "bombe_aerosol",
      descr: "Bombe aérosol de laque à cheveux",
      descr_en: "Air spray",
      advice:
        "Recyclage : les bombes métalliques ne contenant pas de produits dangereux se recyclent / Déchèterie dans la benne « ferraille ».",
      advice_en:
        'Recycling: metal bombs containing no dangerous products are recycled / Waste in the "scrap" dumpster"',
      image: "bombe_aerosol.png",
      reponses: ["jaune", "decheterie"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "boite_a_oeufs",
      descr: "Boite à œufs",
      descr_en: "Eggs box",
      resume: "( propre )",
      resume_en: "( cleaned )",
      advice:
        "Recyclable si la boite est propre / Dans le composteur pour les apports carbones nécessaires à un bon compost.",
      advice_en:
        "Recyclable if the box is clean / In the composter for the carbon inputs necessary for a good compost",
      image: "boite_a_oeufs.png",
      reponses: ["composteur", "jaune"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "bouteille_huile",
      descr: "Bouteille d'huile",
      descr_en: "Oil bottle",
      resume: "vide",
      resume_en: "empty",
      advice:
        "Recyclage : les bouteilles et flacons plastiques vides se recyclent.",
      advice_en: "Recycling : empty plastic bottles and flasks are recycled",
      image: "bouteille_huile.png",
      reponses: ["jaune"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "bouchon_liege",
      descr: "Bouchon de liège",
      descr_en: "Cork",
      advice:
        "Poubelle : ils sont trop petits pour être recyclés. Astuce : Ils sont récupérés par certaines associations caritatives. Renseignez-vous.",
      advice_en:
        "Waste bin: they are too small to be recycled. Tip: They are recovered by some charities. Educate yourself.",
      image: "bouchon_liege.png",
      reponses: ["poubelle", "reemploi"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "brosse_a_dent_trinormal",
      descr: "Brosse à dent",
      descr_en: "Toothbrush",
      advice: "Poubelle.",
      advice_en: "Bin.",
      image: "brosse_a_dent.png",
      reponses: ["poubelle"],
      exclude_filters: ["tri_extension", "niveau_enfant", "niveau_expert"]
    },
    {
      name: "brosse_a_dent_extensiondetri",
      descr: "Brosse à dent",
      descr_en: "Toothbrush",
      advice: "Poubelle.",
      advice_en: "Bin.",
      reponses: ["poubelle"],
      exclude_filters: ["tri_normal", "niveau_enfant", "niveau_expert"]
    },
    {
      name: "canette",
      descr: "Canette de soda",
      descr_en: "Soda can",
      advice: "Recyclage : l'aluminium se recycle",
      advice_en: "Recycling : aluminum recycles.",
      image: "cannette.png",
      reponses: ["jaune"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "cahier",
      descr: "Cahier",
      descr_en: "Exercise book",
      advice: "Recyclage : le papier non souillé se recycle.",
      advice_en: "Recycling: Unstained paper is recycled.",
      image: "cahier.png",
      reponses: ["jaune"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "chaussures_propres",
      descr: "Chaussures bon état",
      descr_en: "Good condition shoes",
      advice:
        "Dans les conteneurs vêtement pour être réemployées (revente en ressourceries et boutiques spécialisées).",
      advice_en:
        "In garment containers to be re-used (resale in resorts and specialty shops).",
      image: "chaussures_propres.png",
      reponses: ["reemploi"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "chaussures_usees",
      descr: "Chaussures usées",
      descr_en: "Worn out shoes",
      advice:
        "Dans les conteneurs vêtement pour être réemployées (matière première de matériaux).",
      advice_en: "In garment containers to be reused (material raw material)",
      image: "chaussures_usees.png",
      reponses: ["reemploi"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "cle_usb",
      descr: "Clé USB",
      descr_en: "USB key",
      resume: "( cassée )",
      resume_en: "( out of use )",
      advice:
        "En déchèterie dans la benne « appareils électriques et électroniques » . Les magasins de plus de 400 m² qui vendent des petits appareils électriques et électroniques de 25 cm maximum les reprennent également sans obligation d'achat.",
      advice_en:
        'Waste disposal in the dump "electrical and electronic appliances". Stores of more than 400 m² that sell small electrical and electronic devices up to 25 cm also take them back without any obligation to purchase.',
      image: "cle_usb.png",
      reponses: ["decheterie", "retour"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "couvercle_bocal",
      descr: "Couvercle bocal métallique",
      descr_en: "Jar lid metal",
      advice: "Recyclage : Le métal se recycle.",
      advice_en: "Recycling: Metal recycles.",
      image: "couvercle_bocal.png",
      reponses: ["jaune"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "ciseaux_enfants",
      descr: "Ciseaux",
      descr_en: "Scissors",
      advice: "Poubelle.",
      advice_en: "Bin.",
      image: "ciseaux_enfants.png",
      reponses: ["poubelle"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "dentifrice",
      descr: "Tube de dentifrice",
      descr_en: "Tube of toothpaste",
      advice: "Recyclage : tous les emballages se trient en extension de tri.",
      advice_en: "Recycling: all packages are sorted in sorting extension.",
      image: "dentifrice.png",
      reponses: ["jaune"],
      exclude_filters: ["tri_normal", "niveau_enfant"]
    },
    {
      name: "dentifrice",
      descr: "Tube de dentifrice",
      descr_en: "Tube of toothpaste",
      advice: "Poubelle.",
      advice_en: "Bin.",
      image: "dentifrice.png",
      reponses: ["poubelle"],
      exclude_filters: ["tri_extension", "niveau_enfant"]
    },
    {
      name: "epeluchure_legumes",
      descr: "Épluchure de légumes",
      descr_en: "Vegetable peeling",
      advice: "Dans le composteur",
      advice_en: "Composter direction.",
      image: "epeluchure_legumes.png",
      reponses: ["composteur"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "fer_a_repasser",
      descr: "Fer à repasser",
      descr_en: "Iron",
      resume: "( HS )",
      resume_en: "( out of use )",
      advice:
        "En déchèterie dans la benne « appareils électriques et électroniques » . Les magasins de plus de 400 m² qui vendent des petits appareils électriques et électroniques de 25 cm maximum les reprennent également sans obligation d'achat.",
      advice_en:
        'Waste disposal in the dump "electrical and electronic appliances". Stores of more than 400 m² that sell small electrical and electronic devices up to 25 cm also take them back without any obligation to purchase.',
      image: "fer_a_repasser.png",
      reponses: ["decheterie", "retour"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "flacon_shampoing",
      descr: "Flacon de shampoing",
      descr_en: "Shampoo bottle",
      advice:
        "Recyclage : les bouteilles et flacons plastiques vides se recyclent.",
      advice_en: "Recycling: empty plastic bottles and flasks are recycled.",
      image: "flacon_shampoing.png",
      reponses: ["jaune"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "lampe",
      descr: "Lampe",
      descr_en: "Lamp",
      resume: "( en bon état )",
      resume_en: "( still works )",
      advice:
        "Réemploi : elle peut être revendue dans une ressourcerie / En déchèterie dans la benne « appareils électriques et électroniques »  / Les magasins qui vendent ces produits les reprennent également si vous en achetez un neuf.",
      advice_en:
        'Re-use: it can be resold in a recycling plant / In waste disposal in the "electrical and electronic appliances" bin / The stores that sell these products also take them back if you buy a new one.',
      image: "lampe.png",
      reponses: ["reemploi", "decheterie", "retour"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "medicaments",
      descr: "Médicaments",
      descr_en: "Medicine",
      advice:
        "Retour au magasin : les pharmacies ont l'obligation de récupérer les anciens médicaments,",
      advice_en:
        "Back to the store: pharmacies have the obligation to recover old drugs,",
      image: "medicaments.png",
      reponses: ["retour"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "megot",
      descr: "Mégot",
      descr_en: "Cigarette butt",
      advice: "Poubelle. Un seul mégot jeté par terre pollue 500 litres d’eau.",
      advice_en:
        "Trash can. A single butt thrown on the ground pollutes 500 liters of water.",
      image: "megot.png",
      reponses: ["poubelle"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "mouchoir_papier",
      descr: "Mouchoir en papier",
      descr_en: "Tissue",
      resume: "( utilisé )",
      resume_en: "( used )",
      advice:
        "Poubelle : le papier souillé ne se recycle pas / Dans le composteur pour les apports carbones nécessaires à un bon compost.",
      advice_en:
        "Waste bin: soiled paper is not recycled / In the composter for the carbon inputs necessary for a good compost.",
      image: "mouchoir_papier.png",
      reponses: ["composteur", "poubelle"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "nounours",
      descr: "Jouet",
      descr_en: "Toy",
      resume: "( en bon état )",
      resume_en: "( still works )",
      advice:
        "Réemploi : Il peut être revendu dans une ressourcerie ou mis dans les conteneur à vêtement / En déchèterie dans la benne « autres déchets ».",
      advice_en:
        'Reuse: It can be resold in a recycling plant or put in the garment container / In waste disposal in the bucket "other waste".',
      image: "nounours.png",
      reponses: ["decheterie", "reemploi"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "ordinateur_portable",
      descr: "Ordinateur portable",
      descr_en: "Laptop",
      resume: "( non réparable )",
      resume_en: "( irreparable )",
      advice:
        "En déchèterie dans la benne « appareils électriques et électroniques »  / Les magasins qui vendent ces produits les reprennent également si vous en achetez un neuf.",
      advice_en:
        'Waste in the dump "electrical and electronic devices" / Stores that sell these products also take back if you buy a new one.',
      image: "ordinateur_portable.png",
      reponses: ["retour", "decheterie"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "paille_trinormal",
      descr: "Paille en plastique",
      descr_en: "Plastics straw",
      image: "paille.png",
      reponses: ["poubelle"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "palette_bois",
      descr: "Palette en bois",
      descr_en: "Wooden pallet",
      advice:
        "En déchèterie, dans la benne « bois » / Réemploi : elle  peut être réutilisée pour faire des meubles par exemple.",
      advice_en:
        'In waste disposal, in the "wood" tipper / reuse: it can be reused to make furniture for example.',
      image: "palette_bois.png",
      reponses: ["reemploi", "decheterie"],
      exclude_filters: ["niveau_enfant", "niveau_expert"]
    },
    {
      name: "peau_banane",
      descr: "Peau de banane",
      descr_en: "Banana skin",
      advice: "Dans le composteur.",
      advice_en: "In the composter.",
      image: "peau_banane.png",
      reponses: ["composteur"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "pneu",
      descr: "Pneu",
      descr_en: "Tyre",
      advice:
        "En déchèterie (attention seule la déchèterie de Nantes acceptent les pneus) / Les magasins qui vendent ces produits les reprennent également si vous en achetez un neuf.",
      advice_en:
        "In waste disposal (be careful only the Nantes waste disposal center accepts the tires) / The stores that sell these products also take them back if you buy a new one.",
      image: "pneu.png",
      reponses: ["decheterie", "retour"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "pot_peinture",
      descr: "Pot de peinture",
      descr_en: "Tin of mural painting",
      resume: "( peinture murale, vide )",
      resume_en: "( wall painting, empty )",
      advice: "En déchèterie au niveau des produits toxiques.",
      advice_en: "Waste disposal at the level of toxic products.",
      image: "pot_peinture.png",
      reponses: ["decheterie"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "rasoir_jetable",
      descr: "Rasoir jetable",
      descr_en: "Disposable razor",
      advice: "Poubelle.",
      advice_en: "Bin.",
      image: "rasoir_jetable.png",
      reponses: ["poubelle"],
      exclude_filters: ["niveau_enfant", "niveau_expert"]
    },
    {
      name: "rouge_a_levre",
      descr: "Rouge à lèvre",
      descr_en: "Lipstick",
      advice: "Poubelle.",
      advice_en: "Bin.",
      image: "rouge_a_levre.png",
      reponses: ["poubelle"],
      exclude_filters: ["niveau_enfant", "niveau_expert"]
    },
    {
      name: "verre_a_boire",
      descr: "Verre à boire",
      descr_en: "Drinking glass",
      resume: "( cassé )",
      resume_en: "( broken )",
      advice:
        "Poubelle : seul le 'verre d'emballage' (bouteille, bocaux) peut être recyclé et mis dans une colonne dédiée.",
      advice_en:
        "Waste bin: only the 'packaging glass' (bottle, jars) can be recycled and put in a dedicated column.",
      image: "verre_a_boire.png",
      reponses: ["poubelle"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "yaourt_trinormal",
      descr: "Yaourt",
      descr_en: "Yogurt pot",
      advice:
        "Poubelle : dans les plastiques, seuls les bouteilles et flacons vont en recyclage.",
      advice_en:
        "Waste bin: in plastics, only bottles and bottles go into recycling.",
      image: "yaourt.png",
      reponses: ["poubelle"],
      exclude_filters: ["tri_extension"]
    },
    {
      name: "yaourt_extensiondetri",
      descr: "Yaourt",
      descr_en: "Yogurt pot",
      advice: "Recyclage : tous les emballages se trient en extension de tri.",
      advice_en: "Recycling : all the package are sorted in sorting extension.",
      image: "yaourt.png",
      reponses: ["jaune"],
      exclude_filters: ["tri_normal"]
    },
    {
      name: "telephone_portable",
      descr: "Téléphone portable",
      descr_en: "Mobile phone",
      advice:
        "En déchèterie dans la benne « appareils électriques et électroniques » . Les magasins de plus de 400 m² qui vendent des petits appareils électriques et électroniques de 25 cm maximum les reprennent également sans obligation d'achat.",
      advice_en:
        'Waste disposal in the dump "electrical and electronic appliances". Stores of more than 400 m² that sell small electrical and electronic devices up to 25 cm also take them back without any obligation to purchase.',
      image: "telephone.png",
      reponses: ["retour"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "barquette_jambon_trinormal",
      descr: "Barquette de jambon en plastique",
      descr_en: "Ham tray made of plastic",
      advice:
        "Poubelle : dans les plastiques, seuls les bouteilles et flacons vont en recyclage.",
      advice_en:
        "Waste bin: in plastics, only bottles and bottles go into recycling.",
      image: "emballage_polystyrene.png",
      reponses: ["poubelle"],
      exclude_filters: ["tri_extension"]
    },
    {
      name: "barquette_jambon_extensiondetri",
      descr: "Barquette de jambon en plastique",
      descr_en: "Ham tray made of plastic",
      advice: "Recyclage : tous les emballages se trient en extension de tri.",
      advice_en: "Recycling : all the package are sorted in sorting extension.",
      image: "emballage_polystyrene.png",
      reponses: ["jaune"],
      exclude_filters: ["tri_normal"]
    },
    {
      name: "miroir",
      descr: "Miroir",
      descr_en: "Miror",
      advice:
        "Poubelle : seul le 'verre d'emballage' (bouteille, bocaux) peut être recyclé et mis dans une colonne dédiée.",
      advice_en:
        "Waste bin: only the 'packaging glass' (bottle, jars) can be recycled and put in a dedicated column.",
      image: "miroir.png",
      reponses: ["bleu"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "pile",
      descr: "Piles",
      descr_en: "Batteries",
      advice:
        "A mettre dans les bornes dédiées que l’on trouve en déchèterie et dans certains magasins et grandes surfaces.",
      advice_en: "To put in the dedicated terminals that are found in refuse and in some stores and supermarkets.",
      image: "pile9v.png",
      reponses: ["retour", "decheterie"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "cartouche_encre_imprimante",
      descr: "Cartouche d’encre d’imprimante",
      descr_en: "Printer ink cartridge",
      advice:
        "A mettre dans les bornes dédiées que l’on trouve en déchèterie et dans certains magasins et grandes surfaces.",
      advice_en: "To put in the dedicated terminals that are found in refuse and in some stores and supermarkets.",
      image: "cartouches_imprimantes.png",
      reponses: ["retour", "decheterie"],
      exclude_filters: ["niveau_enfant"]
    },
    {
      name: "bouteille_eau_plastique",
      descr: "Bouteille d'eau en plastique",
      descr_en: "Plastic water bottle",
      advice:
        "Recyclage : les bouteilles et flacons plastiques vides se recyclent.",
      advice_en: "Recycling : empty plastic bottles and flasks are recycled",
      image: "bouteille_transparente.png",
      reponses: ["jaune"],
      exclude_filters: ["niveau_expert"]
    },
    {
      name: "emballage_compote_a_boire_normal",
      descr: "Emballage de compote à boire",
      descr_en: "Pack of compote to drink",
      advice: "Poubelle.",
      advice_en: "Bin.",
      image: "compote-boire.png",
      reponses: ["poubelle"],
      exclude_filters: ["tri_extension", "niveau_enfant"]
    },
    {
      name: "emballage_compote_a_boire_extensiondetri",
      descr: "Emballage de compote à boire",
      descr_en: "Pack of compote to drink",
      advice: "Recyclage : tous les emballages se trient en extension de tri.",
      advice_en: "Recycling: all packages are sorted in sorting extension.",
      image: "compote-boire.png",
      reponses: ["jaune"],
      exclude_filters: ["tri_normal", "niveau_enfant"]
    },
    {
      name: "jouet_plastique",
      descr: "Jouet en plastique",
      descr_en: "Plastic toy",
      resume: "( cassé )",
      resume_en: "( out of use )",
      advice: "Poubelle.",
      advice_en: "Bin.",
      image: "jouet_enfant.png",
      reponses: ["poubelle"],
      exclude_filters: ["niveau_expert"]
    }
  ],
  reponses: [
    {
      id: "composteur",
      descr: "Composteur",
      descr_en: "Composter",
      image: "composteur.png",
      exclude_filters: []
    },
    {
      id: "decheterie",
      descr: "Déchèterie",
      descr_en: "Recycling centre",
      image: "decheterie.png",
      exclude_filters: ["niveau_petits"]
    },
    {
      id: "jaune",
      descr: "Recyclage",
      descr_en: "Sorting",
      resume: "bac/sac jaune, conten.",
      resume_en: "yellow bag, conten.",
      image: "recyclage.png",
      exclude_filters: []
    },
    {
      id: "reemploi",
      descr: "Réemploi",
      descr_en: "Reuse",
      resume: "assos, conten. vêtement...",
      resume_en: "assos, clothes cont.",
      image: "reemploi.png",
      exclude_filters: ["niveau_petits"]
    },
    {
      id: "poubelle",
      descr: "Poubelle",
      descr_en: "Bin",
      image: "bac_sac_bleu.png",
      exclude_filters: []
    },
    {
      id: "retour",
      descr: "Retour magasin",
      descr_en: "Back to store",
      resume: "pharmacie, brico...",
      resume_en: "pharmacy, supermarket...",
      image: "retour.png",
      exclude_filters: ["niveau_petits"]
    }
  ],
  types_options: [
    {
      code: "tri",
      default: "tri_normal",
      options: [
        {
          code: "tri_normal",
          descr: "tri normal",
          descr_en: "normal sorting"
        },
        {
          code: "tri_extension",
          descr: "tri extension",
          descr_en: "extension sorting"
        }
      ],
      descr:
        "Si vous habitez la ville de Nantes et que vous avec un bac, choisissez 'tri extension' sinon 'tri normal'.",
      descr_en:
        "If you live in the city of Nantes and you have a tray, choose 'extension sorting' in the other case 'normal sorting'."
    },
    {
      code: "niveau",
      default: "niveau_enfant",
      options: [
        {
          code: "niveau_enfant",
          descr: "enfant",
          descr_en: "children"
        },
        {
          code: "niveau_normal",
          descr: "niveau normal",
          descr_en: "normal"
        },
        {
          code: "niveau_expert",
          descr: "niveau expert",
          descr_en: "expert"
        }
      ],
      descr: "Choisissez le niveau de difficulté.",
      descr_en: "Choose the level."
    }
  ]
};
