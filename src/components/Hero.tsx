import { Link } from 'react-router-dom';

import Wrapper from './Wrapper';

const Hero = () => {
  return (
    <div className={`bg-primary`}>
      <Wrapper>
        <main
          className={`flex flex-col items-center justify-center py-8 md:flex-row md:items-start`}
        >
          <section
            className={`mx-auto flex max-w-96 basis-2/3 flex-col items-start justify-around gap-4 self-stretch px-4 pb-8 md:max-w-full md:pb-0`}
          >
            <hgroup>
              <h1 className={`font-serif text-4xl font-bold text-accent`}>Little Lemon</h1>
              <h2 className={`font-serif text-3xl text-base-200`}>Chicago</h2>
            </hgroup>
            <p className={`text-lg text-base-200`}>
              We are a family-owned Mediterranean restaurant, focused on traditional recipes served
              with a modern twist. Located in the heart of downtown Chicago, we offer a wide variety
              of acclaimed dishes and an exceptional commitment to service.
            </p>
            <div className={`flex flex-col gap-4 md:flex-row`}>
              <Link
                to={`/reserve`}
                aria-label={`Reserve a table`}
                className={`btn btn-accent w-56 rounded-full text-xl font-bold text-neutral`}
              >
                Reserve a table
              </Link>
            </div>
          </section>
          <img
            src={`/images/hero-img.jpg`}
            alt={`Brushetta on a black tray being served at Little Lemon`}
            className={`max-h-96 w-96 rounded-[2rem] object-cover px-4`}
          />
        </main>
      </Wrapper>
    </div>
  );
};

export default Hero;
