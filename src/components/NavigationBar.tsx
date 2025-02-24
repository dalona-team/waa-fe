import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import InfoIcon from '@mui/icons-material/Info';
import ListIcon from '@mui/icons-material/List';

const NavigationBar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      className="w-[240px]"
    >
      <div className="p-4">
        {/* <img src="/waa-logo.svg" alt="WAA Logo" className="h-8 text-primary" /> */}
      </div>
      
      <List className="mt-4">
        <ListItem component="button" className="hover:bg-gray-100">
          <ListItemIcon>
            <HomeIcon className="text-primary" />
          </ListItemIcon>
          <ListItemText primary="홈" className="text-gray-700" />
        </ListItem>

        <ListItem component="button" className="hover:bg-gray-100">
          <ListItemIcon>
            <EditNoteIcon className="text-primary" />
          </ListItemIcon>
          <ListItemText primary="글쓰기" className="text-gray-700" />
        </ListItem>

        <ListItem component="button" className="hover:bg-gray-100">
          <ListItemIcon>
            <InfoIcon className="text-primary" />
          </ListItemIcon>
          <ListItemText primary="강아지 정보 추가" className="text-gray-700" />
        </ListItem>

        <ListItem component="button" className="hover:bg-gray-100">
          <ListItemIcon>
            <ListIcon className="text-primary" />
          </ListItemIcon>
          <ListItemText primary="리스트" className="text-gray-700" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavigationBar; 