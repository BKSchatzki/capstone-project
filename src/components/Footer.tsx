const Footer = () => {
  return (
    <footer className={`h-16 bg-secondary`}>
      <div
        aria-label={`Footer`}
        role={`contentinfo`}
        className={`m-auto flex h-full max-w-4xl items-end justify-between gap-4 px-2 pb-2 text-sm`}
      >
        <span>&copy; 2024 Little Lemon</span>
        <div className={`flex flex-col text-right`}>
          <span>(312) 314-1592</span>
          <span>contact@littlelemon.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
