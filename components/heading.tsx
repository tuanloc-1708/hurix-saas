type HeadingProps = {
  title: string;
};

const Heading = ({ title }: HeadingProps) => {
  return <h1 className="text-2xl font-bold text-center">{title}</h1>;
};

export default Heading;
