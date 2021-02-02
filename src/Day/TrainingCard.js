const TrainingCard = (props) => {
  const {name, desc, reps } = props;

  return (
    <div>
      {`${name}${desc}${reps}`}
    </div>
  );
}

export default TrainingCard;