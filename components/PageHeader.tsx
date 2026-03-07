export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="px-6 pt-32 pb-16">
      <div className="mx-auto max-w-[1200px]">
        <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-[600px] text-lg text-[var(--color-text-muted)]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
