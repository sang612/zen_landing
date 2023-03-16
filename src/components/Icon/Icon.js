export const Icon = ({
  src,
  top,
  left,
  alt,
  width,
  height,
  className,
  children,
  ...props
}) => (
  <div className={`absolute ${className}`} {...props}>
    {children}
  </div>
);
