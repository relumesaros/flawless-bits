export const getElementDistanceFromTopOfWindow = (id: string) => {
    const element = document.getElementById(id);
    if (!element) {
        return 1;
    }
    return element.getBoundingClientRect().top;
};
