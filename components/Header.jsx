"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { debounce } from "debounce";
import { CartContext } from "@/components/CartContext";
import { BiSearch, BiGridAlt, BiLoader } from "react-icons/bi";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineClose,
  AiOutlinePlus,
  AiOutlineMinus,
} from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";

import { images } from "../public/assets/index";
import { headerCatDropdown, menuCategory } from "../constants/index";
import ClientOnly from "./ClientOnly";

const Header = ({
  isOpen,
  setIsOpen,
  activeItem,
  toggleItem,
  isOpenMenu,
  setIsOpenMenu,
  filterSearch,
}) => {
  const [search, setSearch] = useState("");
  const [buttonVisible, setButtonVisible] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const { cartProducts } = useContext(CartContext);
  const { data: session } = useSession();

  const handleDivClick = () => {
    // Toggle the visibility of the button
    setButtonVisible(!buttonVisible);
  };

  const handleButtonLeave = () => {
    // Hide the button when the cursor leaves it
    setButtonVisible(false);
  };

  useEffect(() => {
    const handleSearchName = debounce(async () => {
      const filteredResults = filterSearch.filter(
        (product) =>
          (product?.title).toLowerCase().includes(search.toLowerCase()) ||
          (product?.description).toLowerCase().includes(search.toLowerCase())
      );
      setSearchResult(filteredResults.slice(0, 5));
    }, 500);
    handleSearchName();
  }, [search, filterSearch]);

  return (
    <header>
      <div className="header-main">
        <div className="container">
          <Link href="/" className="header-logo">
            <Image
              src={images.logo}
              alt="Ecom's logo"
              width="120"
              height="36"
            />
          </Link>

          <div className="header-search-container">
            <div className="searchRelative">
              <ClientOnly>
                <input
                  type="search"
                  name="search"
                  className="search-field"
                  placeholder="Enter your product name..."
                  onChange={(e) => setSearch(e.target.value)}
                />
              </ClientOnly>

              {search.length > 0 ? (
                <div className="searchResul">
                  {searchResult.map((item) => (
                    <div
                      className="p-1"
                      style={{ padding: "0.25rem" }}
                      key={item._id}
                    >
                      <Link href={`/product/${item?._id}`} className="plink">
                        <div
                          className="flex items-center"
                          style={{ display: "flex", alignItems: "center" }}
                        >
                          <div
                            className="w-[40px] h-[40px]"
                            style={{ width: "40px", height: "40px" }}
                          >
                            <Image
                              className="rounded-md"
                              alt={item?.slug}
                              width={40}
                              height={40}
                              src={item?.images[0].url}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </div>
                          <div className="truncate ml-2">{item?.title}</div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <button className="search-btn">
              <BiSearch />
            </button>
          </div>

          <div className="header-user-actions">
            <div>
              {!session ? (
                <button
                  className="googleButton"
                  onClick={() => signIn("google")}
                >
                  Sign In
                </button>
              ) : (
                <>
                  <p onClick={handleDivClick} style={{ cursor: "pointer" }}>
                    Welcome, {session.user.name}!
                  </p>
                  {buttonVisible && <hr />}
                  {buttonVisible && (
                    <button
                      className="logoutButton"
                      onMouseLeave={handleButtonLeave}
                      onClick={() => signOut()}
                    >
                      LogOut
                    </button>
                  )}
                </>
              )}
            </div>

            <button className="action-btn">
              <Link href={`/cart`} style={{ color: "inherit" }}>
                <BsBagCheck />
                <span className="count">{cartProducts?.length || 0}</span>
              </Link>
            </button>
          </div>
        </div>
      </div>

      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <Link href="/" className="menu-title">
                Home
              </Link>
            </li>

            <li className="menu-category">
              <Link href={`/products`} className="menu-title">
                Categories
              </Link>

              <div className="dropdown-panel">
                {headerCatDropdown?.map((item, index) => (
                  <ul className="dropdown-panel-list" key={index}>
                    <li className="menu-title">
                      <Link href={`/products`}>{item?.maintitle}</Link>
                    </li>
                    {item?.title?.map((itemlink, index) => (
                      <li className="panel-list-item" key={index}>
                        <Link href={`/products`}>{itemlink}</Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </li>

            {menuCategory?.map((category, index) => (
              <li className="menu-category" key={index}>
                <Link href={`/products`} className="menu-title">
                  {category.maintitle}
                </Link>

                <ul className="dropdown-list">
                  {category?.title?.map((item, i) => (
                    <li className="dropdown-item" key={i}>
                      <Link href={`/products`}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li className="menu-category">
              <Link href={`/blogs`} className="menu-title">
                Blogs
              </Link>
            </li>

            <li className="menu-category">
              <Link href={`/products`} className="menu-title">
                Hot Offers
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mobile-bottom-navigation">
        <button
          className="action-btn"
          data-mobile-menu-open-btn
          onClick={() => setIsOpenMenu(true)}
        >
          <AiOutlineMenu />
        </button>

        <button className="action-btn">
          <Link href={`/cart`} style={{ color: "inherit" }}>
            <BsBagCheck />

            <span className="count">{cartProducts?.length || 0}</span>
          </Link>
        </button>

        <button className="action-btn">
          <Link
            href="/"
            style={{
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            <AiOutlineHome />
          </Link>
        </button>

        <button
          className="action-btn"
          data-mobile-menu-open-btn
          onClick={() => setIsOpen(true)}
        >
          <BiGridAlt />
        </button>
      </div>

      <nav
        className={`mobile-navigation-menu  has-scrollbar ${
          isOpen ? "active" : " "
        }`}
        data-mobile-menu
      >
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button
            className="menu-close-btn"
            data-mobile-menu-close-btn
            onClick={() => setIsOpen(false)}
          >
            <AiOutlineClose />
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <Link href="/" className="menu-title">
              Home
            </Link>
          </li>
          {menuCategory?.map((category, index) => (
            <li className="menu-category" key={index}>
              <button
                className={`accordion-menu ${
                  category?.id === activeItem ? "active" : ""
                }`}
                onClick={() => toggleItem(category?.id)}
                data-accordion-btn
              >
                <p className="menu-title">{category?.maintitle}</p>

                <div>
                  <AiOutlinePlus className="add-icon" />

                  <AiOutlineMinus className="remove-icon" />
                </div>
              </button>
              {category?.id === activeItem && (
                <ul
                  className={`submenu-category-list ${
                    activeItem ? "active" : " "
                  }`}
                  data-accordion
                >
                  {category?.title?.map((item, i) => (
                    <li className="submenu-category" key={i}>
                      <Link href={`/products`} className="submenu-title">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li className="menu-category">
            <Link href={`/products`} className="menu-title">
              Blog
            </Link>
          </li>

          <li className="menu-category">
            <Link href={`/products`} className="menu-title">
              Hot Offers
            </Link>
          </li>
        </ul>
      </nav>

      <nav
        className={`mobile-navigation-menu  has-scrollbar ${
          isOpenMenu ? "active" : " "
        }`}
        data-mobile-menu
      >
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button
            className="menu-close-btn"
            onClick={() => setIsOpenMenu(false)}
            data-mobile-menu-close-btn
          >
            <AiOutlineClose />
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <Link href={`/products`} className="menu-title">
              Home
            </Link>
          </li>
          {menuCategory.map((item, index) => (
            <li className="menu-category" key={index}>
              <button
                className={`accordion-menu ${
                  item?.id === activeItem ? "active" : ""
                }`}
                onClick={() => toggleItem(item?.id)}
                data-accordion-btn
              >
                <p className="menu-title">{item?.maintitle}</p>

                <div>
                  <AiOutlinePlus className="add-icon" />

                  <AiOutlineMinus className="remove-icon" />
                </div>
              </button>
              {item?.id === activeItem && (
                <ul
                  className={`submenu-category-list ${
                    activeItem ? "active" : " "
                  }`}
                  data-accordion
                >
                  {item?.title?.map((singleItem, i) => (
                    <li className="submenu-category" key={i}>
                      <Link href={`/products`} className="submenu-title">
                        {singleItem}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          <li className="menu-category">
            <Link href={`/products`} className="menu-title">
              Blog
            </Link>
          </li>

          <li className="menu-category">
            <Link href={`/products`} className="menu-title">
              Hot Offers
            </Link>
          </li>
          {session?.user?.email && (
            <li className="menu-category">
              <Link
                href={`/products`}
                onClick={() => signOut()}
                className="menu-title"
              >
                LogOut
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* )} */}
    </header>
  );
};

export default Header;
