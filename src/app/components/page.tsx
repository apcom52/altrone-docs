"use client";
import 'altrone-ui/dist/style.css';
import { Text, Flex } from 'altrone-ui';
import {COMPONENT_GROUPS, COMPONENTS} from "@/constants/components";
import {ComponentsList} from "@/components/ComponentsList";

export default function Home() {
  return (<Text gap="xxl">
    {COMPONENT_GROUPS.map((componentGroup) => (
      <Text.Section key={componentGroup.name}>
        <Text.Heading role="heading">{componentGroup.title}</Text.Heading>
        <ComponentsList group={componentGroup.name} items={COMPONENTS} />
      </Text.Section>
    ))}
  </Text>);
}
