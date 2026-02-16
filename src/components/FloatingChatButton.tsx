'use client';

import { FiMessageCircle } from 'react-icons/fi';

const FloatingChatButton = () => {
    return (
        <button
            className="fixed bottom-6 right-6 md:bottom-10 md:right-10 bg-[#0052FF] text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-transform hover:scale-110 active:scale-95 z-50 flex items-center justify-center ring-4 ring-white/20"
            onClick={() => {
                // @ts-ignore
                if (typeof window !== 'undefined' && window.chatway) {
                    // @ts-ignore
                    window.chatway.open();
                } else {
                    console.log("Chatway widget not loaded yet.");
                }
            }}
            aria-label="Open Live Chat"
        >
            <FiMessageCircle size={28} />
        </button>
    );
};

export default FloatingChatButton;
