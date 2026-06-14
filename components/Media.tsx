type MediaProps = {
  src?: string;
  alt?: string;
  label?: string;
};

/**
 * Production replacement for the original <image-slot>.
 * Renders an <img> when `src` is provided, otherwise a styled placeholder
 * showing the label. Drop real files into /public/images and pass their path.
 */
export default function Media({ src, alt, label }: MediaProps) {
  if (src) {
    return <img className="media-img" src={src} alt={alt || label || ''} loading="lazy" />;
  }
  return (
    <div className="media-ph">
      <span>{label || 'image'}</span>
    </div>
  );
}
