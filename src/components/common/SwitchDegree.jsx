const SwitchDegree = ({ cs, type, value }) => {
  return (
    <span className={`${cs} text-md font-semibold`} id={`degree-${type}`}>
      {value}
    </span>
  );
};

export default SwitchDegree;
