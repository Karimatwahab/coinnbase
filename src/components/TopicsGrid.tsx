import { FiUser, FiCreditCard, FiBarChart2, FiShield, FiSettings, FiZap } from 'react-icons/fi';

const TopicsGrid = () => {
    const topics = [
        { icon: <FiUser size={28} className="text-[#0052FF]" />, title: "Account & Wallet", desc: "Managing your account, ID verification, and wallet security." },
        { icon: <FiCreditCard size={28} className="text-[#0052FF]" />, title: "Buying & Selling", desc: "Payment methods, linking bank accounts, and trading." },
        { icon: <FiBarChart2 size={28} className="text-[#0052FF]" />, title: "Trading & Funding", desc: "Charts, market orders, fees, and funding your account." },
        { icon: <FiShield size={28} className="text-[#0052FF]" />, title: "Privacy & Security", desc: "2-step verification, password resets, and account safety." },
        { icon: <FiSettings size={28} className="text-[#0052FF]" />, title: "Supported Crypto", desc: "List of supported assets and network information." },
        { icon: <FiZap size={28} className="text-[#0052FF]" />, title: "Getting Started", desc: "New to crypto? Guides and basics for beginners." },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 -mt-10 md:-mt-16 mb-20 relative z-10">
            <h2 className="sr-only">Help Topics</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topics.map((topic, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-blue-100 cursor-pointer group transform hover:-translate-y-1">
                        <div className="mb-4 bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-[#0052FF] group-hover:text-white transition-colors duration-300">
                            {topic.icon}
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#0052FF] transition-colors">
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
