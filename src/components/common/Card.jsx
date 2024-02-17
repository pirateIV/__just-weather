const Card = ({ cs, id, title, ht, children }) => {
  return (
    <section
      className={`${ht} bg-indigo_50 w-full pt-5 px-5 pb-3.5 rounded-2xl mt-5 `}
      id={id}>
      <div className={`${cs} flex flex-col justify-between w-full h-full `}>
        <h4 className='text-body_2 ms-2 text-gray_900/[0.6] font-semibold uppercase '>
          {title}
        </h4>
        {children}
      </div>
    </section>
  );
};

export default Card;
