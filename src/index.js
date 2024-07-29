document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    let allBreeds = {};
  
    // Fetch and display dog images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        const imageContainer = document.getElementById('dog-image-container');
        data.message.forEach(imageUrl => {
          const img = document.createElement('img');
          img.src = imageUrl;
          imageContainer.appendChild(img);
        });
      })
      .catch(error => console.error('Error fetching images:', error));
  
    // Fetch and display dog breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        allBreeds = data.message;
        renderBreeds(Object.keys(allBreeds));
      })
      .catch(error => console.error('Error fetching breeds:', error));
  
    const breedContainer = document.getElementById('dog-breeds');
    const breedDropdown = document.getElementById('breed-dropdown');
  
    // Change font color on click
    breedContainer.addEventListener('click', (event) => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // Change to your preferred color
      }
    });
  
    // Filter breeds by starting letter
    breedDropdown.addEventListener('change', (event) => {
      const selectedLetter = event.target.value;
      const filteredBreeds = Object.keys(allBreeds).filter(breed => breed.startsWith(selectedLetter));
      renderBreeds(filteredBreeds);
    });
  
    function renderBreeds(breeds) {
      breedContainer.innerHTML = '';
      breeds.forEach(breed => {
        const li = document.createElement('li');
        li.innerText = breed;
        breedContainer.appendChild(li);
      });
    }
  });
s  