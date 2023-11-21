package com.ssafit.pjt.model.dao;

import java.util.List;
import java.util.Map;

import com.ssafit.pjt.model.dto.Review;
import com.ssafit.pjt.model.dto.SearchCondition;
import com.ssafit.pjt.model.dto.Study;

public interface ReviewDao {

	int insertReview(Review review);
	
	void updateRelation(Map<String, Integer> map);

	void updateExp(Map<String, Integer> map);

	void updateViewCnt(int reviewKey);

	Review selectReview(int reviewKey);

	int selectWriter(int reviewKey);

	int updateReview(Review review);

	int deleteReview(int reviewKey);

	List<Review> selectList(SearchCondition condition);
	
	Review selectReviewKeys(Map<String, Integer> map);
	
	int selectStudy(int reviewKey);
}
