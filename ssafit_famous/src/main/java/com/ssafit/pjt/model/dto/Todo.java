package com.ssafit.pjt.model.dto;

import java.sql.Date;

public class Todo {
	private int todoKey;
	private int studyKey;
	private Date todoStart;
	private Date todoEnd;
	private String todoContent;
	private int[] users;
	
	public Todo() {}

	public Todo(int studyKey, Date todoStart, Date todoEnd, String todoContent, int[] users) {
		this.studyKey = studyKey;
		this.todoStart = todoStart;
		this.todoEnd = todoEnd;
		this.todoContent = todoContent;
		this.users = users;
	}

	public int[] getUsers() {
		return users;
	}

	public void setUsers(int[] users) {
		this.users = users;
	}

	public int getTodoKey() {
		return todoKey;
	}

	public void setTodoKey(int todoKey) {
		this.todoKey = todoKey;
	}

	public int getStudyKey() {
		return studyKey;
	}

	public void setStudyKey(int studyKey) {
		this.studyKey = studyKey;
	}

	public Date getTodoStart() {
		return todoStart;
	}

	public void setTodoStart(Date todoStart) {
		this.todoStart = todoStart;
	}

	public Date getTodoEnd() {
		return todoEnd;
	}

	public void setTodoEnd(Date todoEnd) {
		this.todoEnd = todoEnd;
	}

	public String getTodoContent() {
		return todoContent;
	}

	public void setTodoContent(String todoContent) {
		this.todoContent = todoContent;
	}

	@Override
	public String toString() {
		return "Todo [todoKey=" + todoKey + ", studyKey=" + studyKey + ", todoStart=" + todoStart + ", todoEnd="
				+ todoEnd + ", todoContent=" + todoContent + "]";
	}
}
