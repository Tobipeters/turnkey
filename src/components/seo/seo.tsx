import React, { FC } from "react";
import Head from "next/head";

type Props = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  tags?: Array<{
    name: string;
    content: string;
  }>;
};

export const Seo: FC<Props> = ({ title, description, keywords, image, tags = [] }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:type' content='website' />
      {/* <meta property="og:url" content="https://www.constantc.com/" /> */}
      {image && (
        <>
          <meta name='twitter:image' content={image} />
          <meta property='og:image' content={image} />
        </>
      )}
      {keywords && <meta name='keywords' content={keywords} />}
      {tags.map((tag, index) => (
        <meta key={index} name={tag.name} content={tag.content} />
      ))}
    </Head>
  );
};
