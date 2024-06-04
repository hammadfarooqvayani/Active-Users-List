import { useState } from "react";
import "./App.css";
import Img from "./image/3195 .jpg";
import Image from "./image/0049bf07f235946231927cfccf349826.jpg";
import Imag from "./image/c298b41a3025316cb72e3be7e9ce312e.jpg";
import Ima from "./image/79f922f37daf51aa39126189ad8188f4.jpg";
import Five from "./image/five.jpg";
import Six from "./image/six.jpg";
import Seven from "./image/seven.jpg";
import Eight from "./image/eight.jpg";
import Nine from "./image/nine.jpg";
import Ten from "./image/Ten.jpg";
import UserCard from "./componment/card";

function App() {
  const users = [
    {
      id: 1,
      name: "Hammad",
      email: "hammadvayani35@gmail.com",
      age: 19,
      profile: Img,
    },
    {
      id: 2,
      name: "Ali",
      email: "Aliraza@gmail.com",
      age: 19,
      profile: Image,
    },
    {
      id: 3,
      name: "huzman",
      email: "huzman@gmail.com",
      age: 22,
      profile: Imag,
    },
    {
      id: 4,
      name: "amir",
      email: "amir@gmail.com",
      age: 18,
      profile: Ima,
    },
    {
      id: 5,
      name: "ahmed",
      email: "ahmed@gmail.com",
      age: 22,
      profile: Five,
    },
    {
      id: 6,
      name: "yoqoob",
      email: "yaqoob@gmail.com",
      age: 67,
      profile: Six,
    },
    {
      id: 7,
      name: "asma",
      email: "asma@gmail.com",
      age: 39,
      profile: Seven,
    },
    {
      id: 8,
      name: "reeqeed",
      email: "raqeeb@gmail.com",
      age: 36,
      profile: Eight,
    },
    {
      id: 9,
      name: "arshad",
      email: "arshad@gmail.com",
      age: 40,
      profile: Nine,
    },
    {
      id: 10,
      name: "farooq",
      email: "farooq35@gmail.com",
      age: 65,
      profile: Ten,
    },
  ];

  return (
    <div className="App">
      <h1>Active Users List</h1>
      {/* <img src={Img} style={{ height: 100, width: 100 }}></img> */}
      {users.map((user, ind) => {
        return <UserCard u={user} key={ind} />;
      })}
    </div>
  );
}

export default App;
