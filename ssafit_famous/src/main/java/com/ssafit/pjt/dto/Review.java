package com.ssafit.pjt.dto;

public class Review {
	private int reviewKey;
	private String reviewContent;
	
	public Review() {}

	public Review(int reviewKey, String reviewContent) {
		this.reviewKey = reviewKey;
		this.reviewContent = reviewContent;
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

	@Override
	public String toString() {
		return "Review [reviewKey=" + reviewKey + ", reviewContent=" + reviewContent + "]";
	}
	
}
