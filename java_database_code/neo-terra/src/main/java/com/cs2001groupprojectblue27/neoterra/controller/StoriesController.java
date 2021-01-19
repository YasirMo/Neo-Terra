package com.cs2001groupprojectblue27.neoterra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs2001groupprojectblue27.neoterra.model.NewsStories;
import com.cs2001groupprojectblue27.neoterra.repository.NeoTerraRepository;

@RestController
@RequestMapping("/")
public class StoriesController 

{
	@Autowired
	NeoTerraRepository repository;
	
    @GetMapping("/news")
    public List<NewsStories> getAll() 
    {
        return repository.findAll();
    }
	
	@PostMapping("/news")
	public NewsStories addStory(@RequestBody NewsStories news_story) {
		repository.save(news_story);
		return news_story;
	}
    // Using Postman
//    {
//        "id":null,
//        "storyTitle": "shit",
//        "storyLink": "shit",
//        "source": "shit"
//    }
    @GetMapping("/news/{id}")
    public NewsStories getNoteById(@PathVariable(value = "id") Long Id)
    {
        return repository.findById(Id).orElseThrow(RuntimeException::new);
    }

    @DeleteMapping("/news/{id}")
    void deleteJob(@PathVariable(value = "id") Long Id) 
    {
    	repository.deleteById(Id);
    }
}
