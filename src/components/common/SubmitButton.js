import { Button } from "@chakra-ui/react";

const SubmitButton = ({
  text,
  colorScheme = "blue",
  className = "",
  onClick,
}) => {
  return (
    <Button colorScheme={colorScheme} className={className} onClick={onClick}>
      {text}
    </Button>
  );
};

export default SubmitButton;
