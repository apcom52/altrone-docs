export default `import { Button, Heading, Paragraph, FloatingBox, FloatingBoxMobileBehaviour } from 'altrone-ui';

const [isVisible, setIsVisible] = useState(false);

<Button ref={buttonRef} onClick={() => setIsVisible(!isVisible)}>Click to open Floating Box</Button>
{isVisible && <FloatingBox
  targetElement={buttonRef.current}
  onClose={() => setIsVisible(false)}
  mobileBehaviour={FloatingBoxMobileBehaviour.modal}
  useRootContainer
  useParentWidth
>
  <Heading level={6}>This is Floating Box.</Heading>
  <Paragraph>Click somewhere outside to close the popup.</Paragraph>
</FloatingBox>}`