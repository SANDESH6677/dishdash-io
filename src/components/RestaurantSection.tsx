import RestaurantCard from "./RestaurantCard";

// Mock restaurant data
const restaurants = [
  {
    id: 1,
    name: "Pizza Palace",
    cuisine: "Italian, Pizza, Fast Food",
    rating: 4.5,
    deliveryTime: "25-30 mins",
    deliveryFee: "Free",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop",
    discount: "30% OFF"
  },
  {
    id: 2,
    name: "Burger Kingdom",
    cuisine: "American, Burgers, Fast Food",
    rating: 4.3,
    deliveryTime: "20-25 mins",
    deliveryFee: "$2.99",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    name: "Sushi Zen",
    cuisine: "Japanese, Sushi, Asian",
    rating: 4.7,
    deliveryTime: "35-40 mins",
    deliveryFee: "Free",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&h=300&fit=crop",
    discount: "20% OFF"
  },
  {
    id: 4,
    name: "Spice Garden",
    cuisine: "Indian, Curry, Vegetarian",
    rating: 4.4,
    deliveryTime: "30-35 mins",
    deliveryFee: "$1.99",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    name: "Taco Fiesta",
    cuisine: "Mexican, Tacos, Spicy",
    rating: 4.2,
    deliveryTime: "15-20 mins",
    deliveryFee: "Free",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=300&fit=crop"
  },
  {
    id: 6,
    name: "Sweet Treats",
    cuisine: "Desserts, Ice Cream, Bakery",
    rating: 4.6,
    deliveryTime: "20-25 mins",
    deliveryFee: "$1.49",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=500&h=300&fit=crop",
    discount: "Buy 1 Get 1"
  }
];

const RestaurantSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Restaurants Near You
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing food from top-rated restaurants in your area
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              name={restaurant.name}
              cuisine={restaurant.cuisine}
              rating={restaurant.rating}
              deliveryTime={restaurant.deliveryTime}
              deliveryFee={restaurant.deliveryFee}
              image={restaurant.image}
              discount={restaurant.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantSection;