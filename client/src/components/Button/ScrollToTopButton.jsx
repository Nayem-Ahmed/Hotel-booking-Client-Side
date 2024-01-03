import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import styled from "styled-components";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const threshold = 100;

    setIsVisible(scrollY > threshold);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollToTopButtonWrapper onClick={scrollToTop} isVisible={isVisible}>
      <FaArrowUp />
    </ScrollToTopButtonWrapper>
  );
};

const ScrollToTopButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
`;

export default ScrollToTopButton;
