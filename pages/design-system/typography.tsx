  import {ButtonVariant, DataTable, Heading, Icon, Paragraph, Button, Role} from "altrone-ui";
  import React, {useEffect, useState} from "react";
  import s from '../../styles/Home.module.css';
  import {Article} from "../../components/Article/Article";
  import {ArticleList} from "../../components/Article/ArticleList";
  import Link from "next/link";

  const TYPOGRAPHY_TOKENS = [{
    name: 'displayLarge',
    label: 'Display Large',
    fontSize: 57,
    lineHeight: 64,
    fontWeight: 700
  }, {
    name: 'display',
    label: 'Display Medium',
    fontSize: 45,
    lineHeight: 52,
    fontWeight: 700
  }, {
    name: 'displaySmall',
    label: 'Display Small',
    fontSize: 36,
    lineHeight: 44,
    fontWeight: 700
  }, {
    name: 'headlineLarge',
    label: 'Headline Large',
    fontSize: 32,
    lineHeight: 40,
    fontWeight: 700
  }, {
    name: 'headline',
    label: 'Headline Medium',
    fontSize: 28,
    lineHeight: 36,
    fontWeight: 700
  }, {
    name: 'headlineSmall',
    label: 'Headline Small',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 700
  }, {
    name: 'titleLarge',
    label: 'Title Large',
    fontSize: 22,
    lineHeight: 28,
    fontWeight: 600
  }, {
    name: 'title',
    label: 'Title Medium',
    fontSize: 18,
    lineHeight: 24,
    fontWeight: 700
  }, {
    name: 'titleSmall',
    label: 'Title Small',
    fontSize: 16,
    lineHeight: 20,
    fontWeight: 700
  }, {
    name: 'bodyLarge',
    label: 'Body Large',
    fontSize: 18,
    lineHeight: 26,
    fontWeight: 400
  }, {
    name: 'body',
    label: 'Body Medium',
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 400
  }, {
    name: 'bodySmall',
    label: 'Body Small',
    fontSize: 14,
    lineHeight: 18,
    fontWeight: 400
  }, {
    name: 'labelLarge',
    label: 'Label Large',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 500
  }, {
    name: 'label',
    label: 'Label Medium',
    fontSize: 12,
    lineHeight: 16,
    fontWeight: 500
  }, {
    name: 'labelSmall',
    label: 'Label Small',
    fontSize: 11,
    lineHeight: 16,
    fontWeight: 500
  }]

  export default function Home() {
    const [tableIsVisible, setTableIsVisible] = useState(false)

    useEffect(() => {
      setTableIsVisible(true)
    }, [])

    return (<>
      <div className={s.backButton}>
        <Button href='/design-system' variant={ButtonVariant.text} leftIcon={<Icon i='arrow_back_ios' />} role={Role.primary}>Design System</Button>
        <Button variant={ButtonVariant.text} rightIcon={<Icon i='share' />} role={Role.primary}>Share</Button>
      </div>
      <Heading>
        Typography
      </Heading>
      <Paragraph>
        Like <Link href='/design-system/colors'>colors</Link> Altrone uses CSS variables for typography. Every Typography
        Token has font-size, line-height and font-weight value. If you want to change any value in the Typography Token,
        you should change necessary CSS variable and then the changes will be used in all child components.
      </Paragraph>
      <Paragraph>
        Altrone uses OpenSans font-family. If you want to apply another font, you should override <code>font-family</code>
        attribute for <code>.altrone</code> selector. Supported font-weights: 300, 400, 500, 600, 700 and 800.
      </Paragraph>
      <Paragraph>
        In the following table you can see what default values has every Typography Token. Each Typography Token has three
        CSS variables (e.g. <code>--displaySmallFontSize</code>, <code>--displaySmallLineHeight</code> and
        <code>--displaySmallFontWeight</code>). The name of each token indicates its role on the page and we highly
        recommend you to follow this rule. Use headline or title for titles, body for normal text and label for small
        labels.
      </Paragraph>

      <Heading level={2}>Typography Tokens</Heading>
      <br />
      {tableIsVisible && <DataTable
        data={TYPOGRAPHY_TOKENS}
        columns={[{
          accessor: 'label',
          label: 'Typography Token Name',
          Component: ({ value, item }) => {
            return <>
              <div style={{
                fontSize: `var(--${item.name}FontSize)`,
                lineHeight: `var(--${item.name}LineHeight)`,
                fontWeight: `var(--${item.name}FontWeight)`,
              }}>{value}</div>
              <code>--{item.name}</code>
            </>
          }
        }, {
          accessor: 'fontSize',
          label: 'Font Size',
          Component: ({ value }) => {
            return <span>{value}px</span>
          }
        }, {
          accessor: 'lineHeight',
          label: 'Line Height',
          Component: ({ value }) => {
            return <span>{value}px</span>
          }
        }, {
          accessor: 'fontWeight',
          label: 'Font Weight',
        }]}
      />}

      <Heading level={2}>See also</Heading>
      <ArticleList>
        <Article imageUrl='/design-system/typography.png' title='Typography' section='General' href='/design-system/typography' />
        <Article imageUrl='/design-system/theme.png' title='Light and dark themes' section='General' href='/design-system/themes' />
      </ArticleList>
    </>)
  }