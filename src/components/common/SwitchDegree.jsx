const SwitchDegree = ({ cs, type, value }) => {
  return (
    <span className={`${cs} font-bold`} id={`degree-${type}`}>
      {value}
    </span>
  );
};

export default SwitchDegree;
