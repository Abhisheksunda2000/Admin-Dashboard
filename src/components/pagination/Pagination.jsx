import './pagination.css';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
const Pagination = ({ entriesPerPage, totalEntries, currentPage, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalEntries / entriesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
    <div className="pagination">
      <span className='pageText'>
        <p>
          Page {currentPage} of {pageNumbers.length}
        </p>
      </span>
      <span>
        <button className="first-page"> <KeyboardDoubleArrowLeftIcon /></button>
      </span>
      <span>
        <button className="previous-page" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          <NavigateBeforeIcon />
        </button>
      </span>
      
      {pageNumbers.map((number) => (
        <span key={number}>
          <button className='pageButton' onClick={() => paginate(number)}>{number}</button>
        </span>
      ))}

      <span>
        <button className="next-page"onClick={() => paginate(currentPage + 1)} disabled={currentPage === pageNumbers.length}>
          <NavigateNextIcon />
        </button>
      </span>

      <span>
        <button className='last-page'> <KeyboardDoubleArrowRightIcon /></button>
      </span> 
    </div>
    </>
  ); 
};

export default Pagination;
