import React from "react";
import avatar from "../images/avatar-crop.png";

const Profile = () => (
  <div
    style={{
      alignItems: `center`,
      display: `flex`,
      height: `50px`,
      justifyContent: `left`
    }}
  >
    <div
      style={{
        backgroundColor: `white`,
        borderRadius: `50%`,
        height: `50px`,
        width: `50px`
      }}
    >
      <img
        style={{
          borderRadius: `50%`,
          height: `100%`,
          width: `100%`
        }}
        src={avatar}
        alt="Avatar"
      />
    </div>
    <div
      style={{
        display: `flex`,
        flexDirection: `column`,
        marginLeft: `10px`
      }}
    >
      <span
        style={{
          fontSize: `14px`,
          fontFamily: `Helvetica, sans-serif`,
          lineHeight: `18px`,
          marginBottom: `2px`
        }}
      >
        @crystalrhee
      </span>
      <span
        style={{
          fontFamily: `Helvetica, sans-serif`
        }}
      >
        Crystal Rhee
      </span>
    </div>
  </div>
);

export default Profile;
