import { signin, signout, useSession } from 'next-auth/client';
import Link from "next/link"

const Header = () => {
  const [session] = useSession();

  return (
    <>
     <div className="break-words p-20 mx-auto">
        <h1 className="text-3xl font-bold">Next Auth TS Boilerplate</h1>
        
          
          {/* Login */}
          {!session && (
            <a
              href="/api/auth/signin"
              onClick={(e) => {
                e.preventDefault();
                signin();
              }}
            >
              <button className="signInButton bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Sign in</button>
            </a>
          )}

          {/* Protected Page and Sign Out */}
          {session && (
            <>
            <p>Welcome to the super secret protected page...</p>
              <img className="rounded-full mt-10 mb-10" src={session.user.image as string | undefined}></img>
              <div className="email font-bold text-3xl mt-5 mb-5 ml-5">{session.user.name}</div>
              <div className="email bg-gray-300 text-black font-bold py-2 px-4 mt-5 mb-5 ml-5 rounded">{session.user.email}</div>

              <a
                href="/api/auth/signout"
                onClick={(e) => {
                  e.preventDefault();
                  signout();
                }}
              >
                <button className="signOutButton bg-blue-500 hover:bg-blue-700 ml-5 text-white font-bold py-2 px-4 rounded m-10">Sign Out</button>
              </a>
            </>
          )}

              <br />
              <br />

          <a href="https://github.com/Sysnomid/next-ts-tailwind">Github</a>
      </div>
    </>
  );
};

export default Header;