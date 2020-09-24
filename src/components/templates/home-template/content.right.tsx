import React from "react";
import Me from "../../../assets/images/me5.jpg";


export const ContentRight: React.FC = () => (
    <div style={{height: '100%', background:'#0d1b2a'}}>
        <div style={{borderRadius: "3rem"}}>
            <img alt='michael-eze' srcSet={Me} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
        </div>
    </div>
);
