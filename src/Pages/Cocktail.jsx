import axios from 'axios';
import { Link, useLoaderData, Navigate } from 'react-router-dom';
import Wrapper from '../Wrapper/SingleCocktail';
import { useQuery } from 'react-query';

const singleCocktailUrl =
  'http://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      const { data } = await axios.get(`${singleCocktailUrl}${id}`);
      return data;
    },
  };
};

export const loader = async ({ params }) => {
  const { id } = params;

  return { id };
};

const Cocktail = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));
  if (!data) return <Navigate to="/" />;

  const singleCocktail = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleCocktail;

  const validIngredient = Object.keys(singleCocktail)
    .filter(
      (key) => key.startsWith('strIngredient') && singleCocktail[key] !== null
    )
    .map((key) => singleCocktail[key]);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Back to Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">Ingredient:</span>
            {validIngredient.map((item, index) => {
              return (
                <span key={item} className="ing">
                  {item}
                  {index < validIngredient.length - 1 ? ',' : ''}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">Instruction:</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cocktail;
