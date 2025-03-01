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
      sx={{
        width: 190,
        flexShrink: 0,
        ['& .MuiDrawer-paper']: {
          width: 190,
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      <div className="p-4">
        {/* <img src="/waa-logo.svg" alt="WAA Logo" className="h-8 text-primary" /> */}
      </div>
      <List className="mt-4 flex flex-col gap-6 p-3">
        <ListItem component="button" className="hover:bg-primary-100 rounded-md group p-2">
          <ListItemIcon style={{ minWidth: '38px' }}>
            <HomeIcon className="text-primary group-hover:text-primary-1000" />
          </ListItemIcon>
          <ListItemText primary="홈" className="text-gray-600 typography-title3-regular group-hover:text-primary-1000" />
        </ListItem>

        <ListItem component="button" className="hover:bg-primary-100 rounded-md group p-2">
          <ListItemIcon style={{ minWidth: '38px' }}>
            <EditNoteIcon className="text-primary group-hover:text-primary-1000" />
          </ListItemIcon>
          <ListItemText primary="글쓰기" className="text-gray-600 typography-title3-regular group-hover:text-primary-1000" />
        </ListItem>

        <ListItem 
          component="button" 
          className="hover:bg-primary-100 rounded-md group p-2"
        >
          <ListItemIcon style={{ minWidth: '38px' }}>
            <InfoIcon className="text-primary group-hover:text-primary-1000" />
          </ListItemIcon>
          <ListItemText 
            primary="강아지 정보 추가" 
            className="text-gray-600 group-hover:text-primary-1000" 
          />
        </ListItem>

        <ListItem component="button" className="hover:bg-primary-100 rounded-md group p-2">
          <ListItemIcon style={{ minWidth: '38px' }}>
            <ListIcon className="text-primary group-hover:text-primary-1000" />
          </ListItemIcon>
          <ListItemText primary="리스트" className="text-gray-600 typography-title3-regular group-hover:text-primary-1000" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavigationBar; 