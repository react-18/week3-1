import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import * as S from './styled';
import { idState } from '../../recoil';
import { useRecoilState } from 'recoil';

interface PropType {
  imgUrl: string;
  name: string;
  type: string;
  id: number;
  link: string;
  categoryId: number;
}

function CategoryItem({ imgUrl, name, type, id, link, categoryId }: PropType) {
  const [idd, setIdd] = useRecoilState(idState);
  const router = useRouter();
  console.log(categoryId);
  function handleLink() {
    if (categoryId) {
      return `/brands/${categoryId}?conCate2=${id}`;
    } else {
      return `/categories/${id}`;
    }
  }

  useEffect(() => {
    if (type === 'category') {
      setIdd({
        ...idd,
        categoryId: id,
      });
    } else if (type === 'brands') {
      setIdd({
        ...idd,
        brandId: id,
      });
    }
  }, []);

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
