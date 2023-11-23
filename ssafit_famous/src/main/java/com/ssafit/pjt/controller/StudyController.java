package com.ssafit.pjt.controller;

import java.time.Clock;
import java.util.Arrays;
import java.util.List;

import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.ssafit.pjt.model.dto.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ssafit.pjt.model.dto.Review;
import com.ssafit.pjt.model.dto.Study;
import com.ssafit.pjt.model.service.StudyService;

import io.swagger.annotations.Api;

@RestController
@RequestMapping("/api")
@Api(tags = "스터디 컨트롤러")
public class StudyController {
	
	@Autowired
	private StudyService studyService;

	// 스터디 이름으로 스터디 키 찾기 (새로 생성시 필요)
	@GetMapping("/study/key/{studyName}")
	public ResponseEntity<?> key(@PathVariable String studyName) {
		Study result = studyService.getStudyByName(studyName);
		if (result == null) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<Study>(result, HttpStatus.OK);
		}
	}
	
	// new -> 스터디 키로 todokey 리스트 찾기
	@GetMapping("/study/todo/{studyKey}")
	public ResponseEntity<?> getTodo(@PathVariable int studyKey) {
		List<Integer> result = studyService.getTodoList(studyKey);
		if (result == null || result.size() == 0) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<List<Integer>>(result, HttpStatus.OK);
		}
	}
	
	// new -> 스터디 키로 schedulekey 리스트 찾기
	@GetMapping("/study/schedule/{studyKey}")
	public ResponseEntity<?> getSchedule(@PathVariable int studyKey) {
		List<Integer> result = studyService.getScheduleList(studyKey);
		if (result == null || result.size() == 0) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<List<Integer>>(result, HttpStatus.OK);
		}
	}

	// 스터디 삭제하기
	@DeleteMapping("/study/{studyKey}")
	public ResponseEntity<Integer> delete(@PathVariable int studyKey, HttpSession session) {
		String loginUserId = String.valueOf(session.getAttribute("loginUser"));
		
		int result = studyService.removeStudy(studyKey, loginUserId);

		if (result == -1) {
			return new ResponseEntity<Integer>(result, HttpStatus.UNAUTHORIZED);
		} else if (result == 0){
			return new ResponseEntity<Integer>(result, HttpStatus.OK);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.OK);
	}
	
	
	// 스터디 생성하기
	@RequestMapping(value = "/study", method = RequestMethod.POST)
	public ResponseEntity<?> add(@RequestBody Study study) {
		int result = studyService.addStudy(study);
		if (result != 0) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.CREATED);
	}
	
	// 스터디 디테일보기
	@GetMapping("/study/{studyKey}")
	public ResponseEntity<?> detail(@PathVariable int studyKey) {
		Study result = studyService.getStudy(studyKey);
		if (result == null) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<Study>(result, HttpStatus.OK);
		}
	}
	
	// 스터디 수정하기
	@PutMapping("/study/{studyKey}")
	public ResponseEntity<Integer> update(@RequestBody Study study, int[] out, int[] in, @PathVariable int studyKey, HttpSession session) {
		String loginUserId = String.valueOf(session.getAttribute("loginUser"));
		
		study.setStudyKey(studyKey);
		int result = studyService.modifyStudy(study, loginUserId, out, in);
		if (result == -1) {
			return new ResponseEntity<Integer>(result, HttpStatus.UNAUTHORIZED);
		} else if (result == 0){
			return new ResponseEntity<Integer>(result, HttpStatus.OK);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.OK);
	}

	// 멤버 추가하기
	@RequestMapping(value = "/study/{studyKey}", method = RequestMethod.POST)
	public ResponseEntity<?> addMember(@RequestBody Study study, @RequestParam(name = "in") int[] in, @PathVariable int studyKey) {
		System.out.println("study = " + study.toString());
		System.out.println(Arrays.toString(in));
		int result = studyService.addMember(study, in);
		if (result == 0) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		}
		return new ResponseEntity<Integer>(result, HttpStatus.OK);
	}

	// 스터디 키로 멤버 리스트 찾기
	@GetMapping("/study/user/{studyKey}")
	public ResponseEntity<?> getMember(@PathVariable int studyKey) {
		List<User> result = studyService.getMemberList(studyKey);
		if (result == null) {
			return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
		} else {
			return new ResponseEntity<List<User>>(result, HttpStatus.OK);
		}
	}

}