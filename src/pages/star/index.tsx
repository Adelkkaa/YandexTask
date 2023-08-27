import { Star } from "@/components/Star";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const StarPage: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>Star</title>
      <meta name="description" content="Star Task" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <base href="/star" />
    </Head>
    <Star />
  </>
);

export default StarPage;
