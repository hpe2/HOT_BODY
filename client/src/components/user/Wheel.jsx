import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import {toast} from 'react-toastify';


const data = [
  { option: 'PT 무료이용권', optionSize: 1, style:{ backgroundColor : '#ffdddb' ,  textColor : "#A40000"  } },
  { option: '다음 기회에', optionSize: 3},
  { option: '10 point', optionSize: 2},
  { option: '10% 쿠폰', optionSize: 2},
  { option: '20% 쿠폰', optionSize: 2},
  { option: '15% 쿠폰', optionSize: 1},
  { option: '50% 쿠폰', optionSize: 1},
]

export default () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  
  const handleSpinClick = (e) => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <div className='wheel'>
      <Wheel
        perpendicularText = {false}
        mustStartSpinning={mustSpin}
        spinDuration={0.3}
        outerBorderWidth = {16}
        outerBorderColor={['#A40000']}
        radiusLineColor = {['#A40000']}
        radiusLineWidth	= {1} 
        innerBorderColor = {['#A40000']}
        innerBorderWidth = {50}
        fontSize={19}
        textColors={['#A40000']}
        fontWeight={'normal'}
        textDistance = {64}
        prizeNumber = {1}
        backgroundColors = { [ '#fff' ] } 
        data={data}

        onStopSpinning={(e) => {
          setMustSpin(false);
          toast.info(`${data[prizeNumber].option} 당첨!`)
        }}
      />
      <button className='modal-content-button' onClick={handleSpinClick}>룰렛 돌리기</button>
    </div>
  )
}