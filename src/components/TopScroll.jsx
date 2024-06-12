import { useEffect, useState } from 'react';

export const TopScroll = () => {
  const [totalHeight, setTotalHeight] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateTotalHeight = () => {
      const body = document.body;
      const html = document.documentElement;

      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight,
      );

      setTotalHeight(height);
    };

    window.addEventListener('load', calculateTotalHeight);

    return () => window.removeEventListener('load', calculateTotalHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight;

      const totalScroll = documentHeight - windowHeight;
      const scrollPercentage = (scrollTop / totalScroll) * 100;

      setProgress(scrollPercentage);
      document.getElementById('TopScroll').style.width = `${scrollPercentage}%`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div id="TopScroll"></div>;
};
