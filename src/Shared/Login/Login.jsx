import { Link } from "react-router-dom";


const Login = () => {
   const handleLoginForm =(e) =>{
     e.preventDefault()

     const email = e.target.email.value;
     const number = e.target.number.value;
     const pin = e.target.pin.value;

     console.log('add hoise',email,number,pin);
   }
     return (
          <div className="hero min-h-screen  bg-gray-200">
               <div className="hero-content w-3/4 mx-auto  flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                         <h1 className="text-5xl font-bold">Login now!</h1>
                         <p className="py-6">Welcome to our platform! This is a good website where your experience matters to us, and we’ve made logging in easier than ever.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl p-6 bg-base-100">
                         <form onSubmit={handleLoginForm} className="card-body">
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">Email</span>
                                   </label>
                                   <input type="email" name="email" placeholder="email" className="input input-bordered"  />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text"> Phone Number </span>
                                   </label>
                                   <input type="text" name="number" placeholder="phone Number" className="input input-bordered"  />
                              </div>
                              <div className="form-control">
                                   <label className="label">
                                        <span className="label-text">pin</span>
                                   </label>
                                   <input type="number" name="pin" placeholder="password" className="input input-bordered" required />

                              </div>

                              <div className="form-control mt-6">
                                   <input type="submit" value="Login" className="btn btn-success" />
                              </div>
                         </form>
                         <p className='text-center '> New User?? <Link className='text-lg text-green-500 font-bold' to={'/register'}> Create Account </Link> </p>


                    </div>



               </div>
          </div>
     );
};
     

export default Login;