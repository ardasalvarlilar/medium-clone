import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="bg-yellow-400 items-center justify-around border-b-2 border-black px-5 py-3">
        <div className="container m-auto flex items-center justify-between">
          <div className="logo ">
            <img className="w-56" src="https://miro.medium.com/v2/resize:fit:8978/1*s986xIGqhfsN8U--09_AdA.png" alt="" />
          </div>

          <div className="menu flex gap-5 items-center">
            <Link >Our Story</Link>
            <Link >Membership</Link>
            <Link >Write</Link>
            <Link to='/login'>Sign in</Link>
            <Link to='/register' className="bg-black text-white p-3 rounded-3xl">Get Started</Link>
          </div>

        </div>
      </div>
    </>
  )
}