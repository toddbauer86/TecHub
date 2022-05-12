async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="question-title"]').value;
    const question_descrip = document.querySelector('input[name="question-description"]').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        question_descrip
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-question-form').addEventListener('submit', newFormHandler);