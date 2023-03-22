import Colors from '../constants/styles';

export default function findCategory(category) {
  // takes in a category and returns a category object that has a background color and a component

  const categories = [
    {
      name: 'Baking',
      color: Colors.baking,
    },
    {
      name: 'Breverages',
      color: Colors.breverage,
    },
    {
      name: 'Canned',
      color: Colors.canned,
    },
    {
      name: 'Condiments',
      color: Colors.condiment,
    },
    {
      name: 'Dairy',
      color: Colors.dairy,
    },
    {
      name: 'Frozen',
      color: Colors.frozen,
    },
    {
      name: 'Fruits',
      color: Colors.fruit,
    },
    {
      name: 'Grains',
      color: Colors.grain,
    },
    {
      name: 'Meat',
      color: Colors.meat,
    },
    {
      name: 'Spices',
      color: Colors.spice,
    },
    {
      name: 'Vegetables',
      color: Colors.vegetable,
    }
  ];

  return categories.find((item) => item.name === category);
}