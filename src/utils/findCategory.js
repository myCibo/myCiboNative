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
      name: 'Grains',
      color: Colors.grain,
    },
    {
      name: 'Meat',
      color: Colors.meat,
    },
    {
      name: 'Nuts',
      color: Colors.nut,
    },
    {
      name: 'Produce',
      color: Colors.produce,
    },
    {
      name: 'Spices',
      color: Colors.spice,
    }
  ];

  return categories.find((item) => item.name === category);
}