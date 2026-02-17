import { FiSearch } from 'react-icons/fi';

const Hero = () => {
    return (
        <section className="bg-[#0052FF] text-white pt-40 pb-32 px-6 md:px-12 text-center relative overflow-hidden">
            {/* Enhanced Gradient Backgrounds */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-600 to-[#0052FF] opacity-50 z-0" />
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-500/30 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight leading-tight drop-shadow-sm">
                    How can we help you?
                </h1>

                <div className="max-w-xl mx-auto relative mb-12">
                    {/* Glassmorphic Search Container */}
                    <div className="relative group rounded-2xl p-1 bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 hover:shadow-blue-900/20">
                        <div className="relative bg-white rounded-xl overflow-hidden flex items-center">
                            <div className="pl-5 flex items-center pointer-events-none">
                                <FiSearch className="text-gray-400 text-xl group-focus-within:text-[#0052FF] transition-colors" />
                            </div>
                            <input
                                type="text"
                                placeholder="Search for help..."
                                className="w-full pl-3 pr-4 py-4 md:py-5 text-gray-900 bg-white focus:outline-none text-lg placeholder-gray-400"
                            />
                            <div className="hidden md:flex pr-2">
                                <button className="bg-[#0052FF] text-white p-2 rounded-lg hover:bg-blue-700 transition">
                                    <FiSearch size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-blue-100/80">
                    <a href="#" className="hover:text-white transition underline-offset-4 hover:underline">Unable to sign in?</a>
                    <a href="#" className="hover:text-white transition underline-offset-4 hover:underline">Identity Verification</a>
                    <a href="#" className="hover:text-white transition underline-offset-4 hover:underline">Fraud and Phishing</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
