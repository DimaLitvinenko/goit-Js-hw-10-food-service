import myRefs from './refs';
const { bodyRef, switchBtn } = myRefs;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

// switchBtn.checked === false = light-theme
// switchBtn.checked === true = dark-theme

const saveTheme = () => {
    const currentTheme = localStorage.getItem('theme') === 'dark';

    if (currentTheme) {
    switchBtn.checked = true;
    bodyRef.classList.add(Theme.DARK);
    }
    else {
      switchBtn.checked = false;
      bodyRef.classList.remove(Theme.DARK)
      bodyRef.classList.add(Theme.LIGHT)
    }
};

saveTheme();

const switchBtnHandler = ({ target }) => {
    if(target.checked) {
        bodyRef.classList.remove(Theme.LIGHT)
        bodyRef.classList.add(Theme.DARK)
        localStorage.setItem('theme', 'dark')
    } else {
        bodyRef.classList.remove(Theme.DARK)
        bodyRef.classList.add(Theme.LIGHT)
        localStorage.setItem('theme', 'light')
    }
};

switchBtn.addEventListener('change', switchBtnHandler);

