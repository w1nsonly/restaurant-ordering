import React from "react";
import { MenuItem } from "../../interfaces/MenuItem";

interface Props {
  category: string;
  items: MenuItem[];
}

const MenuCategory: React.FC<Props> = ({ category, items }) => {
  return (
    <div id="menu-category">
      <h3>{category}</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.id_number ? `${item.id_number}: ` : ""}{item.name} - ${item.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuCategory;
