import { CARDS_PER_PAGE } from "../../Constants/Constants";
import './Pagination.css'

const Pagination = (props: any) => {
  const { totalCards, currentPage, setCurrentPage } = props;
  const pageNumbers: any = [];//todo спросить

  for (let i = 1; i <= Math.ceil(totalCards / CARDS_PER_PAGE); i++) {
    pageNumbers.push(i);
  }
  return <nav className="StarWars__pagination">
    <ul className="pagination justify-content-center">
      <li className="page-item">
        <a onClick={() => setCurrentPage(currentPage - 1 <= 0 ? 1 : currentPage - 1)} className="page-link" href="#">Previous</a>
      </li>
        {pageNumbers.map((num: number) => (
          <li className="page-item" key={num}>
            <a onClick={() => setCurrentPage(num)} className="page-link" href="#">{num}</a>
          </li>
        ))}
      <li className="page-item">
        <a onClick={() => setCurrentPage(currentPage + 1 >= pageNumbers.length ? pageNumbers.length : currentPage + 1)} className="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
};

export default Pagination
