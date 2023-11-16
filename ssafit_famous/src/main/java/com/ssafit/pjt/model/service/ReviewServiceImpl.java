package com.ssafit.pjt.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafit.pjt.model.dao.ReviewDao;
import com.ssafit.pjt.model.dto.Review;
import com.ssafit.pjt.model.dto.SearchCondition;

@Service
public class ReviewServiceImpl implements ReviewService {
	
	@Autowired
	private ReviewDao reviewDao;

	@Override
	public int writeReview(Review review) {
		int result = reviewDao.insertReview(review);
		
		if (result == 0) {
			return 0;
		} else {
			reviewDao.updateExp(reviewDao.selectWriter(review.getReviewKey()));
			return result;
		}
	}

	@Override
	public int modifyReview(Review review, String loginUserId) {
		// 권한 확인
		Review r = reviewDao.selectReview(review.getReviewKey());
		if (r == null) 
			return 0; // 해당 리뷰가 없으면 0 반환
		else if (reviewDao.selectWriter(r.getReviewKey()) == Integer.parseInt(loginUserId)) 
			// 해당 리뷰를 작성한 사람을 찾는 dao 메서드 selectWriter
			// reviewKey를 받아서 해당 리뷰 작성자 찾기 -> loginUser 랑 같으면 수정 가능
			return reviewDao.updateReview(review);
		else
			return -1; // 권한 없으면 -1 반환
	}

	@Override
	public int removeReview(int reviewKey, String loginUserId) {
		// 권한 확인
		Review r = reviewDao.selectReview(reviewKey);
		if (r == null) 
			return 0; // 리뷰 없으면 0 반환
		else if (reviewDao.selectWriter(r.getReviewKey()) == Integer.parseInt(loginUserId))
			return reviewDao.deleteReview(reviewKey);
		else
			return -1; // 권한 없으면 -1 반환
	}
	
	@Override
	public Review getReview(int reviewKey) {
		reviewDao.updateViewCnt(reviewKey);
		return reviewDao.selectReview(reviewKey);
	}

	@Override
	public List<Review> searchReview(SearchCondition condition) {
		// 회고 검색
		// 활용해서 작성자 기준으로 회고 필터링 및 조회수 순으로 정렬 등 가능하도록
		List<Review> list = reviewDao.selectList(condition);
		return list;
	}

}
