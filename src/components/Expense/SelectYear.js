import React from 'react';

const SelectYear = (props) => {
    const { selected, selectedYearChanges } = props
    return (
        <div className="select-year d-flex justify-content-between">
            <strong className="filter-Text">
                <label>Filter</label>
            </strong>
            <select value={selected} onChange={selectedYearChanges} className="mb-2">
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
            </select>
        </div>
    );
};

export default SelectYear;