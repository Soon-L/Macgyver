export async function carpoor(salary, model, type){

		// 차량 선택 확인
		if (!model) {
		  alert("차종을 선택하세요.");
		  return;
		}
		
		
		// 비동기처리, html에서 정보 가져와서 dto 클래스에 전달
		const res = await fetch("/calculate", { // 반드시 컨트롤러의 postmapping 경로랑 통일
		  method: "POST",
		  headers: {"Content-Type": "application/json"}, // 텍스트의 형식
		  body: JSON.stringify({ salary, model, type }) // 연봉, 차종을 넘김
		})
		

		
		// 계산 결과 
		const data = await res.json();
		// console.log(data.result);
		document.getElementById("carpoorResult").innerText =
		  data.message || `${data.result}`; // dto 클래스에서 계산 결과 가져옴
      
}