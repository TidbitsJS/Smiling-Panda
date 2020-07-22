const eyes = document.querySelectorAll('.eye-roll')
const sad = document.querySelector('.sad')
const smile = document.querySelector('.smile')
const mouth = document.querySelector('.mouth')

window.addEventListener('mousemove', (e) => {
  eyes.forEach(eye => {
    const x = eye.getBoundingClientRect().left + (eye.clientWidth / 2)
    const y = eye.getBoundingClientRect().top + (eye.clientHeight / 2)
    const radian = Math.atan2(e.pageX - x, e.pageY - y)
    const rot = (radian * (180 / Math.PI) * -1) + 90
    eye.style.transform = `rotate(${rot}deg)`

    // console.log(rot);
  })
})

sad.addEventListener('mouseover', (e) => {
  mouth.style.borderRadius = '2px'
})

sad.addEventListener('mouseleave', (e) => {
  mouth.style.borderRadius = '50%'
})

smile.addEventListener('mouseover', (e) => {
  mouth.style.top = '70%'
  mouth.style.left = '37%'
  mouth.style.border = '0.1rem solid black'
  mouth.style.borderRadius = '90px 90px 0 0'
  mouth.style.backgroundColor = '#fafafa'
  mouth.style.transform = 'rotate(180deg)'
  mouth.style.height = '21px'
  mouth.style.width = '45px'
})

smile.addEventListener('mouseleave', (e) => {
  mouth.style.top = '45%'
  mouth.style.left = '50%'
  mouth.style.border = '2px solid transparent'
  mouth.style.borderRadius = ' 0% 0% 50% 50%'
  mouth.style.background = 'transparent'
  mouth.style.transform = 'translate(-50%)'
  mouth.style.height = '50px'
  mouth.style.width = '50px'
  mouth.style.borderBottom = '2px solid #000'
})
