import React, { useState } from 'react'
import {toast} from 'react-toastify';


const CardGame = () => {
  const [cards, setCards] = useState([
    { id: 1, isFlipped: false, isWinner: false },
    { id: 2, isFlipped: false, isWinner: false },
    { id: 3, isFlipped: false, isWinner: true } // 한 장은 무조건 당첨으로 설정
  ]);
  const [availableAttempts, setAvailableAttempts] = useState(10);

  const handleClick = (cardId) => {
    if (!cards[cardId - 1].isFlipped) {
      const updatedCards = cards.map(card => {
        if (card.id === cardId) {
          return {
            ...card,
            isFlipped: true
          };
        }
        return card;
      });
      setCards(updatedCards);
      setAvailableAttempts(availableAttempts - 1);

      if (updatedCards[cardId - 1].isWinner) {
        setTimeout(() => {
          alert('당첨입니다! 축하합니다!');
        }, 1000); // 애니메이션이 끝난 후 1초 후에 알림 표시
      }
    }
  };

  const resetCards = () => {
    const initialCards = [
      { id: 1, isFlipped: false, isWinner: false },
      { id: 2, isFlipped: false, isWinner: false },
      { id: 3, isFlipped: false, isWinner: true }
    ];
    setCards(initialCards);
    setAvailableAttempts(availableAttempts);
  };

  return (
    <div className='cardGame'>
      <div className='cardGame-innerContainer'>
      {cards.map(card => (
        <div
          key={card.id}
          className={`card ${card.isFlipped ? 'flipped' : ''}`}
          onClick={() => handleClick(card.id)}
        >
          <div className="card-inner">
            <div className="card-back"></div>
            <div className="card-front">{card.isFlipped && (card.isWinner ? '당첨!' : '미당첨')}</div>
          </div>
        </div>
      ))}
      </div>
      <div className='card-controll'>
        <p className='chance'>남은 시도 횟수: {availableAttempts}</p>
        <button className='retry' onClick={resetCards}>다시 시작하기</button>
      </div>
    </div>
  );
};

export default CardGame;