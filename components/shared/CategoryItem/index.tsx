import Link from 'next/link';
import * as S from './styled';

interface PropType {
  imgUrl: string;
  name: string;
  type: string;
  id: number;
  link: string;
  categoryId: number;
}

function CategoryItem({ imgUrl, name, type, id, categoryId }: PropType) {
  function handleLink() {
    if (categoryId) {
      return `/brands/${categoryId}?conCate2=${id}`;
    } else {
      return `/categories/${id}?cateName=${name}`;
    }
  }

  return (
    <Link href={handleLink()}>
      <S.Container type={type}>
        <img src={imgUrl} alt={name} />
        <span>{name}</span>
      </S.Container>
    </Link>
  );
}

export default CategoryItem;
