import React, { useState } from 'react'
import home from '../../../assets/icons8-home.svg'
import setting from '../../../assets/setting.svg'
import './Sidebar.css'
import { AiOutlineRight } from 'react-icons/ai';
import { Outlet, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const Navigate = useNavigate()
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (item) => {
        Navigate(`/${item}`)
        setSelectedItem(item);
    };

    return (
        <>
            <div className='sidebar_div'>
                <div className='main-sidebar'>
                    <ul>
                        <li className='image-list'>
                            <img src={home} alt='' />
                        </li>
                        <li className='image-list'>
                            <img width="48" height="48" src="https://img.icons8.com/color/48/new-document.png" alt="new-document" />
                        </li>
                        <li className='image-list'>
                            <img src={setting} alt=''  />
                        </li>
                        <li className='image-list'>
                            <img width="48" height="48" src="https://img.icons8.com/sf-regular/48/shutdown.png" alt="shutdown"  />
                            {/* <img src=alt=''/> */}
                        </li>
                        <li className='image-list'>
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/create-order--v1.png" alt="create-order--v1" />                        </li>
                        <li className='image-list'>
                            <img width="48" height="48" src="https://img.icons8.com/color/48/ask-question.png" alt="ask-question" />
                        </li>
                    </ul>
                </div>
                <div className="sidebar">
                    <ul>
                        <li className={`second-sidebar ${selectedItem === 'facerecogniton' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('facerecogniton')}
                        >
                            <img width="64" height="64" src="https://img.icons8.com/external-nawicon-glyph-nawicon/64/external-Face-Recognition-protection-and-security-nawicon-glyph-nawicon.png" alt="external-Face-Recognition-protection-and-security-nawicon-glyph-nawicon" />
                            Face Recognition
                            <span> <AiOutlineRight /></span>
                        </li>
                        <li className={`second-sidebar ${selectedItem === 'donors' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('donors')}
                        >
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/gift--v1.png" alt="gift--v1" />
                            Doners
                            <span> <AiOutlineRight /></span>
                        </li>
                        <li className={`second-sidebar ${selectedItem === 'reports' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('reports')}
                        >
                            <img width="64" height="64" src="https://img.icons8.com/external-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto/64/external-box-report-shop-delivery-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto.png" alt="external-box-report-shop-delivery-yogi-aprelliyanto-detailed-outline-yogi-aprelliyanto" />
                            Reports
                            <span> <AiOutlineRight /></span>
                        </li>
                        <li className={`second-sidebar ${selectedItem === 'Rreportshistory' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('reportshistory')}
                        >
                            <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/bookmark-ribbon--v1.png" alt="bookmark-ribbon--v1" />
                            Reports History
                            <span> <AiOutlineRight /></span>
                        </li>
                        <li className={`second-sidebar ${selectedItem === 'dailyvisit' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('dailyvisit')}
                        >
                            <img width="64" height="64" src="https://img.icons8.com/glyph-neue/64/folder-invoices--v2.png" alt="folder-invoices--v2" />
                            Daily Visit
                            <span> <AiOutlineRight /></span>
                        </li>
                        <li className={`second-sidebar ${selectedItem === 'testhistory' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('testhistory')}
                        >
                            <img width="50" height="50" src="https://img.icons8.com/ios/50/test--v1.png" alt="test--v1" />
                            Test History
                            <span> <AiOutlineRight /></span>
                        </li>
                        <li className={`second-sidebar ${selectedItem === 'workorder' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('workorder')}
                        >
                            <img width="48" height="48" src="https://img.icons8.com/fluency-systems-regular/48/000000/read.png" alt="read" />                            Work Order
                            <span> <AiOutlineRight /></span>
                        </li>
                        <li className={`second-sidebar ${selectedItem === 'calendertype' ? 'selected' : ''}`}
                            onClick={() => handleItemClick('calendertype')}
                        >
                            <img width="64" height="64" src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/external-Calendar-cenima-flatart-icons-outline-flatarticons.png" alt="external-Calendar-cenima-flatart-icons-outline-flatarticons" />
                            Celender type
                            <span> <AiOutlineRight /></span>
                        </li>
                    </ul>
                </div>
                <Outlet />

            </div>
        </>
    )
}

export default Sidebar
