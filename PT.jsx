import React, { useState, useEffect } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { format } from 'date-fns';
import ko from 'date-fns/locale/ko';
import '/src/style/PTReservation.css';

registerLocale('ko', ko);

const PT = () => {
  const [isContainerVisible, setIsContainerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [pointsUsed, setPointsUsed] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [paymentAmount, setPaymentAmount] = useState(35000); // 기본 1명 가격으로 초기 설정
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [otherPaymentMethod, setOtherPaymentMethod] = useState('');
  const paymentDate = new Date(); // 결제일을 자동으로 오늘 날짜로 설정
  const timeSlots = ['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
  const maxPeople = 5;
  const pricePerPerson = 35000; // 인당 가격

  useEffect(() => {
    setPaymentAmount((selectedPeople * pricePerPerson) - discountAmount); // 인원 수 변경 시 결제 금액 업데이트
  }, [selectedPeople, discountAmount]); // selectedPeople 또는 discountAmount 변경 시 업데이트

  useEffect(() => {
    // 간단한 쿠폰 할인 로직 예시
    if (couponCode === 'DISCOUNT10') {
      setDiscountAmount(10000); // 쿠폰 코드가 맞으면 10000원 할인
    } else {
      setDiscountAmount(0); // 쿠폰 코드가 틀리면 할인 없음
    }
  }, [couponCode]);

  const handleCouponChange = (event) => {
    setCouponCode(event.target.value);
  };

  const handlePointsChange = (event) => {
    const points = parseInt(event.target.value, 10) || 0;
    setPointsUsed(points);
    setDiscountAmount(points * 1); // 포인트 1점당 1원 할인
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handlePeopleChange = (number) => {
    setSelectedPeople(number);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleOtherPaymentMethodChange = (event) => {
    setOtherPaymentMethod(event.target.value);
  };

  const handleSubmit = () => {
    const formattedDate = selectedDate ? format(selectedDate, 'yyyy년 MM월 dd일 EEEE', { locale: ko }) : '';
    const formattedPaymentDate = format(paymentDate, 'yyyy년 MM월 dd일');
    console.log(`예약 날짜: ${formattedDate}, 예약 시간: ${selectedTime}, 예약 인원: ${selectedPeople}, 결제 방법: ${paymentMethod}, 기타 결제 방법: ${otherPaymentMethod}, 쿠폰 코드: ${couponCode}, 사용 포인트: ${pointsUsed}점, 할인 금액: ₩${discountAmount}, 최종 결제 금액: ₩${paymentAmount}, 결제일: ${formattedPaymentDate}`);
    // 서버로 예약 정보를 전송하는 로직을 여기에 추가
  };

  return (
    <div>
      <button onClick={() => setIsContainerVisible(prev => !prev)}>
        {isContainerVisible ? '닫기' : '열기'}
      </button>

      {isContainerVisible && (
        <div className="pt-reservation-container">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            locale="ko"
            dateFormat="yyyy년 MM월 dd일"
          />
          <div className="time-slots-container">
            {timeSlots.map(time => (
              <button
                key={time}
                className={`time-slot${selectedTime === time ? ' selected' : ''}`}
                onClick={() => handleTimeSelect(time)}
              >
                {time}
              </button>
            ))}
          </div>
          <div className="people-selector">
            <h3>인원을 선택해주세요</h3>
            <p>{maxPeople}명까지 선택 가능합니다.</p>
            <div className="people-buttons">
              {[...Array(maxPeople)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`people-button${selectedPeople === index + 1 ? ' selected' : ''}`}
                  onClick={() => handlePeopleChange(index + 1)}
                >
                  {index + 1}명
                </button>
              ))}
            </div>
          </div>
          <div className="payment-section">
            <h3>결제 방법 선택</h3>
            <label>
              <input type="radio" value="credit" checked={paymentMethod === 'credit'} onChange={handlePaymentMethodChange} /> 신용카드
            </label>
            <label>
              <input type="radio" value="mobile" checked={paymentMethod === 'mobile'} onChange={handlePaymentMethodChange} /> 휴대폰 결제
            </label>
            <label>
              <input type="radio" value="other" checked={paymentMethod === 'other'} onChange={handlePaymentMethodChange} /> 기타 결제
            </label>
            {paymentMethod === 'other' && (
              <select value={otherPaymentMethod} onChange={handleOtherPaymentMethodChange}>
                <option value="">선택하세요</option>
                <option value="bank">은행 이체</option>
                <option value="voucher">상품권 사용</option>
              </select>
            )}
          </div>
          <div class="input-container">
    <label>
        <input type="text" placeholder=" 쿠폰 코드 입력" value={couponCode} onChange={handleCouponChange} />
        <br></br> 쿠폰 코드
    </label>
    <label>
        <input type="number" placeholder=" 포인트 사용"  onChange={handlePointsChange} />
         <br></br>포인트 사용
         
    </label>
</div>
          <div>현재 결제 금액: ₩{paymentAmount}</div>
          <button onClick={handleSubmit} disabled={!selectedDate || !selectedTime || !selectedPeople || paymentAmount === 0}>
            예약하기
          </button>
        </div>
      )}
    </div>
  );
};

export default PT;