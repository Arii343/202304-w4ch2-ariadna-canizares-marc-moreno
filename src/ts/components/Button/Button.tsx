interface ButtonProps {
  text: string;
  actionOnClick: () => void;
}

const Button = ({ text, actionOnClick }: ButtonProps): JSX.Element => {
  return (
    <button type="button" className="button" onClick={actionOnClick}>
      {text}
    </button>
  );
};

export default Button;
