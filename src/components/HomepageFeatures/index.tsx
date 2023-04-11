import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '容易使用',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Laravel Suda 是一款Admin Panle工具, 通过 Composer 一步安装，独立 Guard 和 包管理方式，非常方便上手。
      </>
    ),
  },
  {
    title: '专注解决开发需求',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        专注解决后端或全栈开发者的需求，通过灵活的菜单、可安装卸载的应用机制，为开发者提供一个上手可用的后台模块，开发者可以只关注自己的业务需求。
      </>
    ),
  },
  {
    title: '最佳集成实践',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        扩展应用机制，可以很方便的集成所需要的功能应用，包括数据表、静态资源、个性化页面实现等。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
