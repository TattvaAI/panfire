import csv
import json
import re
import os

def clean(text):
    if not text:
        return ""
    t = text.replace('\u2019', "'").replace('\u2018', "'").replace('\u201c', '"').replace('\u201d', '"')
    return t.strip()

def is_veg_str(s):
    s_low = s.lower().strip()
    return 'non' not in s_low and 'veg' in s_low

# Scan assets
assets = []
for root, dirs, files in os.walk('public/assets'):
    for f in files:
        if f.endswith(('.avif', '.webp', '.jpg', '.png')) and not f.endswith('.svg'):
            rel = os.path.join(root, f).replace('public/', '/')
            assets.append(rel)

def find_asset(name, cat=""):
    clean_name = re.sub(r'[^a-z0-9]', ' ', name.lower())
    ignore = {
        'pizza', 'neapolitan', 'small', 'large', 'thin', 'crust', 'pieces',
        'and', 'with', 'the', 'slices', 'inch', '8', '12', '4', 'soup',
        'salad', 'bowl', 'roll', 'dim', 'sum', 'sandwich', 'bread', 'tacos', 'taco', 'pieces',
        'vegetarian', 'chicken', 'prawn'
    }
    words = [w for w in clean_name.split() if w not in ignore and len(w) > 2]
    best = None
    best_score = 0
    for a in assets:
        a_low = a.lower()
        score = sum(2 if w in a_low else 0 for w in words)
        if cat and cat.strip():
            cat_token = cat.lower().split()[0]
            if len(cat_token) > 3 and cat_token in a_low:
                score += 1
        if score > best_score:
            best_score = score
            best = a
    if best_score >= 2:
        return best
    
    if cat and cat.strip():
        cat_slug = cat.lower().replace(' ', '-').replace('&', 'and')
        for a in assets:
            if any(part in a.lower() for part in cat_slug.split('-') if len(part) > 3):
                return a
    return '/assets/pizza/classic-margherita.avif'

slug_counts = {}
def make_id(prefix, name):
    base = re.sub(r'[^a-z0-9]+', '-', f"{prefix}-{name}".lower()).strip('-')
    if base in slug_counts:
        slug_counts[base] += 1
        return f"{base}-{slug_counts[base]}"
    slug_counts[base] = 1
    return base

