import { Box, Typography } from "@mui/material";
import { ContainerBox } from "components";
import React from "react";
import { NavLink } from "react-router-dom";
import { navBarLinks } from "utils/constant";
import logo from "assets/main.logo.png";
import "./header.css";

export const Header = () => {
  return (
    <header className="header-area header-sticky">
      <Box
        className="container"
        sx={
          {
            // position: "fixed",
            // width: "100%",
            // zIndex: "9",
            // background: "#000",
          }
        }
      >
        <Box className="row">
          <ContainerBox>
            <Box
              className="col-12"
              sx={
                {
                  // padding: "1rem 0",
                  // display: { xs: "none", md: "flex" },
                  // justifyContent: "space-between",
                  // alignItems: "center",
                }
              }
            >
              <Box style={{ height: "70px" }} className="main-nav">
                <NavLink to="/" className="logo">
                  <img
                    src={logo}
                    alt="logo"
                    style={
                      {
                        // width: "100%",
                        // height: "100%",
                      }
                    }
                  />
                </NavLink>
              </Box>
              <ul
                className="nav"
                style={
                  {
                    // display: "flex",
                    // justifyContent: "space-between",
                    // alignItems: "center",
                    // gap: "12px",
                  }
                }
              >
                {navBarLinks?.map((item, index) => {
                  return (
                    <NavLink
                      style={({ isActive }) => ({
                        borderBottom: isActive ? "2px solid" : "inherit",
                        textTransform: "capitalize",
                      })}
                      to={item?.url}
                      key={index}
                    >
                      <Typography
                        sx={
                          {
                            // paddingBottom: "5px",
                            // fontSize: "1.1rem",
                            // color: "white",
                          }
                        }
                      >
                        {item?.linkName}
                      </Typography>
                    </NavLink>
                  );
                })}
              </ul>
            </Box>
          </ContainerBox>
        </Box>
      </Box>
    </header>
  );
};
