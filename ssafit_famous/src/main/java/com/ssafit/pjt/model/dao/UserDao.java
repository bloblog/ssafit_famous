package com.ssafit.pjt.model.dao;

import java.util.List;

import com.ssafit.pjt.model.dto.User;

public interface UserDao {
	
	User selectUser(int userKey);
	
	int insertUser(User user);
	
	int updateUser(User user);
	
	int deleteUser(int userKey);
	
	List<User> selectUserList(String id);
}
