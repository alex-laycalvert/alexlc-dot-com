import React from 'react';

import './styles.scss'

interface Props {
    link: string;
    name: string;
    description: string;
    img: string;
    imgAlt: string;
    imgWidth: string;
};

const ProjectCard: React.FC<Props> = ({
    link,
    name,
    description,
    img,
    imgAlt,
    imgWidth,
}) => {
    return (
        <a
            className="project-card"
            href={link}
            target="#blank"
        >
            <div className="project-card-header">
                {name}
            </div>
            <hr />
            <div className="project-card-body">
                <p>{description}</p>
                <img
                    src={`assets/images/${img}.png`}
                    alt={imgAlt}
                    width={imgWidth}
                />
            </div>
        </a>
    );
};

export default ProjectCard;
