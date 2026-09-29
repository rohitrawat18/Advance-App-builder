import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  UserButton,
  SignInButton,
  SignUpButton,
  Show,
} from "@clerk/nextjs";

import { Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 z-50 h-16 w-full border-b border-white/10 bg-white/5 backdrop-blur-md">
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Forge Logo"
            width={100}
            height={100}
            className="h-9 w-auto rounded-md"
          />
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          <Show when="signed-in">
            {/* Projects */}
          <Link
            href="/projects"
            className="text-[13px] font-medium text-white/40 transition-colors hover:text-white/80"
          >
            Projects
          </Link>

          {/* Credits */}
          <span className="inline-flex h-8 items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 text-xs text-white/70">
            <Zap className="h-3 w-3 fill-white/70" />
            3/40 credits
          </span>
            <UserButton />
          </Show>

          

          {/* Logged Out */}
          <Show when="signed-out">

            <SignInButton mode="modal">
              <button className="cursor-pointer text-sm font-medium text-white/70 transition-colors hover:text-white">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="h-10 cursor-pointer rounded-full bg-purple-700 px-4 text-sm font-medium text-white transition-colors hover:bg-purple-600 sm:h-12 sm:px-5 sm:text-base">
                Sign Up
              </button>
            </SignUpButton>

          </Show>

          {/* Logged In */}
          

        </div>
      </nav>
    </header>
  );
};

export default Header;