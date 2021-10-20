package com.team1.controllers;

import com.team1.models.Posts;
import com.team1.services.PostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/post")
public class PostController {

       private PostServices postServices; // injected

        @Autowired
        public PostController (PostServices postService){
            this.postServices = postService;
        }



        //Create: Add a new Posts
        //
        @PostMapping(path ="/addPost", consumes = "application/json", produces = "application/json")
        public void addPost(@RequestBody Posts post){

            postServices.addPost(post);
        }

        //READ - getAllPosts, getPost. find all posts or a specific post
        @GetMapping(path ="/findposts")
        public List<Posts> getAllPosts(){
            return postServices.getAllPosts();
        }

        @GetMapping(path ="/findposts/{post_id}")
        public Posts getPost(@PathVariable Integer post_id){
            return postServices.getPost(post_id);
        }

        //UPDATE - updateposts. update a post
        @PutMapping(path ="/update/{user_id}")
        public void updatePost (@PathVariable Integer post_id){
            Posts p = postServices.getPost(post_id);
            postServices.updatePost(p);
        }

        //DELETE - deletePost. delete a Post.
        @DeleteMapping(path ="/deletePost/{post_id}")
        public void deletePost (@PathVariable Integer post_id){
            postServices.deletePost(post_id);
        }
}
