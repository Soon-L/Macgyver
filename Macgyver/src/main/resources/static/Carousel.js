let currentSlide = 0; // 현재 슬라이드

export function Carousel() {
  const prevBtn = document.querySelector('.prev.btn'); // 이전 버튼
  const nextBtn = document.querySelector('.next.btn'); // 다음 버튼
  const country = document.getElementById('country'); // 국산/외제 선택

  // 초기 화면 국산으로 세팅
  let countryValue = country.value;
  
  
  showCarousel(countryValue); // 캐러셀 화면 전환

  // 국산/외제 선택 시 이미지 전환
  country.addEventListener("click", function () {
    countryValue = this.value; // 선텍한 국가
    currentSlide = 0; // 첫 페이지로 세팅
    showCarousel(countryValue); // 캐러셀 화면전환 
    goToSlide(currentSlide, countryValue); // 캐러셀 좌우 버튼 이벤트
  });
  
  
  

  // 이전 버튼 클릭 이벤트
  prevBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    const modelsCnt = (document.querySelectorAll(`.${countryValue} .model`).length)-1; // 모델수 카운트
    const index = (currentSlide - 1 >= 0) ? currentSlide - 1 : modelsCnt;
	//             슬라이드가 첫페이지가 아니면      이전으로 이동         첫페이지면 맨 마지막으로 이동


    goToSlide(index, countryValue);
  });

  nextBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const modelsCnt = (document.querySelectorAll(`.${countryValue} .model`).length)-1;
	console.log('modelcnt'+modelsCnt);
    const index = (currentSlide + 1 <= modelsCnt) ? currentSlide + 1 : 0;
	//                슬라이드가 마지막 페이지가 아니면      다음 페이지로 이동     마지막이면 처음으로 이동
    
    goToSlide(index, countryValue); // 좌우 버튼 이벤트

  });
}

// 캐러셀 이동 함수
function goToSlide(index, countryValue) {
	
  currentSlide = index; // 현재 페이지
  const container = document.querySelector(`.${countryValue} .slidesContainer`); // 캐러셀 컨테이너
  const models = document.querySelectorAll(`.${countryValue} .model`); // 캐러셀 슬라이드들
  const slideWidth = document.querySelector(`.${countryValue} .model`).offsetWidth; // 슬라이드 넓이

  container.style.transition = 'transform 0.5s ease'; // 이동 애니메이션
  container.style.transform = `translateX(-${slideWidth * currentSlide}px)`; //-600px 이동

  const model = document.querySelector(`.${countryValue} .model`); // 특정 국가의 모델 선택
  if (!model) return;


  // active 클래스 관리
  models.forEach((model, i) => {
	console.log('i ' + i);
	console.log('현재 슬라이드 '+currentSlide);
	console.log('-----------');
    if (i === currentSlide) {
      model.classList.add('active'); // 현제 모델에 active 추가
    }
	else {
      model.classList.remove('active'); // 나머지는 삭제
    }
  });
}



// 캐러셀 화면 전환 함수
function showCarousel(countryValue) {
	const carousels = document.querySelectorAll('.Carousel'); // 국산/외제 전체

	// 국산 <-> 외제 옮겨갈 때 active 초기화
	carousels.forEach(c => {
	  c.classList.add('hidden'); // 일단 모두 숨김

	  // 모든 모델에서 active 제거
	  const activeModel = c.querySelector('.model.active');
	  if (activeModel) {
	    activeModel.classList.remove('active');
	  }

	  // 슬라이드 위치 초기화
	  const container = c.querySelector('.slidesContainer');
	  if (container) {
	    container.style.transform = 'translateX(0)';
	  }
	});
  
  const selected = document.querySelector(`.${countryValue}`); // 사용자가 국산/외제 선택하면
  if (selected) selected.classList.remove('hidden'); // 선택한 나라만 보이기
  

  
}


