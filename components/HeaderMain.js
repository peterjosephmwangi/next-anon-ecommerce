import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import Center from "@/components/Center";
import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import BarsIcon from "@/components/icons/Bars";
import { images } from "../public/assets/index";
import { useSession, signIn, signOut } from "next-auth/react";

const StyledHeader = styled.header`
  ${(props) =>
    props.mobileNavActive
      ? `
background-color: #222;
`
      : `
background-color: #fff;
`}

  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.25);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
    display: block;
    background-color: #222;
    padding:  20px;
  `
      : `
    display: none;
    background-color: #fff;
    padding: 70px 20px 20px;
  `}

  gap: 15px;
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 0;
  right: 0;

  height: max-content;
  @media screen and (min-width: 768px) {
    display: ${(props) => (props.mobileNavActive ? "none" : "flex")};
    background-color: #fff;
    align-items: ${(props) => (props.mobileNavActive ? "center" : "center")};
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: gray;
  text-decoration: none;
  padding: 10px 0;
  &:hover {
    color: #000;
  }
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const Logo = styled(Link)`
  visibility: hidden;
  color: #000;
  text-decoration: none;
  font-weight: 800;
  position: relative;
  z-index: 3;
  @media screen and (max-width: 768px) {
    visibility: visible;
  }
`;
const NavButton = styled.button`
  background-color: #000;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { data: session } = useSession();
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Anon</Logo>
          <Link href="/" className="header-logo-one">
            <Image
              src={images.logo}
              alt="Ecom's logo"
              width={120}
              height={36}
            />
          </Link>
          <StyledNav mobileNavActive={mobileNavActive}>
            <NavLink href={"/products"}>All products</NavLink>
            <NavLink href={"/blogs"}>All Blogs</NavLink>
            <NavLink href={"/cart"}>Cart ({cartProducts?.length || 0})</NavLink>
            {!session?.user?.email ? (
              <button className="googleButton" onClick={() => signIn("google")}>
                Sign In
              </button>
            ) : (
              <NavLink href={"#"}>
                {" "}
                <p>Welcome, {session.user.name}!</p>
              </NavLink>
            )}
          </StyledNav>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
