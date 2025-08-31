const targetElement = document.getElementById('target');

function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName = 'Unknown';
  let browserVersion = 'Unknown';

  switch (true) {
    case userAgent.includes('Chrome') && !userAgent.includes('Edg'): {
      browserName = 'Google Chrome';
      const chromeMatch = userAgent.match(/Chrome\/(\d+)/);
      browserVersion = chromeMatch ? chromeMatch[1] : 'Unknown';
      break;
    }
    case userAgent.includes('Firefox'): {
      browserName = 'Firefox';
      const firefoxMatch = userAgent.match(/Firefox\/(\d+)/);
      browserVersion = firefoxMatch ? firefoxMatch[1] : 'Unknown';
      break;
    }
    case userAgent.includes('Safari') && !userAgent.includes('Chrome'): {
      browserName = 'Safari';
      const safariMatch = userAgent.match(/Version\/(\d+)/);
      browserVersion = safariMatch ? safariMatch[1] : 'Unknown';
      break;
    }
    case userAgent.includes('Edg'): {
      browserName = 'Microsoft Edge';
      const edgeMatch = userAgent.match(/Edg\/(\d+)/);
      browserVersion = edgeMatch ? edgeMatch[1] : 'Unknown';
      break;
    }
  }

  return `${browserName}, ${browserVersion}`;
}

function getOperatingSystem() {
  const userAgent = navigator.userAgent;
  if (userAgent.includes('Windows')) return 'Windows';
  if (userAgent.includes('Mac')) return 'macOS';
  if (userAgent.includes('Linux')) return 'Linux';
  if (userAgent.includes('Android')) return 'Android';
  if (userAgent.includes('iOS')) return 'iOS';
  return 'Unknown';
}

function getCurrentDateTime() {
  const now = new Date();
  const dateOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
  };

  const date = now.toLocaleDateString('fi-FI', dateOptions);
  const time = now.toLocaleTimeString('fi-FI', timeOptions);

  return {date, time};
}

const browserInfo = getBrowserInfo();
const os = getOperatingSystem();
const screenWidth = screen.width;
const screenHeight = screen.height;
const availableWidth = screen.availWidth;
const availableHeight = screen.availHeight;
const dateTime = getCurrentDateTime();

targetElement.innerHTML = `
  <p>Browser name and version: ${browserInfo}</p>
  <p>Operating system name: ${os}</p>
  <p>Screen width and height: ${screenWidth} x ${screenHeight}</p>
  <p>Available screen space for the browser: ${availableWidth} x ${availableHeight}</p>
  <p>Current date: ${dateTime.date}</p>
  <p>Current time: ${dateTime.time}</p>
`;
