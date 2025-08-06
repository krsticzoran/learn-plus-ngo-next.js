interface Metric {
  number: string;
  label: string;
}

interface MetricsProps {
  data: Metric[];
}

export default function KeyMetrics({ data }: MetricsProps) {
  return (
    <dl className="mt-auto flex gap-8">
      {data.map(({ number, label }, index) => (
        <div key={index}>
          <dt className="sr-only">{label}</dt>
          <dd>
            <p className="text-4xl mb-2" aria-label={`${number} ${label}`}>
              {number}
            </p>
            <p className="text-sm">{label}</p>
          </dd>
        </div>
      ))}
    </dl>
  );
}
