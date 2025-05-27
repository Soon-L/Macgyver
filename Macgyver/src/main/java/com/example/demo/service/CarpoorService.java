package com.example.demo.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Carpoor;
import com.example.demo.repository.CarpoorRepository;


@Service
public class CarpoorService {
	final CarpoorRepository carpoorRepository;
	
	public CarpoorService(CarpoorRepository carpoorRepository) {
		this.carpoorRepository = carpoorRepository; // 외제차 서비스는 호출한 외제차 repo를 참고한다?
		
	}
	
    public void saveModel(String model, int price) { // 이름, 가격을 저장
    	Carpoor carpoor = new Carpoor(); // 엔티티 호출
    	carpoor.setModel(model); 
    	carpoor.setPrice(price);
    	carpoorRepository.save(carpoor); // → Supabase의 테이블에 INSERT 발생
    }

    public Optional<Integer> getCarPriceByModel(String model) {
        return carpoorRepository.findByModel(model).map(Carpoor::getPrice);
    }
    



}
