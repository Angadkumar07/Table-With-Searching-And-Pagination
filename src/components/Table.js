import React from "react";
import usePagination from "./usePagination";

const Table = ({ data, columns, searchKey }) => {
  const rowPerPage = 5;
  const paginatedData = usePagination(data, rowPerPage);
  console.log(paginatedData);

  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((col) => {
              return <th>{col.headerName}</th>;
            })}
          </tr>
        </thead>̥
        <tbody>
          {paginatedData.data
            .filter((row) => {
              const filteredData = searchKey
                ? columns.some((col) => {
                    return row[col.field]
                      .toString()
                      .toLowerCase()
                      .includes(searchKey);
                  })
                : true;
              return filteredData;
            })
            .map((row) => {
              return (
                <tr>
                  {columns.map((col) => {
                    return <td>{row[col.field]}</td>;
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={() => paginatedData.handdelPageChange(paginatedData.currentPage - 1)}
          disabled={paginatedData.currentPage === 1}>
          prev
        </button>
        <button
          onClick={() => paginatedData.handdelPageChange(paginatedData.currentPage + 1)}
          disabled={paginatedData.currentPage >= data.length / rowPerPage}>
          next
        </button>
      </div>
    </>
  );
};

export default Table;
