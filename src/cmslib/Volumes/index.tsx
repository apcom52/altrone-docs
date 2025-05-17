import { DataTable, Icon } from "altrone-ui";
import { CMSVolume } from "../store/types";
import { useCMS } from "../store";
import { DataTableColumn } from "altrone-ui/dist/src/components/dataTable/DataTable.types";
import { AddVolume } from "./AddVolume";
import { useMemo } from "react";

export const CMSVolumes = () => {
  const volumes = useCMS((state) => state.volumes);
  const setVolumes = useCMS((state) => state.setVolumes);

  const columns: DataTableColumn<CMSVolume>[] = useMemo(() => {
    return [
      {
        accessor: "title",
        type: "text",
        label: "Title",
      },
      {
        accessor: "slug",
        type: "text",
        label: "Slug",
      },
    ];
  }, []);

  return (
    <DataTable<CMSVolume> data={volumes} columns={columns} selectable>
      <DataTable.Action
        label="Refresh"
        showLabel={false}
        leftIcon={<Icon i="refresh" />}
      />
      <AddVolume />
    </DataTable>
  );
};
