import styled from 'styled-components';

export const CartArea = styled.div`
  background-color:#136713;
  border-top-left-radius:10px;
  border-top-right-radius:10px;
  position:fixed;
  bottom:0;
  right:30px;

  @media(max-width:460px) {
    right:10px;
  }

  @media(max-width:430px) {
    right:5px;
  }

`;
  
export const CartHeader = styled.div`
  width:290px;
  height:50px;
  display:flex;
  align-items:center;
  cursor:pointer;

  @media(max-width:460px) {
    width:270px;
  }

  @media(max-width:430px) {
    width:250px;
  }
`;
  
export const CartIcon = styled.img`
  width:23px;
  height:auto;
  margin:0 10px;
`;
  
export const CartText = styled.div`
  color:#FFF;
  font-size:17px;
  flex:1;
`;

export const CartBody = styled.div`
  display:${props => props.show === true ? 'block' : 'none'};
  flex-direction:column;
  color:#FFF;
  margin:0 10px;

  @media(max-width:460px) {
    width:270px;
  }

  @media(max-width:430px) {
    width:250px;
  }
`;

export const CartItemArea = styled.div`
  flex:1;
  display:flex;
  justify-content:center;
  align-items:center;
`;

export const CartItemPhoto = styled.img`
  width:55px;
  border-radius:5px;
`;

export const CartItemDetails = styled.div`
  flex:1;
  margin:10px;
  line-height:20px;
`;

export const CartItemName = styled.div`
  font-size:16px;
  font-weight:bold;
`;

export const CartItemPrice = styled.div`
  font-size:13px;
`;

export const CartItemQtArea = styled.div`
  display:flex;
  align-items:center;
`;

export const CartItemMinusQt = styled.img`
  width:15px;
  margin-left:10px;
  cursor:pointer;
`;

export const CartItemTextQt = styled.div`
  margin:0 10px;
  font-size:15px;
  font-weight:bold;
`;

export const CartItemPlusQt = styled.img`
  width:15px;
  cursor:pointer;
`;    

export const CartDown = styled.img`
  width:20px;
  margin:20px;
`;