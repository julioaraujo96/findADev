import React, { useContext } from 'react';
import { ThemeContext } from '../../pages/App/App';
import "./styles.scss";

const Card = ({children}) => {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
      <div className={`profile-card card-${theme}`}>
        {children}
      </div>
    )
  }

export default Card;
