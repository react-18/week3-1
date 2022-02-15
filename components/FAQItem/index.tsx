import React, { useState } from 'react';
import * as S from './styled';

function FAQItem({ qa, aw }) {
  function onClickButton() {
    setIsOpened(!isOpened);
  }
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <S.QuestionWrapper>
        <S.TextWrapper>
          <S.Q>Q.</S.Q>
          <S.Question>{qa}</S.Question>
        </S.TextWrapper>
        <S.Button
          onClick={onClickButton}
          src={`/images/${isOpened ? 'shrink.svg' : 'spread.svg'}`}
        ></S.Button>
      </S.QuestionWrapper>
      {isOpened && <S.Answer>{aw}</S.Answer>}
    </>
  );
}

export default FAQItem;
