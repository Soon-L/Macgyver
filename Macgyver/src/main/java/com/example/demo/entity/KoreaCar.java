package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "korea_car") // 국산차 종류
@Getter
@Setter
public class KoreaCar {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id; // 번호
	
	private String model; // 차종명
	
	private Integer price; // 가격
	
	private String photo; // 사진 링크

}
