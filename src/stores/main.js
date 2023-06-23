import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', () => {
    const isActive = ref(false)
    const windowWidth= ref(window.innerWidth)
    const showBackdrop = ref(false)
    const showMenu = ref(false)
    const profileExpanded = ref(false)
    const showModal = ref(false)
    const headerIndex = ref(2)
    const modalType = ref('')

    const disableScroll = () => {
        const scrollY = window.top.scrollY
        const body = document.body
        const header = document.getElementsByClassName('header')[0]
        header.style.paddingRight = `${window.innerWidth - body.clientWidth}px`
        body.style.paddingRight = `${window.innerWidth - body.clientWidth}px`
        body.style.position = 'fixed'
        body.style.top = `-${scrollY}px`
        body.style.width = '100%'
        body.style.overflow = 'hidden'
    }

    const enableScroll = () => {
        const body = document.body
        const header = document.getElementsByClassName('header')[0]
        const scrollY = body.style.top
        header.style.paddingRight = ''
        body.style.paddingRight = ''
        body.style.overflow = ''
        body.style.position = ''
        body.style.top = ''
        body.style.width = ''
        window.scrollTo({
            top: parseInt(scrollY || '0') * -1,
            behavior: "instant"
        });
        // setTimeout(() => {
        //     // body.style.overflow = ''
        // },300)
    }

    function onWidthChange () {
        windowWidth.value = window.innerWidth
    }

    function changeIndex () {
        if (headerIndex.value === 2) {
            headerIndex.value = 3
        } else {
            headerIndex.value = 2
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
            headerIndex.value = 2
        }
    }

    function showSignup() {
        showBackdrop.value = showModal.value = true
        modalType.value = 'Signup'
        if (showMenu.value) {
            headerIndex.value = 2
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
    }

    function closeModal() {
        showModal.value = false
        modalType.value = ''
        if (!showMenu.value) {
            showBackdrop.value = false
        } else {
            headerIndex.value = 3
        }
    }
    function closeAll() {
        if (showModal.value && showMenu.value) {
            headerIndex.value = 3
        } else {
            showBackdrop.value = showMenu.value = false
            headerIndex.value = 2
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
        disableScroll,
        enableScroll,
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
