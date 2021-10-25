package com.team1.controllers;

import com.team1.models.Posts;
import com.team1.repositories.PostRepo;
import com.team1.services.PostServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/post")
public class PostController {

       private PostRepo postRepo; // injected

        @Autowired
        public PostController (PostRepo postRepo){
            this.postRepo = postRepo;
        }


        private PostServices postServices;



        //Create: Add a new Posts
        //
        @PostMapping(path ="/addPost", consumes = "application/json", produces = "application/json")
        public void addPost(@RequestBody Posts post){

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
        @PutMapping(path ="/update/{user_id}")
        public void updatePost (@PathVariable Integer post_id){
            Posts p = postServices.getPost(post_id);
            postRepo.save(p);
        }

        //DELETE - deletePost. delete a Post.
        @DeleteMapping(path ="/deletePost/{post_id}")
        public void deletePost (@PathVariable Integer post_id){
            postRepo.delete(postRepo.getById(post_id));
        }
}
