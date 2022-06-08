import Phrases from "../../phrases";

const Scene = () => {
  return Phrases.map((props) => <p className="paragraph"> {props.text}</p>);
};

export default Scene;
