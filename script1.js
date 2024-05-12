document.addEventListener('DOMContentLoaded', () => {
    const location = document.getElementById('location').value; // Assuming you have an input field with the id 'location' where the user enters their location
    
    // Fetch data of mental health specialists based on user's location
    fetch(`/get-specialists?location=${location}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch specialists');
        }
        return response.json();
      })
      .then(data => {
        displaySpecialists(data);
      })
      .catch(error => {
        console.error('Error fetching specialists:', error);
      });
  
    function displaySpecialists(specialists) {
      const specialistsDiv = document.getElementById('specialists');
      specialistsDiv.innerHTML = ''; // Clear existing content
  
      specialists.forEach(specialist => {
        const specialistCard = `
          <div class="specialist-card">
            <h3>${specialist.name}</h3>
            <p>Location: ${specialist.location}</p>
            <p>Contact Number: ${specialist.contact}</p>
          </div>
        `;
        specialistsDiv.insertAdjacentHTML('beforeend', specialistCard);
      });
    }
  });