package com.ssafit.pjt.model.service;

import com.ssafit.pjt.model.dto.Study;

public interface StudyService {
	// 일정 생성
	int createStudy(Study study);
	// 일정 수정
	int modifyStudy(Study study, String loginUserId);
	// 일정 삭제
	int removeStudy(int studyKey, String loginUserId);
	// 일정 상세
	Study studyDetail(int studyKey);
}
