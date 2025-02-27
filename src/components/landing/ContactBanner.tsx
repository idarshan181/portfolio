type ContactBannerProps = React.ComponentProps<'div'>;
export default function ContactBanner({ className = '', style, ...props }: ContactBannerProps) {
  // bg-gradient-to-br
  return (
    <div className={`relative mx-10 rounded-lg bg-gradient-to-br from-[#007f4e] to-[#00b86b] p-10 md:mx-20 ${className}`} style={style} {...props}>

      {/* Wave SVG */}
      <svg
        className="pointer-events-none absolute inset-0 size-full rounded-lg opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          fill="rgba(255, 255, 255, 0.3)"
          d="M0,256L48,240C96,224,192,192,288,192C384,192,480,224,576,245.3C672,267,768,277,864,266.7C960,256,1056,224,1152,186.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
        </path>
        <path
          fill="rgba(255, 255, 255, 0.2)"
          d="M0,160L48,144C96,128,192,96,288,96C384,96,480,128,576,160C672,192,768,224,864,240C960,256,1056,256,1152,240C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        >
        </path>
      </svg>

    </div>

  );
}
