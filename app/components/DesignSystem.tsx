import type {
  AnchorHTMLAttributes,
  CSSProperties,
  ElementType,
  HTMLAttributes,
  ReactNode,
} from "react";

type Align = "left" | "center";
type EyebrowVariant = "editorial" | "utility";

type EyebrowProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType;
  variant?: EyebrowVariant;
  children: ReactNode;
};

type PageHeroProps = HTMLAttributes<HTMLElement> & {
  eyebrow?: ReactNode;
  eyebrowVariant?: EyebrowVariant;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  media?: ReactNode;
  trust?: ReactNode;
  align?: Align;
  contentClassName?: string;
  mediaClassName?: string;
};

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  eyebrowVariant?: EyebrowVariant;
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

type ImageCreditProps = HTMLAttributes<HTMLElement> & {
  href?: string;
  overlay?: boolean;
  children: ReactNode;
};

export function Eyebrow({
  as: Component = "span",
  variant = "editorial",
  className = "",
  children,
  ...props
}: EyebrowProps) {
  return (
    <Component
      className={`ds-eyebrow ds-eyebrow-${variant} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

export function PageHero({
  eyebrow,
  eyebrowVariant = "utility",
  title,
  description,
  actions,
  media,
  trust,
  align = "left",
  className = "",
  contentClassName = "",
  mediaClassName = "",
  children,
  ...props
}: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${align} ${className}`.trim()} {...props}>
      <Container className="page-hero-grid">
        <div className={`page-hero-content ${contentClassName}`.trim()}>
          {eyebrow ? <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow> : null}
          <h1 className="page-hero-title">{title}</h1>
          {description ? <p className="page-hero-description">{description}</p> : null}
          {actions ? <div className="page-hero-actions">{actions}</div> : null}
          {trust ? <div className="page-hero-trust">{trust}</div> : null}
          {children}
        </div>
        {media ? <div className={`page-hero-media ${mediaClassName}`.trim()}>{media}</div> : null}
      </Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  eyebrowVariant = "editorial",
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
          <Eyebrow variant={eyebrowVariant}>{eyebrow}</Eyebrow>
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

export function ImageCredit({
  href,
  overlay = true,
  className = "",
  children,
  ...props
}: ImageCreditProps) {
  return (
    <figcaption
      className={`image-credit ${overlay ? "image-credit-overlay" : "image-credit-below"} ${className}`.trim()}
      {...props}
    >
      {href ? (
        <a href={href} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        children
      )}
    </figcaption>
  );
}
