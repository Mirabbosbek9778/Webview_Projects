import {
  HomeIcon,
  UserCircleIcon,
  TableCellsIcon,
  BellIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
} from '@heroicons/react/24/solid';
import { Home, Profile, Tables, Notifications } from '@/pages/dashboard';
import { Sanjarbek, Jasurbek, Shahzodbek, Mirabbos } from '@/developers';
import { SignIn, SignUp } from '@/pages/auth';

const icon = {
  className: 'w-5 h-5 text-inherit',
};

export const routes = [
  {
    layout: 'dashboard',
    pages: [
      // {
      //   icon: <HomeIcon {...icon} />,
      //   name: 'dashboard',
      //   path: '/home',
      //   element: <Home />,
      // },
      // {
      //   icon: <UserCircleIcon {...icon} />,
      //   name: 'profile',
      //   path: '/profile',
      //   element: <Profile />,
      // },
      {
        icon: <UserCircleIcon {...icon} />,
        name: 'Sanjarbek',
        path: '/sanjarbek',
        element: <Sanjarbek />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: 'Jasurbek',
        path: '/jasurbek',
        element: <Jasurbek />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: 'Mirabbos',
        path: '/mirabbos',
        element: <Shahzodbek />,
      },
      {
        icon: <UserCircleIcon {...icon} />,
        name: 'Shahzodbek',
        path: '/shahzodbek',
        element: <Mirabbos />,
      },
      // {
      //   icon: <TableCellsIcon {...icon} />,
      //   name: 'tables',
      //   path: '/tables',
      //   element: <Tables />,
      // },
      // {
      //   icon: <BellIcon {...icon} />,
      //   name: 'notifactions',
      //   path: '/notifactions',
      //   element: <Notifications />,
      // },
    ],
  },
  // {
  //   title: 'auth pages',
  //   layout: 'auth',
  //   pages: [
  //     {
  //       icon: <ArrowRightOnRectangleIcon {...icon} />,
  //       name: 'sign in',
  //       path: '/sign-in',
  //       element: <SignIn />,
  //     },
  //     {
  //       icon: <UserPlusIcon {...icon} />,
  //       name: 'sign up',
  //       path: '/sign-up',
  //       element: <SignUp />,
  //     },
  //   ],
  // },
];

export default routes;
