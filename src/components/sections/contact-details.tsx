export function ContactDetails() {
  return (
    <div>
      <h2 className="mb-3 text-xl font-semibold">Contact Us</h2>
      <ul className="space-y-1">
        <li>
          <span className="font-medium">Email:</span>{" "}
          <a
            href="mailto:krunoslav.vukelic@gmail.com"
            className="decoration-black-muted/20 hover:decoration-black-muted/50 underline underline-offset-4"
          >
            krunoslav.vukelic@gmail.com
          </a>
        </li>
        <li>
          <span className="font-medium">Phone:</span>{" "}
          <a
            href="tel:+385992476644"
            className="decoration-black-muted/20 hover:decoration-black-muted/50 underline underline-offset-4"
          >
            +385 99 247 66 44
          </a>
        </li>
      </ul>
    </div>
  );
}
