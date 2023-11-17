package com.ssafit.pjt.model.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafit.pjt.model.dao.StudyDao;
import com.ssafit.pjt.model.dao.TodoDao;
import com.ssafit.pjt.model.dto.Todo;

@Service
public class TodoServiceImpl implements TodoService {
	private static TodoService service = new TodoServiceImpl();
	
	private TodoServiceImpl() {}
	
	public static TodoService getInstance() {
		return service;
	}
	
	@Autowired
	private TodoDao todoDao;
	
	@Autowired
	private StudyDao studyDao;

	@Override
	public int addTodo(Todo todo) {
		// study-todo 생성
		Map<String, Integer> map = new HashMap<>();
		map.put("studyKey", todo.getStudyKey());
		map.put("todoKey", todo.getTodoKey());
		todoDao.insertRelation(map);
		// user-todo 생성
		
		return todoDao.insertTodo(todo);
	}

	@Override
	public int modifyTodo(Todo todo, String loginUserKey) {
		if(todo == null) {
			return 0;
		}else if(studyDao.selectOne(todo.getStudyKey()).getLeaderKey() == Integer.parseInt(loginUserKey)) {
			return todoDao.updateTodo(todo);
		}
		return -1;
	}

	@Override
	public int removeTodo(int todoKey, String loginUserKey) {
		Todo todo = todoDao.selectOne(todoKey);
		if(todo == null) {
			return 0;
		}else if(studyDao.selectOne(todo.getStudyKey()).getLeaderKey() == Integer.parseInt(loginUserKey)) {
			Map<String, Integer> map = new HashMap<>();
			map.put("studyKey", todo.getStudyKey());
			map.put("todoKey", todo.getTodoKey());
			todoDao.deleteRelation(map);
			return todoDao.updateTodo(todo);
		}
		return -1;
	}

	@Override
	public Todo getTodo(int todoKey) {
		return todoDao.selectOne(todoKey);
	}

}
