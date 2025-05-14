package com.example.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "foreign") // 외제차 종류
public class ForeignCar {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	private Long id; // 번호
	
	private String name; // 차종명
	
	private Integer price; // 가격

}
