'use client';

import { useEffect } from 'react';

const ChatwayWidget = () => {
    useEffect(() => {
        const scriptId = 'chatway-script';

        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.async = true;
            // IMPORTANT: Replace YOUR_REAL_ID_HERE with the actual Widget ID
            script.src = "https://cdn.chatway.app/widget.js?id=YOUR_REAL_ID_HERE";

            document.head.appendChild(script);
        }
    }, []);

    return null;
};

export default ChatwayWidget;
