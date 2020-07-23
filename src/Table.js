import React from "react";
import numeral from "numeral";

import "./styles/Table.css";

function Table({ countries }) {
  return (
    <div className="table">
      {countries.map(({ country, cases }, id) => (
        <tr key={id}>
          <td>{country}</td>
          <td>
            <strong>{numeral(cases).format("0,0")}</strong>
          </td>
        </tr>
      ))}
    </div>
  );
}

export default Table;
