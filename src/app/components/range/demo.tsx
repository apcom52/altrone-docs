import { Flex, Icon, Range } from "altrone-ui";
import { useState } from "react";

export function RangeDemo() {
  const [value1, setValue1] = useState<number>(24);
  const [value2, setValue2] = useState<number>(50);

  return (
    <Flex gap="m">
      <Range value={value1} onChange={setValue1} min={0} max={100} />
      <Range
        value={value2}
        onChange={setValue2}
        min={0}
        max={100}
        showCurrentValue="always"
        icon={<Icon i="volume_up" />}
      />
    </Flex>
  );
}
