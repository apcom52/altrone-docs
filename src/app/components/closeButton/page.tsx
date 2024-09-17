'use client';

import Documentation from './documentation.mdx';
import { Text } from 'altrone-ui';
import {PageNavigation} from "@/components/PageNavigation";

export default function Page() {
  return <Text gap="xxl">
    <Documentation />
    <PageNavigation page="pagination" />
  </Text>
}