import React, { useState } from 'react'
import './Reports.css'

const Reports = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event) => {
    const newDate = new Date(event.target.value);
    setSelectedDate(newDate);
  };

  return (
    <>
      <div>
        <div>
          <p>Reports</p>
        </div>
        <div style={{marginTop:'0.7rem',marginBottom:'0.7rem'}}>
          <h3>Reports</h3>
        </div>
        <div className="select-container">
          <select className="form-select">
            <option defaultValue>Select report type</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="flex-container">
          <div >
            <input
              type="date"
              onChange={handleDateChange}
              placeholder="dd--yyy"
            />
          </div>
          <div>
            <input
              type="date"
              onChange={handleDateChange}
              placeholder="dd--yyy"
            />
          </div>
        </div>
        <div className="flex-container">
          <div>
            <select className="select-data-1">
              <option defaultValue>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div>
            <select className="select-data-2">
              <option defaultValue>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>

        <p style={{ marginBottom: '1rem' }}>Use Date</p>
        <div className="form-check">
          <input
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label style={{ marginLeft: '0.5rem', marginBottom: '1.7rem' }}>
            Collected
          </label>
        </div>
        <div className='textarea-container'>
          <input type='text' />
          <button className="btn">Submit</button>
        </div>
      </div>
    </>
  )
}

export default Reports
