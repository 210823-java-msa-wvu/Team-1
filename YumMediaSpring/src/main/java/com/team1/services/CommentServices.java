package com.team1.services;

import com.team1.models.Comments;
import com.team1.models.Posts;
import com.team1.models.Reviews;
import com.team1.repositories.CommentsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServices {

    private CommentsRepo commentRepository;

    @Autowired
    public CommentServices(CommentsRepo commentRepository) { this.commentRepository = commentRepository; }

    //read
    public List<Comments> getAllComments(){
        return commentRepository.findAll();
    }
    //byid

    public List<Comments> getAllCommentsPosts(Posts post){
//        Posts post = postRepo.findById(post).get();
        return commentRepository.findByPost(post);

    }

    public Comments findComment(Integer comment_id){
        return commentRepository.findById(comment_id).orElse(null);
    }

    //create
    public void addComment(Comments addComment){
        commentRepository.save(addComment);
    }

    //update
    public void updateComment(Comments comment){
        commentRepository.save(comment);
    }

    //delete
    public void deleteComment(Integer comment_id){
        commentRepository.deleteById(comment_id);
    }
}
