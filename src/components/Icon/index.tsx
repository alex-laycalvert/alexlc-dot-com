import React from 'react';

interface Props {
    name: string;
    alt: string;
    width?: number;
    height?: number;
};

const Icon: React.FC<Props> = ({
    name,
    alt,
    width,
    height,
}) => {
    if (!width) width = 25;
    if (!height) height = 25;
    return (
        <div className="alexlc-icon">
            <img
                width={width}
                height={height}
                src={`assets/icons/${name}.svg`}
                alt={alt}
            />
        </div>
    );
};

export default Icon;
