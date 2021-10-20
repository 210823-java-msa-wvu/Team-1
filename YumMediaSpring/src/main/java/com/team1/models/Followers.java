package com.team1.models;

import javax.persistence.*;

@Entity
@Table(name="followers")
public class Followers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer referenceId;

//    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private Integer follower;

//    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "id")
    private Integer following;

    public Followers() {

    }

    public Followers(Integer referenceId, Integer follower, Integer following) {
        this.referenceId = referenceId;
        this.follower = follower;
        this.following = following;
    }

    public Integer getReferenceId() {
        return referenceId;
    }

    public void setReferenceId(Integer referenceId) {
        this.referenceId = referenceId;
    }

    public Integer getFollower() {
        return follower;
    }

    public void setFollower(Integer follower) {
        this.follower = follower;
    }

    public Integer getFollowing() {
        return following;
    }

    public void setFollowing(Integer following) {
        this.following = following;
    }

    @Override
    public String toString() {
        return "Followers{" +
                "referenceId=" + referenceId +
                ", follower=" + follower +
                ", following=" + following +
                '}';
    }
}
