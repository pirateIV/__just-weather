const Card = ({ cs, id, title, height, children }) => {
  return (
    <section
      className={`bg-indigo_50 pt-5 px-5 pb-3.5 rounded-2xl mt-10 h-[${height}px]`}
      id={id}>
      <div className={`${cs} w-full h-full `}>
        <h4 className='text-body_2 text-gray_900/[0.6] font-semibold uppercase '>
          {title}
        </h4>
        {children}
      </div>
    </section>
  );
};

export default Card;
