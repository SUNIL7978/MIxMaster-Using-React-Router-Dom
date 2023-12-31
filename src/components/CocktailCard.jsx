import { Link } from 'react-router-dom';
import Wrapper from '../Wrapper/CocktailCard';

const CocktailCard = ({ image, id, info, name, glass }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{info}</h5>
        <p>{glass}</p>
        <Link to={`/cocktails/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};

export default CocktailCard;
