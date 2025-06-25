"use client";

import { CMSGroups } from "@/cmslib/Groups";
import { CMSPages } from "@/cmslib/Pages";
import { CMSSidebar } from "@/cmslib/Sidebar";
import { CMSCurrentSection, useCMS } from "@/cmslib/store";
import { CMSVersions } from "@/cmslib/Versions";
import { CMSVolumes } from "@/cmslib/Volumes";
import { Grid, useDebouncedEffect, useDidUpdate } from "altrone-ui";
import { memo, useEffect } from "react";

const AutoSave = memo(() => {
  const currentVersion = useCMS((state) => state.currentVersion);
  const versions = useCMS((state) => state.versions);
  const touched = useCMS((state) => state.touched);
  const updateDocument = useCMS((state) => state.updateDocument);
  const groups = useCMS((state) => state.groups);
  const volumes = useCMS((state) => state.volumes);
  const pages = useCMS((state) => state.pages);
  const articles = useCMS((state) => state.articles);

  useDebouncedEffect(
    () => {
      if (touched) {
        updateDocument();
      }
    },
    [
      updateDocument,
      currentVersion,
      versions,
      touched,
      groups,
      volumes,
      pages,
      articles,
    ],
    1000,
  );

  return null;
});

AutoSave.displayName = "AutoSave";

export default function AdminPage() {
  const loading = useCMS((state) => state.loading);
  const fetchDocument = useCMS((state) => state.fetchDocument);
  const currentSection = useCMS((state) => state.currentSection);

  useEffect(() => {
    fetchDocument();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Grid>
      <AutoSave />
      <Grid.Column size={3} style={{ padding: 8 }}>
        <CMSSidebar />
      </Grid.Column>
      <Grid.Column size={9} style={{ padding: 8 }}>
        {currentSection === CMSCurrentSection.VERSIONS && <CMSVersions />}
        {currentSection === CMSCurrentSection.VOLUMES && <CMSVolumes />}
        {currentSection === CMSCurrentSection.GROUPS && <CMSGroups />}
        {currentSection === CMSCurrentSection.PAGES && <CMSPages />}
      </Grid.Column>
    </Grid>
  );
}
