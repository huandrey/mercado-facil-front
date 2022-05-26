import React from 'react';

import { SelectElement } from './style';

export function CustomSelect({ items, onChange, rest }: any) {
  return (
    <SelectElement onChange={onChange} {...rest}>
      <option value="" selected disabled hidden>
        Selecione um produto
      </option>

      {items?.map((item: any) => (
        <option value={item.id}>{`${item.name} - ${item.fabricante}`}</option>
      ))}
    </SelectElement>
  );
}

