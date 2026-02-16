import { FiArrowRight, FiFileText } from 'react-icons/fi';

const PopularArticles = () => {
    const articles = [
        "How to send crypto to another wallet",
        "Understanding your transaction fees",
        "Resetting your password securely",
        "Setting up a recurring buy",
        "Limits and trading levels explained",
        "Tax reporting information"
    ];

    return (
        <section className="py-20 px-6 lg:px-20 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-2">
                    <FiFileText className="text-blue-600" />
                    Top Articles
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {articles.map((article, index) => (
                        <a key={index} href="#" className="flex items-center justify-between p-4 rounded-lg border border-gray-100 hover:border-blue-200 hover:bg-blue-50/30 transition group">
                            <span className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors">
                                {article}
                            </span>
                            <FiArrowRight className="text-gray-300 group-hover:text-blue-500 transition-colors" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularArticles;
