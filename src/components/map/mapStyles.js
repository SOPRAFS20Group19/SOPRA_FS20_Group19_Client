import React from "react";

export const mapStyles = () => {
    if (window.innerWidth < 800) {
        return {zoomControl: false};
    }
    return {zoomControl: true};
};
