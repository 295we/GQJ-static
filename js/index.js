let iframes = document.querySelectorAll('iframe')
let allA = document.querySelectorAll('a')
iframes[0].style.display = 'block'
allA.forEach((a, i) => {
  a.onclick = function () {
    iframes.forEach(item => {
      item.style.display = 'none'
    })
    iframes[i].style.display = 'block'
  }
})
