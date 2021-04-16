// IIFE = Immediately Invoked Function Expression

// Serve para fugir do escopo global (browser)

(function() {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

