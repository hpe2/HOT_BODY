import React, { useState } from 'react';
import './../../../style/pt/PaymentPage.css';
import './../../../style/pt/PaymentDetail.css';

function PaymentDetail({ productDetails }) {
  const detailItems = [
    { label: '제품 상품', value: productDetails.productName },
    { label: '상품 금액', value: `${productDetails.price.toLocaleString()}원` },
    { label: '할인 금액', value: `${productDetails.discount.toLocaleString()}원` },
    { label: '부가세', value: `${productDetails.tax.toLocaleString()}원` },
    { label: '결제 예정 금액', value: `${productDetails.total.toLocaleString()}원` }
  ];

  return (
    <div className="payment-detail">
      {detailItems.map(item => (
        <div key={item.label}>
          <strong>{item.label}:</strong> {item.value}
        </div>
      ))}
    </div>
  );
}

function Subscribe() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const productDetails = {
    productName: "월 구독",
    price: 4900,
    discount: 0,
    tax: 0,
    total: 4900
  };

  const validatePayment = () => {
    if (!cardNumber || cardNumber.length < 16) {
      alert('유효한 카드 번호를 입력해주세요.');
      return false;
    }
    if (!expiryMonth || !expiryYear || expiryMonth.length !== 2 || expiryYear.length !== 2) {
      alert('유효한 만료 날짜를 입력해주세요.');
      return false;
    }
    if (!cvv || cvv.length !== 3) {
      alert('유효한 CVV를 입력해주세요.');
      return false;
    }
    if (!name) {
      alert('이름을 입력해주세요.');
      return false;
    }
    if (!email.includes('@')) {
      alert('유효한 이메일 주소를 입력해주세요.');
      return false;
    }
    return true;
  };

  const handlePayment = () => {
    if (validatePayment()) {
      setPaymentSuccess(true);
    }
  };

  if (paymentSuccess) {
    return <PaymentDetail productDetails={productDetails} />;
  }

  return (
    <div className="payment-container">
      <h1>구독 서비스 결제 페이지</h1>
      <div className="payment-form">
        <input type="text" placeholder="카드 번호" value={cardNumber} onChange={e => setCardNumber(e.target.value)} className="input-field" />
        <input type="text" placeholder="만료 월 (MM)" value={expiryMonth} onChange={e => setExpiryMonth(e.target.value)} className="input-field" />
        <input type="text" placeholder="만료 연도 (YY)" value={expiryYear} onChange={e => setExpiryYear(e.target.value)} className="input-field" />
        <input type="text" placeholder="CVV" value={cvv} onChange={e => setCvv(e.target.value)} className="input-field" />
        <input type="text" placeholder="이름" value={name} onChange={e => setName(e.target.value)} className="input-field" />
        <input type="email" placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} className="input-field" />
        <button onClick={handlePayment} className="payment-button">결제</button>
      </div>
    </div>
  );
}

export default Subscribe;
export { PaymentDetail }; 