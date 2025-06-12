package com.example.demo;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CarPriceRequest;
import com.example.demo.dto.InstallmentResponse;
import com.example.demo.service.ForeignCarService;
import com.example.demo.service.KoreaCarService;


@RestController
@RequestMapping("")
public class CarPoorController {

    private final KoreaCarService KRCarService;
    private final ForeignCarService foreignCarService;

    public CarPoorController(KoreaCarService KRCarService, ForeignCarService foreignCarService) {
		this.KRCarService = KRCarService;
		this.foreignCarService = foreignCarService;

    }

    @PostMapping("/calculate") // 반드시 carpoor.js 의 fetch 경로랑 통일
    public ResponseEntity<InstallmentResponse> calculate(@RequestBody CarPriceRequest req) { // js에서 받은 연봉, 차종 정보 spring으로 넘기는 dto 클래스
        Optional<Integer> KRCarPrice = KRCarService.getCarPriceByModel(req.getModel()); // 국산 차종과 일치하는 컬럼 찾기
        Optional<Integer> foreignCarPrice = foreignCarService.getCarPriceByModel(req.getModel()); // 외제 차종과 일치하는 컬럼 찾기


        // 예외처리
        if (KRCarPrice.isEmpty() && foreignCarPrice.isEmpty()) {
            return ResponseEntity.badRequest().body(new InstallmentResponse("차종 정보를 찾을 수 없습니다.", null));
        }

        
        int price = 0; // 모델의 가격
        
        
        // 국산 / 외제 테이블 중에 선택
        if(req.getType().equals("koreaCar")) {
        	price = KRCarPrice.get();
        }
        else if(req.getType().equals("foreignCar")) {
        	price = foreignCarPrice.get();
        }
        
//        System.out.println(req.getType());
//        System.out.println(req.getModel());
//        System.out.println(req.getSalary());
//        System.out.println(price);
        
        
        int MonthSalary = 0; // 월급
        
        // 세금 계산
        if(req.getSalary()<=1200) {
        	MonthSalary = req.getSalary() - (int)Math.ceil(req.getSalary() * 6 / 100); // ~1200 6% 세금
        }
        else if(req.getSalary()>1200 || req.getSalary()<=4600 ) {
        	MonthSalary = req.getSalary() - (int)Math.ceil(req.getSalary() * 15 / 100); // 1201~4600 15% 세금
        }
        else if(req.getSalary()>4600 || req.getSalary()<=8800 ) {
        	MonthSalary = req.getSalary() - (int)Math.ceil(req.getSalary() * 24 / 100); // 4601~8800 24% 세금
        }
        else if(req.getSalary()>8800 || req.getSalary()<=15000 ) {
        	MonthSalary = req.getSalary() - (int)Math.ceil(req.getSalary() * 35 / 100); // 8801~15000 35% 세금
        }
        else if(req.getSalary()>15000 ) {
        	MonthSalary = req.getSalary() - (int)Math.ceil(req.getSalary() * 38 / 100); // 15001~ 38% 세금
        }
        
        
        int InstallmentAmount = ((int) Math.ceil((price) / 48 + (int) Math.ceil(price * 20 / 100))); //이자 합친 한달 할부금액
        int salaryPercent = (int) Math.ceil(InstallmentAmount * 100 / MonthSalary); // 월급에서 차지하는 비율
        String result = null; // 카푸어 등급
        
//        System.out.println("salary: " + req.getSalary());
//        System.out.println("model: " + req.getModel());
//        System.out.println(salaryPercent);
        
        // 카푸어 등급들
        if(salaryPercent>=90) {
        	result = "아래를 확인하세요🔽";         
        }
        else if(salaryPercent<90 && salaryPercent>=80) {
        	result = "차에서 살아라";
        }
        else if(salaryPercent<80 && salaryPercent>=70) {
        	result = "무사고 기도메타";
        }
        else if(salaryPercent<70 && salaryPercent>=60) {
        	result = "1일 1식하자";
        }
        else if(salaryPercent<60 && salaryPercent>=50) {
        	result = "저축 포기해라";
        }
        else if(salaryPercent<50 && salaryPercent>=40) {
        	result = "여가생활 포기해라";
        }
        else if(salaryPercent<40 && salaryPercent>=30) {
        	result = "일상생활 마지노선";
        }
        else if(salaryPercent<30 && salaryPercent>=20) {
        	result = "카푸어 탈락";
        }
        else if(salaryPercent<20) {
        	result = "기만자";
        }

        return ResponseEntity.ok(new InstallmentResponse(null, result)); // 계산 결과 dto 파일로 넘김
    }
}

