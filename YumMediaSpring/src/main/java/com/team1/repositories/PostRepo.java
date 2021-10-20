package com.team1.repositories;

import com.team1.models.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepo extends JpaRepository<Posts, Integer> {



    //test
}
