import { Section } from "../../styled";

const Scene = ({Phrases, state}) => 
  Phrases.map((props, index) => {
		return (
			<Section key={index + "-Phrases"} className={index === state && "operative"}>
				{props.text}
			</Section>
		);
	});
 

export default Scene;