# Structure 16 Clean Menu Categories (One-word, exactly matching menu)
categories_data = [
    {
        'id': 'pizza',
        'title': 'Pizza',
        'description': 'Wood-fired sourdough pizzas, Roman thin crusts, Chicago deep dish, and indie pies.',
        'badge': 'Wood-Fired Hearth',
        'subcategories': [
            {'id': 'signature-pizzas', 'title': 'Signature Pizzas (8", 12" & Thin Crust)', 'items': []},
            {'id': 'deep-dish-pizzas', 'title': 'Deep Dish Pizzas (6 Slices)', 'items': []},
            {'id': 'indie-thin-crust', 'title': 'Indie Thin Crust Pizzas (8 Slices)', 'items': []},
        ]
    },
    {
        'id': 'sushi',
        'title': 'Sushi',
        'description': 'Freshly rolled maki and uramaki rolls with premium Japanese ingredients.',
        'badge': 'Master Rolled',
        'subcategories': [
            {'id': 'veg-sushi-4pcs', 'title': 'Vegetarian Sushi (4 Pcs)', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-sushi-4pcs', 'title': 'Non-Vegetarian Sushi (4 Pcs)', 'isVegSection': False, 'items': []},
            {'id': 'veg-sushi-8pcs', 'title': 'Vegetarian Sushi (8 Pcs)', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-sushi-8pcs', 'title': 'Non-Vegetarian Sushi (8 Pcs)', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'dim-sum',
        'title': 'Dim Sum',
        'description': 'Delicate translucent steamed dumplings crafted fresh to order.',
        'badge': 'Handcrafted',
        'subcategories': [
            {'id': 'veg-dim-sum', 'title': 'Vegetarian Dim Sum (6 Pcs)', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-dim-sum', 'title': 'Non-Vegetarian Dim Sum (6 Pcs)', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'momo',
        'title': 'Momo',
        'description': 'Steamed and pan-fried Himalayan momos and crisp Japanese gyozas.',
        'badge': 'Steamed & Crisp',
        'subcategories': [
            {'id': 'veg-momos', 'title': 'Vegetarian Momos & Gyozas (6 Pcs)', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-momos', 'title': 'Non-Vegetarian Momos & Gyozas (6 Pcs)', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'baos',
        'title': 'Baos',
        'description': 'Cloud-soft steamed Taiwanese open buns loaded with savoury fillings.',
        'badge': 'Cloud Soft',
        'subcategories': [
            {'id': 'veg-baos', 'title': 'Vegetarian Baos (2 Pcs)', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-baos', 'title': 'Non-Vegetarian Baos (2 Pcs)', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'pasta',
        'title': 'Pasta',
        'description': 'Hand-rolled artisanal spaghetti and penne with authentic Italian sugo.',
        'badge': 'Fresh Sugo',
        'subcategories': [
            {'id': 'veg-pastas', 'title': 'Vegetarian Pastas', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-pastas', 'title': 'Non-Vegetarian Pastas', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'noodles',
        'title': 'Noodles',
        'description': 'Wok-charred noodles, rich ramen broths, and street-style noodles.',
        'badge': 'Wok Tossed',
        'subcategories': [
            {'id': 'veg-wok-noodles', 'title': 'Vegetarian Wok Noodles', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-wok-noodles', 'title': 'Non-Vegetarian Wok Noodles', 'isVegSection': False, 'items': []},
            {'id': 'veg-noodle-bowls', 'title': 'Vegetarian Noodle Bowls', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-noodle-bowls', 'title': 'Non-Vegetarian Noodle Bowls', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'burgers',
        'title': 'Burgers',
        'description': 'Smash patties in freshly baked wood-fired sourdough buns.',
        'badge': 'Sourdough Buns',
        'subcategories': [
            {'id': 'sourdough-burgers', 'title': 'Sourdough Burgers', 'items': []},
            {'id': 'mexican-burgers', 'title': 'Handcrafted Burgers', 'items': []},
        ]
    },
    {
        'id': 'sandwiches',
        'title': 'Sandwiches',
        'description': 'Wood-fired Napoli sourdough sandwiches and loaded garlic breads.',
        'badge': 'Hearth Baked',
        'subcategories': [
            {'id': 'veg-napoli-sandwiches', 'title': 'Vegetarian Napoli Sandwiches', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-napoli-sandwiches', 'title': 'Non-Vegetarian Napoli Sandwiches', 'isVegSection': False, 'items': []},
            {'id': 'veg-garlic-breads', 'title': 'Vegetarian Garlic Breads', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-garlic-breads', 'title': 'Non-Vegetarian Garlic Breads', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'mexican',
        'title': 'Mexican',
        'description': 'Sizzling burrito bowls, toasted wraps, crispy tacos, and loaded nachos.',
        'badge': 'Street Flavours',
        'subcategories': [
            {'id': 'burrito-bowls', 'title': 'Burrito Bowls', 'items': []},
            {'id': 'burrito-wraps', 'title': 'Burrito Wraps', 'items': []},
            {'id': 'tacos-nachos', 'title': 'Street Tacos & Nachos', 'items': []},
            {'id': 'wood-fired-hot-dogs', 'title': 'Wood-Fired Hot Dogs', 'items': []},
        ]
    },
    {
        'id': 'appetizers',
        'title': 'Appetizers',
        'description': 'Crispy Asian small plates, street tempura, and Italian sides.',
        'badge': 'Small Plates',
        'subcategories': [
            {'id': 'veg-asian-appetisers', 'title': 'Vegetarian Appetisers', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-asian-appetisers', 'title': 'Non-Vegetarian Appetisers', 'isVegSection': False, 'items': []},
            {'id': 'italian-appetizers', 'title': 'Italian Appetizers & Fries', 'items': []},
        ]
    },
    {
        'id': 'soups',
        'title': 'Soups',
        'description': 'Slow-simmered aromatic Thai and Asian broths.',
        'badge': 'Simmered Broths',
        'subcategories': [
            {'id': 'veg-asian-soups', 'title': 'Vegetarian Soups', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-asian-soups', 'title': 'Non-Vegetarian Soups', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'curries',
        'title': 'Curries',
        'description': 'Rich coconut curries and wok-tossed Asian rice bowls.',
        'badge': 'Wok & Rice',
        'subcategories': [
            {'id': 'veg-curries', 'title': 'Vegetarian Curries', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-curries', 'title': 'Non-Vegetarian Curries', 'isVegSection': False, 'items': []},
            {'id': 'veg-rice-bowls', 'title': 'Vegetarian Rice Bowls', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-rice-bowls', 'title': 'Non-Vegetarian Rice Bowls', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'salads',
        'title': 'Salads',
        'description': 'Crisp greens, fresh bocconcini, burrata, and house dressings.',
        'badge': 'Farm Fresh',
        'subcategories': [
            {'id': 'veg-salads', 'title': 'Vegetarian Fresh Salads', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-salads', 'title': 'Grilled Chicken Salads', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'beverages',
        'title': 'Beverages',
        'description': 'Chilled mojitos, artisan coolers, and hand-spun milkshakes.',
        'badge': 'Chilled & Fresh',
        'subcategories': [
            {'id': 'beverages', 'title': 'Chilled Beverages & Mojitos', 'items': []},
            {'id': 'milkshakes', 'title': 'Hand-Spun Milkshakes', 'items': []},
        ]
    },
    {
        'id': 'desserts',
        'title': 'Desserts',
        'description': 'Handmade desserts and sweet house creations.',
        'badge': 'Sweet Endings',
        'subcategories': [
            {'id': 'desserts', 'title': 'Artisan Desserts', 'items': []},
        ]
    }
]

def add_to_subcat(cat_id, subcat_id, item):
    for cat in categories_data:
        if cat['id'] == cat_id:
            for sub in cat['subcategories']:
                if sub['id'] == subcat_id:
                    sub['items'].append(item)
                    return True
    print(f"ERROR: could not find {cat_id} -> {subcat_id}")
    return False

pizza_slug_map = {
    'classic margherita': 'classic-margherita',
    'creamy spinach & mushroom': 'creamy-spinach-mushroom',
    'butter paneer': 'butter-paneer-pizza',
    'spicy paneer': 'spicy-paneer',
    'sun & rocket': 'sun-rocket',
    'panfire loaded vegetables': 'panfire-loaded-vegetables',
    'spicy mushroom': 'spicy-mushroom',
    'hawaiian': 'hawaiian-pizza',
    'pesto paneer': 'pesto-paneer',
    'burrata': 'burrata-pizza',
    'truffle mushroom': 'truffle-mushroom',
    'magic mushroom': 'magic-mushroom',
    '4 cheese': '4-cheese',
    '3 cheese asparagus pesto': '3-cheese-asparagus-pesto',
    'panfire overload chicken': 'panfire-overload-chicken',
    'panfire four meat': 'panfire-4-meat',
    'chicken pepperoni': 'chicken-pepperoni',
    'panfire pollo': 'panfire-pollo',
    'butter chicken': 'butter-chicken-pizza',
    'grilled chicken & roasted peppers': 'grilled-chicken-and-roasted-peppers',
    'pesto smoked chicken & rocket': 'pesto-smoked-chicken-and-rocket',
    'smoked chicken paprika': 'pesto-smoked-chicken-and-rocket',
    'grilled chicken, spinach & mushroom': 'grilled-chicken-spinach-and-mushroom',
    'bacon': 'bacon-pizza'
}

def clean_pizza_name(name):
    n = re.sub(r'[-\s]*(Neapolitan Pizza|Thin Crust Pizza)[-\s]*', '', name, flags=re.IGNORECASE)
    n = re.sub(r'[-\s]*(Small|Large|8 slices)[-\s]*', '', n, flags=re.IGNORECASE)
    n = n.strip(' -')
    if not n.lower().endswith('pizza'):
        n += ' Pizza'
    return n

def get_pizza_variant_images(base_name):
    b_key = base_name.lower().replace(' pizza', '').strip()
    slug = pizza_slug_map.get(b_key, 'classic-margherita')
    
    if 'margherita' in b_key:
        return {
            'small': '/images/pizza-margherita.avif',
            'large': '/assets/pizza/classic-margherita.avif',
            'thin': '/assets/pizza/classic-margherita.webp'
        }
    if 'burrata' in b_key:
        return {
            'small': '/assets/pizza/burrata-pizza.avif',
            'large': '/images/pizza-burrata.avif',
            'thin': '/assets/pizza/burrata-pizza.webp'
        }
    if 'pepperoni' in b_key:
        return {
            'small': '/assets/pizza/chicken-pepperoni.avif',
            'large': '/images/pizza-pepperoni.avif',
            'thin': '/assets/pizza/chicken-pepperoni.webp'
        }
    if 'mushroom' in b_key:
        return {
            'small': '/assets/pizza/spicy-mushroom.webp',
            'large': '/images/pizza-mushroom.avif',
            'thin': '/assets/pizza/truffle-mushroom.avif'
        }
    
    avif = f'/assets/pizza/{slug}.avif'
    webp = f'/assets/pizza/{slug}.webp'
    return {
        'small': avif if os.path.exists('public' + avif) else webp,
        'large': webp if os.path.exists('public' + webp) else avif,
        'thin': avif if os.path.exists('public' + avif) else webp
    }

# PARSE SHEET 1
with open('sheet1_italian_mexican.csv', 'r', encoding='utf-8') as f:
    s1_rows = list(csv.reader(f))

cur_broad = 'ITALIAN'
cur_cat = ''
parent_dish = None
signature_pizzas = {}
cur_sig_pizza = None

for i in range(3, len(s1_rows)):
    r = s1_rows[i]
    if not any(c.strip() for c in r): continue
    s_no = clean(r[0])
    broad = clean(r[1]) or cur_broad
    cat = clean(r[2]) or cur_cat
    veg_str = clean(r[3])
    item_name = clean(r[4])
    var_addon = clean(r[5])
    addon_cost_str = clean(r[6])
    price_str = clean(r[7])
    desc = clean(r[8]) if len(r) > 8 else ''

    if broad: cur_broad = broad
    if cat: cur_cat = cat
    addon_cost = int(addon_cost_str) if addon_cost_str.isdigit() else 0
    price = int(price_str) if price_str.isdigit() else 0
    is_veg = is_veg_str(veg_str) if veg_str else True

    is_sig_pizza = any(k in cur_cat for k in ['Neapolitan Pizza - Small', 'Neapolitan Pizza - Large', 'Panfire Thin Crust'])

    # Handle Signature Pizzas with 3 Crust/Size Variants
    if is_sig_pizza:
        if item_name and price > 0:
            pname = clean_pizza_name(item_name)
            if pname not in signature_pizzas:
                signature_pizzas[pname] = {
                    'name': pname,
                    'isVeg': is_veg,
                    'desc': desc,
                    'prices': {},
                    'addons': []
                }
            cur_sig_pizza = signature_pizzas[pname]
            if desc and not cur_sig_pizza['desc']:
                cur_sig_pizza['desc'] = desc
            if 'Small' in cur_cat:
                cur_sig_pizza['prices']['small'] = price
            elif 'Large' in cur_cat:
                cur_sig_pizza['prices']['large'] = price
            elif 'Thin Crust' in cur_cat:
                cur_sig_pizza['prices']['thin'] = price
        elif var_addon and addon_cost > 0 and cur_sig_pizza:
            if not any(a['name'] == var_addon for a in cur_sig_pizza['addons']):
                cur_sig_pizza['addons'].append({
                    'id': make_id('addon', var_addon),
                    'name': var_addon,
                    'price': addon_cost
                })
        continue

    # Case A: Row has its own item_name AND price
    if item_name and price > 0:
        item_id = make_id('dish', item_name)
        img = find_asset(item_name, cur_cat)
        new_dish = {
            'id': item_id,
            'name': item_name,
            'category': cur_cat,
            'isVeg': is_veg,
            'price': price,
            'basePrice': price,
            'description': desc or f"Freshly prepared {item_name} made with premium ingredients in our kitchen.",
            'imagePath': img,
            'isAvailable': True,
            'isChefSpecial': False,
            'isBestseller': 'Margherita' in item_name,
            'spicyLevel': 1 if 'spicy' in item_name.lower() or 'peri' in item_name.lower() or 'chilli' in item_name.lower() else 0,
            'hasVariants': False,
            'variants': [],
            'addons': []
        }
        parent_dish = new_dish

        # Categorize
        if 'Deep Dish' in cur_cat:
            new_dish['isChefSpecial'] = True
            add_to_subcat('pizza', 'deep-dish-pizzas', new_dish)
        elif 'Indie Thin Crust' in cur_cat:
            add_to_subcat('pizza', 'indie-thin-crust', new_dish)
        elif 'Salads' in cur_cat:
            add_to_subcat('salads', 'veg-salads', new_dish)
        elif 'Sourdough Burgers' in cur_cat:
            new_dish['isChefSpecial'] = True
            add_to_subcat('burgers', 'sourdough-burgers', new_dish)
        elif 'Pasta' in cur_cat:
            new_dish['hasVariants'] = True
            new_dish['variants'] = [
                {'id': make_id('var', 'spaghetti'), 'name': 'Spaghetti', 'price': price, 'isVeg': True},
                {'id': make_id('var', 'penne'), 'name': 'Penne', 'price': price, 'isVeg': True}
            ]
            add_to_subcat('pasta', 'veg-pastas', new_dish)
        elif 'Napoli Sandwiches' in cur_cat:
            if is_veg:
                add_to_subcat('sandwiches', 'veg-napoli-sandwiches', new_dish)
            else:
                add_to_subcat('sandwiches', 'nonveg-napoli-sandwiches', new_dish)
        elif 'Garlic Breads' in cur_cat:
            if is_veg:
                add_to_subcat('sandwiches', 'veg-garlic-breads', new_dish)
            else:
                add_to_subcat('sandwiches', 'nonveg-garlic-breads', new_dish)
        elif 'Appetizers' in cur_cat:
            add_to_subcat('appetizers', 'italian-appetizers', new_dish)
        elif 'Burrito Bowls' in cur_cat:
            add_to_subcat('mexican', 'burrito-bowls', new_dish)
        elif 'Burrito Wraps' in cur_cat:
            add_to_subcat('mexican', 'burrito-wraps', new_dish)
        elif 'Burgers' in cur_cat:
            add_to_subcat('burgers', 'mexican-burgers', new_dish)
        elif 'Tacos' in cur_cat or 'Nachos' in cur_cat:
            add_to_subcat('mexican', 'tacos-nachos', new_dish)
        elif 'Wood-Fired Hot Dogs' in cur_cat:
            new_dish['addons'] = [
                {'id': make_id('addon', 'mushrooms'), 'name': 'Sautéed mushrooms', 'price': 60},
                {'id': make_id('addon', 'onions'), 'name': 'Caramelised onions', 'price': 40},
                {'id': make_id('addon', 'tomatoes'), 'name': 'Sun-dried tomatoes', 'price': 40}
            ]
            add_to_subcat('mexican', 'wood-fired-hot-dogs', new_dish)
        elif 'Beverages' in cur_cat:
            if 'shake' in item_name.lower():
                add_to_subcat('beverages', 'milkshakes', new_dish)
            else:
                add_to_subcat('beverages', 'beverages', new_dish)
        elif 'Desserts' in cur_cat:
            new_dish['isChefSpecial'] = True
            add_to_subcat('desserts', 'desserts', new_dish)

    # Case B: Child row that has a standalone price (e.g. Caprese Grilled Chicken 415, or Grilled Chicken Pasta 415)
    elif price > 0 and var_addon:
        # This is a full standalone non-veg variant dish!
        full_name = var_addon
        item_id = make_id('dish', full_name)
        img = find_asset(full_name, cur_cat)
        child_dish = {
            'id': item_id,
            'name': full_name,
            'category': cur_cat,
            'isVeg': is_veg,
            'price': price,
            'basePrice': price,
            'description': f"Fresh {full_name} prepared with tender protein and chef's dressings.",
            'imagePath': img,
            'isAvailable': True,
            'isChefSpecial': False,
            'isBestseller': False,
            'spicyLevel': 0,
            'hasVariants': False,
            'variants': [],
            'addons': []
        }
        if 'Salads' in cur_cat:
            add_to_subcat('salads', 'nonveg-salads', child_dish)
        elif 'Pasta' in cur_cat:
            child_dish['hasVariants'] = True
            child_dish['variants'] = [
                {'id': make_id('var', 'spaghetti'), 'name': 'Spaghetti', 'price': price, 'isVeg': False},
                {'id': make_id('var', 'penne'), 'name': 'Penne', 'price': price, 'isVeg': False}
            ]
            add_to_subcat('pasta', 'nonveg-pastas', child_dish)

    # Case C: Addon row (no standalone price, but addon_cost > 0)
    elif addon_cost > 0 and var_addon and parent_dish is not None:
        parent_dish['addons'].append({
            'id': make_id('addon', var_addon),
            'name': var_addon,
            'price': addon_cost
        })

# Add unified signature pizzas to wood-fired-neapolitan-pizzas
for pname, pinfo in signature_pizzas.items():
    item_id = make_id('dish', pname)
    small_price = pinfo['prices'].get('small', 290)
    large_price = pinfo['prices'].get('large', 570)
    thin_price = pinfo['prices'].get('thin', 520)
    imgs = get_pizza_variant_images(pname)

    unified_dish = {
        'id': item_id,
        'name': pname,
        'category': 'Wood-Fired & Thin Crust Pizzas',
        'isVeg': pinfo['isVeg'],
        'price': small_price,
        'basePrice': small_price,
        'description': pinfo['desc'] or f"Handcrafted 48-hour slow-fermented Neapolitan dough with San Marzano sugo and premium toppings.",
        'imagePath': imgs['small'],
        'isAvailable': True,
        'isChefSpecial': False,
        'isBestseller': 'Margherita' in pname,
        'spicyLevel': 1 if any(k in pname.lower() for k in ['spicy', 'peri', 'chilli', 'paprika']) else 0,
        'hasVariants': True,
        'variants': [
            {
                'id': f"{item_id}-woodfired-small",
                'name': 'Wood-Fired Small (8")',
                'price': small_price,
                'isVeg': pinfo['isVeg'],
                'imagePath': imgs['small'],
                'crustType': 'woodfired-small'
            },
            {
                'id': f"{item_id}-woodfired-large",
                'name': 'Wood-Fired Large (12")',
                'price': large_price,
                'isVeg': pinfo['isVeg'],
                'imagePath': imgs['large'],
                'crustType': 'woodfired-large'
            },
            {
                'id': f"{item_id}-thin-crust",
                'name': 'Thin Crust (8 Slices)',
                'price': thin_price,
                'isVeg': pinfo['isVeg'],
                'imagePath': imgs['thin'],
                'crustType': 'thin-crust'
            }
        ],
        'addons': pinfo['addons']
    }
    add_to_subcat('pizza', 'signature-pizzas', unified_dish)

# PARSE SHEET 2
with open('sheet2_asian.csv', 'r', encoding='utf-8') as f:
    s2_rows = list(csv.reader(f))

cur_s2_cat = 'Soups'
parent_s2_dish = None

for i in range(2, len(s2_rows)):
    r = s2_rows[i]
    if not any(c.strip() for c in r): continue
    s_no = clean(r[0])
    raw_cat = clean(r[2])
    if raw_cat: cur_s2_cat = raw_cat
    c = cur_s2_cat
    veg_str = clean(r[3])
    item_name = clean(r[4])
    var_addon = clean(r[5])
    addon_cost_str = clean(r[6])
    price_str = clean(r[7])
    desc = clean(r[8]) if len(r) > 8 else ''
    price = int(price_str) if price_str.isdigit() else 0
    addon_cost = int(addon_cost_str) if addon_cost_str.isdigit() else 0
    is_veg = is_veg_str(veg_str) if veg_str else True

    # Case A: Priced Dish
    if price > 0:
        # Determine display name
        display_name = item_name
        if var_addon and var_addon.strip() and not item_name:
            display_name = f"{parent_s2_dish['name']} ({var_addon})" if parent_s2_dish else var_addon
        elif var_addon and var_addon.strip() and item_name and var_addon.lower() not in item_name.lower():
            display_name = f"{item_name} ({var_addon})"

        item_id = make_id('asian', display_name)
        img = find_asset(item_name or var_addon, c)

        dish = {
            'id': item_id,
            'name': display_name,
            'category': c,
            'isVeg': is_veg,
            'price': price,
            'basePrice': price,
            'description': desc or (parent_s2_dish['description'] if parent_s2_dish and not desc else f"Authentic {display_name} prepared with Asian herbs and wok fire."),
            'imagePath': img,
            'isAvailable': True,
            'isChefSpecial': False,
            'isBestseller': False,
            'spicyLevel': 1 if 'spicy' in display_name.lower() or 'chilli' in display_name.lower() or 'schezwan' in display_name.lower() else 0,
            'hasVariants': False,
            'variants': [],
            'addons': []
        }
        parent_s2_dish = dish

        # Routing to subcategories
        if c == 'Soups':
            if is_veg:
                add_to_subcat('soups', 'veg-asian-soups', dish)
            else:
                add_to_subcat('soups', 'nonveg-asian-soups', dish)
        elif c == 'Dim Sum':
            if 'Spicy Cheesy' in display_name: dish['isChefSpecial'] = True; dish['isBestseller'] = True
            if is_veg:
                add_to_subcat('dim-sum', 'veg-dim-sum', dish)
            else:
                add_to_subcat('dim-sum', 'nonveg-dim-sum', dish)
        elif c == 'Momos':
            if is_veg:
                add_to_subcat('momo', 'veg-momos', dish)
            else:
                add_to_subcat('momo', 'nonveg-momos', dish)
        elif c == 'Baos':
            if is_veg:
                add_to_subcat('baos', 'veg-baos', dish)
            else:
                add_to_subcat('baos', 'nonveg-baos', dish)
        elif 'Sushi - 4' in c:
            if is_veg:
                add_to_subcat('sushi', 'veg-sushi-4pcs', dish)
            else:
                add_to_subcat('sushi', 'nonveg-sushi-4pcs', dish)
        elif 'Sushi - 8' in c:
            if is_veg:
                add_to_subcat('sushi', 'veg-sushi-8pcs', dish)
            else:
                add_to_subcat('sushi', 'nonveg-sushi-8pcs', dish)
        elif c == 'Appetisers':
            if is_veg:
                add_to_subcat('appetizers', 'veg-asian-appetisers', dish)
            else:
                add_to_subcat('appetizers', 'nonveg-asian-appetisers', dish)
        elif c == 'Noodles':
            if is_veg:
                add_to_subcat('noodles', 'veg-wok-noodles', dish)
            else:
                add_to_subcat('noodles', 'nonveg-wok-noodles', dish)
        elif c == 'Noodle Bowls':
            if is_veg:
                add_to_subcat('noodles', 'veg-noodle-bowls', dish)
            else:
                add_to_subcat('noodles', 'nonveg-noodle-bowls', dish)
        elif c == 'Curries':
            # Rice addons for curries
            dish['addons'] = [
                {'id': make_id('addon', 'steamed-rice'), 'name': 'Steamed Rice', 'price': 129},
                {'id': make_id('addon', 'fried-rice'), 'name': 'Fried Rice', 'price': 179},
                {'id': make_id('addon', 'jasmine-rice'), 'name': 'Jasmine Rice', 'price': 199}
            ]
            if is_veg:
                add_to_subcat('curries', 'veg-curries', dish)
            else:
                add_to_subcat('curries', 'nonveg-curries', dish)
        elif c == 'Rice Bowls':
            if is_veg:
                add_to_subcat('curries', 'veg-rice-bowls', dish)
            else:
                add_to_subcat('curries', 'nonveg-rice-bowls', dish)

    elif addon_cost > 0 and var_addon and parent_s2_dish is not None:
        parent_s2_dish['addons'].append({
            'id': make_id('addon', var_addon),
            'name': var_addon,
            'price': addon_cost
        })

# Total Count & Output
total_dishes = 0
all_items = []
print("\n=== COMPLETE UNPACKED DISH AUDIT ===")
for cat in categories_data:
    cat_count = sum(len(sub['items']) for sub in cat['subcategories'])
    total_dishes += cat_count
    print(f"[{cat['title']}]: {cat_count} dishes")
    for sub in cat['subcategories']:
        print(f"   -> {sub['title']}: {len(sub['items'])} items")
        all_items.extend(sub['items'])

print(f"\nTOTAL ACTIVE DISHES: {total_dishes}")

# Write to src/data/restaurantMenuData.ts
ts_content = f"""import {{ CategoryAccordionData, MenuItem }} from '../types';

export const RESTAURANT_MENU_ACCORDIONS: CategoryAccordionData[] = {json.dumps(categories_data, indent=2)};

export const ALL_MENU_ITEMS: MenuItem[] = RESTAURANT_MENU_ACCORDIONS.flatMap((category) =>
  category.subcategories.flatMap((subgroup) => subgroup.items)
);
"""

with open('src/data/restaurantMenuData.ts', 'w', encoding='utf-8') as f:
    f.write(ts_content)

print("Saved src/data/restaurantMenuData.ts successfully!")

# Write to src/data/menuCatalog.ts
catalog_content = f"""import {{ MenuItem }} from '../types';

export const INITIAL_MENU_ITEMS: MenuItem[] = {json.dumps(all_items, indent=2)};
"""

with open('src/data/menuCatalog.ts', 'w', encoding='utf-8') as f:
    f.write(catalog_content)

print("Saved src/data/menuCatalog.ts successfully!")
