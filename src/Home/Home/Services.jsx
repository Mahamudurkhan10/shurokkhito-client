import React from 'react';

const Services = () => {
  return (
    <div className="lg:p-8 mt-6 text-gray-800">
      <div>
        <h1 className="text-4xl font-bold text-center mb-8">Our Services</h1>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className="p-6 rounded-md shadow-md bg-white hover:shadow-2xl">
          <img src="https://i.ibb.co/n3SQQJS/cash-in-hand-icon-cartoon-style-vector-12136938.jpg" alt="Cash In" className="object-cover object-center w-full rounded-md h-72" />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">Service</span>
            <h2 className="text-xl font-semibold tracking-wide">Cash In</h2>
          </div>
          <p className="text-gray-800">Easily cash in through our network of agents without any fees. Your money is instantly credited to your account.</p>
        </div>
        <div className="p-6 rounded-md hover:shadow-2xl shadow-md bg-white">
          <img src="https://i.ibb.co/SnFsf27/download.png" alt="Send Money" className="object-cover object-center w-full rounded-md h-72" />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">Service</span>
            <h2 className="text-xl font-semibold tracking-wide">Send Money</h2>
          </div>
          <p className="text-gray-800">Send money to anyone quickly and securely. Transactions over 50 Taka include a minimal fee.</p>
        </div>
        <div className="p-6 rounded-md hover:shadow-2xl shadow-md bg-white">
          <img src="https://i.ibb.co/6Zpf9Vf/1521079793864.png" alt="Cash Out" className="object-cover object-center w-full rounded-md h-72" />
          <div className="mt-6 mb-2">
            <span className="block text-xs font-medium tracking-widest uppercase text-violet-600">Service</span>
            <h2 className="text-xl font-semibold tracking-wide">Cash Out</h2>
          </div>
          <p className="text-gray-800">Cash out easily through our agents with a minimal fee of 1.5% of the transaction amount. Your money is safe and secure.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
