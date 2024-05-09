import styled from 'styled-components';

export const Container = styled.div`
  width:100%;
  padding:15px;  
`;
  
export const ProductArea = styled.div`
  margin-top:20px;
  margin-bottom:20px;

  @media(max-width:910px) {
    margin-bottom:20px;
  }

  @media(max-width:630px) {
    max-width:80vw;
    display:flex;
    justify-content:center;
  }

  @media(max-width:460px) {
    max-width:30vw;
    display:flex;
    justify-content:left;
  }
`;

export const ProductList = styled.div`
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  grid-gap:15px;

  @media(max-width:910px) {
    grid-template-columns:repeat(2, 1fr);
  }

  @media(max-width:630px) {
    grid-template-columns:1fr;
  }
`;