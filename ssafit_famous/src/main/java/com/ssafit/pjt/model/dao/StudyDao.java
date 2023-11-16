package com.ssafit.pjt.model.dao;

import com.ssafit.pjt.model.dto.Study;

public interface StudyDao {
	// 스터디 생성
	int insertStudy(Study study); 
	// 스터디 수정
	int updateStudy(Study study);
	// 스터디 삭제
	int deleteStudy(int studyKey);
	// 스터디 상세
	Study selectOne(int studyKey);
}
