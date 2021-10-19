package com.team1.services;


import com.team1.models.Review;
import com.team1.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    //read
    public List<Review> getAllReviews(){
        return reviewRepository.findAll();
    }
    //byid
    public Review findReview(Integer review_id){
        return reviewRepository.findById(review_id).orElse(null);
    }

    //create
    public void addReview(Review addReview){
        reviewRepository.save(addReview);
    }

    //update
    public void updateReview(Review review){
        reviewRepository.save(review);
    }

    //delete
    public void deleteReview(Integer review_id){
        reviewRepository.deleteById(review_id);
    }
}
