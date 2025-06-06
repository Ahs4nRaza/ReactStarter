import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function SideMenu() {
    const [isExpanded, setIsExpanded] = useState(true);

    const toggleSidebar = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div style={{
            width: isExpanded ? '200px' : '80px',
            height: '100vh',  // Set the height to 100vh for full viewport height
            backgroundColor: '#333',
            color: 'white',
            padding: '10px',
            transition: 'width 0.3s ease',
            position: 'fixed',
        }}>
            <button
                onClick={toggleSidebar}
                style={{
                    backgroundColor: '#5754a8',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    width: '100%',
                    marginBottom: '20px'
                }}
            >
                {isExpanded ? '<-' : '->'}
            </button>

            <ul className="" style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }} title={isExpanded ? "" : "Test Page"}>
                    <NavLink
                        to="/"
                        style={({ isActive }) => ({
                            color: isActive ? '#5754a8' : 'white',
                            textDecoration: 'none',
                            display: 'block',
                            padding: '10px',
                            fontSize: '18px',
                        })}
                    >
                        {isExpanded ? 'Test Page' : '1'}
                    </NavLink>
                </li>
                <li style={{ marginBottom: '10px' }} title={isExpanded ? "" : "Restricted Page"}>
                    <NavLink
                        to="/restricted"
                        style={({ isActive }) => ({
                            color: isActive ? '#5754a8' : 'white',
                            textDecoration: 'none',
                            display: 'block',
                            padding: '10px',
                            fontSize: '18px',
                        })}
                    >
                        {isExpanded ? 'Restricted' : '2'}
                    </NavLink>
                </li>
                <li style={{ marginBottom: '10px' }} title={isExpanded ? "" : "Projects"}>
                    <NavLink
                        to="/projects"
                        style={({ isActive }) => ({
                            color: isActive ? '#5754a8' : 'white',
                            textDecoration: 'none',
                            display: 'block',
                            padding: '10px',
                            fontSize: '18px',
                        })}

                    >
                        {isExpanded ? 'Projects' : '3'}
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default SideMenu;
