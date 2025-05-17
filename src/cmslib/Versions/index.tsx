import { Button, Checkbox, DataTable, Flex, Icon } from "altrone-ui";
import { CMSVersion } from "../store/types";
import { useCMS } from "../store";
import { DataTableColumn } from "altrone-ui/dist/src/components/dataTable/DataTable.types";
import { AddVersion } from "./AddVersion";
import { useMemo } from "react";
import { EditVersion } from "./EditVersion";

export const CMSVersions = () => {
  const versions = useCMS((state) => state.versions);
  const currentVersion = useCMS((state) => state.currentVersion);
  const setCurrentVersion = useCMS((state) => state.setCurrentVersion);
  console.log(currentVersion);

  const columns: DataTableColumn<CMSVersion>[] = useMemo(() => {
    return [
      {
        accessor: "numeric",
        type: "text",
        label: "✓",
        width: 48,
        renderFunc: (ref, { value }) => {
          return value == currentVersion ? <Icon i="check" /> : null;
        },
      },
      {
        accessor: "numeric",
        type: "number",
        label: "Version",
        width: 100,
      },
      {
        accessor: "human",
        type: "text",
        label: "Name",
        width: 150,
      },
      {
        accessor: "fullTitle",
        type: "text",
        label: "Full title",
      },
      {
        accessor: "numeric",
        type: "text",
        label: "Actions",
        renderFunc: (ref, { value, item }) => {
          return (
            <Flex gap="s">
              {value !== currentVersion && (
                <Button
                  label="Set as current"
                  onClick={() => setCurrentVersion(item.numeric)}
                />
              )}
              <EditVersion version={item.numeric} />
            </Flex>
          );
        },
      },
    ];
  }, [currentVersion]);

  return (
    <DataTable<CMSVersion> data={versions} columns={columns} selectable>
      <DataTable.Action
        label="Refresh"
        showLabel={false}
        leftIcon={<Icon i="refresh" />}
      />
      <AddVersion />
    </DataTable>
  );
};
