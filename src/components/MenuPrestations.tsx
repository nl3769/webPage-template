// src/components/MenuPrestations.tsx
import React, { useState } from "react";
// import "./MenuPrestations.css";

interface MenuPrestationsProps {
  items: string[];
  onSelect?: (item: string) => void;
}

const MenuPrestations: React.FC<MenuPrestationsProps> = ({ items, onSelect }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="prestations-dropdown"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="prestations-button">Prestations ▾</button>
      {open && (
        <div className="dropdown-menu">
          {items.map((item) => (
            <button
              key={item}
              className="dropdown-item"
              onClick={() => onSelect && onSelect(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuPrestations;