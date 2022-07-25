import React from 'react';
import "./styles.scss";

const Card = ({children}) => {
    return (
      <div className="profile-card">
        {children}
      </div>
    )
  }

export default Card;