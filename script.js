document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('mentalHealthForm');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const feelings = document.getElementById('feelings').value;
      const symptoms = document.getElementById('symptoms').value;
  
      try {
        const response = await fetch('/analyze-mental-health', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ feelings, symptoms })
        });
  
        if (!response.ok) {
          throw new Error('Failed to analyze mental health');
        }
  
        const { mentalHealthCondition, yogaTutorials } = await response.json();
  
        // Update mental health condition
        const mentalHealthConditionElement = document.getElementById('mentalHealthCondition');
        mentalHealthConditionElement.textContent = mentalHealthCondition;
  
        // Update yoga tutorials
        const yogaVideosElement = document.getElementById('yogaVideos');
        yogaVideosElement.innerHTML = '';
        yogaTutorials.forEach((tutorial) => {
          const iframe = document.createElement('iframe');
          iframe.setAttribute('width', '560');
          iframe.setAttribute('height', '315');
          iframe.setAttribute('src', tutorial.url);
          iframe.setAttribute('frameborder', '0');
          iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
          iframe.setAttribute('allowfullscreen', '');
          yogaVideosElement.appendChild(iframe);
        });
      } catch (error) {
        console.error('Error analyzing mental health:', error);
      }
    });
  });