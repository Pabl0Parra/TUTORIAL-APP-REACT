import Phrases from "../../phrases";

const Scene = () => {
  return Phrases.map((item) => <p key={item}>{item}</p>);
};

export default Scene;
