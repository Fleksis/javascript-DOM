window.addEventListener("load", function(){

  const more_text_link = document.getElementById('more_text_link')
  
  more_text_link.addEventListener('click', function(e){
    e.preventDefault()
    var more_text_content = document.getElementById('more_text_content')
    
    more_text_content.style.display = 'block'
  })
  
});