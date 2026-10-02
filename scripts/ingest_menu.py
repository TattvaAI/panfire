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
        'salad', 'bowl', 'roll', 'dim', 'sum', 'sandwich', 'bread', 'tacos', 'taco', 'pieces'
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

# Parse Sheet 1
with open('sheet1_italian_mexican.csv', 'r', encoding='utf-8') as f:
    s1_rows = list(csv.reader(f))

s1_raw_items = []
current_cat = ''
current_broad = 'ITALIAN'
cur_dish = None

for i in range(3, len(s1_rows)):
    r = s1_rows[i]
    if not any(c.strip() for c in r):
        continue
    s_no = clean(r[0])
    broad = clean(r[1]) or current_broad
    cat = clean(r[2]) or current_cat
    veg_str = clean(r[3])
    item_name = clean(r[4])
    var_addon = clean(r[5])
    addon_cost_str = clean(r[6])
    price_str = clean(r[7])
    desc = clean(r[8]) if len(r) > 8 else ''

    if broad: current_broad = broad
    if cat: current_cat = cat
    addon_cost = int(addon_cost_str) if addon_cost_str.isdigit() else 0
    price = int(price_str) if price_str.isdigit() else 0

    if item_name:
        is_veg = is_veg_str(veg_str) if veg_str else True
        cur_dish = {
            'sheet': 1,
            's_no': s_no,
            'broadCategory': current_broad,
            'category': current_cat,
            'isVeg': is_veg,
            'name': item_name,
            'price': price,
            'description': desc,
            'variants': [],
            'addons': []
        }
        s1_raw_items.append(cur_dish)
        if var_addon:
            if addon_cost:
                cur_dish['addons'].append({'name': var_addon, 'price': addon_cost})
            elif price:
                cur_dish['variants'].append({'name': var_addon, 'price': price, 'isVeg': is_veg})
    else:
        if cur_dish is not None and var_addon:
            child_veg = is_veg_str(veg_str) if veg_str else cur_dish['isVeg']
            if addon_cost:
                cur_dish['addons'].append({'name': var_addon, 'price': addon_cost})
            elif price:
                cur_dish['variants'].append({'name': var_addon, 'price': price, 'isVeg': child_veg})
            else:
                cur_dish['addons'].append({'name': var_addon, 'price': 0})

print("Sheet 1 raw items:", len(s1_raw_items))

# Parse Sheet 2
with open('sheet2_asian.csv', 'r', encoding='utf-8') as f:
    s2_rows = list(csv.reader(f))

# Structure categories into the 8 top-level accordions:
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
            {'id': 'asian-soups', 'title': 'Asian Soups (Customisable Protein)', 'items': []},
            {'id': 'veg-asian-appetisers', 'title': 'Vegetarian Asian Appetisers & Small Plates', 'isVegSection': True, 'items': []},
            {'id': 'nonveg-asian-appetisers', 'title': 'Non-Vegetarian Asian Appetisers & Small Plates', 'isVegSection': False, 'items': []},
            {'id': 'wok-noodles', 'title': 'Wok-Tossed Noodles (Customisable Protein)', 'items': []},
            {'id': 'noodle-bowls', 'title': 'Asian Noodle Bowls (Customisable Protein)', 'items': []},
            {'id': 'signature-curries', 'title': 'Signature Asian Curries (With Rice Add-ons)', 'items': []},
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
            {'id': 'salads', 'title': 'Garden Fresh Salads (Add Grilled Chicken)', 'items': []},
            {'id': 'sourdough-burgers', 'title': 'Wood-Fired Sourdough Burgers', 'items': []},
            {'id': 'artisanal-pastas', 'title': 'Artisanal Pastas (Spaghetti / Penne)', 'items': []},
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

