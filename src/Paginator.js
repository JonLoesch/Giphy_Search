import React from "react";

export function Paginator(props) {
  return (
    <div className="paginator-container">
      <div className="paginator-item">Page</div>
      {props.currentPage !== 0 && (
        <div className="paginator-item">
          <button
            onClick={event => {
              props.setCurrentPage(0);
            }}
          >
            1
          </button>
        </div>
      )}
      {props.currentPage > 2 && (<> ... </>)}
      {props.currentPage > 1 && (
        <div className="paginator-item">
          <button
            onClick={event => {
              props.setCurrentPage(props.currentPage - 1);
            }}
          >
            {props.currentPage}
          </button>
        </div>
      )}

      <div className="paginator-item">{props.currentPage + 1}</div>

      <div className="paginator-item">
        <button
          onClick={event => {
            props.setCurrentPage(props.currentPage + 1);
          }}
        >
          {props.currentPage + 2}
        </button>
      </div>
    </div>
  );
}
