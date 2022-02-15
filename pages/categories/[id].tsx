import axios, { AxiosResponse } from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import CategoryNav from '../../components/CategoryNav';
import CategoryList from '../../components/shared/CategoryList';
import { BRAND } from '../../constants/api';
import * as S from '../../styles/categories.styled';

interface Categories {
  handlePageTitle: (title: string) => void;
  param: string;
  query: string;
  id: string;
}

const Category: NextPage<Categories> = ({
  handlePageTitle,
  param,
  query,
  id,
}) => {
  // const router = useRouter();
  // const { id } = router.query; // 동적 라우팅
  const [response, setResponse] = useState<AxiosResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BRAND(id));
        setResponse(response);
      } catch (e) {
        setResponse(null);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    handlePageTitle('브랜드');
  }, [query, handlePageTitle]);

  return (
    <S.Wrap>
      <CategoryNav />
      {response && (
        <CategoryList
          categories={response?.data?.conCategory1.conCategory2s}
          // categories={response?.data?.conCategory1.conCategory2s}
          type="brands"
          link="/brands/"
          categoryId={Number(param)}
        />
      )}
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
      query: query.cateName,
      id: query.id,
    },
  };
};

export default Category;
