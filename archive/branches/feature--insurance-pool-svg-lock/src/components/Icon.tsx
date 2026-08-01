type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

export function Icon({ name, size = 24, className = '' }: IconProps) {
  return (
    <img
      src={`/assets/svg/${name}.svg`}
      width={size}
      height={size}
      className={`svg-icon ${className}`}
      alt=""
      aria-hidden="true"
    />
  );
}
