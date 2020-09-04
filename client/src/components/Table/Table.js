import React from "react";
import "./Table.css";

function Table() {
  return (
    <>
      <div className="card col-12">
        <div className="card-body">
          <h4 className="card-title">I am a Table component</h4>
          <table className="table table-sm">
            <thead>
              <tr>
                <th scope="col">Organization Name</th>
                <th scope="col">Contact Email</th>
                <th scope="col">Website</th>
                <th scope="col">FB</th>
                <th scope="col">Instagram</th>
                <th scope="col">Twitter</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Organize2.0</th>
                <td>organizeapp@email.com</td>
                <td>www.organizetest.com</td>
                <td>http://facebook/organize.com</td>
                <td>@organizetestapp</td>
                <td>@organizetestapp</td>
              </tr>
              <tr>
                <th scope="row">Organize2.0</th>
                <td>organizeapp@email.com</td>
                <td>www.organizetest.com</td>
                <td>http://facebook/organize.com</td>
                <td>@organizetestapp</td>
                <td>@organizetestapp</td>
              </tr>
              <tr>
                <th scope="row">Organize2.0</th>
                <td>organizeapp@email.com</td>
                <td>www.organizetest.com</td>
                <td>http://facebook/organize.com</td>
                <td>@organizetestapp</td>
                <td>@organizetestapp</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Table;
