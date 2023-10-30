/* eslint-disable react/prop-types */
import { Container, Cta, Span } from "./HeaderStyled";
import { BiUser } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CarBuys from "./Car";

// eslint-disable-next-line react-refresh/only-export-components
export const pages = ["Inicio", "Mujer", "Hombre",
  // "Todxs"
];

const Header = ({
  products,
  new_products,
  inTotal,
  newTotal,
  cantProducts,
  newCantProducts,
  $is_used_user,
  $is_used_payment,
  $is_used_body,
}) => {
  const handleCloseNavMenu = () => { };
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  const [, setScrollPosition] = useState(0);
  const [headerColor, setHeaderColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#fff");

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (position > 100) {
      setHeaderColor("#fff");
      setTextColor("#000");
    } else {
      setHeaderColor("transparent");
      setTextColor("#fff");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      $is_used_user={$is_used_user}
      $is_used_body={$is_used_body}
      $is_used_payment={$is_used_payment}
      $header_color={headerColor}
      $hovered={hovered}
    >
      <div className="BoxTiltle">
        <a
          href="/home"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            color:
            $is_used_user || $is_used_payment || hovered ? "#000000" : textColor,
          }}
        >
          KALARY
        </a>
      </div>
      <div className="BoxNav">
        {pages.map((page) => (
          <Link
            to={page === "Inicio" ? "/home" : `/section/${page}`}
            key={page}
            onClick={handleCloseNavMenu}
            style={{
              color:
                $is_used_user || $is_used_payment
                  ? "#000"
                  : hovered
                    ? "#000"
                    : textColor,
            }}
          >
            <Cta>
              <Span
                className="span"
                $text_color={textColor}
                $is_used_body={$is_used_body}
                style={{
                  color:
                    $is_used_user || $is_used_payment
                      ? "#000"
                      : hovered
                        ? "#000"
                        : textColor,
                }}
              >
                {page}
              </Span>
            </Cta>
          </Link>
        ))}
      </div>
      <div className="BoxUser">
        <CarBuys
          allProducts={products}
          setAllProducts={new_products}
          total={inTotal}
          setTotal={newTotal}
          countProducts={cantProducts}
          setCountProducts={newCantProducts}
          color={textColor}
          hover={hovered}
          pageUsed={$is_used_user}
          pagePayment={$is_used_payment}
        />
        <div className="IconUser">
          <Link to="/user">
            <BiUser
              style={{
                fill:
                  $is_used_user || $is_used_payment
                    ? "#000"
                    : hovered
                      ? "#000"
                      : textColor,
                fontSize: "30px",
                position: "relative",
                top: "3px",
              }}
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Header;
