package com.ssafit.pjt.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafit.pjt.model.dao.ReviewDao;

@Service
public class ScheduleServiceImpl implements ReviewService {
	
	@Autowired
	private ReviewDao reviewDao;

}
