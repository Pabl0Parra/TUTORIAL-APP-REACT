import Phrases from "../../phrases";

const Scene = () => {
  return Phrases.map((item) => <p className="paragraph" key={item}>{item}</p>);
};

export default Scene;
