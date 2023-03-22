import Colors from '../constants/styles';

// I think I can return the link with category information here as well
export default function findCategory(category) {

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