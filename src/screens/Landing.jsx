import { useEffect } from 'react';
// import {  } from '../components';

export const Landing = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main id='Landing'>
      <section className='Home'></section>
      <section className='History'></section>
      <section className='Library'></section>
      <section className='Ceramic'></section>
      <section className='Radio'></section>
    </main>
  );
};
