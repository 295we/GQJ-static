let iframes = document.querySelectorAll('iframe')
let allA = document.querySelectorAll('a')
iframes[0].style.display = 'block'
allA[0].style.color = 'red'
allA.forEach((a, i) => {
  a.onclick = function () {
    allA.forEach(item => {
      item.style.color = '#000'
    })
    a.style.color = 'red'
    iframes.forEach(item => {
      item.style.display = 'none'
    })
    iframes[i].style.display = 'block'
  }
})

let footer = document.querySelector('.footer')
if (iframes[1].style.display == 'block') {
  footer.style.display = 'none'
}

const select2 = document.querySelector('.guoxinye-select2')
select2.style.display = 'none'
allA[3].onmouseenter = function () {
  select2.style.display = 'flex'
}
/* allA[3].onmouseleave = function () {
  select2.style.display = 'none'
} */
select2.onmouseleave = function () {
  select2.style.display = 'none'
}
const tkzc = document.querySelector('.tkzc-if')
