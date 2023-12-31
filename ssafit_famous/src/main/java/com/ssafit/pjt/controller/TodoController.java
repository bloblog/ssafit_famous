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

import com.ssafit.pjt.model.dto.Review;
import com.ssafit.pjt.model.dto.Todo;
import com.ssafit.pjt.model.service.TodoService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/api")
@Api(tags = "목표 컨트롤러")
public class TodoController {
	
	@Autowired
	private TodoService todoService;
	
	// 목표 등록하기
	@PostMapping("/todo")
	public ResponseEntity<?> add(@RequestBody Todo todo) {
		int result = todoService.addTodo(todo, todo.getUsers());
		if (result > 0) {
			todo.setTodoKey(todoService.getTodoKey(todo));
			return new ResponseEntity<Todo>(todo, HttpStatus.CREATED);
		}
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	
	// 목표 수정하기
	@PutMapping("/todo/{todoKey}")
	public ResponseEntity<?> update(@RequestBody Todo todo, @PathVariable int todoKey) {
//		String loginUserId = String.valueOf(session.getAttribute("loginUser"));

		todo.setTodoKey(todoKey);
		int result = todoService.modifyTodo(todo);
		if (result > 0) {
			return new ResponseEntity<Todo>(todo, HttpStatus.OK);
		}
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	
	// 목표 달성 여부 수정하기
	@PutMapping("/todo/{userKey}/{todoKey}")
	public ResponseEntity<Integer> updateState(@RequestBody Todo todo, @PathVariable int todoKey, @PathVariable int userKey) {
		System.out.println(todo.toString());
		int[] userOne = new int[] {userKey};
		todo.setUsers(userOne);
		int result = todoService.modifyUserTodo(todo);
		if (result > 0) {
			return new ResponseEntity<Integer>(result, HttpStatus.OK);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.NO_CONTENT);
	}
	
	
	// 목표 삭제하기
	@DeleteMapping("/todo/{todoKey}")
	public ResponseEntity<Integer> delete(@PathVariable int todoKey, HttpSession session) {
		String loginUserId = String.valueOf(session.getAttribute("loginUser"));

		int result = todoService.removeTodo(todoKey, loginUserId);
		if (result == -1) {
			return new ResponseEntity<Integer>(result, HttpStatus.UNAUTHORIZED);
		} else if (result == 0) {
			return new ResponseEntity<Integer>(result, HttpStatus.OK);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.OK);
	}
	
	// 목표 디테일보기
	@GetMapping("/todo/{todoKey}")
	public ResponseEntity<?> detail(@PathVariable int todoKey) {
		Todo result = todoService.getTodo(todoKey);
		if (result == null) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<Todo>(result, HttpStatus.OK);
		}
	}
	
}
