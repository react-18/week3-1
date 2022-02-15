/// <reference types="cypress" />

describe('', () => {
  it('홈페이지 렌더링', () => {
    cy.visit('/');
  });

  it('홈페이지 to 카테고리 페이지로 이동', () => {
    const file = [
      '스타벅스',
      '투썸플레이스',
      '이디야',
      '할리스커피',
      '파스쿠찌',
      '커피빈',
      '엔제리너스커피',
      '빽다방',
      '폴바셋',
      '쥬씨',
      '달콤커피',
      '커피스미스',
      '더벤티',
    ];
    cy.visit('/');
    cy.contains('카페').click();
    cy.location('pathname').should('equal', '/categories/67');
    cy.get('.styled__Wrap-sc-wc7x3k-1').each((li) => {
      expect(li.text()).to.equal(file.join(''));
    });
  });

  it('홈페이지 - 카테고리 - 브랜드 - 상품 정보 페이지 순으로 이동으로 이동 후 다시 역순으로 홈까지 이동', () => {
    cy.visit('/');
    cy.contains('카페').click();
    cy.location('pathname').should('equal', '/categories/67');
    cy.contains('스타벅스').click();
    cy.location('pathname').should('equal', '/brands/67');
    cy.contains('카페아메리카노 T').click();
    cy.location('pathname').should('equal', '/items/137');
    cy.get('.styled__Button-sc-s9xfye-0').click();
    cy.location('pathname').should('equal', '/brands/67');
    cy.get('.styled__Button-sc-s9xfye-0').click();
    cy.location('pathname').should('equal', '/categories/67');
    cy.get('.styled__Button-sc-s9xfye-0').click();
    cy.location('pathname').should('equal', '/');
  });

  it('옵션 선택하기 클릭시 옵션창 열고 닫기', () => {
    cy.visit('/items/137')
      .contains('옵션선택하기')
      .click()
      .contains('구매하기')
      .should('be.visible')
      .contains('구매하기')
      .click()
      .contains('옵션선택하기');
  });

  it('구매 Q&A 열기', () => {
    cy.visit('/');
    cy.get('.styled__Button-sc-al89q2-0').click();
    cy.get('.styled__CustomerService-sc-1fqg20b-4').click();
    cy.contains('현금영수증(또는 세금계산서)을 발급 받고 싶어요!');
    cy.get('.contactsstyled__FAQButton-sc-1qz74lo-6').click();
    cy.contains('바로 정산은 안 되나요?');
    cy.get(':nth-child(1) > .styled__Button-sc-1jg1c27-4').click();
    cy.contains(
      '판매하신 쿠폰은 사고 발생율을 줄이기 위해 수락일을 기준으로 2영업일 후에 정산금으로 전환되며, 은행 거래 시스템상 바로 지급은 어려운 점 양해 부탁드리겠습니다.',
    );
    cy.get(':nth-child(1) > .styled__Button-sc-1jg1c27-4').click();
    cy.contains(
      '판매하신 쿠폰은 사고 발생율을 줄이기 위해 수락일을 기준으로 2영업일 후에 정산금으로 전환되며, 은행 거래 시스템상 바로 지급은 어려운 점 양해 부탁드리겠습니다.',
    ).should('not.exist');
    cy.get('svg').click();
    cy.location('pathname').should('equal', '/');
  });
});
