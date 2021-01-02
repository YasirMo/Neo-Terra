package com.cs2001groupprojectblue27.neoterra.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cs2001groupprojectblue27.neoterra.model.news_stories;

public interface StoryRepository extends JpaRepository <news_stories, Integer> {
	

}
