import styled from 'styled-components';

export const contactsStyle = {
  margin: {
    M: '17px',
    S: '9px',
  },
  size: {
    blockHeight: '50px',
  },
};

export const Info = styled.section`
  padding: ${contactsStyle.margin.M};
  padding-top: calc(${contactsStyle.margin.M}*2);
  height: 160px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const InfoTitle = styled.p`
  margin-bottom: ${contactsStyle.margin.S};
`;

export const InfoText = styled.p`
  margin-bottom: 3px;
`;

export const FAQTitleWrapper = styled.div`
  margin: 9px 0 9px 0;
  background-color: ${({ theme }) => theme.color.white};
`;

export const FAQTitle = styled.div`
  padding: 16px;
  font: ${({ theme }) => theme.font.large};
`;

export const FAQButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FAQButton = styled.button`
  width: 169px;
  height: 40px;
  margin: 0 ${contactsStyle.margin.M} 0 ${contactsStyle.margin.M};
  color: ${({ theme }) => theme.color.textGray};

  &:hover {
    margin: 0 ${contactsStyle.margin.M} 0 ${contactsStyle.margin.M};
    border-bottom: 2px solid ${({ theme }) => theme.color.pointRed};
    color: ${({ theme }) => theme.color.pointRed};
  }
`;

export const ClickedFAQButton = styled.button`
  width: 169px;
  height: 40px;
  margin: 0 ${contactsStyle.margin.M} 0 ${contactsStyle.margin.M};
  border-bottom: 2px solid ${({ theme }) => theme.color.pointRed};
  color: ${({ theme }) => theme.color.pointRed};
`;

export const FAQList = styled.ul`
  height: 100vh;
  background-color: ${({ theme }) => theme.color.white};
`;
