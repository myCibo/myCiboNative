const ingredientData =
    [
        {
            id: 1,
            name: 'Apples',
            expirationTime: 14, // Apples typically last 2-4 weeks
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 2,
            name: 'Bananas',
            expirationTime: 5, // Bananas typically last 2-7 days
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 3,
            name: 'Oranges',
            expirationTime: 14, // Oranges typically last 2-4 weeks
            category: 'Fruits',
            unit: 'Piece',
        },
        {
            id: 4,
            name: 'Grapes',
            expirationTime: 5, // Grapes typically last 5-7 days
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 5,
            name: 'Strawberries',
            expirationTime: 3, // Strawberries typically last 2-5 days
            category: 'Fruits',
            unit: 'Punnet',
        },
        {
            id: 6,
            name: 'Blueberries',
            expirationTime: 5, // Blueberries typically last 3-7 days
            category: 'Fruits',
            unit: 'Punnet',
        },
        {
            id: 7,
            name: 'Raspberries',
            expirationTime: 3, // Raspberries typically last 2-5 days
            category: 'Fruits',
            unit: 'Punnet',
        },
        {
            id: 8,
            name: 'Pineapple',
            expirationTime: 5, // Pineapple typically lasts 3-5 days
            category: 'Fruits',
            unit: 'Piece',
        },
        {
            id: 9,
            name: 'Mangoes',
            expirationTime: 5, // Mangoes typically last 2-7 days
            category: 'Fruits',
            unit: 'Piece',
        },
        {
            id: 10,
            name: 'Pears',
            expirationTime: 10, // Pears typically last 1-2 weeks
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 11,
            name: 'Peaches',
            expirationTime: 5, // Peaches typically last 2-5 days
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 12,
            name: 'Plums',
            expirationTime: 7, // Plums typically last 3-7 days
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 13,
            name: 'Cherries',
            expirationTime: 3, // Cherries typically last 2-5 days
            category: 'Fruits',
            unit: 'Punnet',
        },
        {
            id: 14,
            name: 'Kiwi',
            expirationTime: 7, // Kiwi typically last 3-7 days
            category: 'Fruits',
            unit: 'Piece',
        },
        {
            id: 15,
            name: 'Cantaloupe',
            expirationTime: 5, // Cantaloupe typically lasts 3-5 days
            category: 'Fruits',
            unit: 'Piece',
        },
        {
            id: 16,
            name: 'Watermelon',
            expirationTime: 7, // Watermelon typically lasts 5-7 days
            category: 'Fruits',
            unit: 'Piece',
        },
        {
            id: 17,
            name: 'Grapefruit',
            expirationTime: 14, // Grapefruit typically lasts 2-4 weeks
            category: 'Fruits',
            unit: 'Piece',
        },
        {
            id: 18,
            name: 'Lemon',
            expirationTime: 7, // Lemon typically lasts 1-2 weeks
            category: 'Fruits',
            unit: 'Piece',
        },
        {
            id: 19,
            name: 'Lime',
            expirationTime: 7, // Lime typically lasts 1-2 weeks
            category: 'Fruits',
            unit: 'Piece',
        },
        {
            id: 20,
            name: 'Tangerines',
            expirationTime: 10, // Tangerines typically last 1-2 weeks
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 21,
            name: 'Clementines',
            expirationTime: 7, // Clementines typically last 1-2 weeks
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 22,
            name: 'Apricots',
            expirationTime: 5, // Apricots typically last 2-5 days
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 23,
            name: 'Blackberries',
            expirationTime: 3, // Blackberries typically last 2-5 days
            category: 'Fruits',
            unit: 'Punnet',
        },
        {
            id: 24,
            name: 'Cranberries',
            expirationTime: 7, // Cranberries typically last 1-2 weeks
            category: 'Fruits',
            unit: 'Punnet',
        },
        {
            id: 25,
            name: 'Dates',
            expirationTime: 30, // Dates typically last 2-4 weeks
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 26,
            name: 'Figs',
            expirationTime: 5, // Figs typically last 2-5 days
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 27,
            name: 'Guava',
            expirationTime: 5, // Guava typically last 3-5 days
            category: 'Fruits',
            unit: 'Piece',
        },
        {
            id: 28,
            name: 'Honeydew',
            expirationTime: 5, // Honeydew typically lasts 3-5 days
            category: 'Fruits',
            unit: 'Piece',
        },
        {
            id: 29,
            name: 'Lychee',
            expirationTime: 5, // Lychee typically last 3-5 days
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 30,
            name: 'Mandarin',
            expirationTime: 7, // Mandarin typically last 1-2 weeks
            category: 'Fruits',
            unit: 'Bunch',
        },
        {
            id: 31,
            name: 'Milk',
            expirationTime: 7, // Milk typically lasts 5-7 days
            category: 'Dairy',
            unit: 'Liter',
        },
        {
            id: 32,
            name: 'Butter',
            expirationTime: 30, // Butter typically lasts 1-2 months
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 33,
            name: 'Yogurt',
            expirationTime: 10, // Yogurt typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Cup',
        },
        {
            id: 34,
            name: 'Cheese',
            expirationTime: 14, // Cheese typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 35,
            name: 'Sour cream',
            expirationTime: 7, // Sour cream typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Cup',
        },
        {
            id: 36,
            name: 'Whipped cream',
            expirationTime: 7, // Whipped cream typically lasts 3-5 days
            category: 'Dairy',
            unit: 'Cup',
        },
        {
            id: 37,
            name: 'Cottage cheese',
            expirationTime: 10, // Cottage cheese typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Cup',
        },
        {
            id: 38,
            name: 'Heavy cream',
            expirationTime: 7, // Heavy cream typically lasts 3-5 days
            category: 'Dairy',
            unit: 'Cup',
        },
        {
            id: 39,
            name: 'Half and half',
            expirationTime: 7, // Half and half typically lasts 3-5 days
            category: 'Dairy',
            unit: 'Cup',
        },
        {
            id: 40,
            name: 'Eggnog',
            expirationTime: 5, // Eggnog typically lasts 5-7 days
            category: 'Dairy',
            unit: 'Quart',
        },
        {
            id: 41,
            name: 'Cream cheese',
            expirationTime: 14, // Cream cheese typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 42,
            name: 'Ricotta cheese',
            expirationTime: 10, // Ricotta cheese typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Cup',
        },
        {
            id: 43,
            name: 'Mascarpone cheese',
            expirationTime: 14, // Mascarpone cheese typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Cup',
        },
        {
            id: 44,
            name: 'Crème fraîche',
            expirationTime: 14, // Crème fraîche typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Cup',
        },
        {
            id: 45,
            name: 'Goat cheese',
            expirationTime: 10, // Goat cheese typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 46,
            name: 'Feta cheese',
            expirationTime: 10, // Feta cheese typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 47,
            name: 'Mozzarella cheese',
            expirationTime: 14, // Mozzarella cheese typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 48,
            name: 'Parmesan cheese',
            expirationTime: 60, // Parmesan cheese typically lasts 2-6 months
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 49,
            name: 'Cheddar cheese',
            expirationTime: 30, // Cheddar cheese typically lasts 2-4 weeks
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 50,
            name: 'Swiss cheese',
            expirationTime: 30, // Swiss cheese typically lasts 2-4 weeks
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 51,
            name: 'Gouda cheese',
            expirationTime: 30, // Gouda cheese typically lasts 2-4 weeks
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 52,
            name: 'Brie cheese',
            expirationTime: 10, // Brie cheese typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 53,
            name: 'Camembert cheese',
            expirationTime: 10, // Camembert cheese typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 54,
            name: 'Blue cheese',
            expirationTime: 14, // Blue cheese typically lasts 1-2 weeks
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 55,
            name: 'Milk chocolate',
            expirationTime: 30, // Milk chocolate typically lasts 1-2 months
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 56,
            name: 'Dark chocolate',
            expirationTime: 60, // Dark chocolate typically lasts 2-4 months
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 57,
            name: 'White chocolate',
            expirationTime: 60, // White chocolate typically lasts 2-4 months
            category: 'Dairy',
            unit: 'Pound',
        },
        {
            id: 58,
            name: 'Chocolate milk',
            expirationTime: 7, // Chocolate milk typically lasts 5-7 days
            category: 'Dairy',
            unit: 'Liter',
        },
        {
            id: 59,
            name: 'Condensed milk',
            expirationTime: 365, // Condensed milk typically lasts indefinitely
            category: 'Dairy',
            unit: 'Can',
        },
        {
            id: 60,
            name: 'Evaporated milk',
            expirationTime: 365, // Evaporated milk typically lasts indefinitely
            category: 'Dairy',
            unit: 'Can',
        },
        {
            id: 61,
            name: 'Lettuce',
            expirationTime: 5, // Lettuce typically lasts 3-7 days
            category: 'Vegetables',
            unit: 'Head',
        },
        {
            id: 62,
            name: 'Spinach',
            expirationTime: 5, // Spinach typically lasts 3-7 days
            category: 'Vegetables',
            unit: 'Bunch',
        },
        {
            id: 63,
            name: 'Kale',
            expirationTime: 5, // Kale typically lasts 3-7 days
            category: 'Vegetables',
            unit: 'Bunch',
        },
        {
            id: 64,
            name: 'Collard greens',
            expirationTime: 5, // Collard greens typically last 3-7 days
            category: 'Vegetables',
            unit: 'Bunch',
        },
        {
            id: 65,
            name: 'Broccoli',
            expirationTime: 7, // Broccoli typically lasts 5-7 days
            category: 'Vegetables',
            unit: 'Head',
        },
        {
            id: 66,
            name: 'Cauliflower',
            expirationTime: 7, // Cauliflower typically lasts 5-7 days
            category: 'Vegetables',
            unit: 'Head',
        },
        {
            id: 67,
            name: 'Carrots',
            expirationTime: 14, // Carrots typically last 2-4 weeks
            category: 'Vegetables',
            unit: 'Bunch',
        },
        {
            id: 68,
            name: 'Celery',
            expirationTime: 7, // Celery typically lasts 1-2 weeks
            category: 'Vegetables',
            unit: 'Bunch',
        },
        {
            id: 69,
            name: 'Cucumber',
            expirationTime: 5, // Cucumber typically lasts 3-5 days
            category: 'Vegetables',
            unit: 'Piece',
        },
        {
            id: 70,
            name: 'Bell pepper',
            expirationTime: 7, // Bell pepper typically lasts 1-2 weeks
            category: 'Vegetables',
            unit: 'Piece',
        },
        {
            id: 71,
            name: 'Tomatoes',
            expirationTime: 5, // Tomatoes typically last 3-5 days
            category: 'Vegetables',
            unit: 'Pound',
        },
        {
            id: 72,
            name: 'Potatoes',
            expirationTime: 30, // Potatoes typically last 1-2 months
            category: 'Vegetables',
            unit: 'Pound',
        },
        {
            id: 73,
            name: 'Sweet potatoes',
            expirationTime: 30, // Sweet potatoes typically last 1-2 months
            category: 'Vegetables',
            unit: 'Pound',
        },
        {
            id: 74,
            name: 'Onions',
            expirationTime: 60, // Onions typically last 2-3 months
            category: 'Vegetables',
            unit: 'Pound',
        },
        {
            id: 75,
            name: 'Garlic',
            expirationTime: 60, // Garlic typically lasts 2-3 months
            category: 'Vegetables',
            unit: 'Head',
        },
        {
            id: 76,
            name: 'Ginger',
            expirationTime: 30, // Ginger typically lasts 3-4 weeks
            category: 'Vegetables',
            unit: 'Pound',
        },
        {
            id: 77,
            name: 'Radishes',
            expirationTime: 7, // Radishes typically last 1-2 weeks
            category: 'Vegetables',
            unit: 'Bunch',
        },
        {
            id: 78,
            name: 'Beets',
            expirationTime: 14, // Beets typically last 2-3 weeks
            category: 'Vegetables',
            unit: 'Bunch',
        },
        {
            id: 79,
            name: 'Green beans',
            expirationTime: 5, // Green beans typically last 3-5 days
            category: 'Vegetables',
            unit: 'Pound',
        },
        {
            id: 80,
            name: 'Peas',
            expirationTime: 5, // Peas typically last 3-5 days
            category: 'Vegetables',
            unit: 'Pound',
        },
        {
            id: 81,
            name: 'Corn',
            expirationTime: 3, // Corn typically lasts 2-3 days
            category: 'Vegetables',
            unit: 'Ear',
        },
        {
            id: 82,
            name: 'Zucchini',
            expirationTime: 5, // Zucchini typically lasts 3-5 days
            category: 'Vegetables',
            unit: 'Piece',
        },
        {
            id: 83,
            name: 'Squash',
            expirationTime: 5, // Squash typically lasts 3-5 days
            category: 'Vegetables',
            unit: 'Piece',
        },
        {
            id: 84,
            name: 'Eggplant',
            expirationTime: 5, // Eggplant typically lasts 3-5 days
            category: 'Vegetables',
            unit: 'Piece',
        },
        {
            id: 85,
            name: 'Mushrooms',
            expirationTime: 5, // Mushrooms typically last 3-5 days
            category: 'Vegetables',
            unit: 'Pound',
        },
        {
            id: 86,
            name: 'Artichokes',
            expirationTime: 7, // Artichokes typically last 5-7 days
            category: 'Vegetables',
            unit: 'Piece',
        },
        {
            id: 87,
            name: 'Asparagus',
            expirationTime: 5, // Asparagus typically lasts 3-5 days
            category: 'Vegetables',
            unit: 'Bunch',
        },
        {
            id: 88,
            name: 'Brussels sprouts',
            expirationTime: 7, // Brussels sprouts typically last 5-7 days
            category: 'Vegetables',
            unit: 'Pound',
        },
        {
            id: 89,
            name: 'Cabbage',
            expirationTime: 14, // Cabbage typically lasts 1-2 weeks
            category: 'Vegetables',
            unit: 'Head',
        },
        {
            id: 90,
            name: 'Cauliflower rice',
            expirationTime: 5, // Cauliflower rice typically lasts 3-5 days
            category: 'Vegetables',
            unit: 'Pound',
        },
        {
            id: 91,
            name: 'Ground beef',
            expirationTime: 3, // Ground beef typically lasts 1-2 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 92,
            name: 'Steak',
            expirationTime: 5, // Steak typically lasts 3-5 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 93,
            name: 'Pork chops',
            expirationTime: 5, // Pork chops typically last 3-5 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 94,
            name: 'Pork tenderloin',
            expirationTime: 5, // Pork tenderloin typically lasts 3-5 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 95,
            name: 'Pork sausage',
            expirationTime: 3, // Pork sausage typically lasts 1-2 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 96,
            name: 'Chicken breast',
            expirationTime: 2, // Chicken breast typically lasts 1-2 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 97,
            name: 'Chicken thighs',
            expirationTime: 2, // Chicken thighs typically last 1-2 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 98,
            name: 'Whole chicken',
            expirationTime: 3, // Whole chicken typically lasts 1-3 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 99,
            name: 'Turkey',
            expirationTime: 3, // Turkey typically lasts 1-3 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 100,
            name: 'Ground turkey',
            expirationTime: 2, // Ground turkey typically lasts 1-2 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 101,
            name: 'Lamb chops',
            expirationTime: 5, // Lamb chops typically last 3-5 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 102,
            name: 'Lamb shank',
            expirationTime: 5, // Lamb shank typically lasts 3-5 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 103,
            name: 'Beef brisket',
            expirationTime: 5, // Beef brisket typically lasts 3-5 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 104,
            name: 'Beef ribs',
            expirationTime: 5, // Beef ribs typically last 3-5 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 105,
            name: 'Beef tenderloin',
            expirationTime: 5, // Beef tenderloin typically lasts 3-5 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 106,
            name: 'Ground pork',
            expirationTime: 3, // Ground pork typically lasts 1-2 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 107,
            name: 'Bacon',
            expirationTime: 7, // Bacon typically lasts 5-7 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 108,
            name: 'Ham',
            expirationTime: 7, // Ham typically lasts 5-7 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 109,
            name: 'Sausage',
            expirationTime: 5, // Sausage typically lasts 3-5 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 110,
            name: 'Hot dogs',
            expirationTime: 5, // Hot dogs typically last 3-5 days
            category: 'Meat',
            unit: 'Package',
        },
        {
            id: 111,
            name: 'Pepperoni',
            expirationTime: 14, // Pepperoni typically lasts 1-2 weeks
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 112,
            name: 'Salami',
            expirationTime: 14, // Salami typically lasts 1-2 weeks
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 113,
            name: 'Ground chicken',
            expirationTime: 2, // Ground chicken typically lasts 1-2 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 114,
            name: 'Ground lamb',
            expirationTime: 3, // Ground lamb typically lasts 1-2 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 115,
            name: 'Ground beef patties',
            expirationTime: 3, // Ground beef patties typically last 1-2 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 116,
            name: 'Chicken wings',
            expirationTime: 2, // Chicken wings typically last 1-2 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 117,
            name: 'Turkey breast',
            expirationTime: 3, // Turkey breast typically lasts 1-3 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 118,
            name: 'Corned beef',
            expirationTime: 7, // Corned beef typically lasts 5-7 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 119,
            name: 'Pastrami',
            expirationTime: 14, // Pastrami typically lasts 1-2 weeks
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 120,
            name: 'Canadian bacon',
            expirationTime: 7, // Canadian bacon typically lasts 5-7 days
            category: 'Meat',
            unit: 'Pound',
        },
        {
            id: 121,
            name: 'Brown rice',
            expirationTime: 365, // Brown rice typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 122,
            name: 'White rice',
            expirationTime: 365, // White rice typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 123,
            name: 'Quinoa',
            expirationTime: 365, // Quinoa typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 124,
            name: 'Oats',
            expirationTime: 365, // Oats typically last 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 125,
            name: 'Barley',
            expirationTime: 365, // Barley typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 126,
            name: 'Couscous',
            expirationTime: 365, // Couscous typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 127,
            name: 'Bulgur',
            expirationTime: 365, // Bulgur typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 128,
            name: 'Cornmeal',
            expirationTime: 365, // Cornmeal typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 129,
            name: 'Flour',
            expirationTime: 180, // Flour typically lasts 3-6 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 130,
            name: 'Bread crumbs',
            expirationTime: 180, // Bread crumbs typically last 3-6 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 131,
            name: 'Pasta',
            expirationTime: 365, // Pasta typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 132,
            name: 'Spaghetti',
            expirationTime: 365, // Spaghetti typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 133,
            name: 'Macaroni',
            expirationTime: 365, // Macaroni typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 134,
            name: 'Cereal',
            expirationTime: 365, // Cereal typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 135,
            name: 'Granola',
            expirationTime: 90, // Granola typically lasts 1-3 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 136,
            name: 'Grits',
            expirationTime: 365, // Grits typically last 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 137,
            name: 'Polenta',
            expirationTime: 365, // Polenta typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 138,
            name: 'Rice noodles',
            expirationTime: 365, // Rice noodles typically last 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 139,
            name: 'Popcorn kernels',
            expirationTime: 365, // Popcorn kernels typically last 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 140,
            name: 'Wheat berries',
            expirationTime: 365, // Wheat berries typically last 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 141,
            name: 'Buckwheat',
            expirationTime: 365, // Buckwheat typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 142,
            name: 'Millet',
            expirationTime: 365, // Millet typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 143,
            name: 'Wild rice',
            expirationTime: 365, // Wild rice typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 144,
            name: 'Rye flour',
            expirationTime: 180, // Rye flour typically lasts 3-6 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 145,
            name: 'Corn flour',
            expirationTime: 180, // Corn flour typically lasts 3-6 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 146,
            name: 'Breadcrumbs',
            expirationTime: 180, // Breadcrumbs typically last 3-6 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 147,
            name: 'Graham flour',
            expirationTime: 180, // Graham flour typically lasts 3-6 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 148,
            name: 'Buckwheat flour',
            expirationTime: 180, // Buckwheat flour typically lasts 3-6 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 149,
            name: 'Cornmeal',
            expirationTime: 180, // Cornmeal typically lasts 3-6 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 150,
            name: 'Cornstarch',
            expirationTime: 365, // Cornstarch typically lasts 6-12 months
            category: 'Grains',
            unit: 'Cup',
        },
        {
            id: 151,
            name: 'Cinnamon',
            expirationTime: 730, // Cinnamon typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 152,
            name: 'Nutmeg',
            expirationTime: 730, // Nutmeg typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 153,
            name: 'Cumin',
            expirationTime: 730, // Cumin typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 154,
            name: 'Coriander',
            expirationTime: 730, // Coriander typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 155,
            name: 'Turmeric',
            expirationTime: 730, // Turmeric typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 156,
            name: 'Ginger',
            expirationTime: 365, // Ginger typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 157,
            name: 'Paprika',
            expirationTime: 365, // Paprika typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 158,
            name: 'Chili powder',
            expirationTime: 365, // Chili powder typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 159,
            name: 'Cayenne pepper',
            expirationTime: 365, // Cayenne pepper typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 160,
            name: 'Garlic powder',
            expirationTime: 365, // Garlic powder typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 161,
            name: 'Onion powder',
            expirationTime: 365, // Onion powder typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 162,
            name: 'Curry powder',
            expirationTime: 365, // Curry powder typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 163,
            name: 'Fennel seed',
            expirationTime: 730, // Fennel seed typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 164,
            name: 'Mustard seed',
            expirationTime: 730, // Mustard seed typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 165,
            name: 'Rosemary',
            expirationTime: 365, // Rosemary typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 166,
            name: 'Thyme',
            expirationTime: 365, // Thyme typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 167,
            name: 'Oregano',
            expirationTime: 365, // Oregano typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 168,
            name: 'Basil',
            expirationTime: 365, // Basil typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 169,
            name: 'Sage',
            expirationTime: 365, // Sage typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 170,
            name: 'Bay leaves',
            expirationTime: 730, // Bay leaves typically last 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 171,
            name: 'Black pepper',
            expirationTime: 730, // Black pepper typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 172,
            name: 'White pepper',
            expirationTime: 730, // White pepper typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 173,
            name: 'Red pepper flakes',
            expirationTime: 365, // Red pepper flakes typically last 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 174,
            name: 'Celery seed',
            expirationTime: 730, // Celery seed typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 175,
            name: 'Caraway seed',
            expirationTime: 730, // Caraway seed typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 176,
            name: 'Cinnamon sticks',
            expirationTime: 730, // Cinnamon sticks typically last 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 177,
            name: 'Allspice',
            expirationTime: 730, // Allspice typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 178,
            name: 'Cardamom',
            expirationTime: 730, // Cardamom typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 179,
            name: 'Cloves',
            expirationTime: 730, // Cloves typically last 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 179,
            name: 'Cloves',
            expirationTime: 730, // Cloves typically last 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 180,
            name: 'Cajun seasoning',
            expirationTime: 365, // Cajun seasoning typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 181,
            name: 'Chinese five spice',
            expirationTime: 365, // Chinese five spice typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 182,
            name: 'Curry leaves',
            expirationTime: 365, // Curry leaves typically last 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 183,
            name: 'Fenugreek',
            expirationTime: 365, // Fenugreek typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 184,
            name: 'Garam masala',
            expirationTime: 365, // Garam masala typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 185,
            name: 'Juniper berries',
            expirationTime: 365, // Juniper berries typically last 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 186,
            name: 'Lavender',
            expirationTime: 365, // Lavender typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 187,
            name: 'Mustard powder',
            expirationTime: 365, // Mustard powder typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 188,
            name: 'Poppy seeds',
            expirationTime: 365, // Poppy seeds typically last 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 189,
            name: 'Saffron',
            expirationTime: 365, // Saffron typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 190,
            name: 'Sesame seeds',
            expirationTime: 365, // Sesame seeds typically last 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 191,
            name: 'Star anise',
            expirationTime: 365, // Star anise typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 192,
            name: 'Tarragon',
            expirationTime: 365, // Tarragon typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 193,
            name: 'Vanilla bean',
            expirationTime: 730, // Vanilla bean typically lasts 1-2 years
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 194,
            name: 'Wasabi powder',
            expirationTime: 365, // Wasabi powder typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 195,
            name: "Za'atar",
            expirationTime: 365, // Za'atar typically lasts 6-12 months
            category: 'Spices',
            unit: 'Teaspoon',
        },
        {
            id: 196,
            name: 'Ketchup',
            expirationTime: 90, // Ketchup typically lasts 1-2 months after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 197,
            name: 'Mayonnaise',
            expirationTime: 60, // Mayonnaise typically lasts 2-3 months after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 198,
            name: 'Mustard',
            expirationTime: 365, // Mustard typically lasts 6-12 months after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 199,
            name: 'Soy sauce',
            expirationTime: 365, // Soy sauce typically lasts 6-12 months after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 200,
            name: 'Hot sauce',
            expirationTime: 730, // Hot sauce typically lasts 1-2 years after opening
            category: 'Condiments',
            unit: 'Teaspoon',
        },
        {
            id: 201,
            name: 'Barbecue sauce',
            expirationTime: 90, // Barbecue sauce typically lasts 1-2 months after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 202,
            name: 'Worcestershire sauce',
            expirationTime: 730, // Worcestershire sauce typically lasts 1-2 years after opening
            category: 'Condiments',
            unit: 'Teaspoon',
        },
        {
            id: 203,
            name: 'Sriracha',
            expirationTime: 730, // Sriracha typically lasts 1-2 years after opening
            category: 'Condiments',
            unit: 'Teaspoon',
        },
        {
            id: 204,
            name: 'Fish sauce',
            expirationTime: 730, // Fish sauce typically lasts 1-2 years after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 205,
            name: 'Honey',
            expirationTime: 365, // Honey typically lasts indefinitely but can crystallize, units are in weight
            category: 'Condiments',
            unit: 'Ounce',
        },
        {
            id: 206,
            name: 'Jam',
            expirationTime: 180, // Jam typically lasts 6 months to 1 year after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 207,
            name: 'Peanut butter',
            expirationTime: 180, // Peanut butter typically lasts 6-9 months after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 208,
            name: 'Nutella',
            expirationTime: 365, // Nutella typically lasts 6-12 months after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 209,
            name: 'Salsa',
            expirationTime: 14, // Salsa typically lasts 1-2 weeks after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 210,
            name: 'Pesto',
            expirationTime: 7, // Pesto typically lasts 1 week after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 211,
            name: 'Chutney',
            expirationTime: 180, // Chutney typically lasts 6 months to 1 year after opening
            category: 'Condiments',
            unit: 'Tablespoon',
        },
        {
            id: 212,
            name: 'Frozen peas',
            expirationTime: 365, // Frozen peas typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 213,
            name: 'Frozen corn',
            expirationTime: 365, // Frozen corn typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 214,
            name: 'Frozen green beans',
            expirationTime: 365, // Frozen green beans typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 215,
            name: 'Frozen broccoli',
            expirationTime: 365, // Frozen broccoli typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 216,
            name: 'Frozen spinach',
            expirationTime: 365, // Frozen spinach typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 217,
            name: 'Frozen strawberries',
            expirationTime: 365, // Frozen strawberries typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 218,
            name: 'Frozen blueberries',
            expirationTime: 365, // Frozen blueberries typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 219,
            name: 'Frozen raspberries',
            expirationTime: 365, // Frozen raspberries typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 220,
            name: 'Frozen mixed vegetables',
            expirationTime: 365, // Frozen mixed vegetables typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 221,
            name: 'Frozen pizza',
            expirationTime: 90, // Frozen pizza typically last up to 3 months in the freezer
            category: 'Frozen',
            unit: 'Pizza',
        },
        {
            id: 222,
            name: 'Frozen waffles',
            expirationTime: 365, // Frozen waffles typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Waffle',
        },
        {
            id: 223,
            name: 'Frozen french fries',
            expirationTime: 180, // Frozen french fries typically last up to 6 months in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 224,
            name: 'Frozen chicken nuggets',
            expirationTime: 180, // Frozen chicken nuggets typically last up to 6 months in the freezer
            category: 'Frozen',
            unit: 'Ounce',
        },
        {
            id: 225,
            name: 'Frozen fish fillets',
            expirationTime: 365, // Frozen fish fillets typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Ounce',
        },
        {
            id: 226,
            name: 'Frozen shrimp',
            expirationTime: 180, // Frozen shrimp typically last up to 6 months in the freezer
            category: 'Frozen',
            unit: 'Ounce',
        },
        {
            id: 227,
            name: 'Frozen fruit bars',
            expirationTime: 365, // Frozen fruit bars typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Bar',
        },
        {
            id: 228,
            name: 'Frozen vegetables and sauce',
            expirationTime: 365, // Frozen vegetables and sauce typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 229,
            name: 'Frozen fruit and yogurt',
            expirationTime: 365, // Frozen fruit and yogurt typically last up to 1 year in the freezer
            category: 'Frozen',
            unit: 'Cup',
        },
        {
            id: 230,
            name: 'Frozen breakfast sandwiches',
            expirationTime: 90, // Frozen breakfast sandwiches typically last up to 3 months in the freezer
            category: 'Frozen',
            unit: 'Sandwich',
        },
        {
            id: 231,
            name: 'All-purpose flour',
            expirationTime: 365, // All-purpose flour typically lasts up to 1 year in a cool, dry place
            category: 'Baking',
            unit: 'Cup',
        },
        {
            id: 232,
            name: 'Baking powder',
            expirationTime: 365, // Baking powder typically lasts up to 1 year in a cool, dry place
            category: 'Baking',
            unit: 'Teaspoon',
        },
        {
            id: 233,
            name: 'Baking soda',
            expirationTime: 365, // Baking soda typically lasts up to 1 year in a cool, dry place
            category: 'Baking',
            unit: 'Teaspoon',
        },
        {
            id: 234,
            name: 'Cornstarch',
            expirationTime: 365, // Cornstarch typically lasts up to 1 year in a cool, dry place
            category: 'Baking',
            unit: 'Tablespoon',
        },
        {
            id: 235,
            name: 'Active dry yeast',
            expirationTime: 180, // Active dry yeast typically lasts up to 6 months in the refrigerator
            category: 'Baking',
            unit: 'Teaspoon',
        },
        {
            id: 236,
            name: 'Bread flour',
            expirationTime: 365, // Bread flour typically lasts up to 1 year in a cool, dry place
            category: 'Baking',
            unit: 'Cup',
        },
        {
            id: 237,
            name: 'Cake flour',
            expirationTime: 365, // Cake flour typically lasts up to 1 year in a cool, dry place
            category: 'Baking',
            unit: 'Cup',
        },
        {
            id: 238,
            name: 'Vanilla extract',
            expirationTime: 365, // Vanilla extract typically lasts up to 1 year in a cool, dark place
            category: 'Baking',
            unit: 'Teaspoon',
        },
        {
            id: 239,
            name: 'Cocoa powder',
            expirationTime: 365, // Cocoa powder typically lasts up to 1 year in a cool, dry place
            category: 'Baking',
            unit: 'Tablespoon',
        },
        {
            id: 240,
            name: 'Powdered sugar',
            expirationTime: 365, // Powdered sugar typically lasts up to 1 year in a cool, dry place
            category: 'Baking',
            unit: 'Cup',
        }
    ]

