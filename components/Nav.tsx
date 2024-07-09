"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, getProviders, ClientSafeProvider } from "next-auth/react";

const Nav = () => {
  const isUserLogged = true;
  const [providers, setProviders] = useState<Record<string, ClientSafeProvider> | null>(null);
  useEffect(() => {
    const setThisProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setThisProviders();
  });
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          width={30}
          height={30}
          className="object-contain"
          alt="profile"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop nav */}
      <div className="sm:flex hidden">
        {isUserLogged ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={() => signOut()} className="outline_btn">
              Sign Out
            </button>
            <Link href={"/profile"}>
              <Image
                src={"assets/images/logo.svg"}
                alt="profile"
                width={37}
                height={37}
                className="rounded-full"
              ></Image>
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button className="black_btn" key={provider.id} onClick={() => signIn()}>
                  Sign In with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>
      {/* Mobile nav */}
      <div className="sm:hidden flex relative">
        {isUserLogged ? (
          <div className="flex">
            <Image
              src={"assets/images/logo.svg"}
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => {}}
            ></Image>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button className="black_btn" key={provider.id} onClick={() => signIn()}>
                  Sign In with {provider.name}
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
