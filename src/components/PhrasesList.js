import Phrases from "../Phrases";
import { Section } from "../styled";

const PhrasesList = Phrases.map((props) => (
  <Section><p> {props.text}</p></Section>
));

export default PhrasesList;
