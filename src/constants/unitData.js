const unitData =
    [
        {
            id: 1,
            name: 'bunch',
            volume: 3,
            type: 'count'
        },
        {
            id: 2,
            name: 'Liter',
            volume: 1000,
            type: 'ml'
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


export const getUnits = () => {
    return unitData.slice()
}

/// recipe is 2 cups Milk

/// user has 1 liter Milk


// cup is 100 ml, we need to substract 100ml from 1 liter

// resulting in 900ml or 0.9l



[
    { "name": "oz", "long": "ounce", "volume": "28.349523125" }, 
    { "name": "tsp", "long": "teaspoon", "volume": "4.928921594" }, 
    { "name": "lb", "long": "pound", "volume": "453.59237" }, 
    { "name": "mg", "long": "milligram", "volume": "0.001" }, 
    { "name": "count", "long": "count", "volume": "1" }, 
    { "name": "ml", "long": "milliliter", "volume": "1" }, 
    { "name": "pt", "long": "pint", "volume": "473.176473" }, 
    { "name": "gal", "long": "gallon", "volume": "3785.411784" }, 
    { "name": "l", "long": "liter", "volume": "1000" }, 
    { "name": "g", "long": "gram", "volume": "1" }, 
    { "name": "kg", "long": "kilogram", "volume": "1000" }, 
    { "name": "qt", "long": "quart", "volume": "946.352946" }, 
    { "name": "cup", "long": "cup", "volume": "236.5882365" }, 
    { "name": "tbsp", "long": "tablespoon", "volume": "14.786764781" }
]