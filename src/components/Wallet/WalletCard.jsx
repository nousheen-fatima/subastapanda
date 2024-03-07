import React from "react";
import { IoWallet } from "react-icons/io5";
import { TbCoinFilled } from "react-icons/tb";
import styled, { keyframes } from "styled-components";

const moveFromTopToCenter = keyframes`
  from {
    transform: translateY(-200%);
  }
  to {
    transform: translateY(-50%);
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const CardWrapper = styled.div`
  background-color: #000;
  color: #fff;
  width: 450px;
  height: 300px;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${moveFromTopToCenter} 0.9s ease forwards;
  position: absolute;
  top: 50%;
  left: 40%;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease forwards;
  z-index: 999;
`;

const WalletRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Text = styled.span`
  font-size: 20px;
`;

const WalletCard = ({ show, setShow }) => {
  const handleOverlayClick = () => {
    setShow(false);
  };

  return (
    <>
      {show && <Overlay onClick={handleOverlayClick} />}
      <CardWrapper show={show}>
        <WalletRow>
          <IconWrapper>
            <IoWallet size={40} />
            <Text>Balance</Text>
          </IconWrapper>
          <Text>$1200</Text>
        </WalletRow>
        <WalletRow>
          <IconWrapper>
            <TbCoinFilled size={40} style={{ color: "yellow" }} />
            <Text>Golden coin</Text>
          </IconWrapper>
          <Text>900</Text>
        </WalletRow>
        <WalletRow>
          <IconWrapper>
            <TbCoinFilled size={40} style={{ color: "silver" }} />
            <Text>Silver coin</Text>
          </IconWrapper>
          <Text>1800</Text>
        </WalletRow>
      </CardWrapper>
    </>
  );
};

export default WalletCard;
