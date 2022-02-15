import React from 'react';
import * as S from './styled';
import { WarningItemProps } from './types';

function WarningItem({ warningItem }: WarningItemProps) {
  const [title, ...contents] = warningItem;

  return (
    <S.ItemContainer>
      <S.Title>{title.substring(1, title.length - 1)}</S.Title>
      {contents.map((content, i) => (
        <S.Content isFirst={i === 0} key={i}>
          {content}
        </S.Content>
      ))}
    </S.ItemContainer>
  );
}

export default WarningItem;
