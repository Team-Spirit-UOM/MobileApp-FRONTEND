export const COLOURS = {
    white: '#ffffff',
    black: '#000000',
    lightGray: '#B3B4B6',
    accent: '#FFC231',
    accentRed: '#FB5D2E',
    accentPink: '#F96165',
  };
  
  export const Categories = [
    {
      name: 'Burger',
      image: require('../images/burger.png'),
      items: [
        {
          id: 1,
          name: 'Chicken Burger',         
          price: 300,
          image: require('../images/burger.png'),
          size: 'Large 8"',
          delivery: 10
        
        },
        {
            id: 2,
            name: 'Cheese Burger',         
            price: 200,
            image: require('../images/CheeseB.png'),
            size: 'Large 8"',
          
          },
          {
            id: 3,
            name: 'Veggie Burger',         
            price: 250,
            image: require('../images/Veggie.png'),
            size: 'Large 8"',
          
          }
           ]
        },
        {
            name: 'Pizza',
            image: require('../images/pizza.png'),
            items: [
                {
                  id: 4,
                  name: 'Devilled Chicken pizza',         
                  price: 300,
                  image: require('../images/Chicken.png'),
                  size: 'Large 8"',
                
                },
                {
                  id: 5,
                  name: 'Cheesy pizza',         
                  price: 300,
                  image: require('../images/pizza.png'),
                  size: 'Large 8"',
                
                },
                {
                  id: 6,
                  name: 'Black Chicken pizza',         
                  price: 300,
                  image: require('../images/Black.png'),
                  size: 'Large 8"',
                
                }
                   ]
        },
        {
            name: 'Cake',
            image: require('../images/cake.png'),
            items: [
              {
                id: 7,
                name: 'Red Velvet Cup Cake',         
                price: 100,
                image:require('../images/red.png'),
                size: 'small',
              
              },
              {
                id: 8,
                name: 'Choclate Cup Cake',         
                price: 100,
                image:require('../images/cake.png'),
                size: 'small',
              
              },
                {
                  id: 9,
                  name: 'Strowberry Crepe Cake',         
                  price: 100,
                  image:require('../images/crepe.png'),
                  size: 'small',
                
                }
                   ]
        },
        {
            name: 'Juice',
            image: require('../images/juice.png'),
            items: [
                {
                  id: 10,
                  name: 'Lemmon',         
                  price: 150,
                  image:require('../images/juice.png'),
                  size: 'small',
                
                },
                {
                  id: 11,
                  name: 'Milk Shake',         
                  price: 150,
                  image:require('../images/MilkShake.png'),
                  size: 'small',
                
                },
                {
                  id: 12,
                  name: 'Mix Fruit',         
                  price: 150,
                  image:require('../images/Fruit.png'),
                  size: 'small',
                
                }
                   ]
        },


  ]

  