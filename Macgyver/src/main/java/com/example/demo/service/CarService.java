package com.example.demo.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Car;
import com.example.demo.repository.CarRepository;


@Service
public class CarService {
	final CarRepository carRepository;
	
	public CarService(CarRepository carRepository) {
		this.carRepository = carRepository; // 외제차 서비스는 호출한 외제차 repo를 참고한다?
		
	}
	
    public void saveModel(String model, int price) { // 이름, 가격을 저장
    	Car car = new Car(); // 엔티티 호출
    	car.setModel(model); 
    	car.setPrice(price);
    	carRepository.save(car); // → Supabase의 테이블에 INSERT 발생
    }

    public Optional<Integer> getCarPriceByModel(String model) {
        return carRepository.findByModel(model).map(Car::getPrice);
    }
    
    
//    // 전체 데이터 삭제
//    public void deleteAllCars() {
//        carRepository.deleteAll();
//    }


}
