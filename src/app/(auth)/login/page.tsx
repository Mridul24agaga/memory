import loginImage from "@/assets/login-image.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import GoogleSignInButton from "./google/GoogleSignInButton";
import LoginForm from "./LoginForm";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <main className="flex min-h-screen bg-white">
      {/* Left side: Login Form */}
      <div className="flex flex-col justify-center w-full max-w-[20rem] py-8 px-5 md:w-[65%] space-y-6 mx-auto overflow-y-auto">
        {/* Company Logo */}
        <div className="text-center mb-6">
          <Image
            src="https://media.discordapp.net/attachments/1193183717548638301/1292820769419825222/Black_Gold_White_Luxury_Royal_Crown_Logo_1_2.png?ex=673d286a&is=673bd6ea&hm=840fa605d352c3236ddc545e6022b8761adae3d890e21dfd13c895c355d1bd81&=&format=webp&quality=lossless"
            alt="Company Logo"
            width={200}
            height={40}
            className="mx-auto"
          />
        </div>
        <div className="space-y-5">
          <LoginForm />
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="text-gray-500 text-sm">OR</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>
          <div className="flex justify-between items-center text-sm">
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up now
            </Link>
            <Link href="/reset" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>

      {/* Right side: Image */}
      <div className="hidden md:block md:w-[30%] relative">
        <Image
          src={loginImage}
          alt="Login Image"
          fill
          className="object-cover"
          priority
        />
      </div>
    </main>
  );
}