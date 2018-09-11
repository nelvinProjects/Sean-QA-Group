package qa.seanqagroup.learningApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import qa.seanqagroup.learningApp.exceptions.ResourceNotFoundException;
import qa.seanqagroup.learningApp.model.User;
import qa.seanqagroup.learningApp.repository.UserRepository;

@RestController
@RequestMapping("/ucc")
public class UserCreationController {

	@Autowired
	UserRepository userRepo;
	
	
	
	@GetMapping("/u/id/{id}")
	public User getUserById(@PathVariable(value="id") Long userID) {
		User user = userRepo.findById(userID).orElseThrow(()-> new ResourceNotFoundException("USER", "ID", userID));
		return user;
	}
	@GetMapping("/u/e/{e}")
	public User getUserByEmail(@PathVariable(value="e") String email) {
		User user = userRepo.findByEmail(email);//.orElseThrow(()-> new ResourceNotFoundException("USER", "ID", email));
		return user;
	}
	
	
}
