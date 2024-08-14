package com.example.job1.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job1.model.JobPostModel;

public interface JobPostInterface extends JpaRepository<JobPostModel, Long>{
	void deleteById(Long id);
	 List<JobPostModel> findByCompanyName(String companyName);
}
