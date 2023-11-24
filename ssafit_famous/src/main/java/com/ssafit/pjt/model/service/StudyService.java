package com.ssafit.pjt.model.service;

import java.util.List;

import com.ssafit.pjt.model.dto.Study;
import com.ssafit.pjt.model.dto.User;

public interface StudyService {
	
	int addStudy(Study study);
	
	int addMember(Study study, int[] list);
	
	
	int modifyStudy(Study study, int[] out, int[] in);
	
	int removeStudy(int studyKey, String loginUserId);
	
	Study getStudy(int studyKey);

    Study getStudyByName(String studyName);
    
    List<Integer> getTodoList(int studyKey);
    
    List<Integer> getScheduleList(int studyKey);

	List<User> getMemberList(int studyKey);

}
