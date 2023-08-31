/* eslint-disable no-restricted-globals */
import React from "react";

const Table = ({ task, idss, upp }) => {
  const concon = (id) => {
    if (confirm("Are you Sure ?")) {
      idss(id);
    }
  };
  return (
    <div>
      <div className="row mt-4">
        <div className="col-12">
          <div className="">
            <table className="table">
              <thead>
                <tr>
                  <th>Work</th>
                  <th>Delete</th>
                 </tr>
              </thead>
              <tbody>
                {task.map((item, index) => (
                  <tr key={item.id} className={item.complete ? 'bg-success' : 'bg-secondary'}>
                    <td><input type="checkbox" className="ms-2 me-1" onChange={() => upp(item.id , !item.complete)} checked={item.complete == true}  />{item.task}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => concon(item.id)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>  
                      </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
