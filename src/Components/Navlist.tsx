interface Props {
  text: string;
}

const Navlist = ({ text }: Props) => {
  return <li>{text}</li>;
};

export default Navlist;
