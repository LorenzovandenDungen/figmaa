import React from "react";

import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 flex md:flex-col sm:flex-col flex-row font-dmsans gap-[188px] md:gap-[40px] sm:gap-[40px] items-center mx-[auto] pr-[157px] sm:pr-[20px] md:pr-[40px] w-[100%]">
        <aside className="flex flex-col md:hidden sm:hidden w-[448px]">
          <div className="flex flex-col items-center justify-start w-[100%]">
            <div
              className="bg-cover bg-no-repeat flex flex-col items-center justify-end p-[49px] sm:px-[20px] md:px-[40px] w-[100%]"
              style={{ backgroundImage: "url('images/img_group1.svg')" }}
            >
              <div className="flex flex-col gap-[108px] md:gap-[40px] sm:gap-[40px] items-center justify-start mb-[169px] mt-[197px] w-[100%]">
                <div className="flex flex-col gap-[32px] items-center justify-start md:w-[100%] sm:w-[100%] w-[26%]">
                  <Img
                    src="images/img_arrowdown.svg"
                    className="h-[56px] w-[auto]"
                    alt="arrowdown"
                  />
                  <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[76%]">
                    <Text
                      className="text-center text-white_A700 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Log in
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="h-[21px] md:h-[auto] sm:h-[auto] relative w-[100%]">
                    <Img
                      src="images/img_line.svg"
                      className="absolute h-[1px] inset-[0] justify-center m-[auto] w-[auto]"
                      alt="Line"
                    />
                    <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[7%]">
                      <Text
                        className="font-medium text-center text-white_A700 w-[auto]"
                        variant="body1"
                      >
                        Or
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start mt-[30px] w-[100%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[33%]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body1"
                      >
                        Email Address
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-start justify-end p-[13px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group3.svg')",
                      }}
                    >
                      <div className="flex flex-col items-center justify-start mt-[3px] md:w-[100%] sm:w-[100%] w-[43%]">
                        <Text
                          className="font-normal not-italic text-left text-white_A700_99 w-[auto]"
                          variant="body2"
                        >
                          example@gmail.com
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[9px] items-start justify-start mt-[19px] w-[100%]">
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[22%]">
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body1"
                      >
                        Password
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-start p-[15px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group3.svg')",
                      }}
                    >
                      <div className="flex flex-row items-center justify-between my-[4px] w-[100%]">
                        <Img
                          src="images/img_menu.svg"
                          className="h-[7px] w-[auto]"
                          alt="menu"
                        />
                        <Img
                          src="images/img_checkmark.svg"
                          className="h-[11px] w-[auto]"
                          alt="checkmark"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-[40px] items-center justify-start mt-[24px] w-[100%]">
                    <div className="flex flex-row items-center justify-between w-[100%]">
                      <div className="flex flex-row gap-[10px] items-start justify-between w-[auto]">
                        <div className="border border-solid border-white_A700_87 h-[15px] mt-[2px] rounded-radius2 w-[15px]"></div>
                        <div className="flex flex-col items-center justify-start w-[auto]">
                          <Text
                            className="font-normal not-italic text-left text-white_A700 w-[auto]"
                            variant="body2"
                          >
                            Remember me
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[auto]">
                        <Text
                          className="font-normal not-italic text-indigo_A200 text-left w-[auto]"
                          variant="body2"
                        >
                          Reset Password?
                        </Text>
                      </div>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat flex flex-col items-center justify-end p-[13px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_button.svg')",
                      }}
                    >
                      <div className="flex flex-col items-center justify-start mt-[2px] md:w-[100%] sm:w-[100%] w-[15%]">
                        <Text
                          className="common-pointer font-medium text-center text-white_A700 w-[auto]"
                          variant="body1"
                          onClick={() => navigate("/dashboardnavigation")}
                        >
                          Log in
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mt-[31px] md:w-[100%] sm:w-[100%] w-[85%]">
                    <Text
                      className="font-medium text-left text-white_A700 w-[auto]"
                      variant="body1"
                    >
                      <span className="text-white_A700 text-[16px] font-dmsans">
                        Don’t have account yet?
                      </span>
                      <span className="text-white_A700 text-[16px] font-dmsans">
                        {" "}
                      </span>
                      <span className="text-indigo_A200 text-[16px] font-dmsans">
                        New Account
                      </span>
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <Img
          src="images/img_illustration.svg"
          className="flex-1 h-[602px] w-[100%]"
          alt="Illustration"
        />
      </div>
    </>
  );
};

export default LoginPage;
