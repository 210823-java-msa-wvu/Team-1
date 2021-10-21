package com.team1.services;


import com.team1.models.Posts;
import com.team1.models.Reviews;
import com.team1.repositories.PostRepo;
import com.team1.repositories.ReviewsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewsRepo reviewRepository;

    private PostRepo postRepo;

    //read
    public List<Reviews> getAllReviews(){
        return reviewRepository.findAll();
    }


    public List<Reviews> getAllReviewsPosts(@PathVariable Integer post_id){
        Posts post = postRepo.findById(post_id).orElse(null);
        return reviewRepository.findByPost(post);

    }


    //byid
    public Reviews findReview(Integer review_id){
        return reviewRepository.findById(review_id).orElse(null);
    }



    //create
    public void addReview(Reviews addReview){
        reviewRepository.save(addReview);
    }

    //update
    public void updateReview(Reviews review){
        reviewRepository.save(review);
    }

    //delete
    public void deleteReview(Integer review_id){
        reviewRepository.deleteById(review_id);
    }
}
