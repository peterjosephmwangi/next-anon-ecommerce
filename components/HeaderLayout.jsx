import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { debounce } from "debounce";
import Link from "next/link";
import { BiSearch } from "react-icons/bi";
import { useSession, signIn, signOut } from "next-auth/react";
import { BsFillPersonFill, BsBagCheck } from "react-icons/bs";
import { CartContext } from "@/components/CartContext";
import { images } from "../public/assets/index";

const HeaderLayout = ({ blogs }) => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { cartProducts } = useContext(CartContext);
  const { data: session } = useSession();
  const [buttonVisible, setButtonVisible] = useState(false);

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
      const filteredResults = blogs.filter(
        (product) =>
          (product?.title).toLowerCase().includes(search.toLowerCase()) ||
          (product?.description).toLowerCase().includes(search.toLowerCase())
      );
      setSearchResult(filteredResults.slice(0, 5));
    }, 500);
    handleSearchName();
  }, [search, blogs]);

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
              <input
                type="search"
                name="search"
                className="search-field"
                placeholder="Enter your product name..."
                onChange={(e) => setSearch(e.target.value)}
              />

              {/* {isSearching ? (
                        <BiLoaderCircle
                          className="mr-2 animate-spin"
                          size={22}
                        />
                      ) : null} */}

              {search.length > 0 ? (
                <div className="searchResul">
                  {searchResult.map((item) => (
                    <div
                      className="p-1"
                      style={{ padding: "0.25rem" }}
                      key={item._id}
                    >
                      <Link href={`/blog/${item?._id}`} className="plink">
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
                              src={item?.images[0]}
                              style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                              }}
                            />
                          </div>
                          <div
                            className="truncate ml-2"
                            style={{ marginLeft: "1rem" }}
                          >
                            {item?.title}
                          </div>
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
              {/* <IonIcon icon={bagHandleOutline} /> */}
              <Link href={`/cart`} style={{ color: "inherit" }}>
                <BsBagCheck />
                <span className="count">{cartProducts?.length || 0}</span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
