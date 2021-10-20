package com.team1.services;

import com.team1.models.Comments;
import com.team1.repositories.CommentsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

public class CommentServices {

    @Autowired
    private CommentsRepo commentRepository;

    //read
    public List<Comments> getAllComments(){
        return commentRepository.findAll();
    }
    //byid
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
