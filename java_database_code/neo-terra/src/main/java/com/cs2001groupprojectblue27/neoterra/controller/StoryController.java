package com.cs2001groupprojectblue27.neoterra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cs2001groupprojectblue27.neoterra.model.news_stories;
import com.cs2001groupprojectblue27.neoterra.repository.StoryRepository;

@RestController
@RequestMapping("/rest/web")
public class StoryController {
	
	@Autowired
	StoryRepository storyRepository;
	
	@GetMapping("/news")
	public List<news_stories> getAll() {
		return storyRepository.findAll();
		
	}
	
	@PostMapping("/addStory")
	public news_stories news_stories(@RequestBody news_stories news_story) {
		return storyRepository.save(news_story);
	}

}
