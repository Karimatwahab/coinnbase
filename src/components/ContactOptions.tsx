import { FiMessageSquare, FiMail } from 'react-icons/fi';

const ContactOptions = () => {
    return (
        <section className="py-20 px-6 lg:px-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Still need help?</h2>
                <p className="text-gray-500 mb-12 text-lg">Our support team is allowed to assist you anytime.</p>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Chat Card */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer flex flex-col items-center">
                        <div className="w-14 h-14 bg-blue-50 text-[#0052FF] rounded-full flex items-center justify-center mb-6">
                            <FiMessageSquare size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Live Chat</h3>
                        <p className="text-gray-500 text-sm">Chat available 24/7 for account issues.</p>
                        <button className="mt-6 text-[#0052FF] font-medium hover:underline">Start Chat</button>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition cursor-pointer flex flex-col items-center">
                        <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-6">
                            <FiMail size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Email Support</h3>
                        <p className="text-gray-500 text-sm">Send us a message and we'll respond via email.</p>
                        <button className="mt-6 text-purple-600 font-medium hover:underline">Send Email</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactOptions;
