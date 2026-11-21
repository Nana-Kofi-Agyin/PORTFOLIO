import { services } from '../../data/servicesData';
import { Link } from '../../router';
import Val from '../Val';

const Row = ({ label, children }) => (
  <div className="grid sm:grid-cols-[8rem_1fr] gap-1 sm:gap-6 py-3 border-t border-line">
    <dt className="text-muted text-[0.9375rem]">{label}</dt>
    <dd className="m-0">{children}</dd>
  </div>
);

const Services = () => {
  if (!services.length) return null;

  return (
    <section id="services" aria-labelledby="services-title" className="border-t border-line">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h2 id="services-title">Services</h2>
        <p className="mt-4 text-muted max-w-[60ch]">
          Offers backed by shipped work.
        </p>

        <ol className="mt-10 m-0 p-0 list-none space-y-12">
          {services.map((s) => (
            <li key={s.title}>
              <h3><Val v={s.title} /></h3>
              <dl className="mt-4 m-0 border-b border-line max-w-[65ch]">
                <Row label="Who it is for"><Val v={s.forWhom} /></Row>
                <Row label="What you get"><Val v={s.youGet} /></Row>
                <Row label="Timeline"><Val v={s.timeline} /></Row>
                <Row label="Proof">
                  <Link to={`/projects/${s.project.slug}`}>{s.project.title}</Link>
                </Row>
              </dl>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Services;
