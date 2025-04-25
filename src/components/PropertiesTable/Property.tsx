import { memo, useState } from "react";
import { ComponentType } from "@/types/ComponentProperties";
import clsx from "clsx";
import s from "./styles.module.scss";
import { Icon, useBoolean } from "altrone-ui";
import { Button } from "altrone-ui";
import { CodeBlock } from "../CodeBlock";

export const Property = memo<ComponentType>((property) => {
  const { value: expanded, toggle } = useBoolean(false);

  return (
    <div className={s.PropertyWrapper}>
      <div className={s.Property}>
        <div className={s.PropertyHeader}>
          <div className={s.PropertyName}>{property.name}</div>
          <div className={s.PropertyMeta}>
            {property.example ? (
              <Button
                size="s"
                leftIcon={<Icon i={expanded ? "expand_less" : "expand_more"} />}
                label="Example"
                onClick={toggle}
              />
            ) : null}
            <span className={clsx(s.PropertyMetaItem, s.PropertyType)}>
              {property.type}
            </span>
            {property.required ? (
              <span className={clsx(s.PropertyMetaItem, s.PropertyRequired)}>
                Required
              </span>
            ) : null}
            {property.version > 30 ? (
              <span className={clsx(s.PropertyMetaItem, s.PropertyVersion)}>
                Version:{" "}
                <span
                  className={s.PropertyValue}
                >{`${Math.floor(Number(property.version) / 10)}.${Number(property.version) % 10}`}</span>
              </span>
            ) : null}
            {property.defaultValue && property.defaultValue !== "undefined" ? (
              <span className={clsx(s.PropertyMetaItem, s.PropertyDefault)}>
                Default:{" "}
                <span className={s.PropertyValue}>{property.defaultValue}</span>
              </span>
            ) : null}
          </div>
        </div>
        <div className={s.PropertyDescription}>{property.description}</div>
      </div>
      {expanded ? (
        <div className={s.PropertyExample}>
          <CodeBlock>{property.example}</CodeBlock>
        </div>
      ) : null}
    </div>
  );
});

Property.displayName = "Property";
