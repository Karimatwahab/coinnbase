import { FiTwitter, FiMessageCircle, FiGlobe } from 'react-icons/fi';

const CommunitySection = () => {
    return (
        <section className="py-20 px-6 bg-white border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">
                    Join the conversation
                </h2>
                <p className="text-gray-500 mb-10 text-lg">
                    Connect with the community, get status updates, and share your feedback.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    <a href="#" className="flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-blue-100 text-[#1DA1F2] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FiTwitter size={24} />
                        </div>
                        <span className="font-bold text-gray-900 mb-1">Twitter</span>
                        <span className="text-sm text-gray-500">@CoinbaseSupport</span>
                    </a>

                    <a href="#" className="flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-purple-200 hover:bg-purple-50/30 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-purple-100 text-[#5865F2] rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FiMessageCircle size={24} />
                        </div>
                        <span className="font-bold text-gray-900 mb-1">Discord</span>
                        <span className="text-sm text-gray-500">Community Chat</span>
                    </a>

                    <a href="#" className="flex flex-col items-center p-6 rounded-2xl border border-gray-200 hover:border-green-200 hover:bg-green-50/30 transition-all duration-300 group">
                        <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <FiGlobe size={24} />
                        </div>
                        <span className="font-bold text-gray-900 mb-1">Status</span>
                        <span className="text-sm text-gray-500">System Uptime</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
