import { MenuItem } from '../types';

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  {
    "id": "sig-dim-1",
    "name": "Spicy Cheesy Dim Sum",
    "mainCategory": "SIGNATURE",
    "category": "Dim Sums",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 345,
    "description": "Delicate steamed dumplings stuffed with molten cheese and fiery Asian chili herbs, served with homemade scallion dip.",
    "imagePath": "/assets/dim-sums/spicy-cheesy-dimsum.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 2
  },
  {
    "id": "sig-dim-2",
    "name": "Spinach & Cheese Dim Sum",
    "mainCategory": "SIGNATURE",
    "category": "Dim Sums",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 345,
    "description": "Silky translucent wrappers filled with blanched baby spinach, cream cheese, roasted garlic and aromatic toasted sesame.",
    "imagePath": "/assets/dim-sums/spinach-and-cream-cheese-dim-sum.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 0
  },
  {
    "id": "sig-dim-3",
    "name": "Chicken Spicy Cheesy Dim Sum",
    "mainCategory": "SIGNATURE",
    "category": "Dim Sums",
    "broadCategory": "SIGNATURE",
    "isVeg": false,
    "price": 385,
    "description": "Juicy minced chicken infused with bird’s eye chili, molten sharp cheddar, and scallions in handcrafted dough.",
    "imagePath": "/assets/dim-sums/spicy-cheesy-chicken-dim-sum.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 2
  },
  {
    "id": "sig-bao-1",
    "name": "Cantonese Mushroom Bao",
    "mainCategory": "SIGNATURE",
    "category": "Baos",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 360,
    "description": "Pillowy soft steamed bao bun packed with glazed wok-tossed shiitake and button mushrooms in savory Cantonese oyster-soy reduction.",
    "imagePath": "/assets/bao/cantonese-mushroom-bao.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 1
  },
  {
    "id": "sig-bao-2",
    "name": "Chilli Chicken Bao",
    "mainCategory": "SIGNATURE",
    "category": "Baos",
    "broadCategory": "SIGNATURE",
    "isVeg": false,
    "price": 395,
    "description": "Crispy fried chicken tossed in sweet Korean gochujang chili glaze, pickled radish, and spicy sesame mayo inside a fluffy bao.",
    "imagePath": "/assets/bao/korean-chicken-bao.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 2
  },
  {
    "id": "sig-ndl-1",
    "name": "Butter and Burnt Garlic Noodles",
    "mainCategory": "SIGNATURE",
    "category": "Noodles",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 295,
    "description": "Wok-tossed silky egg-free noodles infused with rich churned butter, slow-roasted golden burnt garlic flakes and scallions.",
    "imagePath": "/assets/noodles/butter-and-burnt-garlic-noodles.avif",
    "variants": [
      {
        "id": "v-bbg-veg",
        "name": "Vegetarian",
        "price": 295
      },
      {
        "id": "v-bbg-chk",
        "name": "Farm Chicken",
        "price": 345
      },
      {
        "id": "v-bbg-prw",
        "name": "Butter Garlic Prawns",
        "price": 395
      }
    ],
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 1
  },
  {
    "id": "sig-sus-1",
    "name": "Crispy Mushroom Sushi",
    "mainCategory": "SIGNATURE",
    "category": "Sushi",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 395,
    "description": "Crisp golden tempura wild mushrooms, seasoned Japanese sushi rice, creamy avocado drizzle, and spicy sriracha glaze.",
    "imagePath": "/assets/sushi/yassai-tempura-sushi.avif",
    "variants": [
      {
        "id": "v-sus-msh-4",
        "name": "4 Pieces",
        "price": 395
      },
      {
        "id": "v-sus-msh-8",
        "name": "8 Pieces",
        "price": 620
      }
    ],
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 1
  },
  {
    "id": "sig-sus-2",
    "name": "Avocado Cream Cheese Sushi",
    "mainCategory": "SIGNATURE",
    "category": "Sushi",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 420,
    "description": "Buttery Haas avocado slices and rich Philadelphia cream cheese rolled with toasted nori and sesame seeds.",
    "imagePath": "/assets/sushi/avocado-and-cream-cheese-sushi.avif",
    "variants": [
      {
        "id": "v-sus-avo-4",
        "name": "4 Pieces",
        "price": 420
      },
      {
        "id": "v-sus-avo-8",
        "name": "8 Pieces",
        "price": 680
      }
    ],
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 0
  },
  {
    "id": "sig-sus-3",
    "name": "Peri-Peri Chicken Sushi",
    "mainCategory": "SIGNATURE",
    "category": "Sushi",
    "broadCategory": "SIGNATURE",
    "isVeg": false,
    "price": 445,
    "description": "Flame-seared tender chicken marinated in African bird’s eye chili peri-peri glaze, rolled with crunchy cucumbers and spicy aioli.",
    "imagePath": "/assets/sushi/peri-peri-chicken-sushi.avif",
    "variants": [
      {
        "id": "v-sus-ppc-4",
        "name": "4 Pieces",
        "price": 445
      },
      {
        "id": "v-sus-ppc-8",
        "name": "8 Pieces",
        "price": 720
      }
    ],
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 2
  },
  {
    "id": "sig-bow-1",
    "name": "Krapow Jasmine Rice Bowl",
    "mainCategory": "SIGNATURE",
    "category": "Rice Bowls",
    "broadCategory": "SIGNATURE",
    "isVeg": false,
    "price": 385,
    "description": "Fragrant steamed Jasmine rice served with traditional wok-tossed minced chicken or cottage cheese, fresh Thai holy basil and garlic chili.",
    "imagePath": "/assets/rice-bowls/krapow-jasmine-rice-bowl.avif",
    "variants": [
      {
        "id": "v-krp-veg",
        "name": "Paneer / Tofu",
        "price": 345
      },
      {
        "id": "v-krp-chk",
        "name": "Minced Chicken",
        "price": 385
      }
    ],
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 2
  },
  {
    "id": "sig-cur-1",
    "name": "Thai Green Curry with Jasmine Rice",
    "mainCategory": "SIGNATURE",
    "category": "Curries & Bowls",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 360,
    "description": "Aromatic coconut cream simmered with lemongrass, galangal, kaffir lime leaves, sweet basil and assorted Asian greens.",
    "imagePath": "/assets/rice-bowls/thai-basil-paneer-fried-rice.avif",
    "variants": [
      {
        "id": "v-tgc-veg",
        "name": "Exotic Vegetables & Paneer",
        "price": 360
      },
      {
        "id": "v-tgc-chk",
        "name": "Tender Chicken",
        "price": 410
      },
      {
        "id": "v-tgc-prw",
        "name": "Tiger Prawns",
        "price": 470
      }
    ],
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 2
  },
  {
    "id": "sig-brg-1",
    "name": "Smash Veggie Cheese Sourdough Burger",
    "mainCategory": "SIGNATURE",
    "category": "Burgers",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 350,
    "description": "Handcrafted potato, mushroom and mozzarella patty, smashed and grilled until golden, served in a freshly baked wood-fired sourdough bun.",
    "imagePath": "/assets/sourdough-burgers/smash-veggie-cheese-sourdough-burger.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 1
  },
  {
    "id": "sig-brg-2",
    "name": "Smash Chicken Cheese Sourdough Burger",
    "mainCategory": "SIGNATURE",
    "category": "Burgers",
    "broadCategory": "SIGNATURE",
    "isVeg": false,
    "price": 380,
    "description": "Fresh minced chicken patty smashed on a scorching skillet, topped with melted cheddar, gherkins and smoky house sauce on sourdough.",
    "imagePath": "/assets/sourdough-burgers/smash-chicken-cheese-sourdough-burger.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 1
  },
  {
    "id": "sig-sdw-1",
    "name": "Caprese Napoli Sandwich",
    "mainCategory": "SIGNATURE",
    "category": "Sandwiches",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 365,
    "description": "Fresh bocconcini mozzarella, juicy San Marzano tomatoes, wild rocket and fragrant basil pesto nestled in wood-fired pizza dough bread.",
    "imagePath": "/assets/napoli-sandwiches/caprese-sandwich.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 0
  },
  {
    "id": "sig-gb-1",
    "name": "Mushroom and Cheese Garlic Bread",
    "mainCategory": "SIGNATURE",
    "category": "Garlic Breads",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 320,
    "description": "Artisanal baguette slathered in roasted garlic butter, topped with sautéed herb mushrooms and bubbling molten mozzarella.",
    "imagePath": "/assets/garlic-bread/mushroom-and-cheese.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 0
  },
  {
    "id": "sig-hd-1",
    "name": "Pesto Chicken Hot Dog",
    "mainCategory": "SIGNATURE",
    "category": "Hot Dogs",
    "broadCategory": "SIGNATURE",
    "isVeg": false,
    "price": 340,
    "description": "Smoked chicken frankfurter in a toasted brioche bun topped with creamy basil pesto, sun-dried tomatoes and parmesan.",
    "imagePath": "/assets/hot-dogs/pesto-chicken-hot-dog.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 1
  },
  {
    "id": "sig-hd-2",
    "name": "Chicken Cheese Hot Dog",
    "mainCategory": "SIGNATURE",
    "category": "Hot Dogs",
    "broadCategory": "SIGNATURE",
    "isVeg": false,
    "price": 320,
    "description": "Juicy chicken sausage draped in rich liquid cheese sauce, caramelized onions and mild Dijon mustard.",
    "imagePath": "/assets/hot-dogs/chicken-cheese-hot-dog.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 0
  },
  {
    "id": "sig-hd-3",
    "name": "Makhni Chicken Hot Dog",
    "mainCategory": "SIGNATURE",
    "category": "Hot Dogs",
    "broadCategory": "SIGNATURE",
    "isVeg": false,
    "price": 330,
    "description": "A fusion masterpiece: tender grilled sausage topped with buttery makhni gravy, coriander and pickled red onions.",
    "imagePath": "/assets/hot-dogs/makhni-chicken-hot-dog.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 1
  },
  {
    "id": "sig-hd-4",
    "name": "Peri Peri Chicken Hot Dog",
    "mainCategory": "SIGNATURE",
    "category": "Hot Dogs",
    "broadCategory": "SIGNATURE",
    "isVeg": false,
    "price": 330,
    "description": "Spicy peri-peri seasoned chicken dog loaded with jalapeño relish and fiery chili drizzle.",
    "imagePath": "/assets/hot-dogs/peri-peri-chicken-hot-dog.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 2
  },
  {
    "id": "sig-piz-1",
    "name": "Panfire Loaded Vegetables Pizza",
    "mainCategory": "SIGNATURE",
    "category": "Pizzas",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 485,
    "description": "San Marzano tomato base, fresh fior di latte mozzarella, bell peppers, sweet corn, black olives, onions and mushrooms baked at 450°C.",
    "imagePath": "/assets/pizza/panfire-loaded-vegetables.avif",
    "variants": [
      {
        "id": "v-pzv-10",
        "name": "10 inch Regular",
        "price": 485
      },
      {
        "id": "v-pzv-12",
        "name": "12 inch Large",
        "price": 685
      }
    ],
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 0
  },
  {
    "id": "sig-piz-2",
    "name": "Magic Mushroom Pizza",
    "mainCategory": "SIGNATURE",
    "category": "Pizzas",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 495,
    "description": "Rich white garlic cream sauce base topped with shiitake, button, and porcini mushrooms, finished with fresh thyme and truffle essence.",
    "imagePath": "/assets/pizza/magic-mushroom.avif",
    "variants": [
      {
        "id": "v-pzm-10",
        "name": "10 inch Regular",
        "price": 495
      },
      {
        "id": "v-pzm-12",
        "name": "12 inch Large",
        "price": 695
      }
    ],
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 0
  },
  {
    "id": "sig-piz-3",
    "name": "3 Cheese Asparagus Pesto Pizza",
    "mainCategory": "SIGNATURE",
    "category": "Pizzas",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 540,
    "description": "House-ground pine nut basil pesto, mozzarella, creamy ricotta, sharp parmesan and grilled crisp baby asparagus spears.",
    "imagePath": "/assets/pizza/3-cheese-asparagus-pesto.avif",
    "variants": [
      {
        "id": "v-pza-10",
        "name": "10 inch Regular",
        "price": 540
      },
      {
        "id": "v-pza-12",
        "name": "12 inch Large",
        "price": 740
      }
    ],
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 0
  },
  {
    "id": "sig-piz-4",
    "name": "Panfire Overload Chicken Pizza",
    "mainCategory": "SIGNATURE",
    "category": "Pizzas",
    "broadCategory": "SIGNATURE",
    "isVeg": false,
    "price": 585,
    "description": "An ultimate poultry feast: smoked pulled chicken, grilled herb chicken, chicken pepperoni, spicy bird’s eye chili and mozzarella.",
    "imagePath": "/assets/pizza/panfire-overload-chicken.avif",
    "variants": [
      {
        "id": "v-pzo-10",
        "name": "10 inch Regular",
        "price": 585
      },
      {
        "id": "v-pzo-12",
        "name": "12 inch Large",
        "price": 795
      }
    ],
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 2
  },
  {
    "id": "sig-bb-1",
    "name": "Crispy Spicy Paneer Burrito Bowl",
    "mainCategory": "SIGNATURE",
    "category": "Burrito Bowls",
    "broadCategory": "SIGNATURE",
    "isVeg": true,
    "price": 360,
    "description": "Mexican cilantro lime rice, black beans, charred corn salsa, sour cream, spicy crispy paneer cubes and avocado guacamole.",
    "imagePath": "/assets/burrito-bowls/crispy-spicy-paneer-burrito-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 2
  },
  {
    "id": "sig-bb-2",
    "name": "Spicy Grilled Chicken Burrito Bowl",
    "mainCategory": "SIGNATURE",
    "category": "Burrito Bowls",
    "broadCategory": "SIGNATURE",
    "isVeg": false,
    "price": 395,
    "description": "Achiote-marinated spicy grilled chicken served over zesty lime rice, pinto beans, pico de gallo, shredded cheese and chipotle mayo.",
    "imagePath": "/assets/burrito-bowls/grilled-chicken-burrito-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 2
  },
  {
    "id": "mex-brg-1",
    "name": "Classic Potato Cheese Burger",
    "mainCategory": "MEXICAN",
    "category": "Burgers",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 290,
    "description": "Golden fried potato patty layered with cheddar cheese, crunchy gherkins, fresh lettuce and chipotle cocktail sauce.",
    "imagePath": "/assets/burgers/classic-potato-cheese-burger.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-brg-2",
    "name": "Peri Peri Potato Cheese Burger",
    "mainCategory": "MEXICAN",
    "category": "Burgers",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 310,
    "description": "Spicy dusted potato patty with melted pepper jack cheese, jalapeños and habanero mayo.",
    "imagePath": "/assets/burgers/peri-peri-potato-cheese-burger.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "mex-brg-3",
    "name": "Crispy Spicy Chicken Burger",
    "mainCategory": "MEXICAN",
    "category": "Burgers",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 375,
    "description": "Buttermilk fried chicken breast drenched in Mexican hot honey sauce, slaw, and melted cheddar.",
    "imagePath": "/assets/burgers/crispy-spicy-chicken-burgher.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "mex-bb-1",
    "name": "Spicy Grilled Paneer Burrito Bowl",
    "mainCategory": "MEXICAN",
    "category": "Burrito Bowls",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 360,
    "description": "Smoky grilled cottage cheese cubes served over fiesta rice, pinto beans, salsa verde, and tortilla strips.",
    "imagePath": "/assets/burrito-bowls/spicy-grilled-paneer-burrito-bowl.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "mex-bb-2",
    "name": "Crispy Spicy Chicken Burrito Bowl",
    "mainCategory": "MEXICAN",
    "category": "Burrito Bowls",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 395,
    "description": "Crunchy golden chicken bites with Mexican rice, sweet corn, black beans, Monterey Jack cheese and guacamole.",
    "imagePath": "/assets/burrito-bowls/crispy-spicy-chicken-burrito-bowl.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "mex-bb-3",
    "name": "Crispy Spicy Mushroom Burrito Bowl",
    "mainCategory": "MEXICAN",
    "category": "Burrito Bowls",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 350,
    "description": "Golden crusted button and portobello mushrooms over warm cilantro rice with fresh jalapeño cream.",
    "imagePath": "/assets/burrito-bowls/crispy-spi9cy-mushroom-burrito-bowl.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-wrp-1",
    "name": "Crispy Mushroom Burrito Wrap",
    "mainCategory": "MEXICAN",
    "category": "Burrito Wraps",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 320,
    "description": "Crispy mushrooms, Mexican bean spread, seasoned rice, cheddar and salsa wrapped in a warm flour tortilla.",
    "imagePath": "/assets/burrito-wraps/crispy-mushroom-burrito-wrap.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-wrp-2",
    "name": "Crispy Spicy Paneer Burrito Wrap",
    "mainCategory": "MEXICAN",
    "category": "Burrito Wraps",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 330,
    "description": "Spicy battered cottage cheese cubes, Mexican rice, sour cream and salsa roja in a grilled tortilla.",
    "imagePath": "/assets/burrito-wraps/crispy-spicy-paneer-burrito-wrap.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "mex-wrp-3",
    "name": "Grilled Chicken Burrito Wrap",
    "mainCategory": "MEXICAN",
    "category": "Burrito Wraps",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 360,
    "description": "Smoky grilled chicken, lime rice, black beans, Monterey Jack cheese and chipotle mayo wrapped tight.",
    "imagePath": "/assets/burrito-wraps/grilled-chicken-burrito-wrap.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-wrp-4",
    "name": "Crispy Spicy Chicken Burrito Wrap",
    "mainCategory": "MEXICAN",
    "category": "Burrito Wraps",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 360,
    "description": "Crispy chicken tenders rolled with charred corn salsa, avocado puree and Mexican spiced rice.",
    "imagePath": "/assets/burrito-wraps/crispy-spicy-chicken-burrito-wrap.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "mex-wrp-5",
    "name": "Egg and Bacon Burrito Wrap",
    "mainCategory": "MEXICAN",
    "category": "Burrito Wraps",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 360,
    "description": "Fluffy scrambled eggs, crispy bacon bits, melted cheddar cheese and spiced tomato relish in a soft wrap.",
    "imagePath": "/assets/burrito-wraps/egg-and-bacon-burrito-wrap.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-tac-1",
    "name": "Crispy Spicy Paneer Taco (2 Pcs)",
    "mainCategory": "MEXICAN",
    "category": "Tacos",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 310,
    "description": "Twin soft corn tacos filled with crispy spicy cottage cheese, purple slaw, avocado crema and fresh cilantro.",
    "imagePath": "/assets/tacos/crispy-spicy-paneer-taco.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "mex-tac-2",
    "name": "Corn and Cheese Taco (2 Pcs)",
    "mainCategory": "MEXICAN",
    "category": "Tacos",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 295,
    "description": "Charred sweetcorn kernels, molten cheese sauce, jalapeños and crispy onion toppings in toasted taco shells.",
    "imagePath": "/assets/tacos/corn-and-cheese-taco.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-tac-3",
    "name": "Grilled Paneer Taco (2 Pcs)",
    "mainCategory": "MEXICAN",
    "category": "Tacos",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 310,
    "description": "Spiced grilled paneer, pico de gallo salsa, shredded romaine and sour cream drizzle in warm tortillas.",
    "imagePath": "/assets/tacos/grilled-paneer-taco.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-tac-4",
    "name": "Grilled Chicken Taco (2 Pcs)",
    "mainCategory": "MEXICAN",
    "category": "Tacos",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 340,
    "description": "Flame-kissed chicken thigh strips, avocado slices, pickled red onions and creamy salsa verde.",
    "imagePath": "/assets/tacos/grilled-chciken-taco.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-tac-5",
    "name": "Crispy Chicken Tacos (2 Pcs)",
    "mainCategory": "MEXICAN",
    "category": "Tacos",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 340,
    "description": "Crunchy golden fried chicken with spicy habanero salsa, shredded cabbage and crumbled cotija cheese.",
    "imagePath": "/assets/tacos/crispy-chicken-tacos.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "mex-nch-1",
    "name": "Baked Veg Nachos Overload",
    "mainCategory": "MEXICAN",
    "category": "Nachos & Sides",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 280,
    "description": "Crispy artisanal corn tortilla chips baked with cheddar, mozzarella, refried beans, jalapeños, salsa and sour cream.",
    "imagePath": "/assets/nachos/baked-veg-nachos.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-nch-2",
    "name": "Baked Chicken Nachos Overload",
    "mainCategory": "MEXICAN",
    "category": "Nachos & Sides",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 340,
    "description": "Loaded tortilla chips topped with shredded spiced chicken, molten queso cheese, fresh pico de gallo and guacamole.",
    "imagePath": "/assets/nachos/baked-chicken-nachos.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-app-1",
    "name": "Classic Golden Fries",
    "mainCategory": "MEXICAN",
    "category": "Sides & Fries",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 190,
    "description": "Crispy golden sea-salt french fries served with house garlic aioli and ketchup.",
    "imagePath": "/assets/mexican-appetisers/classic-fries.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "mex-app-2",
    "name": "Peri Peri Spiced Fries",
    "mainCategory": "MEXICAN",
    "category": "Sides & Fries",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 210,
    "description": "Crisp fries dusted generously in fiery African peri-peri spices.",
    "imagePath": "/assets/mexican-appetisers/peri-peri-fries.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "mex-app-3",
    "name": "Parmesan Herb Fries",
    "mainCategory": "MEXICAN",
    "category": "Sides & Fries",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 240,
    "description": "Shoestring potatoes tossed in truffle oil, fresh parsley and shaved aged parmesan.",
    "imagePath": "/assets/mexican-appetisers/parmesan-fries.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "mex-app-4",
    "name": "Crispy Chicken Popcorn",
    "mainCategory": "MEXICAN",
    "category": "Sides & Bites",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 260,
    "description": "Bite-sized tender chicken cubes coated in crunchy spice crumb, served with chipotle dip.",
    "imagePath": "/assets/mexican-appetisers/chicken-popcorn.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-app-5",
    "name": "Crispy Chicken Strips",
    "mainCategory": "MEXICAN",
    "category": "Sides & Bites",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 280,
    "description": "Long tender chicken breast fillets fried to a deep crunch with smoky peri-peri dip.",
    "imagePath": "/assets/mexican-appetisers/chicken-strips.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-brg-4",
    "name": "Smash Veggie Cheese Burger",
    "mainCategory": "MEXICAN",
    "category": "Burgers",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 320,
    "description": "Golden smashed potato & mozzarella patty topped with melted cheddar, gherkins, fresh lettuce and chipotle cocktail sauce.",
    "imagePath": "/assets/burgers/smash-veggie-cheese-burger.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-brg-5",
    "name": "Smash Chicken Cheese Burger",
    "mainCategory": "MEXICAN",
    "category": "Burgers",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 360,
    "description": "Tender minced chicken patty smashed on a scorching skillet with gooey melted cheese, caramelized onions and spicy mayo.",
    "imagePath": "/assets/burgers/smash-chicken-cheese-burger.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "mex-wrp-6",
    "name": "Spicy Grilled Paneer Wrap",
    "mainCategory": "MEXICAN",
    "category": "Burrito Wraps",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 330,
    "description": "Smoky grilled paneer slices, Mexican fiesta rice, pinto beans, guacamole, and cheddar cheese wrapped tight.",
    "imagePath": "/assets/burrito-wraps/spicy-grilled-paneer-burrito-bowl.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "it-piz-1",
    "name": "Classic Margherita",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 395,
    "description": "Neapolitan style: Italian San Marzano tomato sauce, fresh fior di latte mozzarella, fresh sweet basil and extra virgin olive oil.",
    "imagePath": "/assets/pizza/classic-margherita.avif",
    "variants": [
      {
        "id": "v-mar-10",
        "name": "10 inch Regular",
        "price": 395
      },
      {
        "id": "v-mar-12",
        "name": "12 inch Large",
        "price": 580
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-2",
    "name": "Margherita with Pesto Drizzle",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 445,
    "description": "Classic Margherita enhanced with swirls of aromatic Genovese basil pesto and shaved parmesan.",
    "imagePath": "/assets/pizza/classic-margherita-wuth-pesto-drizzle.avif",
    "variants": [
      {
        "id": "v-pstd-10",
        "name": "10 inch Regular",
        "price": 445
      },
      {
        "id": "v-pstd-12",
        "name": "12 inch Large",
        "price": 630
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-3",
    "name": "Quattro Formaggi (4 Cheese)",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 520,
    "description": "A decadent blend of mozzarella, gorgonzola, smoked provolone and parmesan over an olive oil crust.",
    "imagePath": "/assets/pizza/4-cheese.avif",
    "variants": [
      {
        "id": "v-4ch-10",
        "name": "10 inch Regular",
        "price": 520
      },
      {
        "id": "v-4ch-12",
        "name": "12 inch Large",
        "price": 720
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-4",
    "name": "Artisanal Burrata Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 580,
    "description": "Whole fresh burrata ball centered on blistered cherry tomatoes, fresh basil and aged Modena balsamic reduction.",
    "imagePath": "/assets/pizza/burrata-pizza.avif",
    "variants": [
      {
        "id": "v-bur-10",
        "name": "10 inch Regular",
        "price": 580
      },
      {
        "id": "v-bur-12",
        "name": "12 inch Large",
        "price": 780
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-5",
    "name": "Truffle Mushroom Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 530,
    "description": "White base with sautéed button and shiitake mushrooms, mozzarella, roasted garlic and black truffle drizzle.",
    "imagePath": "/assets/pizza/truffle-mushroom.avif",
    "variants": [
      {
        "id": "v-trf-10",
        "name": "10 inch Regular",
        "price": 530
      },
      {
        "id": "v-trf-12",
        "name": "12 inch Large",
        "price": 730
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-6",
    "name": "Pesto Paneer Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 485,
    "description": "Fragrant basil pesto sauce, spiced cottage cheese cubes, sweet bell peppers, red onions and mozzarella.",
    "imagePath": "/assets/pizza/pesto-paneer.avif",
    "variants": [
      {
        "id": "v-psp-10",
        "name": "10 inch Regular",
        "price": 485
      },
      {
        "id": "v-psp-12",
        "name": "12 inch Large",
        "price": 685
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-piz-7",
    "name": "Sun & Rocket Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 480,
    "description": "Sundried tomatoes, fresh peppery rocket leaves, feta crumbles and mozzarella with balsamic glaze.",
    "imagePath": "/assets/pizza/sun-rocket.avif",
    "variants": [
      {
        "id": "v-snr-10",
        "name": "10 inch Regular",
        "price": 480
      },
      {
        "id": "v-snr-12",
        "name": "12 inch Large",
        "price": 680
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-8",
    "name": "Chicken Pepperoni Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 550,
    "description": "Crisp smoked chicken pepperoni discs layered over tangy tomato sauce and bubbly mozzarella cheese.",
    "imagePath": "/assets/pizza/chicken-pepperoni.avif",
    "variants": [
      {
        "id": "v-pep-10",
        "name": "10 inch Regular",
        "price": 550
      },
      {
        "id": "v-pep-12",
        "name": "12 inch Large",
        "price": 750
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-piz-9",
    "name": "Panfire 4 Meat Feast Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 640,
    "description": "Smoked chicken pepperoni, spiced sausage, grilled herb chicken and bacon bits on tomato and mozzarella.",
    "imagePath": "/assets/pizza/panfire-4-meat.avif",
    "variants": [
      {
        "id": "v-4mt-10",
        "name": "10 inch Regular",
        "price": 640
      },
      {
        "id": "v-4mt-12",
        "name": "12 inch Large",
        "price": 840
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "it-piz-10",
    "name": "Pesto Smoked Chicken & Rocket Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 560,
    "description": "House pesto base, tender smoked chicken strips, fresh rocket salad and shaved parmesan.",
    "imagePath": "/assets/pizza/pesto-smoked-chicken-and-rocket.avif",
    "variants": [
      {
        "id": "v-psk-10",
        "name": "10 inch Regular",
        "price": 560
      },
      {
        "id": "v-psk-12",
        "name": "12 inch Large",
        "price": 760
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-dpz-1",
    "name": "Chicago Deep Dish Loaded Vegetables",
    "mainCategory": "ITALIAN",
    "category": "Deep Dish Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 595,
    "description": "Authentic 2-inch buttery crust stuffed with half a pound of mozzarella, layers of sautéed vegetables and chunky marinara on top.",
    "imagePath": "/assets/deep-dish-pizza/loaded-vegetables.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-dpz-2",
    "name": "Chicago Deep Dish Ultimate Mushroom",
    "mainCategory": "ITALIAN",
    "category": "Deep Dish Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 620,
    "description": "Crispy deep crust packed with button, shiitake and oyster mushrooms, three cheeses and rich tomato sauce.",
    "imagePath": "/assets/deep-dish-pizza/ultimate-mushroom.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-dpz-3",
    "name": "Chicago Deep Dish Panfire Overload Chicken",
    "mainCategory": "ITALIAN",
    "category": "Deep Dish Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 680,
    "description": "Deep dish pie filled with juicy spiced chicken chunks, chicken sausage, molten cheese and rich herb marinara.",
    "imagePath": "/assets/deep-dish-pizza/panfire-overload-chicken.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-pst-1",
    "name": "Creamy Alfredo Penne Pasta",
    "mainCategory": "ITALIAN",
    "category": "Artisanal Pastas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 420,
    "description": "Al dente penne tossed in rich parmesan cream sauce with garlic, butter and fresh parsley.",
    "imagePath": "/assets/pasta/alfredo-pasta.avif",
    "addons": [
      {
        "id": "add-pst-chk",
        "name": "Add Grilled Chicken",
        "price": 60
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-pst-2",
    "name": "Spicy Arrabbiata Penne Pasta",
    "mainCategory": "ITALIAN",
    "category": "Artisanal Pastas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 395,
    "description": "Penne simmered in a fiery San Marzano tomato sauce with fresh garlic, chili flakes and basil.",
    "imagePath": "/assets/pasta/arrabbiata-pasta.avif",
    "addons": [
      {
        "id": "add-pst-chk2",
        "name": "Add Grilled Chicken",
        "price": 60
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "it-pst-3",
    "name": "Spaghetti Aglio Olio e Peperoncino",
    "mainCategory": "ITALIAN",
    "category": "Artisanal Pastas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 395,
    "description": "Classic spaghetti tossed in cold-pressed extra virgin olive oil, sliced golden garlic, chili flakes and parsley.",
    "imagePath": "/assets/pasta/aglio-olio-pasta.avif",
    "addons": [
      {
        "id": "add-pst-prw",
        "name": "Add Garlic Prawns",
        "price": 90
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-pst-4",
    "name": "Pesto Genovese Pasta",
    "mainCategory": "ITALIAN",
    "category": "Artisanal Pastas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 445,
    "description": "Fresh basil pesto with pine nuts, garlic, extra virgin olive oil and parmesan clinging to perfectly cooked pasta.",
    "imagePath": "/assets/pasta/pesto-pastaa.avif",
    "addons": [
      {
        "id": "add-pst-chk3",
        "name": "Add Grilled Chicken",
        "price": 60
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-pst-5",
    "name": "Rose Cream Pasta (Pink Sauce)",
    "mainCategory": "ITALIAN",
    "category": "Artisanal Pastas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 430,
    "description": "The harmonious union of tangy marinara and velvety parmesan cream sauce with sautéed garden vegetables.",
    "imagePath": "/assets/pasta/rose-pasta.avif",
    "addons": [
      {
        "id": "add-pst-chk4",
        "name": "Add Grilled Chicken",
        "price": 60
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-sdw-2",
    "name": "Asparagus Burrata Napoli Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 395,
    "description": "Tender grilled green asparagus, creamy burrata, fresh rocket leaves and pesto in wood-fired pizza dough.",
    "imagePath": "/assets/napoli-sandwiches/asparagus-burrata.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sdw-3",
    "name": "Pesto Pulled Chicken Napoli Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 390,
    "description": "Juicy pulled chicken in basil pesto dressing, fresh mozzarella and roasted cherry tomatoes on hot Napoli bread.",
    "imagePath": "/assets/napoli-sandwiches/pesto-pulled-chicken.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sdw-4",
    "name": "Ham and Cheese Napoli Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 395,
    "description": "Smoked chicken ham, melted provolone and cheddar cheese, Dijon mustard and crisp greens on rustic bread.",
    "imagePath": "/assets/napoli-sandwiches/ham-and-cheese.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-gb-2",
    "name": "Classic Garlic Bread with Cheese",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 280,
    "description": "Fresh artisanal baguette toasted with homemade garlic herb butter and loaded with gooey mozzarella.",
    "imagePath": "/assets/garlic-bread/garlic-bread-with-cheese.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-gb-3",
    "name": "Pesto Pulled Chicken Garlic Bread",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 365,
    "description": "Garlic toasted baguette topped with creamy pesto chicken, mozzarella and fresh basil leaves.",
    "imagePath": "/assets/garlic-bread/pesto-pulled-chicken.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sal-1",
    "name": "Caprese Salad",
    "mainCategory": "ITALIAN",
    "category": "Salads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 365,
    "description": "Rocket leaves, freshly sliced vine tomatoes, bocconcini mozzarella and basil pesto with balsamic reduction.",
    "imagePath": "/assets/salad/caprese-salad.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sal-2",
    "name": "Caesar Salad with Crispy Croutons",
    "mainCategory": "ITALIAN",
    "category": "Salads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 345,
    "description": "Crisp romaine lettuce, golden croutons, shaved parmesan and creamy mustard Caesar dressing.",
    "imagePath": "/assets/salad/caesar-salad.avif",
    "addons": [
      {
        "id": "add-csr-chk",
        "name": "Add Grilled Chicken",
        "price": 60
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sal-3",
    "name": "Rucola Burrata Salad",
    "mainCategory": "ITALIAN",
    "category": "Salads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 445,
    "description": "Wild rocket leaves, cherry tomatoes, creamy burrata and basil pesto in honey-balsamic dressing.",
    "imagePath": "/assets/salad/rucola-salad.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-11",
    "name": "Crispy Bacon & Mozzarella Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 560,
    "description": "Smoky crispy bacon strips, caramelized onions, San Marzano tomato sauce and fior di latte mozzarella.",
    "imagePath": "/assets/pizza/bacon-pizza.avif",
    "variants": [
      {
        "id": "v-bcn-10",
        "name": "10 inch Regular",
        "price": 560
      },
      {
        "id": "v-bcn-12",
        "name": "12 inch Large",
        "price": 760
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-12",
    "name": "Makhni Butter Chicken Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 560,
    "description": "Rich velvety makhni sauce base, shredded butter chicken, pickled onions, green chili and mozzarella.",
    "imagePath": "/assets/pizza/butter-chicken-pizza.avif",
    "variants": [
      {
        "id": "v-bck-10",
        "name": "10 inch Regular",
        "price": 560
      },
      {
        "id": "v-bck-12",
        "name": "12 inch Large",
        "price": 760
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-piz-13",
    "name": "Makhni Butter Paneer Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 495,
    "description": "Buttery makhni gravy, roasted cottage cheese cubes, sliced capsicum, kasuri methi and mozzarella.",
    "imagePath": "/assets/pizza/butter-paneer-pizza.avif",
    "variants": [
      {
        "id": "v-bpn-10",
        "name": "10 inch Regular",
        "price": 495
      },
      {
        "id": "v-bpn-12",
        "name": "12 inch Large",
        "price": 695
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-piz-14",
    "name": "Chicken Ham Hawaiian Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 520,
    "description": "Smoked chicken ham, sweet caramelized pineapple chunks, mozzarella cheese and tangy tomato sauce.",
    "imagePath": "/assets/pizza/chicken-ham-hawaiian.avif",
    "variants": [
      {
        "id": "v-chh-10",
        "name": "10 inch Regular",
        "price": 520
      },
      {
        "id": "v-chh-12",
        "name": "12 inch Large",
        "price": 720
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-15",
    "name": "Creamy Spinach & Wild Mushroom Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 495,
    "description": "Velvety garlic white sauce, sautéed baby spinach, wild mushrooms, ricotta and fior di latte mozzarella.",
    "imagePath": "/assets/pizza/creamy-spinach-mushroom.avif",
    "variants": [
      {
        "id": "v-csm-10",
        "name": "10 inch Regular",
        "price": 495
      },
      {
        "id": "v-csm-12",
        "name": "12 inch Large",
        "price": 695
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-16",
    "name": "Grilled Chicken & Roasted Peppers Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 540,
    "description": "Herb grilled chicken, fire-roasted sweet bell peppers, red onions, tomato sauce and mozzarella.",
    "imagePath": "/assets/pizza/grilled-chicken-and-roasted-peppers.avif",
    "variants": [
      {
        "id": "v-grp-10",
        "name": "10 inch Regular",
        "price": 540
      },
      {
        "id": "v-grp-12",
        "name": "12 inch Large",
        "price": 740
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-piz-17",
    "name": "Grilled Chicken Spinach & Mushroom Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 560,
    "description": "Tender chicken slices, fresh baby spinach, sliced button mushrooms and bubbly mozzarella over tomato base.",
    "imagePath": "/assets/pizza/grilled-chicken-spinach-and-mushroom.avif",
    "variants": [
      {
        "id": "v-gcm-10",
        "name": "10 inch Regular",
        "price": 560
      },
      {
        "id": "v-gcm-12",
        "name": "12 inch Large",
        "price": 760
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-18",
    "name": "Classic Hawaiian Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 510,
    "description": "Sweet pineapple chunks, savory ham, fior di latte mozzarella and San Marzano tomato sauce.",
    "imagePath": "/assets/pizza/hawaiian-pizza.avif",
    "variants": [
      {
        "id": "v-haw-10",
        "name": "10 inch Regular",
        "price": 510
      },
      {
        "id": "v-haw-12",
        "name": "12 inch Large",
        "price": 710
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-piz-19",
    "name": "Panfire Pollo Rustica Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 550,
    "description": "Slow cooked spicy chicken, kalamata olives, sundried tomatoes, red onions, garlic and mozzarella.",
    "imagePath": "/assets/pizza/panfire-pollo.avif",
    "variants": [
      {
        "id": "v-pol-10",
        "name": "10 inch Regular",
        "price": 550
      },
      {
        "id": "v-pol-12",
        "name": "12 inch Large",
        "price": 750
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-piz-20",
    "name": "Spicy Wild Mushroom Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 485,
    "description": "Chili-marinated portobello and button mushrooms, jalapeños, red paprika, tomato base and mozzarella.",
    "imagePath": "/assets/pizza/spicy-mushroom.avif",
    "variants": [
      {
        "id": "v-smh-10",
        "name": "10 inch Regular",
        "price": 485
      },
      {
        "id": "v-smh-12",
        "name": "12 inch Large",
        "price": 685
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "it-piz-21",
    "name": "Spicy Paneer Tikka Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 485,
    "description": "Spicy tandoori spiced paneer cubes, crisp capsicum, sliced red onions and mozzarella on classic tomato base.",
    "imagePath": "/assets/pizza/spicy-paneer.avif",
    "variants": [
      {
        "id": "v-spt-10",
        "name": "10 inch Regular",
        "price": 485
      },
      {
        "id": "v-spt-12",
        "name": "12 inch Large",
        "price": 685
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "it-dpz-4",
    "name": "Chicago Deep Dish 4 Meat Feast",
    "mainCategory": "ITALIAN",
    "category": "Deep Dish Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 720,
    "description": "Two-inch deep butter crust loaded with spiced chicken sausage, pepperoni, grilled chicken, bacon, and rich mozzarella marinara.",
    "imagePath": "/assets/deep-dish-pizza/panfire-4-meat.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "it-dpz-5",
    "name": "Chicago Deep Dish Pepperoni Melt",
    "mainCategory": "ITALIAN",
    "category": "Deep Dish Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 695,
    "description": "A massive layer of chicken pepperoni slices smothered between half a pound of mozzarella and crushed tomato sauce.",
    "imagePath": "/assets/deep-dish-pizza/pepperoni-melt.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-ind-1",
    "name": "Indie Chicken Sausage Pizza",
    "mainCategory": "ITALIAN",
    "category": "Indie Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 495,
    "description": "Crispy Indian crust topped with spicy sliced chicken sausage, bell peppers, onions and spiced tomato sauce.",
    "imagePath": "/assets/indie-crust-pizza/chicken-sausage.avif",
    "variants": [
      {
        "id": "v-ics-10",
        "name": "10 inch Regular",
        "price": 495
      },
      {
        "id": "v-ics-12",
        "name": "12 inch Large",
        "price": 695
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-ind-2",
    "name": "Indie Fully Loaded Chicken Pizza",
    "mainCategory": "ITALIAN",
    "category": "Indie Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 545,
    "description": "Layered with spiced shredded chicken, chicken sausage, peri peri chicken and molten mozzarella.",
    "imagePath": "/assets/indie-crust-pizza/fully-loaded-chicken.avif",
    "variants": [
      {
        "id": "v-flc-10",
        "name": "10 inch Regular",
        "price": 545
      },
      {
        "id": "v-flc-12",
        "name": "12 inch Large",
        "price": 745
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "it-ind-3",
    "name": "Indie Mushroom Delight Pizza",
    "mainCategory": "ITALIAN",
    "category": "Indie Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 465,
    "description": "Button mushrooms, roasted garlic, caramelized onions and herbs over spiced tomato cheese base.",
    "imagePath": "/assets/indie-crust-pizza/mushroom-delight.avif",
    "variants": [
      {
        "id": "v-imd-10",
        "name": "10 inch Regular",
        "price": 465
      },
      {
        "id": "v-imd-12",
        "name": "12 inch Large",
        "price": 665
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-ind-4",
    "name": "Indie Peri-Peri Paneer Pizza",
    "mainCategory": "ITALIAN",
    "category": "Indie Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 475,
    "description": "Peri-peri spiced cottage cheese cubes, bell peppers, onions, red paprika and gooey mozzarella.",
    "imagePath": "/assets/indie-crust-pizza/peri-peri-paneer.avif",
    "variants": [
      {
        "id": "v-ppp-10",
        "name": "10 inch Regular",
        "price": 475
      },
      {
        "id": "v-ppp-12",
        "name": "12 inch Large",
        "price": 675
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "it-ind-5",
    "name": "Indie Tandoori Chicken Pizza",
    "mainCategory": "ITALIAN",
    "category": "Indie Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 525,
    "description": "Clay-oven style tandoori spiced chicken pieces, pickled onions, green chilies and mozzarella.",
    "imagePath": "/assets/indie-crust-pizza/tandoori-chicken.avif",
    "variants": [
      {
        "id": "v-itc-10",
        "name": "10 inch Regular",
        "price": 525
      },
      {
        "id": "v-itc-12",
        "name": "12 inch Large",
        "price": 725
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "it-ind-6",
    "name": "Indie Veggie Delight Pizza",
    "mainCategory": "ITALIAN",
    "category": "Indie Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 445,
    "description": "Golden corn, bell peppers, red onions, mushrooms and black olives over zesty tomato sauce.",
    "imagePath": "/assets/indie-crust-pizza/veggie-delight.avif",
    "variants": [
      {
        "id": "v-ivd-10",
        "name": "10 inch Regular",
        "price": 445
      },
      {
        "id": "v-ivd-12",
        "name": "12 inch Large",
        "price": 645
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-gb-4",
    "name": "Asparagus & Burrata Garlic Bread",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 340,
    "description": "Crusty garlic baguette topped with grilled baby asparagus spears, creamy burrata and basil drizzle.",
    "imagePath": "/assets/garlic-bread/asparagus-burrata.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-gb-5",
    "name": "Bacon and Mushroom Garlic Bread",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 360,
    "description": "Artisanal garlic baguette baked with crispy bacon bits, sautéed wild mushrooms and molten mozzarella.",
    "imagePath": "/assets/garlic-bread/bacon-and-mushroom.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-gb-6",
    "name": "Grilled Chicken Garlic Bread",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 345,
    "description": "Roasted garlic loaf topped with herb grilled chicken chunks, jalapeños and bubbling melted cheese.",
    "imagePath": "/assets/garlic-bread/grilled-chicken.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-gb-7",
    "name": "Pepperoni Garlic Bread",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 360,
    "description": "Crispy garlic bread slathered in marinara, topped with savory pepperoni slices and mozzarella.",
    "imagePath": "/assets/garlic-bread/pepperoni.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "it-gb-8",
    "name": "Pesto Veggies Garlic Bread",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 320,
    "description": "Toasted baguette topped with Genovese basil pesto, sautéed zucchini, bell peppers and mozzarella.",
    "imagePath": "/assets/garlic-bread/pesto-veggies.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-gb-9",
    "name": "Vegetable & Cheese Garlic Bread",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 295,
    "description": "Classic garlic bread loaded with diced bell peppers, sweet corn, olives and gooey mozzarella.",
    "imagePath": "/assets/garlic-bread/vegetable-and-cheese-garlic-bread.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sdw-5",
    "name": "Bacon & Eggs Napoli Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 395,
    "description": "Crispy bacon, sunny-side fried egg, cheddar cheese and peppery wild rocket folded in hot pizza bread.",
    "imagePath": "/assets/napoli-sandwiches/bacon-and-eggs.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sdw-6",
    "name": "Grilled Herb Chicken Napoli Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 385,
    "description": "Marinated grilled chicken breast, sliced tomatoes, iceberg lettuce and garlic aioli in wood-fired bread.",
    "imagePath": "/assets/napoli-sandwiches/grilled-chicken.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sdw-7",
    "name": "Loaded Vegetables Napoli Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 345,
    "description": "Charred bell peppers, zucchini, sautéed mushrooms, mozzarella and balsamic glaze on rustic bread.",
    "imagePath": "/assets/napoli-sandwiches/loaded-vegetables-sandwich.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sdw-8",
    "name": "Mushroom & Cheese Napoli Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 360,
    "description": "Wok-seared wild mushrooms with melted fontina and mozzarella cheese, truffle drizzle on hot crust.",
    "imagePath": "/assets/napoli-sandwiches/mushroom-and-cheese.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sdw-9",
    "name": "Sundried Tomato & Pesto Napoli Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 365,
    "description": "Intense sundried tomatoes, creamy ricotta, fresh pesto and basil leaves on wood-fired Napoli bread.",
    "imagePath": "/assets/napoli-sandwiches/sundried-tomato-pesto.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sal-4",
    "name": "Crisp Green Apple & Walnut Salad",
    "mainCategory": "ITALIAN",
    "category": "Salads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 340,
    "description": "Crisp sliced Granny Smith apples, candied walnuts, mixed garden greens, crumbled feta and honey mustard vinaigrette.",
    "imagePath": "/assets/salad/apple-salad.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "it-sal-5",
    "name": "Watermelon Feta & Mint Salad",
    "mainCategory": "ITALIAN",
    "category": "Salads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 330,
    "description": "Sweet chilled watermelon cubes, Greek feta cheese crumbles, fresh garden mint leaves and light balsamic glaze.",
    "imagePath": "/assets/salad/watermelon-salad.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-dim-1",
    "name": "Paneer Bok Choy Dim Sum (4 Pcs)",
    "mainCategory": "ASIAN",
    "category": "Dim Sums",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 345,
    "description": "Silky steamed dumplings stuffed with spiced cottage cheese and crisp Asian bok choy.",
    "imagePath": "/assets/dim-sums/paneer-bok-choy-dim-sum.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-dim-2",
    "name": "Mushroom & Cream Cheese Dim Sum (4 Pcs)",
    "mainCategory": "ASIAN",
    "category": "Dim Sums",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 360,
    "description": "Shiitake and button mushrooms folded with rich cream cheese and toasted garlic.",
    "imagePath": "/assets/dim-sums/mushroom-cream-cheese-dim-sum.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-dim-3",
    "name": "Classic Chicken Dim Sum (4 Pcs)",
    "mainCategory": "ASIAN",
    "category": "Dim Sums",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 375,
    "description": "Traditional Cantonese minced chicken dumplings with spring onion, ginger and sesame oil.",
    "imagePath": "/assets/dim-sums/classic-chicken-dim-sum.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-bao-1",
    "name": "Paneer & Veggies Bao",
    "mainCategory": "ASIAN",
    "category": "Baos",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 340,
    "description": "Steamed open-faced bao filled with crispy spiced paneer, wok greens and chili garlic glaze.",
    "imagePath": "/assets/bao/paneer-and-veggies-bao.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-bao-2",
    "name": "Katsu Chicken Bao",
    "mainCategory": "ASIAN",
    "category": "Baos",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 395,
    "description": "Panko crusted fried chicken breast, Japanese tonkatsu sauce, kewpie mayo and crunchy slaw.",
    "imagePath": "/assets/bao/katsu-chicken-bao.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-bao-3",
    "name": "Prawn Fire Cracker Bao",
    "mainCategory": "ASIAN",
    "category": "Baos",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 445,
    "description": "Crispy golden fried tiger prawns tossed in spicy sriracha sauce and fresh scallions.",
    "imagePath": "/assets/bao/prawn-frier-cracker-bao.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-mom-1",
    "name": "Steamed Vegetarian Momos (6 Pcs)",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 280,
    "description": "Hand-pleated dumplings packed with cabbage, carrots, onion and Asian aromatics with spicy red chutney.",
    "imagePath": "/assets/momo-and-gyoza/vegetarian-momos.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-mom-2",
    "name": "Vegetable & Cheese Momos (6 Pcs)",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 310,
    "description": "Melted cheese and finely chopped vegetables wrapped in thin dough and steamed to perfection.",
    "imagePath": "/assets/momo-and-gyoza/vegetable-cheese-momos.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-mom-3",
    "name": "Pan-Fried Vegetable Gyoza (5 Pcs)",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 320,
    "description": "Japanese potstickers with crispy golden bottoms and juicy vegetable filling, served with soy-vinegar dip.",
    "imagePath": "/assets/momo-and-gyoza/vegetable-gyoza.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-mom-4",
    "name": "Steamed Chicken Momos (6 Pcs)",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 340,
    "description": "Minced juicy chicken with scallions, ginger and spices served with fiery Himalayan tomato dip.",
    "imagePath": "/assets/momo-and-gyoza/chicken-momos.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-mom-5",
    "name": "Chicken Cheese Momos (6 Pcs)",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 365,
    "description": "Succulent chicken blended with molten mozzarella and mild spices in soft dumpling skins.",
    "imagePath": "/assets/momo-and-gyoza/chicken-cheese-momos.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-mom-6",
    "name": "Pan-Fried Chicken Gyoza (5 Pcs)",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 365,
    "description": "Golden seared Japanese chicken dumplings with scallions, garlic and chili soy drizzle.",
    "imagePath": "/assets/momo-and-gyoza/chicken-gyoza.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-sus-1",
    "name": "California Veg Sushi Roll",
    "mainCategory": "ASIAN",
    "category": "Sushi",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 380,
    "description": "Avocado, cucumber, bell peppers and toasted sesame rolled in seasoned sushi rice.",
    "imagePath": "/assets/sushi/california-veg-sushi.avif",
    "variants": [
      {
        "id": "v-cvg-4",
        "name": "4 Pieces",
        "price": 380
      },
      {
        "id": "v-cvg-8",
        "name": "8 Pieces",
        "price": 620
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-sus-2",
    "name": "Asparagus Tempura Sushi Roll",
    "mainCategory": "ASIAN",
    "category": "Sushi",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 390,
    "description": "Crispy battered baby asparagus spears with spicy mayo and tanuki flakes.",
    "imagePath": "/assets/sushi/asparagus-tempura-sushi.avif",
    "variants": [
      {
        "id": "v-asp-4",
        "name": "4 Pieces",
        "price": 390
      },
      {
        "id": "v-asp-8",
        "name": "8 Pieces",
        "price": 640
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-sus-3",
    "name": "Dragon Uramaki Sushi Roll",
    "mainCategory": "ASIAN",
    "category": "Sushi",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 475,
    "description": "Crispy prawn tempura inside, draped with avocado scales, unagi drizzle and tobiko.",
    "imagePath": "/assets/sushi/dragon-uramaki.avif",
    "variants": [
      {
        "id": "v-drg-4",
        "name": "4 Pieces",
        "price": 475
      },
      {
        "id": "v-drg-8",
        "name": "8 Pieces",
        "price": 790
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-sus-4",
    "name": "Katsu Chicken Sushi Roll",
    "mainCategory": "ASIAN",
    "category": "Sushi",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 440,
    "description": "Crunchy panko chicken, cucumber and spicy Japanese kewpie mayo rolled inside nori.",
    "imagePath": "/assets/sushi/katsu-chicken-sushi.avif",
    "variants": [
      {
        "id": "v-ktc-4",
        "name": "4 Pieces",
        "price": 440
      },
      {
        "id": "v-ktc-8",
        "name": "8 Pieces",
        "price": 710
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ndl-1",
    "name": "Classic Wok Hakka Noodles",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 275,
    "description": "Wok tossed noodles with shredded cabbage, bell peppers, carrots and scallions in light soy seasoning.",
    "imagePath": "/assets/noodles/hakka-noodles.avif",
    "variants": [
      {
        "id": "v-hkn-veg",
        "name": "Vegetarian",
        "price": 275
      },
      {
        "id": "v-hkn-chk",
        "name": "Chicken",
        "price": 325
      },
      {
        "id": "v-hkn-prw",
        "name": "Prawns",
        "price": 375
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ndl-2",
    "name": "Spicy Schezwan Noodles",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 285,
    "description": "Fiery noodles tossed in house-made Sichuan chili sauce with celery, garlic and scallions.",
    "imagePath": "/assets/noodles/schezwan-noodles.avif",
    "variants": [
      {
        "id": "v-scz-veg",
        "name": "Vegetarian",
        "price": 285
      },
      {
        "id": "v-scz-chk",
        "name": "Chicken",
        "price": 335
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-ndl-3",
    "name": "Chilli Garlic Wok Noodles",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 285,
    "description": "Spicy red chili paste, caramelized minced garlic and spring onions stir-fried with wheat noodles.",
    "imagePath": "/assets/noodles/chilli-garlic-noodles.avif",
    "variants": [
      {
        "id": "v-cgn-veg",
        "name": "Vegetarian",
        "price": 285
      },
      {
        "id": "v-cgn-chk",
        "name": "Chicken",
        "price": 335
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-ndl-4",
    "name": "Japanese Udon Noodles Bowl",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 350,
    "description": "Thick chewy udon noodles stir-fried in a rich sweet soy mirin reduction with bok choy and mushrooms.",
    "imagePath": "/assets/noodles/udon-noodles.avif",
    "variants": [
      {
        "id": "v-udn-veg",
        "name": "Vegetarian",
        "price": 350
      },
      {
        "id": "v-udn-chk",
        "name": "Chicken",
        "price": 395
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ndl-5",
    "name": "Tokyo Shoyu Ramen Bowl",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 360,
    "description": "Slow-simmered rich aromatic broth with ramen noodles, nori seaweed, menma bamboo shoots and greens.",
    "imagePath": "/assets/noodles/ramen-bowl.avif",
    "variants": [
      {
        "id": "v-rmn-veg",
        "name": "Vegetarian",
        "price": 360
      },
      {
        "id": "v-rmn-chk",
        "name": "Chicken & Egg",
        "price": 410
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ndl-6",
    "name": "Burmese Khow Suey Bowl",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 380,
    "description": "Fragrant coconut curry broth served over noodles with 8 signature crispy condiments and fresh lime.",
    "imagePath": "/assets/noodles/khow-suey.avif",
    "variants": [
      {
        "id": "v-khw-veg",
        "name": "Vegetarian",
        "price": 380
      },
      {
        "id": "v-khw-chk",
        "name": "Chicken",
        "price": 430
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ric-1",
    "name": "Chilli Paneer Rice Bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 340,
    "description": "Wok tossed chili paneer in savory garlic soya gravy poured over aromatic fried rice or steamed rice.",
    "imagePath": "/assets/rice-bowls/chilli-paneer-rice-bowl.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-ric-2",
    "name": "Chilli Chicken Rice Bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 375,
    "description": "Crispy diced chicken tossed in dark soya chili sauce with bell peppers, served over fried rice.",
    "imagePath": "/assets/rice-bowls/chilli-chicken-rice-bowl.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-ric-3",
    "name": "Indonesian Nasi Goreng",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 395,
    "description": "Spiced Indonesian wok fried rice with chicken skewers, sunny-side egg, shrimp crackers and sambal.",
    "imagePath": "/assets/rice-bowls/nasi-goreng.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-ric-4",
    "name": "Thai Basil Paneer Fried Rice",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 330,
    "description": "Jasmine rice wok-tossed with fresh holy basil, sweet bell peppers, red chili and seasoned paneer.",
    "imagePath": "/assets/rice-bowls/thai-basil-paneer-fried-rice.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-app-1",
    "name": "Korean Water Chestnut",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 320,
    "description": "Crisp water chestnuts tossed in a sweet, spicy and sticky gochujang chili sesame glaze.",
    "imagePath": "/assets/appetisers/korean-water-chestnut.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-app-2",
    "name": "Crispy Honey Chili Lotus Stem",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 340,
    "description": "Thinly sliced crisp lotus stem glazed with honey, dried red chilies, scallions and toasted sesame.",
    "imagePath": "/assets/appetisers/crispy-lotus-stem.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-app-3",
    "name": "Wok Tossed Chilli Paneer",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 330,
    "description": "Cottage cheese cubes tossed in a high-heat wok with onions, bell peppers and dark chili soy.",
    "imagePath": "/assets/appetisers/chilli-paneer.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-app-4",
    "name": "Salt and Pepper Crispy Corn",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 290,
    "description": "Crunchy battered sweet corn kernels tossed with freshly cracked black pepper and spring onion.",
    "imagePath": "/assets/appetisers/salt-and-pepper-corn.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-app-5",
    "name": "Wok Tossed Chilli Chicken",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 360,
    "description": "Classic Calcutta Chinese style chicken cubes stir-fried with green chilies, garlic and scallions.",
    "imagePath": "/assets/appetisers/wok-tossed-chicken.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-app-6",
    "name": "Hot Basil Chicken",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 370,
    "description": "Sliced chicken wok tossed with bird’s eye chili, garlic and aromatic fresh holy basil leaves.",
    "imagePath": "/assets/appetisers/hot-basil-chciken.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-app-7",
    "name": "Crispy Honey Chicken",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 365,
    "description": "Crisp shredded chicken tossed in a sweet chili honey glaze garnished with white sesame.",
    "imagePath": "/assets/appetisers/crispy-honey-chicken.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-app-8",
    "name": "Rock Shrimp Tempura",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 445,
    "description": "Crispy tempura fried rock shrimp tossed in spicy creamy Japanese dynamite dressing.",
    "imagePath": "/assets/appetisers/rock-shrimp-tempura.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-sop-1",
    "name": "Tom Yum Spicy Lemongrass Soup",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 250,
    "description": "Authentic Thai hot & sour soup with kaffir lime, galangal, lemongrass, straw mushrooms and chili.",
    "imagePath": "/assets/soups/tom-yum-soup.avif",
    "variants": [
      {
        "id": "v-ty-veg",
        "name": "Vegetarian",
        "price": 250
      },
      {
        "id": "v-ty-chk",
        "name": "Chicken",
        "price": 290
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-sop-2",
    "name": "Tom Kha Coconut Herb Soup",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 260,
    "description": "Silky coconut milk soup infused with galangal, lemongrass, mushrooms and lime juice.",
    "imagePath": "/assets/soups/tom-kha-soup.avif",
    "variants": [
      {
        "id": "v-tk-veg",
        "name": "Vegetarian",
        "price": 260
      },
      {
        "id": "v-tk-chk",
        "name": "Chicken",
        "price": 300
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-sop-3",
    "name": "Manchow Soup with Crispy Noodles",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 240,
    "description": "Thick spicy brown garlic soup loaded with chopped vegetables, served with crispy fried noodles.",
    "imagePath": "/assets/soups/manchow-soup.avif",
    "variants": [
      {
        "id": "v-mc-veg",
        "name": "Vegetarian",
        "price": 240
      },
      {
        "id": "v-mc-chk",
        "name": "Chicken",
        "price": 280
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-app-9",
    "name": "Chicken Katsu",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 380,
    "description": "Crispy panko-breaded chicken cutlet fried golden brown, served with savory Japanese tonkatsu dipping sauce and kewpie mayo.",
    "imagePath": "/assets/appetisers/chicken-katsu.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-app-10",
    "name": "Indonesian Chicken Satay",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 375,
    "description": "Skewered marinated chicken thighs flame-grilled and served with rich spiced peanut sauce and pickled cucumber relish.",
    "imagePath": "/assets/appetisers/chicken-satay.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-app-11",
    "name": "Honey Chilli Potato",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 280,
    "description": "Crispy fried potato fingers glazed in sweet and spicy chili honey garlic sauce, tossed with sesame seeds and spring onions.",
    "imagePath": "/assets/appetisers/chilli-potato.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-app-12",
    "name": "Cheese and Corn Cigar Rolls",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 310,
    "description": "Crispy golden pastry rolls stuffed with molten processed cheese, sweet corn kernels and herbs, served with sweet chili dip.",
    "imagePath": "/assets/appetisers/cigar-roll.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-app-13",
    "name": "Honey Chilli Cauliflower",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 295,
    "description": "Batter-fried crispy cauliflower florets tossed in a sticky sweet honey-chili glaze with scallions and roasted sesame.",
    "imagePath": "/assets/appetisers/honey-chilli-cauliflower.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-app-14",
    "name": "Hot Garlic Prawns",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 460,
    "description": "Succulent pan-seared tiger prawns wok-tossed in pungent fiery garlic chili sauce with crushed peppercorns and spring onions.",
    "imagePath": "/assets/appetisers/hot-garlic-prawn.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-app-15",
    "name": "Crispy Veg Manchurian",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 295,
    "description": "Minced vegetable dumplings crisp-fried and tossed in savory dark soy, ginger, garlic, and fresh green chili sauce.",
    "imagePath": "/assets/appetisers/manchurian.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-app-16",
    "name": "Crispy Shanghai Mushroom",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 330,
    "description": "Tender button mushrooms batter-fried to golden crispness, tossed in sweet-savory Shanghai spice glaze and scallions.",
    "imagePath": "/assets/appetisers/mushroom-shanghai.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-app-17",
    "name": "Wok Paneer with Bok Choy",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 340,
    "description": "Fresh cottage cheese cubes and crunchy Shanghai bok choy wok-tossed in fragrant light soya and crushed garlic.",
    "imagePath": "/assets/appetisers/paneer-bok-choy-appetiser.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-app-18",
    "name": "Sautéed Asian Greens & Veggies",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 290,
    "description": "Fresh seasonal greens including broccoli, baby corn, bell peppers and snow peas tossed in aromatic sesame garlic oil.",
    "imagePath": "/assets/appetisers/sauteed-veggies.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-app-19",
    "name": "Thai Basil Paneer",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 335,
    "description": "Paneer cubes wok-seared with fresh holy basil, bird’s eye chili, sliced garlic, and sweet aromatic seasoning.",
    "imagePath": "/assets/appetisers/thai-basil-paneer.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-app-20",
    "name": "Veg Cheese Corn Rolls",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 310,
    "description": "Golden crunchy rolls filled with melted mozzarella, cheddar, sweet corn, and mild herbs served with scallion aioli.",
    "imagePath": "/assets/appetisers/veg-cheese-corn-roll.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-bao-4",
    "name": "Teriyaki Chicken Bao",
    "mainCategory": "ASIAN",
    "category": "Baos",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 385,
    "description": "Glazed sweet teriyaki chicken thigh, pickled red onions, cucumber ribbons and toasted sesame in a fluffy steamed bao.",
    "imagePath": "/assets/bao/teriyaki-chicken-bao.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-mom-7",
    "name": "Crispy Veg Wontons",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 295,
    "description": "Golden fried handmade wonton parcels stuffed with seasoned vegetables and water chestnuts, served with sweet chili sauce.",
    "imagePath": "/assets/momo-and-gyoza/wonton.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-sus-5",
    "name": "American California Chicken Sushi Roll",
    "mainCategory": "ASIAN",
    "category": "Sushi",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 440,
    "description": "Tender chicken, avocado, cucumber and toasted sesame seeds rolled in sushi rice with creamy Japanese mayo.",
    "imagePath": "/assets/sushi/american-california-chicken-sushi.avif",
    "variants": [
      {
        "id": "v-acc-4",
        "name": "4 Pieces",
        "price": 440
      },
      {
        "id": "v-acc-8",
        "name": "8 Pieces",
        "price": 710
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-sus-6",
    "name": "Crispy Spinach Sushi Roll",
    "mainCategory": "ASIAN",
    "category": "Sushi",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 390,
    "description": "Crispy flash-fried seasoned spinach, creamy avocado and tanuki flakes rolled with nori and spicy mayo.",
    "imagePath": "/assets/sushi/crispy-spinach-sushi.avif",
    "variants": [
      {
        "id": "v-css-4",
        "name": "4 Pieces",
        "price": 390
      },
      {
        "id": "v-css-8",
        "name": "8 Pieces",
        "price": 640
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-sus-7",
    "name": "Rainbow Uramaki Sushi Roll",
    "mainCategory": "ASIAN",
    "category": "Sushi",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 420,
    "description": "Vibrant sushi roll wrapped with colorful slices of avocado, bell peppers, cucumber and pickled radish.",
    "imagePath": "/assets/sushi/rainbow-sushi.avif",
    "variants": [
      {
        "id": "v-rbw-4",
        "name": "4 Pieces",
        "price": 420
      },
      {
        "id": "v-rbw-8",
        "name": "8 Pieces",
        "price": 690
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-sus-8",
    "name": "Teriyaki Chicken Sushi Roll",
    "mainCategory": "ASIAN",
    "category": "Sushi",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 440,
    "description": "Glazed sweet-savory teriyaki chicken strips, crisp cucumber and scallions topped with toasted sesame.",
    "imagePath": "/assets/sushi/teriyaki-chicken-sushi.avif",
    "variants": [
      {
        "id": "v-tcs-4",
        "name": "4 Pieces",
        "price": 440
      },
      {
        "id": "v-tcs-8",
        "name": "8 Pieces",
        "price": 710
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ndl-7",
    "name": "American Crispy Chopsuey",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 340,
    "description": "Bed of ultra-crisp fried noodles topped with sweet and sour tangy vegetable glaze, pineapple, and crunchy bell peppers.",
    "imagePath": "/assets/noodles/chopsuey.avif",
    "variants": [
      {
        "id": "v-chp-veg",
        "name": "Vegetarian",
        "price": 340
      },
      {
        "id": "v-chp-chk",
        "name": "Chicken & Egg",
        "price": 390
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ndl-8",
    "name": "Signature Oriental Noodle Bowl",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 360,
    "description": "Wok tossed noodles combined with exotic vegetables, shiitake mushrooms, and rich five-spice soy reduction.",
    "imagePath": "/assets/noodles/oriental-bowl.avif",
    "variants": [
      {
        "id": "v-ont-veg",
        "name": "Vegetarian",
        "price": 360
      },
      {
        "id": "v-ont-chk",
        "name": "Chicken",
        "price": 410
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ndl-9",
    "name": "Cantonese Pan-Fried Noodles",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 350,
    "description": "Crispy-bottomed noodles smothered in a rich savory Cantonese garlic gravy with seasonal Asian greens.",
    "imagePath": "/assets/noodles/pan-fried-noodles.avif",
    "variants": [
      {
        "id": "v-pfn-veg",
        "name": "Vegetarian",
        "price": 350
      },
      {
        "id": "v-pfn-chk",
        "name": "Chicken",
        "price": 400
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ndl-10",
    "name": "Singaporean Hakka Noodles",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 295,
    "description": "Thin noodles stir-fried with fragrant mild curry spices, shredded cabbage, carrots, bell peppers and spring onion.",
    "imagePath": "/assets/noodles/singaporean-hakka-noodles.avif",
    "variants": [
      {
        "id": "v-sgn-veg",
        "name": "Vegetarian",
        "price": 295
      },
      {
        "id": "v-sgn-chk",
        "name": "Chicken",
        "price": 345
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ndl-11",
    "name": "Traditional Himalayan Thukpa",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 320,
    "description": "Hearty and comforting Himalayan noodle soup infused with ginger, garlic, cilantro, aromatic mountain spices and greens.",
    "imagePath": "/assets/noodles/thukpa.avif",
    "variants": [
      {
        "id": "v-thk-veg",
        "name": "Vegetarian",
        "price": 320
      },
      {
        "id": "v-thk-chk",
        "name": "Tender Chicken",
        "price": 370
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ric-5",
    "name": "Chilli Mushroom Rice Bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 340,
    "description": "Wok-tossed button mushrooms in spicy chili garlic soy gravy served over fragrant eggless fried rice.",
    "imagePath": "/assets/rice-bowls/chilli-mushroom-rice-bowl.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-ric-6",
    "name": "Chilli Prawn Rice Bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 420,
    "description": "Juicy tiger prawns cooked in spicy dark soya and chili garlic gravy over wok-tossed fried rice.",
    "imagePath": "/assets/rice-bowls/chilli-prawn-rice-bowl.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-ric-7",
    "name": "Japanese Katsu Chicken Rice Bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 395,
    "description": "Panko breaded crispy chicken cutlet served over steamed Japanese rice with rich tonkatsu curry sauce and sesame.",
    "imagePath": "/assets/rice-bowls/katsu-chickwn-rice-bowl.avif",
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-ric-8",
    "name": "Korean Kimchi Fried Rice Bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 345,
    "description": "Spicy fermented napa cabbage kimchi wok-tossed with Jasmine rice, gochujang, sesame oil, and toasted nori strips.",
    "imagePath": "/assets/rice-bowls/kimchi-pickle-rice-bowl.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-ric-9",
    "name": "Holy Basil Paneer Krapow Bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 345,
    "description": "Cottage cheese wok-tossed with fresh holy basil, bird’s eye chili, and garlic served with aromatic Jasmine rice.",
    "imagePath": "/assets/rice-bowls/paneer-karpow.avif",
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-ric-10",
    "name": "Thai Pineapple & Egg Fried Rice",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 360,
    "description": "Jasmine rice stir-fried with sweet pineapple chunks, scrambled farm eggs, cashew nuts, raisins, and mild curry notes.",
    "imagePath": "/assets/rice-bowls/thai-pineapple-n-egg-fried-rice.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "as-sop-4",
    "name": "Classic Hot & Sour Soup",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 240,
    "description": "Spicy and tangy thick soup packed with shredded wood ear mushrooms, bamboo shoots, tofu, and red chili vinegar.",
    "imagePath": "/assets/soups/hot-n-sour-soup.avif",
    "variants": [
      {
        "id": "v-hns-veg",
        "name": "Vegetarian",
        "price": 240
      },
      {
        "id": "v-hns-chk",
        "name": "Chicken",
        "price": 280
      }
    ],
    "isAvailable": true,
    "spicyLevel": 2
  },
  {
    "id": "as-sop-5",
    "name": "Zesty Lemon Coriander Soup",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 240,
    "description": "Clear and refreshing vegetable broth packed with fresh coriander leaves, crushed black pepper, and squeezed lemon juice.",
    "imagePath": "/assets/soups/lemon-coriander-soup.avif",
    "variants": [
      {
        "id": "v-lmc-veg",
        "name": "Vegetarian",
        "price": 240
      },
      {
        "id": "v-lmc-chk",
        "name": "Chicken",
        "price": 280
      }
    ],
    "isAvailable": true,
    "spicyLevel": 1
  },
  {
    "id": "as-sop-6",
    "name": "Cream Style Sweet Corn Soup",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 240,
    "description": "Classic comforting soup with sweet crushed corn kernels, mild scallions, and light seasoning.",
    "imagePath": "/assets/soups/sweet-corn-soup.avif",
    "variants": [
      {
        "id": "v-swc-veg",
        "name": "Vegetarian",
        "price": 240
      },
      {
        "id": "v-swc-chk",
        "name": "Chicken & Egg Drop",
        "price": 280
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "bev-1",
    "name": "Fresh Lime Soda",
    "mainCategory": "BEVERAGES",
    "category": "Refreshers",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 140,
    "description": "Refreshing sparkling soda with fresh squeezed Key limes, mint sprigs and black salt.",
    "imagePath": "/assets/beverages/fresh-lime-soda.avif",
    "variants": [
      {
        "id": "v-fls-sw",
        "name": "Sweet",
        "price": 140
      },
      {
        "id": "v-fls-sl",
        "name": "Salted",
        "price": 140
      },
      {
        "id": "v-fls-mx",
        "name": "Sweet & Salted",
        "price": 140
      }
    ],
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "bev-2",
    "name": "Iced Tea (Lemon)",
    "mainCategory": "BEVERAGES",
    "category": "Iced Teas",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 160,
    "description": "Slow-brewed black tea chilled over ice with freshly squeezed lemon juice and mint.",
    "imagePath": "/assets/beverages/iced-tea-lemon.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "bev-3",
    "name": "Orange Mojito",
    "mainCategory": "BEVERAGES",
    "category": "Mojitos",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 185,
    "description": "Zesty muddled Florida oranges, fresh garden mint, lime wedges and sparkling soda.",
    "imagePath": "/assets/beverages/orange-mojito.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "bev-4",
    "name": "Strawberry Mojito",
    "mainCategory": "BEVERAGES",
    "category": "Mojitos",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 195,
    "description": "Crushed sweet strawberries, muddled mint leaves, lime juice and fizzy soda.",
    "imagePath": "/assets/beverages/strawberry-mojito.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "bev-5",
    "name": "Blueberry Mojito",
    "mainCategory": "BEVERAGES",
    "category": "Mojitos",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 210,
    "description": "Plump wild blueberries muddled with fresh mint, lime and effervescent soda water.",
    "imagePath": "/assets/beverages/blueberry-mojito.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "bev-6",
    "name": "Artisanal Cold Coffee",
    "mainCategory": "BEVERAGES",
    "category": "Coffee & Shakes",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 190,
    "description": "Rich Arabica espresso blended with chilled whole milk and creamy vanilla bean ice cream.",
    "imagePath": "/assets/beverages/cold-coffee.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "bev-7",
    "name": "Fresh Strawberry Shake",
    "mainCategory": "BEVERAGES",
    "category": "Coffee & Shakes",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 210,
    "description": "Creamy thick shake crafted with fresh strawberries, full-cream milk and strawberry puree.",
    "imagePath": "/assets/beverages/strawberry-shake.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "bev-8",
    "name": "Wild Blueberry Shake",
    "mainCategory": "BEVERAGES",
    "category": "Coffee & Shakes",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 230,
    "description": "Thick gourmet shake blended with antioxidant-rich blueberries and vanilla cream.",
    "imagePath": "/assets/beverages/blueberry-shake.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "bev-9",
    "name": "Oreo Thick Shake",
    "mainCategory": "BEVERAGES",
    "category": "Coffee & Shakes",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 220,
    "description": "Crushed Oreo cookies blended into chocolate ice cream, topped with cookie crumble.",
    "imagePath": "/assets/beverages/oreo-shake.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "bev-10",
    "name": "KitKat Thick Shake",
    "mainCategory": "BEVERAGES",
    "category": "Coffee & Shakes",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 230,
    "description": "Crisp KitKat chocolate wafers blended with Belgian chocolate syrup and creamy ice cream.",
    "imagePath": "/assets/beverages/kitkat-shake.avif",
    "isAvailable": true,
    "spicyLevel": 0
  },
  {
    "id": "des-1",
    "name": "Warm Fudge Brownie with Vanilla Ice Cream",
    "mainCategory": "DESSERTS",
    "category": "Desserts",
    "broadCategory": "DESSERTS",
    "isVeg": true,
    "price": 245,
    "description": "Gooey Belgian chocolate fudge brownie served piping hot with a scoop of Madagascar vanilla bean ice cream and hot chocolate fudge.",
    "imagePath": "/assets/desserts/brownie-with-ice-cream.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 0
  },
  {
    "id": "des-2",
    "name": "Artisanal Churros with Warm Chocolate Dip",
    "mainCategory": "DESSERTS",
    "category": "Desserts",
    "broadCategory": "DESSERTS",
    "isVeg": true,
    "price": 265,
    "description": "Crispy Spanish pastry dough dusted with cinnamon sugar, served alongside silky warm dark chocolate dipping ganache.",
    "imagePath": "/assets/desserts/churros.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-2",
    "name": "Caesar Salad",
    "mainCategory": "ITALIAN",
    "category": "Salads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 345,
    "description": "Lettuce, crunchy croutons, sautéed bell peppers and sweetcorn, tossed in a creamy mustard-mayo dressing, finished with parmesan.",
    "imagePath": "/assets/salad/caesar-salad.avif",
    "variants": [
      {
        "id": "v-2-1",
        "name": "Caesar Grilled Chicken",
        "price": 395
      }
    ],
    "addons": [
      {
        "id": "a-2-1",
        "name": "Caesar Grilled Chicken",
        "price": 50
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-3",
    "name": "Apple Salad",
    "mainCategory": "ITALIAN",
    "category": "Salads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 365,
    "description": "Crisp green apple and orange slices tossed with mixed lettuce, crunchy nuts and a refreshing honey-lemon dressing.",
    "imagePath": "/assets/salad/apple-salad.avif",
    "variants": [
      {
        "id": "v-3-1",
        "name": "Apple Grilled Chicken",
        "price": 415
      }
    ],
    "addons": [
      {
        "id": "a-3-1",
        "name": "Apple Grilled Chicken",
        "price": 50
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-4",
    "name": "Watermelon Salad",
    "mainCategory": "ITALIAN",
    "category": "Salads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 365,
    "description": "Watermelon, burrata, lettuce and feta tossed in a honey-lemon dressing.",
    "imagePath": "/assets/salad/watermelon-salad.avif",
    "variants": [
      {
        "id": "v-4-1",
        "name": "Watermelon Grilled chicken",
        "price": 415
      }
    ],
    "addons": [
      {
        "id": "a-4-1",
        "name": "Watermelon Grilled chicken",
        "price": 50
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-6",
    "name": "Sourdough Smash Veggie Cheese Burger",
    "mainCategory": "ITALIAN",
    "category": "Sourdough Burgers",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 350,
    "description": "A hand-crafted potato, mushroom, corn and mozzarella patty, smashed and grilled until golden, topped with crisp lettuce, tomato, gherkins, caramelised onions and cheese, served in a freshly baked wood-fired sourdough bun.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-7",
    "name": "Sourdough Smash Chicken Cheese Burger",
    "mainCategory": "ITALIAN",
    "category": "Sourdough Burgers",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 380,
    "description": "A hand-crafted chicken patty, smashed and grilled until golden, layered with crisp lettuce, tomato, gherkins, caramelised onions and cheese, served in a freshly baked wood-fired sourdough bun.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-8",
    "name": "Classic Margherita Pizza- Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 290,
    "description": "Classic San Marzano tomato sauce, mozzarella and aromatic hand-torn basil.",
    "imagePath": "/assets/pizza/classic-margherita.avif",
    "addons": [
      {
        "id": "a-8-1",
        "name": "Spicy Style",
        "price": 20
      },
      {
        "id": "a-8-2",
        "name": "Pesto Drizzle",
        "price": 30
      },
      {
        "id": "a-8-3",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-9",
    "name": "Classic Margherita - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 570,
    "description": "Classic San Marzano tomato sauce, mozzarella and aromatic hand-torn basil.",
    "imagePath": "/assets/pizza/classic-margherita.avif",
    "addons": [
      {
        "id": "a-9-1",
        "name": "Spicy Style",
        "price": 50
      },
      {
        "id": "a-9-2",
        "name": "Pesto Drizzle",
        "price": 60
      },
      {
        "id": "a-9-3",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-10",
    "name": "Classic Margherita- Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 520,
    "description": "Classic San Marzano tomato sauce, mozzarella and aromatic hand-torn basil.",
    "imagePath": "/assets/pizza/classic-margherita.avif",
    "addons": [
      {
        "id": "a-10-1",
        "name": "Spicy Style",
        "price": 50
      },
      {
        "id": "a-10-2",
        "name": "Pesto Drizzle",
        "price": 60
      },
      {
        "id": "a-10-3",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-11",
    "name": "Creamy Spinach & Mushroom- Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 345,
    "description": "Mozzarella, sautéed spinach and earthy mushrooms over a velvety white sauce.",
    "imagePath": "/assets/pizza/creamy-spinach-mushroom.avif",
    "addons": [
      {
        "id": "a-11-1",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-12",
    "name": "Creamy Spinach & Mushroom - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 670,
    "description": "Mozzarella, sautéed spinach and earthy mushrooms over a velvety white sauce.",
    "imagePath": "/assets/pizza/creamy-spinach-mushroom.avif",
    "addons": [
      {
        "id": "a-12-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-13",
    "name": "Creamy Spinach & Mushroom - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 640,
    "description": "Mozzarella, sautéed spinach and earthy mushrooms over a velvety white sauce.",
    "imagePath": "/assets/pizza/creamy-spinach-mushroom.avif",
    "addons": [
      {
        "id": "a-13-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-14",
    "name": "Butter Paneer - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 325,
    "description": "Rich, spiced makhani sauce with mozzarella, paneer, green chillies and a hint of fresh ginger.",
    "imagePath": "/assets/pizza/butter-paneer-pizza.avif",
    "addons": [
      {
        "id": "a-14-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-14-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-15",
    "name": "Butter Paneer - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 645,
    "description": "Rich, spiced makhani sauce with mozzarella, paneer, green chillies and a hint of fresh ginger.",
    "imagePath": "/assets/pizza/butter-paneer-pizza.avif",
    "addons": [
      {
        "id": "a-15-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-15-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-16",
    "name": "Butter Paneer - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 620,
    "description": "Rich, spiced makhani sauce with mozzarella, paneer, green chillies and a hint of fresh ginger.",
    "imagePath": "/assets/pizza/butter-paneer-pizza.avif",
    "addons": [
      {
        "id": "a-16-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-16-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-17",
    "name": "Spicy Paneer - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 325,
    "description": "Mozzarella, marinated peri-peri paneer, spicy jalapeños and red onions over a bold, fiery marinara base.",
    "imagePath": "/assets/pizza/spicy-paneer.avif",
    "addons": [
      {
        "id": "a-17-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-17-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "it-dish-18",
    "name": "Spicy Paneer - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 645,
    "description": "Mozzarella, marinated peri-peri paneer, spicy jalapeños and red onions over a bold, fiery marinara base.",
    "imagePath": "/assets/pizza/spicy-paneer.avif",
    "addons": [
      {
        "id": "a-18-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-18-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "it-dish-19",
    "name": "Spicy Paneer - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 620,
    "description": "Mozzarella, marinated peri-peri paneer, spicy jalapeños and red onions over a bold, fiery marinara base.",
    "imagePath": "/assets/pizza/spicy-paneer.avif",
    "addons": [
      {
        "id": "a-19-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-19-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "it-dish-20",
    "name": "Sun & Rocket - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 325,
    "description": "Mozzarella, tangy sun-dried tomatoes, garlic and peppery rocket over a classic red sauce, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/sun-rocket.avif",
    "addons": [
      {
        "id": "a-20-1",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-21",
    "name": "Sun & Rocket - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 645,
    "description": "Mozzarella, tangy sun-dried tomatoes, garlic and peppery rocket over a classic red sauce, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/sun-rocket.avif",
    "addons": [
      {
        "id": "a-21-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-22",
    "name": "Sun & Rocket - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 620,
    "description": "Mozzarella, tangy sun-dried tomatoes, garlic and peppery rocket over a classic red sauce, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/sun-rocket.avif",
    "addons": [
      {
        "id": "a-22-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-23",
    "name": "Panfire Loaded Vegetables - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 325,
    "description": "Marinara and mozzarella topped with button mushrooms, cherry tomatoes, mixed bell peppers and grilled zucchini, then finished with crumbled feta and fresh basil.",
    "imagePath": "/assets/pizza/panfire-loaded-vegetables.avif",
    "addons": [
      {
        "id": "a-23-1",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-24",
    "name": "Panfire Loaded Vegetables - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 645,
    "description": "Marinara and mozzarella topped with button mushrooms, cherry tomatoes, mixed bell peppers and grilled zucchini, then finished with crumbled feta and fresh basil.",
    "imagePath": "/assets/pizza/panfire-loaded-vegetables.avif",
    "addons": [
      {
        "id": "a-24-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-25",
    "name": "Panfire Loaded Vegetables - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 620,
    "description": "Marinara and mozzarella topped with button mushrooms, cherry tomatoes, mixed bell peppers and grilled zucchini, then finished with crumbled feta and fresh basil.",
    "imagePath": "/assets/pizza/panfire-loaded-vegetables.avif",
    "addons": [
      {
        "id": "a-25-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-26",
    "name": "Spicy Mushroom - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 325,
    "description": "Mozzarella, earthy button mushrooms, spicy red paprika and red onions over a fiery peri-peri marinara base.",
    "imagePath": "/assets/pizza/spicy-mushroom.avif",
    "addons": [
      {
        "id": "a-26-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-26-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "it-dish-27",
    "name": "Spicy Mushroom - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 645,
    "description": "Mozzarella, earthy button mushrooms, spicy red paprika and red onions over a fiery peri-peri marinara base.",
    "imagePath": "/assets/pizza/spicy-mushroom.avif",
    "addons": [
      {
        "id": "a-27-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-27-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "it-dish-28",
    "name": "Spicy Mushroom - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 620,
    "description": "Mozzarella, earthy button mushrooms, spicy red paprika and red onions over a fiery peri-peri marinara base.",
    "imagePath": "/assets/pizza/spicy-mushroom.avif",
    "addons": [
      {
        "id": "a-28-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-28-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "it-dish-29",
    "name": "Hawaiian - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 325,
    "description": "Mozzarella, juicy pineapple, sweet corn and hot jalapeños over a classic marinara base.",
    "imagePath": "/assets/pizza/hawaiian-pizza.avif",
    "addons": [
      {
        "id": "a-29-1",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-30",
    "name": "Hawaiian - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 645,
    "description": "Mozzarella, juicy pineapple, sweet corn and hot jalapeños over a classic marinara base.",
    "imagePath": "/assets/pizza/hawaiian-pizza.avif",
    "addons": [
      {
        "id": "a-30-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-31",
    "name": "Hawaiian - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 620,
    "description": "Mozzarella, juicy pineapple, sweet corn and hot jalapeños over a classic marinara base.",
    "imagePath": "/assets/pizza/hawaiian-pizza.avif",
    "addons": [
      {
        "id": "a-31-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-32",
    "name": "Pesto Paneer - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 345,
    "description": "Classic red sauce and melted mozzarella topped with paneer, finished with a vibrant basil pesto drizzle.",
    "imagePath": "/assets/pizza/pesto-paneer.avif",
    "addons": [
      {
        "id": "a-32-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-32-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-33",
    "name": "Pesto Paneer - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 670,
    "description": "Classic red sauce and melted mozzarella topped with paneer, finished with a vibrant basil pesto drizzle.",
    "imagePath": "/assets/pizza/pesto-paneer.avif",
    "addons": [
      {
        "id": "a-33-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-33-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-34",
    "name": "Pesto Paneer - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 640,
    "description": "Classic red sauce and melted mozzarella topped with paneer, finished with a vibrant basil pesto drizzle.",
    "imagePath": "/assets/pizza/pesto-paneer.avif",
    "addons": [
      {
        "id": "a-34-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-34-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-35",
    "name": "Burrata - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 440,
    "description": "Creamy white base with mozzarella, burrata, sweet cherry tomatoes and caramelized onions.",
    "imagePath": "/assets/pizza/burrata-pizza.avif",
    "addons": [
      {
        "id": "a-35-1",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-36",
    "name": "Burrata - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 845,
    "description": "Creamy white base with mozzarella, burrata, sweet cherry tomatoes and caramelized onions.",
    "imagePath": "/assets/pizza/burrata-pizza.avif",
    "addons": [
      {
        "id": "a-36-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-37",
    "name": "Burrata - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 795,
    "description": "Creamy white base with mozzarella, burrata, sweet cherry tomatoes and caramelized onions.",
    "imagePath": "/assets/pizza/burrata-pizza.avif",
    "addons": [
      {
        "id": "a-37-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-38",
    "name": "Truffle Mushroom - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 440,
    "description": "Mozzarella, shiitake and button mushrooms over a creamy white base, finished with a drizzle of white truffle oil.",
    "imagePath": "/assets/pizza/truffle-mushroom.avif",
    "addons": [
      {
        "id": "a-38-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-38-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-39",
    "name": "Truffle Mushroom - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 845,
    "description": "Mozzarella, shiitake and button mushrooms over a creamy white base, finished with a drizzle of white truffle oil.",
    "imagePath": "/assets/pizza/truffle-mushroom.avif",
    "addons": [
      {
        "id": "a-39-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-39-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-40",
    "name": "Truffle Mushroom - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 795,
    "description": "Mozzarella, shiitake and button mushrooms over a creamy white base, finished with a drizzle of white truffle oil.",
    "imagePath": "/assets/pizza/truffle-mushroom.avif",
    "addons": [
      {
        "id": "a-40-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-40-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-41",
    "name": "Magic Mushroom - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 440,
    "description": "Mozzarella, earthy shiitake and button mushrooms paired with creamy goat cheese and fresh rocket, finished with a drizzle of balsamic reduction.",
    "imagePath": "/assets/pizza/magic-mushroom.avif",
    "addons": [
      {
        "id": "a-41-1",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-42",
    "name": "Magic Mushroom - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 845,
    "description": "Mozzarella, earthy shiitake and button mushrooms paired with creamy goat cheese and fresh rocket, finished with a drizzle of balsamic reduction.",
    "imagePath": "/assets/pizza/magic-mushroom.avif",
    "addons": [
      {
        "id": "a-42-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-43",
    "name": "Magic Mushroom - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 795,
    "description": "Mozzarella, earthy shiitake and button mushrooms paired with creamy goat cheese and fresh rocket, finished with a drizzle of balsamic reduction.",
    "imagePath": "/assets/pizza/magic-mushroom.avif",
    "addons": [
      {
        "id": "a-43-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-44",
    "name": "4 Cheese - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 520,
    "description": "An indulgent, rich blend of mozzarella, fresh bocconcini, parmesan and creamy goat cheese.",
    "imagePath": "/assets/pizza/4-cheese.avif",
    "addons": [
      {
        "id": "a-44-1",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-45",
    "name": "4 Cheese - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 995,
    "description": "An indulgent, rich blend of mozzarella, fresh bocconcini, parmesan and creamy goat cheese.",
    "imagePath": "/assets/pizza/4-cheese.avif",
    "addons": [
      {
        "id": "a-45-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-46",
    "name": "4 Cheese - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 945,
    "description": "An indulgent, rich blend of mozzarella, fresh bocconcini, parmesan and creamy goat cheese.",
    "imagePath": "/assets/pizza/4-cheese.avif",
    "addons": [
      {
        "id": "a-46-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-47",
    "name": "3 Cheese Asparagus Pesto - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 520,
    "description": "Vibrant basil pesto base with tender asparagus, mozzarella, rich burrata, rocket leaves and parmesan, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/3-cheese-asparagus-pesto.avif",
    "addons": [
      {
        "id": "a-47-1",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-48",
    "name": "3 Cheese Asparagus Pesto - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 995,
    "description": "Vibrant basil pesto base with tender asparagus, mozzarella, rich burrata, rocket leaves and parmesan, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/3-cheese-asparagus-pesto.avif",
    "addons": [
      {
        "id": "a-48-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-49",
    "name": "3 Cheese Asparagus Pesto - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 945,
    "description": "Vibrant basil pesto base with tender asparagus, mozzarella, rich burrata, rocket leaves and parmesan, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/3-cheese-asparagus-pesto.avif",
    "addons": [
      {
        "id": "a-49-1",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-50",
    "name": "Panfire Overload Chicken - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 345,
    "description": "Classic marinara and melted mozzarella topped with grilled chicken, smoked chicken and chicken sausage.",
    "imagePath": "/assets/pizza/panfire-overload-chicken.avif",
    "addons": [
      {
        "id": "a-50-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-50-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-51",
    "name": "Panfire Overload Chicken - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 670,
    "description": "Classic marinara and melted mozzarella topped with grilled chicken, smoked chicken and chicken sausage.",
    "imagePath": "/assets/pizza/panfire-overload-chicken.avif",
    "addons": [
      {
        "id": "a-51-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-51-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-52",
    "name": "Panfire Overload Chicken - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 640,
    "description": "Classic marinara and melted mozzarella topped with grilled chicken, smoked chicken and chicken sausage.",
    "imagePath": "/assets/pizza/panfire-overload-chicken.avif",
    "addons": [
      {
        "id": "a-52-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-52-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-53",
    "name": "Panfire Four Meat - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 440,
    "description": "Classic marinara and melted mozzarella topped with bacon, smoked chicken, chicken sausage and chicken pepperoni.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-53-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-53-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-54",
    "name": "Panfire Four Meat - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 845,
    "description": "Classic marinara and melted mozzarella topped with bacon, smoked chicken, chicken sausage and chicken pepperoni.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-54-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-54-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-55",
    "name": "Panfire Four Meat - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 795,
    "description": "Classic marinara and melted mozzarella topped with bacon, smoked chicken, chicken sausage and chicken pepperoni.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-55-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-55-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-56",
    "name": "Chicken Pepperoni - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 345,
    "description": "Classic marinara layered with melted mozzarella, chicken pepperoni and spicy jalapeños.",
    "imagePath": "/assets/pizza/chicken-pepperoni.avif",
    "addons": [
      {
        "id": "a-56-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-56-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-57",
    "name": "Chicken Pepperoni - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 670,
    "description": "Classic marinara layered with melted mozzarella, chicken pepperoni and spicy jalapeños.",
    "imagePath": "/assets/pizza/chicken-pepperoni.avif",
    "addons": [
      {
        "id": "a-57-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-57-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-58",
    "name": "Chicken Pepperoni - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 640,
    "description": "Classic marinara layered with melted mozzarella, chicken pepperoni and spicy jalapeños.",
    "imagePath": "/assets/pizza/chicken-pepperoni.avif",
    "addons": [
      {
        "id": "a-58-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-58-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-59",
    "name": "Panfire Pollo - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 520,
    "description": "Smoked chicken, earthy button mushrooms and caramelised onions over classic marinara and mozzarella, finished with creamy goat cheese.",
    "imagePath": "/assets/pizza/panfire-pollo.avif",
    "addons": [
      {
        "id": "a-59-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-59-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-60",
    "name": "Panfire Pollo - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 995,
    "description": "Smoked chicken, earthy button mushrooms and caramelised onions over classic marinara and mozzarella, finished with creamy goat cheese.",
    "imagePath": "/assets/pizza/panfire-pollo.avif",
    "addons": [
      {
        "id": "a-60-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-60-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-61",
    "name": "Panfire Pollo - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 945,
    "description": "Smoked chicken, earthy button mushrooms and caramelised onions over classic marinara and mozzarella, finished with creamy goat cheese.",
    "imagePath": "/assets/pizza/panfire-pollo.avif",
    "addons": [
      {
        "id": "a-61-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-61-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-62",
    "name": "Butter Chicken - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 345,
    "description": "Grilled butter chicken over a rich makhani sauce and mozzarella, finished with fresh coriander, green chillies and ginger.",
    "imagePath": "/assets/pizza/butter-chicken-pizza.avif",
    "addons": [
      {
        "id": "a-62-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-62-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-63",
    "name": "Butter Chicken - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 670,
    "description": "Grilled butter chicken over a rich makhani sauce and mozzarella, finished with fresh coriander, green chillies and ginger.",
    "imagePath": "/assets/pizza/butter-chicken-pizza.avif",
    "addons": [
      {
        "id": "a-63-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-63-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-64",
    "name": "Butter Chicken - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 640,
    "description": "Grilled butter chicken over a rich makhani sauce and mozzarella, finished with fresh coriander, green chillies and ginger.",
    "imagePath": "/assets/pizza/butter-chicken-pizza.avif",
    "addons": [
      {
        "id": "a-64-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-64-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-65",
    "name": "Grilled Chicken & Roasted Peppers - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 345,
    "description": "Grilled chicken, roasted bell peppers and red onions over classic marinara and melted mozzarella, finished with a touch of red paprika.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-65-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-65-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-66",
    "name": "Grilled Chicken & Roasted Peppers - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 670,
    "description": "Grilled chicken, roasted bell peppers and red onions over classic marinara and melted mozzarella, finished with a touch of red paprika.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-66-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-66-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-67",
    "name": "Grilled Chicken & Roasted Peppers - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 640,
    "description": "Grilled chicken, roasted bell peppers and red onions over classic marinara and melted mozzarella, finished with a touch of red paprika.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-67-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-67-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-68",
    "name": "Pesto Smoked Chicken & Rocket - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 440,
    "description": "Smoked chicken and mozzarella topped with fresh rocket, basil pesto and a balsamic drizzle.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-68-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-68-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-69",
    "name": "Pesto Smoked Chicken & Rocket - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 845,
    "description": "Smoked chicken and mozzarella topped with fresh rocket, basil pesto and a balsamic drizzle.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-69-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-69-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-70",
    "name": "Pesto Smoked Chicken & Rocket - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 795,
    "description": "Smoked chicken and mozzarella topped with fresh rocket, basil pesto and a balsamic drizzle.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-70-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-70-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-71",
    "name": "Smoked Chicken Paprika - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 345,
    "description": "Smoked chicken, red onions and sliced paprika over classic marinara and melted mozzarella.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-71-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-71-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-72",
    "name": "Smoked Chicken Paprika - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 670,
    "description": "Smoked chicken, red onions and sliced paprika over classic marinara and melted mozzarella.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-72-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-72-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-73",
    "name": "Smoked Chicken Paprika - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 640,
    "description": "Smoked chicken, red onions and sliced paprika over classic marinara and melted mozzarella.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-73-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-73-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-74",
    "name": "Grilled Chicken, Spinach & Mushroom - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 345,
    "description": "Creamy white sauce layered with melted mozzarella, grilled chicken, sautéed spinach and earthy mushrooms.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-74-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-74-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-75",
    "name": "Grilled Chicken, Spinach & Mushroom - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 670,
    "description": "Creamy white sauce layered with melted mozzarella, grilled chicken, sautéed spinach and earthy mushrooms.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-75-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-75-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-76",
    "name": "Grilled Chicken, Spinach & Mushroom - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 640,
    "description": "Creamy white sauce layered with melted mozzarella, grilled chicken, sautéed spinach and earthy mushrooms.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-76-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-76-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-77",
    "name": "Bacon - Neapolitan Pizza - Small",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Small)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 345,
    "description": "Bacon and caramelised onions over a creamy white sauce and melted mozzarella.",
    "imagePath": "/assets/pizza/bacon-pizza.avif",
    "addons": [
      {
        "id": "a-77-1",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "a-77-2",
        "name": "Extra Cheese",
        "price": 70
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-78",
    "name": "Bacon - Neapolitan Pizza - Large",
    "mainCategory": "ITALIAN",
    "category": "Neapolitan Pizzas (Large)",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 670,
    "description": "Bacon and caramelised onions over a creamy white sauce and melted mozzarella.",
    "imagePath": "/assets/pizza/bacon-pizza.avif",
    "addons": [
      {
        "id": "a-78-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-78-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-79",
    "name": "Bacon - Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 640,
    "description": "Bacon and caramelised onions over a creamy white sauce and melted mozzarella.",
    "imagePath": "/assets/pizza/bacon-pizza.avif",
    "addons": [
      {
        "id": "a-79-1",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "a-79-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-80",
    "name": "Loaded Vegetables Deep Dish Pizza",
    "mainCategory": "ITALIAN",
    "category": "Deep Dish Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 695,
    "description": "Stuffing: Mixed bell peppers, sun-dried tomatoes and jalapeños. Topping: Marinara, parmesan and basil.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-33-1",
    "name": "Ultimate Mushroom Deep Dish Pizza",
    "mainCategory": "ITALIAN",
    "category": "Deep Dish Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 745,
    "description": "Stuffing: Mushrooms and red onion. Topping: Marinara, parmesan and basil.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-34-1",
    "name": "Pepperoni Melt Deep Dish Pizza",
    "mainCategory": "ITALIAN",
    "category": "Deep Dish Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 845,
    "description": "Stuffing: Chicken pepperoni. Topping: Marinara, parmesan and basil.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-35-1",
    "name": "Panfire Overload Chicken Deep Dish Pizza",
    "mainCategory": "ITALIAN",
    "category": "Deep Dish Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 845,
    "description": "Stuffing: Grilled chicken, smoked chicken and chicken sausage. Topping: Marinara, parmesan and basil.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-36-1",
    "name": "Panfire Four Meat Deep Dish Pizza",
    "mainCategory": "ITALIAN",
    "category": "Deep Dish Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 845,
    "description": "Stuffing: Bacon, smoked chicken, chicken sausage and chicken pepperoni. Topping: Marinara, parmesan and basil.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-37-1",
    "name": "Peri-Peri Paneer Indie Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 445,
    "description": "Marinara, peri-peri paneer and red onion.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "it-dish-38-1",
    "name": "Mushroom Delight Indie Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 445,
    "description": "Marinara, mushrooms and red onion.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-39-1",
    "name": "Veggie Delight Indie Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 445,
    "description": "Marinara, bell peppers, red onion and black olives.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-40-1",
    "name": "Tandoori Chicken Indie Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 495,
    "description": "Marinara, tandoori chicken and red onion.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-41-1",
    "name": "Chicken Sausage Indie Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 495,
    "description": "Marinara and chicken sausage.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-42-1",
    "name": "Fully Loaded Indie Thin Crust Pizza",
    "mainCategory": "ITALIAN",
    "category": "Thin Crust Pizzas",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 495,
    "description": "Marinara, chicken sausage and grilled chicken.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-43-1",
    "name": "Arrabbiata Pasta",
    "mainCategory": "ITALIAN",
    "category": "Artisanal Pastas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 365,
    "description": "Fiery San Marzano tomato sauce tossed with fresh capsicum, broccoli and zucchini.",
    "imagePath": "/assets/pasta/arrabbiata-pasta.avif",
    "variants": [
      {
        "id": "v-43-1",
        "name": "Penne",
        "price": 365
      }
    ],
    "addons": [
      {
        "id": "a-43-1",
        "name": "Spaghetti / Add Grilled Chicken",
        "price": 50
      },
      {
        "id": "a-43-2",
        "name": "Penne / Add Grilled Chicken",
        "price": 50
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-44-1",
    "name": "Alfredo Pasta",
    "mainCategory": "ITALIAN",
    "category": "Artisanal Pastas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 365,
    "description": "Velvety parmesan cream sauce tossed with garlic-herb sautéed mushrooms.",
    "imagePath": "/assets/pasta/alfredo-pasta.avif",
    "variants": [
      {
        "id": "v-44-1",
        "name": "Penne",
        "price": 365
      }
    ],
    "addons": [
      {
        "id": "a-44-1",
        "name": "Spaghetti / Add Grilled Chicken",
        "price": 50
      },
      {
        "id": "a-44-2",
        "name": "Penne / Add Grilled Chicken",
        "price": 50
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-45-1",
    "name": "Pesto Pasta",
    "mainCategory": "ITALIAN",
    "category": "Artisanal Pastas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 365,
    "description": "Vibrant house-made basil pesto tossed with bell peppers, broccoli and zucchini.",
    "imagePath": "",
    "variants": [
      {
        "id": "v-45-1",
        "name": "Penne",
        "price": 365
      }
    ],
    "addons": [
      {
        "id": "a-45-1",
        "name": "Spaghetti / Add Grilled Chicken",
        "price": 50
      },
      {
        "id": "a-45-2",
        "name": "Penne / Add Grilled Chicken",
        "price": 50
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-46-1",
    "name": "Aglio e Olio Pasta",
    "mainCategory": "ITALIAN",
    "category": "Artisanal Pastas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 365,
    "description": "Spaghetti tossed in extra-virgin olive oil, garlic, sun-dried tomatoes and black olives.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-46-1",
        "name": "Add Grilled Chicken",
        "price": 50
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-47-1",
    "name": "Rosé Pasta",
    "mainCategory": "ITALIAN",
    "category": "Artisanal Pastas",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 365,
    "description": "A creamy blend of white sauce and tangy tomato sauce, tossed with fresh garden vegetables.",
    "imagePath": "",
    "variants": [
      {
        "id": "v-47-1",
        "name": "Penne",
        "price": 365
      }
    ],
    "addons": [
      {
        "id": "a-47-1",
        "name": "Spaghetti / Add Grilled Chicken",
        "price": 50
      },
      {
        "id": "a-47-2",
        "name": "Penne / Add Grilled Chicken",
        "price": 50
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-48-1",
    "name": "Loaded Vegetables Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Napoli Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 295,
    "description": "Handcrafted vegetarian napoli sandwiches prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/napoli-sandwiches/loaded-vegetables-sandwich.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-49-1",
    "name": "Sun-Dried Tomato Pesto Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Napoli Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 345,
    "description": "Handcrafted vegetarian napoli sandwiches prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-50-1",
    "name": "Pesto Paneer Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Napoli Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 345,
    "description": "Handcrafted vegetarian napoli sandwiches prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-51-1",
    "name": "Mushroom & Cheese Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Napoli Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 345,
    "description": "Handcrafted vegetarian napoli sandwiches prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-52-1",
    "name": "Caprese Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Napoli Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 395,
    "description": "Handcrafted vegetarian napoli sandwiches prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/napoli-sandwiches/caprese-sandwich.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-53-1",
    "name": "Ham & Cheese Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Napoli Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 375,
    "description": "Handcrafted  napoli sandwiches prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-54-1",
    "name": "Pulled Chicken Pesto Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Napoli Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 395,
    "description": "Handcrafted  napoli sandwiches prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-55-1",
    "name": "Grilled Chicken Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Napoli Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 375,
    "description": "Handcrafted  napoli sandwiches prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-56-1",
    "name": "Bacon & Eggs Sandwich",
    "mainCategory": "ITALIAN",
    "category": "Napoli Sandwiches",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 375,
    "description": "Handcrafted  napoli sandwiches prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-57-1",
    "name": "Garlic Bread with Cheese",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 295,
    "description": "Handcrafted vegetarian garlic breads prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/garlic-bread/garlic-bread-with-cheese.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-59-1",
    "name": "Mushroom & Cheese Garlic Bread",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 345,
    "description": "Handcrafted vegetarian garlic breads prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-61-1",
    "name": "Pesto & Sun-Dried Tomato Garlic Bread",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": true,
    "price": 345,
    "description": "Handcrafted vegetarian garlic breads prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-63-1",
    "name": "Bacon & Mushroom Garlic Bread",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 375,
    "description": "Handcrafted  garlic breads prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "it-dish-65-1",
    "name": "Chicken Pepperoni Garlic Bread",
    "mainCategory": "ITALIAN",
    "category": "Garlic Breads",
    "broadCategory": "ITALIAN",
    "isVeg": false,
    "price": 375,
    "description": "Handcrafted  garlic breads prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-67",
    "name": "Classic Fries",
    "mainCategory": "MEXICAN",
    "category": "Sides & Bites",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 195,
    "description": "Handcrafted vegetarian sides & bites prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/mexican-appetisers/classic-fries.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-68",
    "name": "Peri-Peri Fries",
    "mainCategory": "MEXICAN",
    "category": "Sides & Bites",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 215,
    "description": "Handcrafted vegetarian sides & bites prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/mexican-appetisers/peri-peri-fries.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "mex-dish-69",
    "name": "Parmesan Fries",
    "mainCategory": "MEXICAN",
    "category": "Sides & Bites",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 245,
    "description": "Handcrafted vegetarian sides & bites prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/mexican-appetisers/parmesan-fries.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-70",
    "name": "Chicken Popcorn",
    "mainCategory": "MEXICAN",
    "category": "Sides & Bites",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 275,
    "description": "Handcrafted  sides & bites prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/mexican-appetisers/chicken-popcorn.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-71",
    "name": "Chicken Strips",
    "mainCategory": "MEXICAN",
    "category": "Sides & Bites",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 285,
    "description": "Handcrafted  sides & bites prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/mexican-appetisers/chicken-strips.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-78",
    "name": "Crispy Spicy Mushroom Burrito Wrap",
    "mainCategory": "MEXICAN",
    "category": "Burrito Wraps",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 325,
    "description": "Handcrafted vegetarian burrito wraps prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "mex-dish-79",
    "name": "Spicy Grilled Paneer Burrito Wrap",
    "mainCategory": "MEXICAN",
    "category": "Burrito Wraps",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 325,
    "description": "Handcrafted vegetarian burrito wraps prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "mex-dish-81",
    "name": "Egg & Bacon Burrito Wrap",
    "mainCategory": "MEXICAN",
    "category": "Burrito Wraps",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 345,
    "description": "Handcrafted  burrito wraps prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-82",
    "name": "Spicy Grilled Chicken Burrito Wrap",
    "mainCategory": "MEXICAN",
    "category": "Burrito Wraps",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 345,
    "description": "Handcrafted  burrito wraps prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "mex-dish-86",
    "name": "Crispy Chipotle Chicken Burger",
    "mainCategory": "MEXICAN",
    "category": "Burgers",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 295,
    "description": "Handcrafted  burgers prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-88",
    "name": "Grilled Spicy Paneer Tacos",
    "mainCategory": "MEXICAN",
    "category": "Tacos",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 325,
    "description": "Handcrafted vegetarian tacos prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "mex-dish-89",
    "name": "Corn & Cheese Tacos",
    "mainCategory": "MEXICAN",
    "category": "Tacos",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 325,
    "description": "Handcrafted vegetarian tacos prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-90",
    "name": "Crispy Spicy Paneer Tacos",
    "mainCategory": "MEXICAN",
    "category": "Tacos",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 325,
    "description": "Handcrafted vegetarian tacos prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "mex-dish-91",
    "name": "Grilled Chicken Tacos",
    "mainCategory": "MEXICAN",
    "category": "Tacos",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 345,
    "description": "Handcrafted  tacos prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-92",
    "name": "Crispy Spicy Chicken Tacos",
    "mainCategory": "MEXICAN",
    "category": "Tacos",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 345,
    "description": "Handcrafted  tacos prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "mex-dish-93",
    "name": "Baked Veg Nachos",
    "mainCategory": "MEXICAN",
    "category": "Nachos & Sides",
    "broadCategory": "MEXICAN",
    "isVeg": true,
    "price": 325,
    "description": "Handcrafted vegetarian nachos & sides prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/nachos/baked-veg-nachos.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-94",
    "name": "Baked Chicken Nachos",
    "mainCategory": "MEXICAN",
    "category": "Nachos & Sides",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 345,
    "description": "Handcrafted  nachos & sides prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/nachos/baked-chicken-nachos.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-95",
    "name": "Chicken Cheese",
    "mainCategory": "MEXICAN",
    "category": "Hot Dogs",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 295,
    "description": "Handcrafted  hot dogs prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-95-1",
        "name": "Sautéed mushrooms",
        "price": 60
      },
      {
        "id": "a-95-2",
        "name": "Caramelised onions",
        "price": 40
      },
      {
        "id": "a-95-3",
        "name": "Sun-dried tomatoes",
        "price": 40
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-96",
    "name": "Peri-Peri Chicken",
    "mainCategory": "MEXICAN",
    "category": "Hot Dogs",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 295,
    "description": "Handcrafted  hot dogs prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/sushi/peri-peri-chicken-sushi.webp",
    "addons": [
      {
        "id": "a-96-1",
        "name": "Sautéed mushrooms",
        "price": 60
      },
      {
        "id": "a-96-2",
        "name": "Caramelised onions",
        "price": 40
      },
      {
        "id": "a-96-3",
        "name": "Sun-dried tomatoes",
        "price": 40
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "mex-dish-97",
    "name": "Makhni Chicken",
    "mainCategory": "MEXICAN",
    "category": "Hot Dogs",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 295,
    "description": "Handcrafted  hot dogs prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-97-1",
        "name": "Sautéed mushrooms",
        "price": 60
      },
      {
        "id": "a-97-2",
        "name": "Caramelised onions",
        "price": 40
      },
      {
        "id": "a-97-3",
        "name": "Sun-dried tomatoes",
        "price": 40
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "mex-dish-98",
    "name": "Pesto Chicken",
    "mainCategory": "MEXICAN",
    "category": "Hot Dogs",
    "broadCategory": "MEXICAN",
    "isVeg": false,
    "price": 295,
    "description": "Handcrafted  hot dogs prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-98-1",
        "name": "Sautéed mushrooms",
        "price": 60
      },
      {
        "id": "a-98-2",
        "name": "Caramelised onions",
        "price": 40
      },
      {
        "id": "a-98-3",
        "name": "Sun-dried tomatoes",
        "price": 40
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "bev-dish-101",
    "name": "Strawberry Shake",
    "mainCategory": "BEVERAGES",
    "category": "Beverages",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 175,
    "description": "Handcrafted vegetarian beverages prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/beverages/strawberry-shake.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "bev-dish-105",
    "name": "Cold Coffee",
    "mainCategory": "BEVERAGES",
    "category": "Beverages",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 195,
    "description": "Handcrafted vegetarian beverages prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/beverages/cold-coffee.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "bev-dish-106",
    "name": "Blueberry Shake",
    "mainCategory": "BEVERAGES",
    "category": "Beverages",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 195,
    "description": "Handcrafted vegetarian beverages prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/beverages/blueberry-shake.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "bev-dish-107",
    "name": "Oreo Shake",
    "mainCategory": "BEVERAGES",
    "category": "Beverages",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 195,
    "description": "Handcrafted vegetarian beverages prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/beverages/oreo-shake.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "bev-dish-108",
    "name": "KitKat Shake",
    "mainCategory": "BEVERAGES",
    "category": "Beverages",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 195,
    "description": "Handcrafted vegetarian beverages prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/beverages/kitkat-shake.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "bev-dish-109",
    "name": "Cold Drink",
    "mainCategory": "BEVERAGES",
    "category": "Beverages",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 75,
    "description": "Handcrafted vegetarian beverages prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "bev-dish-110",
    "name": "Water Bottle",
    "mainCategory": "BEVERAGES",
    "category": "Beverages",
    "broadCategory": "BEVERAGES",
    "isVeg": true,
    "price": 0,
    "description": "Handcrafted vegetarian beverages prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "des-dish-111",
    "name": "Brownie with Ice Cream",
    "mainCategory": "DESSERTS",
    "category": "Desserts",
    "broadCategory": "DESSERTS",
    "isVeg": true,
    "price": 250,
    "description": "Brownie, served with classic vanilla Ice cream",
    "imagePath": "/assets/desserts/brownie-with-ice-cream.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "des-dish-112",
    "name": "Churros",
    "mainCategory": "DESSERTS",
    "category": "Desserts",
    "broadCategory": "DESSERTS",
    "isVeg": true,
    "price": 250,
    "description": "6 pcs Churros, served with chocolate sauce",
    "imagePath": "/assets/desserts/churros.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-1",
    "name": "Manchow Soup",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 175,
    "description": "Handcrafted vegetarian soups prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/soups/manchow-soup.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-4",
    "name": "Tom Kha Soup",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 215,
    "description": "Creamy Thai coconut broth with galangal, lemongrass and kaffir lime leaves.",
    "imagePath": "/assets/soups/tom-kha-soup.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-7",
    "name": "Sweet Corn Soup",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 145,
    "description": "Handcrafted vegetarian soups prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/soups/sweet-corn-soup.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-10",
    "name": "Hot & Sour Soup",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 175,
    "description": "Handcrafted vegetarian soups prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-13",
    "name": "Tom Yum Soup",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 175,
    "description": "Hot and sour Thai broth with lemongrass and kaffir lime leaves.",
    "imagePath": "/assets/soups/tom-yum-soup.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-16",
    "name": "Lemon Coriander Soup",
    "mainCategory": "ASIAN",
    "category": "Soups",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 145,
    "description": "Handcrafted vegetarian soups prepared fresh in our kitchen with premium culinary ingredients.",
    "imagePath": "/assets/soups/lemon-coriander-soup.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-19",
    "name": "Mushroom & Cheese Dim Sum",
    "mainCategory": "ASIAN",
    "category": "Dim Sums",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 340,
    "description": "Mushrooms and carrot blended with cream cheese. 6 pieces per serving.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-22",
    "name": "Paneer Bok Choy Dim Sum",
    "mainCategory": "ASIAN",
    "category": "Dim Sums",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 340,
    "description": "Paneer, bok choy, ginger and chilli. 6 pieces per serving.",
    "imagePath": "/assets/dim-sums/paneer-bok-choy-dim-sum.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-23",
    "name": "Spicy Cheesy Chicken Dim Sum",
    "mainCategory": "ASIAN",
    "category": "Dim Sums",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 380,
    "description": "Minced chicken with cream cheese, coriander, spring onion and chilli oil. 6 pieces per serving.",
    "imagePath": "/assets/dim-sums/spicy-cheesy-chicken-dim-sum.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "as-dish-24",
    "name": "Classic Chicken Dim Sum",
    "mainCategory": "ASIAN",
    "category": "Dim Sums",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 350,
    "description": "Minced chicken, spring onion, sesame oil and mild seasoning. 6 pieces per serving.",
    "imagePath": "/assets/dim-sums/classic-chicken-dim-sum.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-25",
    "name": "Vegetable Momos",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 190,
    "description": "6 pieces per serving.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-26",
    "name": "Vegetable & Cheese Momos",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 220,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/vegetable-cheese-momos.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-27",
    "name": "Vegetable Gyoza",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 220,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/vegetable-gyoza.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-28",
    "name": "Chicken Momos",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 230,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/chicken-momos.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-29",
    "name": "Chicken & Cheese Momos",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 250,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/chicken-cheese-momos.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-30",
    "name": "Chicken Gyoza",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 250,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/chicken-gyoza.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-31",
    "name": "Chicken Wontons",
    "mainCategory": "ASIAN",
    "category": "Momos & Gyozas",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 300,
    "description": "6 pieces per serving.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-33",
    "name": "Cantonese Mushrooms Bao",
    "mainCategory": "ASIAN",
    "category": "Baos",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 285,
    "description": "Crispy chilli mushrooms with a creamy chilli mayo filling. 2 pieces per serving.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-34",
    "name": "Prawn Frier Cracker Bao",
    "mainCategory": "ASIAN",
    "category": "Baos",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 495,
    "description": "Fried prawns with spicy mayo and wasabi mayo. 2 pieces per serving.",
    "imagePath": "/assets/bao/prawn-frier-cracker-bao.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-37",
    "name": "Korean Chicken Bao",
    "mainCategory": "ASIAN",
    "category": "Baos",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 345,
    "description": "Crispy chicken glazed in a spicy Korean sauce, layered with lettuce. 2 pieces per serving.",
    "imagePath": "/assets/bao/korean-chicken-bao.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-39",
    "name": "California Veg Sushi - 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 315,
    "description": "Cucumber, avocado, carrot and Japanese mayo.",
    "imagePath": "/assets/sushi/california-veg-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-40",
    "name": "California Veg Sushi - 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 545,
    "description": "Cucumber, avocado, carrot and Japanese mayo.",
    "imagePath": "/assets/sushi/california-veg-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-41",
    "name": "Avocado & Cream Cheese Sushi- 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 345,
    "description": "Avocado, jalapeño, sesame seeds and cream cheese.",
    "imagePath": "/assets/sushi/avocado-and-cream-cheese-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-42",
    "name": "Avocado & Cream Cheese Sushi- 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 595,
    "description": "Avocado, jalapeño, sesame seeds and cream cheese.",
    "imagePath": "/assets/sushi/avocado-and-cream-cheese-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-43",
    "name": "Asparagus Tempura Sushi - 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 315,
    "description": "Crispy asparagus tempura, carrot, cucumber and spicy mayo.",
    "imagePath": "/assets/sushi/asparagus-tempura-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-44",
    "name": "Asparagus Tempura Sushi - 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 545,
    "description": "Crispy asparagus tempura, carrot, cucumber and spicy mayo.",
    "imagePath": "/assets/sushi/asparagus-tempura-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-45",
    "name": "Yasai Tempura Sushi - 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 315,
    "description": "Crispy tempura vegetables, bell peppers, wasabi mayo and tanuki.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-46",
    "name": "Yasai Tempura Sushi - 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 545,
    "description": "Crispy tempura vegetables, bell peppers, wasabi mayo and tanuki.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-47",
    "name": "Crispy Mushroom Sushi - 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 315,
    "description": "Crispy peri-peri mushroom, cucumber, avocado, carrot, teriyaki and wasabi mayo.",
    "imagePath": "/assets/sushi/yassai-tempura-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-48",
    "name": "Crispy Mushroom Sushi - 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 545,
    "description": "Crispy peri-peri mushroom, cucumber, avocado, carrot, teriyaki and wasabi mayo.",
    "imagePath": "/assets/sushi/yassai-tempura-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-49",
    "name": "Rainbow Sushi - 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 375,
    "description": "Cream cheese, beetroot, seasonal fruit and cucumber.",
    "imagePath": "/assets/sushi/rainbow-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-50",
    "name": "Rainbow Sushi - 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 645,
    "description": "Cream cheese, beetroot, seasonal fruit and cucumber.",
    "imagePath": "/assets/sushi/rainbow-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-51",
    "name": "Crispy Spinach Sushi - 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 315,
    "description": "Carrot, crispy spinach, dynamite sauce and Japanese mayo, topped with spinach crumbs.",
    "imagePath": "/assets/sushi/crispy-spinach-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-52",
    "name": "Crispy Spinach Sushi - 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 545,
    "description": "Carrot, crispy spinach, dynamite sauce and Japanese mayo, topped with spinach crumbs.",
    "imagePath": "/assets/sushi/crispy-spinach-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-53",
    "name": "American California Sushi- 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 345,
    "description": "Grilled chicken, avocado, cucumber and sesame seeds, finished with Japanese mayo and wasabi mayo.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-54",
    "name": "American California Sushi- 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 595,
    "description": "Grilled chicken, avocado, cucumber and sesame seeds, finished with Japanese mayo and wasabi mayo.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-55",
    "name": "Peri-Peri Chicken Sushi- 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 345,
    "description": "Peri-peri grilled chicken, carrot and spicy mayo.",
    "imagePath": "/assets/sushi/peri-peri-chicken-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "as-dish-56",
    "name": "Peri-Peri Chicken Sushi- 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 595,
    "description": "Peri-peri grilled chicken, carrot and spicy mayo.",
    "imagePath": "/assets/sushi/peri-peri-chicken-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "as-dish-57",
    "name": "Katsu Chicken Sushi - 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 345,
    "description": "Grilled chicken, cucumber and carrot, in a crispy tempura-fried roll served with spicy mayo.",
    "imagePath": "/assets/sushi/katsu-chicken-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-58",
    "name": "Katsu Chicken Sushi - 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 595,
    "description": "Grilled chicken, cucumber and carrot, in a crispy tempura-fried roll served with spicy mayo.",
    "imagePath": "/assets/sushi/katsu-chicken-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-59",
    "name": "Teriyaki Chicken Sushi - 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 345,
    "description": "Chicken tempura, sesame seeds, spicy mayo and teriyaki glaze.",
    "imagePath": "/assets/sushi/teriyaki-chicken-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-60",
    "name": "Teriyaki Chicken Sushi - 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 595,
    "description": "Chicken tempura, sesame seeds, spicy mayo and teriyaki glaze.",
    "imagePath": "/assets/sushi/teriyaki-chicken-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-61",
    "name": "Dragon Uramaki Sushi- 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 395,
    "description": "Prawn tempura and avocado with spicy mayo, sesame seeds and tanuki.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-62",
    "name": "Dragon Uramaki Sushi- 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 645,
    "description": "Prawn tempura and avocado with spicy mayo, sesame seeds and tanuki.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-63",
    "name": "Prawn Rock 'N' Roll Sushi- 4 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (4 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 445,
    "description": "Prawn tempura, avocado and cucumber, topped with crispy dynamite prawns, spicy mayo, teriyaki, sesame and tanuki.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-64",
    "name": "Prawn Rock 'N' Roll Sushi- 8 pieces",
    "mainCategory": "ASIAN",
    "category": "Sushi (8 Pcs)",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 895,
    "description": "Prawn tempura, avocado and cucumber, topped with crispy dynamite prawns, spicy mayo, teriyaki, sesame and tanuki.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-65",
    "name": "Salt & Pepper Corn",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 315,
    "description": "Thai-style crispy fried corn.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-66",
    "name": "Veg Cheese Corn Roll",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 345,
    "description": "Crispy rolls filled with sautéed vegetables, mozzarella and sweet corn. 6 pieces per serving.",
    "imagePath": "/assets/appetisers/veg-cheese-corn-roll.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-67",
    "name": "Chilli Potato",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 345,
    "description": "Crispy fried potatoes tossed in chilli sauce with bell peppers and spring onion.",
    "imagePath": "/assets/appetisers/chilli-potato.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "as-dish-69",
    "name": "Manchurian",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 345,
    "description": "Crispy vegetable balls in a spicy, tangy Indo-Chinese sauce.",
    "imagePath": "/assets/appetisers/manchurian.avif",
    "variants": [
      {
        "id": "v-69-1",
        "name": "Gravy",
        "price": 345
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-70",
    "name": "Chilli Paneer",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 365,
    "description": "Crispy paneer coated in a sweet-and-spicy Indo-Chinese glaze.",
    "imagePath": "/assets/appetisers/chilli-paneer.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "as-dish-72",
    "name": "Mushroom Shanghai",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 365,
    "description": "Crispy mushrooms tossed in a spicy Shanghai-style soy sauce.",
    "imagePath": "/assets/appetisers/mushroom-shanghai.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-73",
    "name": "Crispy Lotus Stem",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 365,
    "description": "Crispy lotus stem coated in a sweet-and-spicy glaze.",
    "imagePath": "/assets/appetisers/crispy-lotus-stem.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-75",
    "name": "Sautéed Veggies",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 445,
    "description": "Sautéed vegetables served in your choice of sauce.",
    "imagePath": "",
    "variants": [
      {
        "id": "v-75-1",
        "name": "Hot Garlic Sauce",
        "price": 445
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-76",
    "name": "Paneer Bok Choy",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 445,
    "description": "Paneer and crisp bok choy tossed in a light, spicy Asian garlic sauce.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-77",
    "name": "Cigar Roll",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 345,
    "description": "Crispy rolls filled with pulled chicken and melted mozzarella. 6 pieces per serving.",
    "imagePath": "/assets/appetisers/cigar-roll.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-78",
    "name": "Traditional Chicken Satay",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 345,
    "description": "Grilled chicken and bell pepper skewers in a rich, creamy peanut sauce. 3 sticks per serving.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-81",
    "name": "Wok-Tossed Chicken",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 395,
    "description": "Crispy fried chicken wok-tossed with vegetables in a spicy, tangy hot garlic sauce with a hint of sweetness.",
    "imagePath": "/assets/appetisers/wok-tossed-chicken.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-83",
    "name": "Katsu Chicken",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 395,
    "description": "Crispy fried chicken, tender on the inside, finished with teriyaki glaze, dynamite sauce and sesame seeds.",
    "imagePath": "/assets/sushi/katsu-chicken-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-84",
    "name": "Hot Garlic Prawn",
    "mainCategory": "ASIAN",
    "category": "Appetisers",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 745,
    "description": "Crispy prawns tossed in a spicy, buttery hot garlic sauce.",
    "imagePath": "/assets/appetisers/hot-garlic-prawn.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-85",
    "name": "Butter & Burnt Garlic Noodles",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 275,
    "description": "Noodles tossed with butter, garlic and crisp vegetables.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-88",
    "name": "Chilli Garlic Noodles",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 275,
    "description": "Noodles tossed with vegetables in a fragrant chilli-garlic oil.",
    "imagePath": "/assets/noodles/chilli-garlic-noodles.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 2
  },
  {
    "id": "as-dish-91",
    "name": "Schezwan Noodles",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 275,
    "description": "Noodles wok-tossed with vegetables in a spicy, tangy Schezwan sauce.",
    "imagePath": "/assets/noodles/schezwan-noodles.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-94",
    "name": "Hakka Noodles",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 245,
    "description": "Indo-Chinese noodles wok-tossed with vegetables and mild seasoning.",
    "imagePath": "/assets/noodles/hakka-noodles.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-100",
    "name": "Udon Noodles",
    "mainCategory": "ASIAN",
    "category": "Noodles",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 495,
    "description": "Thick udon noodles tossed with crunchy vegetables in your choice of spicy Korean or creamy peanut sauce.",
    "imagePath": "/assets/noodles/udon-noodles.avif",
    "variants": [
      {
        "id": "v-100-1",
        "name": "Peanut Butter Sauce",
        "price": 495
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-103",
    "name": "Thukpa",
    "mainCategory": "ASIAN",
    "category": "Noodle Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 344,
    "description": "Tibetan-style noodles and vegetables simmered in a warm, mildly spiced broth.",
    "imagePath": "/assets/noodles/thukpa.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-105",
    "name": "Ramen",
    "mainCategory": "ASIAN",
    "category": "Noodle Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 495,
    "description": "Korean-inspired noodles in a rich, flavourful broth with vegetables and sesame seeds.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-108",
    "name": "Khao Suey",
    "mainCategory": "ASIAN",
    "category": "Noodle Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 545,
    "description": "Burmese noodles in a creamy coconut broth, finished with fresh herbs, peanuts and traditional accompaniments.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-111",
    "name": "Pan-Fried Noodles",
    "mainCategory": "ASIAN",
    "category": "Noodle Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 345,
    "description": "Crispy pan-fried noodles served with vegetables in your choice of sauce.",
    "imagePath": "/assets/noodles/pan-fried-noodles.avif",
    "variants": [
      {
        "id": "v-111-1",
        "name": "Vegetarian; Burnt Garlic Sauce",
        "price": 345
      },
      {
        "id": "v-111-2",
        "name": "Vegetarian; Spicy Basil Sauce",
        "price": 345
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-114",
    "name": "Oriental Bowl",
    "mainCategory": "ASIAN",
    "category": "Noodle Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 345,
    "description": "Flavourful noodles tossed with vegetables and togarashi, served with a spicy broth.",
    "imagePath": "/assets/noodles/oriental-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-117",
    "name": "Chop Suey",
    "mainCategory": "ASIAN",
    "category": "Noodle Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 345,
    "description": "Crispy noodles topped with vegetables in a sweet, savoury and mildly spiced sauce.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-119",
    "name": "Thai Green Curry Vegetarian",
    "mainCategory": "ASIAN",
    "category": "Curries",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 365,
    "description": "A fragrant Thai green curry with coconut milk, vegetables and fresh herbs. Rice not included.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-119-1",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "a-119-2",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "a-119-3",
        "name": "Jasmine Rice",
        "price": 199
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-120",
    "name": "Thai Green Curry Chicken",
    "mainCategory": "ASIAN",
    "category": "Curries",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 425,
    "description": "A fragrant Thai green curry with coconut milk, vegetables and fresh herbs. Rice not included.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-120-1",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "a-120-2",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "a-120-3",
        "name": "Jasmine Rice",
        "price": 199
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-121",
    "name": "Thai Green Curry Prawn",
    "mainCategory": "ASIAN",
    "category": "Curries",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 645,
    "description": "A fragrant Thai green curry with coconut milk, vegetables and fresh herbs. Rice not included.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-121-1",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "a-121-2",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "a-121-3",
        "name": "Jasmine Rice",
        "price": 199
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-122",
    "name": "Thai Red Curry Vegetarian",
    "mainCategory": "ASIAN",
    "category": "Curries",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 365,
    "description": "A rich Thai red curry with coconut milk, vegetables and aromatic spices. Rice not included",
    "imagePath": "",
    "addons": [
      {
        "id": "a-122-1",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "a-122-2",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "a-122-3",
        "name": "Jasmine Rice",
        "price": 199
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-123",
    "name": "Thai Red Curry Chicken",
    "mainCategory": "ASIAN",
    "category": "Curries",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 425,
    "description": "A rich Thai red curry with coconut milk, vegetables and aromatic spices. Rice not included.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-123-1",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "a-123-2",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "a-123-3",
        "name": "Jasmine Rice",
        "price": 199
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-124",
    "name": "Thai Red Curry Prawn",
    "mainCategory": "ASIAN",
    "category": "Curries",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 645,
    "description": "A rich Thai red curry with coconut milk, vegetables and aromatic spices. Rice not included.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-124-1",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "a-124-2",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "a-124-3",
        "name": "Jasmine Rice",
        "price": 199
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-125",
    "name": "Burmese Yellow Curry Vegetarian",
    "mainCategory": "ASIAN",
    "category": "Curries",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 365,
    "description": "Rich Burmese coconut curry with mild spices. Rice not included",
    "imagePath": "",
    "addons": [
      {
        "id": "a-125-1",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "a-125-2",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "a-125-3",
        "name": "Jasmine Rice",
        "price": 199
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-126",
    "name": "Burmese Yellow Curry Chicken",
    "mainCategory": "ASIAN",
    "category": "Curries",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 425,
    "description": "Rich Burmese coconut curry with mild spices. Rice not included.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-126-1",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "a-126-2",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "a-126-3",
        "name": "Jasmine Rice",
        "price": 199
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-127",
    "name": "Burmese Yellow Curry Prawn",
    "mainCategory": "ASIAN",
    "category": "Curries",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 645,
    "description": "Rich Burmese coconut curry with mild spices. Rice not included.",
    "imagePath": "",
    "addons": [
      {
        "id": "a-127-1",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "a-127-2",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "a-127-3",
        "name": "Jasmine Rice",
        "price": 199
      }
    ],
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-128",
    "name": "Paneer Krapow",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 425,
    "description": "Thai basil, chilli and garlic wok-tossed with minced paneer, served over jasmine rice.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-129",
    "name": "Kimchi Rice Bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 445,
    "description": "Grilled paneer, corn, mushrooms and bok choy tossed in a sweet-and-spicy kimchi sauce, served with jasmine rice.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-131",
    "name": "Thai Basil Paneer & Fried Rice Bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 395,
    "description": "Fresh Thai basil and savoury aromatics wok-tossed with paneer, served with vegetable fried rice.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-133",
    "name": "Manchurian Rice Bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": true,
    "price": 375,
    "description": "Crispy vegetable Manchurian in a rich, tangy sauce, served over fried rice.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-134",
    "name": "Nasi Goreng",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 445,
    "description": "Indonesian fried rice with chicken, vegetables and a savoury peanut butter sauce, served with fried chicken and a sunny-side-up egg.",
    "imagePath": "/assets/rice-bowls/nasi-goreng.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-136",
    "name": "Katsu Chicken Rice Bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 445,
    "description": "Golden crispy chicken katsu served over jasmine rice with creamy garlic sauce and tangy ginger pickle.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  },
  {
    "id": "as-dish-138",
    "name": "Thai Pineapple, Chicken & Egg Fried Rice bowl",
    "mainCategory": "ASIAN",
    "category": "Rice Bowls",
    "broadCategory": "ASIAN",
    "isVeg": false,
    "price": 445,
    "description": "Fragrant fried rice with chicken, egg, vegetables and caramelised pineapple in a sweet-and-spicy chilli basil sauce.",
    "imagePath": "",
    "isAvailable": true,
    "isChefSpecial": false,
    "spicyLevel": 0
  }
];
