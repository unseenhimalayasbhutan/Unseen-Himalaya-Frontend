import type {
  AnchorHTMLAttributes,
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

type Align = "left" | "center";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: Align;
  maxWidth?: string;
  divider?: boolean;
  className?: string;
};

type BoxProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  children: ReactNode;
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  maxWidth,
  divider = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={`ds-section-heading ${align === "left" ? "align-left" : ""} ${className}`.trim()}
      style={maxWidth ? ({ "--section-heading-max": maxWidth } as CSSProperties) : undefined}
    >
      {eyebrow ? (
        <div className="ds-section-heading-eyebrow">
          {divider ? <span className="ds-divider" aria-hidden="true" /> : null}
          <span>{eyebrow}</span>
          {divider ? <span className="ds-divider" aria-hidden="true" /> : null}
        </div>
      ) : null}

      <h2 className="ds-section-heading-title">{title}</h2>

      {description ? (
        <p className="ds-section-heading-description">{description}</p>
      ) : null}
    </div>
  );
}

export function Container({ as: Component = "div", className = "", children, ...props }: BoxProps) {
  return (
    <Component className={`container ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export function Section({ as: Component = "section", className = "", children, ...props }: BoxProps) {
  return (
    <Component className={`section ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export function Surface({ as: Component = "div", className = "", children, ...props }: BoxProps) {
  return (
    <Component className={`ds-surface ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export function Badge({ as: Component = "span", className = "", children, ...props }: BoxProps) {
  return (
    <Component className={`badge ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`btn btn-${variant} btn-${size} ${className}`.trim()} href={href} {...props}>
      {children}
    </a>
  );
}
