import { Badge } from "@/components/ui/badge";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="section-y-sm bg-primary">
      <div className="container text-center">
        <Badge variant="dark">{eyebrow}</Badge>
        <h1 className="mt-3 font-heading text-4xl font-bold text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">{description}</p>
      </div>
    </section>
  );
}
