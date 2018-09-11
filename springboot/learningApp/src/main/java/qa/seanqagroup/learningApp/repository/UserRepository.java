package qa.seanqagroup.learningApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import qa.seanqagroup.learningApp.model.User;


public interface UserRepository extends JpaRepository<User,Long>{

	public User findByEmail(String email);
}
