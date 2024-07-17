"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [currPage, setCurrPage] = useState(pathname);
  const router = useRouter();
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const handleClick = async (e, url) => {
    e.preventDefault();
    if (currPage !== url) {
			document.getElementById(currPage).classList.remove('active-navbar-nav')
      setCurrPage(url);
      const body = document.querySelector("body");
      body?.classList.add("page-transition");
      await sleep(150);
      router.push(url);
      await sleep(150);
			document.getElementById(url).classList.add('active-navbar-nav')
      body?.classList.remove("page-transition");
    }
  };
	useEffect(() => {
		document.getElementById(pathname).classList.add('active-navbar-nav')
	}, [pathname])
	

  return (
    <div
      className="nav-container vw-100	 d-flex justify-content-between align-items-center"
      style={{ height: 80, boxShadow: "0 0 10px black" }}
    >
      <div className="nav-left h-auto w-auto mx-5 d-flex align-items-center">
        <Image src={"/logo.svg"} height={"50"} width={"50"} alt="Brand Logo" />
        <Link
          onClick={(e) => {
            handleClick(e, "/");
          }}
          href="/"
          className="mx-4 fs-2 td-none"
        >
          ShopBuddy
        </Link>
      </div>
      <div className="nav-middle h-auto w-auto d-flex justify-content-around align-items-center">
        <Link
          onClick={(e) => {
            handleClick(e, "/");
          }}
          href="/"
					id="/"
          className={`td-none fs-5 mx-4 navbar-nav`}
        >
          Home
        </Link>
        <Link
          onClick={(e) => {
            handleClick(e, "/products");
          }}
          href="/products"
					id="/products"
          className={`td-none fs-5 mx-4 navbar-nav `}
        >
          Products
        </Link>
        <Link
          onClick={(e) => {
            handleClick(e, "/inspiration");
          }}
					id="/inspiration"
          href="/inspiration"
          className={`td-none fs-5 mx-4 navbar-nav`}
        >
          Inspiration
        </Link>
      </div>
      <div
        className="nav-right h-auto mx-5 d-flex justify-content-evenly align-items-center"
        style={{ width: "260px" }}
      >
        <Link href="#" className="td-none">
          <i className="bi bi-search fs-4" />
        </Link>
        <Link href="#" className="td-none">
          <i className="bi bi-cart3 fs-4" />
        </Link>
        <Link href="#" className="td-none">
          <i className="bi bi-person fs-4" />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
