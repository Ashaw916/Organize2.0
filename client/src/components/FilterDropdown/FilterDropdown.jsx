import React from "react";

function FilterDropdown(props) {
  const { data } = props;

  //   console.log(data);

  return (
    <React.Fragment>
      <div className="">
        <select class="form-control">
          {data.map((data) => (
            <option key={data._id}>{data.organization}</option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
}

export default FilterDropdown;
