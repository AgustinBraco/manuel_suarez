import { useEffect } from 'react';

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <main id="Contact"></main>;
};
