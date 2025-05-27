export async function carpoor(salary, model){

		// 예외처리
        if (!model) {
          alert("차종을 선택하세요.");
          return;
        }
    
		// 비동기처리, html에서 정보 가져와서 dto 클래스에 전달
		const res = await fetch("/", { // 반드시 컨트롤러의 postmapping 경로랑 통일
		  method: "POST",
		  headers: {"Content-Type": "application/json"}, // 텍스트의 형식
		  body: JSON.stringify({ salary, model }) // 연봉, 차종을 넘김
		});

		// 계산 결과 
		const data = await res.json();
		document.getElementById("carpoorResult").innerText =
		  data.message || `예상 할부 개월 수: ${data.months}개월`; // dto 클래스에서 계산 결과 가져옴
      
}