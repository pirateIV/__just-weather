const Card = ({ cs, title, children }) => {
  return (
    <div className={`${cs} w-full h-full bg-indigo_50 pt-5 px-5 pb-3.5 rounded-2xl`}>
      <h4 className='text-body_2 text-gray_900/[0.6] font-semibold uppercase '>
        {title}
      </h4>
      {children}
    </div>
  );
};

export default Card;
