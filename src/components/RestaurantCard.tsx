import { Star, Clock, Truck } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  image: string;
  discount?: string;
}

const RestaurantCard = ({ 
  name, 
  cuisine, 
  rating, 
  deliveryTime, 
  deliveryFee, 
  image, 
  discount 
}: RestaurantCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-card transition-all duration-300 cursor-pointer group bg-gradient-card border-0">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground font-semibold">
            {discount}
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
          <Star className="h-3 w-3 fill-food-yellow text-food-yellow" />
          <span className="text-xs font-semibold text-gray-800">{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900 mb-1 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-gray-600 text-sm mb-3">{cuisine}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{deliveryTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Truck className="h-4 w-4" />
            <span>{deliveryFee}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default RestaurantCard;