import { isPlaceholder } from './siteConfig';

// Hiring-signal sections: AI workflow, collaboration evidence, and Now.
// "How I use AI" and "Now" stay hidden until every field is filled with real text.
// Do not add example text here.

const isFilled = (v) => typeof v === 'string' && v.trim().length > 0 && !isPlaceholder(v);
const listFilled = (arr) => Array.isArray(arr) && arr.length > 0 && arr.every(isFilled);

export const aiWorkflow = {
  summary: '',
  delegate: [],
  reviewMyself: [],
};

export const hasAiWorkflowContent =
  isFilled(aiWorkflow.summary) &&
  listFilled(aiWorkflow.delegate) &&
  listFilled(aiWorkflow.reviewMyself);

export const collaboration = [
  {
    type: 'Pull request',
    title: '[PLACEHOLDER: PR title or feature shipped with a team]',
    note: '[PLACEHOLDER: 1 sentence on what changed and what feedback you addressed]',
    href: '[PLACEHOLDER: GitHub PR URL]',
  },
  {
    type: 'Code review',
    title: '[PLACEHOLDER: example of a review or refactor note]',
    note: '[PLACEHOLDER: 1 sentence on the bug caught or maintainability improvement]',
    href: '[PLACEHOLDER: link to PR or write-up, or remove]',
  },
  {
    type: 'Documentation / OSS',
    title: '[PLACEHOLDER: README, architecture doc, or open-source contribution]',
    note: '[PLACEHOLDER: 1 sentence on who it helped]',
    href: '[PLACEHOLDER: public repo or doc URL]',
  },
];

export const now = {
  quarter: 'Q4 2026',
  updated: 'November 2026',
  building: [
    'Scalable web apps, APIs, and AI-assisted tools',
  ],
  learning: [
    'AI agents',
    'Kubernetes',
  ],
};

export const hasNowContent =
  isFilled(now.quarter) &&
  isFilled(now.updated) &&
  listFilled(now.building) &&
  listFilled(now.learning);
