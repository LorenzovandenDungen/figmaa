import React from "react";

import {
  Img,
  Text,
  SelectBox,
  Button,
  Line,
  ReactTable,
  List,
} from "components";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { createColumnHelper } from "@tanstack/react-table";

const DashboardNavigationPage = () => {
  const tableData = React.useRef([
    {
      rowtrackingno: "#876364",
      rowproductname: "Camera Lens",
      rowlanguage: "$178",
      rowlanguageone: "325",
      rowtotalamount: "$1,46,660",
    },
    {
      rowtrackingno: "#876412",
      rowproductname: "Argan Oil",
      rowlanguage: "$21",
      rowlanguageone: "78",
      rowtotalamount: "$3,46,676",
    },
  ]);
  const columnHelper = createColumnHelper();
  const column = [
    columnHelper.accessor("rowtrackingno", {
      cell: (info) => (
        <Text
          className="not-italic py-[31px] text-left text-white_A700"
          variant="body3"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[8px] items-center justify-start min-w-[102px] md:w-[100%] sm:w-[100%] w-[17%]">
          <Text
            className="not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Tracking no
          </Text>
          <Img
            src="images/img_arrowdown2.svg"
            className="h-[5px] w-[6px]"
            alt="ArrowDownTwo"
          />
        </div>
      ),
    }),
    columnHelper.accessor("rowproductname", {
      cell: (info) => (
        <div className="flex flex-row gap-[10px] items-center justify-center sm:pr-[20px] pr-[23px] py-[23px]">
          <Img
            src="images/img_rectangle91.png"
            className="h-[30px] md:h-[auto] sm:h-[auto] object-cover rounded-radius5 w-[30px]"
            alt="RectangleNinetyOne"
          />
          <Text
            className="mr-[47px] not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            {info?.getValue()}
          </Text>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[7px] items-center justify-center min-w-[184px] md:w-[100%] sm:w-[100%] w-[30%]">
          <Text
            className="not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Product Name
          </Text>
          <Img
            src="images/img_arrowdown2.svg"
            className="h-[5px] w-[6px]"
            alt="ArrowDownTwo One"
          />
        </div>
      ),
    }),
    columnHelper.accessor("rowlanguage", {
      cell: (info) => (
        <Text
          className="not-italic py-[31px] text-left text-white_A700"
          variant="body3"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[9px] items-center justify-start min-w-[124px] md:w-[100%] sm:w-[100%] w-[20%]">
          <Text
            className="not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Price{" "}
          </Text>
          <Img
            src="images/img_arrowdown2.svg"
            className="h-[5px] w-[6px]"
            alt="ArrowDownTwo Two"
          />
        </div>
      ),
    }),
    columnHelper.accessor("rowlanguageone", {
      cell: (info) => (
        <div className="flex flex-row items-center justify-center sm:pr-[20px] pr-[23px] py-[23px]">
          <Button
            className="cursor-pointer font-normal leading-[normal] min-w-[61px] mr-[61px] not-italic text-[12px] text-center text-white_A700 w-[auto]"
            size="sm"
          >
            {info?.getValue()}
          </Button>
        </div>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row gap-[9px] items-center justify-center min-w-[146px] md:w-[100%] sm:w-[100%] w-[24%]">
          <Text
            className="not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Total Order{" "}
          </Text>
          <Img
            src="images/img_arrowdown2.svg"
            className="h-[5px] w-[6px]"
            alt="ArrowDownTwo Three"
          />
        </div>
      ),
    }),
    columnHelper.accessor("rowtotalamount", {
      cell: (info) => (
        <Text
          className="not-italic pl-[19px] py-[31px] text-right text-white_A700"
          variant="body3"
        >
          {info?.getValue()}
        </Text>
      ),
      header: (info) => (
        <div className="flex md:flex-1 sm:flex-1 flex-row items-center justify-end min-w-[74px] md:w-[100%] sm:w-[100%] w-[12%]">
          <Text
            className="not-italic text-left text-white_A700 w-[auto]"
            variant="body3"
          >
            Total Amount
          </Text>
        </div>
      ),
    }),
  ];

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-dmsans items-center justify-start mx-[auto] p-[30px] sm:px-[20px] shadow-bs w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between max-w-[1306px] mx-[auto] md:px-[20px] w-[100%]">
          <div className="bg-bluegray_800 flex md:flex-1 sm:flex-1 flex-col gap-[59px] justify-start pr-[9px] py-[9px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[9px] mt-[21px] md:w-[100%] sm:w-[100%] w-[62px]">
              <Img
                src="images/img_arrowdown.svg"
                className="h-[26px] w-[auto]"
                alt="arrowdown"
              />
              <div className="flex flex-col items-center justify-start mt-[4px] md:w-[100%] sm:w-[100%] w-[98%]">
                <Text
                  className="text-left text-white_A700 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Wons
                </Text>
              </div>
            </div>
            <div className="flex flex-col items-end justify-start mb-[21px] mr-[7px] md:w-[100%] sm:w-[100%] w-[91%]">
              <Img
                src="images/img_calculator.svg"
                className="h-[48px] mr-[11px] w-[auto]"
                alt="calculator"
              />
              <div className="flex flex-col items-center justify-start mt-[18px] md:w-[100%] sm:w-[100%] w-[38%]">
                <Img
                  src="images/img_volume.svg"
                  className="h-[24px] w-[24px]"
                  alt="volume"
                />
                <Img
                  src="images/img_volume_white_a700.svg"
                  className="h-[24px] mt-[30px] w-[24px]"
                  alt="volume One"
                />
                <Img
                  src="images/img_menu_white_a700.svg"
                  className="h-[24px] mt-[30px] w-[24px]"
                  alt="menu"
                />
                <Img
                  src="images/img_calendar.svg"
                  className="h-[24px] mt-[30px] w-[24px]"
                  alt="calendar"
                />
                <Img
                  src="images/img_checkmark_white_a700.svg"
                  className="h-[20px] mt-[32px] w-[20px]"
                  alt="checkmark"
                />
                <Img
                  src="images/img_notification.svg"
                  className="h-[24px] mt-[32px] w-[24px]"
                  alt="notification"
                />
                <Img
                  src="images/img_settings.svg"
                  className="h-[24px] mt-[30px] w-[24px]"
                  alt="settings"
                />
              </div>
              <div className="flex flex-col gap-[20px] items-center justify-start mt-[312px] md:w-[100%] sm:w-[100%] w-[71%]">
                <div className="bg-white_A700 flex flex-col items-center justify-start rounded-radius12 w-[100%]">
                  <Img
                    src="images/img_rectangle115.png"
                    className="h-[43px] md:h-[auto] sm:h-[auto] object-cover rounded-radius12 w-[100%]"
                    alt="Rectangle115"
                  />
                </div>
                <Img
                  src="images/img_arrowright_white_a700.svg"
                  className="h-[16px] w-[17px]"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
          <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
            <div className="flex sm:flex-col flex-row md:gap-[40px] sm:gap-[40px] items-center justify-between w-[100%]">
              <Text
                className="text-left text-white_A700 w-[auto]"
                as="h4"
                variant="h4"
              >
                Dashboard
              </Text>
              <div className="flex sm:flex-1 flex-row gap-[15px] items-center justify-between sm:w-[100%] w-[auto]">
                <SelectBox
                  className="font-normal leading-[normal] not-italic text-[14px] text-left text-white_A700 w-[auto]"
                  placeholderClassName="text-white_A700"
                  name="date"
                  placeholder="10-06-2021"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_white_a700.svg"
                      className="h-[4px] mr-[17px] w-[8px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
                <SelectBox
                  className="font-normal leading-[normal] not-italic text-[14px] text-left text-white_A700 w-[auto]"
                  placeholderClassName="text-white_A700"
                  name="date One"
                  placeholder="10-10-2021"
                  isSearchable={false}
                  isMulti={false}
                  indicator={
                    <Img
                      src="images/img_arrowdown_white_a700.svg"
                      className="h-[4px] mr-[17px] w-[8px]"
                      alt="arrow_down"
                    />
                  }
                ></SelectBox>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between mt-[28px] w-[100%]">
              <div className="bg-bluegray_800 flex md:flex-1 sm:flex-1 flex-row gap-[23px] items-center justify-start p-[28px] sm:px-[20px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
                <Button
                  className="flex h-[60px] items-center justify-center rounded-radius50 w-[60px]"
                  variant="icbFillWhiteA70063"
                >
                  <Img
                    src="images/img_favorite.svg"
                    className="h-[24px]"
                    alt="favorite"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start w-[44%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    178+
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Save Products
                  </Text>
                </div>
              </div>
              <div className="flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="bg-bluegray_800 flex flex-row gap-[23px] items-center justify-start p-[28px] sm:px-[20px] rounded-radius10 w-[100%]">
                  <Button
                    className="flex h-[60px] items-center justify-center rounded-radius50 w-[60px]"
                    variant="icbFillTealA4006c"
                  >
                    <Img
                      src="images/img_volume_teal_a400.svg"
                      className="h-[24px]"
                      alt="volume Two"
                    />
                  </Button>
                  <div className="md:h-[28px] sm:h-[28px] h-[47px] relative w-[45%]">
                    <Text
                      className="absolute left-[0] text-left text-white_A700 top-[0] w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      20+
                    </Text>
                    <Text
                      className="absolute bottom-[0] font-normal inset-x-[0] mx-[auto] not-italic text-left text-white_A700 w-[max-content]"
                      variant="body2"
                    >
                      Stock Products
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-bluegray_800 flex md:flex-1 sm:flex-1 flex-row gap-[23px] items-center justify-center p-[28px] sm:px-[20px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
                <Button
                  className="flex h-[60px] items-center justify-center rounded-radius50 w-[60px]"
                  variant="icbFillPinkA10063"
                >
                  <Img
                    src="images/img_iconlyboldbag.svg"
                    className="h-[24px]"
                    alt="IconlyBoldBag"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start mr-[40px] w-[45%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    190+
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Sales Products
                  </Text>
                </div>
              </div>
              <div className="bg-bluegray_800 flex md:flex-1 sm:flex-1 flex-row gap-[17px] items-center justify-center p-[28px] sm:px-[20px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
                <Button
                  className="flex h-[60px] items-center justify-center ml-[6px] rounded-radius50 w-[60px]"
                  variant="icbFillWhiteA70063"
                >
                  <Img
                    src="images/img_trash.svg"
                    className="h-[20px]"
                    alt="trash"
                  />
                </Button>
                <div className="flex flex-col items-start justify-start mr-[36px] w-[48%]">
                  <Text
                    className="text-left text-white_A700 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    12+
                  </Text>
                  <Text
                    className="font-normal not-italic text-left text-white_A700 w-[auto]"
                    variant="body2"
                  >
                    Job Application
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between mt-[28px] w-[100%]">
              <div className="bg-bluegray_800 flex md:flex-1 sm:flex-1 flex-col items-center justify-start md:mt-[0] sm:mt-[0] mt-[2px] sm:pl-[20px] pl-[25px] py-[25px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-start justify-start mb-[7px] w-[100%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] sm:w-[100%] w-[94%]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Reports
                    </Text>
                    <Img
                      src="images/img_menu_white_a700_3x14.svg"
                      className="h-[3px] w-[auto]"
                      alt="Menu One"
                    />
                  </div>
                  <div className="flex md:flex-col sm:flex-col flex-row gap-[16px] items-center justify-between mt-[31px] w-[100%]">
                    <div className="flex md:flex-1 sm:flex-1 flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[auto]">
                      <Text
                        className="not-italic text-right text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        100
                      </Text>
                      <Text
                        className="h-[16px] md:ml-[0] sm:ml-[0] ml-[5px] mt-[35px] not-italic text-right text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        80
                      </Text>
                      <Text
                        className="h-[16px] md:ml-[0] sm:ml-[0] ml-[5px] mt-[35px] not-italic text-right text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        60
                      </Text>
                      <Text
                        className="h-[16px] md:ml-[0] sm:ml-[0] ml-[5px] mt-[35px] not-italic text-right text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        40
                      </Text>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[5px] mt-[35px] not-italic text-right text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        20
                      </Text>
                      <Text
                        className="md:ml-[0] sm:ml-[0] ml-[12px] mt-[35px] not-italic text-right text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        0
                      </Text>
                    </div>
                    <div
                      className="bg-cover bg-no-repeat md:h-[117px] sm:h-[117px] h-[255px] relative md:w-[100%] sm:w-[100%] w-[auto]"
                      style={{
                        backgroundImage: "url('images/img_group10.svg')",
                      }}
                    >
                      <div
                        className="absolute bg-cover bg-no-repeat bottom-[0] md:h-[117px] sm:h-[117px] h-[186px] inset-x-[0] mx-[auto] w-[100%]"
                        style={{
                          backgroundImage: "url('images/img_group11.png')",
                        }}
                      >
                        <Img
                          src="images/img_elipes.svg"
                          className="absolute h-[97px] right-[12%] top-[4%] w-[auto]"
                          alt="Elipes"
                        />
                        <Line className="absolute bg-indigo_A200 bottom-[0] h-[117px] inset-x-[0] mx-[auto] w-[1px]" />
                      </div>
                      <div
                        className="absolute bg-cover bg-no-repeat flex flex-col inset-x-[0] items-center justify-start mx-[auto] p-[7px] top-[21%] w-[14%]"
                        style={{
                          backgroundImage: "url('images/img_tooltip.svg')",
                        }}
                      >
                        <div className="flex flex-col items-center justify-start mb-[8px] md:w-[100%] sm:w-[100%] w-[41px]">
                          <Text
                            className="not-italic text-bluegray_800 text-left w-[auto]"
                            variant="body3"
                          >
                            Sales
                          </Text>
                          <Text
                            className="font-medium mt-[3px] text-bluegray_800 text-left w-[auto]"
                            variant="body1"
                          >
                            2,678
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between md:ml-[0] sm:ml-[0] ml-[38px] mt-[7px] md:w-[100%] sm:w-[100%] w-[93%]">
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      10am
                    </Text>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      11am
                    </Text>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      12am
                    </Text>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      01am
                    </Text>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      02am
                    </Text>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      03am
                    </Text>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      04am
                    </Text>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      05am
                    </Text>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      06am
                    </Text>
                    <Text
                      className="not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      07am
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-bluegray_800 flex md:flex-1 sm:flex-1 flex-col items-center justify-end mb-[2px] p-[25px] sm:px-[20px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[15px] items-center justify-start w-[100%]">
                  <div className="flex flex-row gap-[34px] items-start justify-between w-[100%]">
                    <div className="md:h-[301px] sm:h-[301px] h-[320px] relative w-[auto]">
                      <div className="absolute bottom-[0] h-[301px] md:h-[auto] sm:h-[auto] right-[0] w-[301px]">
                        <div className="h-[301px] md:h-[auto] sm:h-[auto] m-[auto] w-[301px]">
                          <div className="absolute bg-pink_A100 h-[291px] inset-[0] justify-center m-[auto] rotate-[-118deg] rounded-radius145 w-[291px]"></div>
                          <div className="absolute bg-teal_A400 h-[301px] inset-[0] justify-center m-[auto] rotate-[-36deg] rounded-radius150 w-[301px]"></div>
                          <CircularProgressbar
                            className="absolute h-[216px] inset-[0] justify-center m-[auto] overflow-visible rounded-radius50 shadow-bs1 w-[216px]"
                            value="39"
                            name="GroupFourteen"
                            strokeWidth={17}
                            styles={{
                              trail: { strokeWidth: 50, stroke: "" },
                              path: {
                                strokeLinecap: "square",
                                height: "100%",
                                transformOrigin: "center",
                                transform: "rotate(90deg)",
                                stroke: "#605cff",
                              },
                            }}
                          ></CircularProgressbar>
                        </div>
                        <div className="absolute flex flex-col h-[max-content] inset-[0] items-center justify-center m-[auto] w-[34%]">
                          <Text
                            className="text-left text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                          >
                            80%
                          </Text>
                          <Text
                            className="font-medium text-left text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            Transactions
                          </Text>
                        </div>
                      </div>
                      <Text
                        className="absolute left-[0] text-left text-white_A700 top-[0] w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        Analytics
                      </Text>
                    </div>
                    <Img
                      src="images/img_menu_white_a700_3x14.svg"
                      className="h-[3px] mt-[9px] w-[auto]"
                      alt="Menu Two"
                    />
                  </div>
                  <div className="flex flex-row items-center justify-between md:w-[100%] sm:w-[100%] w-[79%]">
                    <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                      <div className="bg-indigo_A200 h-[15px] my-[2px] rounded-radius5 w-[15px]"></div>
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body1"
                      >
                        Sale
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-center w-[auto]">
                      <div className="bg-teal_A400 h-[15px] my-[2px] rounded-radius5 w-[15px]"></div>
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body1"
                      >
                        Distribute
                      </Text>
                    </div>
                    <div className="flex flex-row gap-[10px] items-center justify-start w-[auto]">
                      <div className="bg-pink_A100 h-[15px] my-[3px] rounded-radius5 w-[15px]"></div>
                      <Text
                        className="font-medium text-left text-white_A700 w-[auto]"
                        variant="body1"
                      >
                        Return
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col sm:flex-col flex-row gap-[30px] items-center justify-between mt-[30px] w-[100%]">
              <div className="bg-bluegray_800 flex md:flex-1 sm:flex-1 flex-col items-center justify-end p-[17px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col items-center justify-start mt-[7px] md:w-[100%] sm:w-[100%] w-[98%]">
                  <div className="flex flex-row sm:gap-[40px] items-center justify-between md:w-[100%] sm:w-[100%] w-[97%]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Recent Orders
                    </Text>
                    <Img
                      src="images/img_menu_white_a700_3x14.svg"
                      className="h-[3px] w-[auto]"
                      alt="Menu Three"
                    />
                  </div>
                  <div className="overflow-auto mt-[25px] w-[95%]">
                    <ReactTable
                      columns={column}
                      data={tableData.current}
                      rowClass={"border-bw"}
                      headerClass="border-b-[1px] border-bw"
                    />
                  </div>
                  <div className="bg-gray-900 h-[55px] rounded-radius5 w-[100%]"></div>
                  <div className="bg-gray-900 flex md:flex-col sm:flex-col flex-row md:gap-[20px] sm:gap-[20px] items-start justify-start mt-[53px] p-[12px] rounded-radius5 w-[100%]">
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[8px] md:mt-[0] sm:mt-[0] mt-[8px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      #876621
                    </Text>
                    <Img
                      src="images/img_rectangle110.png"
                      className="h-[30px] md:h-[auto] sm:h-[auto] md:ml-[0] sm:ml-[0] ml-[53px] object-cover rounded-radius5 w-[30px]"
                      alt="Rectangle110"
                    />
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[10px] md:mt-[0] sm:mt-[0] mt-[9px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      EAU DE Parfum
                    </Text>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[61px] md:mt-[0] sm:mt-[0] mt-[9px] not-italic text-left text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      $32
                    </Text>
                    <Button
                      className="cursor-pointer font-normal leading-[normal] min-w-[61px] md:ml-[0] sm:ml-[0] ml-[103px] not-italic text-[12px] text-center text-white_A700 w-[auto]"
                      size="sm"
                    >
                      98
                    </Button>
                    <Text
                      className="md:ml-[0] sm:ml-[0] ml-[106px] md:mt-[0] sm:mt-[0] mt-[9px] not-italic text-right text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      $3,46,981
                    </Text>
                  </div>
                </div>
              </div>
              <div className="bg-bluegray_800 flex md:flex-1 sm:flex-1 flex-col items-center justify-end p-[24px] sm:px-[20px] rounded-radius10 md:w-[100%] sm:w-[100%] w-[auto]">
                <div className="flex flex-col gap-[24px] items-start justify-start mt-[2px] w-[100%]">
                  <div className="flex flex-row items-center justify-between w-[100%]">
                    <Text
                      className="text-left text-white_A700 w-[auto]"
                      as="h6"
                      variant="h6"
                    >
                      Top selling Products
                    </Text>
                    <Img
                      src="images/img_menu_white_a700_3x14.svg"
                      className="h-[3px] w-[auto]"
                      alt="Menu Four"
                    />
                  </div>
                  <List
                    className="flex-col gap-[22px] grid md:w-[100%] sm:w-[100%] w-[77%]"
                    orientation="vertical"
                  >
                    <div className="flex flex-col items-center justify-start w-[100%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <div className="flex flex-col h-[96px] items-center justify-start w-[96px]">
                          <Img
                            src="images/img_rectangle53.png"
                            className="h-[96px] md:h-[auto] sm:h-[auto] object-cover rounded-radius10 w-[96px]"
                            alt="RectangleFiftyThree"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-left text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            NIKE Shoes Black Pattern
                          </Text>
                          <Img
                            src="images/img_group525.svg"
                            className="h-[14px] mt-[9px] w-[auto]"
                            alt="Group525"
                          />
                          <Text
                            className="font-medium mt-[9px] text-left text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            $87
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Line className="self-center h-[1px] bg-white_A700_5e w-[100%]" />
                    <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[66%]">
                      <div className="flex flex-row gap-[20px] items-center justify-between w-[100%]">
                        <div
                          className="bg-cover bg-no-repeat flex flex-col h-[96px] items-center justify-start p-[16px] w-[96px]"
                          style={{
                            backgroundImage: "url('images/img_group8.svg')",
                          }}
                        >
                          <Img
                            src="images/img_iphone122removebgpreview.png"
                            className="h-[64px] md:h-[auto] sm:h-[auto] object-cover w-[64px]"
                            alt="iPhone122removebgpreview"
                          />
                        </div>
                        <div className="flex flex-col items-start justify-start w-[auto]">
                          <Text
                            className="font-medium text-left text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            iPhone 12
                          </Text>
                          <Img
                            src="images/img_group525.svg"
                            className="h-[14px] mt-[9px] w-[auto]"
                            alt="Group573"
                          />
                          <Text
                            className="font-medium mt-[9px] text-left text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            $987
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNavigationPage;
