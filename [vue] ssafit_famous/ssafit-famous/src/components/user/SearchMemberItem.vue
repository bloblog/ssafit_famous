<template>
    <div>
        <div>
            <input v-model="userId" placeholder="아이디를 입력하세요" style="border-radius: 10px; border: none; padding:7px">
            <button class="btn btn-dark m-2" @click="search">검색</button>
        </div>
        <div>
            <div>
                <div>검색결과</div>
                <div v-if="store.msg">{{ store.msg }}</div>

                <table v-else class="table">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">아이디</th>
                            <th scope="col">경험치</th>
                            <th scope="col">추가</th>
                        </tr>
                    </thead>
                    <tbody v-for="(user, index) in store.searchList">
                        <tr>
                            <td scope="row">{{ index+1 }}</td>
                            <td>{{ user.id }}</td>
                            <td>{{ user.exp }}</td>
                            <td @click="addUser(user)">+</td>
                        </tr>
        
                    </tbody>
                </table>
                <div>추가된 팀원</div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">No.</th>
                            <th scope="col">아이디</th>
                            <th scope="col">경험치</th>
                            <th scope="col">삭제</th>
                        </tr>
                    </thead>
                    <tbody v-for="(user, index) in store.members">
                        <tr>
                            <td scope="row">{{ index+1 }}</td>
                            <td>{{ user.id }}</td>
                            <td>{{ user.exp }}</td>
                            <td @click="deleteUser(user)">x</td>
                        </tr>
        
                    </tbody>
                </table>
                
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';
import { useUserStore } from '../stores/user';
import axios from "axios";

const store = useUserStore();

const userId = ref(null);

const outUser = ref([]);
const inUser = ref([]);

const deleteUser = function(user) {
    outUser.value.push(user);
    inUser.value.splice(user,1);
    store.members.splice(user,1);
}

const addUser = function(user) {
    if (!inUser.value.includes(user)) {
        inUser.value.push(user);
        outUser.value.splice(user,1);
        store.members.push(user);
    }
}

const search = function() {
    store.msg = "";
    store.searchList = [];
    store.userId = userId.value;
    store.searchMember();
}

</script>

<style scoped>
table{
    margin-top: 10px;
}
</style>