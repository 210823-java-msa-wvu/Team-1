package com.team1.models;


import javax.persistence.*;

@Entity
@Table(name = "users")
public class Users {

    // Create the instance variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String first_name;

    @Column
    private String last_name;

    @Column
    private String email;

    @Column
    private String username;

    @Column
    private String password;

    @Column
    private Boolean is_professional;

    @Column
    private Boolean is_admin;

    @Column
    private Boolean is_suspended;

    @Column
    private Boolean is_flagged;

    @Column
    private Integer followers;

    @Column
    private Integer following;


    // Generate the constructors
    public Users() {
    }

    public Users(Integer id, String first_name, String last_name, String email, String username, String password,
                 Boolean is_professional, Boolean is_admin, Boolean is_suspended, Boolean is_flagged,
                 Integer followers, Integer following) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.is_professional = is_professional;
        this.is_admin = is_admin;
        this.is_suspended = is_suspended;
        this.is_flagged = is_flagged;
        this.followers = followers;
        this.following = following;
    }


    // Generate the getters and setters (methods that allow us to interact with private fields in a class


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Boolean getIs_professional() {
        return is_professional;
    }

    public void setIs_professional(Boolean is_professional) {
        this.is_professional = is_professional;
    }

    public Boolean getIs_admin() {
        return is_admin;
    }

    public void setIs_admin(Boolean is_admin) {
        this.is_admin = is_admin;
    }

    public Boolean getIs_suspended() {
        return is_suspended;
    }

    public void setIs_suspended(Boolean is_suspended) {
        this.is_suspended = is_suspended;
    }

    public Boolean getIs_flagged() {
        return is_flagged;
    }

    public void setIs_flagged(Boolean is_flagged) {
        this.is_flagged = is_flagged;
    }

    public Integer getFollowers() {
        return followers;
    }

    public void setFollowers(Integer followers) {
        this.followers = followers;
    }

    public Integer getFollowing() {
        return following;
    }

    public void setFollowing(Integer following) {
        this.following = following;
    }

    // Generate the toString() method here


    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", first_name='" + first_name + '\'' +
                ", last_name='" + last_name + '\'' +
                ", email='" + email + '\'' +
                ", username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", is_professional=" + is_professional +
                ", is_admin=" + is_admin +
                ", is_suspended=" + is_suspended +
                ", is_flagged=" + is_flagged +
                ", followers=" + followers +
                ", following=" + following +
                '}';
    }


}
