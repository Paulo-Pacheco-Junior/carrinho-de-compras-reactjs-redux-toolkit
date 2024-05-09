import styled from "styled-components";

export const Container = styled.div`
  background-color:#136713;
  border-radius:10px;
  padding:20px;
  display:flex;
  justify-content:space-between;
  align-items:center;

  @media(max-width:780px) {
    flex-direction:column;
  }
`;

export const Logo = styled.img`
  height:70px;
  width:auto;

  @media(max-width:430px) {
    height:50px;
  }
`;

export const SearchInput = styled.input`
  border:0;
  border-radius:25px;
  width:300px;
  height:50px;
  background-color:#FFF;
  background-image:url('/assets/search.png');
  background-size:30px 30px;
  background-repeat:no-repeat;
  background-position:10px center;
  outline:0;
  padding-left:50px;
  transition:all ease .2s;
  cursor:pointer;

  &:focus {
    cursor:text;
  }

  @media(max-width:780px) {
    margin:20px 20px 0 20px;
  }

  @media(max-width:560px) {
    width:150px;
  }

  @media(max-width:430px) {
    width:120px;
  }
`;