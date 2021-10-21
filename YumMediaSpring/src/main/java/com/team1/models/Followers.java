package com.team1.models;

import javax.persistence.*;
import com.team1.models.Users;

@Entity
public class Followers {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer reference_id;

    @ManyToOne
    @JoinColumn(name="follower")
    private Users follower;

    @ManyToOne
    @JoinColumn(name="following")
    private Users following;


    public Followers() {

    }

    public Followers(Users follower, Users following) {
        this.follower = follower;
        this.following = following;
    }

    public Users getFollower() {
        return follower;
    }

    public void setFollower(Users user) {
        this.follower = user;
    }


    public Users getFollowing() {
        return following;
    }

    public void setFollowing(Users following) {
        this.following = following;
    }

}