import {
  aiWorkflow,
  hasAiWorkflowContent,
  collaboration,
  now,
  hasNowContent,
} from '../../data/hiringData';
import { isPlaceholder } from '../../data/siteConfig';
import Val from '../Val';

const Row = ({ label, children }) => (
  <div className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4 border-t border-line">
    <dt className="text-muted text-[0.9375rem]">{label}</dt>
    <dd className="m-0">{children}</dd>
  </div>
);

export const AiWorkflowSection = () => {
  if (!hasAiWorkflowContent) return null;

  return (
    <section id="ai-workflow" aria-labelledby="ai-workflow-title" className="border-t border-line">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <h2 id="ai-workflow-title">How I use AI in my workflow</h2>
        <p className="mt-4 max-w-[65ch] text-muted">{aiWorkflow.summary}</p>

        <dl className="mt-8 m-0 max-w-[65ch] border-b border-line">
          <Row label="What I delegate">
            <ul className="m-0 pl-5 space-y-2">
              {aiWorkflow.delegate.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Row>
          <Row label="What I review myself">
            <ul className="m-0 pl-5 space-y-2">
              {aiWorkflow.reviewMyself.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Row>
        </dl>
      </div>
    </section>
  );
};

export const CollaborationSection = () => (
  <section id="collaboration" aria-labelledby="collaboration-title" className="border-t border-line">
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h2 id="collaboration-title">Collaboration</h2>
      <p className="mt-4 max-w-[65ch] text-muted">
        Pull requests, code reviews, documentation and open-source work.
      </p>

      <ul className="mt-8 m-0 p-0 list-none max-w-[65ch] border-b border-line">
        {collaboration.map((item, i) => (
          <li key={i} className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4 border-t border-line">
            <span className="text-muted text-[0.9375rem]">{item.type}</span>
            <div className="space-y-1">
              <p className="font-semibold">
                {isPlaceholder(item.href) ? (
                  <Val v={item.title} />
                ) : (
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    <Val v={item.title} />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
              </p>
              <p className="text-muted text-[0.9375rem]"><Val v={item.note} /></p>
              {isPlaceholder(item.href) && (
                <p className="text-[0.875rem]"><Val v={item.href} /></p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export const NowSection = () => {
  if (!hasNowContent) return null;

  return (
    <section id="now" aria-labelledby="now-title" className="border-t border-line">
      <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="flex flex-wrap items-baseline justify-between gap-2 max-w-[65ch]">
          <h2 id="now-title">Now</h2>
          <p className="text-[0.9375rem] text-muted">
            {now.quarter} · Updated {now.updated}
          </p>
        </div>

        <dl className="mt-8 m-0 max-w-[65ch] border-b border-line">
          <Row label="Building">
            <ul className="m-0 pl-5 space-y-2">
              {now.building.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Row>
          <Row label="Learning">
            <ul className="m-0 pl-5 space-y-2">
              {now.learning.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </Row>
        </dl>
      </div>
    </section>
  );
};
