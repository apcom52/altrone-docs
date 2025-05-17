import { DataTable, Flex, Form, Icon, Message, Select } from "altrone-ui";
import { CMSVolume } from "../store/types";
import { useCMS } from "../store";
import { DataTableColumn } from "altrone-ui/dist/src/components/dataTable/DataTable.types";
import { AddGroup } from "./AddGroup";
import { useMemo, useState } from "react";

export const CMSGroups = () => {
  const volumes = useCMS((state) => state.volumes);
  const allGroups = useCMS((state) => state.groups);

  const [currentVolumeId, setCurrentVolumeId] = useState(
    () => volumes[0]?.id || null,
  );

  const volumeOptions = useMemo(() => {
    return volumes.map((volume) => ({
      label: volume.title,
      value: volume.id,
    }));
  }, [volumes]);

  const groups = useMemo(() => {
    return allGroups?.filter((group) => group.volumeId === currentVolumeId);
  }, [allGroups, currentVolumeId]);

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

  if (!currentVolumeId) {
    return (
      <Message severity="primary" compact header="Attention!">
        You need to add a volume first.
      </Message>
    );
  }

  return (
    <Flex direction="column" gap="m">
      <Form>
        <Form.Field label="Volume">
          <Select
            options={volumeOptions}
            value={currentVolumeId}
            onChange={setCurrentVolumeId}
          />
        </Form.Field>
      </Form>
      <DataTable<CMSVolume> data={groups} columns={columns} selectable>
        <DataTable.Action
          label="Refresh"
          showLabel={false}
          leftIcon={<Icon i="refresh" />}
        />
        <AddGroup volumeId={currentVolumeId} />
      </DataTable>
    </Flex>
  );
};
