import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconHome, IconUsers, IconChecks as IconVote, IconSettings, IconLogout } from '@tabler/icons-react';

const menuItems = [
  { icon: IconHome, text: 'Dashboard', link: '/' },
  { icon: IconUsers, text: 'Candidates', link: '/candidates' },
  { icon: IconVote, text: 'Vote', link: '/vote' },
  { icon: IconSettings, text: 'Settings', link: '/settings' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen flex flex-col">
      <div className="p-4">
        <h2 className="text-2xl text-white font-semibold">Admin Panel</h2>
      </div>
      <nav className="flex-1">
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                className={`flex items-center py-2 px-4 hover:bg-gray-700 transition-colors duration-200 ${
                  location.pathname === item.link ? 'bg-gray-700' : ''
                }`}
              >
                <item.icon className="mr-3" />
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <button className="flex items-center text-red-400 hover:text-red-300 transition-colors duration-200">
          <IconLogout className="mr-3" />
          Logout
        </button>
      </div>
    </div>
  );
}

