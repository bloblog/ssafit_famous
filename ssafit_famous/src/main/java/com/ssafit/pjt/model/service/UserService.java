package com.ssafit.pjt.model.service;

import java.util.List;

import com.ssafit.pjt.model.dto.Review;
import com.ssafit.pjt.model.dto.Study;
import com.ssafit.pjt.model.dto.User;

public interface UserService {
	
	public User login(User user);
	
	public int signup(User user);
	
	public User getUser(int userKey);
	
	public List<User> getUserList(String id);
	
	public List<Study> getStudyList(int userKey);
	
	public int modifyUser(User user, String loginUserId);
	
	public int removeUser(int userKey, String loginUserId);
	
}
