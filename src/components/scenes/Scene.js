import PhrasesList from "../PhrasesList";
import Button from "../Button";

const Scene = () => {
  return (
    <div>
      <div>
        <Button type="button">PREVIOUS</Button>
        <Button type="button">NEXT</Button>
      </div>
      <section>{PhrasesList}</section>
    </div>
  );
};

export default Scene;
