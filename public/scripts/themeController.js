const list = {
    auto: ["fa-solid", "fa-gear", "text-gray-800", "dark:text-gray-50"],
    light: ["fa-solid", "fa-cloud-sun", "text-gray-800", "dark:text-gray-50"],
    dark: ["fa-solid", "fa-cloud-moon", "text-gray-800", "dark:text-gray-50"],
};

function init(document) {
    const themeBtn = document.getElementById("theme-select");
    setCurrentSelectedTheme(themeBtn);
    updateTheme(document);
    themeBtn.addEventListener("change", (e) => {
        const theme = e.target.value;
        switch (theme) {
            case 'dark':
                localStorage.setItem("theme", "dark");
                break;
            case 'light':
                localStorage.setItem("theme", "light");
                break;
            case 'auto':
                localStorage.removeItem("theme");
                break;
            default:
                localStorage.removeItem("theme");
                break;
        }
        updateTheme(document);
    });
}

function getCurrentTheme() {
    return localStorage.getItem("theme");
}

/**
 * setting the current theme when reload
 * 
 */
function setCurrentSelectedTheme(element) {
    const theme = getCurrentTheme();
    if (theme) {
        element.value = theme;
    }
}

/**
 * update the theme when selected the select box
 */
function updateTheme(document) {
    if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
    let classes = null;
    switch (getCurrentTheme()) {
        case 'dark':
            classes = list.dark;
            break;
        case 'light':
            classes = list.light;
            break;
        case 'auto':
            classes = list.auto;
            break;
        default:
            classes = list.auto;
            break;
    }
    updateIcon(document, classes);
}

function updateIcon(document, classes) {
    let icon_ref = document.getElementById("themeIcon");
    icon_ref.removeAttribute('class');
    console.log(icon_ref)
    classes.forEach((c) => {
        icon_ref.classList.add(c);
    });
}