import React, { useContext, useState } from 'react';
import { RecipeContext } from '../Context/RecipeContext';
import Search from './Search';
import Header from './Header';

export default function Home() {
  const { recipes, filteredItems } = useContext(RecipeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;



  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log({ filteredItems });
  const toDisp = filteredItems.length > 0 ? filteredItems : recipes;
  // Get the current page of items
  const currentItems = toDisp.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Check if pages is an array before mapping
  const res = currentItems.map(item => (
    <div key={item.id}>
      <div className="col">
        <div className="card">
          <img src={item.image} height="200px" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <div className="card-text johnie">{item.ingredients.map(ingredient => {
              return (<span key={ingredient}>{ingredient}</span>)
            })}</div>
          </div>
        </div>
      </div>
    </div>
  ));

  // Logic for pagination buttons (optional - implement your desired UI)
  const totalPages = Math.ceil(toDisp.length / itemsPerPage);
  const pageButtons = [];
  //  for (let i = 1; i <= totalPages; i++) {
  //    pageButtons.push(
  //      <button key={i} onClick={() => handlePageChange(i)}>
  //        {i}
  //      </button>
  //    );
  //  }

  return (
    <>
      <div>
      <Header children={<Search></Search>}></Header>
      </div>
      <div className="row row-cols-3 row-cols-md-3 g-4">
        {res}
      </div>

      <div className="pagination">
        {/* Previous button */}
        <button
          id="previous"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>

        {/* Page number indicator */}
        <span>
          Page {currentPage} of {totalPages}
        </span>

        {/* Next button */}
        <button
          id="next"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>

    </>
  );
}
