/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={onDismiss}>
      <ContentWrapper>
        <CloseButtonWrapper onClick={onDismiss}>
          <Icon id={"close"} />
          <VisuallyHidden>Dismiss menu</VisuallyHidden>
        </CloseButtonWrapper>
        <NavWrapper>
          <a href="/sale">Sale</a>
          <a href="/new">New&nbsp;Releases</a>
          <a href="/men">Men</a>
          <a href="/women">Women</a>
          <a href="/kids">Kids</a>
          <a href="/collections">Collections</a>
        </NavWrapper>
        <FooterWrapper>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </FooterWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  display: flex;
  justify-content: flex-end;

  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsl(0deg 0% 0% / 0.5);
`;
const ContentWrapper = styled(DialogContent)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;
  width: 300px;
  height: 100%;
  background-color: hsl(0deg 100% 100%);
`;

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;
  & > a {
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-size: calc(18rem / 16);
    font-weight: 600;

    :hover {
      color: ${COLORS.secondary};
    }
  }
`;

const CloseButtonWrapper = styled(UnstyledButton)`
  position: absolute;
  top: 26px;
  right: 16px;
`;
const FooterWrapper = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 32px;
  left: 32px;
  gap: 10px;
  & > a {
    text-decoration: none;
    color: ${COLORS.gray[700]};
    font-size: calc(14rem / 16);
    font-weight: 500;
  }
`;

export default MobileMenu;
