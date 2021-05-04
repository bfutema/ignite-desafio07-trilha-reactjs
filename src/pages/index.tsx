import React from 'react';
import Head from 'next/head';
import { Flex } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Banner } from '../components/Banner';

const Home: React.FC = () => {
  return (
    <Flex direction="column" h="100vh">
      <Head>
        <title>Bem-vindo ao World Trip</title>
      </Head>

      <Header />

      <Banner />

      <main>
        <h1>Hello WorldTrip</h1>
      </main>
    </Flex>
  );
};

export default Home;
