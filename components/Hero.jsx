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
    <>

      <div suppressHydrationWarning
        className="container  flex items-center justify-end bg-no-repeat md:bg-contain"
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
                <p className="text-3xl font-bold">Discover our</p>
                <p className="text-3xl font-bold">New Collection</p>
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
    </>
    // backgroung image inside div
  );
};

export default Hero;
