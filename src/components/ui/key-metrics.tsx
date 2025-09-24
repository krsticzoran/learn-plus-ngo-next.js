interface Metric {
  number: string;
  label: string;
}

interface MetricsProps {
  data: Metric[];
}

export default function KeyMetrics({ data }: MetricsProps) {
  return (
    <dl className="mt-auto flex flex-col gap-8 pt-20 sm:flex-row">
      {data.map(({ number, label }, index) => (
        <div key={index}>
          <dt className="sr-only">{label}</dt>
          <dd className="flex flex-row items-center gap-4 sm:flex-col sm:items-start sm:gap-0">
            <p
              className="min-w-16 text-right text-2xl sm:mb-2 sm:text-left sm:text-4xl"
              aria-label={`${number} ${label}`}
            >
              {number}
            </p>
            <p className="text-xs sm:text-sm">{label}</p>
          </dd>
        </div>
      ))}
    </dl>
  );
}
