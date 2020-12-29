import React from 'react'
import {AiFillEdit, AiFillHome} from "react-icons/all";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome/>,
        className: 'nav-text'
    },
    {
        title: 'Create Transaction',
        path: '/createTransaction',
        icon: <AiFillEdit/>,
        className: 'nav-text'
    },
    {
        title: 'Edit Transaction',
        path: '/edit',
        icon: <AiFillEdit/>,
        className: 'nav-text'
    },
    {
      title: 'Delete Transaction',
      path: '/deleteTransaction',
      icon: <AiFillEdit/>,
      className: 'nav-text'
    }
]
