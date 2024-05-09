import React from 'react';
import { ItemArea, ItemIcon } from './styled';

export default ({ icon }) => {

  return (
    <ItemArea>
      <ItemIcon src={icon} />
    </ItemArea>
  );
}