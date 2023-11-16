package com.ssafit.pjt.model.dao;

import com.ssafit.pjt.model.dto.Todo;

public interface TodoDao {
	// 목표 생성
	int insertTodo(Todo todo); 
	// 목표 수정
	int updateTodo(Todo todo);
	// 목표 삭제
	int deleteTodo(int todoKey);
	// 목표 상세
	Todo selectOne(int todoKey);
}
