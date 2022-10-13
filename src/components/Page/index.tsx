import React from 'react';
import NavBar from '../NavBar';

import './styles.scss'

interface Props {
    name: string;
    children: JSX.Element | JSX.Element[];
};

const Page: React.FC<Props> = ({
    name,
    children,
}) => {
    return (
        <div className="page-content">
            <NavBar currentPage={name} />
            {children}
        </div>
    );
};

export default Page;
