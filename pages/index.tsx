import type { NextPage } from 'next'
import styled from 'styled-components';
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
    <Title>auth page</Title>
    <Link href="/hometify">HOME PAGE</Link>
    </>
  )
}

export default Home

const Title = styled.h1`
  color: red;
`;