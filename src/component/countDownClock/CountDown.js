import React from "react";

const CountDown = ({
  current,
  dateTimeTo,
  day,
  setDay,
  hour,
  setHour,
  min,
  setMin,
  sec,
  setSec,
}) => {
  const countDown = () => {
    const timeGap = dateTimeTo - current;

    const perSec = 1000;
    const perMin = perSec * 60;
    const perHour = perMin * 60;
    const perDay = perHour * 24;

    let dayNumber = Math.floor(timeGap / perDay);
    let hourNumber = Math.floor((timeGap % perDay) / perHour);
    let minNumber = Math.floor((timeGap % perHour) / perMin);
    let secNumber = Math.floor((timeGap % perMin) / perSec);

    dayNumber = dayNumber < 10 ? "0" + dayNumber : dayNumber;
    hourNumber = hourNumber < 10 ? "0" + hourNumber : hourNumber;
    minNumber = minNumber < 10 ? "0" + minNumber : minNumber;
    secNumber = secNumber < 10 ? "0" + secNumber : secNumber;

    setDay(dayNumber);
    setHour(hourNumber);
    setMin(minNumber);
    setSec(secNumber);
  };

  if (day >= 0) {
    setTimeout(countDown, 1000);
  }

  return (
    <div className="clock ">
      <div className="item-clock">
        <div className="p-container">
          <p>DAY</p>
          <p>{day}</p>
        </div>
      </div>
      <div className="item-clock">
        <div className="p-container">
          <p>HOUR</p>
          <p>{hour}</p>
        </div>
      </div>
      <div className="item-clock">
        <div className="p-container">
          <p>MIN</p>
          <p>{min}</p>
        </div>
      </div>
      <div className="item-clock">
        <div className="p-container">
          <p>SEC</p>
          <p>{sec}</p>
        </div>
      </div>
    </div>
  );
};

export default CountDown;
