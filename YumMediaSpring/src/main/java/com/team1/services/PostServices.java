package com.team1.services;

import com.team1.models.Posts;
import com.team1.repositories.PostRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostServices {

    @Autowired
    private PostRepo PostRepo;

    //read
    public List<Posts> getAllPosts(){
        return PostRepo.findAll();
    }

    //byid
    public Posts getPost(Integer post_id){return PostRepo.findById(post_id).orElse(null);}

    //create
    public void addPost(Posts addPost){
        PostRepo.save(addPost);
    }

    //update
    public void updatePost(Posts post){
        PostRepo.save(post);
    }

    //delete
    public Posts deletePost(Integer post_id){
        PostRepo.deleteById(post_id);
        return null;
    }

    //test
}
