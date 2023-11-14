package com.ssafit.pjt.dto;

public class Review {
	private int reviewKey;
	private String reviewContent;
	private int viewCnt;
	
	public Review() {}

	public Review(int reviewKey, String reviewContent, int viewCnt) {
		this.reviewKey = reviewKey;
		this.reviewContent = reviewContent;
		this.viewCnt = viewCnt;
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

	@Override
	public String toString() {
		return "Review [reviewKey=" + reviewKey + ", reviewContent=" + reviewContent + ", viewCnt=" + viewCnt + "]";
	}
	
}
