import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useEffect, useState } from 'react';
import ConItem from '../../components/conItem';
import * as S from './styled';

function Brands({ setPageTitle, data, query }) {
  console.log(query);
  const [products, setProducts] = useState([]);
  const brands = data.conCategory1.conCategory2s;
  const selectedBrand = brands.filter((brand) => {
    return brand.id === Number(query);
  });

  useEffect(() => {
    setProducts(selectedBrand[0].conItems);
    setPageTitle(selectedBrand[0].name);
  }, []);

  return (
    <S.Wrapper>
      <S.ProductCounter>
        <S.ProductCount>{products && products.length}개의 상품</S.ProductCount>
      </S.ProductCounter>
      <S.ProductList>
        {products.length &&
          products.map((item) => (
            <p key={item.id}>
              <ConItem
                conItem={item}
                brandName={selectedBrand[0].name}
                isList={true}
              />
            </p>
          ))}
      </S.ProductList>
    </S.Wrapper>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  params,
  query,
}) => {
  const res = await axios.get(
    `https://api2.ncnc.app/con-category1s/${params.id}/nested`,
  );
  return {
    props: {
      query: query.conCate2,
      data: res.data,
    },
  };
};

export default Brands;
