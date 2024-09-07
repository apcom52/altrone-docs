import {Button, Flex, useToast} from "altrone-ui";

export const ToastsDemo = () => {
  const { toast, success, warning, danger } = useToast();

  return <Flex gap="s">
    <Button
      label="Show toast message"
      onClick={() => toast('New updates are available.')}
    />
    <Button
      label="Successful toast"
      onClick={() => success('File uploaded successfully!')}
    />
    <Button
      label="Warning toast"
      onClick={() =>
        warning('Unsaved changes will be lost. Do you want to proceed?')
      }
    />
    <Button
      label="Danger toast"
      onClick={() => danger('An error occurred. Please try again')}
    />
  </Flex>
}