<template>
    <div>
        <div>
            <input v-model="searchId" placeholder="아이디를 입력하세요">
            <button>검색</button>
        </div>
        <div>
            <h4>결과 리스트</h4>
            <div>
                <div v-for="(id, index) in memberList">
                    {{ index }} : {{ id }}
                    <button @click="deleteUser(id)">X</button>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const searchId = ref(null);

const memberList = ref(['soyi', 'hyeseung']);
const outUser = ref([]);
const inUser = ref([]);

const deleteUser = function(id) {
    outUser.value.push(id);
    memberList.value.splice(id,1);
}

</script>

<style scoped>

</style>