# 1. Distribute Sheet 1 items
for raw in s1_raw_items:
    c = raw['category']
    name = raw['name']
    price = raw['price']
    desc = raw['description']
    is_veg = raw['isVeg']
    addons = raw['addons']
    variants = raw['variants']

    item_id = make_id('dish', name)
    img = find_asset(name, c)

    item = {
        'id': item_id,
        'name': name,
        'category': c,
        'isVeg': is_veg,
        'price': price,
        'basePrice': price,
        'description': desc or f"Freshly prepared {name} made with premium ingredients in our kitchen.",
        'imagePath': img,
        'isAvailable': True,
        'isChefSpecial': False,
        'isBestseller': False,
        'spicyLevel': 1 if 'spicy' in name.lower() or 'peri' in name.lower() or 'chilli' in name.lower() else 0,
        'hasVariants': len(variants) > 0,
        'variants': [{'id': make_id('var', v['name']), 'name': v['name'], 'price': v['price'], 'isVeg': v.get('isVeg', is_veg)} for v in variants],
        'addons': [{'id': make_id('addon', a['name']), 'name': a['name'], 'price': a['price']} for a in addons]
    }

    if 'Neapolitan Pizza - Small' in c:
        if 'Margherita' in name or 'Burrata' in name: item['isBestseller'] = True
        add_to_subcat('wood-fired-neapolitan-pizzas', 'neapolitan-small', item)
    elif 'Neapolitan Pizza - Large' in c:
        if 'Margherita' in name or 'Burrata' in name: item['isBestseller'] = True
        add_to_subcat('wood-fired-neapolitan-pizzas', 'neapolitan-large', item)
    elif 'Panfire Thin Crust' in c:
        if 'Margherita' in name: item['isBestseller'] = True
        add_to_subcat('thin-crust-deep-dish-pizzas', 'panfire-thin-crust', item)
    elif 'Deep Dish' in c:
        item['isChefSpecial'] = True
        add_to_subcat('thin-crust-deep-dish-pizzas', 'deep-dish-pizzas', item)
    elif 'Indie Thin Crust' in c:
        add_to_subcat('thin-crust-deep-dish-pizzas', 'indie-thin-crust', item)
    elif 'Salads' in c:
        if 'Burrata' in name: item['isChefSpecial'] = True
        add_to_subcat('italian-pastas-sandwiches', 'salads', item)
    elif 'Sourdough Burgers' in c:
        item['isChefSpecial'] = True
        add_to_subcat('italian-pastas-sandwiches', 'sourdough-burgers', item)
    elif 'Pasta' in c:
        item['hasVariants'] = True
        item['variants'] = [
            {'id': make_id('var', 'spaghetti'), 'name': 'Spaghetti', 'price': price, 'isVeg': True},
            {'id': make_id('var', 'penne'), 'name': 'Penne', 'price': price, 'isVeg': True}
        ]
        item['addons'] = [
            {'id': make_id('addon', 'chicken'), 'name': 'Add Grilled Chicken', 'price': 50}
        ]
        add_to_subcat('italian-pastas-sandwiches', 'artisanal-pastas', item)
    elif 'Napoli Sandwiches' in c:
        if is_veg:
            add_to_subcat('italian-pastas-sandwiches', 'veg-napoli-sandwiches', item)
        else:
            add_to_subcat('italian-pastas-sandwiches', 'nonveg-napoli-sandwiches', item)
    elif 'Garlic Breads' in c:
        if is_veg:
            add_to_subcat('italian-pastas-sandwiches', 'veg-garlic-breads', item)
        else:
            add_to_subcat('italian-pastas-sandwiches', 'nonveg-garlic-breads', item)
    elif 'Appetizers' in c:
        add_to_subcat('italian-pastas-sandwiches', 'italian-appetizers', item)
    elif 'Burrito Bowls' in c:
        add_to_subcat('mexican-street-food', 'burrito-bowls', item)
    elif 'Burrito Wraps' in c:
        add_to_subcat('mexican-street-food', 'burrito-wraps', item)
    elif 'Burgers' in c:
        add_to_subcat('mexican-street-food', 'mexican-burgers', item)
    elif 'Tacos' in c or 'Nachos' in c:
        add_to_subcat('mexican-street-food', 'tacos-nachos', item)
    elif 'Wood-Fired Hot Dogs' in c:
        item['addons'] = [
            {'id': make_id('addon', 'mushrooms'), 'name': 'Sautéed mushrooms', 'price': 60},
            {'id': make_id('addon', 'onions'), 'name': 'Caramelised onions', 'price': 40},
            {'id': make_id('addon', 'tomatoes'), 'name': 'Sun-dried tomatoes', 'price': 40}
        ]
        add_to_subcat('mexican-street-food', 'wood-fired-hot-dogs', item)
    elif 'Beverages' in c:
        if 'shake' in name.lower():
            add_to_subcat('beverages-desserts', 'milkshakes', item)
        else:
            add_to_subcat('beverages-desserts', 'beverages', item)
    elif 'Desserts' in c:
        item['isChefSpecial'] = True
        add_to_subcat('beverages-desserts', 'desserts', item)

