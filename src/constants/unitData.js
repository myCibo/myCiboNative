//Add some fluid object for g ones 
//complete objects 
//make akk units lowercase

const unitData = [
    {
        id: 1,
        name: 'bunch',
        volume: 5,
        type: 'count'
    },
    {
        id: 2,
        name: 'liter',
        volume: 1000,
        type: 'ml'
    },
    {
        id: 3,
        name: 'cup',
        volume: 236.5882365,
        type: 'ml'
    },
    {
        id: 4,
        name: 'tablespoon',
        volume: 14.786764781,
        type: 'ml'
    },
    {
        id: 5,
        name: 'ounce',
        volume: 28.349523125,
        type: 'g'
    },
    {
        id: 6,
        name: 'pizza',
        volume: 1,
        type: 'count'
    },
    {
        id: 7,
        name: 'waffle',
        volume: 1,
        type: 'count'
    },
    {
        id: 8,
        name: 'teaspoon',
        volume: 4.928921594,
        type: 'ml'
    },
    {
        id: 9,
        name: 'sandwich',
        volume: 1,
        type: 'count'
    },
    {
        id: 10,
        name: 'pound',
        volume: 453.59237,
        type: 'g'
    },
    {
        id: 11,
        name: 'gallon',
        volume: 3785.411784,
        type: 'ml'
    },
    {
        id: 12,
        name: 'quart',
        volume: 946.352946,
        type: 'ml'
    },
    {
        id: 13,
        name: 'pint',
        volume: 473.176473,
        type: 'ml'
    },
    {
        id: 14,
        name: 'fluid ounce',
        volume: 29.573529562,
        type: 'ml'
    },
    {
        id: 15,
        name: 'dash',
        volume: 0.6161152,
        type: 'ml'
    },
    {
        id: 16,
        name: 'pinch',
        volume: 1.2322304,
        type: 'ml'
    },
    {
        id: 17,
        name: 'sprinkle',
        volume: 0.12322304,
        type: 'ml'
    },
    {
        id: 18,
        name: 'leaf',
        volume: 0.2,
        type: 'g'
    },
    {
        id: 19,
        name: 'stick',
        volume: 4,
        type: 'count'
    },
    {
        id: 20,
        name: 'clove',
        volume: 5,
        type: 'count'
    },
    {
        id: 21,
        name: 'bottle',
        volume: 500,
        type: 'ml'
    },
    {
        id: 22,
        name: 'can',
        volume: 400,
        type: 'ml'
    },
    {
        id: 23,
        name: 'package',
        volume: 1,
        type: 'count'
    },
    {
        id: 24,
        name: 'slice',
        volume: 1,
        type: 'count'
    },

    {
      id: 25,
      name: 'bag',
      volume: 10,
      type: 'count'
  },
  {
      id: 26,
      name: 'box',
      volume: 10,
      type: 'count'
  },
  {
      id: 27,
      name: 'jar',
      volume: 340,
      type: 'g'
  },
  {
      id: 28,
      name: 'bowl',
      volume: 300,
      type: 'ml'
  },
  {
      id: 29,
      name: 'sheet',
      volume: 1,
      type: 'count'
  },
  {
      id: 30,
      name: 'bagel',
      volume: 1,
      type: 'count'
  },
  {
      id: 31,
      name: 'loaf',
      volume: 1,
      type: 'count'
  },
  {
      id: 32,
      name: 'canister',
      volume: 1,
      type: 'count'
  },
  {
      id: 33,
      name: 'bucket',
      volume: 18927,
      type: 'count'
  },
  {
      id: 34,
      name: 'package (small)',
      volume: 5,
      type: 'count'
  },
  {
      id: 35,
      name: 'package (large)',
      volume: 10,
      type: 'count'
  },
  {
      id: 36,
      name: 'packet',
      volume: 2,
      type: 'count'
  },
  {
      id: 37,
      name: 'sprig',
      volume: 1,
      type: 'count'
  },
  {
      id: 38,
      name: 'wedge',
      volume: 1,
      type: 'count'
  },
  {
      id: 39,
      name: 'bag (large)',
      volume: 10,
      type: 'count'
  },
  {
      id: 40,
      name: 'milliliter',
      volume: 1,
      type: 'ml'
  },
  {
      id: 41,
      name: 'gram',
      volume: 1,
      type: 'g'
  },
  {
      id: 42,
      name: 'kilogram',
      volume: 1000,
      type: 'g'
  },
  {
      id: 43,
      name: 'milligram',
      volume: 0.001,
      type: 'g'
  },
  {
      id: 44,
      name: 'item',
      volume: 0,
      type: 'count'
  },  
    //repeatative names, different types
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