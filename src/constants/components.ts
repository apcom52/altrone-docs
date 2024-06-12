export interface ComponentInstance {
  name: string;
  title: string;
  group: string;
  prev?: string;
  next?: string;
}

export interface ContainerGroup {
  name: string;
  title: string;
}

export const COMPONENT_GROUPS: ContainerGroup[] = [
  {
    name: 'general',
    title: 'General'
  },
  {
    name: 'typography',
    title: 'Typography'
  },
  {
    name: 'containers',
    title: 'Containers'
  },
  {
    name: 'forms',
    title: 'Form controls'
  },
  {
    name: 'display',
    title: 'Display'
  },
  {
    name: 'navigation',
    title: 'Navigation'
  },
  {
    name: 'atoms',
    title: 'Atoms'
  }
]

export const COMPONENTS: ComponentInstance[] = [
  {
    name: 'application',
    title: 'Altrone Application',
    group: 'general',
  },
  {
    name: 'configuration',
    title: 'Configuration',
    group: 'general'
  },
  {
    name: 'text',
    title: 'Text',
    group: 'typography'
  },
  {
    name: 'icon',
    title: 'Icon',
    group: 'typography'
  },
  {
    name: 'flex',
    title: 'Flex',
    group: 'containers'
  }
]