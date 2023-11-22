package com.ssafit.pjt.model.service;

import com.ssafit.pjt.model.dto.Study;

public interface StudyService {
	
	int addStudy(Study study);
	
	int addMember(Study study, int[] list);
	
	int modifyStudy(Study study, String loginUserId, int[] out, int[] in);
	
	int removeStudy(int studyKey, String loginUserId);
	
	Study getStudy(int studyKey);
<<<<<<< HEAD

    Study getStudyByName(String studyName);
}
=======
}
>>>>>>> 250fb41c7e655a8cc28eebe3a12e2ee8a9549d81
