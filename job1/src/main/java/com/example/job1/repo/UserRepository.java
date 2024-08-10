package com.example.job1.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job1.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Long>{
	UserModel findByEmail(String email);

}