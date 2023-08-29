import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { tokens } from "../../styles/theme";
import { Link } from "react-router-dom";
import React from "react";

interface SidebarMenuItemProps {
    menu: {
        icon: React.ComponentType;
        path?: string;
        title?: string;
        
    };
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const SidebarMenuItem: React.FC<SidebarMenuItemProps> = ({ menu, selected, setSelected }) => {

    const themes = useTheme();
    const color = tokens(themes.palette.mode);

    return (
        <MenuItem
            icon={<menu.icon />}
            active={selected === menu.path}
            onClick={() => setSelected(menu.path||"")}
            style={{ color: color.primary[100] }}
        >
            <Typography>{menu.title}</Typography>

            <Link to={menu.path||""} />
        </MenuItem>
    );
};

export default SidebarMenuItem;
