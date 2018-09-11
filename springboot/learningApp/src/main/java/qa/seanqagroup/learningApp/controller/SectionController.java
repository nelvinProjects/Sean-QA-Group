package qa.seanqagroup.learningApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import qa.seanqagroup.learningApp.model.Section;
import qa.seanqagroup.learningApp.repository.SectionRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class SectionController {

	@Autowired
	private SectionRepository sectionRepository;
	
	@PostMapping("/section/add")
	public void createSection(Section section) {
		System.out.println(section.getSectionName());
		System.out.println(section.getSectionContent());
		System.out.println(section.getModuleId());
		sectionRepository.save(section);
	}
}
