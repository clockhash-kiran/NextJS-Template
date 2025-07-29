import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero12 = () => {
  return (
    <section className="relative overflow-hidden py-32 bg-background text-foreground">
      {/* Background pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-70 dark:opacity-10"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center gap-6">
          <div className="rounded-xl bg-background/30 p-4 shadow-sm backdrop-blur-sm">
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg"
              alt="logo"
              className="h-16"
            />
          </div>

          <div>
            <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl">
              Build your next project with{" "}
              <span className="text-primary">Blocks</span>
            </h1>
            <p className="mx-auto max-w-3xl text-muted-foreground lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
              doloremque mollitia fugiat omnis! Porro facilis quo animi
              consequatur. Explicabo.
            </p>
          </div>

          <div className="mt-6 flex justify-center gap-3">
            <Button className="shadow-sm transition-shadow hover:shadow">
              Get Started
            </Button>
            <Button variant="outline" className="group">
              Learn more{" "}
              <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero12 };
