package com.team1.controllers;
import com.team1.models.Comments;
import com.team1.repositories.CommentsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path="/comments")
public class CommentController {
    private CommentsRepo commentRepo;

    @Autowired
    public CommentController(CommentsRepo commentRepo) {
        this.commentRepo = commentRepo;
    }

    @GetMapping
    public List<Comments> getAllComments() {
        return commentRepo.findAll();
    }

    @GetMapping(path="/{comment_id}")
    public Comments getById(@PathVariable("comment_id") int id) {
        return commentRepo.getById(id);
    }

    @PostMapping(consumes = "application/json", produces = "application/json")
    public Comments addComment(@RequestBody Comments comment) {
        return commentRepo.save(comment);
    }

    @PutMapping(path="/{comment_id}")
    public void updateComment(@PathVariable("comment_id") int id, @RequestBody Comments comment) {
        if (id == comment.getCommentId()) {
            commentRepo.save(comment);// this save method is coming from the JpaRepository -> it is like Hibernate's saveOrUpdate();
        }
    }

    @DeleteMapping(path="/{comment_id}")
    public void deleteComment(@PathVariable("comment_id") int id) {
        commentRepo.delete(commentRepo.getById(id));
    }
}
