import React from 'react';
import { useState } from 'react';
import { Container, Menu, PageBody } from './AppStyled';
import MenuItem from './components/MenuItem';
import Home from './pages/Home';
import Cart from './components/Cart';

export default () => {
    const [cartStatus, setCartStatus] = useState(false);

    return (
        <Container>
            <Menu>
                <MenuItem icon="/assets/store.png" />
                <MenuItem icon="/assets/order.png" />
                <MenuItem icon="/assets/profile.png" />
            </Menu>

            <PageBody>
                <Home />     
            </PageBody>
            
            <Cart 
                status={cartStatus}
                setStatus={setCartStatus} 
            />
        </Container>
    );
}