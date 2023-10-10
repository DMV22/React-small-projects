import ConceptItem from "./ConceptItem";

const Concepts = (props) => {
  return (
    <>
      <ConceptItem
        image={props.items[0].image}
        title={props.items[0].title}
        description={props.items[0].description}
      ></ConceptItem>
      <ConceptItem
        image={props.items[1].image}
        title={props.items[1].title}
        description={props.items[1].description}
      ></ConceptItem>
      <ConceptItem
        image={props.items[2].image}
        title={props.items[2].title}
        description={props.items[2].description}
      ></ConceptItem>
    </>
  );
};

export default Concepts;
