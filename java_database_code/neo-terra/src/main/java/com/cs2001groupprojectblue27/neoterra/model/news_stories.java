package com.cs2001groupprojectblue27.neoterra.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class news_stories {
	
	@Id
	@GeneratedValue
	@Column(name = "story_id")
	private Integer story_id;
	
	@Column(name = "story_title")
	private String story_title;
	
	@Column(name = "story_link")
	private String story_link;
	
	@Column(name = "source")
	private String source;
	
	public news_stories() {
		
	} //

	
	//Getters and Setters Below
	public Integer getStory_id() {
		return story_id;
	}

	public void setStory_id(Integer story_id) {
		this.story_id = story_id;
	}
	public String getSource() {
		return source;
	}
	
	public void setSource(String source) {
		this.source = source;
	}

	public String getStory_title() {
		return story_title;
	}

	public void setStory_title(String story_title) {
		this.story_title = story_title;
	}

	public String getStory_link() {
		return story_link;
	}

	public void setStory_link(String story_link) {
		this.story_link = story_link;
	}
	
	
	

}
