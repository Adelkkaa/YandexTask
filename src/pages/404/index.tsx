import { ErrorPage as Error } from "@/components/ErrorPage";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";

const ErrorPage: NextPage = (): JSX.Element => (
  <>
    <Head>
      <title>404</title>
      <meta name="description" content="Error page" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
    <Error />
  </>
);

export default ErrorPage;
