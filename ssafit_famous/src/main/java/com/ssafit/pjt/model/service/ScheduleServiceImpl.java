package com.ssafit.pjt.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafit.pjt.model.dao.ScheduleDao;
import com.ssafit.pjt.model.dao.StudyDao;
import com.ssafit.pjt.model.dto.Schedule;

@Service
public class ScheduleServiceImpl implements ScheduleService {
	private static ScheduleService service = new ScheduleServiceImpl();
	
	private ScheduleServiceImpl() {}
	
	public static ScheduleService getInstance() {
		return service;
	}
	
	@Autowired
	private ScheduleDao scheduleDao;
	
	@Autowired
	private StudyDao studyDao;

	@Override
	public int addSchedule(Schedule schedule) {
		// study-schedule 생성
		return scheduleDao.insertSchedule(schedule);
	}

	@Override
	public int modifySchedule(Schedule schedule, String loginUserKey) {
		if(schedule == null) {
			return 0;
		}else if(studyDao.selectOne(schedule.getStudyKey()).getLeaderKey() == Integer.parseInt(loginUserKey)) {
			return scheduleDao.updateSchedule(schedule);
		}
		return -1;
	}

	@Override
	public int removeSchedule(int scheduleKey, String loginUserKey) {
		Schedule tmp = scheduleDao.selectOne(scheduleKey);
		if(tmp == null) {
			return 0;
		}else if(studyDao.selectOne(tmp.getStudyKey()).getLeaderKey() == Integer.parseInt(loginUserKey)) {
			return scheduleDao.deleteSchedule(scheduleKey);
		}
		return -1;
	}

	@Override
	public Schedule getSchedule(int scheduleKey) {
		return scheduleDao.selectOne(scheduleKey);
	}

}
