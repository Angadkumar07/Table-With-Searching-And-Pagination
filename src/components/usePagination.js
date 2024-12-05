import  { useState } from "react";

const usePagination=(data,rowPerPage)=>{
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / rowPerPage);
    const startIndex = (currentPage - 1) * rowPerPage;
    const endIndex = startIndex + rowPerPage;


    const handdelPageChange = (pages) => {
        if (pages > 0 && pages <= totalPages) {
          setCurrentPage(pages);
        }
      };

    return {
        data: data.slice(startIndex, endIndex),
        currentPage,
        handdelPageChange,
    }

}
export default usePagination;