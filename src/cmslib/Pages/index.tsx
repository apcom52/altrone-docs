import { Flex, Form, TextInput, Select, Tabs } from "altrone-ui";
import { useCMS } from "../store";
import { AddPage } from "./AddPage";
import { useMemo, useState } from "react";
import { CMSPageEditor } from "../Editor";
import { Descendant } from "slate";

export const CMSPages = () => {
  const [activeTab, setActiveTab] = useState("content");

  const allPages = useCMS((state) => state.pages);
  const allVolumes = useCMS((state) => state.volumes);
  const allGroups = useCMS((state) => state.groups);
  const allVersions = useCMS((state) => state.versions);
  const setPages = useCMS((state) => state.setPages);

  const [currentPageId, setCurrentPageId] = useState(
    () => allPages[0]?.id || null,
  );

  const currentPage = allPages.find((p) => p.id === currentPageId);

  const handleContentChange = (field: string, value: any) => {
    setPages(
      allPages.map((page) => {
        if (page.id === currentPageId) {
          return { ...page, [field]: value };
        }

        return page;
      }),
    );
  };

  const pageOptions = useMemo(() => {
    return allPages.map((page) => {
      const path = [];

      const volume = allVolumes.find((v) => v.id === page.volumeId);
      const group = allGroups.find((g) => g.id === page.groupId);

      if (volume) {
        path.push(volume.title);
      }

      if (group) {
        path.push(group.title);
      }

      path.push(page.title);

      return {
        label: path.join("/"),
        value: page.id,
      };
    });
  }, [allPages]);

  const versionOptions = useMemo(() => {
    return allVersions.map((version) => ({
      label: version.fullTitle,
      value: version.numeric,
    }));
  }, [allVersions]);

  return (
    <Flex direction="column" gap="m">
      <Form>
        <Flex gap="m">
          <Select
            options={pageOptions}
            value={currentPageId}
            onChange={setCurrentPageId}
          />
          <AddPage />
        </Flex>
        {currentPageId ? (
          <Flex gap="m">
            <Form.Field label="Title">
              <TextInput
                value={currentPage?.title}
                onChange={(value) => handleContentChange("title", value)}
              />
            </Form.Field>
            <Form.Field label="Slug">
              <TextInput
                value={currentPage?.slug}
                onChange={(value) => handleContentChange("slug", value)}
              />
            </Form.Field>
            <Form.Field label="Version">
              <Select
                options={versionOptions}
                value={currentPage?.version}
                onChange={(value) => handleContentChange("version", value)}
              />
            </Form.Field>
          </Flex>
        ) : null}
        <Tabs>
          <Tabs.Item
            label="Page content"
            onClick={() => setActiveTab("content")}
            selected={activeTab === "content"}
          />
          <Tabs.Item
            label="Configuration"
            onClick={() => setActiveTab("configuration")}
            selected={activeTab === "configuration"}
          />
          <Tabs.Item
            label="CSS variables"
            onClick={() => setActiveTab("css-variables")}
            selected={activeTab === "css-variables"}
          />
          <Tabs.Item
            label="History"
            onClick={() => setActiveTab("history")}
            selected={activeTab === "history"}
          />
        </Tabs>
        {currentPageId && activeTab === "content" ? (
          <Form.Field>
            <CMSPageEditor
              initialValue={(currentPage?.content as Descendant[]) || []}
              onChange={(value) => handleContentChange("content", value)}
            />
          </Form.Field>
        ) : null}
      </Form>
    </Flex>
  );
};
