package com.team1.repositories;

import com.team1.models.Followers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FollowersRepo extends JpaRepository<Followers, Integer> {
}
