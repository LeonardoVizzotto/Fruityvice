import React from 'react';
import { Container, Stepper } from './styles';

type PaginationControlsProps = {
  currentPage: number;
  setCurrentPage: (index: number) => void;
  pageCount: number;
};

const PaginationControls = (props: PaginationControlsProps) => {
  const { pageCount, currentPage, setCurrentPage } = props;

  return (
    <Container data-test-id="pagination-test-id">
      <Stepper
        aria-label="previous page"
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        circle={true}
      >
        {'<'}
      </Stepper>
      {[...Array(pageCount)].map((_, i) => (
        <li key={i}>
          <Stepper
            aria-label={`jump to page ${i + 1}`}
            onClick={() => setCurrentPage(i + 1)}
            selected={i + 1 === currentPage}
          >
            {i + 1}
          </Stepper>
        </li>
      ))}
      <Stepper
        aria-label="next page"
        disabled={currentPage >= pageCount}
        onClick={() => setCurrentPage(currentPage + 1)}
        circle={true}
      >
        {'>'}
      </Stepper>
    </Container>
  );
};

export default PaginationControls;
