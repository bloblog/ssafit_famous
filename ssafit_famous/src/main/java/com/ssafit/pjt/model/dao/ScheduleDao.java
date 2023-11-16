package com.ssafit.pjt.model.dao;

import com.ssafit.pjt.model.dto.Schedule;

public interface ScheduleDao {
	// 일정 생성
	int insertSchedule(Schedule schedule); 
	// 일정 수정
	int updateSchedule(Schedule schedule);
	// 일정 삭제
	int deleteSchedule(int reviewKey);
	// 일정 상세
	Schedule selectOne(int reviewKey);
}
