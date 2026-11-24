import { isPlaceholder } from '../data/siteConfig';

// Renders a value as plain text, or as a highlighted placeholder in development.
const Val = ({ v }) =>
  isPlaceholder(v) ? (
    <span className={import.meta.env.DEV ? 'placeholder-flag' : undefined}>{v}</span>
  ) : (
    <>{v}</>
  );

export default Val;
