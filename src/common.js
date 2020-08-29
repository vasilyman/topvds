import "@/assets/scss/style.scss";
import '@/assets/js/unicons-2.1.9.bundle.js';
import '@/assets/js/bootstrap.bundle.min.js';
import '@/assets/js/theme.js';

// import "@/assets/scss/theme/style.scss";

const mode = localStorage.getItem('theme');

document.addEventListener('DOMContentLoaded', () => {
    const switcher = document.querySelector('#switchTheme');

    if (mode && mode === 'dark') {
        switcher.checked = true;
    } else {
        switcher.checked = false;
    }

    const setTheme = (theme) => {
        localStorage.setItem('theme', theme);
        location.reload();
    }

    if (switcher) {
        switcher.addEventListener('change', () => {
            if (switcher.checked) {
                setTheme('dark');
            } else (
                setTheme('light')
            )
        });
    };
})

if (mode === 'dark') {
    import('@/assets/scss/theme/style-dark.scss');
} else {
    import('@/assets/scss/theme/style.scss');
}
