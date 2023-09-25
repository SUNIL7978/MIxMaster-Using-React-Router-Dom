import Wrapper from '../Wrapper/CocktailList';
import CocktailCard from './CocktailCard';

const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return (
      <h4 style={{ textAlign: 'center' }}>No Matching Cocktails Found...</h4>
    );
  }

  const formatCocktailsData = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic } = item;

    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formatCocktailsData.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
};

export default CocktailList;
