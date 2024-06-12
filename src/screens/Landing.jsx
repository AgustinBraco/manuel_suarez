import { useEffect } from 'react';

export const Landing = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return <main id="Landing"></main>;
};
