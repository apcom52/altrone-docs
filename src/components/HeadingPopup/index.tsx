import { Flex, Icon, Text } from "altrone-ui";
import s from "./styles.module.scss";
import { ComponentInstance, ContainerGroup } from "@/constants/components";
import Link from "next/link";
import { memo } from "react";
import clsx from "clsx";

interface HeadingPopupProps {
  color?: "pink" | "teal";
  icon?: string;
  popupTitle: string;
  stripLabel: string;
  groups: ContainerGroup[];
  items: ComponentInstance[];
}

export const HeadingPopup = memo(
  ({
    color = "pink",
    icon,
    popupTitle,
    stripLabel,
    groups = [],
    items = [],
  }: HeadingPopupProps) => {
    return (
      <div
        className={clsx(s.ComponentsPopup, {
          [s.TealColor]: color === "teal",
        })}
      >
        <div className={s.SidebarStrip}>
          {icon ? (
            <div className={s.StripIcon}>
              <Icon i={icon} />
            </div>
          ) : null}
          <div className={s.StripLabel}>{stripLabel}</div>
        </div>
        <Flex direction="vertical" gap="xl" className={s.Content}>
          <Text.Heading variant="inner" style={{ margin: 0 }}>
            {popupTitle}
          </Text.Heading>
          <Flex gap="xl" direction="vertical">
            {groups.map((group) => (
              <Flex key={group.name} gap="l" direction="vertical">
                <div className="group-heading-text">{group.title}</div>
                <Flex wrap gap="l">
                  {items
                    .filter((component) => component.group === group.name)
                    .map((component) => (
                      <Link
                        key={component.name}
                        className={s.ComponentLink}
                        href={`/components/${component.name}`}
                      >
                        {component.title}
                      </Link>
                    ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </div>
    );
  },
);
HeadingPopup.displayName = "HeadingPopup";
