package com.ssafit.pjt.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafit.pjt.model.dao.StudyDao;
import com.ssafit.pjt.model.dto.Study;

@Service
public class StudyServiceImpl implements StudyService {
	private static StudyService service = new StudyServiceImpl();
	
	private StudyServiceImpl() {}
	
	public static StudyService getInstance() {
		return service;
	}
	
	
	@Autowired
	private StudyDao studyDao;

	@Override
	public int addStudy(Study study) {
		// study-user-review테이블에  review null로 생성
		return studyDao.insertStudy(study);
	}

	@Override
	public int modifyStudy(Study study, String loginUserKey) {
		if(study == null) {
			return 0;
		}else if(study.getLeaderKey() == Integer.parseInt(loginUserKey)) {
			return studyDao.updateStudy(study);
		}
		return -1;
	}

	@Override
	public int removeStudy(int studyKey, String loginUserKey) {
		Study study = studyDao.selectOne(studyKey);
		if(study == null) {
			return 0;
		}else if(study.getLeaderKey() == Integer.parseInt(loginUserKey)) {
			return studyDao.deleteStudy(studyKey);
		}
		return -1;
	}

	@Override
	public Study getStudy(int studyKey) {
		return studyDao.selectOne(studyKey);
	}

}
