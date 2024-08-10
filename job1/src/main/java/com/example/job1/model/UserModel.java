package com.example.job1.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class UserModel {


	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String fullName;
	    private String email;
	    private String password;
	    private String phone;
	    private String location;
	    public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getFullName() {
			return fullName;
		}
		public void setFullName(String fullName) {
			this.fullName = fullName;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public String getPassword() {
			return password;
		}
		public void setPassword(String password) {
			this.password = password;
		}
		public String getPhone() {
			return phone;
		}
		public void setPhone(String phone) {
			this.phone = phone;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}

}
