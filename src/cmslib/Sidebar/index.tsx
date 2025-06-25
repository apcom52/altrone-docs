import { NavigationList, Icon } from "altrone-ui";
import { CMSCurrentSection, useCMS } from "../store";

export const CMSSidebar = () => {
  const currentSection = useCMS((state) => state.currentSection);
  const versions = useCMS((state) => state.versions);
  const volumes = useCMS((state) => state.volumes);
  const setCurrentSection = useCMS((state) => state.setCurrentSection);

  return (
    <NavigationList>
      <NavigationList.Group title="Entities">
        <NavigationList.Link
          icon={<Icon i="alt_route" />}
          selected={currentSection === CMSCurrentSection.VERSIONS}
          label="Versions"
          badge={versions?.length}
          onClick={() => setCurrentSection(CMSCurrentSection.VERSIONS)}
        />
        <NavigationList.Link
          icon={<Icon i="auto_stories" />}
          selected={currentSection === CMSCurrentSection.VOLUMES}
          badge={volumes?.length}
          label="Volumes"
          onClick={() => setCurrentSection(CMSCurrentSection.VOLUMES)}
        />
        <NavigationList.Link
          icon={<Icon i="apps" />}
          selected={currentSection === CMSCurrentSection.GROUPS}
          label="Groups"
          onClick={() => setCurrentSection(CMSCurrentSection.GROUPS)}
        />
        <NavigationList.Link
          icon={<Icon i="pages" />}
          selected={currentSection === CMSCurrentSection.PAGES}
          label="Pages"
          onClick={() => setCurrentSection(CMSCurrentSection.PAGES)}
        />
        <NavigationList.Link icon={<Icon i="article" />} label="Articles" />
      </NavigationList.Group>
    </NavigationList>
  );
};
