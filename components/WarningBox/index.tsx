/* eslint-disable react/no-array-index-key */
import React from 'react';
import { WarningBoxProps } from './types';
import * as S from './styled';
import WarningItem from '../WarningItem';

function WarningBox({ warning }: WarningBoxProps) {
  const warningLists = warning.split('\n\n');
  const warningItems = warningLists.map((warningList) =>
    warningList.split('\n'),
  );

  return (
    <S.Container id="warning-box">
      {warningItems.map((warningItem, i) => (
        <WarningItem warningItem={warningItem} key={i} />
      ))}
    </S.Container>
  );
}

export default WarningBox;
