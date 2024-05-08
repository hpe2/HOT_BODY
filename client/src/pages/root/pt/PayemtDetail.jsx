import React from 'react';
import '/src/style/PaymentDetail.css'; // 별도의 스타일 파일을 포함

function PaymentDetail() {
  const productDetails = {
    productName: "제품 상품",
    price: 4900,
    discount: 0,
    tax: 0,
    total: 4900
  };

  const detailItems = [
    { label: '제품 상품', value: productDetails.productName },
    { label: '상품 금액', value: `${productDetails.price.toLocaleString()}원` },
    { label: '할인 금액', value: `${productDetails.discount.toLocaleString()}원` },
    { label: '부가세', value: `${productDetails.tax.toLocaleString()}원` },
    { label: '결제 예정 금액', value: `${productDetails.total.toLocaleString()}원` }
  ];

  return (
    <div className="payment-detail-container">
      <h2>결제 정보</h2>
      <div className="payment-detail-body">
        {detailItems.map(item => (
          <div className="detail-item" key={item.label}>
            <span className="item-label">{item.label}</span>
            <span className="item-value">{item.value}</span>
          </div>
        ))}
      </div>
      <button className="payment-button">4,900원 결제하기</button>
    </div>
  );
}

export default PaymentDetail;