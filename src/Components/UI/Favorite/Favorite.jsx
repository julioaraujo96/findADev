import {useState} from 'react';
import './styles.scss';

const Favorite = ({ children }) => {
  const [isFavorite, setFavorite] = useState(false);
  return (
          <div className="actions-container"> 
            <span onClick={() => setFavorite(!isFavorite)}> 
              {isFavorite ? 'True' : 'False'}
            </span>
          </div>
  );
};

export default Favorite;
