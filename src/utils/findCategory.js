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
      color: Colors.breverages,
    },
    {
      name: 'Canned',
      color: Colors.canned,
    },
    {
      name: 'Condiments',
      color: Colors.condiments,
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
      color: Colors.grains,
    },
    {
      name: 'Proteins',
      color: Colors.proteins,
    },
    {
      name: 'Nuts',
      color: Colors.nuts,
    },
    {
      name: 'Produce',
      color: Colors.produce,
    },
    {
      name: 'Spices',
      color: Colors.spices,
    }
  ];

  return categories.find((item) => item.name === category);
}