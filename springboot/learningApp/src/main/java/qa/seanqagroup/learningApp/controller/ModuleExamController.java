package qa.seanqagroup.learningApp.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import qa.seanqagroup.learningApp.exceptions.ResourceNotFoundException;
import qa.seanqagroup.learningApp.model.ModuleExam;
import qa.seanqagroup.learningApp.repository.ModuleExamRepo;

@RestController
public class ModuleExamController {
	
	@Autowired
	ModuleExamRepo testRepo;
	
	@PostMapping("/newtest")
	public ModuleExam createTest(ModuleExam test){
		return testRepo.save(test);
	}
	
	@GetMapping("/gettest/{id}")
	public ModuleExam getExam(@PathVariable(value="id") Long examId) {
		ModuleExam exam = testRepo.findById(examId).orElseThrow(()-> new ResourceNotFoundException("Exam", "Id", examId));;
		return exam;
	}
	
	
}
