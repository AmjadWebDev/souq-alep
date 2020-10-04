const SHOP_DATA = [
  {
    id: 1,
    title: "Canned foods",
    routeName: "canned",
    items: [
      {
        id: 1,
        name: "Green Bamieh Durra 850g",
        imageUrl: "/imgs/foods/canned/bamieh-okra-durra-850g.jpg",
        price: 7,
      },
      {
        id: 2,
        name: "Foul Lebanaise Durra",
        imageUrl: "/imgs/foods/canned/Durra-Foul-Lebanese-400g.jpg",
        price: 1,
      },
      {
        id: 3,
        name: "Foul Shamiya Durra",
        imageUrl: "/imgs/foods/canned/durra-foul-shamiya-400g.png",
        price: 1,
      },
      {
        id: 4,
        name: "Hommus Durra",
        imageUrl: "/imgs/foods/canned/Durra-Hommus-Tahina-380g.jpg",
        price: 2,
      },
      {
        id: 5,
        name: "Foul Medammes Durra",
        imageUrl: "/imgs/foods/canned/foul-medammes-durra.jpg",
        price: 0.8,
      },
      {
        id: 6,
        name: "Grape Leaves Durra",
        imageUrl: "/imgs/foods/canned/grape-leaves.jpg",
        price: 6,
      },
      {
        id: 7,
        name: "Corn Beef Hana",
        imageUrl: "/imgs/foods/canned/hana-cornbeef.jpg",
        price: 4.5,
      },
      {
        id: 8,
        name: "Mortadella Hana Chicken 200g",
        imageUrl: "/imgs/foods/canned/hana-mort-chicken-200g.jpg",
        price: 2.5,
      },
      {
        id: 9,
        name: "Hommus Alkasih 4X135g",
        imageUrl: "/imgs/foods/canned/kasih-hummus-4-x-135-g.jpg",
        price: 6,
      },
      {
        id: 10,
        name: "Tahini Durra",
        imageUrl: "/imgs/foods/canned/tahini-durra.jpg",
        price: 7,
      },
    ],
  },
  {
    id: 2,
    title: "Beverages & Liquids",
    routeName: "beverages",
    items: [
      {
        id: 1,
        name: "English Tea Ahmad",
        imageUrl: "/imgs/foods/beverages/ahmad-tea-english.jpg",
        price: 6.5,
      },
      {
        id: 2,
        name: "Green Tea Ahmad",
        imageUrl: "/imgs/foods/beverages/ahmad-tea-green.jpeg",
        price: 6,
      },
      {
        id: 3,
        name: "Haseeb Coffe Black",
        imageUrl: "/imgs/foods/beverages/hasib-coffe-black.jpeg",
        price: 7.5,
      },
      {
        id: 4,
        name: "Haseeb Coffe Extra",
        imageUrl: "/imgs/foods/beverages/hasib-coffe-extra.jpg",
        price: 8,
      },
      {
        id: 5,
        name: "Haseeb Coffe Gold",
        imageUrl: "/imgs/foods/beverages/hasib-coffe-gold.jpg",
        price: 8,
      },
      {
        id: 6,
        name: "Kharta Mate",
        imageUrl: "/imgs/foods/beverages/kharta.jpg",
        price: 5,
      },
      {
        id: 7,
        name: "Lipton Tea 25 bag",
        imageUrl: "/imgs/foods/beverages/lipton-25bag.jpg",
        price: 1.5,
      },
      {
        id: 8,
        name: "Lipton Tea 100 bag",
        imageUrl: "/imgs/foods/beverages/lipton-100bag.jpg",
        price: 3.5,
      },
      {
        id: 9,
        name: "Milk Powder Nido 2.5 KG",
        imageUrl: "/imgs/foods/beverages/Nido-Milk-Powder-2.5-kg.jpg",
        price: 14,
      },
      {
        id: 10,
        name: "Milk Powder Nido 400G",
        imageUrl: "/imgs/foods/beverages/powdered-milk-nido-400g.jpg",
        price: 4.5,
      },
    ],
  },
  {
    id: 3,
    title: "Dairy & Cheese",
    routeName: "dairy",
    items: [
      {
        id: 1,
        name: "Akkawi Cheese Alraii",
        imageUrl: "/imgs/foods/dairy/akkawi-cheese-alraii.jpg",
        price: 12,
      },
      {
        id: 2,
        name: "Baladia Labaneh Balls",
        imageUrl: "/imgs/foods/dairy/Baladia_labaneh_balls_with_mint_500g.png",
        price: 7,
      },
      {
        id: 3,
        name: "Gazi White Cheese 55% ",
        imageUrl: "/imgs/foods/dairy/GAZi_Weichkaese_55_800g.png",
        price: 10,
      },
      {
        id: 4,
        name: "Gazi White Cheese 60%",
        imageUrl: "/imgs/foods/dairy/GAZi_Weichkaese_60_800g.png",
        price: 12,
      },
      {
        id: 5,
        name: "Gazi White Cheese 65%",
        imageUrl: "/imgs/foods/dairy/GAZi_Weichkaese_65_800g.png",
        price: 13,
      },
      {
        id: 6,
        name: "Gazi Yellow Cheese 400g",
        imageUrl: "/imgs/foods/dairy/gazi-qashqawan-400g.jpg",
        price: 7.5,
      },
      {
        id: 7,
        name: "Nabulsi Cheese Baladi",
        imageUrl: "/imgs/foods/dairy/nabulsi-chesse.jpg",
        price: 11,
      },
      {
        id: 8,
        name: "Nabulsi Cheese Alraii",
        imageUrl: "/imgs/foods/dairy/nabulsi-chesse-alraii.jpg",
        price: 12,
      },
      {
        id: 9,
        name: "Puck cream Cheese 240g",
        imageUrl: "/imgs/foods/dairy/Puck-cream-cheese-240g.jpg",
        price: 2.5,
      },
      {
        id: 10,
        name: "Puck cream Cheese 910g",
        imageUrl: "/imgs/foods/dairy/Puck-cream-cheese-910g.jpg",
        price: 6,
      },
    ],
  },
  {
    id: 4,
    title: "Dessert & Chips",
    routeName: "dessert",
    items: [
      {
        id: 1,
        name: "Durra Bread Sticks",
        imageUrl: "/imgs/foods/dessert/Durra-Bread-Sticks-454g.png",
        price: 5,
      },
      {
        id: 2,
        name: "Durra Halawa 350g",
        imageUrl: "/imgs/foods/dessert/durra-halawa-350g.jpg",
        price: 3.5,
      },
      {
        id: 3,
        name: "Durra Halawa 700g",
        imageUrl: "/imgs/foods/dessert/durra-halawa-700g.jpg",
        price: 6,
      },
      {
        id: 4,
        name: "Muhtar Ballurieh 900g ",
        imageUrl: "/imgs/foods/dessert/muhtar-ballureh.jpg",
        price: 22,
      },
      {
        id: 5,
        name: "Muhtar Barazek",
        imageUrl: "/imgs/foods/dessert/muhtar-barazek.jpg",
        price: 12,
      },
      {
        id: 6,
        name: "Muhtar Maamoul Date",
        imageUrl: "/imgs/foods/dessert/muhtar-maamoul.jpg",
        price: 13,
      },
      {
        id: 7,
        name: "Muhtar Maamoul Nuts",
        imageUrl: "/imgs/foods/dessert/muhtar-maamoul-jouz.jpg",
        price: 18,
      },
      {
        id: 8,
        name: "Muhtar Mix Arabic 500g",
        imageUrl: "/imgs/foods/dessert/muhtar-mix-500g.jpg",
        price: 20,
      },
      {
        id: 9,
        name: "Muhtar Mix Arabic 750g",
        imageUrl: "/imgs/foods/dessert/muhtar-mix-750g.jpg",
        price: 27,
      },
      {
        id: 10,
        name: "Muhtar Nawashef",
        imageUrl: "/imgs/foods/dessert/muhtar-nawashef.jpg",
        price: 14,
      },
    ],
  },
  {
    id: 5,
    title: "Rice & Grain",
    routeName: "mens",
    items: [
      {
        id: 1,
        name: "Alshaalan Basmati Rice 2KG",
        imageUrl: "/imgs/foods/grain/alshalan-basmati-2kg.jpg",
        price: 5,
      },
      {
        id: 2,
        name: "Alshaalan Basmati Rice 10KG",
        imageUrl: "/imgs/foods/grain/alshalan-basmati-10kg.jpg",
        price: 18,
      },
      {
        id: 3,
        name: "Bulgur Hard Baladna",
        imageUrl: "/imgs/foods/grain/bulgur-hard-baladna.jpeg",
        price: 3.5,
      },
      {
        id: 4,
        name: "Bulgur Soft",
        imageUrl: "/imgs/foods/grain/bulgur-soft.jpeg",
        price: 3,
      },
      {
        id: 5,
        name: "Falafel Baladna",
        imageUrl: "/imgs/foods/grain/falafel-mix-baladna.jpeg",
        price: 4.5,
      },
      {
        id: 6,
        name: "Freekeh Baladna",
        imageUrl: "/imgs/foods/grain/freekeh-baladna.jpg",
        price: 5,
      },
      {
        id: 7,
        name: "Sun White Rice 2KG",
        imageUrl: "/imgs/foods/grain/Sun_White_Calrose_Rice_2kg.jpg",
        price: 4,
      },
      {
        id: 8,
        name: "Red Beans Suntat",
        imageUrl: "/imgs/foods/grain/suntat-red-beans.jpg",
        price: 2.5,
      },
      {
        id: 9,
        name: "White Beans Altunsa",
        imageUrl: "/imgs/foods/grain/White_beans_Altunsa_900Gr.jpg",
        price: 3,
      },
      {
        id: 10,
        name: "White Beans Baladna",
        imageUrl: "/imgs/foods/grain/white-bean-baladna.jpeg",
        price: 3.5,
      },
    ],
  },

  {
    id: 6,
    title: "Oils & Ghee",
    routeName: "mens",
    items: [
      {
        id: 1,
        name: "Aseel Ghee 1KG",
        imageUrl: "/imgs/foods/oils/aseel-grain-1kg.jpg",
        price: 9,
      },
      {
        id: 2,
        name: "Olive Oil Baladna 1L",
        imageUrl: "/imgs/foods/oils/baladna-olive-oil.jpeg",
        price: 5,
      },
      {
        id: 3,
        name: "Sun Oil Baladna 2L",
        imageUrl: "/imgs/foods/oils/baladna-sun-oil.jpeg",
        price: 4.5,
      },
      {
        id: 4,
        name: "Olive Oil Durra 2L",
        imageUrl: "/imgs/foods/oils/durra-olive-oil.jpg",
        price: 10,
      },
      {
        id: 5,
        name: "Sun Oil Durra 3L",
        imageUrl: "/imgs/foods/oils/durra-sun-oil.jpg",
        price: 7,
      },
      {
        id: 6,
        name: "Golden Medal Ghee 400G",
        imageUrl: "/imgs/foods/oils/golden-medal-grain-400g.jpg",
        price: 5.5,
      },
      {
        id: 7,
        name: "Golden Medal Ghee 800G",
        imageUrl: "/imgs/foods/oils/golden-medal-grain-800g.jpg",
        price: 10,
      },
      {
        id: 8,
        name: "Khanum Ghee 500G",
        imageUrl: "/imgs/foods/oils/khanum-grain-500g.jpg",
        price: 5,
      },
      {
        id: 9,
        name: "Mazola Corn Oil 2L",
        imageUrl: "/imgs/foods/oils/mazola-corn-oil.jpg",
        price: 6,
      },
      {
        id: 10,
        name: "Zarzour Olive Oil 750ML",
        imageUrl: "/imgs/foods/oils/olive-oil-zarzour.jpeg",
        price: 3.5,
      },
    ],
  },
  {
    id: 7,
    title: "Bread & Pastries",
    routeName: "pastries",
    items: [
      {
        id: 1,
        name: "Angel Hair Durra",
        imageUrl: "/imgs/foods/pastries/durra-angel-hair.jpg",
        price: 2.5,
      },
      {
        id: 2,
        name: "Italian Macaroni Durra",
        imageUrl: "/imgs/foods/pastries/durra-italian-macaroni.jpg",
        price: 3,
      },
      {
        id: 3,
        name: "Lasagne Durra",
        imageUrl: "/imgs/foods/pastries/durra-lasagne.png",
        price: 3.5,
      },
      {
        id: 4,
        name: "Farine BIO T55",
        imageUrl: "/imgs/foods/pastries/farine-Organic-T55-Flour.jpg",
        price: 1.5,
      },
      {
        id: 5,
        name: "Indomie Chicken",
        imageUrl: "/imgs/foods/pastries/indomie-chicken.jpg",
        price: 1,
      },
      {
        id: 6,
        name: "Indomie Special",
        imageUrl: "/imgs/foods/pastries/indomie-special.jpg",
        price: 1,
      },
      {
        id: 7,
        name: "Indomie Vegetabl",
        imageUrl: "/imgs/foods/pastries/indomie-veg.jpg",
        price: 1,
      },
      {
        id: 8,
        name: "Spaggiti Durra",
        imageUrl: "/imgs/foods/pastries/Macaroni_Spaggiti_Durra_500Gr.jpg",
        price: 1.5,
      },
      {
        id: 9,
        name: "Syrian Bread 750G",
        imageUrl: "/imgs/foods/pastries/syr-bread.png",
        price: 0.5,
      },
      {
        id: 10,
        name: "Wheat Flour 1KG",
        imageUrl: "/imgs/foods/pastries/wheat-flour.jpeg",
        price: 1,
      },
    ],
  },
  {
    id: 8,
    title: "Spices & Nuts",
    routeName: "spices",
    items: [
      {
        id: 1,
        name: "Baladna Coconut",
        imageUrl: "/imgs/foods/spices/baladna-jouzhind.jpeg",
        price: 2,
      },
      {
        id: 2,
        name: "Baladna Kebeh spices",
        imageUrl: "/imgs/foods/spices/baladna-kebeh-spices.jpg",
        price: 2.5,
      },
      {
        id: 3,
        name: "Baladna Red Zaatar",
        imageUrl: "/imgs/foods/spices/baladna-red-zatar.jpg",
        price: 4.5,
      },
      {
        id: 4,
        name: "Baladna Curry spices",
        imageUrl: "/imgs/foods/spices/curry-baladna.jpg",
        price: 2,
      },
      {
        id: 5,
        name: "Durra chicken spices",
        imageUrl: "/imgs/foods/spices/durra-chicken-spices.jpg",
        price: 1.5,
      },
      {
        id: 6,
        name: "Durra Green Zaatar",
        imageUrl: "/imgs/foods/spices/durra-green-zatar.jpg",
        price: 5,
      },
      {
        id: 7,
        name: "Durra Seven spices",
        imageUrl: "/imgs/foods/spices/durra-seven.jpg",
        price: 2.5,
      },
      {
        id: 8,
        name: "Hellmann's Ketchup",
        imageUrl: "/imgs/foods/spices/hellmanns-ketchup.jpg",
        price: 3.5,
      },
      {
        id: 9,
        name: "Durra Mandi spices",
        imageUrl: "/imgs/foods/spices/Mandy_spices_Durra_25Gr.jpg",
        price: 2,
      },
      {
        id: 10,
        name: "Mazola Mayo",
        imageUrl: "/imgs/foods/spices/mayo-mazola.jpeg",
        price: 3.5,
      },
    ],
  },
  {
    id: 9,
    title: "NonFood",
    routeName: "nonfood",
    items: [
      {
        id: 1,
        name: "Coffe Pot",
        imageUrl: "/imgs/foods/nonfood/coffe-pot.jpg",
        price: 5,
      },
      {
        id: 2,
        name: "Dettol 1L",
        imageUrl: "/imgs/foods/nonfood/dettol-1000ml.jpg",
        price: 6,
      },
      {
        id: 3,
        name: "Elegance Hair GEl Blue",
        imageUrl: "/imgs/foods/nonfood/elegance-hairgel-blue.jpg",
        price: 7,
      },
      {
        id: 4,
        name: "Elegance Hair GEl Green",
        imageUrl: "/imgs/foods/nonfood/elegance-hairgel-green.jpg",
        price: 7,
      },
      {
        id: 5,
        name: "Al Emlaq Limon",
        imageUrl: "/imgs/foods/nonfood/emlaq-limon.jpg",
        price: 4.5,
      },
      {
        id: 6,
        name: "Al Emlaq Rose",
        imageUrl: "/imgs/foods/nonfood/emlaq-rose.jpg",
        price: 4.5,
      },
      {
        id: 7,
        name: "MIM Hair Removal",
        imageUrl: "/imgs/foods/nonfood/mim-hair-removal.jpg",
        price: 2,
      },
      {
        id: 8,
        name: "Sabeq",
        imageUrl: "/imgs/foods/nonfood/sabeq.jpeg",
        price: 5,
      },
      {
        id: 9,
        name: "Straw Mate",
        imageUrl: "/imgs/foods/nonfood/straw-mate.jpg",
        price: 3,
      },
      {
        id: 10,
        name: "Tea Jug",
        imageUrl: "/imgs/foods/nonfood/tea-jug.jpg",
        price: 8,
      },
    ],
  },
];

export default SHOP_DATA;
