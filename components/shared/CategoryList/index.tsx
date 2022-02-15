import CategoryItem from '../CategoryItem';
import * as S from './styled';

interface Category {
  id: number;
  name: string;
  discountRate: number;
  imageUrl: string;
}

interface Categories {
  categories: Category[];
}

function CategoryList({ categories }: Categories) {
  return (
    <S.Wrap>
      <S.ListContainer>
        {categories?.map(({ imageUrl, name, id }) => (
          <CategoryItem
            imgUrl={imageUrl}
            name={name}
            type="category"
            key={id}
            id={id}
          />
        ))}
      </S.ListContainer>
    </S.Wrap>
  );
}

export default CategoryList;
