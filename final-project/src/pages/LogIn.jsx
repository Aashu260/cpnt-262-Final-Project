
const LogIn = () => {
  return (
    <div className="h-auto bg-amber-100 px-12 py-24 flex items-center justify-center">
      <div className="bg-zinc-800 rounded-lg px-16 py-5 ">
        <p className="text-zinc-200 text-xl flex justify-center items-center">Log In</p>
        <div className="mt-4">
          <div>
            <label>Username</label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="username"
              name="username"
              required
            />
          </div>
          <div className="mt-6">
            <label>Password</label>
            <input
              type="text"
              className="w-full mt-2 bg-zinc-900 text-zinc-100 p-2 outline-none"
              placeholder="password"
              name="password"
              required
            />
          </div>
          <div className="mt-9 flex justify-center items-center">
            <button className="text-white bg-red-600 hover:bg-red-500 focus:ring-4 focus:outline-none focus:bg-amber-200 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-amber-200 dark:hover:bg-amber-500 dark:focus:bg-amber-800">
              LogIn
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn
