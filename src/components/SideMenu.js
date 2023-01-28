
import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';

import {
    CalendarMonth,
    FiberNew,
    Map,
    MedicalInformation,
    Phone
} from '@mui/icons-material';

function DisplayIcon(text) {
    var icon;

    switch (text) {
        case 'Book Appt':
            icon = <CalendarMonth />;
            break;
        case 'First Visit':
            icon = <FiberNew />;
            break;
        case 'Location':
            icon = <Map />;
            break;
        case 'Services':
            icon = <MedicalInformation />;
            break;
        default:
            break;
    }
    return icon;
}



    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                {['Book Appt', 'First Visit', 'Location', 'Services'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {DisplayIcon(text)}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['0411 111 111', 'Location'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <Phone /> : <Map />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </div>
    );

export default function SideMenu() {
    return drawer;
}