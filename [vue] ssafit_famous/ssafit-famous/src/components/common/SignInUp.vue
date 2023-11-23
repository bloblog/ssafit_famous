<!-- 로그인, 회원가입 모달 -->
<template>
	<div>
		<!-- 로그인 모달 -->
		<div class="modal fade" id="loginModal" tabindex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="loginModalLabel">로그인</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form>
						<div class="mb-3">
							<label for="userid" class="form-label">아이디</label>
							<input type="text" class="form-control" id="userid" v-model.lazy="store.id">
						</div>
						<div class="mb-3">
							<label for="userpw" class="form-label">비밀번호</label>
							<input type="password" class="form-control" id="userpw" v-model.lazy="store.pw">
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="b btn btn-secondary" data-bs-dismiss="modal" @click="store.signout">취소</button>
					<button type="button" class="g btn btn-primary" data-bs-dismiss="modal" @click="store.signin">로그인</button>
				</div>
				</div>
			</div>
		</div>

		<!-- 회원가입 모달 -->
		<div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="signupModalLabel">회원가입</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form>
						<div class="mb-3">
							<label for="newid" class="form-label">아이디</label>
							<input type="text" class="form-control" id="newid" v-model="store.id">
							<button type="button" class="btn" @click="store.idCheck">중복확인</button>
							<div v-if="store.validIdCheck">
								<p v-if="!store.validId">이미 존재하는 아이디입니다.</p>
								<p v-else>사용할 수 있는 아이디입니다.</p>
							</div>
						</div>
						<div class="mb-3">
							<label for="newpw" class="form-label">비밀번호</label>
							<input type="password" class="form-control" id="newpw" v-model="store.pw" v-bind:disabled="!store.validIdCheck || !store.validId">
						</div>
						<div class="mb-3">
							<label for="newpwcheck" class="form-label">비밀번호 확인</label>
							<input type="password" class="form-control" id="newpwcheck" v-model="store.pwcheck" v-bind:disabled="!store.validIdCheck || !store.validId">
						</div>
						<div v-if="store.pwcheck!=null">
							<p v-if="store.signinConfirm">비밀번호가 일치합니다.</p>
							<p v-else>비밀번호가 일치하지 않습니다.</p>
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="b btn btn-secondary" data-bs-dismiss="modal" @click="store.signout">취소</button>
					<button type="button" class="g btn btn-primary" data-bs-dismiss="modal" @click="store.signup" v-bind:disabled="!store.validId || !store.signinConfirm">회원가입</button>
				</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useLoginUserStore } from '../stores/loginUser';
const store = useLoginUserStore();

onMounted(() => {
	store.id = null;
    store.pw = null;
	store.validIdCheck = false;
	store.pwcheck = null;
});
</script>

<style scoped>

</style>