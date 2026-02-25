'use client';

import { useEffect } from 'react';

const JivochatWidget = () => {
    useEffect(() => {
        const scriptId = 'jivochat-script';

        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.async = true;
            script.src = "//code.jivosite.com/widget/L61iIapA3V";
            document.head.appendChild(script);
        }
    }, []);

    return null;
};

export default JivochatWidget;
