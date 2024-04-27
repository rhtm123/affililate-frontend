const Input = ({ value, onChange }) => {
    const inputRef = useRef();
  
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === "k" && event.key === "Next") {
        inputRef.current.focus();
      }
    };
  
    return (
      <input
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
    );
  };