import {useState} from 'react';
import './styles.scss';
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'
const Favorite = ({ children }) => {
  const [isFavorite, setFavorite] = useState(false);
  return (
          <div className="actions-container"> 
            <span onClick={() => setFavorite(!isFavorite)}> 
             <div className='react-icon-container'> 
               {isFavorite ? 
                 <MdFavorite color='#e74c3c' size={'24px'} /> : 
                 <MdFavoriteBorder color='white' size={'24px'}/>
               }
             </div>
            </span>
          </div>
  );
};

export default Favorite;
