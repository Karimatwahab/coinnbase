import { FiShield, FiLock, FiAlertTriangle, FiArrowRight } from 'react-icons/fi';

const LearnSection = () => {
    const guides = [
        { icon: <FiLock size={32} />, title: "Account Security", desc: "Best practices to keep your account safe from unauthorized access.", color: "text-blue-600", bg: "bg-blue-50" },
        { icon: <FiAlertTriangle size={32} />, title: "Avoiding Scams", desc: "How to identify and report phishing attempts and fraud.", color: "text-orange-600", bg: "bg-orange-50" },
        { icon: <FiShield size={32} />, title: "Identity Verification", desc: "Step-by-step guide to verifying your ID and unlocking features.", color: "text-green-600", bg: "bg-green-50" },
    ];

    return (
        <section className="py-24 px-6 relative overflow-hidden bg-gray-50/50">
            {/* Background Blob for Glass Effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white to-transparent -z-10" />

            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Essential Support Guides</h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">Detailed tutorials to help you manage and protect your account.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {guides.map((item, index) => (
                        <div key={index} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer">
                            <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center mb-6 shadow-sm`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#0052FF] transition-colors">{item.title}</h3>
                            <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                            <span className="text-[#0052FF] font-semibold text-sm hover:underline flex items-center gap-2">
                                Read Guide <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LearnSection;
