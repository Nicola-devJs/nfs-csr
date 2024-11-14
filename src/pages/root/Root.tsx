import { useEffect, useState } from "react";

import { Car } from "../../interfaces/car";
import { Head } from "../../components/head/Head";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { CarList } from "../../components/list/List";
import { Pagination } from "../../components/pagination/Pagination";
import { fetchBlackList } from "../../api/fetchBlackList";
import { Loader } from "../../components/loader/Loader";

const ITEMS_PER_PAGE = 8;

const Root = () => {
  const [loading, setLoading] = useState(false);
  const [cars, setCards] = useState<Car[]>([]);
  const [filteredCars, setFilteredCars] = useState<Car[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = (query: string) => {
    const result = cars.filter((car) => car.auto.toLowerCase().includes(query.toLowerCase()));
    setFilteredCars(result);
    setCurrentPage(1);
  };

  const handleFilter = (filter: string) => {
    if (filter === "price") {
      setFilteredCars([...cars].sort((a, b) => a.price - b.price));
      setCurrentPage(1);
    }

    if (filter === "year") {
      setFilteredCars([...cars].sort((a, b) => a.year - b.year));
      setCurrentPage(1);
    }
  };

  const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
  const displayedCars = filteredCars.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  useEffect(() => {
    setLoading(true);

    (async function () {
      try {
        const data = await fetchBlackList();
        setCards(data);
        setFilteredCars(data);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="car-sales-page">
      <Head onSearch={handleSearch} />

      <div className="content">
        <Sidebar onFilter={handleFilter} />
        <div style={{ width: "100%" }}>
          {loading ? (
            <Loader />
          ) : (
            <>
              <CarList cars={displayedCars} />
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={(page) => setCurrentPage(page)}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Root;
