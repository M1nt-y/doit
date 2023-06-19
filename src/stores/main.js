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
    const modalType = ref('')


    function onWidthChange () {
        windowWidth.value = window.innerWidth
    }

    function changeIndex () {
        if (headerIndex.value === 1) {
            headerIndex.value = 2
        } else {
            headerIndex.value = 1
        }
    }

    function toggleMenu () {
        showBackdrop.value = showMenu.value = !showMenu.value
        if (profileExpanded.value) {
            profileExpanded.value = false
        }
        changeIndex()
    }

    function toggleProfile () {
        profileExpanded.value = !profileExpanded.value
        if (showMenu.value) {
            showBackdrop.value = showMenu.value = false
            changeIndex()
        }
    }

    // display modals
    function showLogin() {
        showBackdrop.value = showModal.value = true
        modalType.value = 'Login'
        if (showMenu.value) {
            headerIndex.value = 1
        }
    }

    function showSignup() {
        showBackdrop.value = showModal.value = true
        modalType.value = 'Signup'
        if (showMenu.value) {
            headerIndex.value = 1
        }
    }

    function showNext() {
        showBackdrop.value = showModal.value = true
        modalType.value = 'Signup Next'
    }

    function showDone() {
        showBackdrop.value = showModal.value = true
        modalType.value = 'Signup Done'
    }

    function showForgot() {
        showBackdrop.value = showModal.value = true
        modalType.value = 'Forgot password'
    }

    function showReport() {
        showBackdrop.value = showModal.value = true
        modalType.value = 'Report scores'
        // if (showMenu.value) {
        //     headerIndex.value = 1
        // }
    }

    function closeModal() {
        showModal.value = false
        modalType.value = ''
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
