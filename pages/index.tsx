import React from 'react';

import Layout from '../components/layout/Layout';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <section
        className="relative h-[500px] bg-cover bg-center"
        
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Find your favorite place here!
          </h1>
          <p className="text-lg md:text-2xl">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default IndexPage;
