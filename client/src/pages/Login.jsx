import React, { useState } from "react";
import { Weatherly } from "../components/common/Weatherly";
import {
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiPhone,
  FiUser,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginMethod, setLoginMethod] = useState("username");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <section className='flex min-h-[calc(100vh-4rem)] items-center justify-center bg-surface px-4 py-8 font-mooli sm:px-6'>
      <div className='w-full max-w-md'>
        <div className='rounded-2xl border border-border-muted bg-main p-5 shadow-drop sm:p-8'>
          <div className='flex-col mb-7 text-center justify-items-center'>
            <Weatherly className="w-40 h-20"></Weatherly>
            <h1 className='text-2xl font-bold text-text-heading sm:text-3xl'>
              Welcome Back
            </h1>
            <p className='mt-2 text-sm font-semibold text-text-light-secondary'>
              Sign in to continue to Weatherly
            </p>
          </div>
          <div className='mb-6 grid grid-cols-2 rounded-lg bg-secondary p-1'>
            <button
              type='button'
              onClick={() => setLoginMethod("username")}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                loginMethod === "username"
                  ? "bg-accent text-secondary"
                  : "text-white hover:text-accent"
              }`}>
              Username
            </button>
            <button
              type='button'
              onClick={() => setLoginMethod("phone")}
              className={`rounded-md px-3 py-2 text-sm font-semibold transition ${
                loginMethod === "phone"
                  ? "bg-accent text-secondary"
                  : "text-white hover:text-accent"
              }`}>
              Mobile Number
            </button>
          </div>
          <form onSubmit={handleSubmit} className='space-y-5'>
            <div>
              <label
                htmlFor='login-identifier'
                className='mb-2 block text-sm font-semibold text-text-muted'>
                {loginMethod === "username" ? "Username" : "Mobile Number"}
              </label>
              <div className='relative'>
                {loginMethod === "username" ? (
                  <FiUser className='absolute left-3 top-1/2 -translate-y-1/2 text-lg text-accent-secondary' />
                ) : (
                  <FiPhone className='absolute left-3 top-1/2 -translate-y-1/2 text-lg text-accent-secondary' />
                )}
                <input
                  id='login-identifier'
                  type={loginMethod === "username" ? "text" : "tel"}
                  placeholder={
                    loginMethod === "username"
                      ? "Enter your username"
                      : "Enter your mobile number"
                  }
                  className='w-full rounded-lg border border-border-muted bg-main px-4 py-3 pl-10 font-semibold text-text-muted outline-none transition focus:border-accent'
                  required
                />
              </div>
            </div>
            <div>
              <div className='mb-2 flex items-center justify-between'>
                <label
                  htmlFor='password'
                  className='text-sm font-semibold text-text-muted'>
                  Password
                </label>
                <button
                  type='button'
                  className='text-xs font-semibold text-accent-secondary transition hover:text-text-heading'>
                  Forgot Password?
                </button>
              </div>
              <div className='relative'>
                <FiLock className='absolute left-3 top-1/2 -translate-y-1/2 text-lg text-accent-secondary' />
                <input
                  id='password'
                  type={showPassword ? "text" : "password"}
                  placeholder='Enter your password'
                  className='w-full rounded-lg border border-border-muted bg-main px-4 py-3 pl-10 pr-11 font-semibold text-text-muted outline-none transition focus:border-accent'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowPassword((prev) => !prev)}
                  className='absolute right-3 top-1/2 -translate-y-1/2 text-text-light transition hover:text-text-heading'>
                  {showPassword ? <FiEyeOff size={19} /> : <FiEye size={19} />}
                </button>
              </div>
            </div>
            <button
              type='submit'
              className='w-full rounded-lg bg-accent px-5 py-3 font-bold text-secondary shadow-subtle transition hover:bg-accent-secondary hover:text-white'>
              Login
            </button>
          </form>
          <div className='my-6 flex items-center gap-3'>
            <span className='h-px flex-1 bg-border-muted' />
            <span className='text-xs font-semibold text-text-light-secondary'>
              OR
            </span>
            <span className='h-px flex-1 bg-border-muted' />
          </div>
          <button
            type='button'
            className='flex w-full items-center justify-center gap-3 rounded-lg border border-border-muted bg-main px-5 py-3 font-semibold text-text-muted transition hover:border-accent hover:bg-secondary hover:text-white'>
            <FcGoogle size={21} />
            Continue with Google
          </button>
          <p className='mt-6 text-center text-sm font-semibold text-text-light-secondary'>
            Don't have an account?{" "}
            <button
              type='button'
              className='text-accent-secondary transition hover:text-text-heading'>
              Create Account
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};
