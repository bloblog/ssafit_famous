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
import com.ssafit.pjt.model.service.ReviewService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/api")
@Api(tags = "�쉶怨� 而⑦듃濡ㅻ윭")
public class ReviewController {
	
	@Autowired
	private ReviewService reviewService;
	
	// �쉶怨� �삱由ш린
	@PostMapping("/review")
	public ResponseEntity<Integer> write(@RequestBody Review review) {
		int result = reviewService.writeReview(review);
		return new ResponseEntity<Integer>(result, HttpStatus.CREATED);
	}
	
	
	// �쉶怨� �닔�젙
	@PutMapping("/review/{reviewKey}")
	public ResponseEntity<Integer> update(@RequestBody Review review, @PathVariable int reviewKey, HttpSession session) {
		String loginUserId = (String) session.getAttribute("loginUser");
		
		review.setReviewKey(reviewKey);
		int result = reviewService.modifyReview(review, loginUserId);
		if (result == -1) {
			return new ResponseEntity<Integer>(result, HttpStatus.UNAUTHORIZED);
		} else if (result == 0){
			return new ResponseEntity<Integer>(result, HttpStatus.OK);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.OK);
	}
	
	
	// �쉶怨� �궘�젣
	@DeleteMapping("/review/{reviewKey}")
	public ResponseEntity<Integer> delete(@PathVariable int reviewKey, HttpSession session) {
		String loginUserId = (String) session.getAttribute("loginUser");
		
		int result = reviewService.removeReview(reviewKey, loginUserId);
		if (result == -1) {
			return new ResponseEntity<Integer>(result, HttpStatus.UNAUTHORIZED);
		} else if (result == 0){
			return new ResponseEntity<Integer>(result, HttpStatus.OK);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.OK);
	}
	
	// �쉶怨� �뵒�뀒�씪蹂닿린
	@GetMapping("/review/{reviewKey}")
	public ResponseEntity<?> detail(@PathVariable int reviewKey) {
		Review result = reviewService.getReview(reviewKey);
		if (result == null) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<Review>(result, HttpStatus.OK);
		}
	}
	
	// �쉶怨� 寃��깋 (�궡媛� �옉�꽦�븳 �쉶怨� �쓣�슱 �븣 �븘�슂)
	@GetMapping("/review")
	@ApiOperation(value="�쉶怨� 議고쉶", notes="寃��깋 議곌굔�뿉 �뵲�씪 媛��졇�삩�떎.")
	public ResponseEntity<?> search(SearchCondition condition){
		List<Review> list = reviewService.searchReview(condition);
		if(list == null || list.size() == 0)
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		return new ResponseEntity<List<Review>>(list, HttpStatus.OK);
	}
}
