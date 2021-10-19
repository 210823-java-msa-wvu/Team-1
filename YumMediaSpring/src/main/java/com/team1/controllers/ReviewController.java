package com.team1.controllers;



import com.team1.models.Review;
import com.team1.repositories.ReviewRepository;
import com.team1.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/reviews")
public class ReviewController {

    private ReviewRepository reviewRepository;

    @Autowired
    private ReviewService reviewService;

    //get all
    @GetMapping
    public List<Review> getAllReview(){
        return reviewRepository.findAll();
    }

    //by id
    @GetMapping
    public Review getById(@PathVariable("review_id") Integer id){
        return reviewRepository.getById(id);
    }



//    @PostMapping("/reviews/new")
        @PostMapping(consumes = "application/json", produces = "application/json")
        public Review addReview(@RequestBody Review review){
            return reviewRepository.save(review);
    }

    //update
    @PutMapping(path="/{review_id")
    public void updateReview(@PathVariable("review_id") Integer id, @RequestBody Review review){
        if(id == review.getReview_id()){
            reviewRepository.save(review);
        }
    }



    //delete
    @DeleteMapping(path="/{review_id}")
    public void deleteReview(@PathVariable("review_id") Integer id){
            reviewRepository.deleteById(id);

    }
}
