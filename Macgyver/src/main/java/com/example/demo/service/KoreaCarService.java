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
    
    public void saveCar(String model, int price, String photo) {
        KoreaCar KRcar = new KoreaCar();
        KRcar.setModel(model);
        KRcar.setPrice(price);
        KRcar.setPhoto(photo);
        KRcarRepository.save(KRcar);
    }
    
    public Optional<Integer> getCarPriceByModel(String model) {
        return KRcarRepository.findByModel(model).map(KoreaCar::getPrice);
    }

}
