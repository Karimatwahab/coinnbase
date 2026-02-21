'use client';

import { useEffect } from 'react';

const ChatwayWidget = () => {
    useEffect(() => {
        const scriptId = 'chatway-script';

        console.log("ChatwayWidget: Component mounted");

        if (!document.getElementById(scriptId)) {
            console.log("ChatwayWidget: Injecting script...");
            const script = document.createElement('script');
            script.id = scriptId;
            script.async = true;
            script.src = "https://cdn.chatway.app/widget.js?id=qGJAW3KOPrGA";

            // Add error handling
            script.onerror = (e) => {
                console.error("ChatwayWidget: Script failed to load", e);
            };
            script.onload = () => {
                console.log("ChatwayWidget: Script loaded successfully");
            };

            document.head.appendChild(script);

            // Force visibility via style injection
            const style = document.createElement('style');
            style.innerHTML = `
                .chatway--container .chatway--trigger-container { display: block !important; opacity: 1 !important; visibility: visible !important; }
                iframe[title="Chatway"] { display: block !important; opacity: 1 !important; visibility: visible !important; }
            `;
            document.head.appendChild(style);
        } else {
            console.log("ChatwayWidget: Script already exists");
        }
    }, []);

    return null;
};

export default ChatwayWidget;
