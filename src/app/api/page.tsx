"use client";
import 'altrone-ui/dist/style.css';
import { Text } from 'altrone-ui';
import {ComponentsList} from "@/components/ComponentsList";
import {API_GROUPS, APIS} from "@/constants/api";

export default function Home() {
  return (<Text gap="xxl">
    {API_GROUPS.map((apiGroup) => (
      <Text.Section key={apiGroup.name}>
        <Text.Heading role="heading">{apiGroup.title}</Text.Heading>
        <ComponentsList section="api" group={apiGroup.name} items={APIS} />
      </Text.Section>
    ))}
  </Text>);
}
