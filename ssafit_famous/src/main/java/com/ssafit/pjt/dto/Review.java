package com.ssafit.pjt.dto;

import java.io.File;
import java.sql.Date;

public class Review {
	private int reviewKey;
	private String reviewContent;
	private int viewCnt;
	private Date reviewDate;
	private String reviewImgPath;
	
	public Review() {}

	public Review(int reviewKey, String reviewContent, int viewCnt, Date reviewDate, String reviewImgPath) {
		this.reviewKey = reviewKey;
		this.reviewContent = reviewContent;
		this.viewCnt = viewCnt;
		this.reviewDate = reviewDate;
		this.reviewImgPath = reviewImgPath;
	}

	public int getReviewKey() {
		return reviewKey;
	}

	public void setReviewKey(int reviewKey) {
		this.reviewKey = reviewKey;
	}

	public String getReviewContent() {
		return reviewContent;
	}

	public void setReviewContent(String reviewContent) {
		this.reviewContent = reviewContent;
	}

	public int getViewCnt() {
		return viewCnt;
	}

	public void setViewCnt(int viewCnt) {
		this.viewCnt = viewCnt;
	}

	public Date getReviewDate() {
		return reviewDate;
	}

	public void setReviewDate(Date reviewDate) {
		this.reviewDate = reviewDate;
	}

	public String getReviewImgPath() {
		return reviewImgPath;
	}

	public void setReviewImgPath(String reviewImgPath) {
		this.reviewImgPath = reviewImgPath;
	}

	@Override
	public String toString() {
		return "Review [reviewKey=" + reviewKey + ", reviewContent=" + reviewContent + ", viewCnt=" + viewCnt
				+ ", reviewDate=" + reviewDate + ", reviewImgPath=" + reviewImgPath + "]";
	}

}
