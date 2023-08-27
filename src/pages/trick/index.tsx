import { Trick } from "@/components/Trick";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const TrickPage: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>CSSTrick</title>
      <meta name="description" content="CSS-Trick" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <base href="/trick" />
    </Head>
    <Trick />
  </>
);

export default TrickPage;
