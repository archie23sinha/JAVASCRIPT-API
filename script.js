
function fetchDogImage() {
  return new Promise((resolve, reject) => {
    
      fetch('https://dog.ceo/api/breeds/image/random')
          .then(response => {
              if (!response.ok) {
              
                  reject('Failed to fetch dog image');
              }
              
              return response.json();
          })
          .then(data => {
             
              resolve(data.message);
          })
          .catch(error => {
              
              reject('Network error: ' + error.message);
          });
  });
}


document.getElementById('getDogBtn').addEventListener('click', () => {
  const imageElement = document.getElementById('dogImage');
  
  
  fetchDogImage()
      .then(imageUrl => {
          
          imageElement.src = imageUrl;
          console.log('Image fetched successfully:', imageUrl);
      })
      .catch(error => {
        
          alert('Error fetching dog image: ' + error);
          console.error(error);
      });
});
