replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        element.textContent = element.textContent.replace(/fuck/gi, " 🥺")
        element.textContent = element.textContent.replace(/fucking/gi, " 🥺")
        element.textContent = element.textContent.replace(/porn/gi, " 🥺")
        element.textContent = element.textContent.replace(/sex/gi, " 🥺")
    }
}