const InstructorCart = ({instructor}) => {
  return (
    <div>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      <figure>
        <img
        className=""
          src={instructor.image}
          alt="Shoes"
        />
      </figure>
    </div>
  );
};

export default InstructorCart;
