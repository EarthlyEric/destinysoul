'use client';
import React, { useEffect } from 'react';

export const runtimes = "edge";

const InviteBotPage: React.FC = () => {
    useEffect(() => {
        window.location.href = 'https://discord.com/oauth2/authorize?client_id=870136029582098452&permissions=8&scope=bot';
    }, []);

    return null;
};

export default InviteBotPage;