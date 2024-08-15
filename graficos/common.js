const getCSS = (variavel) => {
    return getComputedStyle(document.body).getPropertyValue(variavel)
}

export {getCSS}