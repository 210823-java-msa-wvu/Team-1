package com.team1.controllers;



import com.team1.models.Reviews;
import com.team1.repositories.ReviewsRepo;
import com.team1.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path="/reviews")
public class ReviewController {

    private ReviewsRepo reviewRepository;

    @Autowired
    private ReviewService reviewService;

    //get all
    @GetMapping
    public List<Reviews> getAllReview(){
        return reviewRepository.findAll();
    }

    //by id
    @GetMapping
    public Reviews getById(@PathVariable("review_id") Integer id){
        return reviewRepository.getById(id);
    }



//    @PostMapping("/reviews/new")
        @PostMapping(consumes = "application/json", produces = "application/json")
        public Reviews addReview(@RequestBody Reviews review){
            return reviewRepository.save(review);
    }

    //update
    @PutMapping(path="/{review_id")
    public void updateReview(@PathVariable("review_id") Integer id, @RequestBody Reviews review){
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
