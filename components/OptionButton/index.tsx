import React from 'react';
import OptionBox from '../OptionBox';
import * as S from './styled';
import { OptionButtonProps } from './types';

function OptionButton({
  isOpened,
  isSelected,
  onClick,
  onSelect,
  options,
}: OptionButtonProps) {
  const selected = false;
  return (
    <>
      {isOpened && (
        <S.BackgroundDimm>
          <S.InnerContainer>
            <OptionBox options={options} onSelect={onSelect} />
          </S.InnerContainer>
        </S.BackgroundDimm>
      )}
      <S.Button
        isSelected={!isOpened && !isSelected}
        disabled={isOpened || selected}
        onClick={onClick}
      >
        {isOpened ? '구매하기' : '옵션선택하기'}
      </S.Button>
    </>
  );
}

export default OptionButton;
