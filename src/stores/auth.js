import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const currentUser = ref(undefined)

    function logout () {
        currentUser.value = undefined
        window.localStorage.removeItem('isAuthorised')
    }

    return {
        currentUser,
        logout
    }
}, { persist: true })
