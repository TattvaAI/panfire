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

# Structure 8 Categories with explicit subcategories
categories_data = [
    {
        'id': 'wood-fired-neapolitan-pizzas',
        'title': 'Wood-Fired Neapolitan Pizzas (8" & 12")',
        'description': 'Handcrafted 48-hour slow-fermented Neapolitan dough baked in our 500°C wood-fired oven.',
        'badge': 'House Signature',
        'subcategories': [
            {'id': 'neapolitan-small', 'title': 'Neapolitan Pizzas - Small (8 Inch)', 'items': []},
            {'id': 'neapolitan-large', 'title': 'Neapolitan Pizzas - Large (12 Inch)', 'items': []},
        ]
    },
    {
        'id': 'thin-crust-deep-dish-pizzas',
        'title': 'Panfire Thin Crust & Deep Dish Pizzas',
        'description': 'Ultra-crispy Roman-style thin crusts and indulgent Chicago-style deep dish pies.',
        'badge': 'Crispy & Loaded',
        'subcategories': [
            {'id': 'panfire-thin-crust', 'title': 'Panfire Thin Crust Pizzas (8 Slices)', 'items': []},
            {'id': 'deep-dish-pizzas', 'title': 'Deep Dish Pizzas (6 Slices)', 'items': []},
            {'id': 'indie-thin-crust', 'title': 'Indie Thin Crust Pizzas (8 Slices)', 'items': []},
        ]
    },
    {
        'id': 'dim-sum-momos-baos',
        'title': 'Dim Sum, Momos & Handcrafted Baos',
        'description': 'Delicate steamed dumplings, Himalayan momos, and cloud-soft Taiwanese bao buns.',
        'badge': 'Freshly Steamed',
        'subcategories': [
            {'id': 'veg-dim-sum', 'title': 'Vegetarian Dim Sum (6 Pcs)', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-dim-sum', 'title': 'Non-Vegetarian Dim Sum (6 Pcs)', 'isVegSection': False, 'items': []},
            {'id': 'veg-momos', 'title': 'Vegetarian Momos & Gyozas (6 Pcs)', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-momos', 'title': 'Non-Vegetarian Momos & Gyozas (6 Pcs)', 'isVegSection': False, 'items': []},
            {'id': 'veg-baos', 'title': 'Vegetarian Handcrafted Baos (2 Pcs)', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-baos', 'title': 'Non-Vegetarian Handcrafted Baos (2 Pcs)', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'sushi-bar',
        'title': 'Artisanal Sushi Bar (4 & 8 Pieces)',
        'description': 'Freshly rolled maki and uramaki with seasoned Japanese short-grain rice and house pickles.',
        'badge': 'Master Rolled',
        'subcategories': [
            {'id': 'veg-sushi-4pcs', 'title': 'Vegetarian Sushi - 4 Pieces', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-sushi-4pcs', 'title': 'Non-Vegetarian Sushi - 4 Pieces', 'isVegSection': False, 'items': []},
            {'id': 'veg-sushi-8pcs', 'title': 'Vegetarian Sushi - 8 Pieces', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-sushi-8pcs', 'title': 'Non-Vegetarian Sushi - 8 Pieces', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'asian-wok-soups-bowls',
        'title': 'Asian Soups, Noodles & Wok Curries',
        'description': 'Simmered broths, wok-charred noodles, rich coconut curries, and loaded rice bowls.',
        'badge': 'Wok & Broth',
        'subcategories': [
            {'id': 'veg-asian-soups', 'title': 'Vegetarian Asian Soups', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-asian-soups', 'title': 'Non-Vegetarian Asian Soups (Chicken & Prawn)', 'isVegSection': False, 'items': []},
            {'id': 'veg-asian-appetisers', 'title': 'Vegetarian Asian Appetisers & Small Plates', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-asian-appetisers', 'title': 'Non-Vegetarian Asian Appetisers & Small Plates', 'isVegSection': False, 'items': []},
            {'id': 'veg-wok-noodles', 'title': 'Vegetarian Wok-Tossed Noodles', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-wok-noodles', 'title': 'Non-Vegetarian Wok-Tossed Noodles (Chicken & Prawn)', 'isVegSection': False, 'items': []},
            {'id': 'veg-noodle-bowls', 'title': 'Vegetarian Asian Noodle Bowls', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-noodle-bowls', 'title': 'Non-Vegetarian Asian Noodle Bowls (Chicken & Prawn)', 'isVegSection': False, 'items': []},
            {'id': 'veg-curries', 'title': 'Vegetarian Signature Curries (With Rice Add-ons)', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-curries', 'title': 'Non-Vegetarian Signature Curries (Chicken & Prawn)', 'isVegSection': False, 'items': []},
            {'id': 'veg-rice-bowls', 'title': 'Vegetarian Asian Rice Bowls', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-rice-bowls', 'title': 'Non-Vegetarian Asian Rice Bowls', 'isVegSection': False, 'items': []},
        ]
    },
    {
        'id': 'italian-pastas-sandwiches',
        'title': 'Pastas, Napoli Sandwiches & Garlic Breads',
        'description': 'Hand-rolled Italian pasta, wood-fired sourdough sandwiches, and garlic loaves.',
        'badge': 'Italian Hearth',
        'subcategories': [
            {'id': 'veg-salads', 'title': 'Vegetarian Fresh Salads', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-salads', 'title': 'Grilled Chicken Salads', 'isVegSection': False, 'items': []},
            {'id': 'sourdough-burgers', 'title': 'Wood-Fired Sourdough Burgers', 'items': []},
            {'id': 'veg-pastas', 'title': 'Vegetarian Artisanal Pastas (Spaghetti / Penne)', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-pastas', 'title': 'Non-Vegetarian Pastas with Grilled Chicken', 'isVegSection': False, 'items': []},
            {'id': 'veg-napoli-sandwiches', 'title': 'Vegetarian Napoli Sandwiches', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-napoli-sandwiches', 'title': 'Non-Vegetarian Napoli Sandwiches', 'isVegSection': False, 'items': []},
            {'id': 'veg-garlic-breads', 'title': 'Vegetarian Garlic Breads', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-garlic-breads', 'title': 'Non-Vegetarian Garlic Breads', 'isVegSection': False, 'items': []},
            {'id': 'italian-appetizers', 'title': 'Italian Appetizers & Fries', 'items': []},
        ]
    },
    {
        'id': 'mexican-street-food',
        'title': 'Mexican Street (Tacos, Burritos & Hot Dogs)',
        'description': 'Sizzling burrito bowls, toasted wraps, street tacos, loaded nachos, and wood-fired hot dogs.',
        'badge': 'Street Flavours',
        'subcategories': [
            {'id': 'burrito-bowls', 'title': 'Burrito Bowls', 'items': []},
            {'id': 'burrito-wraps', 'title': 'Burrito Wraps', 'items': []},
            {'id': 'mexican-burgers', 'title': 'Handcrafted Burgers', 'items': []},
            {'id': 'tacos-nachos', 'title': 'Street Tacos & Baked Nachos', 'items': []},
            {'id': 'wood-fired-hot-dogs', 'title': 'Wood-Fired Hot Dogs (With Gourmet Toppings)', 'items': []},
        ]
    },
    {
        'id': 'beverages-desserts',
        'title': 'Beverages, Shakes & Desserts',
        'description': 'Fresh fruit mojitos, hand-spun shakes, iced teas, artisan coffee, and sweet endings.',
        'badge': 'Chilled & Sweet',
        'subcategories': [
            {'id': 'beverages', 'title': 'Chilled Beverages & Mojitos', 'items': []},
            {'id': 'milkshakes', 'title': 'Hand-Spun Milkshakes', 'items': []},
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

# PARSE SHEET 1
with open('sheet1_italian_mexican.csv', 'r', encoding='utf-8') as f:
    s1_rows = list(csv.reader(f))

cur_broad = 'ITALIAN'
cur_cat = ''
parent_dish = None

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
        if 'Neapolitan Pizza - Small' in cur_cat:
            add_to_subcat('wood-fired-neapolitan-pizzas', 'neapolitan-small', new_dish)
        elif 'Neapolitan Pizza - Large' in cur_cat:
            add_to_subcat('wood-fired-neapolitan-pizzas', 'neapolitan-large', new_dish)
        elif 'Panfire Thin Crust' in cur_cat:
            add_to_subcat('thin-crust-deep-dish-pizzas', 'panfire-thin-crust', new_dish)
        elif 'Deep Dish' in cur_cat:
            new_dish['isChefSpecial'] = True
            add_to_subcat('thin-crust-deep-dish-pizzas', 'deep-dish-pizzas', new_dish)
        elif 'Indie Thin Crust' in cur_cat:
            add_to_subcat('thin-crust-deep-dish-pizzas', 'indie-thin-crust', new_dish)
        elif 'Salads' in cur_cat:
            add_to_subcat('italian-pastas-sandwiches', 'veg-salads', new_dish)
        elif 'Sourdough Burgers' in cur_cat:
            new_dish['isChefSpecial'] = True
            add_to_subcat('italian-pastas-sandwiches', 'sourdough-burgers', new_dish)
        elif 'Pasta' in cur_cat:
            new_dish['hasVariants'] = True
            new_dish['variants'] = [
                {'id': make_id('var', 'spaghetti'), 'name': 'Spaghetti', 'price': price, 'isVeg': True},
                {'id': make_id('var', 'penne'), 'name': 'Penne', 'price': price, 'isVeg': True}
            ]
            add_to_subcat('italian-pastas-sandwiches', 'veg-pastas', new_dish)
        elif 'Napoli Sandwiches' in cur_cat:
            if is_veg:
                add_to_subcat('italian-pastas-sandwiches', 'veg-napoli-sandwiches', new_dish)
            else:
                add_to_subcat('italian-pastas-sandwiches', 'nonveg-napoli-sandwiches', new_dish)
        elif 'Garlic Breads' in cur_cat:
            if is_veg:
                add_to_subcat('italian-pastas-sandwiches', 'veg-garlic-breads', new_dish)
            else:
                add_to_subcat('italian-pastas-sandwiches', 'nonveg-garlic-breads', new_dish)
        elif 'Appetizers' in cur_cat:
            add_to_subcat('italian-pastas-sandwiches', 'italian-appetizers', new_dish)
        elif 'Burrito Bowls' in cur_cat:
            add_to_subcat('mexican-street-food', 'burrito-bowls', new_dish)
        elif 'Burrito Wraps' in cur_cat:
            add_to_subcat('mexican-street-food', 'burrito-wraps', new_dish)
        elif 'Burgers' in cur_cat:
            add_to_subcat('mexican-street-food', 'mexican-burgers', new_dish)
        elif 'Tacos' in cur_cat or 'Nachos' in cur_cat:
            add_to_subcat('mexican-street-food', 'tacos-nachos', new_dish)
        elif 'Wood-Fired Hot Dogs' in cur_cat:
            new_dish['addons'] = [
                {'id': make_id('addon', 'mushrooms'), 'name': 'Sautéed mushrooms', 'price': 60},
                {'id': make_id('addon', 'onions'), 'name': 'Caramelised onions', 'price': 40},
                {'id': make_id('addon', 'tomatoes'), 'name': 'Sun-dried tomatoes', 'price': 40}
            ]
            add_to_subcat('mexican-street-food', 'wood-fired-hot-dogs', new_dish)
        elif 'Beverages' in cur_cat:
            if 'shake' in item_name.lower():
                add_to_subcat('beverages-desserts', 'milkshakes', new_dish)
            else:
                add_to_subcat('beverages-desserts', 'beverages', new_dish)
        elif 'Desserts' in cur_cat:
            new_dish['isChefSpecial'] = True
            add_to_subcat('beverages-desserts', 'desserts', new_dish)

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
            add_to_subcat('italian-pastas-sandwiches', 'nonveg-salads', child_dish)
        elif 'Pasta' in cur_cat:
            child_dish['hasVariants'] = True
            child_dish['variants'] = [
                {'id': make_id('var', 'spaghetti'), 'name': 'Spaghetti', 'price': price, 'isVeg': False},
                {'id': make_id('var', 'penne'), 'name': 'Penne', 'price': price, 'isVeg': False}
            ]
            add_to_subcat('italian-pastas-sandwiches', 'nonveg-pastas', child_dish)

    # Case C: Addon row (no standalone price, but addon_cost > 0)
    elif addon_cost > 0 and var_addon and parent_dish is not None:
        parent_dish['addons'].append({
            'id': make_id('addon', var_addon),
            'name': var_addon,
            'price': addon_cost
        })

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
                add_to_subcat('asian-wok-soups-bowls', 'veg-asian-soups', dish)
            else:
                add_to_subcat('asian-wok-soups-bowls', 'nonveg-asian-soups', dish)
        elif c == 'Dim Sum':
            if 'Spicy Cheesy' in display_name: dish['isChefSpecial'] = True; dish['isBestseller'] = True
            if is_veg:
                add_to_subcat('dim-sum-momos-baos', 'veg-dim-sum', dish)
            else:
                add_to_subcat('dim-sum-momos-baos', 'nonveg-dim-sum', dish)
        elif c == 'Momos':
            if is_veg:
                add_to_subcat('dim-sum-momos-baos', 'veg-momos', dish)
            else:
                add_to_subcat('dim-sum-momos-baos', 'nonveg-momos', dish)
        elif c == 'Baos':
            if is_veg:
                add_to_subcat('dim-sum-momos-baos', 'veg-baos', dish)
            else:
                add_to_subcat('dim-sum-momos-baos', 'nonveg-baos', dish)
        elif 'Sushi - 4' in c:
            if is_veg:
                add_to_subcat('sushi-bar', 'veg-sushi-4pcs', dish)
            else:
                add_to_subcat('sushi-bar', 'nonveg-sushi-4pcs', dish)
        elif 'Sushi - 8' in c:
            if is_veg:
                add_to_subcat('sushi-bar', 'veg-sushi-8pcs', dish)
            else:
                add_to_subcat('sushi-bar', 'nonveg-sushi-8pcs', dish)
        elif c == 'Appetisers':
            if is_veg:
                add_to_subcat('asian-wok-soups-bowls', 'veg-asian-appetisers', dish)
            else:
                add_to_subcat('asian-wok-soups-bowls', 'nonveg-asian-appetisers', dish)
        elif c == 'Noodles':
            if is_veg:
                add_to_subcat('asian-wok-soups-bowls', 'veg-wok-noodles', dish)
            else:
                add_to_subcat('asian-wok-soups-bowls', 'nonveg-wok-noodles', dish)
        elif c == 'Noodle Bowls':
            if is_veg:
                add_to_subcat('asian-wok-soups-bowls', 'veg-noodle-bowls', dish)
            else:
                add_to_subcat('asian-wok-soups-bowls', 'nonveg-noodle-bowls', dish)
        elif c == 'Curries':
            # Rice addons for curries
            dish['addons'] = [
                {'id': make_id('addon', 'steamed-rice'), 'name': 'Steamed Rice', 'price': 129},
                {'id': make_id('addon', 'fried-rice'), 'name': 'Fried Rice', 'price': 179},
                {'id': make_id('addon', 'jasmine-rice'), 'name': 'Jasmine Rice', 'price': 199}
            ]
            if is_veg:
                add_to_subcat('asian-wok-soups-bowls', 'veg-curries', dish)
            else:
                add_to_subcat('asian-wok-soups-bowls', 'nonveg-curries', dish)
        elif c == 'Rice Bowls':
            if is_veg:
                add_to_subcat('asian-wok-soups-bowls', 'veg-rice-bowls', dish)
            else:
                add_to_subcat('asian-wok-soups-bowls', 'nonveg-rice-bowls', dish)

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
