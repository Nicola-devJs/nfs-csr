import React, { useState } from "react";
import "./head.style.css";

export const Head: React.FC<{ onSearch: (query: string) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <>
      <div className="search-bar">
        <a href="https://makler.md/ru/" className="logo">
          <img src="https://makler.md/layouts/default/img/logo_new.svg" alt="" />
        </a>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Введите марку или модель"
          className="search-input"
        />
        <button onClick={() => onSearch(query)} className="search-button">
          Найти
        </button>
      </div>
      <div className="ad-banner">
        <img src="https://cdn2.steamgriddb.com/grid/6fdb8f7d90e975d5d19959a0fcebf123.png" alt="Рекламный баннер" />
      </div>
    </>
  );
};
