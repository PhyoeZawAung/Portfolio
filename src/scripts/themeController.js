const themeController = {
    /**
     * Initializing the theme controller
     * @param {*} element 
     */
    init(element, document) {
        console.log("initializing")
        this.getCurrentSelectedTheme(element);
        this.updateTheme(document);
        element.addEventListener("change", (e) => {
            console.log("change");
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
            this.updateTheme(document);
        });
    },

    /**
     * getting the current theme when reload
     * 
     */
    getCurrentSelectedTheme(element) {
        const theme = localStorage.getItem("theme");
        if (theme) {
            element.value = theme;
        }
    },

    /**
     * update the theme when selected the select box
     */
    updateTheme(document) {
        console.log("Updating theme")
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
            console.log("update dark mode");
        } else {
            document.documentElement.classList.remove("dark");
        }
    },
}

export default themeController;