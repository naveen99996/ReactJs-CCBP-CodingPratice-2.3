const Box = (props) => {
  //  Write your code here.
  const { text, className } = props;

  return (
    <div className={`box ${className}`}>
      <p className="box-title">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="boxes-app-container">
    <h1 className="heading">Boxes</h1>
    <div className="boxes-container">
      <Box text="small" className="small-box" />
      <Box text="medium" className="medium-box" />
      <Box text="large" className="large-box" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
