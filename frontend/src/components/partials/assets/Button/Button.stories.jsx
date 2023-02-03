import React from "react";

import './Button.css';

export const Primary = () => <button className="button primary">Primary</button>;
export const Secondary = () => <button className="button secondary">Secondary</button>;
export const Success = () => <button className="button success">Success</button>;
export const Danger = () => <button className="button danger">Danger</button>;
export const Warning = () => <button className="button warning">Warning</button>;
export const Info = () => <button className="button info">Info</button>;

export default {
    title: "Button",
    component: Primary,
    argTypes: {
        backgroundColor: { control: "color" },
    },
};