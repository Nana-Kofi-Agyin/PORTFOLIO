import { isPlaceholder } from '../data/siteConfig';

// Renders a value as plain text, or as a clearly marked placeholder.
const Val = ({ v }) =>
  isPlaceholder(v) ? <span className="placeholder-flag">{v}</span> : <>{v}</>;

export default Val;
