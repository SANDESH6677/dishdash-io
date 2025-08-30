import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RestaurantSection from "@/components/RestaurantSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <RestaurantSection />
      </main>
    </div>
  );
};

export default Index;
