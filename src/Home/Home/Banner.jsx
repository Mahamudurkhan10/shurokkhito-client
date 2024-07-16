

const Banner = () => {
     return (
          <div>
               <div
                    className="hero mb-9 h-[600px]"
                    style={{
                         backgroundImage: "url(https://i.ibb.co/RDdGnq5/pngtree-vector-business-mobile-phone-hand-payment-poster-image-261491.jpg)",
                    }}>
                    <div className="hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-black text-center">
                         <div className="lg:w-3/5 mx-auto">
                              <h1 className="mb-5 text-5xl font-bold uppercase text-yellow-900"> Shuro<span className="text-green-800">kkhito</span> </h1>
                              <p className="mb-5 text-xl font-semibold ">
                              Using Shurokkhito money transfer services provides a convenient, fast, cost-effective, and secure way to send and receive money. </p>
                              <button className="btn btn-info text-white  mt-7 ">Get Started</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Banner;