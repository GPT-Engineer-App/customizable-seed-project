import { useState, useEffect } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useNavigate } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    preview: "Learn the basics of React and start building your first component-based application.",
    image: "https://placehold.co/600x400?text=React+Basics",
  },
  {
    id: 2,
    title: "Advanced CSS Techniques",
    preview: "Dive deep into CSS and discover advanced techniques to create stunning layouts.",
    image: "https://placehold.co/600x400?text=CSS+Techniques",
  },
  {
    id: 3,
    title: "JavaScript ES6+ Features",
    preview: "Explore the latest features in JavaScript and how they can improve your code.",
    image: "https://placehold.co/600x400?text=JS+ES6+",
  },
];

const BlogPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const adminStatus = localStorage.getItem("isAdmin");
    setIsAdmin(adminStatus === "true");
  }, []);

  const handleAddNewPost = () => {
    navigate("/add-post");
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Blog</h1>
        {isAdmin && (
          <Button onClick={handleAddNewPost}>Add New Post</Button>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <AspectRatio ratio={16 / 9}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="rounded-t-lg object-cover"
                />
              </AspectRatio>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardTitle className="mb-2">{post.title}</CardTitle>
              <p className="text-muted-foreground">{post.preview}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;