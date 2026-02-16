const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200 py-12 px-6 text-center">
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
                <span className="text-blue-600 font-bold text-lg">coinbase</span>

                <div className="flex space-x-6 text-sm text-gray-500">
                    <a href="#" className="hover:text-[#0052FF]">Privacy Policy</a>
                    <a href="#" className="hover:text-[#0052FF]">Terms of Service</a>
                    <a href="#" className="hover:text-[#0052FF]">Cookie Policy</a>
                    <a href="#" className="hover:text-[#0052FF]">State Licenses</a>
                </div>

                <p className="text-xs text-gray-400 max-w-lg leading-relaxed">
                    © 2024 Coinbase. All rights reserved. Coinbase is a registered trademark of Coinbase, Inc.
                    <br />
                    NMLS ID: 1163016
                </p>
            </div>
        </footer>
    );
};

export default Footer;
