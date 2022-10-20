import React from "react";
import "./styles.scss";

const Profile = ({ user, userData }) => {
  return (
    <div className="user-container">
      <div className="user-avatar">
        <img src={userData.avatar_url} alt="profile pic" />
      </div>
      <div className="user-details">
        <ul>
          <li>{userData.bio ? userData.bio : "No bio."}</li>
          <li>
            {userData.followers
              ? `${userData.followers} followers`
              : "No followers."}
          </li>
          <li>
            {userData.following
              ? `${userData.following} following`
              : "This user doesn't follow anyone."}
          </li>
          <li>
            <a href={`https://www.github.com/${user}`} target="_blank">
              {userData.public_repos
                ? `${userData.public_repos} repos <`
                : "No repos."}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
