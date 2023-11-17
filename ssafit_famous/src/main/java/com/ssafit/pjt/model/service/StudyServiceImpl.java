package com.ssafit.pjt.model.service;

import java.util.HashMap;
import java.util.Map;

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
		// study-user-review테이블에  review null로 생성 (팀장)
		Map<String, Integer> map = new HashMap<>();
		map.put("studyKey", study.getStudyKey());
		map.put("userKey", study.getLeaderKey());
		studyDao.insertRelation(map);
		return studyDao.insertStudy(study);
	}
	
	public int addMember(Study study, int[] list) {
		// study-user-review테이블에  review null로 생성 (팀원)
		int result = 0;
		for(int key : list) {
			Map<String, Integer> map = new HashMap<>();
			map.put("studyKey", study.getStudyKey());
			map.put("userKey", key);
			result += studyDao.insertRelation(map);
		}
		return result;
	}

	@Override
	public int modifyStudy(Study study, String loginUserKey, int[] out, int[] in) {
		if(study == null) {
			return 0;
		}else if(study.getLeaderKey() == Integer.parseInt(loginUserKey)) {
			if (out.length > 0) {
				for (int key : out) {
					// study-user 관계에서 제거
					Map<String, Integer> map = new HashMap<>();
					map.put("studyKey", study.getStudyKey());
					map.put("userKey", key);
					studyDao.deleteRelation(map);
				}
			}
			if (in.length > 0) {
				addMember(study, in);
			}
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
