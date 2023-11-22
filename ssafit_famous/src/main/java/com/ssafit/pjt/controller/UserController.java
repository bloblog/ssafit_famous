package com.ssafit.pjt.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafit.pjt.model.dto.Study;
import com.ssafit.pjt.model.dto.User;
import com.ssafit.pjt.model.service.UserService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/api")
@Api(tags = "회원 컨트롤러")
public class UserController {
	
	@Autowired
	private UserService userService;
	
	// 로그인
	@PostMapping("/login")
	private ResponseEntity<?> login(@RequestBody User user, HttpSession session) {
		User loginUser = userService.login(user);
		if (loginUser == null) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			session.setAttribute("loginUser", loginUser.getUserKey());
			return new ResponseEntity<Integer>(loginUser.getUserKey(), HttpStatus.OK);
		} 
	}
	
	// 로그아웃
	@GetMapping("/logout")
	private ResponseEntity<Void> logout(HttpSession session){
		session.invalidate();
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
	
	// 회원가입
	@PostMapping("/signup")
	private ResponseEntity<?> registerUser(@RequestBody User user) {
		int result = userService.signup(user);
		if (result != 0)
			return new ResponseEntity<Integer>(result, HttpStatus.OK);
		else
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	// 회원 검색
	@GetMapping("/search/{id}")
	private ResponseEntity<?> searchUser(@PathVariable String id) {
		System.out.println(id);
		List<User> list = userService.getUserList(id);
		System.out.println(list.toString());
		if (list.size() == 0) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<List<User>>(list, HttpStatus.OK);
		}
	}
	
	// 회원정보 디테일
	@GetMapping("/user/{userKey}")
	public ResponseEntity<?> detail(@PathVariable int userKey) {
		User result = userService.getUser(userKey);
		if (result == null) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<User>(result, HttpStatus.OK);
		}
	}
	
	// 회원의 스터디 목록 가져오기
	@GetMapping("/user/study/{userKey}")
	public ResponseEntity<?> list(@PathVariable int userKey) {
		List<Study> result = userService.getStudyList(userKey);
		if (result == null || result.size() == 0) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<List<Study>>(result, HttpStatus.OK);
		}
	}
	
	// 회원정보 업데이트
	@PutMapping("/user/{userKey}")
	public ResponseEntity<Integer> update(@RequestBody User user, @PathVariable int userKey) {
		user.setUserKey(userKey);
		int result = userService.modifyUser(user);
		if (result == -1) {
			return new ResponseEntity<Integer>(result, HttpStatus.UNAUTHORIZED);
		} else if (result == 0) {
			return new ResponseEntity<Integer>(result, HttpStatus.OK);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.OK);
	}
	
	// 회원 정보 삭제
	@DeleteMapping("/user/{userKey}")
	public ResponseEntity<Integer> delete(@PathVariable String userKey) {

		int result = userService.removeUser(Integer.parseInt(userKey));
		if (result == -1) {
			return new ResponseEntity<Integer>(result, HttpStatus.UNAUTHORIZED);
		} else if (result == 0) {
			return new ResponseEntity<Integer>(result, HttpStatus.OK);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.OK);
	}
	
}
