import Phrases from "../Phrases";

const PhrasesList = Phrases.map((props) => (
  <p className="paragraph"> {props.text}</p>
));

export default PhrasesList;
