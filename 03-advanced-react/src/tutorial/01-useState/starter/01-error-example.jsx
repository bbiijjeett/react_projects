const ErrorExample = () => {
  let count = 0;

  const handleCount = () => {
    count=count+1;
    console.log(count);
  };

  return (
    <div>
      <h2>useState error example</h2>
      <h3>{count}</h3>
      <button 
        type="button" 
        onClick={handleCount}
        className="btn"
      >Increase</button>
    </div>
  );
};

export default ErrorExample;