# 2. Distribute Sheet 2 items
soups_list = [
    {
        'name': 'Manchow Soup',
        'desc': 'Spicy and tangy dark soya broth with ginger, garlic, fresh coriander and crispy fried noodles.',
        'variants': [
            {'name': 'Vegetarian', 'price': 175, 'isVeg': True},
            {'name': 'Chicken', 'price': 225, 'isVeg': False},
            {'name': 'Prawn', 'price': 295, 'isVeg': False}
        ]
    },
    {
        'name': 'Tom Kha Soup',
        'desc': 'Creamy Thai coconut broth with galangal, lemongrass and kaffir lime leaves.',
        'variants': [
            {'name': 'Vegetarian', 'price': 215, 'isVeg': True},
            {'name': 'Chicken', 'price': 275, 'isVeg': False},
            {'name': 'Prawn', 'price': 345, 'isVeg': False}
        ]
    },
    {
        'name': 'Sweet Corn Soup',
        'desc': 'Classic comforting creamy sweet corn soup with tender vegetables and mild seasonings.',
        'variants': [
            {'name': 'Vegetarian', 'price': 145, 'isVeg': True},
            {'name': 'Chicken', 'price': 195, 'isVeg': False},
            {'name': 'Prawn', 'price': 295, 'isVeg': False}
        ]
    },
    {
        'name': 'Hot & Sour Soup',
        'desc': 'Hearty, bold broth infused with red chillies, vinegar, white pepper and sliced mushrooms.',
        'variants': [
            {'name': 'Vegetarian', 'price': 175, 'isVeg': True},
            {'name': 'Chicken', 'price': 225, 'isVeg': False},
            {'name': 'Prawn', 'price': 295, 'isVeg': False}
        ]
    },
    {
        'name': 'Tom Yum Soup',
        'desc': 'Hot and sour Thai broth with lemongrass, kaffir lime leaves and fiery bird eye chilli.',
        'variants': [
            {'name': 'Vegetarian', 'price': 175, 'isVeg': True},
            {'name': 'Chicken', 'price': 225, 'isVeg': False},
            {'name': 'Prawn', 'price': 295, 'isVeg': False}
        ]
    },
    {
        'name': 'Lemon Coriander Soup',
        'desc': 'Clear aromatic broth enriched with zesty fresh lemon juice, crushed garlic and fresh coriander.',
        'variants': [
            {'name': 'Vegetarian', 'price': 145, 'isVeg': True},
            {'name': 'Chicken', 'price': 195, 'isVeg': False},
            {'name': 'Prawn', 'price': 295, 'isVeg': False}
        ]
    }
]

for sp in soups_list:
    item_id = make_id('soup', sp['name'])
    add_to_subcat('asian-wok-soups-bowls', 'asian-soups', {
        'id': item_id,
        'name': sp['name'],
        'category': 'Soups',
        'isVeg': True,
        'price': sp['variants'][0]['price'],
        'basePrice': sp['variants'][0]['price'],
        'description': sp['desc'],
        'imagePath': find_asset(sp['name'], 'Soups'),
        'isAvailable': True,
        'isChefSpecial': sp['name'] in ('Manchow Soup', 'Tom Kha Soup'),
        'isBestseller': sp['name'] in ('Manchow Soup', 'Sweet Corn Soup'),
        'spicyLevel': 1 if 'Hot' in sp['name'] or 'Tom' in sp['name'] else 0,
        'hasVariants': True,
        'variants': [{'id': make_id('var', v['name']), 'name': v['name'], 'price': v['price'], 'isVeg': v['isVeg']} for v in sp['variants']],
        'addons': []
    })

