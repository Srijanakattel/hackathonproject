document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('emotionForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const feeling = document.getElementById('feeling').value;
    const frequency = document.querySelector('input[name="frequency"]:checked').value;

    // Perform analysis based on feeling and frequency
    let mentalHealthCondition;
    if (feeling === '😢' && frequency === 'daily') {
      mentalHealthCondition = 'You may be experiencing persistent sadness. Consider seeking support from a mental health professional.';
    } else if (feeling === '😢' && frequency === 'sometimes') {
      mentalHealthCondition = 'You might be experiencing occasional sadness. Engaging in self-care activities can help.';
    } else if (feeling === '😄' && frequency === 'daily') {
      mentalHealthCondition = 'You seem to be consistently happy. Keep up the positive vibes!';
    } else if (feeling === '😄' && frequency === 'sometimes') {
      mentalHealthCondition = 'You experience happiness occasionally. Finding activities that bring joy can enhance your well-being.';
    } else if (feeling === '🤔' && frequency === 'daily') {
      mentalHealthCondition = 'Persistent doubt may affect your confidence. Practicing self-reflection and seeking clarity can be beneficial.';
    } else if (feeling === '🤔' && frequency === 'sometimes') {
      mentalHealthCondition = 'Occasional doubt is normal. Cultivating self-assurance through affirmations and support networks can help.';
    } else if (feeling === '😔' && frequency === 'daily') {
      mentalHealthCondition = 'Consistent feelings of loneliness can impact mental health. Connecting with others and seeking companionship may be beneficial.';
    } else if (feeling === '😔' && frequency === 'sometimes') {
      mentalHealthCondition = 'Feeling lonely at times is common. Engaging in social activities and building meaningful connections can alleviate loneliness.';
    } else if (feeling === '😴' && frequency === 'daily') {
      mentalHealthCondition = 'Persistent sleepiness may indicate underlying issues. Ensuring a healthy sleep routine and addressing potential causes can improve overall well-being.';
    } else if (feeling === '😴' && frequency === 'sometimes') {
      mentalHealthCondition = 'Feeling sleepy occasionally is normal. Prioritizing rest and relaxation can help maintain energy levels.';
    }

    // Update mental health condition in the UI
    const mentalHealthConditionElement = document.getElementById('mentalHealthCondition');
    mentalHealthConditionElement.textContent = mentalHealthCondition;
  });
});