package com.team1.controllers;

import com.team1.models.Posts;
import com.team1.repositories.PostRepo;
import com.team1.services.PostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Objects;


@RestController
@RequestMapping(path = "/post")
public class PostController {

       private PostRepo postRepo; // injected
        private PostServices postServices;

        @Autowired
        public PostController (PostRepo postRepo, PostServices postServices){
            this.postRepo = postRepo;
            this.postServices = postServices;
        }

        //Create: Add a new Posts
        //
        @PostMapping(path ="/addPost", consumes = "application/json", produces = "application/json")
        public void addPost(@RequestBody Posts post){

            System.out.println("MY POST : " + post);
            postRepo.save(post);
        }

        //READ - getAllPosts, getPost. find all posts or a specific post
        @GetMapping(path ="/findposts")
        public List<Posts> getAllPosts(){
            return postRepo.findAll();
        }

        @GetMapping(path ="/findposts/{post_id}")
        public Posts getPost(@PathVariable("post_id") Integer id){
            return postRepo.findById(id).orElse(null);

            //return postRepo.getById(id);
        }

        //UPDATE - updateposts. update a post
        @PutMapping(path ="/update/{post_id}")
        public void updatePost ( @PathVariable Integer post_id, @RequestBody Posts post){
            System.out.println("MY ID: " + post_id);

            System.out.println("POST: " + post.getPost_id());
            System.out.println("POST" + post);


            if (Objects.equals(post_id, post.getPost_id())) {
                postServices.updatePost(post);
            }
        }
//    @PutMapping(path="/{comment_id}")
//    public void updateComment(@PathVariable Integer comment_id, @RequestBody Comments comment) {
//        if (Objects.equals(comment_id, comment.getCommentId())) {
//            commentService.updateComment(comment);// this save method is coming from the JpaRepository -> it is like Hibernate's saveOrUpdate();
//        }
//    }

        //DELETE - deletePost. delete a Post.
        @DeleteMapping(path ="/deletePost/{post_id}")
        public void deletePost (@PathVariable Integer post_id){
            postRepo.delete(postRepo.getById(post_id));
        }
}
