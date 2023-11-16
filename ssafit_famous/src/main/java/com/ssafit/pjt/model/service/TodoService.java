package com.ssafit.pjt.model.service;

public interface TodoService {
	// 일정 생성
	int addTodo(Todo todo);
	// 일정 수정
	int modifyTodo(Todo todo, String loginUserId);
	// 일정 삭제
	int removeTodo(int todoKey, String loginUserId);
	// 일정 상세
	Todo getTodo(int todoKey);
}
