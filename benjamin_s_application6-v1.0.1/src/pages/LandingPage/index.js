import React from "react";

import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const LandingPagePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-black_901 border border-black_900 border-solid flex flex-col font-inter items-center justify-start mx-[auto] shadow-bs md:w-[100%] sm:w-[100%] w-[auto]">
        <div className="h-[1505px] md:h-[945px] sm:h-[945px] relative w-[100%]">
          <div className="absolute h-[1023px] md:h-[945px] sm:h-[945px] inset-x-[0] mx-[auto] top-[0] w-[100%]">
            <div className="flex flex-col h-[100%] items-center justify-start mx-[auto] p-[30px] sm:px-[20px] w-[100%]">
              <div className="flex sm:flex-col flex-row gap-[32px] items-center justify-center sm:w-[100%] w-[auto]">
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Buy / Sell
                </Text>
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Grow
                </Text>
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Markets
                </Text>
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Business
                </Text>
                <Text
                  className="font-semibold text-left text-white_A700 w-[auto]"
                  variant="body2"
                >
                  Support
                </Text>
              </div>
            </div>
            <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[100%]">
              <div className="h-[1023px] md:h-[945px] sm:h-[945px] relative w-[100%]">
                <div className="h-[1023px] md:h-[945px] sm:h-[945px] m-[auto] w-[100%]">
                  <Img
                    src="images/img_circles.png"
                    className="absolute h-[821px] inset-x-[0] mx-[auto] object-cover top-[0] md:w-[100%] sm:w-[100%] w-[auto]"
                    alt="circles"
                  />
                  <div className="absolute flex sm:flex-col flex-row gap-[11px] items-start justify-start left-[0] pr-[166px] sm:pr-[20px] md:pr-[40px] rotate-[180deg] top-[0] w-[43%]">
                    <div className="backdrop-opacity-[0.5] blur-[100.00px] h-[516px] md:h-[540px] sm:h-[540px] relative sm:w-[100%] w-[77%]">
                      <Img
                        src="images/img_eclipse.png"
                        className="absolute h-[260px] left-[0] object-cover top-[0] w-[43%]"
                        alt="Eclipse"
                      />
                      <div className="absolute backdrop-opacity-[0.5] bg-gradient  blur-[200.00px] h-[241px] left-[11%] top-[14%] w-[33%]"></div>
                      <Img
                        src="images/img_group1_540x343.png"
                        className="absolute bottom-[0] h-[540px] inset-x-[0] mx-[auto] object-cover w-[100%]"
                        alt="GroupOne"
                      />
                    </div>
                    <Button
                      className="common-pointer cursor-pointer font-semibold min-w-[96px] sm:mt-[0] mt-[16px] text-[16px] text-center text-white_A700 w-[auto]"
                      onClick={() => navigate("/")}
                      size="md"
                      variant="OutlineWhiteA700"
                    >
                      Sign in
                    </Button>
                  </div>
                  <div className="absolute backdrop-opacity-[0.5] blur-[250.00px] bottom-[0] flex flex-col items-end justify-start pb-[33px] sm:pl-[20px] pl-[33px] right-[0] w-[36%]">
                    <div className="h-[874px] md:h-[912px] sm:h-[912px] relative sm:w-[100%] w-[92%]">
                      <Img
                        src="images/img_eclipse_603x346.png"
                        className="absolute h-[603px] object-cover right-[0] top-[8%] w-[79%]"
                        alt="Eclipse One"
                      />
                      <Img
                        src="images/img_rectangle29.png"
                        className="absolute bottom-[13%] h-[411px] object-cover right-[0] w-[43%]"
                        alt="RectangleTwentyNine One"
                      />
                      <Img
                        src="images/img_group1_912x443.png"
                        className="absolute h-[912px] inset-x-[0] mx-[auto] object-cover top-[0] w-[100%]"
                        alt="GroupOne One"
                      />
                    </div>
                  </div>
                </div>
                <Text
                  className="absolute inset-x-[0] leading-[130.00%] mx-[auto] text-center text-white_A700 top-[36%] sm:w-[100%] w-[55%]"
                  as="h1"
                  variant="h1"
                >
                  We make crypto clear and simple
                </Text>
              </div>
            </div>
          </div>
          <Img
            src="images/img_group.svg"
            className="absolute bottom-[0] h-[714px] inset-x-[0] mx-[auto] w-[736px]"
            alt="Group"
          />
        </div>
        <div className="md:h-[426px] sm:h-[426px] h-[546px] pb-[80px] relative w-[100%]">
          <Img
            src="images/img_circles.png"
            className="absolute h-[426px] inset-x-[0] mx-[auto] object-cover top-[0] md:w-[100%] sm:w-[100%] w-[auto]"
            alt="circles One"
          />
          <div className="absolute bg-gray_900_7f bottom-[0] flex flex-col gap-[32px] items-center justify-start left-[9%] sm:px-[20px] px-[24px] py-[32px] rounded-radius25 sm:w-[100%] w-[380px]">
            <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
              <Img
                src="images/img_img.png"
                className="h-[80px] md:h-[auto] sm:h-[auto] object-cover w-[80px]"
                alt="img"
              />
              <Text
                className="text-center text-white_A700 w-[auto]"
                as="h2"
                variant="h2"
              >
                Create
              </Text>
              <Text
                className="font-normal leading-[150.00%] not-italic text-bluegray_400 text-center"
                variant="body1"
              >
                <span className="text-bluegray_400 text-[16px] font-inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempos
                  <br />
                </span>
                <span className="text-bluegray_400 text-[16px] font-inter">
                  Lorem ipsum dolor
                </span>
              </Text>
            </div>
            <div className="flex flex-row gap-[6px] items-center justify-center rounded-radius10 shadow-bs w-[auto]">
              <Text
                className="font-semibold text-center text-teal_500 w-[auto]"
                variant="body1"
              >
                Get Started
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright"
              />
            </div>
          </div>
          <div className="absolute bg-gray_900_7f bottom-[0] flex flex-col gap-[32px] inset-x-[0] items-center justify-start mx-[auto] sm:px-[20px] px-[24px] py-[32px] rounded-radius25 sm:w-[100%] w-[380px]">
            <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
              <div className="flex flex-col gap-[18px] items-center justify-start md:w-[100%] sm:w-[100%] w-[27%]">
                <Img
                  src="images/img_img_80x80.png"
                  className="h-[80px] md:h-[auto] sm:h-[auto] object-cover w-[80px]"
                  alt="img One"
                />
                <Text
                  className="text-center text-white_A700 w-[auto]"
                  as="h2"
                  variant="h2"
                >
                  Login
                </Text>
              </div>
              <Text
                className="font-normal leading-[150.00%] not-italic text-bluegray_400 text-center"
                variant="body1"
              >
                <span className="text-bluegray_400 text-[16px] font-inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempos
                  <br />
                </span>
                <span className="text-bluegray_400 text-[16px] font-inter">
                  Lorem ipsum dolor
                </span>
              </Text>
            </div>
            <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
              <Text
                className="font-semibold text-center text-teal_500 w-[auto]"
                variant="body1"
              >
                Find an ATM
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright One"
              />
            </div>
          </div>
          <div className="absolute bg-gray_900_7f bottom-[0] flex flex-col gap-[32px] items-center justify-start sm:px-[20px] px-[24px] py-[32px] right-[9%] rounded-radius25 sm:w-[100%] w-[380px]">
            <div className="flex flex-col gap-[16px] items-center justify-start w-[100%]">
              <Img
                src="images/img_img_1.png"
                className="h-[80px] md:h-[auto] sm:h-[auto] object-cover w-[80px]"
                alt="img Two"
              />
              <Text
                className="text-center text-white_A700 w-[auto]"
                as="h2"
                variant="h2"
              >
                Manage
              </Text>
              <Text
                className="font-normal leading-[150.00%] not-italic text-bluegray_400 text-center"
                variant="body1"
              >
                <span className="text-bluegray_400 text-[16px] font-inter">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempos
                  <br />
                </span>
                <span className="text-bluegray_400 text-[16px] font-inter">
                  Lorem ipsum dolorLorem ipsum dolor
                </span>
              </Text>
            </div>
            <div className="flex flex-row gap-[6px] items-center justify-center w-[auto]">
              <Text
                className="font-semibold text-center text-teal_500 w-[auto]"
                variant="body1"
              >
                Download the App
              </Text>
              <Img
                src="images/img_arrowright_teal_500.svg"
                className="h-[24px] w-[24px]"
                alt="arrowright Two"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPagePage;