# Read remaining Sheet 2 items
cur_s2_cat = ''
for i in range(2, len(s2_rows)):
    r = s2_rows[i]
    if not any(c.strip() for c in r): continue
    s_no = clean(r[0])
    raw_cat = clean(r[2])
    if raw_cat:
        cur_s2_cat = raw_cat
    c = cur_s2_cat
    veg_str = clean(r[3])
    item_name = clean(r[4])
    var_addon = clean(r[5])
    price_str = clean(r[7])
    desc = clean(r[8]) if len(r) > 8 else ''
    price = int(price_str) if price_str.isdigit() else 0
    is_veg = is_veg_str(veg_str) if veg_str else True

    if c in ('Soups', 'Noodles', 'Noodle Bowls', 'Curries'):
        continue # handled via dedicated multi-variant objects

    if not item_name:
        continue

    item_id = make_id('asian', item_name)
    img = find_asset(item_name, c)

    it = {
        'id': item_id,
        'name': item_name,
        'category': c,
        'isVeg': is_veg,
        'price': price,
        'basePrice': price,
        'description': desc or f"Authentic {item_name} freshly crafted with Asian herbs and wok techniques.",
        'imagePath': img,
        'isAvailable': True,
        'isChefSpecial': False,
        'isBestseller': False,
        'spicyLevel': 1 if 'spicy' in item_name.lower() or 'chilli' in item_name.lower() else 0,
        'hasVariants': False,
        'variants': [],
        'addons': []
    }

    if c == 'Dim Sum':
        if 'Spicy Cheesy' in item_name: it['isChefSpecial'] = True; it['isBestseller'] = True
        if is_veg:
            add_to_subcat('dim-sum-momos-baos', 'veg-dim-sum', it)
        else:
            add_to_subcat('dim-sum-momos-baos', 'nonveg-dim-sum', it)
    elif c == 'Momos':
        if is_veg:
            add_to_subcat('dim-sum-momos-baos', 'veg-momos', it)
        else:
            add_to_subcat('dim-sum-momos-baos', 'nonveg-momos', it)
    elif c == 'Baos':
        if is_veg:
            add_to_subcat('dim-sum-momos-baos', 'veg-baos', it)
        else:
            add_to_subcat('dim-sum-momos-baos', 'nonveg-baos', it)
    elif 'Sushi - 4' in c:
        if is_veg:
            add_to_subcat('sushi-bar', 'veg-sushi-4pcs', it)
        else:
            add_to_subcat('sushi-bar', 'nonveg-sushi-4pcs', it)
    elif 'Sushi - 8' in c:
        if is_veg:
            add_to_subcat('sushi-bar', 'veg-sushi-8pcs', it)
        else:
            add_to_subcat('sushi-bar', 'nonveg-sushi-8pcs', it)
    elif c == 'Appetisers':
        if is_veg:
            add_to_subcat('asian-wok-soups-bowls', 'veg-asian-appetisers', it)
        else:
            add_to_subcat('asian-wok-soups-bowls', 'nonveg-asian-appetisers', it)
    elif c == 'Rice Bowls':
        if is_veg:
            add_to_subcat('asian-wok-soups-bowls', 'veg-rice-bowls', it)
        else:
            add_to_subcat('asian-wok-soups-bowls', 'nonveg-rice-bowls', it)

# Asian Noodles
noodles_list = [
    {
        'name': 'Butter & Burnt Garlic Noodles',
        'desc': 'Noodles tossed with butter, golden garlic and crisp vegetables.',
        'variants': [{'name': 'Vegetarian', 'price': 275, 'isVeg': True}, {'name': 'Chicken', 'price': 325, 'isVeg': False}, {'name': 'Prawn', 'price': 415, 'isVeg': False}]
    },
    {
        'name': 'Chilli Garlic Noodles',
        'desc': 'Noodles tossed with vegetables in a fragrant chilli-garlic oil.',
        'variants': [{'name': 'Vegetarian', 'price': 275, 'isVeg': True}, {'name': 'Chicken', 'price': 325, 'isVeg': False}, {'name': 'Prawn', 'price': 415, 'isVeg': False}]
    },
    {
        'name': 'Schezwan Noodles',
        'desc': 'Noodles wok-tossed with vegetables in a spicy, tangy Schezwan sauce.',
        'variants': [{'name': 'Vegetarian', 'price': 275, 'isVeg': True}, {'name': 'Chicken', 'price': 325, 'isVeg': False}, {'name': 'Prawn', 'price': 415, 'isVeg': False}]
    },
    {
        'name': 'Hakka Noodles',
        'desc': 'Indo-Chinese noodles wok-tossed with vegetables and mild seasoning.',
        'variants': [{'name': 'Vegetarian', 'price': 245, 'isVeg': True}, {'name': 'Chicken', 'price': 295, 'isVeg': False}, {'name': 'Prawn', 'price': 395, 'isVeg': False}]
    },
    {
        'name': 'Singaporean Hakka Noodles',
        'desc': 'Noodles wok-tossed with vegetables, curry spices and mild chilli.',
        'variants': [{'name': 'Vegetarian', 'price': 275, 'isVeg': True}, {'name': 'Chicken', 'price': 325, 'isVeg': False}, {'name': 'Prawn', 'price': 415, 'isVeg': False}]
    },
    {
        'name': 'Udon Noodles',
        'desc': 'Thick udon noodles tossed with crunchy vegetables in your choice of spicy Korean or creamy peanut sauce.',
        'variants': [
            {'name': 'Vegetarian (Spicy Korean Sauce)', 'price': 495, 'isVeg': True},
            {'name': 'Vegetarian (Peanut Butter Sauce)', 'price': 495, 'isVeg': True},
            {'name': 'Chicken (Spicy Korean Sauce)', 'price': 545, 'isVeg': False},
            {'name': 'Chicken (Peanut Butter Sauce)', 'price': 545, 'isVeg': False},
            {'name': 'Prawn (Spicy Korean Sauce)', 'price': 645, 'isVeg': False},
            {'name': 'Prawn (Peanut Butter Sauce)', 'price': 645, 'isVeg': False}
        ]
    }
]

