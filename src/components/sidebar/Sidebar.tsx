import { useState } from "react";
import blackList from "../../assets/black_list.jpg";
import "./sidebar.style.css";

export const Sidebar: React.FC<{ onFilter: (filter: string) => void }> = ({ onFilter }) => {
  const [filter, setFilter] = useState("");

  return (
    <div className="sidebar">
      <h3>Фильтры</h3>
      <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter-select">
        <option value="">Выберите фильтр</option>
        <option value="price">По цене</option>
        <option value="year">По году выпуска</option>
      </select>
      <button onClick={() => onFilter(filter)} className="filter-button">
        Применить
      </button>
      <div className="black_list">
        <img src={blackList} alt="" />
      </div>
    </div>
  );
};
