replaceText(document.body)

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE) {
        element.textContent = element.textContent.replace(/fuck/gi, " 🥺")
        element.textContent = element.textContent.replace(/Fuck/gi, " 🥺")
        element.textContent = element.textContent.replace(/fucking/gi, " 🥺")
        element.textContent = element.textContent.replace(/Fucking/gi, " 🥺")
        element.textContent = element.textContent.replace(/porn/gi, " 🥺")
        element.textContent = element.textContent.replace(/Porn/gi, " 🥺")
        element.textContent = element.textContent.replace(/sex/gi, " 🥺")
        element.textContent = element.textContent.replace(/Sex/gi, " 🥺")
        element.textContent = element.textContent.replace(/Fucked/gi, " 🥺")
        element.textContent = element.textContent.replace(/fucked/gi, " 🥺")
    }
}