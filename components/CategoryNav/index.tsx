/* eslint-disable react/no-array-index-key */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { CATEGORY } from '../../constants/api';
import useAxios from '../../hooks/useAxios';
import * as S from './styled';

function CategoryNav() {
  const { response } = useAxios({
    method: 'GET',
    url: CATEGORY,
  });

  const router = useRouter();
  const { id } = router.query; // 동적 라우팅

  const [current, setCurrent] = useState<number>(Number(id));

  const handleClick = (idx: number) => {
    setCurrent(idx);
  };

  return (
    <S.Wrap>
      <S.NavList>
        {response?.data?.conCategory1s.map(({ name, id }) => (
          <Link href={`/categories/${id}`} key={id}>
            <button
              type="button"
              onClick={() => handleClick(id)}
              className={current === id ? 'active' : ''}
            >
              {name}
            </button>
          </Link>
        ))}
      </S.NavList>
    </S.Wrap>
  );
}

export default CategoryNav;
