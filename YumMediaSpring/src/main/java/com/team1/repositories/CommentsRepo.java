package com.team1.repositories;

import com.team1.models.Comments;
import com.team1.models.Posts;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentsRepo extends JpaRepository<Comments, Integer> {

    List<Comments> findByPost(Posts post);


}
