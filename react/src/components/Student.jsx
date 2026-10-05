const Student = (props) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "lightblue",
          border: "2px solid black",
          width: "300px",
          height: "300px",
          margin: "20px",
          padding: "20px",
        }}
      >
        <h2>{props.name}</h2>

        <img src={props.img} alt="student" width="100px" height="100px" />

        <h3>Roll No: {props.roll}</h3>
        <h3>Class: {props.class}</h3>
      </div>
    </div>
  );
};

export default Student;
