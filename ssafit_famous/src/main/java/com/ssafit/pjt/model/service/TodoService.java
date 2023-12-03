package com.ssafit.pjt.model.service;

import com.ssafit.pjt.model.dto.Todo;

public interface TodoService {
	// 일정 생성
	int addTodo(Todo todo, int[] users);
	// 일정 수정
	int modifyTodo(Todo todo);
	// 일정 삭제
	int removeTodo(int todoKey, String loginUserId);
	// 일정 상세
	Todo getTodo(int todoKey);
	// 유저의 todo 상태 변경
	int modifyUserTodo(Todo todo);

	int getTodoKey(Todo todo);
}
