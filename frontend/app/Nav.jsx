"use client";

import { LiaDumbbellSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";

const links = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Profile",
    link: "/profile",
  },
  {
    name: "Settings",
    link: "/settings",
  },
];

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="flex relative flex-row justify-between items-center">
      <div className="flex justify-start items-center text-3xl">
        <LiaDumbbellSolid size={40} />
        <h1 className="ml-1">Fitlab</h1>
      </div>
      <div>
        {showMenu ? (
          <IoClose size={40} onClick={() => setShowMenu(false)} />
        ) : (
          <HiMenu size={40} onClick={() => setShowMenu(true)} />
        )}
      </div>
      {showMenu && (
        <div className="bg-gray-800 text-white p-10 rounded-3xl space-y-6 shadow-xl absolute flex top-10 right-0 flex-col items-end">
          {links.map((link) => (
            <Link href={link.link}>{link.name}</Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Nav;
