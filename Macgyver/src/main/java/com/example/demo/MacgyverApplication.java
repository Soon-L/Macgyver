package com.example.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.example.demo.service.CarpoorService;
import com.example.demo.service.ForeignCarService;
import com.example.demo.service.KoreaCarService;
import io.github.cdimascio.dotenv.Dotenv;


@SpringBootApplication

public class MacgyverApplication {

	public static void main(String[] args) {
		// .env 파일 로드
        Dotenv dotenv = Dotenv.configure()
			.directory("Macgyver")
            .ignoreIfMissing() // .env 파일이 없어도 예외 발생 안 함
            .load();

        // .env의 키-값 쌍을 시스템 속성으로 설정
        dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
		SpringApplication.run(MacgyverApplication.class, args);
	}

//    @Bean
//    CommandLineRunner KRcarInsert(KoreaCarService KRcarService) {
//		return arge -> {
//			KRcarService.saveCar("그랜저(GN7)", 5300, "https://autoimg.danawa.com/photo/4188/model_360.png");
//			KRcarService.saveCar("쏘렌토(MQ4)", 4600, "https://cloud.getcha.io/file/image/20240306/170969106746zq2MXJkV.png");
//			KRcarService.saveCar("K8", 5000, "https://cloud.getcha.io/file/image/20240314/1710392459nnvIhn3Es7.png");
//			KRcarService.saveCar("펠리세이드", 6000, "https://cloud.getcha.io/file/image/20241227/1735261394q6SmZFIDeV.png");
//			KRcarService.saveCar("GV70", 6100, "https://cloud.getcha.io/file/image/20240508/1715138161mNiqqvN2VL.png");
//		};
//	}
//    
//    
//    @Bean
//    CommandLineRunner ForeignCarInsert(ForeignCarService ForeignCarService) {
//		return arge -> {
//			ForeignCarService.saveCar("E-클래스", 12500, "https://autoimg.danawa.com/photo/3331/model_360.png");
//			ForeignCarService.saveCar("5시리즈", 9100, "https://dr8tj8nx72l25.cloudfront.net/new-car/series/5SERIES.png");
//			ForeignCarService.saveCar("C-클래스", 6700, "https://dr8tj8nx72l25.cloudfront.net/new-car/series/A-CLASS.png");
//			ForeignCarService.saveCar("3시리즈", 8800, "https://d2os43s8q80b97.cloudfront.net/next-s3-uploads/b7944da3-532b-4ba9-9fc7-96fe62401561/img1731985325675.png");
//			ForeignCarService.saveCar("A6", 8300, "https://img.getcha.io/file/image/20211118/16372120300TTuZON2fW.png");
//			ForeignCarService.saveCar("A4", 6700, "https://cloud.getcha.io/file/image/20240308/1709863529LDNqltulzD.png");
//			ForeignCarService.saveCar("마칸", 10800, "https://cloud.getcha.io/file/image/20210721/1626853324vDIs524Xmp.png");
//			ForeignCarService.saveCar("모델3", 7000, "https://cloud.getcha.io/file/image/20240404/171219860898Z2EB31sh.png");
//
//		};
//	}
    
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
