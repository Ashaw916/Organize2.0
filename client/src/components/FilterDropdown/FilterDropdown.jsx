import { uniq } from "lodash";
import React from "react";
//dropdown menu functional component for events page
function FilterDropdown(props) {
  const { data } = props;

  // function getOrganization(data) {
  //   for (let i = 0; i < data.length; i++) {
  //     const array = [];
  //     array.push(data[i].organization);
  //     console.log(array);
  //     return array;
  //   }
  // }

  function getOrganization(data) {
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    };
    data.map((info) => {
      const orgs = [];
      orgs.push(info.organization);
      console.log(orgs);
      const uniqueOrgs = orgs.filter(unique);
      // console.log(uniqueOrgs);
      return uniqueOrgs;
    });
  }

  getOrganization(data);

  return (
    <React.Fragment>
      <div className="">
        <select class="form-control">
          {data.map((data) => (
            <option key={data._id}></option>
          ))}
        </select>
      </div>
    </React.Fragment>
  );
}

export default FilterDropdown;
