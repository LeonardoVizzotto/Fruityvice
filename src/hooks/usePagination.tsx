import { useState } from 'react';

function usePagination<T>(data: T[], itemsPerPage: number) {
  const [currentPage, _setCurrentPage] = useState(1);
  const itemCount = data.length;

  const pageCount = Math.ceil(itemCount / itemsPerPage);

  const getCurrentData = () => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    return data.slice(start, end);
  };

  const setCurrentPage = (index: number) => {
    if (index < 1 || index > pageCount) {
        console.warn('[usePagination]: Tried to setCurrentPage to invalid index', index);
        return;
    }

    _setCurrentPage(index);
  };

  return {
    currentPage,
    getCurrentData,
    setCurrentPage,
    pageCount,
  };
}

export default usePagination;
