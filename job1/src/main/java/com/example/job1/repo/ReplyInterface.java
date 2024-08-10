package com.example.job1.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job1.model.ReplyModel;

public interface ReplyInterface extends JpaRepository<ReplyModel, Long>{

}