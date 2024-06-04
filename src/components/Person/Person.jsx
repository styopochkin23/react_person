// import { misha } from "../../App"
// import { olya } from "../../App"
// import { alex } from "../../App"

export const Person = ({ person }) => {
  return (
    <section className="Person">
      <h2 className="Person__name">{`My name is ${person.name}`}</h2>
      {person.age && <p className="Person__age">{`I am ${person.age}`}</p>}
      {person.partnerName ? (
        <p>{`${person.partnerName} is my ${person.sex === 'f' ? 'husband' : 'wife'}`}</p>
      ) : (
        <p>I am not married</p>
      )}
    </section>
  );
};
