import { Search, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import heroImage from "@/assets/hero-food-delivery.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-white py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Hungry? Get food delivered
          <span className="block text-food-yellow">in minutes!</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
          Order from your favorite restaurants and get fresh food delivered to your doorstep
        </p>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-hero p-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Location Input */}
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Enter your delivery address"
                className="pl-10 h-12 text-gray-900 bg-gray-50 border-0"
              />
            </div>
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                placeholder="Search for restaurant or food"
                className="pl-10 h-12 text-gray-900 bg-gray-50 border-0"
              />
            </div>
            
            {/* Search Button */}
            <Button className="h-12 px-8 bg-primary hover:bg-primary/90 shadow-button text-white font-semibold">
              Find Food
            </Button>
          </div>
        </div>

        {/* Popular Searches */}
        <div className="mt-8">
          <p className="text-white/80 mb-4">Popular: </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["Pizza", "Burger", "Chinese", "Indian", "Italian", "Desserts"].map((item) => (
              <Button 
                key={item}
                variant="outline" 
                size="sm"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30"
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;