import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div
      className="nav-container vw-100	 d-flex justify-content-between align-items-center"
      style={{ height: 80, boxShadow:'0 0 10px black' }}
    >
      <div className="nav-left h-auto w-auto mx-5 d-flex align-items-center">
        <Image src={"/logo.svg"} height={"50"} width={"50"} alt='Brand Logo' />
        <Link href='/' className="mx-4 fs-2 td-none">ShopBuddy</Link>
      </div>
      <div className="nav-middle h-auto w-auto d-flex justify-content-around align-items-center">
				<Link href="/" className="td-none fs-5 mx-4">Home</Link>
				<Link href="/products" className="td-none fs-5 mx-4">Products</Link>
				<Link href="/inspiration" className="td-none fs-5 mx-4">Inspiration</Link>
			</div>
      <div
        className="nav-right h-auto mx-5 d-flex justify-content-evenly align-items-center"
        style={{ width: "260px" }}
      >
        <Link href="#" className="td-none"><i className="bi bi-search fs-4" /></Link>
        <Link href="#" className="td-none"><i className="bi bi-cart3 fs-4" /></Link>
        <Link href="#" className="td-none"><i className="bi bi-person fs-4" /></Link>
      </div>
    </div>
  );
};

export default NavBar;
