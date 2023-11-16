package com.ssafit.pjt.model.service;

public interface StudyService {
	// 일정 생성
	int addStudy(Study study);
	// 일정 수정
	int modifyStudy(Study study, String loginUserId);
	// 일정 삭제
	int removeStudy(int studyKey, String loginUserId);
	// 일정 상세
	Study getStudy(int studyKey);
}
