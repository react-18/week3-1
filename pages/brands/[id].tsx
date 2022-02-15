import axios from 'axios';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import ConItem from '../../components/shared/ConItem';
import * as S from '../../styles/brands.styled';

function Brands({ handlePageTitle, data, query }) {
  const [products, setProducts] = useState([]);
  const brands = data.conCategory1.conCategory2s;
  const selectedBrand = brands.filter((brand) => {
    return brand.id === Number(query);
  });

  useEffect(() => {
    setProducts(selectedBrand[0].conItems);
    handlePageTitle(selectedBrand[0].name);
  }, []);

  return (
    <>
      <S.ProductCounter>
        <S.ProductCount>{products && products.length}개의 상품</S.ProductCount>
      </S.ProductCounter>
      <S.ProductList>
        {products.length &&
          products.map((item) => (
            <Link key={item.id} href={`/items/${item.id}`} passHref>
              <a>
                <ConItem
                  conItem={item}
                  brandName={selectedBrand[0].name}
                  isList
                />
              </a>
            </Link>
          ))}
      </S.ProductList>
    </>
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
