import Button from "./Button";

const Card = ({
  name,
  description,
  duration,
  tag,
  img1,
  img2,
  img3,
  img4,
  img5,
  subheading,
}) => {
  return (
    <div
      style={{
        width: "300px",
      }}
    >
      <div>{img1}</div>
      <section className="flex justify-between p-1.5">
        <h1 className="text-lg font-bold">{name}</h1>
        <p className="bg-[#D2EAF7] rounded-lg px-[5px]">{duration}</p>
      </section>

      <section className="text-[#383D42]">
        <h2 className="font-bold">{subheading}</h2>
        <p>{description}</p>
      </section>

      <section className="flex gap-[10px] my-2">
        <span>{img2}</span>
        <span>{img3}</span>
        <span>{img4}</span>
        <span>{img5}</span>
      </section>

      <section className="flex items-center justify-between py-2 px-4">
        <h1 className="font-bold">{tag}</h1>
        <Button label="Activate" />
      </section>
    </div>
  );
};

export default Card;
