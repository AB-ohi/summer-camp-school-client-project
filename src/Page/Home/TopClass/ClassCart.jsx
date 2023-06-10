const ClassCart = ({cls}) => {
    return (
        <div>
            <div>
            <figure className="px-10 pt-10">
              <img
                src={cls.image}
                alt="Shoes"
                className="rounded-xl w-[500px] h-[350px]"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{cls.name}</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              
            </div>
            </div>
        </div>
    );
};

export default ClassCart;