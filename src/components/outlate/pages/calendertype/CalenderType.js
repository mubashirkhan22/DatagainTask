import React from 'react'
import './Calender.css'
import { AiOutlineRight } from 'react-icons/ai';
import { AiOutlineLeft } from 'react-icons/ai';
import { useState } from 'react';
import { useRef } from 'react';

function Clender() {
    const inputRef = useRef(null)
    const [event, setEvent] = useState('')
    const [data, setData] = useState('')
    const handleChage = (e) => {
        setData(e.target.value)
    }
    const handleSubmit = () => {
        console.log(event);
        setEvent(data)
        inputRef.current.value = ''
    }
    return (
        <>
            
            <div className="calendar-month">
            <h5>Calender Type</h5>
                <div className="inputs">
                    <input
                        type="text"
                        label="Calender Type"
                        placeholder='Enter eventname'
                        onChange={handleChage}
                        ref={inputRef}
                    />
                    <input
                        type="date"
                    />
                    <button onClick={handleSubmit}>Submit</button>
                </div>

                <section className="calendar-month-header">

                    <div
                        id="selected-month"
                        className="calendar-month-header-selected-month">
                        September 2023
                    </div>

                    <div className="calendar-month-header-selectors">
                        <span id="previous-month-selector"></span>
                        <div className='day-with-buttons'>
                            <button id="present-month-selector">today </button>
                            <AiOutlineLeft className='arrow-button' />
                            <AiOutlineRight className='arrow-button' />
                        </div>

                        <span id="next-month-selector"></span>
                    </div>
                </section>
                <div className="all-days-of-month">
                    <ol
                        id="days-of-week"
                        className="day-of-week" >
                        <li>Mon</li>
                        <li>Tue</li>
                        <li>Wed</li>
                        <li>Thu</li>
                        <li>Fri</li>
                        <li>Sat</li>
                        <li>Sun</li>
                    </ol>

                    <ol id="calendar-days" className="days-grid">
                        <li className="calendar-day" id='inactive'>
                            <span>28</span>{event}
                        </li>
                        <li className="calendar-day" id='inactive'>
                            <span>29</span>
                        </li>
                        <li className="calendar-day" id='inactive'>
                            <span>30</span>
                        </li>
                        <li className="calendar-day" id='inactive'>
                            <span>31</span>
                        </li>
                        <li className="calendar-day">
                            <span>1</span>
                        </li>
                        <li className="calendar-day">
                            <span>2</span><p id='dsm'>DSM</p>
                        </li>
                        <li className="calendar-day" id='get-together'>
                            <span>3</span><p id='gtg'>Get together</p>
                        </li>
                        <li className="calendar-day">
                            <span>4</span>
                        </li>
                        <li className="calendar-day">
                            <span>5</span>
                        </li>
                        <li className="calendar-day">
                            <span>6</span><p id='Kedarnath'>Kedarnath</p>
                        </li>
                        <li className="calendar-day">
                            <span>7</span><p id='hbd'>Happy bday Akash</p>
                        </li>
                        <li className="calendar-day">
                            <span>8</span><p id='mumbai'>Visit to Mumbai</p>
                        </li>
                        <li className="calendar-day">
                            <span>9</span><p id='preparation'>dalalo preparation</p>
                            <p id='office'>Office</p>
                        </li>
                        <li className="calendar-day">
                            <span>10</span>
                        </li>
                        <li className="calendar-day">
                            <span>11</span>
                        </li>
                        <li className="calendar-day">
                            <span>12</span>
                        </li>
                        <li className="calendar-day">
                            <span>13</span>
                        </li>
                        <li className="calendar-day">
                            <span>14</span>
                        </li>
                        <li className="calendar-day">
                            <span>15</span>
                        </li>
                        <li className="calendar-day">
                            <span>16</span>
                        </li>
                        <li className="calendar-day">
                            <span>17</span>
                        </li>
                        <li className="calendar-day">
                            <span>18</span>
                        </li>
                        <li className="calendar-day">
                            <span>19</span>
                        </li>
                        <li className="calendar-day">
                            <span>20</span>
                        </li>
                        <li className="calendar-day">
                            <span>21</span>
                        </li>
                        <li className="calendar-day">
                            <span>22</span>
                        </li>
                        <li className="calendar-day">
                            <span>23</span><p></p>
                        </li>
                        <li className="calendar-day">
                            <span>24</span>
                        </li>
                        <li className="calendar-day">
                            <span>25</span>
                        </li>
                        <li className="calendar-day">
                            <span>26</span>
                        </li>
                        <li className="calendar-day">
                            <span>27</span>
                        </li>
                        <li className="calendar-day">
                            <span>28</span>
                        </li>
                        <li className="calendar-day">
                            <span>29</span>
                        </li>
                        <li className="calendar-day">
                            <span>30</span>
                        </li>
                        <li className="calendar-day" id='inactive'>
                            <span>1</span>
                        </li>
                        <li className="calendar-day" id='inactive'>
                            <span>2</span>
                        </li>
                        <li className="calendar-day" id='inactive'>
                            <span>3</span>
                        </li>
                        <li className="calendar-day" id='inactive'>
                            <span>4</span>
                        </li>
                        <li className="calendar-day" id='inactive'>
                            <span>5</span>
                        </li>
                        <li className="calendar-day" id='inactive'>
                            <span>6</span>
                        </li>
                        <li className="calendar-day" id='inactive'>
                            <span>7</span>
                        </li>
                        <li className="calendar-day" id='inactive'>
                            <span>8</span>
                        </li>
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Clender


