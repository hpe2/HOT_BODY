import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import ko from "date-fns/locale/ko";
import "./../../../style/pt/PTReservation.css";

registerLocale("ko", ko);

const PTReservation = ({ price, setIsOpenReservation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const timeSlots = [
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    const formattedDate = selectedDate
      ? format(selectedDate, "yyyy년 MM월 dd일 EEEE", { locale: ko })
      : "";
    console.log(
      `예약 날짜: ${formattedDate}, 예약 시간: ${selectedTime}, 최종 결제 금액: ₩${price}, 결제일: ${formattedDate}`
    );
    // 서버로 예약 정보를 전송하는 로직을 여기에 추가
  };

  return (
    <div className="pt-reservation-wrap">
      <div className="pt-reservation-container">
        <button className='pt-reservation-close' onClick={() => setIsOpenReservation(false)}>x</button>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          locale="ko"
          dateFormat="yyyy년 MM월 dd일"
        />
        <div className="time-slots-container">
          {timeSlots.map((time) => (
            <button
              key={time}
              className={`time-slot${selectedTime === time ? " selected" : ""}`}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </button>
          ))}
        </div>
        
        <p className='pt-reservation-price'>결제 금액: <strong className='point-color'>{price}</strong> 원(won)</p>
        <p className="pt-reservation-notice">* 결제는 트레이너가 예약을 수락하는 시점에 처리됩니다.</p>        
        <button
          className='pt-reservation-button'
          onClick={handleSubmit}
          disabled={!selectedDate || !selectedTime}
        >
          예약하기
        </button>
      </div>
    </div>
  );
};

export default PTReservation;
