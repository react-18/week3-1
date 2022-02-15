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
  type: string;
  link: string;
  categoryId?: number;
}

function CategoryList({ link, categories, type, categoryId }: Categories) {
  return (
    <S.Wrap>
      <S.ListContainer>
        {categories?.map(({ imageUrl, name, id }) => (
          <CategoryItem
            imgUrl={imageUrl}
            name={name}
            type={type}
            key={id}
            id={id}
            link={`${link}${id}`}
            categoryId={categoryId}
          />
        ))}
      </S.ListContainer>
    </S.Wrap>
  );
}

export default CategoryList;
