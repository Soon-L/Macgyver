package com.example.demo.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.ForeignCar;
import com.example.demo.repository.ForeignCarRepository;

@Service
public class ForeignCarService {
	
	private final ForeignCarRepository foreignCarRepository; // 외제차 repo 호출
	
	public ForeignCarService(ForeignCarRepository foreignCarRepository) {
		this.foreignCarRepository = foreignCarRepository; // 외제차 서비스는 호출한 외제차 repo를 참고한다?
		
	}
	
    public void saveCar(String name, int price) { // 외제차 이름, 가격을 저장
    	ForeignCar ForeignCar = new ForeignCar(); // 외제차 엔티티 호출
    	ForeignCar.setName(name); 
    	ForeignCar.setPrice(price);
    	foreignCarRepository.save(ForeignCar); // → Supabase의 "korea" 테이블에 INSERT 발생
    }

    public Optional<Integer> getCarPriceByName(String name) {
        return foreignCarRepository.findByName(name).map(ForeignCar::getPrice);
    }

}
