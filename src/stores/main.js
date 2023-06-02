import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    const isActive = ref(false)
    const windowWidth= ref(window.innerWidth)
    const showBackdrop = ref(false)
    const showMenu = ref(false)
    const profileExpanded = ref(false)
    const showModal = ref(false)
    const headerIndex = ref(1)
    const modalType = ref({
        login: false,
        signup: false,
        signupNext: false,
        signupDone: false,
        forgotPass: false,
        reportScores: false
    })
    const customSelect = ref({
        active: false,
        input: '',
        selected: ''
    })


    function onWidthChange () {
        windowWidth.value = window.innerWidth
    }

    function toggleMenu () {
        showBackdrop.value = showMenu.value = !showMenu.value
        if (headerIndex.value === 1) {
            headerIndex.value = 2
        } else {
            headerIndex.value = 1
        }
    }

    function toggleProfile () {
        profileExpanded.value = !profileExpanded.value
        // if (showMenu.value) {
        //     toggleMenu()
        // }
    }

    // // display modals
    function showLogin() {
        showBackdrop.value = showModal.value = modalType.value.login = true
        modalType.value.signup = modalType.value.forgotPass = false
        if (showMenu.value) {
            headerIndex.value = 1
        }
    }
    function showSignup() {
        showBackdrop.value = showModal.value = modalType.value.signup = true
        modalType.value.login = false
        if (showMenu.value) {
            headerIndex.value = 1
        }
    }
    function showNext() {
        showBackdrop.value = showModal.value = modalType.value.signupNext = true
        modalType.value.signup = false
    }
    function showDone() {
        showBackdrop.value = showModal.value = modalType.value.signupDone = true
        modalType.value.signupNext = false
    }
    function showForgot() {
        showBackdrop.value = showModal.value = modalType.value.forgotPass = true
        modalType.value.login = false
    }
    function showReport() {
        showBackdrop.value = showModal.value = modalType.value.reportScores = true
        // modalType.value.login = modalType.value.signup = modalType.value.signupNext = modalType.value.signupDone = modalType.value.forgotPass = false
        // if (showMenu.value) {
        //     headerIndex.value = 1
        // }
    }

    function closeModal() {
        showModal.value = modalType.value.login = modalType.value.signup = modalType.value.signupNext = modalType.value.signupDone = modalType.value.forgotPass = modalType.value.reportScores = customSelect.value.active = false
        customSelect.value.input = customSelect.value.selected = ''
        if (!showMenu.value) {
            showBackdrop.value = false
        } else {
            headerIndex.value = 2
        }
    }
    function closeAll() {
        if (showModal.value && showMenu.value) {
            headerIndex.value = 2
        } else {
            showBackdrop.value = showMenu.value = false
            headerIndex.value = 1
        }
        closeModal()
    }

    return {
        isActive,
        windowWidth,
        showBackdrop,
        showMenu,
        profileExpanded,
        showModal,
        headerIndex,
        modalType,
        customSelect,
        onWidthChange,
        toggleMenu,
        toggleProfile,
        showLogin,
        showSignup,
        showNext,
        showDone,
        showForgot,
        showReport,
        closeModal,
        closeAll
    }
})
