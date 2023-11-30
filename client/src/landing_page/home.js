import React, { useState, useEffect } from 'react';

const Home = () => {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const fetchHtmlContent = async () => {
      try {
        const response = await fetch('./home.html');
        if (response.ok) {
          const html = await response.text();
          setHtmlContent(html);
        } else {
          throw new Error('Failed to fetch HTML');
        }
      } catch (error) {
        console.error('Error fetching HTML:', error);
      }
    };

    fetchHtmlContent();
  }, []);

  return (
    <div>
      {/* Other content */}
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default Home;
