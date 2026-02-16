'use client';

import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden bg-white hover:border-blue-200 transition-colors">
            <button
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none bg-gray-50/50 hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-semibold text-gray-900">{question}</span>
                <span className="text-gray-400">
                    {isOpen ? <FiChevronUp /> : <FiChevronDown />}
                </span>
            </button>
            {isOpen && (
                <div className="px-6 py-5 text-gray-600 border-t border-gray-100 text-sm leading-relaxed bg-white">
                    {answer}
                </div>
            )}
        </div>
    );
};

const FAQSection = () => {
    const faqs = [
        { question: "How do I verify my identity?", answer: "To verify your identity, go to Settings > Identity Verification. You will need to upload a photo of your ID (Passport, Driver's License) and take a selfie." },
        { question: "What payment methods are accepted?", answer: "We accept bank transfers (ACH/SEPA), debit cards, and wire transfers. Credit cards are not supported for new accounts in some regions." },
        { question: "How long do transactions take?", answer: "Debit card purchases are instant. Bank transfers can take 3-5 business days depending on your bank and region." },
        { question: "How do I enable two-factor authentication?", answer: "Go to Settings > Security. We recommend using an authenticator app (like Google Authenticator) rather than SMS for better security." },
        { question: "What are the trading fees?", answer: "Fees vary based on trade size and payment method. Generally, a spread of around 0.50% applies to buy/sell transactions." },
        { question: "How do I withdraw funds?", answer: "Navigate to your Portfolio, select the currency (USD, EUR, etc.), and click Withdraw. Select your linked bank account to proceed." },
    ];

    return (
        <section className="py-16 px-6 lg:px-20 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 tracking-tight text-gray-900">
                Quick answers to common questions
            </h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
