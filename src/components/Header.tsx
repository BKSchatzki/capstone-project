import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={`h-16 bg-secondary`}>
      <nav
        role={`navigation`}
        className={`m-auto flex h-full max-w-4xl items-center justify-between gap-4 px-2`}
      >
        <Link
          to={`/`}
          aria-label={`Go to homepage`}
          aria-current={`page`}
        >
          <img
            src={`/images/logo.svg`}
            alt={'Little Lemon Logo'}
            aria-hidden={`true`}
            tabIndex={-1}
          />
        </Link>
        <Link
          to={`/reserve`}
          aria-label={`Reserve a table`}
          className={`btn btn-primary w-28 rounded-full text-lg font-bold`}
        >
          Reserve
        </Link>
      </nav>
    </header>
  );
};

export default Header;
