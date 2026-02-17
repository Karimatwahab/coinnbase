import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TopicsGrid from '@/components/TopicsGrid';
import FAQSection from '@/components/FAQSection';
import ContactOptions from '@/components/ContactOptions';
import Footer from '@/components/Footer';
import PopularArticles from '@/components/PopularArticles';
import LearnSection from '@/components/LearnSection';
import CommunitySection from '@/components/CommunitySection';
import FloatingChatButton from '@/components/FloatingChatButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TopicsGrid />
      <LearnSection />
      <PopularArticles />
      <CommunitySection />
      <FAQSection />
      <ContactOptions />
      <Footer />
      <FloatingChatButton />
    </main>
  );
}
