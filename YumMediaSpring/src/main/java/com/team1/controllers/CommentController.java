package com.team1.controllers;
import com.team1.models.Comments;
import com.team1.models.Posts;
import com.team1.models.Reviews;
import com.team1.repositories.CommentsRepo;
import com.team1.services.CommentServices;
import com.team1.services.PostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;
import java.util.Optional;


@RestController
@RequestMapping(path="/comments")
public class CommentController {
//    private CommentsRepo commentRepo;

//    @Autowired
    private CommentServices commentService;

    private PostServices postServices;

    @Autowired
    public CommentController(CommentServices commentService, PostServices postServices) {
        this.commentService = commentService;
        this.postServices = postServices;
    }

    @GetMapping
    public List<Comments> getAllComments() {

        List<Comments> myList = commentService.getAllComments();

        for (int i = 0; i < myList.size(); i++){
            System.out.println("LIST ENTRY: " + myList.get(i));
        }

        return myList;
    }

    //get all by post id
    @GetMapping(path="/post/{post_id}")
    public List<Comments>  getAllCommentsPosts(@PathVariable("post_id") Integer post_id){
        Posts post = postServices.getPost(post_id);
        return commentService.getAllCommentsPosts(post);
    }



    @GetMapping(path="/{comment_id}")
    public Comments getComment(@PathVariable Integer comment_id) {
        Comments myComment = commentService.findComment(comment_id);

        System.out.println(myComment);

        return myComment;
    }
//    @GetMapping(path ="/find/{user_id}")
//    public Users getUser(@PathVariable Integer user_id){
//        return userService.getUser(user_id);
//    }

//    public Users getUser(@PathVariable Integer user_id){
//        return userService.getUser(user_id);
//    }


    @PostMapping(consumes = "application/json", produces = "application/json")
    public void addComment(@RequestBody Comments comment) {
        commentService.addComment(comment);
    }

    @PutMapping(path="/{comment_id}")
    public void updateComment(@PathVariable Integer comment_id, @RequestBody Comments comment) {
        if (Objects.equals(comment_id, comment.getCommentId())) {
            commentService.updateComment(comment);// this save method is coming from the JpaRepository -> it is like Hibernate's saveOrUpdate();
        }
    }

    @DeleteMapping(path="/{comment_id}")
    public void deleteComment(@PathVariable Integer comment_id) {
        Comments c = commentService.findComment(comment_id);
        commentService.deleteComment(c.getCommentId());
    }
}