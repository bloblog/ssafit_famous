package com.ssafit.pjt.model.dao;

import java.util.List;

import com.ssafit.pjt.model.dto.Study;
import com.ssafit.pjt.model.dto.User;

public interface UserDao {
	
	User selectUser(int userKey);
	
	User selectUserById(String id);
	
	int insertUser(User user);
	
	int updateUser(User user);
	
	int deleteUser(int userKey);
	
	List<User> selectUserList(String id);
	
	List<Study> selectStudyList(int userKey);
	
	List<Study> selectTodoList(int userKey);
}
