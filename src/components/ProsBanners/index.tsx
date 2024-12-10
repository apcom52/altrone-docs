import s from "./styles.module.scss";
import { Icon, Text } from "altrone-ui";
import Link from "next/link";
import { COMPONENTS } from "@/constants/components";
import { AutocompleteBanner } from "@/components/banners/AutocompleteBanner";
import { ConfigurableComponents } from "@/components/banners/ConfigurableComponents";
import { TypeScriptBanner } from "@/components/banners/TypeScriptBanner";
import { AllComponentsBanner } from "@/components/banners/AllComponentsBanner";

export const ProsBanners = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.BannersGrid}>
        <div className={s.LargeBanner}>
          <ConfigurableComponents />
        </div>
        <div className={s.SmallBanner}>
          <AutocompleteBanner />
        </div>
        <div className={s.SmallBanner}>
          <TypeScriptBanner />
        </div>
        <div className={s.SmallBanner}>
          <ConfigurableComponents />
        </div>
        <div className={s.SmallBanner}>
          <AutocompleteBanner />
        </div>
        <div className={s.LargeBanner}>
          <AllComponentsBanner />
        </div>
      </div>
    </div>
  );
};

// export const ProsBanners = () => {
//   return <div className={s.Wrapper}>
//     <div className={s.Card}>
//       <div className={s.Icon}><Icon i="brush"/></div>
//       <div className="subheader-text">New design system</div>
//       <div className="paragraph-text">Along with the new version of Altrone, a new design system was introduced,
//         with extensive use of CSS variables for various components,
//         new components for creating layouts, a hover rainbow effect, and much more!
//       </div>
//     </div>
//     <div className={s.Card}>
//       <div className={s.Icon}><Icon i="code"/></div>
//       <div className="subheader-text">React+TypeScript</div>
//       <div className="paragraph-text">
//         Altrone is built to react web applications, utilising the latest platform features. In addition, there is TypeScript
//         support out of the box
//       </div>
//     </div>
//     <div className={s.Card}>
//       <div className={s.Icon}><Icon i="tune"/></div>
//       <div className="subheader-text">Fully Customizable</div>
//       <div className="paragraph-text">
//         All components support passing custom styles and classes, as well as various aria and data attributes.
//         You can also apply custom styles to all components in the application at once using <Text.Link href="/components/configuration">Configuration</Text.Link> Stripper.
//       </div>
//     </div>
//     <div className={s.Card}>
//       <div className={s.Icon}><Icon i="south_america"/></div>
//       <div className="subheader-text">Themes and localizations</div>
//       <div className="paragraph-text">
//         Altrone supports light and dark theme (can be set manually or use the system theme), and there is English and Russian
//         translation out of the box. You can also apply your own translations</div>
//     </div>
//     <div className={s.Card}>
//       <div className={s.Icon}><Icon i="account_tree"/></div>
//       <div className="subheader-text">Subcomponents!</div>
//       <div className="paragraph-text">
//         The new version has revised the way components and properties work. Many components now have the ability to
//         pass subcomponents, which makes working with these components much more convenient than it was before
//       </div>
//     </div>
//     <div className={s.Card}>
//       <div className={s.Icon}><Icon i="expand_circle_down"/></div>
//       <div className="subheader-text">Tons of Components for Everything</div>
//       <div className="paragraph-text">
//         Currently Altrone contains {COMPONENTS.length} components for various tasks - input fields,
//         tables, navigation, buttons, lists, popups and more. With it, you can make any interface for any application</div>
//     </div>
//   </div>
// }
