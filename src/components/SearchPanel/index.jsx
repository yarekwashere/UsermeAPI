import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import st from './styles.module.scss';

export default function SearchPanel({
  handleFullName,
  handleGender,
  handleNationality,
  countries,
  handleClear,
}) {
  const genderOption = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'vanilla', label: 'Indererminate' },
  ];

  console.log(countries);
  const countriesOptions = countries
    ? countries.map((item) => ({
        value: item,
        label: item,
      }))
    : [];
  console.log(countriesOptions);
  return (
    <div className={st.searchPanel}>
      <div className={st.content}>
        <input
          onChange={(e) => handleFullName(e.target.value)}
          className={st.inputName}
          placeholder="Search by full name"
        />
        <Select
          placeholder="Gender"
          onChange={(e) => handleGender(e.value)}
          options={genderOption}
          className={st.genderSelect}
          // onBlur={() => {
          //   debugger;
          // }}
        />
        <Select
          placeholder="Nationality"
          options={countriesOptions}
          className={st.nationalitySelect}
          onChange={(e) => handleNationality(e.value)}
        />
        <div className={st.inputCheck}>
          <input
            className={st.checkbox}
            type="checkbox"
            id="creator"
            name="creator"
          />
          <label>i am creator</label>
        </div>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}

SearchPanel.propTypes = {
  handleFullName: PropTypes.func.isRequired,
};
