import {useContext} from 'react';
import "./styles.scss";

import { ThemeContext } from "../../../pages/App/App";

function Button({type,modifier,children}) {
const { theme, setTheme } = useContext(ThemeContext);
  console.log(theme)
    return (
        <button type={type} className={`${modifier}-button btn-${theme}`}>
            {children}
        </button>
    );
}

export default Button;
