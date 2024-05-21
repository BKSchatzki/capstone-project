const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={`mx-auto max-w-4xl`}>{children}</div>;
};

export default Wrapper;
