import Link from 'next/link';
import React from 'react';
import * as S from './styled';

interface PropType {
  imgUrl: string;
  name: string;
  type: string;
  id: number;
}

function CategoryItem({ imgUrl, name, type, id }: PropType) {
  return (
    <Link href={`/categories/${id}`}>
      <S.Container type={type}>
        <img src={imgUrl} alt={name} />
        <span>{name}</span>
      </S.Container>
    </Link>
  );
}

export default CategoryItem;
