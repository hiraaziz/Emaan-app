// App.js
import React from 'react';
import DropdownMenu from './DropdownMenu';

const ShowMenu = () => {
  const menuItems = [
    {
      label: 'About',
      link:null,
      subItems:[
        {
            label: 'About Us',
            link:'/aboutus',
            
        },
        {
            label: 'Vision, Mission, Objectives',
            link:'/'
        },
        {
            label: 'Rector Messages',
            link:'/rectormessages'
        },
        {
            label: 'Chancellor Message',
            link:'/'
        },
        {
            label: 'Registator Message',
            link:'/'
        },
        {
            label: 'Board of Governce',
            link:'/'
        },
        {
            label: 'Acadamic Council',
            link:'/'
        },
        {
            label: 'Board of Advance Studies & Research (BASR)',
            link:'/'
        },
        {
            label: 'Organogram of EIMS',
            link:'/'
        }
      ]
    },
    {
      label: 'Department',
      subItems: [
        {
          label: 'Business Administration',
          link:null,
          subItems: [
            {
              label: 'MBA 2 years',
              link:'/'
            },
            {
              label: 'MBA 1.5 years',
              link:'/'
            },
            {
                label: 'BBA 4 years',
                link:'/'
            },
            {
                label: 'BBA 2 years',
                link:'/'
            },
            {
                label: 'ADP Business & Commerce (2 years)',
                link:'/'
              },
          ],
        },
        {
          label: 'Computer Science',
          link:null,
          subItems: [
            {
              label: 'BSCS (4 years)',
              link:'/'
            },
            {
              label: 'BSCS (2.5 years)',
              link:'/'
            },
            {
                label: 'ADP Web Design & Development',
                link:'/'
            },
            {
                label: 'ADP Computer Networking',
                link:'/'
            },
            {
                label: 'ADP Database Management System',
                link:'/'
              },
          ],
        },
      ],
    },
    {
      label: 'Item 3',
      onClick: () => console.log('Item 3 clicked'),
    },
    {
      label: 'Item 4',
      onClick: () => console.log('Item 4 clicked'),
      subItems: [
        {
          label: 'Subitem 4.1',
          onClick: () => console.log('Subitem 4.1 clicked'),
        },
        {
          label: 'Subitem 4.2',
          onClick: () => console.log('Subitem 4.2 clicked'),
        },
      ],
    },
  ];

  return (
    <div className="p-4 bg-gray-100">
      <nav className="flex items-center justify-center p-2 bg-white">
        {menuItems.map((menuItem, index) => (
          <DropdownMenu key={index} label={menuItem.label} items={menuItem.subItems || []} />
        ))}
      </nav>
    </div>
  );
};

export default ShowMenu;