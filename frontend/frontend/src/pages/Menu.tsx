import React, { useState, useEffect } from "react";
import axios from "axios";
import MenuCategory from "../components/menu/MenuCategory";
import { MenuItem } from "../interfaces/MenuItem";


const Menu: React.FC = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  useEffect(() => {
    axios.get<MenuItem[]>("http://127.0.0.1:8000/orders/menu/")
      .then(response => setMenuItems(response.data))
      .catch(error => console.error("Error fetching menu:", error));
  }, []);

  return (
    <div id="menu-page">
      <h2>Menu</h2>
      <div id="menu-container">
        <div id="left-column">
        <MenuCategory category="Buffet" items={menuItems.filter(item => item.category === "Buffet")} />
        <MenuCategory category="Chow Mein" items={menuItems.filter(item => item.category === "Chow Mein")} />
        <MenuCategory category="Chop Suey" items={menuItems.filter(item => item.category === "Chop Suey")} />
        <MenuCategory category="Lo Mein" items={menuItems.filter(item => item.category === "Lo Mein")} />
        <MenuCategory category="Fried Rice" items={menuItems.filter(item => item.category === "Fried Rice")} />
        <MenuCategory category="Egg Foo Young" items={menuItems.filter(item => item.category === "Egg Foo Young")} />
        <MenuCategory category="Vegetable" items={menuItems.filter(item => item.category === "Vegetable")} />
        <MenuCategory category="Shrimp" items={menuItems.filter(item => item.category === "Shrimp")} />
        <MenuCategory category="Beef" items={menuItems.filter(item => item.category === "Beef")} />
        <MenuCategory category="Pork" items={menuItems.filter(item => item.category === "Pork")} />
        <MenuCategory category="Chicken" items={menuItems.filter(item => item.category === "Chicken")} />
        <MenuCategory category="Diet Menu" items={menuItems.filter(item => item.category === "Diet Menu")} />
        </div>
        <div id="right-column">
        
        <MenuCategory category="Appetizers" items={menuItems.filter(item => item.category === "Appetizers")} />
        <MenuCategory category="Soups" items={menuItems.filter(item => item.category === "Soups")} />
        <MenuCategory category="Lunch Combos" items={menuItems.filter(item => item.category === "Lunch Combos")} />
        <MenuCategory category="Speical Combos" items={menuItems.filter(item => item.category === "Special Combos")} />
        <MenuCategory category="Chef Specials" items={menuItems.filter(item => item.category === "Chef Specials")} />
        <MenuCategory category="Side Orders" items={menuItems.filter(item => item.category === "Side Orders")} />
        </div>
      </div>
     
     
      
    </div>
  )
}

export default Menu;