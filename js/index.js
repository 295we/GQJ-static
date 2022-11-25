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

let footer = document.querySelector('.footer')
console.log(iframes[1].style)
if (iframes[1].style.display == 'block') {
  console.log('录播图出来')
  footer.style.display = 'none'
}
