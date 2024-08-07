import LandingPage from "@/components/elements/page";
import Feature from "@/components/feature/page";
import Navbar from "@/components/navbar/page";
import Playground from "@/components/playground/page";
import Productivity from "@/components/productivity/page";
import Performance from "@/components/performance/page";
import SocialMedia from "@/components/socialmedia/page";
import Footer from "@/components/footer/page";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function Home() {
  return (
    <>
    <SpeedInsights />
    <Navbar className="relative" />
    <LandingPage />
    <div className="lg:px-20">
      <Feature />
      <Playground />
      <Productivity />
      <Performance />
      <SocialMedia />
    </div>
      <Footer />
    </>
  );
}
