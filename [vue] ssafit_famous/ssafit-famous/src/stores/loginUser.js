import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLoginUserStore = defineStore('loginUser',()=>{
	const userKey = ref();
	const userId = ref();
	return { userKey, userId };
});