package com.ssafit.pjt.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafit.pjt.model.dao.UserDao;
import com.ssafit.pjt.model.dto.Study;
import com.ssafit.pjt.model.dto.User;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDao userDao;

	@Override
	public User login(User user) {
		User tmp = userDao.selectUserById(user.getId());
        if (tmp != null && tmp.getPassword().equals(user.getPassword()))
            return tmp;
        return null;
	}

	@Override
	public int signup(User user) {
		try {
			return userDao.insertUser(user);
		} catch(Exception e) {
			return 0;
		}
	}

	@Override
	public User getUser(int userKey) {
		return userDao.selectUser(userKey);
	}

	@Override
	public int modifyUser(User user) {
		return userDao.updateUser(user);
	}

	@Override
	public int removeUser(int userKey) {
		System.out.println(userKey);
		return userDao.deleteUser(userKey);
	}

	@Override
	public List<User> getUserList(String id) {
		return userDao.selectUserList(id);
	}

	@Override
	public List<Study> getStudyList(int userKey) {
		return userDao.selectStudyList(userKey);
	}
	
}
