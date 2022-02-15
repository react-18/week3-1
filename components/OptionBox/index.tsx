import React from 'react';
import OptionItem from '../OptionItem';
import { OptionBoxProps } from './types';
import * as S from './styled';
function OptionBox({ options, originalPrice, onSelect }: OptionBoxProps) {
  return (
    <S.Container>
      <S.OptionSelect>옵션 선택하기</S.OptionSelect>
      <S.OptionList>
        {options.map((option, i) => (
          <OptionItem
            option={option}
            key={i}
            originalPrice={originalPrice}
            onSelect={onSelect}
          />
        ))}
      </S.OptionList>
    </S.Container>
  );
}

export default OptionBox;
