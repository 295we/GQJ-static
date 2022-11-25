let movieImg = document.querySelectorAll('.movieImg')
movieImg.forEach((item, index) => {
  item.onmouseover = function () {
    switch (index) {
      case 0:
        item.innerHTML = '天空之城'
        break
      case 1:
        item.innerHTML = '魔女宅急便'
        break
      case 2:
        item.innerHTML = '千与千寻'
        break
      case 3:
        item.innerHTML = '悬崖上的波妞'
        break
      case 4:
        item.innerHTML = '龙猫'
        break
      default:
        break
    }
  }
  item.onmouseout = function () {
    item.innerHTML = `<img src="./image/movie${index + 1}.gif" alt="">`
    if (index==0){
        item.innerHTML = `<img src="./image/movie${index + 1}.jpeg" alt="天空之城">`
    }
  }
})
