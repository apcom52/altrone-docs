import {Icon, Search, Toolbar} from "altrone-ui";
import {useState} from "react";

export const ToolbarDemo = () => {
  const [search, setSearch] = useState('');

  return <Toolbar>
    <Toolbar.Group style={{ flex: 0 }}>
      <Toolbar.Action icon={<Icon i="arrow_back" />} label="Back" />
      <Toolbar.Action icon={<Icon i="arrow_forward" />} label="Forward" />
    </Toolbar.Group>
    <Toolbar.Group style={{ flex: 0 }}>
      <Toolbar.Action icon={<Icon i="refresh" />} label="Refresh" />
    </Toolbar.Group>
    <Toolbar.Group>
      <Toolbar.Action label="Address bar" showLabel={false} style={{ width: '100%' }}>
        <Search getSuggestions={() => []} value={search} onChange={setSearch} />
      </Toolbar.Action>
    </Toolbar.Group>
    <Toolbar.Group style={{ flex: 0 }}>
      <Toolbar.Action icon={<Icon i="ios_share" />} label="Share" />
    </Toolbar.Group>
  </Toolbar>
}