import React from "react";
import Link from "next/link";

function pageSignin() {
  return (
    <>
      <div className="flex justify-between items-center px-48 mt-10">
        <div className="w-2/3">
          <img src="/Title.svg" alt="" />
        </div>
        <div className="bg-white/10 w-1/3 rounded-3xl p-12">
          <h1 className="text-4xl font-bold text-white">SIGN IN</h1>
          <form className="pt-16" action="">
            <label className="input rounded-3xl flex items-center py-6 px-6 gap-4 mb-6 bg-white text-black text-xl">
              <i class="fa-solid fa-envelope"></i>
              <input type="text" className="grow" placeholder="Email" />
            </label>

            <label className="input rounded-3xl flex items-center py-6 px-6 gap-4 bg-white text-black text-xl">
              <i class="fa-solid fa-lock"></i>
              <input type="password" className="grow" placeholder="Password" />
            </label>
          </form>

          <div className="flex items-center justify-between mt-10 px-6">
            <Link
              href="/reset-password"
              className="text-md hover:underline underline-offset-1 flex items-center font-bold"
            >
              Forget Password ?
            </Link>
            <button className="btn btn-md bg-primary hover:bg-primary/50 border-none rounded-full text-white w-36 font-bold">
              Sign In
            </button>
          </div>

          <div className="flex justify-center pt-28">
            <Link href="/Signup" className="hover:underline underline-offset-1 flex items-center text-md font-bold">
              Create Your Account &nbsp;<i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="divider pt-8 font-bold">OR</div>

          <div className="flex justify-center pt-8">
            <button className="btn px-10 rounded-3xl bg-white text-black hover:bg-white/70 border-none font-bold">
              <img className="w-7" src="/Google.svg" alt="" />
              <p>Google</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default pageSignin;
