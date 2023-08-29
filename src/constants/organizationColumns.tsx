import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Box as MuiBox } from "@mui/system";
import { Box, Typography } from "@mui/material";
import React from "react";
import { GridColDef } from "@mui/x-data-grid";


interface RowData {
    access: string;
}

interface OrganizationColumnColors {
    greenAccent: {
        [key: string]: string;
    };
    grey: {
        [key: string]: string;
    };
}

const organizationColumns = (colors: OrganizationColumnColors): GridColDef<RowData>[] => {
    return [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Name",
            flex: 1,
            cellClassName: "name-column--cell",
        },
        {
            field: "age",
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",
        },
        {
            field: "phone",
            headerName: "Phone Number",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "accessLevel",
            headerName: "Access Level",
            flex: 1,

            renderCell: ({ row }: { row: RowData }) => {
                return (
                    <React.Fragment>
                    <MuiBox
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        bgcolor={
                            row.access === "admin"
                                ? colors.greenAccent[600]
                                : row.access === "manager"
                                    ? colors.greenAccent[700]
                                    : colors.greenAccent[700]
                        }
                        borderRadius ="4px" >
                    
                        {row.access === "admin"? <AdminPanelSettingsOutlinedIcon /> :
                        row.access === "manager" ? <SecurityOutlinedIcon />:
                        row.access === "user" && <LockOpenOutlinedIcon />}
                       < Typography color={colors.grey[100]} sx={{ ml: "5px" }}
                        >
                            {row.access}
                        </Typography>
                    </MuiBox>
                     </React.Fragment>
                );
            },
        },
    ];
};

export default organizationColumns;