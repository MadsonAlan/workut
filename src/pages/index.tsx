import Head from 'next/head'
import React from 'react'
import { Box, MainGrid, ProfileRelationsBoxWrapper } from '../components/StylesConfig'
import { OrkutNostalgicIconSet, WorkutMenu } from '../lib/WorkutCommons'

interface PropsProfiler {
  githubUser: string
}

function ProfileSidebar(props: PropsProfiler) {
  return (
    <Box>
      <img src={`https://github.com/${props.githubUser}.png`} style={{ borderRadius: '8px' }} />
    </Box>
  )
}


export default function Home() {
  const githubUser = 'madsonAlan'
  const pessoasFavoritas = ['juunegreiros', 'omariosouto', 'peas', 'makusdouglas', 'ddanielsantos']
  return (
    <>
      <WorkutMenu githubUser={githubUser} />
      <MainGrid>
        <Head>
          <title>Inicio | workut</title>
        </Head>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="tittle">
              Bem-vindo
            </h1>

            <OrkutNostalgicIconSet/>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <Box>
            <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Pessoas da comunidade ({pessoasFavoritas.length})
              </h2>

              <ul>
                {pessoasFavoritas.map((githubuserItem) => {
                  return (
                    <li>
                      <a href={`/users/${githubuserItem}`} key={githubuserItem}>
                        <img src={`https://github.com/${githubuserItem}.png`} />
                        <span>{githubuserItem}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
            </ProfileRelationsBoxWrapper>
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
