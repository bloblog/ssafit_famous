<!-- 현재 진행중인 스터디 리스트 -->
<template>
    <div>
        <h3>현재 진행중인 스터디</h3>
        <p>스터디명 클릭 시 상세페이지로 이동합니다.</p>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">No</th>
                    <th scope="col">스터디명</th>
                    <th scope="col">카테고리</th>
                    <th scope="col">시작일</th>
                    <th scope="col">종료일</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">1</td>
                    <td><RouterLink to="studyDetail">빛나는 코드 마법사들</RouterLink></td>
                    <td>코딩</td>
                    <td>2023.09.30</td>
                    <td>2023.12.31</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>

</script>

<style scoped>
a{
    text-decoration: none;
}
</style>