for nd in noodles_list:
    item_id = make_id('noodle', nd['name'])
    add_to_subcat('asian-wok-soups-bowls', 'wok-noodles', {
        'id': item_id,
        'name': nd['name'],
        'category': 'Noodles',
        'isVeg': True,
        'price': nd['variants'][0]['price'],
        'basePrice': nd['variants'][0]['price'],
        'description': nd['desc'],
        'imagePath': find_asset(nd['name'], 'Noodles'),
        'isAvailable': True,
        'isChefSpecial': nd['name'] in ('Butter & Burnt Garlic Noodles', 'Udon Noodles'),
        'isBestseller': nd['name'] == 'Hakka Noodles',
        'spicyLevel': 1 if 'Chilli' in nd['name'] or 'Schezwan' in nd['name'] else 0,
        'hasVariants': True,
        'variants': [{'id': make_id('var', v['name']), 'name': v['name'], 'price': v['price'], 'isVeg': v['isVeg']} for v in nd['variants']],
        'addons': []
    })

# Asian Noodle Bowls
noodle_bowls_list = [
    {
        'name': 'Thukpa',
        'desc': 'Tibetan noodle soup with vegetables, ginger, garlic and fragrant broth.',
        'variants': [{'name': 'Vegetarian', 'price': 344, 'isVeg': True}, {'name': 'Chicken', 'price': 395, 'isVeg': False}]
    },
    {
        'name': 'Ramen',
        'desc': 'Rich Japanese broth with wheat noodles, fresh greens and savory garnishes.',
        'variants': [{'name': 'Vegetarian', 'price': 495, 'isVeg': True}, {'name': 'Chicken', 'price': 545, 'isVeg': False}, {'name': 'Prawn', 'price': 645, 'isVeg': False}]
    },
    {
        'name': 'Khao Suey',
        'desc': 'Burmese coconut milk curry noodle soup served with an array of crunchy condiments.',
        'variants': [{'name': 'Vegetarian', 'price': 545, 'isVeg': True}, {'name': 'Chicken', 'price': 595, 'isVeg': False}, {'name': 'Prawn', 'price': 675, 'isVeg': False}]
    },
    {
        'name': 'Pan-Fried Noodles',
        'desc': 'Crispy pan-fried noodles served with vegetables in your choice of sauce.',
        'variants': [{'name': 'Vegetarian', 'price': 345, 'isVeg': True}, {'name': 'Chicken', 'price': 395, 'isVeg': False}, {'name': 'Prawn', 'price': 475, 'isVeg': False}]
    },
    {
        'name': 'Oriental Bowl',
        'desc': 'Hearty Asian meal bowl with wok-charred noodles, fresh greens and savory sauce.',
        'variants': [{'name': 'Vegetarian', 'price': 345, 'isVeg': True}, {'name': 'Chicken', 'price': 395, 'isVeg': False}, {'name': 'Prawn', 'price': 475, 'isVeg': False}]
    },
    {
        'name': 'Chop Suey',
        'desc': 'Crispy fried noodles topped with vegetables in sweet and sour Indo-Chinese sauce.',
        'variants': [{'name': 'Vegetarian', 'price': 345, 'isVeg': True}, {'name': 'Chicken', 'price': 395, 'isVeg': False}]
    }
]

