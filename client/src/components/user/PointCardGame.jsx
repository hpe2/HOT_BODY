import React, { useState } from 'react'
import { VscRefresh } from "react-icons/vsc";
import {toast} from 'react-toastify';
import Logo from "/images/logo.png";

const CardGame = ({point}) => {
  const generateWinningCardIndex = () => {
    return Math.floor(Math.random() * 3); // 0부터 2까지의 무작위 인덱스 생성
  };
  const initialCards = [
    { id: 1, isFlipped: false, isWinner: false },
    { id: 2, isFlipped: false, isWinner: false },
    { id: 3, isFlipped: false, isWinner: false }
  ];

  // 무작위로 당첨 번호 생성
  const winningCardIndex = generateWinningCardIndex();
  initialCards[winningCardIndex].isWinner = true;

  const [cards, setCards] = useState(initialCards);
  const [availableAttempts, setAvailableAttempts] = useState(point);//point

  const handleClick = (cardId) => {
    if (availableAttempts < 1) {
      toast.info('포인트가 없어 응모할 수 없습니다.');
    } else if(!cards[cardId - 1].isFlipped) {
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
      

      if (updatedCards[cardId - 1].isWinner === true) {
        setTimeout(() => {
          toast.info('당첨입니다! 축하합니다!');
        }, 500); // 당첨 후 처리
      }
    }
  };

  const resetCards = () => {
    const initialCards = [
      { id: 1, isFlipped: false, isWinner: false },
      { id: 2, isFlipped: false, isWinner: false },
      { id: 3, isFlipped: false, isWinner: false }
    ];
    // 무작위로 당첨 번호 생성
    const winningCardIndex = generateWinningCardIndex();
    initialCards[winningCardIndex].isWinner = true;

    setCards(initialCards);
    setAvailableAttempts(availableAttempts);
  };

  return (
    <div className='cardGame'>
      <div className='cardGame-innerContainer'>
      {cards.map(card => (
        <div
          key={card.id}
          className={`cardWrapper ${card.isFlipped ? 'flipped' : ''}`}
          onClick={() => handleClick(card.id)}
        >
          <div className="card" >
            <div className="back" style={{ backgroundColor: card.isWinner && card.isFlipped ? '#ffcece' : '#fff' }}>{card.isFlipped && (card.isWinner ? '당첨!' : '미당첨')}</div>
            <div className="front">
              <img
                src={Logo}
                alt="logo"
                className="logo"
              />
            </div>
          </div>
        </div>
      ))}
      </div>
      <div className='card-controll'>
        <p className='chance'>남은 시도 횟수: {availableAttempts}</p>
        <button className='retry' onClick={resetCards}><VscRefresh /> 다시 시작하기</button>
      </div>
    </div>
  );
};

export default CardGame;