const unitData =
    [
        {
            id: 1,
            name: 'Bunch',
        },
        {
            id: 2,
            name: 'Liter',
        },
        {
            id: 3,
            name: 'Cup',
        },
        {
            id: 4,
            name: 'Tablespoon',
        },
        {
            id: 5,
            name: 'Ounce',
        },
        {
            id: 6,
            name: 'Pizza',
        },
        {
            id: 7,
            name: 'Waffle',
        },
        {
            id: 8,
            name: 'Teaspoon',
        },
        {
            id: 9,
            name: 'Sandwich',
        },
        {
            id: 10,
            name: 'Pound',
        },
        {
            id: 11,
            name: 'Gallon',
        },
        {
            id: 12,
            name: 'Quart',
        },
        {
            id: 13,
            name: 'Pint',
        },
        {
            id: 14,
            name: 'Fluid ounce',
        },
        {
            id: 15,
            name: 'Dash',
        },
        {
            id: 16,
            name: 'Pinch',
        },
        {
            id: 17,
            name: 'Sprinkle',
        },
        {
            id: 18,
            name: 'Leaf',
        },
        {
            id: 19,
            name: 'Stick',
        },
        {
            id: 20,
            name: 'Clove',
        },
        {
            id: 21,
            name: 'Bottle',
        },
        {
            id: 22,
            name: 'Can',
        },
        {
            id: 23,
            name: 'Package',
        },
        {
            id: 24,
            name: 'Slice',
        },
        {
            id: 25,
            name: 'Bag',
        },
        {
            id: 26,
            name: 'Box',
        },
        {
            id: 27,
            name: 'Jar',
        },
        {
            id: 28,
            name: 'Bowl',
        },
        {
            id: 29,
            name: 'Sheet',
        },
        {
            id: 30,
            name: 'Bagel',
        },
        {
            id: 31,
            name: 'Loaf',
        },
        {
            id: 32,
            name: 'Canister',
        },
        {
            id: 33,
            name: 'Bucket',
        },
        {
            id: 34,
            name: 'Package (small)',
        },
        {
            id: 35,
            name: 'Package (large)',
        },
        {
            id: 36,
            name: 'Packet',
        },
        {
            id: 37,
            name: 'Sprig',
        },
        {
            id: 38,
            name: 'Wedge',
        },
        {
            id: 39,
            name: 'Bag (large)',
        },
        {
            id: 40,
            name: 'Milliliter',
        },
        {
            id: 41,
            name: 'Gram',
        },
        {
            id: 42,
            name: 'Kilogram',
        },
        {
            id: 43,
            name: 'Milligram',
        },
        {
            id: 44,
            name: 'Item',
        },
    ]

const categoryData =
    [
        {
            id: 1,
            name: 'Baking',
        },
        {
            id: 2,
            name: 'Beverages',
        },
        {
            id: 3,
            name: 'Canned Goods',
        },
        {
            id: 4,
            name: 'Condiments',
        },
        {
            id: 5,
            name: 'Dairy',
        },
        {
            id: 6,
            name: 'Fruits',
        },
        {
            id: 7,
            name: 'Frozen',
        },
        {
            id: 8,
            name: 'Meat',
        },
        {
            id: 9,
            name: 'Vegetables',
        },
        {
            id: 10,
            name: 'Spices',
        },
        {
            id: 11,
            name: 'Other',
        },
    ]


export const getCategories = () => {
    return categoryData.slice()
}

export const getIngredients = () => {
    return ingredientData.slice()
}

export const getUnits = () => {
    return unitData.slice()
}





