import {
  Box,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import Avatar1 from "../../assets/Dashboard/Table/Avatar1.svg";
import Avatar2 from "../../assets/Dashboard/Table/Avatar2.svg";
import Avatar3 from "../../assets/Dashboard/Table/Avatar3.svg";
import Avatar4 from "../../assets/Dashboard/Table/Avatar4.svg";
import Avatar5 from "../../assets/Dashboard/Table/Avatar5.svg";

import React from "react";

function createData(name, icon, status, email, createdTime, assignee) {
  return { name, icon, status, email, createdTime, assignee };
}

const tableTextStyle = {
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "17px",
  padding: "4px 10px",
  borderRadius: "4px",
};

const rows = [
  createData(
    "Carolyn Perkins",
    Avatar1,
    "New",
    "eileen_h@hotmail.com",
    "12/06/2021 12:53",
    "Carrie Harris"
  ),
  createData(
    "Terrance Moreno",
    Avatar2,
    "Sold",
    "terrance_moreno@infotech.io",
    "12/06/2021 12:53",
    "Toni Lane"
  ),
  createData(
    "Ron Vargas",
    Avatar3,
    "Sold",
    "terrance_moreno@infotech.io",
    "12/06/2021 12:53",
    "Joanne Mendoza"
  ),
  createData(
    "Luke Cook",
    Avatar4,
    "Not Interested",
    "terrance_moreno@infotech.io",
    "12/06/2021 12:53",
    "Lorraine Carr"
  ),
  createData(
    "Joyce Freeman",
    Avatar5,
    "In Progress",
    "joyce991@infotech.io",
    "12/06/2021 12:53",
    "Myrtle Mason"
  ),
];

const tableCellStyle = {
  color: "#9CA3AF",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: "20px",
  
};

const TableComponent = () => {
  return (
    <Card
      sx={{
        height: "423px",
        border: "1px solid #374151",
        borderRadius: "8px",
        backgroundColor: "#1F2937",
        fontFamily: "Inter",
      }}
    >
      <CardContent
        sx={{
          padding: "20px",
        }}
      >
        <Stack
          sx={{ marginBottom: "16px" }}
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Typography
            component={"h4"}
            sx={{
              lineHeight: "28px",
              fontWeight: 600,
              fontSize: "20px",
              color: "#F3F4F6",
            }}
          >
            Leads
          </Typography>
          <Button
            sx={{
              height: "39px",
              width: "150px",
              padding: "9.5px 12px",
              borderRadius: "6px",
              border: "1px solid #374151",
              backgroundColor: "#374151",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "20px",
              color: "#F3F4F6",
            }}
          >
            View All Leads
          </Button>
        </Stack>
        <Box>
          <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ backgroundColor: "#374151" }}>
                  <TableCell sx={tableCellStyle}>NAME</TableCell>
                  <TableCell sx={tableCellStyle} align="right">
                    STATUS
                  </TableCell>
                  <TableCell sx={tableCellStyle} align="right">
                    EMAIL
                  </TableCell>
                  <TableCell sx={tableCellStyle} align="right">
                    CREATED TIME
                  </TableCell>
                  <TableCell sx={tableCellStyle} align="right">
                    ASSIGNEE
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={{
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#9CA3AF",
                      }}
                      component="th"
                      scope="row"
                    >
                      <Stack direction={"row"} alignItems={"center"} gap={1}>
                        <img src={row.icon} alt="user" />{" "}
                        <Box component={"span"}>{row.name}</Box>
                      </Stack>
                    </TableCell>
                    <TableCell align="right">
                      <Box
                        sx={
                          row.status == "New"
                            ? {
                                ...tableTextStyle,
                                border: "1px solid #374151",
                                color: "#9CA3AF",
                              }
                            : row.status == "Sold"
                            ? {
                                ...tableTextStyle,
                                background: "#10B98133",
                                color: "#10B981",
                              }
                            : row.status == "Not Interested"
                            ? {
                                ...tableTextStyle,
                                background: "#EAB30833",
                                color: "#EAB308",
                              }
                            : row.status == "In Progress"
                            ? {
                                ...tableTextStyle,
                                background: "#2563EB33",
                                color: "3B82F6",
                              }
                            : { tableTextStyle }
                        }
                        component={"span"}
                      >
                        {row.status}
                      </Box>
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#9CA3AF",
                      }}
                      align="right"
                    >
                      {row.email}
                    </TableCell>
                    <TableCell
                      sx={{
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "17px",
                        color: "#9CA3AF",
                      }}
                      align="right"
                    >
                      {row.createdTime}
                    </TableCell>
                    <TableCell align="right">
                      <Box
                        component={"span"}
                        sx={{
                          padding: "4px 10px",
                          border: "1px solid #374151",
                          borderRadius: "4px",
                          color: "#9CA3AF",
                          fontWeight: 600,
                          fontSize: "12px",
                          lineHeight: "14px",
                        }}
                      >
                        {row.assignee}
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TableComponent;
