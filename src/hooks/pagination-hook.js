// import { useState, useMemo } from 'react';

// function usePagination(items, itemsPerPage, initialPage = 1) {
//   const [currentPage, setCurrentPage] = useState(initialPage);

//   const totalPages = useMemo(() => Math.ceil(items.length / itemsPerPage), [
//     items,
//     itemsPerPage,
//   ]);

//   const currentItems = useMemo(() => {
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     return items.slice(startIndex, endIndex);
//   }, [currentPage, items, itemsPerPage]);

//   function nextPage() {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   }

//   function prevPage() {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   }

//   function goToPage(page) {
//     const pageNumber = Math.max(1, Math.min(page, totalPages));
//     setCurrentPage(pageNumber);
//   }

//   return {
//     currentPage,
//     currentItems,
//     totalPages,
//     nextPage,
//     prevPage,
//     goToPage,
//   };
// }

// export default usePagination;
