import React from 'react';
import './CurrentPositionMarker.css';

export const CurentPositionMarker = (props: any) => {
    const { color, name, id } = props;
    return (
        <div>
            <div
                className="pin bounce"
                style={{ backgroundColor: color, cursor: 'pointer' }}
                title={name}
            />
            <div className="pulse" />
        </div>
    );
};

export default CurentPositionMarker;