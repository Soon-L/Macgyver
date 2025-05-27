package com.example.demo;

import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.CarPriceRequest;
import com.example.demo.dto.InstallmentResponse;
import com.example.demo.service.CarpoorService;


@RestController
@RequestMapping("")
public class CarPoorController {

    private final CarpoorService carpoorService;

    public CarPoorController(CarpoorService carpoorService) {
        this.carpoorService = carpoorService;

    }

    @PostMapping("/") // 반드시 carpoor.js 의 fetch 경로랑 통일
    public ResponseEntity<InstallmentResponse> calculate(@RequestBody CarPriceRequest req) { // js에서 받은 연봉, 차종 정보 spring으로 넘기는 dto 클래스
        Optional<Integer> priceOpt = carpoorService.getCarPriceByModel(req.getModel()); // carpoor에서 모델명 찾기


        // 예외처리
        if (priceOpt.isEmpty()) {
            return ResponseEntity.badRequest().body(new InstallmentResponse(0, "차종 정보를 찾을 수 없습니다."));
        }

        // 
        int price = priceOpt.get(); // 모델의 가격
        int affordablePerMonth = req.getSalary() / 12; // 한달 급여(세전)
        int months = (int) Math.ceil((price) / affordablePerMonth); // 예상할부개월 = 총 가격/한달급여 (카드 이자율 고려x)
        

        return ResponseEntity.ok(new InstallmentResponse(months, null)); // 계산 결과 dto 파일로 넘김
    }
}

