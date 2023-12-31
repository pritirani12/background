
(function() {
    const pictures = [
      "blog-1",
      "blog-2",
      "blog-3",
      "blog-4",
      "blog-5",
      "blog-6",
    ];
  
    //select both left and right button. Add event listeners
    const buttons = document.querySelectorAll('.btn')
    const imageDIV = document.querySelector('.image-container')
    let counter = 0
  
    buttons.forEach(function(button){
      button.addEventListener('click', function(e){
        if (button.classList.contains('btn-left')){
          counter--
          if(counter < 0){
            counter = pictures.length -1
          }
          imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
        }

        if (button.classList.contains('btn-right')){
          counter++
          if(counter > pictures.length -1){
            counter = 0
          }
          imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
        }
      })
    })
  })();