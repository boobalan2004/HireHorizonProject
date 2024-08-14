package com.example.job1.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ContentDisposition;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.job1.model.ContactForm;
import com.example.job1.model.JobPostModel;
import com.example.job1.model.LoginRequest;
import com.example.job1.model.ReplyModel;
import com.example.job1.model.UserApplyForm;
import com.example.job1.model.UserModel;

	
	@RestController
	@RequestMapping("/path")
	public class UserController {
		@Autowired
	    private UserService userService;
	
		@CrossOrigin(origins = "http://localhost:3000")
	    @PostMapping("/signup")
	    public UserModel signup(@RequestBody UserModel user) {
	        return userService.registerUser(user);
	    }
		
		 @CrossOrigin(origins = "http://localhost:3000")
		    @PostMapping("/login")
		    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest) {
		        boolean isAuthenticated = userService.authenticateUser(loginRequest.getEmail(), loginRequest.getPassword());
		        if (isAuthenticated) {
		            return ResponseEntity.ok("Login successful");
		        } else {
		            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
		        }
		    }
		 
		 @CrossOrigin(origins = "http://localhost:3000")
		    @PostMapping("/apply")
		    public ResponseEntity<UserApplyForm> apply(
		        @RequestParam("fullName") String fullName,
		        @RequestParam("email") String email,
		        @RequestParam("role") String role,
		        @RequestParam("gender") String gender,
		        @RequestParam("age") String age,
		        @RequestParam("education") String education,
		        @RequestParam("experience") String experience,
		        @RequestParam("location") String location,
		        @RequestParam("resumeHeadline") String resumeHeadline,
		        @RequestParam("resumeFile") MultipartFile resumeFile){

		        try {
		            UserApplyForm application = new UserApplyForm();
		            application.setFullName(fullName);
		            application.setEmail(email);
		            application.setRole(role);
		            application.setGender(gender);
		            application.setAge(age);
		            application.setEducation(education);
		            application.setExperience(experience);
		            application.setLocation(location);
		            application.setResumeHeadline(resumeHeadline);

		            UserApplyForm savedApplication = userService.apply(application, resumeFile);
		            return ResponseEntity.ok(savedApplication);
		        } catch (Exception e) {
		            e.printStackTrace();
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		        }
		    }
		 
		 
		 @CrossOrigin(origins = "http://localhost:3000")
		    @PostMapping("/post-job")
		    public ResponseEntity<JobPostModel> postJob(@RequestBody JobPostModel jobPostForm) {
		        try {
		            JobPostModel savedJobPost = userService.saveJobPost(jobPostForm);
		            return ResponseEntity.ok(savedJobPost);
		        } catch (Exception e) {
		            e.printStackTrace();
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		        }
		    }
		 
		 @CrossOrigin(origins = "http://localhost:3000")
		    @GetMapping("/jobs")
		    public ResponseEntity<List<JobPostModel>> getAllJobPosts() {
		        try {
		            List<JobPostModel> jobPosts = userService.getAllJobPosts();
		            return ResponseEntity.ok(jobPosts);
		        } catch (Exception e) {
		            e.printStackTrace();
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		        }
		    }
		 
		 
		 
		 
		 @CrossOrigin(origins = "http://localhost:3000")
		 @GetMapping("/applications")
		 public ResponseEntity<List<UserApplyForm>> getAllApplications() {
		     try {
		         List<UserApplyForm> applications = userService.getAllApplications();
		         return ResponseEntity.ok(applications);
		     } catch (Exception e) {
		         e.printStackTrace();
		         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		     }
		 }
		 
		 
		 @CrossOrigin(origins = "http://localhost:3000")
		    @GetMapping("/applications-by-email")
		    public ResponseEntity<List<UserApplyForm>> getApplicationsByEmail(@RequestParam String email) {
		        try {
		            List<UserApplyForm> applications = userService.getApplicationsByEmail(email);
		            return ResponseEntity.ok(applications);
		        } catch (Exception e) {
		            e.printStackTrace();
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		        }
		    }
		 
		 
		 @CrossOrigin(origins = "http://localhost:3000")
		    @GetMapping("/resume/{id}")
		    public ResponseEntity<byte[]> getResume(@PathVariable Long id) {
		        UserApplyForm application = userService.getApplicationById(id);
		        
		        if (application != null && application.getResumeFile() != null) {
		            byte[] resumeFile = application.getResumeFile();
		            HttpHeaders headers = new HttpHeaders();
		            headers.setContentType(MediaType.APPLICATION_PDF);
		            headers.setContentDisposition(ContentDisposition.inline().filename("resume.pdf").build());
		            return new ResponseEntity<>(resumeFile, headers, HttpStatus.OK);
		        } else {
		            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		        }
		    }
		 
		    
		    @CrossOrigin(origins = "http://localhost:3000")
		    @DeleteMapping("/jobs/{id}")
		    public ResponseEntity<Void> deleteJob(@PathVariable Long id) {
		        try {
		            userService.deleteJobById(id);
		            return ResponseEntity.noContent().build();
		        } catch (Exception e) {
		            e.printStackTrace();
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		        }
		    }

		    		 
		    
		    @CrossOrigin(origins = "http://localhost:3000")
		    @PutMapping("/jobs/{id}")
		    public ResponseEntity<JobPostModel> updateJob(@PathVariable Long id, @RequestBody JobPostModel jobPostForm) {
		        try {
		            JobPostModel updatedJob = userService.updateJobPost(id, jobPostForm);
		            return ResponseEntity.ok(updatedJob);
		        } catch (Exception e) {
		            e.printStackTrace();
		            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
		        }
		    }

		    
		    //get job by id
		    @CrossOrigin(origins = "http://localhost:3000")
		    @GetMapping("/jobs/{id}")
		    public ResponseEntity<JobPostModel> getJobById(@PathVariable Long id) {
		        try {
		            JobPostModel jobPost = userService.getJobPostById(id);
		            return ResponseEntity.ok(jobPost);
		        } catch (RuntimeException e) {
		            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
		        }
		    }
		    
		    
		    //post contact info
		    @PostMapping("contacts")
		    public ContactForm createContact(@RequestBody ContactForm contact) {
		        return userService.saveContact(contact);
		    }
		    
		    //get contact info
		    @GetMapping("/queries")
		    public List<ContactForm> getAllQueries() {
		        return userService.getAllQueries();
		    }
		    
		    
		    //reply post method
		    @PostMapping("reply")
		    public ReplyModel saveReply(@RequestBody ReplyModel reply) {
		        return userService.saveReply(reply);
		    }
		   
		    
		    //job by company name
		    @GetMapping("/company/{companyName}")
		    public List<JobPostModel> getJobsByCompanyName(@PathVariable String companyName) {
		        return userService.findJobsByCompanyName(companyName);
		    }
		    
		    
}

