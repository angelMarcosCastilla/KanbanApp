import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { forwardRef, useState } from 'react';

function Component(props: any, ref: any) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="md">
      <Input ref={ref} type={show ? 'text' : 'password'} {...props} />
      <InputRightElement width="4.5rem" height="100%">
        <Button size="sm" onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}

export default forwardRef(Component);
