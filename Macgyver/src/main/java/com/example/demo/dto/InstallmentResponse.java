package com.example.demo.dto;

// 계산 결과를 spring -> js로 넘겨주는 파일
public class InstallmentResponse {
	private int months;
	private String message;
	
	
	public InstallmentResponse(int months, String message) {
		this.months = months;
		this.message = message;
	}
	
	public int getMonths() {return months;} // 차종명 return
	
	public void setMonths(int months) {this.months = months;} // 입력한 차종명 넘기기
	
	
	public String getMessage() {return message;}
	
	public void setMessage(String message) {this.message = message;}

}
