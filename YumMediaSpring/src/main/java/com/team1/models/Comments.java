package com.team1.models;


import javax.persistence.*;

@Entity
@Table(name="comments")

public class Comments {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Integer commentId;

    @Column(name="user_id")
    private int userId;

    @Column(name="post_id")
    private int postId;

    @Column(name="comment_description")
    private String commentDescription;

    public Comments() {
    }

    public Comments(int userId, int postId, String commentDescription) {
        this.userId = userId;
        this.postId = postId;
        this.commentDescription = commentDescription;
    }

    public Comments(Integer commentId, int userId, int postId, String commentDescription) {
        this.commentId = commentId;
        this.userId = userId;
        this.postId = postId;
        this.commentDescription = commentDescription;
    }

    public Integer getCommentId() {
        return commentId;
    }

    public void setCommentId(Integer commentId) {
        this.commentId = commentId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getPostId() {
        return postId;
    }

    public void setPostId(int postId) {
        this.postId = postId;
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
                ", userId=" + userId +
                ", postId=" + postId +
                ", commentDescription='" + commentDescription + '\'' +
                '}';
    }
}
