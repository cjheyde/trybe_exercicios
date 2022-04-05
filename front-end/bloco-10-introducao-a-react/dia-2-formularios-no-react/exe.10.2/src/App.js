import './App.css';
// import Image from './Image';
import React from 'react';
import UserProfile from './UserProfile';
import Order from './Order';

class App extends React.Component {
render() {
  // const joao = {
  //     id: 102,
  //     name: "João",
  //     email: "joao@gmail.com",
  //     avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
  //   };

  // const amelia = {
  //   id: 77,
  //   name: "Amélia",
  //   email: "amelia@gmail.com",
  //   avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
  // };

  const users = [
    {
      id: 104,
      name: "João",
      email: "joao@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png"
    },
    {
      id: 79,
      name: "Amélia",
      email: "amelia@gmail.com",
      avatar: "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png"
    }
  ];

  const headphone = {
      id: 102,
      user: "cena@gmail.com",
      product: "Razer Headphone",
      price: {
        value: 99.99,
        currency: "dollars"
      }
    };

  const energyDrink = {
    id: 77,
    user: "cena@gmail.com",
    product: "Monster 500mL",
    price: {
      value: 9.99,
      currency: "dollars"
    }
  };
  
  return (
    <div className="App">
     {/* <Image source={'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'} alternativeText="Cute cat staring"/> */}
    {/* <UserProfile user={joao} />
    <UserProfile user={amelia} /> */}
      {users.map(user => <UserProfile user={user} key={user.id}/>)}
      <h1> Orders recently created: </h1>
        <div>
          <Order order={headphone}/>
          <Order order={energyDrink}/>
        </div>
    </div>
  );
}
}

export default App;
