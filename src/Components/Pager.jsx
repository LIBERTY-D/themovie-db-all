import "../Styles/pager.scss"

const Pager = ({ currentPage, totalPages, handlePageChange }) => {
  const pageRange = 2;

  const handlePageClick = (page) => {
    handlePageChange(page);
  };

  const renderPageNumbers = () => {
    const startPage = Math.max(1, currentPage - pageRange);
    const endPage = Math.min(totalPages, currentPage + pageRange);


    return Array.from({ length: endPage - startPage + 1 }, (_, index) => {
      const page = startPage + index;

      return (
        <button 
         id="numbers-pager"
          key={page}
          onClick={() => handlePageClick(page)}
          className={page === currentPage ? 'active' : ''}
        >
          {page}
        </button>
      );
    });
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <div className="pager-container">
      <button
        className="pager-button"
        onClick={handlePrevClick}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="pager-numbers">{renderPageNumbers()}</div>
      <button
        className="pager-button"
        onClick={handleNextClick}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pager;


