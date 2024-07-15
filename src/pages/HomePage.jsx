import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)]">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <p className="text-xl mb-8">This is a simple starter template you can build upon.</p>
      <Button>Get Started</Button>
    </div>
  );
};

export default HomePage;