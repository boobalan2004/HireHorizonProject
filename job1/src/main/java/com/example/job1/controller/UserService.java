package com.example.job1.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.job1.model.ContactForm;
import com.example.job1.model.JobPostModel;
import com.example.job1.model.ReplyModel;
import com.example.job1.model.UserApplyForm;
import com.example.job1.model.UserModel;
import com.example.job1.repo.ContactInterface;
import com.example.job1.repo.FormInterface;
import com.example.job1.repo.JobPostInterface;
import com.example.job1.repo.ReplyInterface;
import com.example.job1.repo.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FormInterface formInterface; // Ensure FormInterface is injected
    
    @Autowired
    private JobPostInterface  jobPostInterface;
    
    @Autowired
    private JobEmailService emailService;
    
    
    @Autowired
    private ContactInterface contactInterface;
    
    @Autowired
    private ReplyInterface replyInterface;

    
    public UserModel registerUser(UserModel user) {
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new IllegalArgumentException("Email already registered");
        }
        UserModel registeredUser = userRepository.save(user);

        // Send confirmation email after successful registration
        String subject = "Welcome to HireHorizon Job Portal!";
        String text = "Dear " + user.getFullName() + ",\n\n" +
                      "Thank you for registering with us. We are excited to have you on board.\n\n" +
                      "Best regards,\n" +
                      "The HireHorizon Team";

        emailService.sendSimpleEmail(user.getEmail(), subject, text);

        return registeredUser;
    }

    
    public boolean authenticateUser(String email, String password) {
        UserModel user = userRepository.findByEmail(email);
        return user != null && user.getPassword().equals(password);
    }

    
//    public UserApplyForm apply(UserApplyForm userApplication, MultipartFile resumeFile) throws Exception {
//        userApplication.setResumeFile(resumeFile.getBytes());
//        return formInterface.save(userApplication);
//    }
    
    
    public UserApplyForm apply(UserApplyForm userApplication, MultipartFile resumeFile) throws Exception {
        userApplication.setResumeFile(resumeFile.getBytes());
        UserApplyForm savedApplication = formInterface.save(userApplication);

        // Prepare email content with all details (excluding resume)
        String subject = "Application Received for " + userApplication.getRole();
        String text = "Dear " + userApplication.getFullName() + ",\n\n" +
                      "Thank you for applying for the position of " + userApplication.getRole() + ". " +
                      "Here are the details of your application:\n\n" +
                      "Full Name: " + userApplication.getFullName() + "\n" +
                      "Email: " + userApplication.getEmail() + "\n" +
                      "Gender: " + userApplication.getGender() + "\n" +
                      "Age: " + userApplication.getAge() + "\n" +
                      "Education: " + userApplication.getEducation() + "\n" +
                      "Experience: " + userApplication.getExperience() + "\n" +
                      "Location: " + userApplication.getLocation() + "\n" +
                      "Resume Headline: " + userApplication.getResumeHeadline() + "\n\n" +
                      "We will review your application and get back to you soon.\n\n" +
                      "Best regards,\n" +
                      "The HireHorizon Team";

        // Send email to the user
        emailService.sendSimpleEmail(userApplication.getEmail(), subject, text);

        return savedApplication;
    }
    
    
    
    
    public JobPostModel saveJobPost(JobPostModel jobPostForm) {
        return jobPostInterface.save(jobPostForm);
    }
    
    public List<JobPostModel> getAllJobPosts() {
        return jobPostInterface.findAll();
    }
    
    public List<UserApplyForm> getAllApplications() {
        return formInterface.findAll();
    }
    
    
 // New method to fetch applications by email
    public List<UserApplyForm> getApplicationsByEmail(String email) {
        return formInterface.findByEmail(email);
    }
    
 // New method to get resume by application ID
    public ByteArrayResource getResumeFile(Long id) {
        UserApplyForm application = formInterface.findById(id)
                .orElseThrow(() -> new RuntimeException("Application not found"));
        return new ByteArrayResource(application.getResumeFile());
    }
    
    public UserApplyForm getApplicationById(Long id) {
        return formInterface.findById(id).orElse(null);
    }
    
    
    //delete the job
    public void deleteJobById(Long id) {
        jobPostInterface.deleteById(id);
    }

    
    
    //edit the job
    public JobPostModel updateJobPost(Long id, JobPostModel jobPostForm) {
        JobPostModel existingJob = jobPostInterface.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));
        existingJob.setJobTitle(jobPostForm.getJobTitle());
        existingJob.setCompanyName(jobPostForm.getCompanyName());
        existingJob.setJobDuration(jobPostForm.getJobDuration());
        existingJob.setSalary(jobPostForm.getSalary());
        existingJob.setLocation(jobPostForm.getLocation());
        existingJob.setDescription1(jobPostForm.getDescription1());
        existingJob.setDescription2(jobPostForm.getDescription2());
        return jobPostInterface.save(existingJob);
    }
    
    
    
    //get job by id
    public JobPostModel getJobPostById(Long id) {
        return jobPostInterface.findById(id)
                .orElseThrow(() -> new RuntimeException("Job not found"));
    }
    
    
    //save the contact info
    public ContactForm saveContact(ContactForm contact) {
        return contactInterface.save(contact);
    }
    
    
    //get 
    public List<ContactForm> getAllQueries() {
        return contactInterface.findAll();
    }
    
    //reply query
    public ReplyModel saveReply(ReplyModel reply) {
        ReplyModel savedReply = replyInterface.save(reply);
        
        String subject = "Reply to your query from HireHorizon";
        String text = "Dear Seeker" + ",\n\n" +
                "Reply for your query: "+reply.getReplyText() + "\n\n" +
                "Thank you for contacting us!\n\n" +
                "Best regards,\n" +
                "The HireHorizon Team";
        emailService.sendSimpleEmail(reply.getEmail(), subject, text);
        return savedReply;
    }
    
    
    //job by company name
    public List<JobPostModel> findJobsByCompanyName(String companyName) {
        return jobPostInterface.findByCompanyName(companyName);
    }
    
    
}
