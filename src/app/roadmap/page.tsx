"use client";
import "altrone-ui/dist/style.css";
import { Text } from "altrone-ui";
export default function Home() {
  return (
    <Text>
      <Text.Heading>Roadmap</Text.Heading>
      <Text.Section>
        <Text.Heading variant="subheading">In the near future</Text.Heading>
        <Text.List>
          <Text.ListItem>Typography component design updates</Text.ListItem>
          <Text.ListItem>Message component design updates</Text.ListItem>
          <Text.ListItem>New Avatar component</Text.ListItem>
          <Text.ListItem>New Badge component</Text.ListItem>
          <Text.ListItem>New ButtonGroup component</Text.ListItem>
          <Text.ListItem>New ColorPicker component</Text.ListItem>
          <Text.ListItem>New Range component</Text.ListItem>
          <Text.ListItem>Fixes and other updates</Text.ListItem>
        </Text.List>
      </Text.Section>
      <Text.Section>
        <Text.Heading variant="subheading">
          In far future (End of 2025)
        </Text.Heading>
        <Text.List>
          <Text.ListItem>React 19 support</Text.ListItem>
          <Text.ListItem>Some design enchantments</Text.ListItem>
          <Text.ListItem>New theme system</Text.ListItem>
          <Text.ListItem>Skeleton loading</Text.ListItem>
          <Text.ListItem>Fixes and other updates</Text.ListItem>
          <Text.ListItem>and more...</Text.ListItem>
        </Text.List>
      </Text.Section>
    </Text>
  );
}
