import {BMI} from './BMI.js'; // BMI 계산기
import {BMR} from './BMR.js'; // BMR 계산기
import {calorieConsumptionMeters} from './calorieConsumptionMeters.js'; // 칼로리 계산기
import {childbearingPeriod} from './childbearingPeriod.js'; // 가임기 계산기
import {normalWeight} from './normalWeight.js'; // 정상체중 계산기
import {targetHeartRate} from './targetHeartRate.js'; // 목표 심박수 계산기

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BMI

const BMIModalOpenButton = document.getElementById('BMIModalOpenButton');
const BMIModalCloseButton = document.getElementById('BMIModalCloseButton');
const BMIModal = document.getElementById('BMIModal');

// 열기
BMIModalOpenButton.addEventListener('click', () => {
    BMIModal.classList.remove('hidden');
  });

// 닫기
BMIModalCloseButton.addEventListener('click', () => {
    BMIModal.classList.add('hidden');
  });



  


  // BMI 계산 버튼 이벤트
  document.getElementById('BMICalculateButton').addEventListener('click', BMI)





//////////////////////////////////////////////////////////////////////////////////////////////////////////
// BMR


  const BMRModalOpenButton = document.getElementById('BMRModalOpenButton');
  const BMRModalCloseButton = document.getElementById('BMRModalCloseButton');
  const BMRModal = document.getElementById('BMRModal');
  
  // 열기
  BMRModalOpenButton.addEventListener('click', () => {
      BMRModal.classList.remove('hidden');
    });
  
    // 닫기
    BMRModalCloseButton.addEventListener('click', () => {
      BMRModal.classList.add('hidden');
    });

    document.getElementById('BMRCalculateButton').addEventListener('click', BMR)





  ////////////////////////////////////////////////////////////////////////////////////
  // 칼로리 계산기

    const CalorieModalOpenButton = document.getElementById('CalorieModalOpenButton');
    const CalorieModalCloseButton = document.getElementById('CalorieModalCloseButton');
    const CalorieModal = document.getElementById('CalorieModal');
    
    // 열기
    CalorieModalOpenButton.addEventListener('click', () => {
      CalorieModal.classList.remove('hidden');
      });
    
      // 닫기
      CalorieModalCloseButton.addEventListener('click', () => {
        CalorieModal.classList.add('hidden');
      });

      document.getElementById('CalorieCalculateButton').addEventListener('click', calorieConsumptionMeters)




////////////////////////////////////////////////////////////////////////////////////////////////
// 가임기 계산기

const ChildbearingPeriodModalOpenButton = document.getElementById('ChildbearingPeriodModalOpenButton');
const ChildbearingPeriodModalCloseButton = document.getElementById('ChildbearingPeriodModalCloseButton');
const ChildbearingPeriodModal = document.getElementById('ChildbearingPeriodModal');

// 열기
ChildbearingPeriodModalOpenButton.addEventListener('click', () => {
  ChildbearingPeriodModal.classList.remove('hidden');
  });

  // 닫기
  ChildbearingPeriodModalCloseButton.addEventListener('click', () => {
    ChildbearingPeriodModal.classList.add('hidden');
  });

  document.getElementById('ChildbearingPeriodCalculateButton').addEventListener('click', childbearingPeriod);





//////////////////////////////////////////////////////////////////////////////////////////////
// 정상체중 계산기

const NormalWeightModalOpenButton = document.getElementById('NormalWeightModalOpenButton');
const NormalWeightModalCloseButton = document.getElementById('NormalWeightModalCloseButton');
const NormalWeightModal = document.getElementById('NormalWeightModal');

// 열기
NormalWeightModalOpenButton.addEventListener('click', () => {
  NormalWeightModal.classList.remove('hidden');
  });

  // 닫기
  NormalWeightModalCloseButton.addEventListener('click', () => {
    NormalWeightModal.classList.add('hidden');
  });

  // 정상 체중 계산 버튼 이벤트
  document.getElementById('NormalWeightCalculateButton').addEventListener('click', normalWeight);





/////////////////////////////////////////////////////////////////////////////////////////
// 목표 심박수 계산기
const TargetHeartRateModalOpenButton = document.getElementById('TargetHeartRateModalOpenButton');
const TargetHeartRateModalCloseButton = document.getElementById('TargetHeartRateModalCloseButton');
const TargetHeartRateModal = document.getElementById('TargetHeartRateModal');

// 열기
TargetHeartRateModalOpenButton.addEventListener('click', () => {
  TargetHeartRateModal.classList.remove('hidden');
  });

  // 닫기
  TargetHeartRateModalCloseButton.addEventListener('click', () => {
    TargetHeartRateModal.classList.add('hidden');
  });

  // 목표 심박수수 계산 버튼 이벤트
  document.getElementById('TargetHeartRateCalculateButton').addEventListener('click', targetHeartRate);
    