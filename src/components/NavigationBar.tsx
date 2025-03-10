import { Drawer, Link, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import Image from 'next/image';

import HomeIcon from '@/icons/home.svg';
import AddIcon from '@/icons/add.svg';
import DashboardIcon from '@/icons/dashboard.svg';
import ListIcon from '@/icons/list.svg';

const NavigationBar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 182,
        flexShrink: 0,
        ['& .MuiDrawer-paper']: {
          width: 190,
          boxSizing: 'border-box',
          borderRight: '1px solid #f6f6f6',
        },
      }}
    >
      <div className="p-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/waa-logo.svg" 
            alt="WAA Logo"
            width={130}
            height={48}
            priority
          />
        </Link>
      </div>
      <List className="mt-4 flex flex-col gap-6 p-3">
        <ListItem component="button" className="hover:bg-primary-100 rounded-md group p-2">
          <ListItemIcon style={{ minWidth: '38px' }}>
            <HomeIcon width={26} height={26} className="text-primary group-hover:text-primary-1000" />
          </ListItemIcon>
          <ListItemText primary="홈" className="text-gray-600 typography-title3-regular group-hover:text-primary-1000" />
        </ListItem>

        <ListItem component="button" className="hover:bg-primary-100 rounded-md group p-2">
          <ListItemIcon style={{ minWidth: '38px' }}>
            <AddIcon width={26} height={26} className="text-primary group-hover:text-primary-1000" />
          </ListItemIcon>
          <ListItemText primary="글쓰기" className="text-gray-600 typography-title3-regular group-hover:text-primary-1000" />
        </ListItem>

        <ListItem 
          component="button" 
          className="hover:bg-primary-100 rounded-md group p-2"
        >
          <ListItemIcon style={{ minWidth: '38px' }}>
            <DashboardIcon width={26} height={26} className="text-primary group-hover:text-primary-1000" />
          </ListItemIcon>
          <ListItemText 
            primary="강아지 정보 추가" 
            className="text-gray-600 group-hover:text-primary-1000" 
          />
        </ListItem>

        <ListItem component="button" className="hover:bg-primary-100 rounded-md group p-2">
          <ListItemIcon style={{ minWidth: '38px' }}>
            <ListIcon width={26} height={26} className="text-primary group-hover:text-primary-1000" />
          </ListItemIcon>
          <ListItemText primary="리스트" className="text-gray-600 typography-title3-regular group-hover:text-primary-1000" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default NavigationBar; 