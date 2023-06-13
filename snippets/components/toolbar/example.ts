export default `import {Align, Icon, Toolbar, ToolbarAction, ToolbarGroup} from "altrone-ui";

<Toolbar floated={args.floated}>
  <ToolbarGroup>
    <ToolbarAction icon={<Icon i="mark_email_read" />} label="Mark as read" />
  </ToolbarGroup>
  <ToolbarGroup>
    <ToolbarAction icon={<Icon i="star" />} label="Add to favorite" />
    <ToolbarAction icon={<Icon i="reply" />} label="Reply" />
    <ToolbarAction icon={<Icon i="inventory" />} label="Archive" />
  </ToolbarGroup>
  <ToolbarGroup align={Align.end}>
    <ToolbarAction icon={<Icon i="edit_square" />} label="Create an email" />
  </ToolbarGroup>
</Toolbar>
`