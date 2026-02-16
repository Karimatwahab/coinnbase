import { FiSearch } from 'react-icons/fi';

const Hero = () => {
    return (
        <section className="bg-[#0052FF] text-white pt-32 pb-24 px-6 md:px-12 text-center relative overflow-hidden">
            {/* Subtle Background Radial Gradient for Depth */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.1)_0%,_transparent_70%)] pointer-events-none" />

            <h1 className="relative text-3xl md:text-5xl font-extrabold mb-8 tracking-tight leading-tight">
                How can we help you?
            </h1>

            <div className="max-w-xl mx-auto relative mb-10 z-10 px-2 md:px-0">
                <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                        <FiSearch className="text-gray-400 text-xl group-focus-within:text-[#0052FF] transition-colors" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search for help..."
                        className="w-full pl-12 pr-4 py-4 md:py-5 rounded-xl text-gray-900 bg-white focus:outline-none focus:ring-4 focus:ring-white/30 shadow-2xl text-base md:text-lg placeholder-gray-500 transition-all duration-300"
                    />
                </div>
            </div>

            <div className="relative flex justify-center flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-blue-100/90">
                <a href="#" className="hover:text-white transition underline-offset-4 hover:underline">Unable to sign in?</a>
                <span className="hidden md:inline opacity-50">•</span>
                <a href="#" className="hover:text-white transition underline-offset-4 hover:underline">Identity Verification</a>
                <span className="hidden md:inline opacity-50">•</span>
                <a href="#" className="hover:text-white transition underline-offset-4 hover:underline">Fraud and Phishing</a>
            </div>
        </section>
    );
};

export default Hero;
