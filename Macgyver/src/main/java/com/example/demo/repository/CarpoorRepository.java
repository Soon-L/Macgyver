package com.example.demo.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.entity.Carpoor;

public interface CarpoorRepository extends JpaRepository<Carpoor, Long>{
	Optional<Carpoor> findByModel(String Model);

}
