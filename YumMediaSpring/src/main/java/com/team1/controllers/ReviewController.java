package com.team1.controllers;



import com.team1.models.Posts;
import com.team1.models.Reviews;
import com.team1.repositories.ReviewsRepo;
import com.team1.services.PostServices;
import com.team1.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLOutput;
import java.util.List;

@RestController
@RequestMapping(path="/reviews")
public class ReviewController {

    private ReviewsRepo reviewRepository;

    private PostServices postServices;

    @Autowired
    ReviewService reviewService;

    @Autowired
    private ReviewController(ReviewsRepo reviewRepository, PostServices postServices) {
        this.reviewRepository = reviewRepository;
        this.postServices = postServices;
    }

    //get all
    @GetMapping
    public List<Reviews> getAllReviews(){
//        System.out.println("getting reviews");
        return reviewService.getAllReviews();
    }
    //get all by post id
    @GetMapping(path="/post/{post_id}")
    public List<Reviews>  getAllReviewsPosts(@PathVariable("post_id") Integer post_id){
        Posts post = postServices.getPost(post_id);
        return reviewService.getAllReviewsPosts(post);
    }



    //by id
    @GetMapping(path="/{review_id}")
    public Reviews getById(@PathVariable("review_id") Integer review_id){
        return reviewRepository.findById(review_id).orElse(null);
    }
//add
//    @PostMapping("/reviews/new")
        @PostMapping(consumes = "application/json", produces = "application/json")
        public Reviews addReview(@RequestBody Reviews review){
            return reviewRepository.save(review);
    }

    //update
    @PutMapping(path="/update/{review_id}")
    public void updateReview(@PathVariable("review_id") Integer review_id, @RequestBody Reviews review){
        if(review_id == review.getReview_id()){
            reviewService.updateReview(review);
        }
    }



    //delete
    @DeleteMapping(path="/delete/{review_id}")
    public void deleteReview(@PathVariable("review_id") Integer id){
            reviewRepository.delete(reviewRepository.getById(id));

    }
}
