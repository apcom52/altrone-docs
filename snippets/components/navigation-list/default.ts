export default `import { NavigationList } from 'altrone-ui';

const MENU = [{
  label: 'Listen now',
  value: 'now',
  icon: <Icon i="play_circle" />
}, NAVIGATION_LIST_SEPARATOR, {
  label: 'Recently added',
  value: 'recent',
  icon: <Icon i="schedule" />
}, {
  label: 'Artists',
  value: 'artists',
  icon: <Icon i="person" />
}, {
  label: 'Albums',
  value: 'albums',
  icon: <Icon i="album" />,
  submenu: [{
    label: 'Favorites',
    value: 'favorites',
    icon: <Icon i="star" />
  }, {
    label: 'Recent albums',
    value: 'recent_albums',
    icon: <Icon i="schedule" />
  },  {
    label: 'My playlists',
    value: 'playlists',
    icon: <Icon i="schedule" />,
    submenu: [{
      label: 'Playlist #1',
      value: 'playlist_1'
    }, {
      label: 'Playlist #2',
      value: 'playlist_2'
    }]
  }]
}, {
  label: 'Songs',
  value: 'songs',
  icon: <Icon i="library_music" />
}]

const [page, setPage] = useState('listenNow');

<NavigationList list={MENU} selected={page} onChange={setPage} title='Music center' />`