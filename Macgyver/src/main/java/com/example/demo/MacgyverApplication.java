package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.service.CarpoorService;


@SpringBootApplication
public class MacgyverApplication {

	public static void main(String[] args) {
		SpringApplication.run(MacgyverApplication.class, args);
	}

//    @Bean
//    CommandLineRunner KRcarInsert(KoreaCarService KRcarService) {
//		return arge -> {
//			KRcarService.saveCar("그랜저(GN7)", 3500);
//			KRcarService.saveCar("쏘렌토(MQ4)", 3900);
//			KRcarService.saveCar("K8", 3700);
//			KRcarService.saveCar("펠리세이드", 4200);
//			KRcarService.saveCar("스타리아 라운지", 4000);
//			KRcarService.saveCar("GV70", 5100);
//		};
//	}
//    
//    
//    @Bean
//    CommandLineRunner ForeignCarInsert(ForeignCarService ForeignCarService) {
//		return arge -> {
//			ForeignCarService.saveCar("E-클래스", 3600);
//			ForeignCarService.saveCar("5시리즈", 3500);
//			ForeignCarService.saveCar("C-클래스", 2600);
//			ForeignCarService.saveCar("3시리즈", 3000);
//			ForeignCarService.saveCar("A6", 3200);
//			ForeignCarService.saveCar("A4", 2800);
//			ForeignCarService.saveCar("마칸", 5500);
//			ForeignCarService.saveCar("모델3", 4000);
//			ForeignCarService.saveCar("골프", 1800);
//			ForeignCarService.saveCar("ES", 3500);
//		};
//	}
//    
//    @Bean
//    CommandLineRunner CarInsert(CarpoorService carpoorService) {
//		return arge -> {
//			carpoorService.saveModel("그랜저(GN7)", 3500);
//			carpoorService.saveModel("쏘렌토(MQ4)", 3900);
//			carpoorService.saveModel("K8", 3700);
//			carpoorService.saveModel("펠리세이드", 4200);
//			carpoorService.saveModel("스타리아 라운지", 4000);
//			carpoorService.saveModel("GV70", 5100);
//			carpoorService.saveModel("E-클래스", 3600);
//			carpoorService.saveModel("5시리즈", 3500);
//			carpoorService.saveModel("C-클래스", 2600);
//			carpoorService.saveModel("3시리즈", 3000);
//			carpoorService.saveModel("A6", 3200);
//			carpoorService.saveModel("A4", 2800);
//			carpoorService.saveModel("마칸", 5500);
//			carpoorService.saveModel("모델3", 4000);
//			carpoorService.saveModel("골프", 1800);
//			carpoorService.saveModel("ES", 3500); // 모델명과 sql 예약어랑 겹침 -> select에서 제외
//		};
//	}

}
