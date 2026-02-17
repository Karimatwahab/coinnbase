import { FiUser, FiCreditCard, FiBarChart2, FiShield, FiSettings, FiZap } from 'react-icons/fi';

const TopicsGrid = () => {
    const topics = [
        { icon: <FiUser size={28} />, title: "Account & Wallet", desc: "Managing your account, ID verification, and wallet security." },
        { icon: <FiCreditCard size={28} />, title: "Buying & Selling", desc: "Payment methods, linking bank accounts, and trading." },
        { icon: <FiBarChart2 size={28} />, title: "Trading & Funding", desc: "Charts, market orders, fees, and funding your account." },
        { icon: <FiShield size={28} />, title: "Privacy & Security", desc: "2-step verification, password resets, and account safety." },
        { icon: <FiSettings size={28} />, title: "Supported Crypto", desc: "List of supported assets and network information." },
        { icon: <FiZap size={28} />, title: "Getting Started", desc: "New to crypto? Guides and basics for beginners." },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 -mt-20 relative z-20">
            <h2 className="sr-only">Help Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 hover:border-blue-200 transition-all duration-300 cursor-pointer group transform hover:-translate-y-1">
                        <div className="mb-6 bg-blue-50/80 text-[#0052FF] w-14 h-14 rounded-2xl flex items-center justify-center group-hover:bg-[#0052FF] group-hover:text-white transition-colors duration-300 shadow-sm">
                            {topic.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0052FF] transition-colors">
                            {topic.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            {topic.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopicsGrid;
