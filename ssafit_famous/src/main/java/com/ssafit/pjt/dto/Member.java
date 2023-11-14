package com.ssafit.pjt.dto;

public class Member {
	private int memberKey;
	private String id;
	private String password;
	
	public Member() {}
	
	public Member(int memberKey, String id, String password) {
		this.memberKey = memberKey;
		this.id = id;
		this.password = password;
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

	@Override
	public String toString() {
		return "member [memberKey=" + memberKey + ", id=" + id + ", password=" + password + "]";
	}
	
}
