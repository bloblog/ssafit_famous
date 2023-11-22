package com.ssafit.pjt.controller;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ssafit.pjt.model.dto.Review;
import com.ssafit.pjt.model.dto.SearchCondition;
import com.ssafit.pjt.model.dto.Study;
import com.ssafit.pjt.model.service.ReviewService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api")
@Api(tags = "회고 컨트롤러")
public class ReviewController {
	
	@Autowired
	private ReviewService reviewService;
	
	// 회고 등록
	@PostMapping("/review")
	public ResponseEntity<Integer> write(@RequestBody Review review) {
		
		String loginUserId = String.valueOf(review.getUserKey());
		int result = reviewService.writeReview(review, loginUserId);
		return new ResponseEntity<Integer>(result, HttpStatus.CREATED);
	}
	
	
	// 회고 수정
	@PutMapping("/review/{reviewKey}")
	public ResponseEntity<Integer> update(@RequestBody Review review, @PathVariable int reviewKey, HttpSession session) {
		String loginUserId = String.valueOf(session.getAttribute("loginUser"));
		
		review.setReviewKey(reviewKey);
		int result = reviewService.modifyReview(review, loginUserId);
		if (result == -1) {
			return new ResponseEntity<Integer>(result, HttpStatus.UNAUTHORIZED);
		} else if (result == 0){
			return new ResponseEntity<Integer>(result, HttpStatus.OK);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.OK);
	}
	
	
	// 회고 삭제
	@DeleteMapping("/review/{reviewKey}")
	public ResponseEntity<Integer> delete(@PathVariable int reviewKey, HttpSession session) {
		String loginUserId = String.valueOf(session.getAttribute("loginUser"));
		
		int result = reviewService.removeReview(reviewKey, loginUserId);
		if (result == -1) {
			return new ResponseEntity<Integer>(result, HttpStatus.UNAUTHORIZED);
		} else if (result == 0){
			return new ResponseEntity<Integer>(result, HttpStatus.OK);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.OK);
	}
	
	// 회고 상세보기
	@GetMapping("/review/{reviewKey}")
	public ResponseEntity<?> detail(@PathVariable int reviewKey) {
		Review result = reviewService.getReview(reviewKey);
		if (result == null) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<Review>(result, HttpStatus.OK);
		}
	}
	
	// 회고 검색
	@GetMapping("/review")
	@ApiOperation(value="회고 검색", notes="작성자 기준, 조회수 기준 등으로 정렬")
	public ResponseEntity<?> search(SearchCondition condition){
		System.out.println(condition);
		List<Review> list = reviewService.searchReview(condition);
		if(list == null || list.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Review>>(list, HttpStatus.OK);
	}
	
	// 작성자 아이디 가져와
	@GetMapping("/review/user/{reviewKey}")
	@ApiOperation(value = "작성자 가져오기")
	public ResponseEntity<?> writer(@PathVariable int reviewKey){
		String writer = reviewService.selectWriter(reviewKey);
		if(writer == null)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<String>(writer, HttpStatus.OK);
	}
	
	// 스터디 가져와
	@GetMapping("/review/study/{reviewKey}")
	@ApiOperation(value = "스터디 가져오기")
	public ResponseEntity<?> study(@PathVariable int reviewKey){
		Study study  = reviewService.selectStudy(reviewKey);
		if(study == null)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<Study>(study, HttpStatus.OK);
	}
	
}
