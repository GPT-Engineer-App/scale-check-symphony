import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cat } from "lucide-react";

const Index = () => {
  const catBreeds = [
    { name: "Siamese", origin: "Thailand" },
    { name: "Maine Coon", origin: "United States" },
    { name: "Persian", origin: "Iran" },
    { name: "British Shorthair", origin: "United Kingdom" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 flex items-center">
          <Cat className="mr-2" /> All About Cats
        </h1>
        <img
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
          alt="Cute cat"
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-8"
        />
        <p className="text-xl text-gray-700 mb-8">
          Cats are fascinating creatures known for their independence, agility, and affectionate nature. 
          They have been human companions for thousands of years and are one of the most popular pets worldwide.
        </p>
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cat Characteristics</CardTitle>
            <CardDescription>Some interesting facts about cats</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6">
              <li>Cats have excellent night vision and can see in light six times dimmer than humans.</li>
              <li>A group of cats is called a "clowder".</li>
              <li>Cats spend 70% of their lives sleeping.</li>
              <li>They have a unique "gravity-defying" ability to land on their feet.</li>
              <li>A cat's hearing is much more sensitive than a human's or dog's.</li>
            </ul>
          </CardContent>
        </Card>
        <h2 className="text-2xl font-semibold mb-4">Popular Cat Breeds</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {catBreeds.map((breed) => (
            <Card key={breed.name}>
              <CardHeader>
                <CardTitle>{breed.name}</CardTitle>
                <CardDescription>Origin: {breed.origin}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
