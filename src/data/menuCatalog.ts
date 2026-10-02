import { MenuItem } from '../types';

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  {
    "id": "dish-classic-margherita-pizza-neapolitan-pizza-small",
    "name": "Classic Margherita Pizza- Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 290,
    "basePrice": 290,
    "description": "Classic San Marzano tomato sauce, mozzarella and aromatic hand-torn basil.",
    "imagePath": "/assets/pizza/classic-margherita.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": true,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-spicy-style",
        "name": "Spicy Style",
        "price": 20
      },
      {
        "id": "addon-pesto-drizzle",
        "name": "Pesto Drizzle",
        "price": 30
      },
      {
        "id": "addon-extra-cheese",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-creamy-spinach-mushroom-neapolitan-pizza-small",
    "name": "Creamy Spinach & Mushroom- Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Mozzarella, saut\u00e9ed spinach and earthy mushrooms over a velvety white sauce.",
    "imagePath": "/assets/pizza/creamy-spinach-mushroom.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-4",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-butter-paneer-neapolitan-pizza-small",
    "name": "Butter Paneer - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Rich, spiced makhani sauce with mozzarella, paneer, green chillies and a hint of fresh ginger.",
    "imagePath": "/assets/pizza/butter-paneer-pizza.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-7",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-spicy-paneer-neapolitan-pizza-small",
    "name": "Spicy Paneer - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Mozzarella, marinated peri-peri paneer, spicy jalape\u00f1os and red onions over a bold, fiery marinara base.",
    "imagePath": "/assets/burrito-wraps/spicy-grilled-paneer-burrito-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-4",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-10",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-sun-rocket-neapolitan-pizza-small",
    "name": "Sun & Rocket - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Mozzarella, tangy sun-dried tomatoes, garlic and peppery rocket over a classic red sauce, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/sun-rocket.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-13",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-panfire-loaded-vegetables-neapolitan-pizza-small",
    "name": "Panfire Loaded Vegetables - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Marinara and mozzarella topped with button mushrooms, cherry tomatoes, mixed bell peppers and grilled zucchini, then finished with crumbled feta and fresh basil.",
    "imagePath": "/assets/pizza/panfire-loaded-vegetables.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-16",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-spicy-mushroom-neapolitan-pizza-small",
    "name": "Spicy Mushroom - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Mozzarella, earthy button mushrooms, spicy red paprika and red onions over a fiery peri-peri marinara base.",
    "imagePath": "/assets/pizza/spicy-mushroom.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-7",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-19",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-hawaiian-neapolitan-pizza-small",
    "name": "Hawaiian - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Mozzarella, juicy pineapple, sweet corn and hot jalape\u00f1os over a classic marinara base.",
    "imagePath": "/assets/pizza/chicken-ham-hawaiian.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-22",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-pesto-paneer-neapolitan-pizza-small",
    "name": "Pesto Paneer - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Classic red sauce and melted mozzarella topped with paneer, finished with a vibrant basil pesto drizzle.",
    "imagePath": "/assets/pizza/pesto-paneer.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-10",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-25",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-burrata-neapolitan-pizza-small",
    "name": "Burrata - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 440,
    "basePrice": 440,
    "description": "Creamy white base with mozzarella, burrata, sweet cherry tomatoes and caramelized onions.",
    "imagePath": "/assets/garlic-bread/asparagus-burrata.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": true,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-28",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-truffle-mushroom-neapolitan-pizza-small",
    "name": "Truffle Mushroom - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 440,
    "basePrice": 440,
    "description": "Mozzarella, shiitake and button mushrooms over a creamy white base, finished with a drizzle of white truffle oil.",
    "imagePath": "/assets/pizza/truffle-mushroom.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-13",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-31",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-magic-mushroom-neapolitan-pizza-small",
    "name": "Magic Mushroom - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 440,
    "basePrice": 440,
    "description": "Mozzarella, earthy shiitake and button mushrooms paired with creamy goat cheese and fresh rocket, finished with a drizzle of balsamic reduction.",
    "imagePath": "/assets/pizza/magic-mushroom.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-34",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-4-cheese-neapolitan-pizza-small",
    "name": "4 Cheese - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 520,
    "basePrice": 520,
    "description": "An indulgent, rich blend of mozzarella, fresh bocconcini, parmesan and creamy goat cheese.",
    "imagePath": "/assets/dim-sums/spinach-and-cream-cheese-dim-sum.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-37",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-3-cheese-asparagus-pesto-neapolitan-pizza-small",
    "name": "3 Cheese Asparagus Pesto - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": true,
    "price": 520,
    "basePrice": 520,
    "description": "Vibrant basil pesto base with tender asparagus, mozzarella, rich burrata, rocket leaves and parmesan, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/3-cheese-asparagus-pesto.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-40",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-panfire-overload-chicken-neapolitan-pizza-small",
    "name": "Panfire Overload Chicken - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Classic marinara and melted mozzarella topped with grilled chicken, smoked chicken and chicken sausage.",
    "imagePath": "/assets/deep-dish-pizza/panfire-overload-chicken.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-16",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-43",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-panfire-four-meat-neapolitan-pizza-small",
    "name": "Panfire Four Meat - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": false,
    "price": 440,
    "basePrice": 440,
    "description": "Classic marinara and melted mozzarella topped with bacon, smoked chicken, chicken sausage and chicken pepperoni.",
    "imagePath": "/assets/deep-dish-pizza/panfire-4-meat.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-19",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-46",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-chicken-pepperoni-neapolitan-pizza-small",
    "name": "Chicken Pepperoni - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Classic marinara layered with melted mozzarella, chicken pepperoni and spicy jalape\u00f1os.",
    "imagePath": "/assets/pizza/chicken-pepperoni.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-22",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-49",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-panfire-pollo-neapolitan-pizza-small",
    "name": "Panfire Pollo - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": false,
    "price": 520,
    "basePrice": 520,
    "description": "Smoked chicken, earthy button mushrooms and caramelised onions over classic marinara and mozzarella, finished with creamy goat cheese.",
    "imagePath": "/assets/pizza/panfire-pollo.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-25",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-52",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-butter-chicken-neapolitan-pizza-small",
    "name": "Butter Chicken - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Grilled butter chicken over a rich makhani sauce and mozzarella, finished with fresh coriander, green chillies and ginger.",
    "imagePath": "/assets/pizza/butter-chicken-pizza.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-28",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-55",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-grilled-chicken-roasted-peppers-neapolitan-pizza-small",
    "name": "Grilled Chicken & Roasted Peppers - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Grilled chicken, roasted bell peppers and red onions over classic marinara and melted mozzarella, finished with a touch of red paprika.",
    "imagePath": "/assets/pizza/grilled-chicken-and-roasted-peppers.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-31",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-58",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-pesto-smoked-chicken-rocket-neapolitan-pizza-small",
    "name": "Pesto Smoked Chicken & Rocket - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": false,
    "price": 440,
    "basePrice": 440,
    "description": "Smoked chicken and mozzarella topped with fresh rocket, basil pesto and a balsamic drizzle.",
    "imagePath": "/assets/pizza/pesto-smoked-chicken-and-rocket.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-34",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-61",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-smoked-chicken-paprika-neapolitan-pizza-small",
    "name": "Smoked Chicken Paprika - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Smoked chicken, red onions and sliced paprika over classic marinara and melted mozzarella.",
    "imagePath": "/assets/pizza/pesto-smoked-chicken-and-rocket.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-37",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-64",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-grilled-chicken-spinach-mushroom-neapolitan-pizza-small",
    "name": "Grilled Chicken, Spinach & Mushroom - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Creamy white sauce layered with melted mozzarella, grilled chicken, saut\u00e9ed spinach and earthy mushrooms.",
    "imagePath": "/assets/pizza/grilled-chicken-spinach-and-mushroom.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-40",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-67",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-bacon-neapolitan-pizza-small",
    "name": "Bacon - Neapolitan Pizza - Small",
    "category": "Neapolitan Pizza - Small (8 inch)",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Bacon and caramelised onions over a creamy white sauce and melted mozzarella.",
    "imagePath": "/assets/garlic-bread/bacon-and-mushroom.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-43",
        "name": "Add Burrata",
        "price": 120
      },
      {
        "id": "addon-extra-cheese-70",
        "name": "Extra Cheese",
        "price": 70
      }
    ]
  },
  {
    "id": "dish-classic-margherita-neapolitan-pizza-large",
    "name": "Classic Margherita - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 570,
    "basePrice": 570,
    "description": "Classic San Marzano tomato sauce, mozzarella and aromatic hand-torn basil.",
    "imagePath": "/assets/pizza/classic-margherita.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": true,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-spicy-style-2",
        "name": "Spicy Style",
        "price": 50
      },
      {
        "id": "addon-pesto-drizzle-2",
        "name": "Pesto Drizzle",
        "price": 60
      },
      {
        "id": "addon-extra-cheese-2",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-creamy-spinach-mushroom-neapolitan-pizza-large",
    "name": "Creamy Spinach & Mushroom - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 670,
    "basePrice": 670,
    "description": "Mozzarella, saut\u00e9ed spinach and earthy mushrooms over a velvety white sauce.",
    "imagePath": "/assets/pizza/creamy-spinach-mushroom.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-5",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-butter-paneer-neapolitan-pizza-large",
    "name": "Butter Paneer - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 645,
    "basePrice": 645,
    "description": "Rich, spiced makhani sauce with mozzarella, paneer, green chillies and a hint of fresh ginger.",
    "imagePath": "/assets/pizza/butter-paneer-pizza.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-2",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-8",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-spicy-paneer-neapolitan-pizza-large",
    "name": "Spicy Paneer - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 645,
    "basePrice": 645,
    "description": "Mozzarella, marinated peri-peri paneer, spicy jalape\u00f1os and red onions over a bold, fiery marinara base.",
    "imagePath": "/assets/burrito-wraps/spicy-grilled-paneer-burrito-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-5",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-11",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-sun-rocket-neapolitan-pizza-large",
    "name": "Sun & Rocket - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 645,
    "basePrice": 645,
    "description": "Mozzarella, tangy sun-dried tomatoes, garlic and peppery rocket over a classic red sauce, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/sun-rocket.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-14",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-panfire-loaded-vegetables-neapolitan-pizza-large",
    "name": "Panfire Loaded Vegetables - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 645,
    "basePrice": 645,
    "description": "Marinara and mozzarella topped with button mushrooms, cherry tomatoes, mixed bell peppers and grilled zucchini, then finished with crumbled feta and fresh basil.",
    "imagePath": "/assets/pizza/panfire-loaded-vegetables.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-17",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-spicy-mushroom-neapolitan-pizza-large",
    "name": "Spicy Mushroom - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 645,
    "basePrice": 645,
    "description": "Mozzarella, earthy button mushrooms, spicy red paprika and red onions over a fiery peri-peri marinara base.",
    "imagePath": "/assets/pizza/spicy-mushroom.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-8",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-20",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-hawaiian-neapolitan-pizza-large",
    "name": "Hawaiian - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 645,
    "basePrice": 645,
    "description": "Mozzarella, juicy pineapple, sweet corn and hot jalape\u00f1os over a classic marinara base.",
    "imagePath": "/assets/pizza/chicken-ham-hawaiian.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-23",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-pesto-paneer-neapolitan-pizza-large",
    "name": "Pesto Paneer - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 670,
    "basePrice": 670,
    "description": "Classic red sauce and melted mozzarella topped with paneer, finished with a vibrant basil pesto drizzle.",
    "imagePath": "/assets/pizza/pesto-paneer.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-11",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-26",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-burrata-neapolitan-pizza-large",
    "name": "Burrata - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 845,
    "basePrice": 845,
    "description": "Creamy white base with mozzarella, burrata, sweet cherry tomatoes and caramelized onions.",
    "imagePath": "/assets/garlic-bread/asparagus-burrata.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": true,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-29",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-truffle-mushroom-neapolitan-pizza-large",
    "name": "Truffle Mushroom - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 845,
    "basePrice": 845,
    "description": "Mozzarella, shiitake and button mushrooms over a creamy white base, finished with a drizzle of white truffle oil.",
    "imagePath": "/assets/pizza/truffle-mushroom.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-14",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-32",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-magic-mushroom-neapolitan-pizza-large",
    "name": "Magic Mushroom - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 845,
    "basePrice": 845,
    "description": "Mozzarella, earthy shiitake and button mushrooms paired with creamy goat cheese and fresh rocket, finished with a drizzle of balsamic reduction.",
    "imagePath": "/assets/pizza/magic-mushroom.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-35",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-4-cheese-neapolitan-pizza-large",
    "name": "4 Cheese - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 995,
    "basePrice": 995,
    "description": "An indulgent, rich blend of mozzarella, fresh bocconcini, parmesan and creamy goat cheese.",
    "imagePath": "/assets/dim-sums/spinach-and-cream-cheese-dim-sum.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-38",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-3-cheese-asparagus-pesto-neapolitan-pizza-large",
    "name": "3 Cheese Asparagus Pesto - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": true,
    "price": 995,
    "basePrice": 995,
    "description": "Vibrant basil pesto base with tender asparagus, mozzarella, rich burrata, rocket leaves and parmesan, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/3-cheese-asparagus-pesto.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-41",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-panfire-overload-chicken-neapolitan-pizza-large",
    "name": "Panfire Overload Chicken - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": false,
    "price": 670,
    "basePrice": 670,
    "description": "Classic marinara and melted mozzarella topped with grilled chicken, smoked chicken and chicken sausage.",
    "imagePath": "/assets/deep-dish-pizza/panfire-overload-chicken.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-17",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-44",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-panfire-four-meat-neapolitan-pizza-large",
    "name": "Panfire Four Meat - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": false,
    "price": 845,
    "basePrice": 845,
    "description": "Classic marinara and melted mozzarella topped with bacon, smoked chicken, chicken sausage and chicken pepperoni.",
    "imagePath": "/assets/deep-dish-pizza/panfire-4-meat.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-20",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-47",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-chicken-pepperoni-neapolitan-pizza-large",
    "name": "Chicken Pepperoni - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": false,
    "price": 670,
    "basePrice": 670,
    "description": "Classic marinara layered with melted mozzarella, chicken pepperoni and spicy jalape\u00f1os.",
    "imagePath": "/assets/pizza/chicken-pepperoni.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-23",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-50",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-panfire-pollo-neapolitan-pizza-large",
    "name": "Panfire Pollo - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": false,
    "price": 995,
    "basePrice": 995,
    "description": "Smoked chicken, earthy button mushrooms and caramelised onions over classic marinara and mozzarella, finished with creamy goat cheese.",
    "imagePath": "/assets/pizza/panfire-pollo.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-26",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-53",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-butter-chicken-neapolitan-pizza-large",
    "name": "Butter Chicken - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": false,
    "price": 670,
    "basePrice": 670,
    "description": "Grilled butter chicken over a rich makhani sauce and mozzarella, finished with fresh coriander, green chillies and ginger.",
    "imagePath": "/assets/pizza/butter-chicken-pizza.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-29",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-56",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-grilled-chicken-roasted-peppers-neapolitan-pizza-large",
    "name": "Grilled Chicken & Roasted Peppers - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": false,
    "price": 670,
    "basePrice": 670,
    "description": "Grilled chicken, roasted bell peppers and red onions over classic marinara and melted mozzarella, finished with a touch of red paprika.",
    "imagePath": "/assets/pizza/grilled-chicken-and-roasted-peppers.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-32",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-59",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-pesto-smoked-chicken-rocket-neapolitan-pizza-large",
    "name": "Pesto Smoked Chicken & Rocket - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": false,
    "price": 845,
    "basePrice": 845,
    "description": "Smoked chicken and mozzarella topped with fresh rocket, basil pesto and a balsamic drizzle.",
    "imagePath": "/assets/pizza/pesto-smoked-chicken-and-rocket.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-35",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-62",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-smoked-chicken-paprika-neapolitan-pizza-large",
    "name": "Smoked Chicken Paprika - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": false,
    "price": 670,
    "basePrice": 670,
    "description": "Smoked chicken, red onions and sliced paprika over classic marinara and melted mozzarella.",
    "imagePath": "/assets/pizza/pesto-smoked-chicken-and-rocket.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-38",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-65",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-grilled-chicken-spinach-mushroom-neapolitan-pizza-large",
    "name": "Grilled Chicken, Spinach & Mushroom - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": false,
    "price": 670,
    "basePrice": 670,
    "description": "Creamy white sauce layered with melted mozzarella, grilled chicken, saut\u00e9ed spinach and earthy mushrooms.",
    "imagePath": "/assets/pizza/grilled-chicken-spinach-and-mushroom.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-41",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-68",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-bacon-neapolitan-pizza-large",
    "name": "Bacon - Neapolitan Pizza - Large",
    "category": "Neapolitan Pizza - Large (12 inch)",
    "isVeg": false,
    "price": 670,
    "basePrice": 670,
    "description": "Bacon and caramelised onions over a creamy white sauce and melted mozzarella.",
    "imagePath": "/assets/garlic-bread/bacon-and-mushroom.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-44",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-71",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-classic-margherita-thin-crust-pizza",
    "name": "Classic Margherita- Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 520,
    "basePrice": 520,
    "description": "Classic San Marzano tomato sauce, mozzarella and aromatic hand-torn basil.",
    "imagePath": "/assets/pizza/classic-margherita.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": true,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-spicy-style-3",
        "name": "Spicy Style",
        "price": 50
      },
      {
        "id": "addon-pesto-drizzle-3",
        "name": "Pesto Drizzle",
        "price": 60
      },
      {
        "id": "addon-extra-cheese-3",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-creamy-spinach-mushroom-thin-crust-pizza",
    "name": "Creamy Spinach & Mushroom - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 640,
    "basePrice": 640,
    "description": "Mozzarella, saut\u00e9ed spinach and earthy mushrooms over a velvety white sauce.",
    "imagePath": "/assets/pizza/creamy-spinach-mushroom.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-6",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-butter-paneer-thin-crust-pizza",
    "name": "Butter Paneer - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 620,
    "basePrice": 620,
    "description": "Rich, spiced makhani sauce with mozzarella, paneer, green chillies and a hint of fresh ginger.",
    "imagePath": "/assets/pizza/butter-paneer-pizza.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-3",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-9",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-spicy-paneer-thin-crust-pizza",
    "name": "Spicy Paneer - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 620,
    "basePrice": 620,
    "description": "Mozzarella, marinated peri-peri paneer, spicy jalape\u00f1os and red onions over a bold, fiery marinara base.",
    "imagePath": "/assets/burrito-wraps/spicy-grilled-paneer-burrito-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-6",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-12",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-sun-rocket-thin-crust-pizza",
    "name": "Sun & Rocket - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 620,
    "basePrice": 620,
    "description": "Mozzarella, tangy sun-dried tomatoes, garlic and peppery rocket over a classic red sauce, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/sun-rocket.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-15",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-panfire-loaded-vegetables-thin-crust-pizza",
    "name": "Panfire Loaded Vegetables - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 620,
    "basePrice": 620,
    "description": "Marinara and mozzarella topped with button mushrooms, cherry tomatoes, mixed bell peppers and grilled zucchini, then finished with crumbled feta and fresh basil.",
    "imagePath": "/assets/pizza/panfire-loaded-vegetables.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-18",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-spicy-mushroom-thin-crust-pizza",
    "name": "Spicy Mushroom - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 620,
    "basePrice": 620,
    "description": "Mozzarella, earthy button mushrooms, spicy red paprika and red onions over a fiery peri-peri marinara base.",
    "imagePath": "/assets/pizza/spicy-mushroom.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-9",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-21",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-hawaiian-thin-crust-pizza",
    "name": "Hawaiian - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 620,
    "basePrice": 620,
    "description": "Mozzarella, juicy pineapple, sweet corn and hot jalape\u00f1os over a classic marinara base.",
    "imagePath": "/assets/pizza/chicken-ham-hawaiian.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-24",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-pesto-paneer-thin-crust-pizza",
    "name": "Pesto Paneer - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 640,
    "basePrice": 640,
    "description": "Classic red sauce and melted mozzarella topped with paneer, finished with a vibrant basil pesto drizzle.",
    "imagePath": "/assets/pizza/pesto-paneer.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-12",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-27",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-burrata-thin-crust-pizza",
    "name": "Burrata - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 795,
    "basePrice": 795,
    "description": "Creamy white base with mozzarella, burrata, sweet cherry tomatoes and caramelized onions.",
    "imagePath": "/assets/garlic-bread/asparagus-burrata.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-30",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-truffle-mushroom-thin-crust-pizza",
    "name": "Truffle Mushroom - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 795,
    "basePrice": 795,
    "description": "Mozzarella, shiitake and button mushrooms over a creamy white base, finished with a drizzle of white truffle oil.",
    "imagePath": "/assets/pizza/truffle-mushroom.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-15",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-33",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-magic-mushroom-thin-crust-pizza",
    "name": "Magic Mushroom - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 795,
    "basePrice": 795,
    "description": "Mozzarella, earthy shiitake and button mushrooms paired with creamy goat cheese and fresh rocket, finished with a drizzle of balsamic reduction.",
    "imagePath": "/assets/pizza/magic-mushroom.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-36",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-4-cheese-thin-crust-pizza",
    "name": "4 Cheese - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 945,
    "basePrice": 945,
    "description": "An indulgent, rich blend of mozzarella, fresh bocconcini, parmesan and creamy goat cheese.",
    "imagePath": "/assets/dim-sums/spinach-and-cream-cheese-dim-sum.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-39",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-3-cheese-asparagus-pesto-thin-crust-pizza",
    "name": "3 Cheese Asparagus Pesto - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": true,
    "price": 945,
    "basePrice": 945,
    "description": "Vibrant basil pesto base with tender asparagus, mozzarella, rich burrata, rocket leaves and parmesan, finished with a balsamic reduction drizzle.",
    "imagePath": "/assets/pizza/3-cheese-asparagus-pesto.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-extra-cheese-42",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-panfire-overload-chicken-thin-crust-pizza",
    "name": "Panfire Overload Chicken - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": false,
    "price": 640,
    "basePrice": 640,
    "description": "Classic marinara and melted mozzarella topped with grilled chicken, smoked chicken and chicken sausage.",
    "imagePath": "/assets/deep-dish-pizza/panfire-overload-chicken.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-18",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-45",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-panfire-four-meat-thin-crust-pizza",
    "name": "Panfire Four Meat - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": false,
    "price": 795,
    "basePrice": 795,
    "description": "Classic marinara and melted mozzarella topped with bacon, smoked chicken, chicken sausage and chicken pepperoni.",
    "imagePath": "/assets/deep-dish-pizza/panfire-4-meat.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-21",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-48",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-chicken-pepperoni-thin-crust-pizza",
    "name": "Chicken Pepperoni - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": false,
    "price": 640,
    "basePrice": 640,
    "description": "Classic marinara layered with melted mozzarella, chicken pepperoni and spicy jalape\u00f1os.",
    "imagePath": "/assets/pizza/chicken-pepperoni.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-24",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-51",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-panfire-pollo-thin-crust-pizza",
    "name": "Panfire Pollo - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": false,
    "price": 945,
    "basePrice": 945,
    "description": "Smoked chicken, earthy button mushrooms and caramelised onions over classic marinara and mozzarella, finished with creamy goat cheese.",
    "imagePath": "/assets/pizza/panfire-pollo.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-27",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-54",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-butter-chicken-thin-crust-pizza",
    "name": "Butter Chicken - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": false,
    "price": 640,
    "basePrice": 640,
    "description": "Grilled butter chicken over a rich makhani sauce and mozzarella, finished with fresh coriander, green chillies and ginger.",
    "imagePath": "/assets/pizza/butter-chicken-pizza.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-30",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-57",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-grilled-chicken-roasted-peppers-thin-crust-pizza",
    "name": "Grilled Chicken & Roasted Peppers - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": false,
    "price": 640,
    "basePrice": 640,
    "description": "Grilled chicken, roasted bell peppers and red onions over classic marinara and melted mozzarella, finished with a touch of red paprika.",
    "imagePath": "/assets/pizza/grilled-chicken-and-roasted-peppers.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-33",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-60",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-pesto-smoked-chicken-rocket-thin-crust-pizza",
    "name": "Pesto Smoked Chicken & Rocket - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": false,
    "price": 795,
    "basePrice": 795,
    "description": "Smoked chicken and mozzarella topped with fresh rocket, basil pesto and a balsamic drizzle.",
    "imagePath": "/assets/pizza/pesto-smoked-chicken-and-rocket.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-36",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-63",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-smoked-chicken-paprika-thin-crust-pizza",
    "name": "Smoked Chicken Paprika - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": false,
    "price": 640,
    "basePrice": 640,
    "description": "Smoked chicken, red onions and sliced paprika over classic marinara and melted mozzarella.",
    "imagePath": "/assets/pizza/pesto-smoked-chicken-and-rocket.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-39",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-66",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-grilled-chicken-spinach-mushroom-thin-crust-pizza",
    "name": "Grilled Chicken, Spinach & Mushroom - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": false,
    "price": 640,
    "basePrice": 640,
    "description": "Creamy white sauce layered with melted mozzarella, grilled chicken, saut\u00e9ed spinach and earthy mushrooms.",
    "imagePath": "/assets/pizza/grilled-chicken-spinach-and-mushroom.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-42",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-69",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-bacon-thin-crust-pizza",
    "name": "Bacon - Thin Crust Pizza",
    "category": "Panfire Thin Crust Pizza (8 slices)",
    "isVeg": false,
    "price": 640,
    "basePrice": 640,
    "description": "Bacon and caramelised onions over a creamy white sauce and melted mozzarella.",
    "imagePath": "/assets/garlic-bread/bacon-and-mushroom.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-add-burrata-45",
        "name": "Add Burrata",
        "price": 190
      },
      {
        "id": "addon-extra-cheese-72",
        "name": "Extra Cheese",
        "price": 120
      }
    ]
  },
  {
    "id": "dish-loaded-vegetables-deep-dish-pizza",
    "name": "Loaded Vegetables Deep Dish Pizza",
    "category": "Deep Dish Pizzas - Vegetarian",
    "isVeg": true,
    "price": 695,
    "basePrice": 695,
    "description": "Stuffing: Mixed bell peppers, sun-dried tomatoes and jalape\u00f1os. Topping: Marinara, parmesan and basil.",
    "imagePath": "/assets/deep-dish-pizza/loaded-vegetables.webp",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-served-as-6-slices",
        "name": "Served as 6 slices",
        "price": 695,
        "isVeg": true
      }
    ],
    "addons": []
  },
  {
    "id": "dish-ultimate-mushroom-deep-dish-pizza",
    "name": "Ultimate Mushroom Deep Dish Pizza",
    "category": "Deep Dish Pizzas - Vegetarian",
    "isVeg": true,
    "price": 745,
    "basePrice": 745,
    "description": "Stuffing: Mushrooms and red onion. Topping: Marinara, parmesan and basil.",
    "imagePath": "/assets/deep-dish-pizza/ultimate-mushroom.webp",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-served-as-6-slices-2",
        "name": "Served as 6 slices",
        "price": 745,
        "isVeg": true
      }
    ],
    "addons": []
  },
  {
    "id": "dish-pepperoni-melt-deep-dish-pizza",
    "name": "Pepperoni Melt Deep Dish Pizza",
    "category": "Deep Dish Pizzas - Non-Vegetarian",
    "isVeg": false,
    "price": 845,
    "basePrice": 845,
    "description": "Stuffing: Chicken pepperoni. Topping: Marinara, parmesan and basil.",
    "imagePath": "/assets/deep-dish-pizza/pepperoni-melt.webp",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-served-as-6-slices-3",
        "name": "Served as 6 slices",
        "price": 845,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "dish-panfire-overload-chicken-deep-dish-pizza",
    "name": "Panfire Overload Chicken Deep Dish Pizza",
    "category": "Deep Dish Pizzas - Non-Vegetarian",
    "isVeg": false,
    "price": 845,
    "basePrice": 845,
    "description": "Stuffing: Grilled chicken, smoked chicken and chicken sausage. Topping: Marinara, parmesan and basil.",
    "imagePath": "/assets/deep-dish-pizza/panfire-overload-chicken.webp",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-served-as-6-slices-4",
        "name": "Served as 6 slices",
        "price": 845,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "dish-panfire-four-meat-deep-dish-pizza",
    "name": "Panfire Four Meat Deep Dish Pizza",
    "category": "Deep Dish Pizzas - Non-Vegetarian",
    "isVeg": false,
    "price": 845,
    "basePrice": 845,
    "description": "Stuffing: Bacon, smoked chicken, chicken sausage and chicken pepperoni. Topping: Marinara, parmesan and basil.",
    "imagePath": "/assets/deep-dish-pizza/panfire-4-meat.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-served-as-6-slices-5",
        "name": "Served as 6 slices",
        "price": 845,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "dish-peri-peri-paneer-indie-thin-crust-pizza",
    "name": "Peri-Peri Paneer Indie Thin Crust Pizza",
    "category": "Indie Thin Crust Pizzas - Vegetarian",
    "isVeg": true,
    "price": 445,
    "basePrice": 445,
    "description": "Marinara, peri-peri paneer and red onion.",
    "imagePath": "/assets/indie-crust-pizza/peri-peri-paneer.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-served-as-8-slices",
        "name": "Served as 8 slices",
        "price": 445,
        "isVeg": true
      }
    ],
    "addons": []
  },
  {
    "id": "dish-mushroom-delight-indie-thin-crust-pizza",
    "name": "Mushroom Delight Indie Thin Crust Pizza",
    "category": "Indie Thin Crust Pizzas - Vegetarian",
    "isVeg": true,
    "price": 445,
    "basePrice": 445,
    "description": "Marinara, mushrooms and red onion.",
    "imagePath": "/assets/indie-crust-pizza/mushroom-delight.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-served-as-8-slices-2",
        "name": "Served as 8 slices",
        "price": 445,
        "isVeg": true
      }
    ],
    "addons": []
  },
  {
    "id": "dish-veggie-delight-indie-thin-crust-pizza",
    "name": "Veggie Delight Indie Thin Crust Pizza",
    "category": "Indie Thin Crust Pizzas - Vegetarian",
    "isVeg": true,
    "price": 445,
    "basePrice": 445,
    "description": "Marinara, bell peppers, red onion and black olives.",
    "imagePath": "/assets/indie-crust-pizza/veggie-delight.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-served-as-8-slices-3",
        "name": "Served as 8 slices",
        "price": 445,
        "isVeg": true
      }
    ],
    "addons": []
  },
  {
    "id": "dish-tandoori-chicken-indie-thin-crust-pizza",
    "name": "Tandoori Chicken Indie Thin Crust Pizza",
    "category": "Indie Thin Crust Pizzas - Non-Vegetarian",
    "isVeg": false,
    "price": 495,
    "basePrice": 495,
    "description": "Marinara, tandoori chicken and red onion.",
    "imagePath": "/assets/indie-crust-pizza/tandoori-chicken.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-served-as-8-slices-4",
        "name": "Served as 8 slices",
        "price": 495,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "dish-chicken-sausage-indie-thin-crust-pizza",
    "name": "Chicken Sausage Indie Thin Crust Pizza",
    "category": "Indie Thin Crust Pizzas - Non-Vegetarian",
    "isVeg": false,
    "price": 495,
    "basePrice": 495,
    "description": "Marinara and chicken sausage.",
    "imagePath": "/assets/indie-crust-pizza/chicken-sausage.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-served-as-8-slices-5",
        "name": "Served as 8 slices",
        "price": 495,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "dish-fully-loaded-indie-thin-crust-pizza",
    "name": "Fully Loaded Indie Thin Crust Pizza",
    "category": "Indie Thin Crust Pizzas - Non-Vegetarian",
    "isVeg": false,
    "price": 495,
    "basePrice": 495,
    "description": "Marinara, chicken sausage and grilled chicken.",
    "imagePath": "/assets/indie-crust-pizza/fully-loaded-chicken.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-served-as-8-slices-6",
        "name": "Served as 8 slices",
        "price": 495,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "asian-mushroom-cheese-dim-sum",
    "name": "Mushroom & Cheese Dim Sum",
    "category": "Dim Sum",
    "isVeg": true,
    "price": 340,
    "basePrice": 340,
    "description": "Mushrooms and carrot blended with cream cheese. 6 pieces per serving.",
    "imagePath": "/assets/dim-sums/mushroom-cream-cheese-dim-sum.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-spicy-cheesy-dim-sum",
    "name": "Spicy Cheesy Dim Sum",
    "category": "Dim Sum",
    "isVeg": true,
    "price": 370,
    "basePrice": 370,
    "description": "Cream cheese with Thai chilli and a touch of chilli flakes. 6 pieces per serving.",
    "imagePath": "/assets/dim-sums/spicy-cheesy-dimsum.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": true,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-spinach-cheese-dim-sum",
    "name": "Spinach & Cheese Dim Sum",
    "category": "Dim Sum",
    "isVeg": true,
    "price": 340,
    "basePrice": 340,
    "description": "Spinach and cream cheese. 6 pieces per serving",
    "imagePath": "/assets/dim-sums/spinach-and-cream-cheese-dim-sum.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-paneer-bok-choy-dim-sum",
    "name": "Paneer Bok Choy Dim Sum",
    "category": "Dim Sum",
    "isVeg": true,
    "price": 340,
    "basePrice": 340,
    "description": "Paneer, bok choy, ginger and chilli. 6 pieces per serving.",
    "imagePath": "/assets/dim-sums/paneer-bok-choy-dim-sum.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-spicy-cheesy-chicken-dim-sum",
    "name": "Spicy Cheesy Chicken Dim Sum",
    "category": "Dim Sum",
    "isVeg": false,
    "price": 380,
    "basePrice": 380,
    "description": "Minced chicken with cream cheese, coriander, spring onion and chilli oil. 6 pieces per serving.",
    "imagePath": "/assets/dim-sums/spicy-cheesy-chicken-dim-sum.webp",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": true,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-classic-chicken-dim-sum",
    "name": "Classic Chicken Dim Sum",
    "category": "Dim Sum",
    "isVeg": false,
    "price": 350,
    "basePrice": 350,
    "description": "Minced chicken, spring onion, sesame oil and mild seasoning. 6 pieces per serving.",
    "imagePath": "/assets/dim-sums/classic-chicken-dim-sum.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-vegetable-momos",
    "name": "Vegetable Momos",
    "category": "Momos",
    "isVeg": true,
    "price": 190,
    "basePrice": 190,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/vegetable-cheese-momos.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-vegetable-cheese-momos",
    "name": "Vegetable & Cheese Momos",
    "category": "Momos",
    "isVeg": true,
    "price": 220,
    "basePrice": 220,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/vegetable-cheese-momos.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-vegetable-gyoza",
    "name": "Vegetable Gyoza",
    "category": "Momos",
    "isVeg": true,
    "price": 220,
    "basePrice": 220,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/vegetable-cheese-momos.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-chicken-momos",
    "name": "Chicken Momos",
    "category": "Momos",
    "isVeg": false,
    "price": 230,
    "basePrice": 230,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/chicken-momos.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-chicken-cheese-momos",
    "name": "Chicken & Cheese Momos",
    "category": "Momos",
    "isVeg": false,
    "price": 250,
    "basePrice": 250,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/chicken-cheese-momos.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-chicken-gyoza",
    "name": "Chicken Gyoza",
    "category": "Momos",
    "isVeg": false,
    "price": 250,
    "basePrice": 250,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/chicken-momos.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-chicken-wontons",
    "name": "Chicken Wontons",
    "category": "Momos",
    "isVeg": false,
    "price": 300,
    "basePrice": 300,
    "description": "6 pieces per serving.",
    "imagePath": "/assets/momo-and-gyoza/chicken-momos.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-paneer-veggies-bao",
    "name": "Paneer & Veggies Bao",
    "category": "Baos",
    "isVeg": true,
    "price": 285,
    "basePrice": 285,
    "description": "Paneer and vegetables in a chilli-garlic sauce. 2 pieces per serving.",
    "imagePath": "/assets/bao/paneer-and-veggies-bao.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-cantonese-mushrooms-bao",
    "name": "Cantonese Mushrooms Bao",
    "category": "Baos",
    "isVeg": true,
    "price": 285,
    "basePrice": 285,
    "description": "Crispy chilli mushrooms with a creamy chilli mayo filling. 2 pieces per serving.",
    "imagePath": "/assets/bao/cantonese-mushroom-bao.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-prawn-frier-cracker-bao",
    "name": "Prawn Frier Cracker Bao",
    "category": "Baos",
    "isVeg": false,
    "price": 495,
    "basePrice": 495,
    "description": "Fried prawns with spicy mayo and wasabi mayo. 2 pieces per serving.",
    "imagePath": "/assets/bao/prawn-frier-cracker-bao.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-katsu-chicken-bao",
    "name": "Katsu Chicken Bao",
    "category": "Baos",
    "isVeg": false,
    "price": 395,
    "basePrice": 395,
    "description": "Crispy fried chicken with lettuce, cucumber and chilli sauce. 2 pieces per serving.",
    "imagePath": "/assets/bao/katsu-chicken-bao.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-teriyaki-chicken-bao",
    "name": "Teriyaki Chicken Bao",
    "category": "Baos",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Wok-tossed chicken in a savoury teriyaki and ginger-garlic sauce. 2 pieces per serving.",
    "imagePath": "/assets/bao/teriyaki-chicken-bao.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-korean-chicken-bao",
    "name": "Korean Chicken Bao",
    "category": "Baos",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Crispy chicken glazed in a spicy Korean sauce, layered with lettuce. 2 pieces per serving.",
    "imagePath": "/assets/bao/korean-chicken-bao.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-chilli-chicken-bao",
    "name": "Chilli Chicken Bao",
    "category": "Baos",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Wok-tossed chilli chicken with onions and bell peppers in a tangy chilli-garlic sauce. 2 pieces per serving.",
    "imagePath": "/assets/rice-bowls/chilli-chicken-rice-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-california-veg-sushi-4-pieces",
    "name": "California Veg Sushi - 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": true,
    "price": 315,
    "basePrice": 315,
    "description": "Cucumber, avocado, carrot and Japanese mayo.",
    "imagePath": "/assets/sushi/california-veg-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-avocado-cream-cheese-sushi-4-pieces",
    "name": "Avocado & Cream Cheese Sushi- 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Avocado, jalape\u00f1o, sesame seeds and cream cheese.",
    "imagePath": "/assets/sushi/avocado-and-cream-cheese-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-asparagus-tempura-sushi-4-pieces",
    "name": "Asparagus Tempura Sushi - 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": true,
    "price": 315,
    "basePrice": 315,
    "description": "Crispy asparagus tempura, carrot, cucumber and spicy mayo.",
    "imagePath": "/assets/sushi/asparagus-tempura-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-cream-cheese-filling-4-pcs",
    "name": "Cream Cheese Filling 4 pcs",
    "category": "Sushi - 4 Pieces",
    "isVeg": true,
    "price": 0,
    "basePrice": 0,
    "description": "Authentic Cream Cheese Filling 4 pcs freshly crafted with Asian herbs and wok techniques.",
    "imagePath": "/assets/sushi/avocado-and-cream-cheese-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-yasai-tempura-sushi-4-pieces",
    "name": "Yasai Tempura Sushi - 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": true,
    "price": 315,
    "basePrice": 315,
    "description": "Crispy tempura vegetables, bell peppers, wasabi mayo and tanuki.",
    "imagePath": "/assets/sushi/yassai-tempura-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-crispy-mushroom-sushi-4-pieces",
    "name": "Crispy Mushroom Sushi - 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": true,
    "price": 315,
    "basePrice": 315,
    "description": "Crispy peri-peri mushroom, cucumber, avocado, carrot, teriyaki and wasabi mayo.",
    "imagePath": "/assets/sushi/crispy-spinach-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-rainbow-sushi-4-pieces",
    "name": "Rainbow Sushi - 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": true,
    "price": 375,
    "basePrice": 375,
    "description": "Cream cheese, beetroot, seasonal fruit and cucumber.",
    "imagePath": "/assets/sushi/rainbow-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-crispy-spinach-sushi-4-pieces",
    "name": "Crispy Spinach Sushi - 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": true,
    "price": 315,
    "basePrice": 315,
    "description": "Carrot, crispy spinach, dynamite sauce and Japanese mayo, topped with spinach crumbs.",
    "imagePath": "/assets/sushi/crispy-spinach-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-american-california-sushi-4-pieces",
    "name": "American California Sushi- 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Grilled chicken, avocado, cucumber and sesame seeds, finished with Japanese mayo and wasabi mayo.",
    "imagePath": "/assets/sushi/american-california-chicken-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-peri-peri-chicken-sushi-4-pieces",
    "name": "Peri-Peri Chicken Sushi- 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Peri-peri grilled chicken, carrot and spicy mayo.",
    "imagePath": "/assets/sushi/peri-peri-chicken-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-katsu-chicken-sushi-4-pieces",
    "name": "Katsu Chicken Sushi - 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Grilled chicken, cucumber and carrot, in a crispy tempura-fried roll served with spicy mayo.",
    "imagePath": "/assets/sushi/katsu-chicken-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-teriyaki-chicken-sushi-4-pieces",
    "name": "Teriyaki Chicken Sushi - 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Chicken tempura, sesame seeds, spicy mayo and teriyaki glaze.",
    "imagePath": "/assets/sushi/teriyaki-chicken-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-dragon-uramaki-sushi-4-pieces",
    "name": "Dragon Uramaki Sushi- 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": false,
    "price": 395,
    "basePrice": 395,
    "description": "Prawn tempura and avocado with spicy mayo, sesame seeds and tanuki.",
    "imagePath": "/assets/sushi/dragon-uramaki.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-prawn-rock-n-roll-sushi-4-pieces",
    "name": "Prawn Rock 'N' Roll Sushi- 4 pieces",
    "category": "Sushi - 4 Pieces",
    "isVeg": false,
    "price": 445,
    "basePrice": 445,
    "description": "Prawn tempura, avocado and cucumber, topped with crispy dynamite prawns, spicy mayo, teriyaki, sesame and tanuki.",
    "imagePath": "/assets/sushi/avocado-and-cream-cheese-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-california-veg-sushi-8-pieces",
    "name": "California Veg Sushi - 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": true,
    "price": 545,
    "basePrice": 545,
    "description": "Cucumber, avocado, carrot and Japanese mayo.",
    "imagePath": "/assets/sushi/california-veg-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-avocado-cream-cheese-sushi-8-pieces",
    "name": "Avocado & Cream Cheese Sushi- 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": true,
    "price": 595,
    "basePrice": 595,
    "description": "Avocado, jalape\u00f1o, sesame seeds and cream cheese.",
    "imagePath": "/assets/sushi/avocado-and-cream-cheese-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-asparagus-tempura-sushi-8-pieces",
    "name": "Asparagus Tempura Sushi - 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": true,
    "price": 545,
    "basePrice": 545,
    "description": "Crispy asparagus tempura, carrot, cucumber and spicy mayo.",
    "imagePath": "/assets/sushi/asparagus-tempura-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-cream-cheese-filling-8-pcs",
    "name": "Cream Cheese Filling 8 pcs",
    "category": "Sushi - 8 Pieces",
    "isVeg": true,
    "price": 0,
    "basePrice": 0,
    "description": "Authentic Cream Cheese Filling 8 pcs freshly crafted with Asian herbs and wok techniques.",
    "imagePath": "/assets/sushi/avocado-and-cream-cheese-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-yasai-tempura-sushi-8-pieces",
    "name": "Yasai Tempura Sushi - 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": true,
    "price": 545,
    "basePrice": 545,
    "description": "Crispy tempura vegetables, bell peppers, wasabi mayo and tanuki.",
    "imagePath": "/assets/sushi/yassai-tempura-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-crispy-mushroom-sushi-8-pieces",
    "name": "Crispy Mushroom Sushi - 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": true,
    "price": 545,
    "basePrice": 545,
    "description": "Crispy peri-peri mushroom, cucumber, avocado, carrot, teriyaki and wasabi mayo.",
    "imagePath": "/assets/sushi/crispy-spinach-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-rainbow-sushi-8-pieces",
    "name": "Rainbow Sushi - 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": true,
    "price": 645,
    "basePrice": 645,
    "description": "Cream cheese, beetroot, seasonal fruit and cucumber.",
    "imagePath": "/assets/sushi/rainbow-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-crispy-spinach-sushi-8-pieces",
    "name": "Crispy Spinach Sushi - 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": true,
    "price": 545,
    "basePrice": 545,
    "description": "Carrot, crispy spinach, dynamite sauce and Japanese mayo, topped with spinach crumbs.",
    "imagePath": "/assets/sushi/crispy-spinach-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-american-california-sushi-8-pieces",
    "name": "American California Sushi- 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": false,
    "price": 595,
    "basePrice": 595,
    "description": "Grilled chicken, avocado, cucumber and sesame seeds, finished with Japanese mayo and wasabi mayo.",
    "imagePath": "/assets/sushi/american-california-chicken-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-peri-peri-chicken-sushi-8-pieces",
    "name": "Peri-Peri Chicken Sushi- 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": false,
    "price": 595,
    "basePrice": 595,
    "description": "Peri-peri grilled chicken, carrot and spicy mayo.",
    "imagePath": "/assets/sushi/peri-peri-chicken-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-katsu-chicken-sushi-8-pieces",
    "name": "Katsu Chicken Sushi - 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": false,
    "price": 595,
    "basePrice": 595,
    "description": "Grilled chicken, cucumber and carrot, in a crispy tempura-fried roll served with spicy mayo.",
    "imagePath": "/assets/sushi/katsu-chicken-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-teriyaki-chicken-sushi-8-pieces",
    "name": "Teriyaki Chicken Sushi - 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": false,
    "price": 595,
    "basePrice": 595,
    "description": "Chicken tempura, sesame seeds, spicy mayo and teriyaki glaze.",
    "imagePath": "/assets/sushi/teriyaki-chicken-sushi.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-dragon-uramaki-sushi-8-pieces",
    "name": "Dragon Uramaki Sushi- 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": false,
    "price": 645,
    "basePrice": 645,
    "description": "Prawn tempura and avocado with spicy mayo, sesame seeds and tanuki.",
    "imagePath": "/assets/sushi/dragon-uramaki.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-prawn-rock-n-roll-sushi-8-pieces",
    "name": "Prawn Rock 'N' Roll Sushi- 8 pieces",
    "category": "Sushi - 8 Pieces",
    "isVeg": false,
    "price": 895,
    "basePrice": 895,
    "description": "Prawn tempura, avocado and cucumber, topped with crispy dynamite prawns, spicy mayo, teriyaki, sesame and tanuki.",
    "imagePath": "/assets/sushi/avocado-and-cream-cheese-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "soup-manchow-soup",
    "name": "Manchow Soup",
    "category": "Soups",
    "isVeg": true,
    "price": 175,
    "basePrice": 175,
    "description": "Spicy and tangy dark soya broth with ginger, garlic, fresh coriander and crispy fried noodles.",
    "imagePath": "/assets/soups/manchow-soup.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": true,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian",
        "name": "Vegetarian",
        "price": 175,
        "isVeg": true
      },
      {
        "id": "var-chicken",
        "name": "Chicken",
        "price": 225,
        "isVeg": false
      },
      {
        "id": "var-prawn",
        "name": "Prawn",
        "price": 295,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "soup-tom-kha-soup",
    "name": "Tom Kha Soup",
    "category": "Soups",
    "isVeg": true,
    "price": 215,
    "basePrice": 215,
    "description": "Creamy Thai coconut broth with galangal, lemongrass and kaffir lime leaves.",
    "imagePath": "/assets/soups/tom-kha-soup.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-2",
        "name": "Vegetarian",
        "price": 215,
        "isVeg": true
      },
      {
        "id": "var-chicken-2",
        "name": "Chicken",
        "price": 275,
        "isVeg": false
      },
      {
        "id": "var-prawn-2",
        "name": "Prawn",
        "price": 345,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "soup-sweet-corn-soup",
    "name": "Sweet Corn Soup",
    "category": "Soups",
    "isVeg": true,
    "price": 145,
    "basePrice": 145,
    "description": "Classic comforting creamy sweet corn soup with tender vegetables and mild seasonings.",
    "imagePath": "/assets/soups/sweet-corn-soup.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": true,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-3",
        "name": "Vegetarian",
        "price": 145,
        "isVeg": true
      },
      {
        "id": "var-chicken-3",
        "name": "Chicken",
        "price": 195,
        "isVeg": false
      },
      {
        "id": "var-prawn-3",
        "name": "Prawn",
        "price": 295,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "soup-hot-sour-soup",
    "name": "Hot & Sour Soup",
    "category": "Soups",
    "isVeg": true,
    "price": 175,
    "basePrice": 175,
    "description": "Hearty, bold broth infused with red chillies, vinegar, white pepper and sliced mushrooms.",
    "imagePath": "/assets/soups/hot-n-sour-soup.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-4",
        "name": "Vegetarian",
        "price": 175,
        "isVeg": true
      },
      {
        "id": "var-chicken-4",
        "name": "Chicken",
        "price": 225,
        "isVeg": false
      },
      {
        "id": "var-prawn-4",
        "name": "Prawn",
        "price": 295,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "soup-tom-yum-soup",
    "name": "Tom Yum Soup",
    "category": "Soups",
    "isVeg": true,
    "price": 175,
    "basePrice": 175,
    "description": "Hot and sour Thai broth with lemongrass, kaffir lime leaves and fiery bird eye chilli.",
    "imagePath": "/assets/soups/tom-yum-soup.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-5",
        "name": "Vegetarian",
        "price": 175,
        "isVeg": true
      },
      {
        "id": "var-chicken-5",
        "name": "Chicken",
        "price": 225,
        "isVeg": false
      },
      {
        "id": "var-prawn-5",
        "name": "Prawn",
        "price": 295,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "soup-lemon-coriander-soup",
    "name": "Lemon Coriander Soup",
    "category": "Soups",
    "isVeg": true,
    "price": 145,
    "basePrice": 145,
    "description": "Clear aromatic broth enriched with zesty fresh lemon juice, crushed garlic and fresh coriander.",
    "imagePath": "/assets/soups/lemon-coriander-soup.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-6",
        "name": "Vegetarian",
        "price": 145,
        "isVeg": true
      },
      {
        "id": "var-chicken-6",
        "name": "Chicken",
        "price": 195,
        "isVeg": false
      },
      {
        "id": "var-prawn-6",
        "name": "Prawn",
        "price": 295,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "asian-salt-pepper-corn",
    "name": "Salt & Pepper Corn",
    "category": "Appetisers",
    "isVeg": true,
    "price": 315,
    "basePrice": 315,
    "description": "Thai-style crispy fried corn.",
    "imagePath": "/assets/appetisers/salt-and-pepper-corn.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-veg-cheese-corn-roll",
    "name": "Veg Cheese Corn Roll",
    "category": "Appetisers",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Crispy rolls filled with saut\u00e9ed vegetables, mozzarella and sweet corn. 6 pieces per serving.",
    "imagePath": "/assets/appetisers/veg-cheese-corn-roll.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-chilli-potato",
    "name": "Chilli Potato",
    "category": "Appetisers",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Crispy fried potatoes tossed in chilli sauce with bell peppers and spring onion.",
    "imagePath": "/assets/appetisers/chilli-potato.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-honey-chilli-cauliflower",
    "name": "Honey Chilli Cauliflower",
    "category": "Appetisers",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Crispy fried cauliflower tossed in honey garlic sauce.",
    "imagePath": "/assets/appetisers/honey-chilli-cauliflower.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-manchurian",
    "name": "Manchurian",
    "category": "Appetisers",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Crispy vegetable balls in a spicy, tangy Indo-Chinese sauce.",
    "imagePath": "/assets/appetisers/manchurian.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-chilli-paneer",
    "name": "Chilli Paneer",
    "category": "Appetisers",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Crispy paneer coated in a sweet-and-spicy Indo-Chinese glaze.",
    "imagePath": "/assets/appetisers/chilli-paneer.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-thai-basil-paneer",
    "name": "Thai Basil Paneer",
    "category": "Appetisers",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Crispy paneer tossed in a fragrant Thai basil sauce.",
    "imagePath": "/assets/appetisers/thai-basil-paneer.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-mushroom-shanghai",
    "name": "Mushroom Shanghai",
    "category": "Appetisers",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Crispy mushrooms tossed in a spicy Shanghai-style soy sauce.",
    "imagePath": "/assets/appetisers/mushroom-shanghai.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-crispy-lotus-stem",
    "name": "Crispy Lotus Stem",
    "category": "Appetisers",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Crispy lotus stem coated in a sweet-and-spicy glaze.",
    "imagePath": "/assets/appetisers/crispy-lotus-stem.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-korean-water-chestnut",
    "name": "Korean Water Chestnut",
    "category": "Appetisers",
    "isVeg": true,
    "price": 395,
    "basePrice": 395,
    "description": "Crispy water chestnuts tossed in a flavourful spicy sauce.",
    "imagePath": "/assets/appetisers/korean-water-chestnut.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-saut-ed-veggies",
    "name": "Saut\u00e9ed Veggies",
    "category": "Appetisers",
    "isVeg": true,
    "price": 445,
    "basePrice": 445,
    "description": "Saut\u00e9ed vegetables served in your choice of sauce.",
    "imagePath": "/assets/appetisers/sauteed-veggies.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-paneer-bok-choy",
    "name": "Paneer Bok Choy",
    "category": "Appetisers",
    "isVeg": true,
    "price": 445,
    "basePrice": 445,
    "description": "Paneer and crisp bok choy tossed in a light, spicy Asian garlic sauce.",
    "imagePath": "/assets/appetisers/paneer-bok-choy-appetiser.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-cigar-roll",
    "name": "Cigar Roll",
    "category": "Appetisers",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Crispy rolls filled with pulled chicken and melted mozzarella. 6 pieces per serving.",
    "imagePath": "/assets/appetisers/cigar-roll.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-traditional-chicken-satay",
    "name": "Traditional Chicken Satay",
    "category": "Appetisers",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Grilled chicken and bell pepper skewers in a rich, creamy peanut sauce. 3 sticks per serving.",
    "imagePath": "/assets/appetisers/chicken-satay.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-crispy-honey-chicken",
    "name": "Crispy Honey Chicken",
    "category": "Appetisers",
    "isVeg": false,
    "price": 395,
    "basePrice": 395,
    "description": "Crispy chicken wok-tossed with spring onions and bell peppers in a sweet-and-spicy honey chilli glaze.",
    "imagePath": "/assets/appetisers/crispy-honey-chicken.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-hot-basil-chicken",
    "name": "Hot Basil Chicken",
    "category": "Appetisers",
    "isVeg": false,
    "price": 395,
    "basePrice": 395,
    "description": "Crispy chicken and vegetables wok-tossed in a fragrant, spicy hot basil sauce.",
    "imagePath": "/assets/appetisers/hot-basil-chciken.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-wok-tossed-chicken",
    "name": "Wok-Tossed Chicken",
    "category": "Appetisers",
    "isVeg": false,
    "price": 395,
    "basePrice": 395,
    "description": "Crispy fried chicken wok-tossed with vegetables in a spicy, tangy hot garlic sauce with a hint of sweetness.",
    "imagePath": "/assets/appetisers/wok-tossed-chicken.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-rock-shrimp-tempura",
    "name": "Rock Shrimp Tempura",
    "category": "Appetisers",
    "isVeg": false,
    "price": 795,
    "basePrice": 795,
    "description": "Bite-sized tempura prawns tossed in a creamy, spicy dynamite sauce.",
    "imagePath": "/assets/appetisers/rock-shrimp-tempura.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-katsu-chicken",
    "name": "Katsu Chicken",
    "category": "Appetisers",
    "isVeg": false,
    "price": 395,
    "basePrice": 395,
    "description": "Crispy fried chicken, tender on the inside, finished with teriyaki glaze, dynamite sauce and sesame seeds.",
    "imagePath": "/assets/appetisers/chicken-katsu.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-hot-garlic-prawn",
    "name": "Hot Garlic Prawn",
    "category": "Appetisers",
    "isVeg": false,
    "price": 745,
    "basePrice": 745,
    "description": "Crispy prawns tossed in a spicy, buttery hot garlic sauce.",
    "imagePath": "/assets/appetisers/hot-garlic-prawn.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "noodle-butter-burnt-garlic-noodles",
    "name": "Butter & Burnt Garlic Noodles",
    "category": "Noodles",
    "isVeg": true,
    "price": 275,
    "basePrice": 275,
    "description": "Noodles tossed with butter, golden garlic and crisp vegetables.",
    "imagePath": "/assets/noodles/butter-and-burnt-garlic-noodles.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-7",
        "name": "Vegetarian",
        "price": 275,
        "isVeg": true
      },
      {
        "id": "var-chicken-7",
        "name": "Chicken",
        "price": 325,
        "isVeg": false
      },
      {
        "id": "var-prawn-7",
        "name": "Prawn",
        "price": 415,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "noodle-chilli-garlic-noodles",
    "name": "Chilli Garlic Noodles",
    "category": "Noodles",
    "isVeg": true,
    "price": 275,
    "basePrice": 275,
    "description": "Noodles tossed with vegetables in a fragrant chilli-garlic oil.",
    "imagePath": "/assets/noodles/chilli-garlic-noodles.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-8",
        "name": "Vegetarian",
        "price": 275,
        "isVeg": true
      },
      {
        "id": "var-chicken-8",
        "name": "Chicken",
        "price": 325,
        "isVeg": false
      },
      {
        "id": "var-prawn-8",
        "name": "Prawn",
        "price": 415,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "noodle-schezwan-noodles",
    "name": "Schezwan Noodles",
    "category": "Noodles",
    "isVeg": true,
    "price": 275,
    "basePrice": 275,
    "description": "Noodles wok-tossed with vegetables in a spicy, tangy Schezwan sauce.",
    "imagePath": "/assets/noodles/schezwan-noodles.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-9",
        "name": "Vegetarian",
        "price": 275,
        "isVeg": true
      },
      {
        "id": "var-chicken-9",
        "name": "Chicken",
        "price": 325,
        "isVeg": false
      },
      {
        "id": "var-prawn-9",
        "name": "Prawn",
        "price": 415,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "noodle-hakka-noodles",
    "name": "Hakka Noodles",
    "category": "Noodles",
    "isVeg": true,
    "price": 245,
    "basePrice": 245,
    "description": "Indo-Chinese noodles wok-tossed with vegetables and mild seasoning.",
    "imagePath": "/assets/noodles/singaporean-hakka-noodles.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": true,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-10",
        "name": "Vegetarian",
        "price": 245,
        "isVeg": true
      },
      {
        "id": "var-chicken-10",
        "name": "Chicken",
        "price": 295,
        "isVeg": false
      },
      {
        "id": "var-prawn-10",
        "name": "Prawn",
        "price": 395,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "noodle-singaporean-hakka-noodles",
    "name": "Singaporean Hakka Noodles",
    "category": "Noodles",
    "isVeg": true,
    "price": 275,
    "basePrice": 275,
    "description": "Noodles wok-tossed with vegetables, curry spices and mild chilli.",
    "imagePath": "/assets/noodles/singaporean-hakka-noodles.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-11",
        "name": "Vegetarian",
        "price": 275,
        "isVeg": true
      },
      {
        "id": "var-chicken-11",
        "name": "Chicken",
        "price": 325,
        "isVeg": false
      },
      {
        "id": "var-prawn-11",
        "name": "Prawn",
        "price": 415,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "noodle-udon-noodles",
    "name": "Udon Noodles",
    "category": "Noodles",
    "isVeg": true,
    "price": 495,
    "basePrice": 495,
    "description": "Thick udon noodles tossed with crunchy vegetables in your choice of spicy Korean or creamy peanut sauce.",
    "imagePath": "/assets/noodles/udon-noodles.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-spicy-korean-sauce",
        "name": "Vegetarian (Spicy Korean Sauce)",
        "price": 495,
        "isVeg": true
      },
      {
        "id": "var-vegetarian-peanut-butter-sauce",
        "name": "Vegetarian (Peanut Butter Sauce)",
        "price": 495,
        "isVeg": true
      },
      {
        "id": "var-chicken-spicy-korean-sauce",
        "name": "Chicken (Spicy Korean Sauce)",
        "price": 545,
        "isVeg": false
      },
      {
        "id": "var-chicken-peanut-butter-sauce",
        "name": "Chicken (Peanut Butter Sauce)",
        "price": 545,
        "isVeg": false
      },
      {
        "id": "var-prawn-spicy-korean-sauce",
        "name": "Prawn (Spicy Korean Sauce)",
        "price": 645,
        "isVeg": false
      },
      {
        "id": "var-prawn-peanut-butter-sauce",
        "name": "Prawn (Peanut Butter Sauce)",
        "price": 645,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "bowl-thukpa",
    "name": "Thukpa",
    "category": "Noodle Bowls",
    "isVeg": true,
    "price": 344,
    "basePrice": 344,
    "description": "Tibetan noodle soup with vegetables, ginger, garlic and fragrant broth.",
    "imagePath": "/assets/noodles/thukpa.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": true,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-12",
        "name": "Vegetarian",
        "price": 344,
        "isVeg": true
      },
      {
        "id": "var-chicken-12",
        "name": "Chicken",
        "price": 395,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "bowl-ramen",
    "name": "Ramen",
    "category": "Noodle Bowls",
    "isVeg": true,
    "price": 495,
    "basePrice": 495,
    "description": "Rich Japanese broth with wheat noodles, fresh greens and savory garnishes.",
    "imagePath": "/assets/noodles/ramen-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-13",
        "name": "Vegetarian",
        "price": 495,
        "isVeg": true
      },
      {
        "id": "var-chicken-13",
        "name": "Chicken",
        "price": 545,
        "isVeg": false
      },
      {
        "id": "var-prawn-12",
        "name": "Prawn",
        "price": 645,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "bowl-khao-suey",
    "name": "Khao Suey",
    "category": "Noodle Bowls",
    "isVeg": true,
    "price": 545,
    "basePrice": 545,
    "description": "Burmese coconut milk curry noodle soup served with an array of crunchy condiments.",
    "imagePath": "/assets/noodles/chopsuey.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-14",
        "name": "Vegetarian",
        "price": 545,
        "isVeg": true
      },
      {
        "id": "var-chicken-14",
        "name": "Chicken",
        "price": 595,
        "isVeg": false
      },
      {
        "id": "var-prawn-13",
        "name": "Prawn",
        "price": 675,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "bowl-pan-fried-noodles",
    "name": "Pan-Fried Noodles",
    "category": "Noodle Bowls",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Crispy pan-fried noodles served with vegetables in your choice of sauce.",
    "imagePath": "/assets/noodles/pan-fried-noodles.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-15",
        "name": "Vegetarian",
        "price": 345,
        "isVeg": true
      },
      {
        "id": "var-chicken-15",
        "name": "Chicken",
        "price": 395,
        "isVeg": false
      },
      {
        "id": "var-prawn-14",
        "name": "Prawn",
        "price": 475,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "bowl-oriental-bowl",
    "name": "Oriental Bowl",
    "category": "Noodle Bowls",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Hearty Asian meal bowl with wok-charred noodles, fresh greens and savory sauce.",
    "imagePath": "/assets/noodles/oriental-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-16",
        "name": "Vegetarian",
        "price": 345,
        "isVeg": true
      },
      {
        "id": "var-chicken-16",
        "name": "Chicken",
        "price": 395,
        "isVeg": false
      },
      {
        "id": "var-prawn-15",
        "name": "Prawn",
        "price": 475,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "bowl-chop-suey",
    "name": "Chop Suey",
    "category": "Noodle Bowls",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Crispy fried noodles topped with vegetables in sweet and sour Indo-Chinese sauce.",
    "imagePath": "/assets/noodles/chopsuey.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-17",
        "name": "Vegetarian",
        "price": 345,
        "isVeg": true
      },
      {
        "id": "var-chicken-17",
        "name": "Chicken",
        "price": 395,
        "isVeg": false
      }
    ],
    "addons": []
  },
  {
    "id": "curry-thai-green-curry",
    "name": "Thai Green Curry",
    "category": "Curries",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "A fragrant Thai green curry with coconut milk, vegetables and fresh herbs. Rice not included.",
    "imagePath": "/assets/rice-bowls/thai-pineapple-n-egg-fried-rice.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": true,
    "spicyLevel": 2,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-18",
        "name": "Vegetarian",
        "price": 365,
        "isVeg": true
      },
      {
        "id": "var-chicken-18",
        "name": "Chicken",
        "price": 425,
        "isVeg": false
      },
      {
        "id": "var-prawn-16",
        "name": "Prawn",
        "price": 645,
        "isVeg": false
      }
    ],
    "addons": [
      {
        "id": "addon-steamed-rice",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "addon-fried-rice",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "addon-jasmine-rice",
        "name": "Jasmine Rice",
        "price": 199
      }
    ]
  },
  {
    "id": "curry-thai-red-curry",
    "name": "Thai Red Curry",
    "category": "Curries",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "A rich Thai red curry with coconut milk, vegetables and aromatic spices. Rice not included.",
    "imagePath": "/assets/rice-bowls/thai-pineapple-n-egg-fried-rice.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 2,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-19",
        "name": "Vegetarian",
        "price": 365,
        "isVeg": true
      },
      {
        "id": "var-chicken-19",
        "name": "Chicken",
        "price": 425,
        "isVeg": false
      },
      {
        "id": "var-prawn-17",
        "name": "Prawn",
        "price": 645,
        "isVeg": false
      }
    ],
    "addons": [
      {
        "id": "addon-steamed-rice-2",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "addon-fried-rice-2",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "addon-jasmine-rice-2",
        "name": "Jasmine Rice",
        "price": 199
      }
    ]
  },
  {
    "id": "curry-burmese-yellow-curry",
    "name": "Burmese Yellow Curry",
    "category": "Curries",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Rich Burmese coconut curry with mild spices. Rice not included.",
    "imagePath": "/assets/pizza/classic-margherita.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 2,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-vegetarian-20",
        "name": "Vegetarian",
        "price": 365,
        "isVeg": true
      },
      {
        "id": "var-chicken-20",
        "name": "Chicken",
        "price": 425,
        "isVeg": false
      },
      {
        "id": "var-prawn-18",
        "name": "Prawn",
        "price": 645,
        "isVeg": false
      }
    ],
    "addons": [
      {
        "id": "addon-steamed-rice-3",
        "name": "Steamed Rice",
        "price": 129
      },
      {
        "id": "addon-fried-rice-3",
        "name": "Fried Rice",
        "price": 179
      },
      {
        "id": "addon-jasmine-rice-3",
        "name": "Jasmine Rice",
        "price": 199
      }
    ]
  },
  {
    "id": "asian-paneer-krapow",
    "name": "Paneer Krapow",
    "category": "Rice Bowls",
    "isVeg": true,
    "price": 425,
    "basePrice": 425,
    "description": "Thai basil, chilli and garlic wok-tossed with minced paneer, served over jasmine rice.",
    "imagePath": "/assets/rice-bowls/chilli-paneer-rice-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-kimchi-rice-bowl",
    "name": "Kimchi Rice Bowl",
    "category": "Rice Bowls",
    "isVeg": true,
    "price": 445,
    "basePrice": 445,
    "description": "Grilled paneer, corn, mushrooms and bok choy tossed in a sweet-and-spicy kimchi sauce, served with jasmine rice.",
    "imagePath": "/assets/rice-bowls/kimchi-pickle-rice-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-chilli-paneer-rice-bowl",
    "name": "Chilli Paneer Rice Bowl",
    "category": "Rice Bowls",
    "isVeg": true,
    "price": 395,
    "basePrice": 395,
    "description": "Sweet-and-spicy Indo-Chinese sauce with crispy paneer, peppers and onions, served over fried rice.",
    "imagePath": "/assets/rice-bowls/chilli-paneer-rice-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-thai-basil-paneer-fried-rice-bowl",
    "name": "Thai Basil Paneer & Fried Rice Bowl",
    "category": "Rice Bowls",
    "isVeg": true,
    "price": 395,
    "basePrice": 395,
    "description": "Fresh Thai basil and savoury aromatics wok-tossed with paneer, served with vegetable fried rice.",
    "imagePath": "/assets/rice-bowls/thai-basil-paneer-fried-rice.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-chilli-mushroom-rice-bowl",
    "name": "Chilli Mushroom Rice Bowl",
    "category": "Rice Bowls",
    "isVeg": true,
    "price": 395,
    "basePrice": 395,
    "description": "Crispy mushrooms in a spicy soy-garlic sauce, served over fried rice.",
    "imagePath": "/assets/rice-bowls/chilli-mushroom-rice-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-manchurian-rice-bowl",
    "name": "Manchurian Rice Bowl",
    "category": "Rice Bowls",
    "isVeg": true,
    "price": 375,
    "basePrice": 375,
    "description": "Crispy vegetable Manchurian in a rich, tangy sauce, served over fried rice.",
    "imagePath": "/assets/rice-bowls/thai-pineapple-n-egg-fried-rice.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-nasi-goreng",
    "name": "Nasi Goreng",
    "category": "Rice Bowls",
    "isVeg": false,
    "price": 445,
    "basePrice": 445,
    "description": "Indonesian fried rice with chicken, vegetables and a savoury peanut butter sauce, served with fried chicken and a sunny-side-up egg.",
    "imagePath": "/assets/rice-bowls/nasi-goreng.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-krapow-jasmine-rice-bowl",
    "name": "Krapow Jasmine Rice Bowl",
    "category": "Rice Bowls",
    "isVeg": false,
    "price": 445,
    "basePrice": 445,
    "description": "Thai basil, chilli and garlic wok-tossed with minced chicken, served over fragrant jasmine rice.",
    "imagePath": "/assets/rice-bowls/krapow-jasmine-rice-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-katsu-chicken-rice-bowl",
    "name": "Katsu Chicken Rice Bowl",
    "category": "Rice Bowls",
    "isVeg": false,
    "price": 445,
    "basePrice": 445,
    "description": "Golden crispy chicken katsu served over jasmine rice with creamy garlic sauce and tangy ginger pickle.",
    "imagePath": "/assets/rice-bowls/katsu-chickwn-rice-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-chilli-chicken-rice-bowl",
    "name": "Chilli Chicken Rice Bowl",
    "category": "Rice Bowls",
    "isVeg": false,
    "price": 425,
    "basePrice": 425,
    "description": "Crispy chilli chicken with peppers and onions in a spicy Indo-Chinese sauce, served over fried rice.",
    "imagePath": "/assets/rice-bowls/chilli-chicken-rice-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-thai-pineapple-chicken-egg-fried-rice-bowl",
    "name": "Thai Pineapple, Chicken & Egg Fried Rice bowl",
    "category": "Rice Bowls",
    "isVeg": false,
    "price": 445,
    "basePrice": 445,
    "description": "Fragrant fried rice with chicken, egg, vegetables and caramelised pineapple in a sweet-and-spicy chilli basil sauce.",
    "imagePath": "/assets/rice-bowls/thai-pineapple-n-egg-fried-rice.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "asian-chilli-prawn-rice-bowl",
    "name": "Chilli Prawn Rice Bowl",
    "category": "Rice Bowls",
    "isVeg": false,
    "price": 595,
    "basePrice": 595,
    "description": "Crispy prawns in a bold hot garlic sauce, served over fried rice.",
    "imagePath": "/assets/rice-bowls/chilli-prawn-rice-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-caprese-salad",
    "name": "Caprese Salad",
    "category": "Salads",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Rocket leaves, freshly sliced tomatoes, bocconcini and basil pesto, finished with mild seasoning and a balsamic reduction.",
    "imagePath": "/assets/napoli-sandwiches/caprese-sandwich.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-caprese-grilled-chicken",
        "name": "Caprese Grilled Chicken",
        "price": 50
      }
    ]
  },
  {
    "id": "dish-caesar-salad",
    "name": "Caesar Salad",
    "category": "Salads",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Lettuce, crunchy croutons, saut\u00e9ed bell peppers and sweetcorn, tossed in a creamy mustard-mayo dressing, finished with parmesan.",
    "imagePath": "/assets/salad/caesar-salad.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-caesar-grilled-chicken",
        "name": "Caesar Grilled Chicken",
        "price": 50
      }
    ]
  },
  {
    "id": "dish-apple-salad",
    "name": "Apple Salad",
    "category": "Salads",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Crisp green apple and orange slices tossed with mixed lettuce, crunchy nuts and a refreshing honey-lemon dressing.",
    "imagePath": "/assets/rice-bowls/thai-pineapple-n-egg-fried-rice.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-apple-grilled-chicken",
        "name": "Apple Grilled Chicken",
        "price": 50
      }
    ]
  },
  {
    "id": "dish-watermelon-salad",
    "name": "Watermelon Salad",
    "category": "Salads",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Watermelon, burrata, lettuce and feta tossed in a honey-lemon dressing.",
    "imagePath": "/assets/salad/watermelon-salad.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-watermelon-grilled-chicken",
        "name": "Watermelon Grilled chicken",
        "price": 50
      }
    ]
  },
  {
    "id": "dish-rucola-burrata-salad",
    "name": "Rucola Burrata Salad",
    "category": "Salads",
    "isVeg": true,
    "price": 445,
    "basePrice": 445,
    "description": "Rocket leaves, cherry tomatoes, burrata and pesto tossed in a honey-balsamic dressing and finished with a delicate balsamic reduction.",
    "imagePath": "/assets/garlic-bread/asparagus-burrata.webp",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-rucola-burrata-grilled-chicken",
        "name": "Rucola Burrata Grilled Chicken",
        "price": 50
      }
    ]
  },
  {
    "id": "dish-sourdough-smash-veggie-cheese-burger",
    "name": "Sourdough Smash Veggie Cheese Burger",
    "category": "Sourdough Burgers- Vegetarian",
    "isVeg": true,
    "price": 350,
    "basePrice": 350,
    "description": "A hand-crafted potato, mushroom, corn and mozzarella patty, smashed and grilled until golden, topped with crisp lettuce, tomato, gherkins, caramelised onions and cheese, served in a freshly baked wood-fired sourdough bun.",
    "imagePath": "/assets/sourdough-burgers/smash-veggie-cheese-sourdough-burger.webp",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-sourdough-smash-chicken-cheese-burger",
    "name": "Sourdough Smash Chicken Cheese Burger",
    "category": "Sourdough Burgers- Non-Vegetarian",
    "isVeg": false,
    "price": 380,
    "basePrice": 380,
    "description": "A hand-crafted chicken patty, smashed and grilled until golden, layered with crisp lettuce, tomato, gherkins, caramelised onions and cheese, served in a freshly baked wood-fired sourdough bun.",
    "imagePath": "/assets/sourdough-burgers/smash-chicken-cheese-sourdough-burger.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-arrabbiata-pasta",
    "name": "Arrabbiata Pasta",
    "category": "Pasta",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Fiery San Marzano tomato sauce tossed with fresh capsicum, broccoli and zucchini.",
    "imagePath": "/assets/pasta/arrabbiata-pasta.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-spaghetti-2",
        "name": "Spaghetti",
        "price": 365,
        "isVeg": true
      },
      {
        "id": "var-penne-2",
        "name": "Penne",
        "price": 365,
        "isVeg": true
      }
    ],
    "addons": [
      {
        "id": "addon-chicken",
        "name": "Add Grilled Chicken",
        "price": 50
      }
    ]
  },
  {
    "id": "dish-alfredo-pasta",
    "name": "Alfredo Pasta",
    "category": "Pasta",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Velvety parmesan cream sauce tossed with garlic-herb saut\u00e9ed mushrooms.",
    "imagePath": "/assets/pasta/alfredo-pasta.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-spaghetti-4",
        "name": "Spaghetti",
        "price": 365,
        "isVeg": true
      },
      {
        "id": "var-penne-4",
        "name": "Penne",
        "price": 365,
        "isVeg": true
      }
    ],
    "addons": [
      {
        "id": "addon-chicken-2",
        "name": "Add Grilled Chicken",
        "price": 50
      }
    ]
  },
  {
    "id": "dish-pesto-pasta",
    "name": "Pesto Pasta",
    "category": "Pasta",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Vibrant house-made basil pesto tossed with bell peppers, broccoli and zucchini.",
    "imagePath": "/assets/pasta/pesto-pastaa.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-spaghetti-6",
        "name": "Spaghetti",
        "price": 365,
        "isVeg": true
      },
      {
        "id": "var-penne-6",
        "name": "Penne",
        "price": 365,
        "isVeg": true
      }
    ],
    "addons": [
      {
        "id": "addon-chicken-3",
        "name": "Add Grilled Chicken",
        "price": 50
      }
    ]
  },
  {
    "id": "dish-aglio-e-olio-pasta",
    "name": "Aglio e Olio Pasta",
    "category": "Pasta",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "Spaghetti tossed in extra-virgin olive oil, garlic, sun-dried tomatoes and black olives.",
    "imagePath": "/assets/pasta/aglio-olio-pasta.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-spaghetti-7",
        "name": "Spaghetti",
        "price": 365,
        "isVeg": true
      },
      {
        "id": "var-penne-7",
        "name": "Penne",
        "price": 365,
        "isVeg": true
      }
    ],
    "addons": [
      {
        "id": "addon-chicken-4",
        "name": "Add Grilled Chicken",
        "price": 50
      }
    ]
  },
  {
    "id": "dish-ros-pasta",
    "name": "Ros\u00e9 Pasta",
    "category": "Pasta",
    "isVeg": true,
    "price": 365,
    "basePrice": 365,
    "description": "A creamy blend of white sauce and tangy tomato sauce, tossed with fresh garden vegetables.",
    "imagePath": "/assets/pasta/rose-pasta.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": true,
    "variants": [
      {
        "id": "var-spaghetti-9",
        "name": "Spaghetti",
        "price": 365,
        "isVeg": true
      },
      {
        "id": "var-penne-9",
        "name": "Penne",
        "price": 365,
        "isVeg": true
      }
    ],
    "addons": [
      {
        "id": "addon-chicken-5",
        "name": "Add Grilled Chicken",
        "price": 50
      }
    ]
  },
  {
    "id": "dish-loaded-vegetables-sandwich",
    "name": "Loaded Vegetables Sandwich",
    "category": "Napoli Sandwiches - Vegetarian",
    "isVeg": true,
    "price": 295,
    "basePrice": 295,
    "description": "Freshly prepared Loaded Vegetables Sandwich made with premium ingredients in our kitchen.",
    "imagePath": "/assets/napoli-sandwiches/loaded-vegetables-sandwich.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-sun-dried-tomato-pesto-sandwich",
    "name": "Sun-Dried Tomato Pesto Sandwich",
    "category": "Napoli Sandwiches - Vegetarian",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Sun-Dried Tomato Pesto Sandwich made with premium ingredients in our kitchen.",
    "imagePath": "/assets/napoli-sandwiches/sundried-tomato-pesto.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-pesto-paneer-sandwich",
    "name": "Pesto Paneer Sandwich",
    "category": "Napoli Sandwiches - Vegetarian",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Pesto Paneer Sandwich made with premium ingredients in our kitchen.",
    "imagePath": "/assets/pizza/pesto-paneer.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-mushroom-cheese-sandwich",
    "name": "Mushroom & Cheese Sandwich",
    "category": "Napoli Sandwiches - Vegetarian",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Mushroom & Cheese Sandwich made with premium ingredients in our kitchen.",
    "imagePath": "/assets/napoli-sandwiches/mushroom-and-cheese.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-caprese-sandwich",
    "name": "Caprese Sandwich",
    "category": "Napoli Sandwiches - Vegetarian",
    "isVeg": true,
    "price": 395,
    "basePrice": 395,
    "description": "Freshly prepared Caprese Sandwich made with premium ingredients in our kitchen.",
    "imagePath": "/assets/napoli-sandwiches/caprese-sandwich.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-ham-cheese-sandwich",
    "name": "Ham & Cheese Sandwich",
    "category": "Napoli Sandwiches - Non-Vegetarian",
    "isVeg": false,
    "price": 375,
    "basePrice": 375,
    "description": "Freshly prepared Ham & Cheese Sandwich made with premium ingredients in our kitchen.",
    "imagePath": "/assets/napoli-sandwiches/ham-and-cheese.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-pulled-chicken-pesto-sandwich",
    "name": "Pulled Chicken Pesto Sandwich",
    "category": "Napoli Sandwiches - Non-Vegetarian",
    "isVeg": false,
    "price": 395,
    "basePrice": 395,
    "description": "Freshly prepared Pulled Chicken Pesto Sandwich made with premium ingredients in our kitchen.",
    "imagePath": "/assets/napoli-sandwiches/pesto-pulled-chicken.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-grilled-chicken-sandwich",
    "name": "Grilled Chicken Sandwich",
    "category": "Napoli Sandwiches - Non-Vegetarian",
    "isVeg": false,
    "price": 375,
    "basePrice": 375,
    "description": "Freshly prepared Grilled Chicken Sandwich made with premium ingredients in our kitchen.",
    "imagePath": "/assets/napoli-sandwiches/grilled-chicken.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-bacon-eggs-sandwich",
    "name": "Bacon & Eggs Sandwich",
    "category": "Napoli Sandwiches - Non-Vegetarian",
    "isVeg": false,
    "price": 375,
    "basePrice": 375,
    "description": "Freshly prepared Bacon & Eggs Sandwich made with premium ingredients in our kitchen.",
    "imagePath": "/assets/napoli-sandwiches/bacon-and-eggs.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-garlic-bread-with-cheese",
    "name": "Garlic Bread with Cheese",
    "category": "Garlic Breads - Vegetarian",
    "isVeg": true,
    "price": 295,
    "basePrice": 295,
    "description": "Freshly prepared Garlic Bread with Cheese made with premium ingredients in our kitchen.",
    "imagePath": "/assets/garlic-bread/garlic-bread-with-cheese.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-vegetable-cheese-garlic-bread",
    "name": "Vegetable & Cheese Garlic Bread",
    "category": "Garlic Breads - Vegetarian",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Freshly prepared Vegetable & Cheese Garlic Bread made with premium ingredients in our kitchen.",
    "imagePath": "/assets/garlic-bread/vegetable-and-cheese-garlic-bread.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-mushroom-cheese-garlic-bread",
    "name": "Mushroom & Cheese Garlic Bread",
    "category": "Garlic Breads - Vegetarian",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Mushroom & Cheese Garlic Bread made with premium ingredients in our kitchen.",
    "imagePath": "/assets/garlic-bread/mushroom-and-cheese.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-pesto-veggies-garlic-bread",
    "name": "Pesto Veggies Garlic Bread",
    "category": "Garlic Breads - Vegetarian",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Pesto Veggies Garlic Bread made with premium ingredients in our kitchen.",
    "imagePath": "/assets/garlic-bread/pesto-veggies.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-pesto-sun-dried-tomato-garlic-bread",
    "name": "Pesto & Sun-Dried Tomato Garlic Bread",
    "category": "Garlic Breads - Vegetarian",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Pesto & Sun-Dried Tomato Garlic Bread made with premium ingredients in our kitchen.",
    "imagePath": "/assets/napoli-sandwiches/sundried-tomato-pesto.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-asparagus-burrata-garlic-bread",
    "name": "Asparagus & Burrata Garlic Bread",
    "category": "Garlic Breads - Vegetarian",
    "isVeg": true,
    "price": 445,
    "basePrice": 445,
    "description": "Freshly prepared Asparagus & Burrata Garlic Bread made with premium ingredients in our kitchen.",
    "imagePath": "/assets/garlic-bread/asparagus-burrata.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-bacon-mushroom-garlic-bread",
    "name": "Bacon & Mushroom Garlic Bread",
    "category": "Garlic Breads - Non-Vegetarian",
    "isVeg": false,
    "price": 375,
    "basePrice": 375,
    "description": "Freshly prepared Bacon & Mushroom Garlic Bread made with premium ingredients in our kitchen.",
    "imagePath": "/assets/garlic-bread/bacon-and-mushroom.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-grilled-chicken-garlic-bread",
    "name": "Grilled Chicken Garlic Bread",
    "category": "Garlic Breads - Non-Vegetarian",
    "isVeg": false,
    "price": 375,
    "basePrice": 375,
    "description": "Freshly prepared Grilled Chicken Garlic Bread made with premium ingredients in our kitchen.",
    "imagePath": "/assets/garlic-bread/grilled-chicken.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-chicken-pepperoni-garlic-bread",
    "name": "Chicken Pepperoni Garlic Bread",
    "category": "Garlic Breads - Non-Vegetarian",
    "isVeg": false,
    "price": 375,
    "basePrice": 375,
    "description": "Freshly prepared Chicken Pepperoni Garlic Bread made with premium ingredients in our kitchen.",
    "imagePath": "/assets/garlic-bread/grilled-chicken.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-pesto-pulled-chicken-garlic-bread",
    "name": "Pesto Pulled Chicken Garlic Bread",
    "category": "Garlic Breads - Non-Vegetarian",
    "isVeg": false,
    "price": 445,
    "basePrice": 445,
    "description": "Freshly prepared Pesto Pulled Chicken Garlic Bread made with premium ingredients in our kitchen.",
    "imagePath": "/assets/garlic-bread/pesto-pulled-chicken.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-classic-fries",
    "name": "Classic Fries",
    "category": "Appetizers - Vegetarian",
    "isVeg": true,
    "price": 195,
    "basePrice": 195,
    "description": "Freshly prepared Classic Fries made with premium ingredients in our kitchen.",
    "imagePath": "/assets/mexican-appetisers/classic-fries.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-peri-peri-fries",
    "name": "Peri-Peri Fries",
    "category": "Appetizers - Vegetarian",
    "isVeg": true,
    "price": 215,
    "basePrice": 215,
    "description": "Freshly prepared Peri-Peri Fries made with premium ingredients in our kitchen.",
    "imagePath": "/assets/mexican-appetisers/peri-peri-fries.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-parmesan-fries",
    "name": "Parmesan Fries",
    "category": "Appetizers - Vegetarian",
    "isVeg": true,
    "price": 245,
    "basePrice": 245,
    "description": "Freshly prepared Parmesan Fries made with premium ingredients in our kitchen.",
    "imagePath": "/assets/mexican-appetisers/parmesan-fries.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-chicken-popcorn",
    "name": "Chicken Popcorn",
    "category": "Appetizers - Non-Vegetarian",
    "isVeg": false,
    "price": 275,
    "basePrice": 275,
    "description": "Freshly prepared Chicken Popcorn made with premium ingredients in our kitchen.",
    "imagePath": "/assets/mexican-appetisers/chicken-popcorn.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-chicken-strips",
    "name": "Chicken Strips",
    "category": "Appetizers - Non-Vegetarian",
    "isVeg": false,
    "price": 285,
    "basePrice": 285,
    "description": "Freshly prepared Chicken Strips made with premium ingredients in our kitchen.",
    "imagePath": "/assets/mexican-appetisers/chicken-strips.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-crispy-spicy-paneer-burrito-bowl",
    "name": "Crispy Spicy Paneer Burrito Bowl",
    "category": "Burrito Bowls - Vegetarian",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Crispy Spicy Paneer Burrito Bowl made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/crispy-spicy-paneer-burrito-wrap.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-crispy-spicy-mushroom-burrito-bowl",
    "name": "Crispy Spicy Mushroom Burrito Bowl",
    "category": "Burrito Bowls - Vegetarian",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Crispy Spicy Mushroom Burrito Bowl made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/crispy-spicy-chicken-burrito-wrap.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-spicy-grilled-paneer-burrito-bowl",
    "name": "Spicy Grilled Paneer Burrito Bowl",
    "category": "Burrito Bowls - Vegetarian",
    "isVeg": true,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Spicy Grilled Paneer Burrito Bowl made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/spicy-grilled-paneer-burrito-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-crispy-spicy-chicken-burrito-bowl",
    "name": "Crispy Spicy Chicken Burrito Bowl",
    "category": "Burrito Bowls - Non-Vegetarian",
    "isVeg": false,
    "price": 375,
    "basePrice": 375,
    "description": "Freshly prepared Crispy Spicy Chicken Burrito Bowl made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/crispy-spicy-chicken-burrito-wrap.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-spicy-grilled-chicken-burrito-bowl",
    "name": "Spicy Grilled Chicken Burrito Bowl",
    "category": "Burrito Bowls - Non-Vegetarian",
    "isVeg": false,
    "price": 375,
    "basePrice": 375,
    "description": "Freshly prepared Spicy Grilled Chicken Burrito Bowl made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/grilled-chicken-burrito-wrap.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-crispy-spicy-paneer-burrito-wrap",
    "name": "Crispy Spicy Paneer Burrito Wrap",
    "category": "Burrito Wraps - Vegetarian",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Freshly prepared Crispy Spicy Paneer Burrito Wrap made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/crispy-spicy-paneer-burrito-wrap.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-crispy-spicy-mushroom-burrito-wrap",
    "name": "Crispy Spicy Mushroom Burrito Wrap",
    "category": "Burrito Wraps - Vegetarian",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Freshly prepared Crispy Spicy Mushroom Burrito Wrap made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/crispy-spicy-chicken-burrito-wrap.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-spicy-grilled-paneer-burrito-wrap",
    "name": "Spicy Grilled Paneer Burrito Wrap",
    "category": "Burrito Wraps - Vegetarian",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Freshly prepared Spicy Grilled Paneer Burrito Wrap made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/spicy-grilled-paneer-burrito-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-crispy-spicy-chicken-burrito-wrap",
    "name": "Crispy Spicy Chicken Burrito Wrap",
    "category": "Burrito Wraps - Non-Vegetarian",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Crispy Spicy Chicken Burrito Wrap made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/crispy-spicy-chicken-burrito-wrap.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-egg-bacon-burrito-wrap",
    "name": "Egg & Bacon Burrito Wrap",
    "category": "Burrito Wraps - Non-Vegetarian",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Egg & Bacon Burrito Wrap made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/egg-and-bacon-burrito-wrap.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-spicy-grilled-chicken-burrito-wrap",
    "name": "Spicy Grilled Chicken Burrito Wrap",
    "category": "Burrito Wraps - Non-Vegetarian",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Spicy Grilled Chicken Burrito Wrap made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/grilled-chicken-burrito-wrap.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-classic-potato-cheese-burger",
    "name": "Classic Potato Cheese Burger",
    "category": "Burgers - Vegetarian",
    "isVeg": true,
    "price": 275,
    "basePrice": 275,
    "description": "Freshly prepared Classic Potato Cheese Burger made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burgers/classic-potato-cheese-burger.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-peri-peri-potato-cheese-burger",
    "name": "Peri-Peri Potato Cheese Burger",
    "category": "Burgers - Vegetarian",
    "isVeg": true,
    "price": 285,
    "basePrice": 285,
    "description": "Freshly prepared Peri-Peri Potato Cheese Burger made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burgers/peri-peri-potato-cheese-burger.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-smash-veggie-cheese-burger",
    "name": "Smash Veggie Cheese Burger",
    "category": "Burgers - Vegetarian",
    "isVeg": true,
    "price": 295,
    "basePrice": 295,
    "description": "Freshly prepared Smash Veggie Cheese Burger made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burgers/smash-veggie-cheese-burger.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-crispy-chipotle-chicken-burger",
    "name": "Crispy Chipotle Chicken Burger",
    "category": "Burgers - Non-Vegetarian",
    "isVeg": false,
    "price": 295,
    "basePrice": 295,
    "description": "Freshly prepared Crispy Chipotle Chicken Burger made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burgers/crispy-spicy-chicken-burgher.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-smash-chicken-cheese-burger",
    "name": "Smash Chicken Cheese Burger",
    "category": "Burgers - Non-Vegetarian",
    "isVeg": false,
    "price": 325,
    "basePrice": 325,
    "description": "Freshly prepared Smash Chicken Cheese Burger made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burgers/smash-chicken-cheese-burger.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-grilled-spicy-paneer-tacos",
    "name": "Grilled Spicy Paneer Tacos",
    "category": "Tacos - Vegetarian",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Freshly prepared Grilled Spicy Paneer Tacos made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burrito-wraps/spicy-grilled-paneer-burrito-bowl.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-corn-cheese-tacos",
    "name": "Corn & Cheese Tacos",
    "category": "Tacos - Vegetarian",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Freshly prepared Corn & Cheese Tacos made with premium ingredients in our kitchen.",
    "imagePath": "/assets/tacos/corn-and-cheese-taco.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-crispy-spicy-paneer-tacos",
    "name": "Crispy Spicy Paneer Tacos",
    "category": "Tacos - Vegetarian",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Freshly prepared Crispy Spicy Paneer Tacos made with premium ingredients in our kitchen.",
    "imagePath": "/assets/tacos/crispy-spicy-paneer-taco.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-grilled-chicken-tacos",
    "name": "Grilled Chicken Tacos",
    "category": "Tacos - Non-Vegetarian",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Grilled Chicken Tacos made with premium ingredients in our kitchen.",
    "imagePath": "/assets/garlic-bread/grilled-chicken.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-crispy-spicy-chicken-tacos",
    "name": "Crispy Spicy Chicken Tacos",
    "category": "Tacos - Non-Vegetarian",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Crispy Spicy Chicken Tacos made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burgers/crispy-spicy-chicken-burgher.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-baked-veg-nachos",
    "name": "Baked Veg Nachos",
    "category": "Nachos - Vegetarian",
    "isVeg": true,
    "price": 325,
    "basePrice": 325,
    "description": "Freshly prepared Baked Veg Nachos made with premium ingredients in our kitchen.",
    "imagePath": "/assets/nachos/baked-veg-nachos.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-baked-chicken-nachos",
    "name": "Baked Chicken Nachos",
    "category": "Nachos - Non-Vegetarian",
    "isVeg": false,
    "price": 345,
    "basePrice": 345,
    "description": "Freshly prepared Baked Chicken Nachos made with premium ingredients in our kitchen.",
    "imagePath": "/assets/nachos/baked-chicken-nachos.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-chicken-cheese",
    "name": "Chicken Cheese",
    "category": "Wood-Fired Hot Dogs - Non-Vegetarian",
    "isVeg": false,
    "price": 295,
    "basePrice": 295,
    "description": "Freshly prepared Chicken Cheese made with premium ingredients in our kitchen.",
    "imagePath": "/assets/burgers/smash-chicken-cheese-burger.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-mushrooms",
        "name": "Saut\u00e9ed mushrooms",
        "price": 60
      },
      {
        "id": "addon-onions",
        "name": "Caramelised onions",
        "price": 40
      },
      {
        "id": "addon-tomatoes",
        "name": "Sun-dried tomatoes",
        "price": 40
      }
    ]
  },
  {
    "id": "dish-peri-peri-chicken",
    "name": "Peri-Peri Chicken",
    "category": "Wood-Fired Hot Dogs - Non-Vegetarian",
    "isVeg": false,
    "price": 295,
    "basePrice": 295,
    "description": "Freshly prepared Peri-Peri Chicken made with premium ingredients in our kitchen.",
    "imagePath": "/assets/sushi/peri-peri-chicken-sushi.webp",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 1,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-mushrooms-2",
        "name": "Saut\u00e9ed mushrooms",
        "price": 60
      },
      {
        "id": "addon-onions-2",
        "name": "Caramelised onions",
        "price": 40
      },
      {
        "id": "addon-tomatoes-2",
        "name": "Sun-dried tomatoes",
        "price": 40
      }
    ]
  },
  {
    "id": "dish-makhni-chicken",
    "name": "Makhni Chicken",
    "category": "Wood-Fired Hot Dogs - Non-Vegetarian",
    "isVeg": false,
    "price": 295,
    "basePrice": 295,
    "description": "Freshly prepared Makhni Chicken made with premium ingredients in our kitchen.",
    "imagePath": "/assets/hot-dogs/makhni-chicken-hot-dog.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-mushrooms-3",
        "name": "Saut\u00e9ed mushrooms",
        "price": 60
      },
      {
        "id": "addon-onions-3",
        "name": "Caramelised onions",
        "price": 40
      },
      {
        "id": "addon-tomatoes-3",
        "name": "Sun-dried tomatoes",
        "price": 40
      }
    ]
  },
  {
    "id": "dish-pesto-chicken",
    "name": "Pesto Chicken",
    "category": "Wood-Fired Hot Dogs - Non-Vegetarian",
    "isVeg": false,
    "price": 295,
    "basePrice": 295,
    "description": "Freshly prepared Pesto Chicken made with premium ingredients in our kitchen.",
    "imagePath": "/assets/garlic-bread/pesto-pulled-chicken.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": [
      {
        "id": "addon-mushrooms-4",
        "name": "Saut\u00e9ed mushrooms",
        "price": 60
      },
      {
        "id": "addon-onions-4",
        "name": "Caramelised onions",
        "price": 40
      },
      {
        "id": "addon-tomatoes-4",
        "name": "Sun-dried tomatoes",
        "price": 40
      }
    ]
  },
  {
    "id": "dish-fresh-lime-soda",
    "name": "Fresh Lime Soda",
    "category": "Beverages",
    "isVeg": true,
    "price": 120,
    "basePrice": 120,
    "description": "Freshly prepared Fresh Lime Soda made with premium ingredients in our kitchen.",
    "imagePath": "/assets/beverages/fresh-lime-soda.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-iced-tea-lemon",
    "name": "Iced Tea (Lemon)",
    "category": "Beverages",
    "isVeg": true,
    "price": 120,
    "basePrice": 120,
    "description": "Freshly prepared Iced Tea (Lemon) made with premium ingredients in our kitchen.",
    "imagePath": "/assets/beverages/iced-tea-lemon.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-orange-mojito",
    "name": "Orange Mojito",
    "category": "Beverages",
    "isVeg": true,
    "price": 175,
    "basePrice": 175,
    "description": "Freshly prepared Orange Mojito made with premium ingredients in our kitchen.",
    "imagePath": "/assets/beverages/orange-mojito.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-strawberry-mojito",
    "name": "Strawberry Mojito",
    "category": "Beverages",
    "isVeg": true,
    "price": 175,
    "basePrice": 175,
    "description": "Freshly prepared Strawberry Mojito made with premium ingredients in our kitchen.",
    "imagePath": "/assets/beverages/strawberry-mojito.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-blueberry-mojito",
    "name": "Blueberry Mojito",
    "category": "Beverages",
    "isVeg": true,
    "price": 175,
    "basePrice": 175,
    "description": "Freshly prepared Blueberry Mojito made with premium ingredients in our kitchen.",
    "imagePath": "/assets/beverages/blueberry-mojito.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-cold-coffee",
    "name": "Cold Coffee",
    "category": "Beverages",
    "isVeg": true,
    "price": 195,
    "basePrice": 195,
    "description": "Freshly prepared Cold Coffee made with premium ingredients in our kitchen.",
    "imagePath": "/assets/beverages/cold-coffee.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-cold-drink",
    "name": "Cold Drink",
    "category": "Beverages",
    "isVeg": true,
    "price": 75,
    "basePrice": 75,
    "description": "Freshly prepared Cold Drink made with premium ingredients in our kitchen.",
    "imagePath": "/assets/beverages/cold-coffee.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-water-bottle",
    "name": "Water Bottle",
    "category": "Beverages",
    "isVeg": true,
    "price": 0,
    "basePrice": 0,
    "description": "Freshly prepared Water Bottle made with premium ingredients in our kitchen.",
    "imagePath": "/assets/appetisers/korean-water-chestnut.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-strawberry-shake",
    "name": "Strawberry Shake",
    "category": "Beverages",
    "isVeg": true,
    "price": 175,
    "basePrice": 175,
    "description": "Freshly prepared Strawberry Shake made with premium ingredients in our kitchen.",
    "imagePath": "/assets/beverages/strawberry-shake.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-blueberry-shake",
    "name": "Blueberry Shake",
    "category": "Beverages",
    "isVeg": true,
    "price": 195,
    "basePrice": 195,
    "description": "Freshly prepared Blueberry Shake made with premium ingredients in our kitchen.",
    "imagePath": "/assets/beverages/blueberry-shake.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-oreo-shake",
    "name": "Oreo Shake",
    "category": "Beverages",
    "isVeg": true,
    "price": 195,
    "basePrice": 195,
    "description": "Freshly prepared Oreo Shake made with premium ingredients in our kitchen.",
    "imagePath": "/assets/beverages/oreo-shake.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-kitkat-shake",
    "name": "KitKat Shake",
    "category": "Beverages",
    "isVeg": true,
    "price": 195,
    "basePrice": 195,
    "description": "Freshly prepared KitKat Shake made with premium ingredients in our kitchen.",
    "imagePath": "/assets/beverages/kitkat-shake.avif",
    "isAvailable": true,
    "isChefSpecial": false,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-brownie-with-ice-cream",
    "name": "Brownie with Ice Cream",
    "category": "Desserts",
    "isVeg": false,
    "price": 250,
    "basePrice": 250,
    "description": "Brownie, served with classic vanilla Ice cream",
    "imagePath": "/assets/desserts/brownie-with-ice-cream.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  },
  {
    "id": "dish-churros",
    "name": "Churros",
    "category": "Desserts",
    "isVeg": true,
    "price": 250,
    "basePrice": 250,
    "description": "6 pcs Churros, served with chocolate sauce",
    "imagePath": "/assets/desserts/churros.avif",
    "isAvailable": true,
    "isChefSpecial": true,
    "isBestseller": false,
    "spicyLevel": 0,
    "hasVariants": false,
    "variants": [],
    "addons": []
  }
];
