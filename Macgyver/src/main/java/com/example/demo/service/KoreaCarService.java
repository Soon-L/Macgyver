package com.example.demo.service;

import java.util.Optional;

import org.springframework.stereotype.Service;

import com.example.demo.entity.KoreaCar;
import com.example.demo.repository.KoreaCarRepository;

@Service
public class KoreaCarService {
	private final KoreaCarRepository KRcarRepository;
	
    public KoreaCarService(KoreaCarRepository KRcarRepository) {
        this.KRcarRepository = KRcarRepository;
    }
    
    public void saveCar(String name, int price) {
        KoreaCar KRcar = new KoreaCar();
        KRcar.setName(name);
        KRcar.setPrice(price);
        KRcarRepository.save(KRcar); // → Supabase의 "korea" 테이블에 INSERT 발생
    }
    
    public Optional<Integer> getCarPriceByName(String name) {
        return KRcarRepository.findByName(name).map(KoreaCar::getPrice);
    }

}
