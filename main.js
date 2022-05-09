const url = `https://dog.ceo/api/breeds/image/random`

// console.log(url)

// button.addEventListener("click", getDogPhoto);

document.querySelector('button').addEventListener('click', getDogPhoto)

function getDogPhoto(){
  
   fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    document.querySelector('#dogPhoto').src = data.message
    
                                              
    
  })
  .catch(err => {
      console.log(`error ${err}`)
  });

}