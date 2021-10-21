package com.team1.repositories;

import com.team1.models.Posts;
import com.team1.models.Reviews;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReviewsRepo extends JpaRepository<Reviews, Integer> {

    List<Reviews> findByPost(Posts post);

}
