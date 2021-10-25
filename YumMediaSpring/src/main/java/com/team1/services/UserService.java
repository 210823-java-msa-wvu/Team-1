package com.team1.services;

import com.team1.models.Users;
import com.team1.repositories.UsersRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UsersRepo usersRepo;

    @Autowired
    public UserService(UsersRepo usersRepo){
        this.usersRepo = usersRepo;
    }

    // CREATE
    public void addUser (Users user) {
        usersRepo.save(user);
    }

    // READ
    public List<Users> getAllUsers(){
        return usersRepo.findAll();
    }

    public Users getUser(Integer user_id){
        return usersRepo.findById(user_id).orElse(null);
    }

//    public Users getByUsername(String username){
//        return usersRepo.
//    }

    // UPDATE
    public void updateUser(Users user){
        usersRepo.save(user);
    }

    // DELETE
    public void deleteUser(Users user){
        usersRepo.delete(user);
    }



}
