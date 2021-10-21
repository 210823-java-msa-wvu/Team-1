package com.team1.models;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;

@Entity
@Table(name="comments")
public class Comments {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer commentId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="user_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Users user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="post_id")
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    private Posts post;

    @Column(name="comment_description")
    private String commentDescription;

    public Comments() {
    }

    public Comments(Users user, Posts post, String commentDescription) {
        this.user = user;
        this.post = post;
        this.commentDescription = commentDescription;
    }

    public Comments(Integer commentId, Users user, Posts post, String commentDescription) {
        this.commentId = commentId;
        this.user = user;
        this.post = post;
        this.commentDescription = commentDescription;
    }

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

    public Posts getPost() {
        return post;
    }

    public void setPost(Posts post) {
        this.post = post;
    }

    public String getCommentDescription() {
        return commentDescription;
    }

    public void setCommentDescription(String commentDescription) {
        this.commentDescription = commentDescription;
    }

    @Override
    public String toString() {
        return "Comments{" +
                "commentId=" + commentId +
                ", user=" + user +
                ", post=" + post +
                ", commentDescription='" + commentDescription + '\'' +
                '}';
    }

    //    public Comments(int userId, int postId, String commentDescription) {
//        this.userId = userId;
//        this.postId = postId;
//        this.commentDescription = commentDescription;
//    }
//
//    public Comments(Integer commentId, int userId, int postId, String commentDescription) {
//        this.commentId = commentId;
//        this.userId = userId;
//        this.postId = postId;
//        this.commentDescription = commentDescription;
//    }
//
//    public Integer getCommentId() {
//        return commentId;
//    }
//
//    public void setCommentId(Integer commentId) {
//        this.commentId = commentId;
//    }
//
//    public int getUserId() {
//        return userId;
//    }
//
//    public void setUserId(int userId) {
//        this.userId = userId;
//    }
//
//    public int getPostId() {
//        return postId;
//    }
//
//    public void setPostId(int postId) {
//        this.postId = postId;
//    }
//
//    public String getCommentDescription() {
//        return commentDescription;
//    }
//
//    public void setCommentDescription(String commentDescription) {
//        this.commentDescription = commentDescription;
//    }
//
//    @Override
//    public String toString() {
//        return "Comments{" +
//                "commentId=" + commentId +
//                ", userId=" + userId +
//                ", postId=" + postId +
//                ", commentDescription='" + commentDescription + '\'' +
//                '}';
//    }
}