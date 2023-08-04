import React, { useEffect } from 'react';

const YourWebPage = () => {
  useEffect(() => {
    // Function to send orientation data back to Swift
    const sendOrientationData = () => {
      var orientation = '';
      if (window.matchMedia('(orientation: landscape)').matches) {
        if (window.orientation === 90) {
          orientation = 'landscapeLeft';
        } else {
          orientation = 'landscapeRight';
        }
      } else {
        orientation = 'portrait';
      }
      window.webkit.messageHandlers.orientation.postMessage(orientation);
    };

    // Listen for orientation change events and call the function
    window.addEventListener('orientationchange', sendOrientationData);
    sendOrientationData(); // Send initial orientation data on page load

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('orientationchange', sendOrientationData);
    };
  }, []);

  return (
    <div >
      <title>Your Web Page</title>
      {/* Your web content goes here */}
    </div>
  );
};

export default YourWebPage;
