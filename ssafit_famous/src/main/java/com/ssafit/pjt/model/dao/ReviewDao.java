package com.ssafit.pjt.model.dao;

import java.util.List;

import com.ssafit.pjt.model.dto.Review;
import com.ssafit.pjt.model.dto.SearchCondition;

public interface ReviewDao {

	int insertReview(Review review);
	
	void updateExp(int userKey);
	
	void updateViewCnt(int reviewKey);
	
	Review selectReview(int reviewKey);
	
	int selectWriter(int reviewKey);

	int updateReview(Review review);

	int deleteReview(int reviewKey);

	List<Review> selectList(SearchCondition condition);
	
}
