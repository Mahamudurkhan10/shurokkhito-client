
import React from 'react';

const AboutUs = () => {
     return (
          <div className="  text-gray-800 font-sans">
               <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
               <p className="mb-4 w-3/5 mx-auto font-semibold text-center">
                    Welcome to <strong>Shurokkhito</strong>, your trusted partner in seamless, secure, and efficient online money transfers. At Shurokkhito, we are committed to revolutionizing the way you manage your finances, providing you with a reliable platform that ensures your money reaches its destination quickly and safely.
               </p>

               <div className='grid lg:grid-cols-2 grid-cols-1 lg:p-6 gap-6'>
                    <div className='card bg-green-400  p-5 '>
                         <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
                         <p className="mb-4">
                              Shurokkhito is a cutting-edge Mobile Financial Service (MFS) application designed with the user in mind. We blend advanced technology with user-friendly features to create a platform that simplifies financial transactions. Our goal is to provide a convenient, fast, and secure solution for all your money transfer needs.
                         </p>
                    </div>
                    <div className='card bg-green-400  p-5 '>

                         <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                         <p className="mb-4">
                              Our mission is to empower individuals and businesses by offering a seamless financial ecosystem that supports easy, fast, and secure transactions. We aim to bridge the gap between traditional financial services and the digital future, ensuring everyone has access to reliable and affordable money transfer solutions.
                         </p>
                    </div>


                    <div className='card bg-green-400  p-5 '>
                         <h2 className="text-2xl font-semibold mb-3">Our Values</h2>
                         <ul className="list-disc list-inside mb-4">
                              <li className="mb-2">
                                   <strong>Integrity</strong>: We operate with the highest level of integrity, ensuring that all transactions are transparent and secure.
                              </li>
                              <li className="mb-2">
                                   <strong>Innovation</strong>: We continuously innovate to improve our services and provide you with the best possible user experience.
                              </li>
                              <li className="mb-2">
                                   <strong>Customer Focus</strong>: Our users are at the heart of everything we do. We listen to your needs and strive to exceed your expectations.
                              </li>
                         </ul>

                    </div>

               </div>
               <h2 className="text-4xl text-center mt-7  font-semibold mb-5">What We Offer</h2>
              <section className='bg-gray-200 rounded-xl '>
              <div className='mt-4 mb-5 p-7'>
                    
                    <ul className=" gap-7 list-inside grid grid-cols-1 lg:grid-cols-2 mb-4">
                         <li className="mb-2">
                              <strong>User-Friendly Interface</strong>: Our platform is designed to be intuitive and easy to navigate, ensuring a smooth experience for all users.
                         </li>
                         <li className="mb-2">
                              <strong>Secure Transactions</strong>: We prioritize your security by implementing robust encryption and fraud protection measures. Your financial data and transactions are safe with us.
                         </li>
                         <li className="mb-2">
                              <strong>Quick and Efficient Transfers</strong>: Whether you're sending money to family, friends, or businesses, our platform ensures that your transactions are processed quickly, often within minutes.
                         </li>
                         <li className="mb-2">
                              <strong>Competitive Fees</strong>: We offer low and transparent fees, providing you with cost-effective solutions for both domestic and international transfers.
                         </li>
                         <li className="mb-2">
                              <strong>Comprehensive Services</strong>: From user authentication, send money, cash-out, and balance inquiries to role-based access for users, agents, and admins, our platform caters to all your financial needs.
                         </li>
                    </ul>

               </div>
               <div className='text-center '>
                    <p className="mb-4 w-3/5 font-semibold mx-auto">
                         Experience the future of financial transactions with Shurokkhito. Join our growing community and enjoy the benefits of a modern, secure, and efficient money transfer service. Whether you're a user, an agent, or an admin, Shurokkhito is here to support you every step of the way.
                    </p>

                    <h2 className="text-2xl  btn btn-success btn-outline font-semibold mb-6">Join Us</h2>

               </div>
              </section>


          </div>
     );
};

export default AboutUs;
