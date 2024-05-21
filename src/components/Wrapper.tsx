const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center`}>
      {children}
    </div>
  );
};

export default Wrapper;
