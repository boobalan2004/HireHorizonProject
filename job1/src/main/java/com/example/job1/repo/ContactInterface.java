package com.example.job1.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.job1.model.ContactForm;

public interface ContactInterface extends JpaRepository<ContactForm, Long>{

}
