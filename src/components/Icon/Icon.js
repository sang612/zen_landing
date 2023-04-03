export const Icon = ({ className, children, ...props }) => (
  <div className={`absolute ${className}`} {...props}>
    {children}
  </div>
);
