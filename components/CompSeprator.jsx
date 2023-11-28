const CompSeprator = ({ title, description }) => {
  return (
    <div
      className="flex flex-col justify-center items-center gap-3 pt-5"
      suppressHydrationWarning
    >
      <h1 className="font-bold text-3xl"> {title} </h1>
      <p className="text-lg"> {description} </p>
    </div>
  );
};

export default CompSeprator;
