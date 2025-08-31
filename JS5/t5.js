async function getUserData() {
  const resultsDiv = document.getElementById('getUserResults');
  resultsDiv.innerHTML = 'Loading...';

  try {
    const options = {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    };

    const response = await fetch('https://reqres.in/api/users/1', options);
    const data = await response.json();

    console.log('User data:', data);
    resultsDiv.innerHTML = `
      <div class="success">
        <h4>User Data Retrieved:</h4>
        <p><strong>Name:</strong> ${data.data.first_name} ${data.data.last_name}</p>
        <p><strong>Email:</strong> ${data.data.email}</p>
        <p><strong>Avatar:</strong> <img src="${data.data.avatar}" alt="Avatar" style="width: 50px; height: 50px; border-radius: 25px;"></p>
        <p><em>Check console for full response</em></p>
      </div>
    `;
  } catch (error) {
    console.error('Error fetching user data:', error);
    resultsDiv.innerHTML = `<div class="error">Error: ${error.message}</div>`;
  }
}

async function createUser() {
  const resultsDiv = document.getElementById('postResults');
  resultsDiv.innerHTML = 'Creating user...';

  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(user),
    };

    const response = await fetch('https://reqres.in/api/users', options);
    const data = await response.json();

    console.log('Created user:', data);
    resultsDiv.innerHTML = `
      <div class="success">
        <h4>User Created Successfully:</h4>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Job:</strong> ${data.job}</p>
        <p><strong>ID:</strong> ${data.id}</p>
        <p><strong>Created at:</strong> ${new Date(data.createdAt).toLocaleString()}</p>
        <p><em>Check console for full response</em></p>
      </div>
    `;
  } catch (error) {
    console.error('Error creating user:', error);
    resultsDiv.innerHTML = `<div class="error">Error: ${error.message}</div>`;
  }
}

async function testErrorHandling(method) {
  const resultsDiv = document.getElementById('errorResults');
  resultsDiv.innerHTML = `Testing ${method} error handling...`;

  try {
    const options = {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
    };

    if (method === 'POST' || method === 'PUT') {
      options.body = JSON.stringify({ name: 'Test', job: 'Tester' });
    }

    const response = await fetch('https://reqres.in/api/unknown/23', options);

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();
    console.log('Unexpected success:', data);
  } catch (error) {
    console.error(`Error with ${method} request:`, error);
    resultsDiv.innerHTML = `
      <div class="error">
        <h4>${method} Error Handled:</h4>
        <p><strong>Error:</strong> ${error.message}</p>
        <p><strong>Method:</strong> ${method}</p>
        <p><em>Check console for full error details</em></p>
      </div>
    `;
  }
}

async function fetchData(url, options = {}) {
  try {
    if (!options.headers) {
      options.headers = {};
    }
    if (!options.headers['x-api-key']) {
      options.headers['x-api-key'] = 'reqres-free-v1';
    }

    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status} - ${response.statusText}`
      );
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Fetch failed: ${error.message}`);
  }
}

async function testFetchData() {
  const resultsDiv = document.getElementById('genericResults');
  resultsDiv.innerHTML = 'Testing generic fetch function...';

  try {
    const user = {
      name: 'Jane Smith',
      job: 'Designer',
    };

    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    const userData = await fetchData(url, options);
    console.log('Generic function result:', userData);

    resultsDiv.innerHTML = `
      <div class="success">
        <h4>Test Successful:</h4>
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Job:</strong> ${userData.job}</p>
        <p><strong>ID:</strong> ${userData.id}</p>
      </div>
    `;
  } catch (error) {
    console.error('An error occurred:', error);
    resultsDiv.innerHTML = `<div class="error">Error: ${error.message}</div>`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('Fetch API Exercises loaded successfully!');
  console.log('All exercises are ready to test.');
});
