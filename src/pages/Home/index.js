import React, { useState, useEffect } from 'react';
import api from '../../api';
import Header from '../../components/Header';
import Modal from '../../components/Modal';
import ModalProduct from '../../components/ModalProduct';
import ProductsItem from '../../components/ProductsItem';
import { Container, ProductArea, ProductList } from './styled';


export default () => {
  const [ products, setProducts ] = useState([]);
  const [ modalStatus, setModalStatus ] = useState(false);
  const [ modalData, setModalData ]  = useState({});

  useEffect(()=> {
    const getProducts = async () => {
      const response = await api.getProducts();
      setProducts(response.result.data);
    }
    getProducts();
  },[])
 
  const handleProductClick = (data) => {
    setModalData(data);
    setModalStatus(true);
  }

  return (
    <Container>
      <Header />
      {products.length > 0 && 
        <ProductArea>
          <ProductList>
            {products.map((item, index)=>(
              <ProductsItem
                key={index}
                data={item}
                onClick={handleProductClick}
              />
            ))}
          </ProductList>
        </ProductArea>
      }
      <Modal status={modalStatus} setStatus={setModalStatus}>
        <ModalProduct data={modalData} setStatus={setModalStatus}/>
      </Modal>
    </Container>
  );
}