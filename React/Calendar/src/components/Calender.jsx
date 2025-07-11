import React from 'react'
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr"

const Calender = () => {
  return (
    <div className='calendar-app'>
      <div calendar>
        <h1 className='heading text-4xl'>Calendar</h1>
        <div className='navigate-date'>
          <h2 className='month text-3xl'>July</h2>
          <h2 className='year text-3xl'>2025</h2>
          <div className='buttons'>
            <GrCaretPrevious />
            <GrCaretNext />
          </div>
        </div>
        <div className='weekdays'> 
          <span>Sunday</span>
          <span>Monday</span>
          <span>Tuesday</span>
          <span>Wednesday</span>
          <span>Thursday</span>
          <span>Friday</span>
          <span>Saturday</span>
        </div>
        <div className='days'>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
          <span>11</span>
          <span>12</span>
          <span>13</span>
          <span>14</span>
          <span>15</span>
          <span>16</span>
          <span>17</span>
          <span>18</span>
          <span>19</span>
          <span>20</span>
          <span>21</span>
          <span>22</span>
          <span>23</span>
          <span>24</span>
          <span>25</span>
          <span>26</span>
          <span>27</span>
          <span>28</span>
          <span>29</span>
          <span>30</span>
          <span>31</span>
        </div>
      </div>
      <div className='events'>
        <div className='event-popup'>
          <div className='time-input'>
            <div 
              className='event-popup-time'
            >
              Time
            </div>
            <input 
            type='number' 
            name='hours' 
            min={0} 
            max={24} 
            className='hours' 
            />
            <input 
              type='number' 
              name='minutes' 
              min={0} 
              max={60} 
              className='minutes' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Calender
