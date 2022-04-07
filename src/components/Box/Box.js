import "./Box.css";

function Box(props) {
  return (
    <div
      className={`matrix-box ${props.isActive}`}
      onClick={props.setActive}
    ></div>
  );
}

export default Box;
