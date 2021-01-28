import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>MortalQuiz - Modelo Base</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Content>
            <Widget.Header>
              <h1>Mortal Kombat</h1>
            </Widget.Header>
            <form onSubmit={function (infoEvento) {
              infoEvento.preventDefault();

              router.push(`/quiz?name=${name}`);
              console.log('Submit por meio do react');

              //router manda para outra página
            }}
            >
              <input
                onChange={function (infoEvento) {
                  console.log(infoEvento.target.value);
                  //State = propriedade do componente que quando modifica o componente
                  //e que faz com que o componente tenha ou não ser renderizado novamente

                  //State é como se fosse uma foto da tela
                  //toda vez que mexer algo, vai mudar na foto da tela
                  //e tudo o que foi mexido ele (State) vai pegar essas partes (e não tudo) para modificar na tela
                  setName(infoEvento.target.value);
                }}
                placeholder="Qual seu nome kombatente?"
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz de outras pessoas</h1>

            <p>Texto teste 2</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/AllanGregory" />
    </QuizBackground>
  );
}
