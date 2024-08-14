package com.example.job1.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.job1.model.UserApplyForm;

public interface FormInterface extends JpaRepository<UserApplyForm, Long> {
	List<UserApplyForm> findByEmail(String email);
}
