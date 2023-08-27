import { MyHistory } from "@/components/MyHistory";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const History: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>My History</title>
      <meta name="description" content="My History" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <base href="/history" />
    </Head>
    <MyHistory />
  </>
);

export default History;
