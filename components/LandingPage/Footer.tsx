import { Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-secondary text-white py-5 w-full flex flex-col items-center">
      <div className="flex my-4">
        <Link href="/" className="mx-2"><Instagram /></Link>
        <Link href="/" className="mx-2"><Facebook /></Link>
        {/* <Link href="/"></Link> */}
      </div>
      <span>
        © 2024 Acme Inc. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
