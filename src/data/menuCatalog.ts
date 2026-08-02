import { MenuItem } from '../types';

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // ITALIAN CUISINE
  // ==========================================

  // --- SALADS ---
  {
    id: 'it-sal-1',
    name: 'Caprese Salad',
    broadCategory: 'ITALIAN',
    category: 'Salads',
    isVeg: true,
    price: 365,
    description: 'Rocket leaves, freshly sliced tomatoes, bocconcini and basil pesto, finished with mild seasoning and a balsamic reduction.',
    imagePath: '/assets/SALAD/Caprese Salad.png',
    addons: [{ id: 'add-chicken-50', name: 'Caprese Grilled Chicken', price: 50 }],
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 0
  },
  {
    id: 'it-sal-2',
    name: 'Caesar Salad',
    broadCategory: 'ITALIAN',
    category: 'Salads',
    isVeg: true,
    price: 345,
    description: 'Lettuce, crunchy croutons, sautéed bell peppers and sweetcorn, tossed in a creamy mustard-mayo dressing, finished with parmesan.',
    imagePath: '/assets/SALAD/Caesar salad.png',
    addons: [{ id: 'add-chicken-50-c', name: 'Caesar Grilled Chicken', price: 50 }],
    isAvailable: true,
    spicyLevel: 0
  },
  {
    id: 'it-sal-3',
    name: 'Apple Salad',
    broadCategory: 'ITALIAN',
    category: 'Salads',
    isVeg: true,
    price: 365,
    description: 'Crisp green apple and orange slices tossed with mixed lettuce, crunchy nuts and a refreshing honey-lemon dressing.',
    imagePath: '/assets/SALAD/Apple Salad .png',
    addons: [{ id: 'add-chicken-50-a', name: 'Apple Grilled Chicken', price: 50 }],
    isAvailable: true,
    spicyLevel: 0
  },
  {
    id: 'it-sal-4',
    name: 'Watermelon Salad',
    broadCategory: 'ITALIAN',
    category: 'Salads',
    isVeg: true,
    price: 365,
    description: 'Watermelon, burrata, lettuce and feta tossed in a honey-lemon dressing.',
    imagePath: '/assets/SALAD/Watermelon Salad .png',
    addons: [{ id: 'add-chicken-50-w', name: 'Watermelon Grilled Chicken', price: 50 }],
    isAvailable: true,
    spicyLevel: 0
  },
  {
    id: 'it-sal-5',
    name: 'Rucola Burrata Salad',
    broadCategory: 'ITALIAN',
    category: 'Salads',
    isVeg: true,
    price: 445,
    description: 'Rocket leaves, cherry tomatoes, burrata and pesto tossed in a honey-balsamic dressing and finished with a delicate balsamic reduction.',
    imagePath: '/assets/SALAD/Rucola Salad .png',
    addons: [{ id: 'add-chicken-50-r', name: 'Rucola Burrata Grilled Chicken', price: 50 }],
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 0
  },

  // --- SOURDOUGH BURGERS ---
  {
    id: 'it-brg-1',
    name: 'Sourdough Smash Veggie Cheese Burger',
    broadCategory: 'ITALIAN',
    category: 'Sourdough Burgers',
    isVeg: true,
    price: 350,
    description: 'A hand-crafted potato, mushroom, corn and mozzarella patty, smashed and grilled until golden, topped with crisp lettuce, tomato, gherkins, caramelised onions and cheese, served in a freshly baked wood-fired sourdough bun.',
    imagePath: '/assets/SOURDOUGH BURGERS/Smash Veggie Cheese Sourdough Burger .png',
    isAvailable: true,
    spicyLevel: 1
  },
  {
    id: 'it-brg-2',
    name: 'Sourdough Smash Chicken Cheese Burger',
    broadCategory: 'ITALIAN',
    category: 'Sourdough Burgers',
    isVeg: false,
    price: 380,
    description: 'A hand-crafted chicken patty, smashed and grilled until golden, layered with crisp lettuce, tomato, gherkins, caramelised onions and cheese, served in a freshly baked wood-fired sourdough bun.',
    imagePath: '/assets/SOURDOUGH BURGERS/Smash Chicken Cheese Sourdough Burger .png',
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 1
  },

  // --- NEAPOLITAN & THIN CRUST PIZZAS ---
  {
    id: 'it-piz-1',
    name: 'Classic Margherita Pizza',
    broadCategory: 'ITALIAN',
    category: 'Neapolitan & Thin Crust Pizza',
    isVeg: true,
    price: 290,
    description: 'Classic San Marzano tomato sauce, mozzarella and aromatic hand-torn basil.',
    imagePath: '/assets/PIZZA/Classic Margherita.png',
    variants: [
      { id: 'v-neo-8', name: 'Neapolitan Small (8 inch)', price: 290 },
      { id: 'v-neo-12', name: 'Neapolitan Large (12 inch)', price: 570 },
      { id: 'v-thin-8', name: 'Panfire Thin Crust (8 slices)', price: 520 }
    ],
    addons: [
      { id: 'a-spicy-20', name: 'Spicy Style', price: 20 },
      { id: 'a-pesto-30', name: 'Pesto Drizzle', price: 30 },
      { id: 'a-cheese-70', name: 'Extra Cheese', price: 70 }
    ],
    isAvailable: true,
    spicyLevel: 0
  },
  {
    id: 'it-piz-2',
    name: 'Creamy Spinach & Mushroom Pizza',
    broadCategory: 'ITALIAN',
    category: 'Neapolitan & Thin Crust Pizza',
    isVeg: true,
    price: 345,
    description: 'Mozzarella, sautéed spinach and earthy mushrooms over a velvety white sauce.',
    imagePath: '/assets/PIZZA/creamy spinach & mushroom.png',
    variants: [
      { id: 'v-csm-8', name: 'Neapolitan Small (8 inch)', price: 345 },
      { id: 'v-csm-12', name: 'Neapolitan Large (12 inch)', price: 670 },
      { id: 'v-csm-thin', name: 'Panfire Thin Crust (8 slices)', price: 640 }
    ],
    addons: [{ id: 'a-cheese-70', name: 'Extra Cheese', price: 70 }],
    isAvailable: true,
    spicyLevel: 0
  },
  {
    id: 'it-piz-3',
    name: 'Butter Paneer Pizza',
    broadCategory: 'ITALIAN',
    category: 'Neapolitan & Thin Crust Pizza',
    isVeg: true,
    price: 325,
    description: 'Rich, spiced makhani sauce with mozzarella, paneer, green chillies and a hint of fresh ginger.',
    imagePath: '/assets/PIZZA/butter paneer pizza.png',
    variants: [
      { id: 'v-bp-8', name: 'Neapolitan Small (8 inch)', price: 325 },
      { id: 'v-bp-12', name: 'Neapolitan Large (12 inch)', price: 645 },
      { id: 'v-bp-thin', name: 'Panfire Thin Crust (8 slices)', price: 620 }
    ],
    addons: [
      { id: 'a-burrata-120', name: 'Add Burrata', price: 120 },
      { id: 'a-cheese-70', name: 'Extra Cheese', price: 70 }
    ],
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 1
  },
  {
    id: 'it-piz-4',
    name: 'Spicy Paneer Pizza',
    broadCategory: 'ITALIAN',
    category: 'Neapolitan & Thin Crust Pizza',
    isVeg: true,
    price: 325,
    description: 'Mozzarella, marinated peri-peri paneer, spicy jalapeños and red onions over a bold, fiery marinara base.',
    imagePath: '/assets/PIZZA/Spicy paneer.png',
    variants: [
      { id: 'v-sp-8', name: 'Neapolitan Small (8 inch)', price: 325 },
      { id: 'v-sp-12', name: 'Neapolitan Large (12 inch)', price: 645 },
      { id: 'v-sp-thin', name: 'Panfire Thin Crust (8 slices)', price: 620 }
    ],
    addons: [
      { id: 'a-burrata-120', name: 'Add Burrata', price: 120 },
      { id: 'a-cheese-70', name: 'Extra Cheese', price: 70 }
    ],
    isAvailable: true,
    spicyLevel: 2
  },
  {
    id: 'it-piz-5',
    name: 'Sun & Rocket Pizza',
    broadCategory: 'ITALIAN',
    category: 'Neapolitan & Thin Crust Pizza',
    isVeg: true,
    price: 325,
    description: 'Mozzarella, tangy sun-dried tomatoes, garlic and peppery rocket over a classic red sauce, finished with a balsamic reduction drizzle.',
    imagePath: '/assets/PIZZA/Sun & rocket.png',
    variants: [
      { id: 'v-sr-8', name: 'Neapolitan Small (8 inch)', price: 325 },
      { id: 'v-sr-12', name: 'Neapolitan Large (12 inch)', price: 645 },
      { id: 'v-sr-thin', name: 'Panfire Thin Crust (8 slices)', price: 620 }
    ],
    addons: [{ id: 'a-cheese-70', name: 'Extra Cheese', price: 70 }],
    isAvailable: true,
    spicyLevel: 0
  },
  {
    id: 'it-piz-6',
    name: 'Panfire Loaded Vegetables Pizza',
    broadCategory: 'ITALIAN',
    category: 'Neapolitan & Thin Crust Pizza',
    isVeg: true,
    price: 325,
    description: 'Marinara and mozzarella topped with button mushrooms, cherry tomatoes, mixed bell peppers and grilled zucchini, then finished with crumbled feta and fresh basil.',
    imagePath: '/assets/PIZZA/Panfire Loaded Vegetables.png',
    variants: [
      { id: 'v-lv-8', name: 'Neapolitan Small (8 inch)', price: 325 },
      { id: 'v-lv-12', name: 'Neapolitan Large (12 inch)', price: 645 },
      { id: 'v-lv-thin', name: 'Panfire Thin Crust (8 slices)', price: 620 }
    ],
    addons: [{ id: 'a-cheese-70', name: 'Extra Cheese', price: 70 }],
    isAvailable: true,
    spicyLevel: 0
  },
  {
    id: 'it-piz-7',
    name: 'Truffle Mushroom Pizza',
    broadCategory: 'ITALIAN',
    category: 'Neapolitan & Thin Crust Pizza',
    isVeg: true,
    price: 440,
    description: 'Mozzarella, shiitake and button mushrooms over a creamy white base, finished with a drizzle of white truffle oil.',
    imagePath: '/assets/PIZZA/Truffle Mushroom.png',
    variants: [
      { id: 'v-tm-8', name: 'Neapolitan Small (8 inch)', price: 440 },
      { id: 'v-tm-12', name: 'Neapolitan Large (12 inch)', price: 845 },
      { id: 'v-tm-thin', name: 'Panfire Thin Crust (8 slices)', price: 795 }
    ],
    addons: [
      { id: 'a-burrata-120', name: 'Add Burrata', price: 120 },
      { id: 'a-cheese-70', name: 'Extra Cheese', price: 70 }
    ],
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 0
  },
  {
    id: 'it-piz-8',
    name: 'Panfire Overload Chicken Pizza',
    broadCategory: 'ITALIAN',
    category: 'Neapolitan & Thin Crust Pizza',
    isVeg: false,
    price: 345,
    description: 'Classic marinara and melted mozzarella topped with grilled chicken, smoked chicken and chicken sausage.',
    imagePath: '/assets/PIZZA/panfire overload chicken.png',
    variants: [
      { id: 'v-oc-8', name: 'Neapolitan Small (8 inch)', price: 345 },
      { id: 'v-oc-12', name: 'Neapolitan Large (12 inch)', price: 670 },
      { id: 'v-oc-thin', name: 'Panfire Thin Crust (8 slices)', price: 640 }
    ],
    addons: [
      { id: 'a-burrata-120', name: 'Add Burrata', price: 120 },
      { id: 'a-cheese-70', name: 'Extra Cheese', price: 70 }
    ],
    isAvailable: true,
    spicyLevel: 1
  },
  {
    id: 'it-piz-9',
    name: 'Panfire Four Meat Pizza',
    broadCategory: 'ITALIAN',
    category: 'Neapolitan & Thin Crust Pizza',
    isVeg: false,
    price: 440,
    description: 'Classic marinara and melted mozzarella topped with bacon, smoked chicken, chicken sausage and chicken pepperoni.',
    imagePath: '/assets/PIZZA/panfire 4 meat .png',
    variants: [
      { id: 'v-fm-8', name: 'Neapolitan Small (8 inch)', price: 440 },
      { id: 'v-fm-12', name: 'Neapolitan Large (12 inch)', price: 845 },
      { id: 'v-fm-thin', name: 'Panfire Thin Crust (8 slices)', price: 795 }
    ],
    addons: [
      { id: 'a-burrata-120', name: 'Add Burrata', price: 120 },
      { id: 'a-cheese-70', name: 'Extra Cheese', price: 70 }
    ],
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 1
  },
  {
    id: 'it-piz-10',
    name: 'Chicken Pepperoni Pizza',
    broadCategory: 'ITALIAN',
    category: 'Neapolitan & Thin Crust Pizza',
    isVeg: false,
    price: 345,
    description: 'Classic marinara layered with melted mozzarella, chicken pepperoni and spicy jalapeños.',
    imagePath: '/assets/PIZZA/chicken pepperoni .png',
    variants: [
      { id: 'v-cp-8', name: 'Neapolitan Small (8 inch)', price: 345 },
      { id: 'v-cp-12', name: 'Neapolitan Large (12 inch)', price: 670 },
      { id: 'v-cp-thin', name: 'Panfire Thin Crust (8 slices)', price: 640 }
    ],
    addons: [{ id: 'a-cheese-70', name: 'Extra Cheese', price: 70 }],
    isAvailable: true,
    spicyLevel: 2
  },

  // --- DEEP DISH PIZZA ---
  {
    id: 'it-dd-1',
    name: 'Loaded Vegetables Deep Dish Pizza',
    broadCategory: 'ITALIAN',
    category: 'Deep Dish Pizza',
    isVeg: true,
    price: 695,
    description: 'Stuffing: Mixed bell peppers, sun-dried tomatoes and jalapeños. Topping: Marinara, parmesan and basil. Served as 6 slices.',
    imagePath: '/assets/DEEP DISH PIZZA/loaded vegetables .png',
    isAvailable: true,
    spicyLevel: 1
  },
  {
    id: 'it-dd-2',
    name: 'Ultimate Mushroom Deep Dish Pizza',
    broadCategory: 'ITALIAN',
    category: 'Deep Dish Pizza',
    isVeg: true,
    price: 745,
    description: 'Stuffing: Mushrooms and red onion. Topping: Marinara, parmesan and basil. Served as 6 slices.',
    imagePath: '/assets/DEEP DISH PIZZA/ultimate mushroom .png',
    isAvailable: true,
    spicyLevel: 0
  },
  {
    id: 'it-dd-3',
    name: 'Pepperoni Melt Deep Dish Pizza',
    broadCategory: 'ITALIAN',
    category: 'Deep Dish Pizza',
    isVeg: false,
    price: 845,
    description: 'Stuffing: Chicken pepperoni. Topping: Marinara, parmesan and basil. Served as 6 slices.',
    imagePath: '/assets/DEEP DISH PIZZA/pepperoni melt .png',
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 2
  },
  {
    id: 'it-dd-4',
    name: 'Panfire Overload Chicken Deep Dish',
    broadCategory: 'ITALIAN',
    category: 'Deep Dish Pizza',
    isVeg: false,
    price: 845,
    description: 'Stuffing: Grilled chicken, smoked chicken and chicken sausage. Topping: Marinara, parmesan and basil. Served as 6 slices.',
    imagePath: '/assets/DEEP DISH PIZZA/panfire overload chicken.png',
    isAvailable: true,
    spicyLevel: 1
  },

  // --- INDIE CRUST PIZZAS ---
  {
    id: 'it-ind-1',
    name: 'Peri-Peri Paneer Indie Thin Crust',
    broadCategory: 'ITALIAN',
    category: 'Indie Crust Pizza',
    isVeg: true,
    price: 445,
    description: 'Marinara, peri-peri paneer and red onion. Served as 8 slices.',
    imagePath: '/assets/INDIE CRUST PIZZA/peri peri paneer .png',
    isAvailable: true,
    spicyLevel: 2
  },
  {
    id: 'it-ind-2',
    name: 'Tandoori Chicken Indie Thin Crust',
    broadCategory: 'ITALIAN',
    category: 'Indie Crust Pizza',
    isVeg: false,
    price: 495,
    description: 'Marinara, tandoori chicken and red onion. Served as 8 slices.',
    imagePath: '/assets/INDIE CRUST PIZZA/tandoori chicken .png',
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 2
  },

  // --- PASTA ---
  {
    id: 'it-pas-1',
    name: 'Arrabbiata Pasta',
    broadCategory: 'ITALIAN',
    category: 'Pasta',
    isVeg: true,
    price: 365,
    description: 'Fiery San Marzano tomato sauce tossed with fresh capsicum, broccoli and zucchini.',
    imagePath: '/assets/PASTA/arrabbiata pasta.png',
    variants: [
      { id: 'v-spag', name: 'Spaghetti', price: 365 },
      { id: 'v-penne', name: 'Penne', price: 365 }
    ],
    addons: [{ id: 'a-gr-ch-50', name: 'Add Grilled Chicken', price: 50 }],
    isAvailable: true,
    spicyLevel: 2
  },
  {
    id: 'it-pas-2',
    name: 'Alfredo Pasta',
    broadCategory: 'ITALIAN',
    category: 'Pasta',
    isVeg: true,
    price: 365,
    description: 'Velvety parmesan cream sauce tossed with garlic-herb sautéed mushrooms.',
    imagePath: '/assets/PASTA/alfredo pasta.png',
    variants: [
      { id: 'v-spag-a', name: 'Spaghetti', price: 365 },
      { id: 'v-penne-a', name: 'Penne', price: 365 }
    ],
    addons: [{ id: 'a-gr-ch-50-a', name: 'Add Grilled Chicken', price: 50 }],
    isAvailable: true,
    spicyLevel: 0
  },
  {
    id: 'it-pas-3',
    name: 'Pesto Pasta',
    broadCategory: 'ITALIAN',
    category: 'Pasta',
    isVeg: true,
    price: 365,
    description: 'Vibrant house-made basil pesto tossed with bell peppers, broccoli and zucchini.',
    imagePath: '/assets/PASTA/pesto pastaa.png',
    variants: [
      { id: 'v-spag-p', name: 'Spaghetti', price: 365 },
      { id: 'v-penne-p', name: 'Penne', price: 365 }
    ],
    addons: [{ id: 'a-gr-ch-50-p', name: 'Add Grilled Chicken', price: 50 }],
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 0
  },
  {
    id: 'it-pas-4',
    name: 'Aglio e Olio Pasta',
    broadCategory: 'ITALIAN',
    category: 'Pasta',
    isVeg: true,
    price: 365,
    description: 'Spaghetti tossed in extra-virgin olive oil, garlic, sun-dried tomatoes and black olives.',
    imagePath: '/assets/PASTA/aglio olio pasta .png',
    addons: [{ id: 'a-gr-ch-50-ao', name: 'Add Grilled Chicken', price: 50 }],
    isAvailable: true,
    spicyLevel: 1
  },

  // --- NAPOLI SANDWICHES ---
  {
    id: 'it-snd-1',
    name: 'Caprese Sandwich',
    broadCategory: 'ITALIAN',
    category: 'Napoli Sandwiches',
    isVeg: true,
    price: 395,
    description: 'Artisanal Neapolitan bread stuffed with fresh bocconcini mozzarella, sliced ripe tomatoes, basil pesto and rocket.',
    imagePath: '/assets/NAPOLI SANDWICHES/Caprese sandwich.png',
    isAvailable: true,
    spicyLevel: 0
  },
  {
    id: 'it-snd-2',
    name: 'Pulled Chicken Pesto Sandwich',
    broadCategory: 'ITALIAN',
    category: 'Napoli Sandwiches',
    isVeg: false,
    price: 395,
    description: 'Slow-cooked pulled chicken tossed in basil pesto, layered with melted mozzarella in a freshly toasted Napoli loaf.',
    imagePath: '/assets/NAPOLI SANDWICHES/pesto pulled chicken .png',
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 1
  },

  // --- GARLIC BREADS ---
  {
    id: 'it-gb-1',
    name: 'Garlic Bread with Cheese',
    broadCategory: 'ITALIAN',
    category: 'Garlic Bread',
    isVeg: true,
    price: 295,
    description: 'Wood-fired garlic bread loaf brushed with garlic herb butter and smothered with melted mozzarella.',
    imagePath: '/assets/GARLIC BREAD/garlic bread with cheese.png',
    isAvailable: true,
    spicyLevel: 0
  },
  {
    id: 'it-gb-2',
    name: 'Asparagus & Burrata Garlic Bread',
    broadCategory: 'ITALIAN',
    category: 'Garlic Bread',
    isVeg: true,
    price: 445,
    description: 'Tender grilled asparagus spears over garlic bread topped with rich creamy burrata cheese.',
    imagePath: '/assets/GARLIC BREAD/asparagus burrata .png',
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 0
  },


  // ==========================================
  // ASIAN CUISINE
  // ==========================================

  // --- SOUPS ---
  {
    id: 'as-sop-1',
    name: 'Tom Kha Soup',
    broadCategory: 'ASIAN',
    category: 'Soups',
    isVeg: true,
    price: 215,
    description: 'Creamy Thai coconut broth with galangal, lemongrass and kaffir lime leaves.',
    imagePath: '/assets/SOUPS/TOM KHA SOUP .png',
    variants: [
      { id: 'v-tk-veg', name: 'Vegetarian', price: 215 },
      { id: 'v-tk-chk', name: 'Chicken', price: 275 },
      { id: 'v-tk-prw', name: 'Prawn', price: 345 }
    ],
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 1
  },
  {
    id: 'as-sop-2',
    name: 'Manchow Soup',
    broadCategory: 'ASIAN',
    category: 'Soups',
    isVeg: true,
    price: 175,
    description: 'Classic Indo-Chinese soy garlic soup served with crispy fried noodles.',
    imagePath: '/assets/SOUPS/MANCHOW SOUP .png',
    variants: [
      { id: 'v-mc-veg', name: 'Vegetarian', price: 175 },
      { id: 'v-mc-chk', name: 'Chicken', price: 225 },
      { id: 'v-mc-prw', name: 'Prawn', price: 295 }
    ],
    isAvailable: true,
    spicyLevel: 2
  },

  // --- DIM SUMS ---
  {
    id: 'as-dim-1',
    name: 'Mushroom & Cheese Dim Sum',
    broadCategory: 'ASIAN',
    category: 'Dim Sums',
    isVeg: true,
    price: 340,
    description: 'Mushrooms and carrot blended with cream cheese. 6 pieces per serving.',
    imagePath: '/assets/DIM SUMS/MUSHROOM & CREAM CHEESE DIM SUM .png',
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 0
  },
  {
    id: 'as-dim-2',
    name: 'Spicy Cheesy Chicken Dim Sum',
    broadCategory: 'ASIAN',
    category: 'Dim Sums',
    isVeg: false,
    price: 380,
    description: 'Minced chicken with cream cheese, coriander, spring onion and chilli oil. 6 pieces per serving.',
    imagePath: '/assets/DIM SUMS/ SPICY CHEESY CHICKEN DIM SUM .png',
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 2
  },

  // --- MOMOS & GYOZA ---
  {
    id: 'as-mom-1',
    name: 'Vegetable & Cheese Momos',
    broadCategory: 'ASIAN',
    category: 'Momos & Gyoza',
    isVeg: true,
    price: 220,
    description: 'Handcrafted momos filled with finely minced garden vegetables and melted cheese. 6 pieces per serving.',
    imagePath: '/assets/MOMO AND GYOZA/VEGETABLE & CHEESE MOMOS .png',
    isAvailable: true,
    spicyLevel: 1
  },
  {
    id: 'as-mom-2',
    name: 'Chicken Gyoza',
    broadCategory: 'ASIAN',
    category: 'Momos & Gyoza',
    isVeg: false,
    price: 250,
    description: 'Pan-seared Japanese style chicken dumplings served with dipping soy glaze. 6 pieces per serving.',
    imagePath: '/assets/MOMO AND GYOZA/CHICKEN GYOZA .png',
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 1
  },

  // --- BAOS ---
  {
    id: 'as-bao-1',
    name: 'Prawn Fire Cracker Bao',
    broadCategory: 'ASIAN',
    category: 'Baos',
    isVeg: false,
    price: 495,
    description: 'Fried prawns with spicy mayo and wasabi mayo in fluffy steamed buns. 2 pieces per serving.',
    imagePath: '/assets/BAO/PRAWN FRIER CRACKER BAO .png',
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 3
  },
  {
    id: 'as-bao-2',
    name: 'Korean Chicken Bao',
    broadCategory: 'ASIAN',
    category: 'Baos',
    isVeg: false,
    price: 345,
    description: 'Crispy chicken glazed in a spicy Korean sauce, layered with lettuce. 2 pieces per serving.',
    imagePath: '/assets/BAO/KOREAN CHICKEN BAO .png',
    isAvailable: true,
    spicyLevel: 2
  },

  // --- SUSHI ---
  {
    id: 'as-sus-1',
    name: 'Dragon Uramaki Sushi',
    broadCategory: 'ASIAN',
    category: 'Sushi',
    isVeg: false,
    price: 395,
    description: 'Prawn tempura and avocado with spicy mayo, sesame seeds and crunch tanuki.',
    imagePath: '/assets/SUSHI/DRAGON URAMAKI .png',
    variants: [
      { id: 'v-dra-4', name: '4 Pieces', price: 395 },
      { id: 'v-dra-8', name: '8 Pieces', price: 645 }
    ],
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 2
  },
  {
    id: 'as-sus-2',
    name: 'Avocado & Cream Cheese Sushi',
    broadCategory: 'ASIAN',
    category: 'Sushi',
    isVeg: true,
    price: 345,
    description: 'Avocado, jalapeño, sesame seeds and cream cheese in a delicate nori roll.',
    imagePath: '/assets/SUSHI/AVOCADO AND CREAM CHEESE SUSHI .png',
    variants: [
      { id: 'v-avo-4', name: '4 Pieces', price: 345 },
      { id: 'v-avo-8', name: '8 Pieces', price: 595 }
    ],
    isAvailable: true,
    spicyLevel: 1
  },
  {
    id: 'as-sus-3',
    name: 'Rainbow Sushi',
    broadCategory: 'ASIAN',
    category: 'Sushi',
    isVeg: true,
    price: 375,
    description: 'Cream cheese, beetroot, seasonal fruit and fresh cucumber.',
    imagePath: '/assets/SUSHI/RAINBOW SUSHI.png',
    variants: [
      { id: 'v-rbw-4', name: '4 Pieces', price: 375 },
      { id: 'v-rbw-8', name: '8 Pieces', price: 645 }
    ],
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 0
  },

  // --- ASIAN APPETISERS ---
  {
    id: 'as-app-1',
    name: 'Rock Shrimp Tempura',
    broadCategory: 'ASIAN',
    category: 'Asian Appetisers',
    isVeg: false,
    price: 795,
    description: 'Bite-sized tempura prawns tossed in a creamy, spicy dynamite sauce.',
    imagePath: '/assets/APPETISERS/ROCK SHRIMP TEMPURA.png',
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 2
  },
  {
    id: 'as-app-2',
    name: 'Salt & Pepper Corn',
    broadCategory: 'ASIAN',
    category: 'Asian Appetisers',
    isVeg: true,
    price: 315,
    description: 'Thai-style crispy fried sweet corn kernels tossed with crushed pepper and spring onions.',
    imagePath: '/assets/APPETISERS/SALT AND PEPPER CORN .png',
    isAvailable: true,
    spicyLevel: 1
  },
  {
    id: 'as-app-3',
    name: 'Crispy Honey Chicken',
    broadCategory: 'ASIAN',
    category: 'Asian Appetisers',
    isVeg: false,
    price: 395,
    description: 'Crispy chicken wok-tossed with spring onions and bell peppers in a sweet-and-spicy honey chilli glaze.',
    imagePath: '/assets/APPETISERS/CRISPY HONEY CHICKEN.png',
    isAvailable: true,
    spicyLevel: 1
  },

  // --- WOK NOODLES & BOWLS ---
  {
    id: 'as-ndl-1',
    name: 'Butter & Burnt Garlic Noodles',
    broadCategory: 'ASIAN',
    category: 'Wok Noodles',
    isVeg: true,
    price: 275,
    description: 'Noodles tossed with butter, crispy burnt garlic and fresh wok vegetables.',
    imagePath: '/assets/NOODLES/butter and burnt garlic noodles.png',
    variants: [
      { id: 'v-bg-veg', name: 'Vegetarian', price: 275 },
      { id: 'v-bg-chk', name: 'Chicken', price: 325 },
      { id: 'v-bg-prw', name: 'Prawn', price: 415 }
    ],
    isAvailable: true,
    isChefSpecial: true,
    spicyLevel: 0
  },
  {
    id: 'as-ndl-2',
    name: 'Thukpa Noodle Bowl',
    broadCategory: 'ASIAN',
    category: 'Wok Noodles',
    isVeg: true,
    price: 344,
    description: 'Tibetan-style noodles and fresh vegetables simmered in a warm, mildly spiced aromatic broth.',
    imagePath: '/assets/NOODLES/Thukpa.png',
    variants: [
      { id: 'v-thk-veg', name: 'Vegetarian', price: 344 },
      { id: 'v-thk-chk', name: 'Chicken', price: 395 }
    ],
    isAvailable: true,
    spicyLevel: 1
  }
];
