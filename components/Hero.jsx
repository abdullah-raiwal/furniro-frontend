import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Hero = () => {
  return (
    // backgroung image inside div
    <div
      className="container  bg-no-repeat md:bg-contain flex justify-end items-center"
      style={{
        backgroundImage: "url('/background-home.png')",
        height: "700px",
      }}
    >
      {/* call to action card  */}

      <div className="">
        <Card className="max-w-lg">
          <CardHeader>
            <CardDescription>New Arrival</CardDescription>

            <CardTitle>
                <h1 className="font-bold text-3xl">Discover our</h1>
                <h1 className="font-bold text-3xl">New Collection</h1>

            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
          </CardContent>
          <CardFooter>
            <Button>Shop Now</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Hero;
