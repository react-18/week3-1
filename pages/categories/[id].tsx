import { parseWithNodeMaps } from '@typescript-eslint/typescript-estree';
import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CategoryNav from '../../components/CategoryNav';
import CategoryList from '../../components/shared/CategoryList';
import { BRAND } from '../../constants/api';
import * as S from './styled';

const Category: NextPage = ({ param, query }) => {
  const router = useRouter();
  const { id } = router.query; // 동적 라우팅
  console.log(Number(param), query + 'dddd');
  const [response, setResponse] = useState();

  useEffect(async (): void => {
    const responseData = await axios.get(BRAND(id));
    setResponse(responseData);
  }, [id]);

  return (
    <S.Wrap>
      <CategoryNav />
      <CategoryList
        categories={response?.data?.conCategory1.conCategory2s}
        type="brands"
        link="/brands/"
        categoryId={Number(param)}
      />
    </S.Wrap>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  return {
    props: {
      param: params.id,
      query: query,
    },
  };
};

export default Category;
