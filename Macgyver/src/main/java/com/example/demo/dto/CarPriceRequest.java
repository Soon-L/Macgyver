package com.example.demo.dto;

// html에서 입력한 정보를 js -> spring으로 넘겨주는 클래스
public class CarPriceRequest {
	
	private int salary; // 연봉
	private String model; // 차종

	
	public String getModel() {return model;} // 차종명 return
	
	public void setmodel(String model) {this.model = model;} // 입력한 차종명 넘기기
	
	
	public int getSalary() {return salary;}
	
	public void setSalary(int salary) {this.salary = salary;}
	

}
