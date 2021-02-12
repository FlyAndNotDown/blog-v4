import React from 'react';
import Head from "next/head";

export function Header(props) {
  const title = props.title || '';

  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
