import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
    const user = ref({
        id: 0,
        email: '',
        username: '',
        fullName: '',
        birthdate: '',
        country: '',
        gender: '',
        balance: 0,
        level: 0,
        mainTeam: '',
        teams: [],
        payments: [],
        gameProfile: {
            riot: '',
            battlenet: '',
            steam: ''
        }
    })
    const formData = ref({
        login: '',
        email: '',
        username: '',
        forgot: '',
        password: '',
        country: '',
        day: '',
        month: '',
        year: ''
    })
    const singleError = ref('')

    function clearForm() {
        formData.value.login = ''
        formData.value.email = ''
        formData.value.username = ''
        formData.value.forgot = ''
        formData.value.password = ''
        formData.value.country = ''
        formData.value.day = ''
        formData.value.month = ''
        formData.value.year = ''
        singleError.value = ''
    }

    return {
        user,
        formData,
        singleError,
        clearForm
    }
}, { persist: true })
