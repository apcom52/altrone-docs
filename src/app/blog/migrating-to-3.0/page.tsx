"use client";
import Article from './article.mdx';
import { Text } from 'altrone-ui';

export default function Page() {
  return <Text gap="xxl">
    <Text.ScreenName>Migrating to 3.0</Text.ScreenName>
    <title>Migrating to 3.0 - Altrone UI</title>
    <Article />
  </Text>
}