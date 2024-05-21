import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captcha=useRef(null)
    const [disable,setDisable]=useState(true)

    useEffect(()=>{
        loadCaptchaEnginge(6); 

    },[])

    const handleSubmit=event=>{
        event.preventDefault()
        const email=event.target.email.value 
        const password=event.target.password.value
        console.log(email,password); 
    }

    const handleCaptchaValidate=()=>{
        const captchaValue=captcha.current.value
        if(validateCaptcha(captchaValue)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
              ref={captcha}
                type="text"
                name="captcha"
                placeholder="write the text above"
                className="input input-bordered"
                required
              />
              <button onClick={handleCaptchaValidate} className="btn btn-xs  btn-outline btn-accent mt-3">Validate</button>
              
            </div>
            <div className="form-control mt-6">
              
              <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
