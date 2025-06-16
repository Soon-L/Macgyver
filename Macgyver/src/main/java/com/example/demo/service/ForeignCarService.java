package com.example.demo.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.example.demo.entity.ForeignCar;
import com.example.demo.repository.ForeignCarRepository;

@Service
public class ForeignCarService {
	
	private final ForeignCarRepository foreignCarRepository; // 외제차 repo 호출
	
	public ForeignCarService(ForeignCarRepository foreignCarRepository) {
		this.foreignCarRepository = foreignCarRepository; // 외제차 서비스는 호출한 외제차 repo를 참고한다?
		
	}
	
    public void saveCar(String model, int price, String photo) { // 외제차 이름, 가격을 저장
    	ForeignCar ForeignCar = new ForeignCar(); // 외제차 엔티티 호출
    	ForeignCar.setModel(model); 
    	ForeignCar.setPrice(price);
    	ForeignCar.setPhoto(photo);
    	foreignCarRepository.save(ForeignCar); 
    }

    public Optional<Integer> getCarPriceByModel(String model) {
        return foreignCarRepository.findByModel(model).map(ForeignCar::getPrice);
    }
    
    public List<String> getAllModels() {
        return foreignCarRepository.findAll()
                         .stream()
                         .map(ForeignCar::getModel) // Car 엔티티 필드명에 맞게 조정
                         .collect(Collectors.toList());
    }

}
