import React from "react";

const UserCard = (props) => {
  const user = props.u;
  return (
    <div className="contarnar">
      <div className="parent">
        <img src={user.profile} />
        <div className="text">
          <p>ID : {user.id}</p>
          <p className="col">Name : {user.name}</p>
          <p>Email : {user.email}</p>
          <p>Age : {user.age}</p>

          <button className="mes">Message</button>
          <button className="fol">Following</button>
        </div>
        <div className="fot">
          <h3>SKILLS</h3>
          <hr></hr>
          <div className="text">
            <button className="to">HTML</button>
            <button className="to">CSS</button>
            <button className="to">JavaScript</button>
            <button className="to">React</button>
            <br></br>
            <button className="to">Node.js</button>
            <button className="to">YouTube Mangement </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
