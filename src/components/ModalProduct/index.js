import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Container, ProductAreaModal, ProductButtonsModal, ProductPhotoModal, ProductInfoAreaModal,
  ProductDetails, ProductQuantityAreaModal, ProductNameModal, ProductIngredientsModal, ProductButton,
  ProductMinusQt, ProductPlusQt, ProductTextQt, ProductQtModal, ProductPriceModal } from "./styled";
import { ADD_PRODUCT } from "../../store";

export default ({data, setStatus}) => {
  const dispatch = useDispatch();
  const [ qt, setQt ] = useState(1);

  useEffect(()=>{
    setQt(1);
  },[data]);
  
  const handleCancelButton = () => {
    setStatus(false);
  }

  const handleMinusQt = () => {
    if(qt > 1){
      setQt(qt - 1);
    }
  }

  const handlePlusQt = () => {
    setQt(qt + 1);
  }

  const handleAddToCart = () => {
    dispatch(ADD_PRODUCT({data, qt}))
    setStatus(false);
  }

  return (
    <Container>
      <ProductAreaModal>
        <ProductPhotoModal src={data.image} />
        <ProductInfoAreaModal>
          <ProductDetails>
            <ProductNameModal>{data.name}</ProductNameModal>
            <ProductIngredientsModal>{data.ingredients}</ProductIngredientsModal>
          </ProductDetails>
          <ProductQuantityAreaModal>
            <ProductQtModal>
              <ProductMinusQt onClick={handleMinusQt} src='./assets/minus.png' />
              <ProductTextQt>{qt}</ProductTextQt>
              <ProductPlusQt onClick={handlePlusQt} src='./assets/plus.png' />
            </ProductQtModal>
            <ProductPriceModal>
              R$ {Number(data.price * qt).toFixed(2).replace('.',',')}
            </ProductPriceModal>
          </ProductQuantityAreaModal>
        </ProductInfoAreaModal>
      </ProductAreaModal>
      <ProductButtonsModal>
        <ProductButton onClick={handleCancelButton} small={true}>cancelar</ProductButton>
        <ProductButton onClick={handleAddToCart}>Adicionar ao carrinho</ProductButton>
      </ProductButtonsModal>
    </Container>
  );
}