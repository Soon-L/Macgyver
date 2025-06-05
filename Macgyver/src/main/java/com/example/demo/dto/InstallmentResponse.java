package com.example.demo.dto;

// 계산 결과를 spring -> js로 넘겨주는 파일
public class InstallmentResponse {
	private String result; // 카푸어 등급
	private String message; // 에러 메세지
	
	
	public InstallmentResponse(String message, String result) {
		this.result = result;
		this.message = message;
	}
	
	public String getResult() {return result;} // 계산한 카푸어 등급 java에서 가져옴
	
	public void setResult(String result) {this.result = result;} // 카푸어 등급 js로 넘기기
	
	
	public String getMessage() {return message;} // 에러 메세지 java에서 가져옴
	
	public void setMessage(String message) {this.message = message;} // 에러 메세지 js로 넘기기

}
