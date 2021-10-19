package com.team1.models;

import javax.persistence.*;

@Entity
@Table(name="reviews")
public class Review {
    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    private Integer review_id;

    private String review;
    private Integer rating;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private Users user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="post_id")
    private posts post;


    public Review() {
    }

    public Review(Integer review_id, String review, Integer rating, Users user, posts post) {
        this.review_id = review_id;
        this.review = review;
        this.rating = rating;
        this.user = user;
        this.post = post;
    }

    public Integer getReview_id() {
        return review_id;
    }

    public void setReview_id(Integer review_id) {
        this.review_id = review_id;
    }

    public String getReview() {
        return review;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public posts getPost() {
        return post;
    }

    public void setPost(posts post) {
        this.post = post;
    }

    @Override
    public String toString() {
        return "Reviews{" +
                "review_id=" + review_id +
                ", review='" + review + '\'' +
                ", rating=" + rating +
                ", user=" + user +
                ", post=" + post +
                '}';
    }
}
