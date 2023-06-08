import React from "react";
import "./Select.scss";

const Select = ({ options, onChange, defaultOption, defaultValue }) => {
  return (
    <>
      <select
        className="select-option"
        onChange={onChange}
        value={defaultValue}
      >
        {<option value="">{defaultOption}</option>}
        {options.map(({ name, id }) => (
          <option
            key={name + id}
            value={id}
            data-name={name.split(" ").join("-").toLowerCase()}
          >
            {name}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
