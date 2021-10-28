package com.team1.YumMediaSpring;

import com.team1.controllers.UserController;
import com.team1.repositories.UsersRepo;
import com.team1.services.UserService;
import org.junit.*;
import com.team1.models.Users;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.junit.Test;

import static org.junit.Assert.*;
//import static org.junit.Assert.assertEquals;




@RunWith(SpringRunner.class)
@SpringBootTest
public class YumMediaSpringApplicationTests {

//	@Test
//	public void contextLoads() {
//	}

	@Autowired
	public UsersRepo usersRepo;


	@Test
	public void contextLoads() {
	}
	@Test
	public void getCorrectUserId(){
//		Users u = usersRepo.findById(1);
		Users u = usersRepo.findById(1).orElse(null);

		System.out.println("This is the correct user test");
		assertEquals("John", u.getFirst_name());

	}

}
