export default function SceneBackdrop({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden [container-type:size] ${className}`}
    >
      {children}
    </div>
  );
}
