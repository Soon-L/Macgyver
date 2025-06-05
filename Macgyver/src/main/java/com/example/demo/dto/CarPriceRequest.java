package com.example.demo.dto;

// html에서 입력한 정보를 js -> spring으로 넘겨주는 클래스
public class CarPriceRequest {
	
	private int salary; // 연봉
	private String model; // 모델
	private String type; // 국산, 외제

	
	public String getModel() {return model;} // 선택한 모델 js에서 가져옴
	
	public void setModel(String model) {this.model = model;} // 선택한 모델 java로 넘기기
	
	
	public int getSalary() {return salary;} // 입력한 연봉 js에서 가져옴
	
	public void setSalary(int salary) {this.salary = salary;} // 입력한 연봉 java로 넘기기
	
	
	public String getType() {return type;} // 선택한 국산/외제 js에서 가져옴
	
	public void setType(String type) {this.type = type;} // 선택한 국산/외제 java로 넘기기
	

}
