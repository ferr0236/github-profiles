import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div className="card shadow m-2 mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-2">
            <img className="img-fluid" src={props.profile.avatar_url} alt={props.profile.name}></img>
          </div>
          <div className="col-10 text-left">
            <div>{props.profile.name}</div>
            <div>{props.profile.login}</div>
            <div>{props.profile.bio}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
