package com.ssafit.pjt.model.service;

import java.util.List;

import com.ssafit.pjt.model.dto.Review;
import com.ssafit.pjt.model.dto.SearchCondition;
import com.ssafit.pjt.model.dto.Study;

public interface ReviewService {
	
	public Review writeReview(Review review, String loginUserId);
	
	public int modifyReview(Review review, String loginUserId);
	
	public int removeReview(int reviewKey, String loginUserId);
	
	public Review getReview(int reviewKey);
	
	public List<Review> searchReview(SearchCondition condition);
	
	public String selectWriter(int reviewKey);
	
	public Study selectStudy(int reviewKey);
	
}
