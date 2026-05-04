type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description
}: SectionHeadingProps) {
  return (
    <header className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold leading-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-sm text-muted-foreground sm:text-base">
        {description}
      </p>
    </header>
  );
}
