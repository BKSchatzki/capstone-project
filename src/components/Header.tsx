import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={`bg-secondary h-16`}>
      <nav className={`m-auto flex h-full max-w-4xl items-center justify-between gap-4 px-2`}>
        <Link to={`/`}>
          <img
            src={`/images/logo.svg`}
            alt={'Little Lemon Logo'}
          />
        </Link>
        <Link
          to={`/reserve`}
          className={`btn btn-primary w-28 rounded-full text-lg font-bold`}
        >
          Reserve
        </Link>
      </nav>
    </header>
  );
};

export default Header;
