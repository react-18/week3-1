import axios from 'axios';
import { GetServerSideProps } from 'next';
import React, { useState } from 'react';
import ConItem from '../../components/ConItem';
import OptionButton from '../../components/OptionButton';
import WarningBox from '../../components/WarningBox';
import { DetailProps } from './types';
import * as S from './styled';

function Items({ conItem: DetailConItem }: DetailProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const {
    id,
    name,
    originalPrice,
    minSellingPrice,
    warning,
    imageUrl,
    conCategory2,
    options,
  } = DetailConItem;

  const conItem = {
    id,
    name,
    originalPrice,
    minSellingPrice,
    imageUrl,
  };

  return (
    <S.Container>
      <ConItem isList conItem={conItem} brandName={conCategory2.name} />
      <WarningBox warning={warning} />
      <OptionButton
        isOpened={isOpened}
        isSelected={isSelected}
        onClick={() => setIsOpened(!isOpened)}
        onSelect={() => setIsSelected(!isSelected)}
        options={options}
      />
    </S.Container>
  );
}

export default Items;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { id } = query;
  const { data } = await axios.get(`https://api2.ncnc.app/con-items/${id}`);
  const { conItem } = data;
  return {
    props: { conItem },
  };
};
