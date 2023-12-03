<template>
	<!-- schedule info랑 겹쳐서 지워도 될듯 -->
    <div>
        <div class="modal fade" id="modifyModal" tabindex="-1" aria-labelledby="modifyModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="loginModalLabel">일정 수정(기존 날짜 넣어야함)</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form>
						<div class="mb-3">
							<label>날짜</label>
                            <VueDatePicker :format="date => formatDate(date)"></VueDatePicker>
						</div>
						<div class="mb-3">
							<label for="location" class="form-label">장소</label>
							<input type="text" class="form-control" id="location">
						</div>
                        <div class="mb-3">
							<label for="content" class="form-label">내용</label>
							<input type="text" class="form-control" id="content">
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="">삭제</button>
					<button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="">저장</button>

				</div>
				</div>
			</div>
		</div>

        <!-- 스케줄 추가 모달 -->
        <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
				<div class="modal-header">
					<h1 class="modal-title fs-5" id="loginModalLabel">일정 추가</h1>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<form>
						<div class="mb-3">
							<label>날짜</label>
                            <VueDatePicker :format="date => formatDate(date)"></VueDatePicker>
						</div>
						<div class="mb-3">
							<label for="location" class="form-label">장소</label>
							<input type="text" class="form-control" id="location">
						</div>
                        <div class="mb-3">
							<label for="content" class="form-label">내용</label>
							<input type="text" class="form-control" id="content">
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="">저장</button>

				</div>
				</div>
			</div>
		</div>

    </div>
</template>

<script setup>

</script>

<style scoped>

</style>