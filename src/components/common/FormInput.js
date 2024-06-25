import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FormInput = ({ type = "text", label, onChange, value }) => {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Input type={type} value={value} onChange={onChange} width='100%' />
    </FormControl>
  );
};

export default FormInput;
