import { Drawer } from '@mui/material';

const drawerWidth = 240;

const SidePanel = ({ anchor, open }) => {
    return (
        <Drawer anchor={anchor} open={open} />
    );
};

export default SidePanel;