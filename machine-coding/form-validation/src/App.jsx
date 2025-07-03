import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (password.length < 5) {
      setError("Password must be at least 5 characters long");
      return;
    }
    if (password != confirmPass) {
      setError("Confirm Password must be same as password");
      return;
    }

    // RegEx
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
      setError("Password must contain at least one special character");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return;
    }
    if (!/[a-z]/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return;
    }
    if (!/[0-9]/.test(password)) {
      setError("Password must contain at least one number");
      return;
    }

    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    toast("Login Successful 🚀");
  }

  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='w-72 px-6 py-10 rounded-md bg-white'>
        <h2 className='text-slate-400 text-xl font-bold mb-5 text-center'>
          Create an Account
        </h2>
        <form className='flex flex-col gap-4' onSubmit={e => handleSubmit(e)}>
          <input
            className='px-2 py-1 font-semibold text-gray-400 border-1 border-gray-400 rounded-md outline-none'
            type='text'
            placeholder='Name'
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <input
            className='px-3 py-1 font-semibold text-gray-400 border-1 border-gray-400 rounded-md outline-none'
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            className='px-3 py-1 font-semibold text-gray-400 border-1 border-gray-400 rounded-md outline-none'
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <input
            className='px-3 py-1 font-semibold text-gray-400 border-1 border-gray-400 rounded-md outline-none'
            type='password'
            placeholder='Confirm Password'
            value={confirmPass}
            onChange={e => setConfirmPassword(e.target.value)}
            required
          />

          {error && <p className='text-red-500 text-center mt-3 '>{error}</p>}

          <button className='px-3 py-1 bg-sky-700 rounded-md text-white mt-5 cursor-pointer'>
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default App;
