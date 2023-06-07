import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const currentUser = ref(undefined)

    function logout () {
        currentUser.value = undefined
    }

    return {
        currentUser,
        logout
    }
}, { persist: true })
