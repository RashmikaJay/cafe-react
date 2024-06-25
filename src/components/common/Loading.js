import { Spinner } from "@chakra-ui/react";
import "./Loading.css";

const Loading = () => {
  return (
    <div className='loading-center'>
      <Spinner size='md' />
    </div>
  );
};

export default Loading;
