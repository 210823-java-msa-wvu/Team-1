package com.team1.models;

import javax.persistence.*;

@Entity
@Table(name="reviews")
public class Reviews {
    @Id@GeneratedValue(strategy = GenerationType.AUTO)
    private Integer post_id;

    private String review;
    private Integer rating;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    private Users user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="post_id")
    private posts post;


    public Reviews() {
    }

    public Reviews(Integer post_id, String review, Integer rating, Users user, posts post) {
        this.post_id = post_id;
        this.review = review;
        this.rating = rating;
        this.user = user;
        this.post = post;
    }

    public Integer getPost_id() {
        return post_id;
    }

    public void setPost_id(Integer post_id) {
        this.post_id = post_id;
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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    @Override
    public String toString() {
        return "Reviews{" +
                "post_id=" + post_id +
                ", review='" + review + '\'' +
                ", rating=" + rating +
                ", user=" + user +
                ", post=" + post +
                '}';
    }
}
