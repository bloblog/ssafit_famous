package com.ssafit.pjt.dto;

public class Member {
	private int memberKey;
	private String id;
	private String password;
	private int exp;
	private String memberImgPath;
	
	public Member() {}

	public Member(int memberKey, String id, String password, int exp, String memberImgPath) {
		this.memberKey = memberKey;
		this.id = id;
		this.password = password;
		this.exp = exp;
		this.memberImgPath = memberImgPath;
	}

	public int getMemberKey() {
		return memberKey;
	}

	public void setMemberKey(int memberKey) {
		this.memberKey = memberKey;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public int getExp() {
		return exp;
	}

	public void setExp(int exp) {
		this.exp = exp;
	}

	public String getMemberImgPath() {
		return memberImgPath;
	}

	public void setMemberImgPath(String memberImgPath) {
		this.memberImgPath = memberImgPath;
	}

	@Override
	public String toString() {
		return "Member [memberKey=" + memberKey + ", id=" + id + ", password=" + password + ", exp=" + exp
				+ ", memberImgPath=" + memberImgPath + "]";
	}

}
