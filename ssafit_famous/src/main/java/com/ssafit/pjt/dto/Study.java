package com.ssafit.pjt.dto;

import java.sql.Date;

public class Study {
	private int studyKey;
	private String studyName;
	private String category;
	private Date studyStart;
	private Date studyEnd;
	
	public Study() {}

	public Study(int studyKey, String studyName, String category, Date studyStart, Date studyEnd) {
		this.studyKey = studyKey;
		this.studyName = studyName;
		this.category = category;
		this.studyStart = studyStart;
		this.studyEnd = studyEnd;
	}

	public int getStudyKey() {
		return studyKey;
	}

	public void setStudyKey(int studyKey) {
		this.studyKey = studyKey;
	}

	public String getStudyName() {
		return studyName;
	}

	public void setStudyName(String studyName) {
		this.studyName = studyName;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Date getStudyStart() {
		return studyStart;
	}

	public void setStudyStart(Date studyStart) {
		this.studyStart = studyStart;
	}

	public Date getStudyEnd() {
		return studyEnd;
	}

	public void setStudyEnd(Date studyEnd) {
		this.studyEnd = studyEnd;
	}

	@Override
	public String toString() {
		return "Study [studyKey=" + studyKey + ", studyName=" + studyName + ", category=" + category + ", studyStart="
				+ studyStart + ", studyEnd=" + studyEnd + "]";
	}
	
}
