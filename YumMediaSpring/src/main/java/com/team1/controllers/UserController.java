package com.team1.controllers;

import com.team1.models.Users;
import com.team1.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/users")
public class UserController {

    private UserService userService; // this is something we want to inject

    @Autowired
    public UserController (UserService userService){
        this.userService = userService;
    }

    // What needs a POST mapping and what needs a GET mapping?

    //CREATE - addUser. This path will help to add a new user
    @PostMapping(path ="/addUser", consumes = "application/json", produces = "application/json")
    public void addUser(@RequestBody Users user){
        userService.addUser(user);
    }

    //READ - getAllUsers, getUser. This path will help to find all users or a specific user
    @GetMapping(path ="/find")
    public List<Users> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping(path ="/find/{user_id}")
    public Users getUser(@PathVariable Integer user_id){
        return userService.getUser(user_id);
    }

    //UPDATE - updateUser. This path will help update a user's information.
    @PutMapping(path ="/update/{user_id}")
    public void updateUser (@PathVariable Integer user_id){
        Users u = userService.getUser(user_id);
        userService.updateUser(u);
    }

    //DELETE - deleteUser. This path will help to delete a user.
    @DeleteMapping(path ="/delete/{user_id}")
    public void deleteUser (@PathVariable Integer user_id){
        Users u = userService.getUser(user_id);
        userService.deleteUser(u);
    }

}
