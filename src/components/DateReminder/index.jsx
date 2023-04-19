import React, { useState, useEffect } from "react";

function DateReminder() {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("reminderDate", JSON.stringify({ date, month, year }));
  };

  useEffect(() => {
    const reminderDate = JSON.parse(localStorage.getItem("reminderDate"));
    if (reminderDate) {
      const {
        date: storedDate,
        month: storedMonth,
        year: storedYear,
      } = reminderDate;
      const today = new Date();
      const currentDate = today.getDate();
      const currentMonth = today.getMonth() + 1;
      const currentYear = today.getFullYear();

      if (
        currentDate === Number(storedDate) &&
        currentMonth === Number(storedMonth) &&
        currentYear === Number(storedYear)
      ) {
        window.alert("Reminder: Today is the date you set!");
      }
    }
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="number"
          id="date"
          min="1"
          max="31"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label htmlFor="month">Month:</label>
        <input
          type="number"
          id="month"
          min="1"
          max="12"
          value={month}
          onChange={handleMonthChange}
        />
      </div>
      <div>
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          min="2021"
          max="9999"
          value={year}
          onChange={handleYearChange}
        />
      </div>
      <button type="submit">Save Reminder</button>
    </form>
  );
}

export default DateReminder;
