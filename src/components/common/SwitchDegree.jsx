const SwitchDegree = ({ cs, type, value }) => {
  return (
    <span className={`${cs} font-normal`} id={`degree-${type}`}>
      {value}
    </span>
  );
};

export default SwitchDegree;
