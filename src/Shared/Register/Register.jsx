import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";


const Register = () => {
    
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
//     const navigate = useNavigate();
//     const location = useLocation();
  
//     const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
          const email = data.email;
          const PhoneNumber = data.number;
          const photoURL = data.photoURL;
          const Name = data.name;
          const pin = data.pin;
    }

    return (
        <div className="hero pt-24 min-h-screen bg-base-200">
            <div className="hero-content w-3/4 mx-auto flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">Welcome to our platform! We value your experience and make joining us as easy as possible.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="text" {...register("number", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.number && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                            {errors.photoURL && <span className="text-red-500">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Pin</span>
                            </label>
                            <input type="number" {...register("pin", { 
                                required: true, 
                                minLength: 5, 
                                maxLength: 7, 
                                
                            })} placeholder="Pin only digit" className="input input-bordered" />
                            {errors.password?.type === 'required' && <p className="text-red-600">pin is required</p>}
                            {errors.password?.type === 'minLength' && <p className="text-red-600">pin must be at least 5 characters</p>}
                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Pin must be less than 10 characters</p>}
                            
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-info border-b-4 btn-outline" />
                        </div>
                    </form>
                    <p className='text-center mb-3'>Already have an account? <Link className='text-lg text-green-500 font-bold' to={'/login'}>Login Here</Link></p>
                   
                </div>
            </div>
        </div>
    );
};

export default Register;