let currentYear = new Date().getFullYear()
let copyright = document.querySelector("span#copyright")

copyright.innerHTML = `© 2020-${currentYear}`