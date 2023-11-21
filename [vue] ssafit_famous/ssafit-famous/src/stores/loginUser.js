import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useLoginUserStore = defineStore('loginUser',()=>{
	const status = ref(false);
	const userKey = ref('');
	const userId = ref('');
	return { status, userKey, userId };
}, {persist : true} );