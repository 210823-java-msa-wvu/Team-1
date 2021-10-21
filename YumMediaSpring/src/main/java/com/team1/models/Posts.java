package com.team1.models;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="posts")
public class Posts {

    //Instance Variables
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer post_id;

    @Column
    private Integer user_id;

    @Column
    private String description;

    @Column
    private String ingredients;

    @Column
    private String img_url;

    @Column
    private Integer likes;

    @Column
    private Boolean flag;

    //Constructors

    //empty constructor
    public Posts() {}

    //All post attributes constructor
    public Posts(Integer post_id, Integer user_id, String description, String ingredients, String img_url, Integer likes, Boolean flag) {
        this.post_id = post_id;
        this.user_id = user_id;
        this.description = description;
        this.ingredients = ingredients;
        this.img_url = img_url;
        this.likes = likes;
        this.flag = flag;
    }
    //Like a post constructor
    public Posts(Integer post_id, Integer likes) {
        this.post_id = post_id;
        this.likes = likes;
    }

    //flag a post constructor
    public Posts(Integer post_id, Integer user_id, Boolean flag) {
        this.post_id = post_id;
        this.user_id = user_id;
        this.flag = flag;
    }
    //Describe a post constructor
    public Posts(Integer post_id, Integer user_id, String description) {
        this.post_id = post_id;
        this.user_id = user_id;
        this.description = description;
    }


    //Getters and Setters
    public Integer getPost_id() {
        return post_id;
    }

    public void setPost_id(Integer post_id) {
        this.post_id = post_id;
    }

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getIngredients() {
        return ingredients;
    }

    public void setIngredients(String ingredients) {
        this.ingredients = ingredients;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }

    public Integer getLikes() {
        return likes;
    }

    public void setLikes(Integer likes) {
        this.likes = likes;
    }

    public Boolean getFlag() {
        return flag;
    }

    public void setFlag(Boolean flag) {
        this.flag = flag;
    }


    //ToString() Method
    @Override
    public String toString() {
        return "posts{" +
                "post_id=" + post_id +
                ", user_id=" + user_id +
                ", description='" + description + '\'' +
                ", ingredients='" + ingredients + '\'' +
                ", img_url='" + img_url + '\'' +
                ", likes=" + likes +
                ", flag=" + flag +
                '}';
    }

}
