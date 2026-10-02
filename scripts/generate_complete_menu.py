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

def find_asset(name, cat):
    clean_name = re.sub(r'[^a-z0-9]', ' ', name.lower())
    ignore = {
        'pizza', 'neapolitan', 'small', 'large', 'thin', 'crust', 'pieces',
        'and', 'with', 'the', 'slices', 'inch', '8', '12', '4', 'soup',
        'salad', 'bowl', 'roll', 'dim', 'sum', 'sandwich', 'bread', 'tacos', 'taco'
    }
    words = [w for w in clean_name.split() if w not in ignore and len(w) > 2]
    best = None
    best_score = 0
    for a in assets:
        a_low = a.lower()
        score = sum(2 if w in a_low else 0 for w in words)
        cat_token = cat.lower().split()[0]
        if len(cat_token) > 3 and cat_token in a_low:
            score += 1
        if score > best_score:
            best_score = score
            best = a
    if best_score >= 2:
        return best
    
    cat_slug = cat.lower().replace(' ', '-').replace('&', 'and')
    for a in assets:
        if any(part in a.lower() for part in cat_slug.split('-') if len(part) > 3):
            return a
    return '/assets/pizza/classic-margherita.avif'

# Parse Sheet 1
with open('sheet1_italian_mexican.csv', 'r', encoding='utf-8') as f:
    s1_rows = list(csv.reader(f))

s1_items = []
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
        s1_items.append(cur_dish)
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

print("Sheet 1 parsed dishes:", len(s1_items))

# Parse Sheet 2
with open('sheet2_asian.csv', 'r', encoding='utf-8') as f:
    s2_rows = list(csv.reader(f))

s2_raw = []
current_cat = ''
for i in range(2, len(s2_rows)):
    r = s2_rows[i]
    if not any(c.strip() for c in r):
        continue
    s_no = clean(r[0])
    broad = clean(r[1]) or 'ASIAN'
    cat = clean(r[2]) or current_cat
    veg_str = clean(r[3])
    item_name = clean(r[4])
    var_addon = clean(r[5])
    addon_cost_str = clean(r[6])
    price_str = clean(r[7])
    desc = clean(r[8]) if len(r) > 8 else ''
    if cat: current_cat = cat
    addon_cost = int(addon_cost_str) if addon_cost_str.isdigit() else 0
    price = int(price_str) if price_str.isdigit() else 0
    s2_raw.append({
        's_no': s_no,
        'broad': broad,
        'cat': current_cat,
        'veg_str': veg_str,
        'name': item_name,
        'var_addon': var_addon,
        'addon_cost': addon_cost,
        'price': price,
        'desc': desc
    })

print("Sheet 2 raw rows:", len(s2_raw))