for nb in noodle_bowls_list:
    item_id = make_id('bowl', nb['name'])
    add_to_subcat('asian-wok-soups-bowls', 'noodle-bowls', {
        'id': item_id,
        'name': nb['name'],
        'category': 'Noodle Bowls',
        'isVeg': True,
        'price': nb['variants'][0]['price'],
        'basePrice': nb['variants'][0]['price'],
        'description': nb['desc'],
        'imagePath': find_asset(nb['name'], 'Noodles'),
        'isAvailable': True,
        'isChefSpecial': nb['name'] in ('Khao Suey', 'Ramen'),
        'isBestseller': nb['name'] == 'Thukpa',
        'spicyLevel': 1,
        'hasVariants': True,
        'variants': [{'id': make_id('var', v['name']), 'name': v['name'], 'price': v['price'], 'isVeg': v['isVeg']} for v in nb['variants']],
        'addons': []
    })

# Curries
curries_list = [
    {
        'name': 'Thai Green Curry',
        'desc': 'A fragrant Thai green curry with coconut milk, vegetables and fresh herbs. Rice not included.',
        'variants': [{'name': 'Vegetarian', 'price': 365, 'isVeg': True}, {'name': 'Chicken', 'price': 425, 'isVeg': False}, {'name': 'Prawn', 'price': 645, 'isVeg': False}],
        'addons': [{'name': 'Steamed Rice', 'price': 129}, {'name': 'Fried Rice', 'price': 179}, {'name': 'Jasmine Rice', 'price': 199}]
    },
    {
        'name': 'Thai Red Curry',
        'desc': 'A rich Thai red curry with coconut milk, vegetables and aromatic spices. Rice not included.',
        'variants': [{'name': 'Vegetarian', 'price': 365, 'isVeg': True}, {'name': 'Chicken', 'price': 425, 'isVeg': False}, {'name': 'Prawn', 'price': 645, 'isVeg': False}],
        'addons': [{'name': 'Steamed Rice', 'price': 129}, {'name': 'Fried Rice', 'price': 179}, {'name': 'Jasmine Rice', 'price': 199}]
    },
    {
        'name': 'Burmese Yellow Curry',
        'desc': 'Rich Burmese coconut curry with mild spices. Rice not included.',
        'variants': [{'name': 'Vegetarian', 'price': 365, 'isVeg': True}, {'name': 'Chicken', 'price': 425, 'isVeg': False}, {'name': 'Prawn', 'price': 645, 'isVeg': False}],
        'addons': [{'name': 'Steamed Rice', 'price': 129}, {'name': 'Fried Rice', 'price': 179}, {'name': 'Jasmine Rice', 'price': 199}]
    }
]

for cr in curries_list:
    item_id = make_id('curry', cr['name'])
    add_to_subcat('asian-wok-soups-bowls', 'signature-curries', {
        'id': item_id,
        'name': cr['name'],
        'category': 'Curries',
        'isVeg': True,
        'price': cr['variants'][0]['price'],
        'basePrice': cr['variants'][0]['price'],
        'description': cr['desc'],
        'imagePath': find_asset(cr['name'], 'Curries'),
        'isAvailable': True,
        'isChefSpecial': True,
        'isBestseller': cr['name'] == 'Thai Green Curry',
        'spicyLevel': 2,
        'hasVariants': True,
        'variants': [{'id': make_id('var', v['name']), 'name': v['name'], 'price': v['price'], 'isVeg': v['isVeg']} for v in cr['variants']],
        'addons': [{'id': make_id('addon', a['name']), 'name': a['name'], 'price': a['price']} for a in cr['addons']]
    })

# Verify total dishes count
total_dishes = 0
all_items = []
print("\n=== FINAL ACCORDION SUMMARY ===")
for cat in categories_data:
    cat_count = sum(len(sub['items']) for sub in cat['subcategories'])
    total_dishes += cat_count
    print(f"[{cat['title']}]: {cat_count} dishes across {len(cat['subcategories'])} subcategories")
    for sub in cat['subcategories']:
        print(f"   -> {sub['title']}: {len(sub['items'])} items")
        all_items.extend(sub['items'])

print(f"\nTOTAL BASE DISHES IN MENU: {total_dishes}")

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
