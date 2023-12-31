import React from 'react'
import Link from 'next/link'
import { Anchor, Container,Flex,Title,Button, Center, Group ,MantineThemeProvider} from '@mantine/core';
import {AiOutlineArrowDown} from 'react-icons/ai'
import { Theme } from '../Theme/Theme';
import classes from './Responsive.module.css'
import classis from './Responsive.module.css'

const Hero = () => {
  return (
    <>
    <MantineThemeProvider>

    <div className="about" color='primaryColor' >
        {/* <Container> */}
            <Group className="about" style={{width:"100%",height:"100vh"}} display={Flex} justify={"center"} >
                <Flex justify={'center'} align={'center'} direction={'column'} style={{padding:"160px 140px",textAlign:"center",borderRadius:"25px"}}  bg={"#fff4d599"} classNames={classis.hero} >
                        <Title order={5} mb={"15px"} style={{color:"#fab005"}} fw={500}>MADE WITH REACT AND MANTINE</Title>
                        <Title order={1} mb={"15px"}style={{color:"#2d2d2d"}} className={classes.heroHeading}  >Simple Mantine Template  </Title>
                        <Title order={4} mb={"25px"} fs={"20px"} style={{}}fw={500}>Simple showcase of this powerful and well implemented library called
                        <Anchor component={Link} href={'https://mantine.dev/'} style={{color:"#fd7e14"}} > Mantine</Anchor>

                         </Title>
                          <Flex justify={"center"} align={"center"} gap={"10px"}>
                            <Button radius="md" style={{background:"#fab005",borderRadius:"16px"}}>
                              <Anchor display={'flex'} style={{justifyContent:'center' ,alignItems:'center', color:"#fff",}}>
                                <Title order={5}>Tell me more</Title>
                                <Title order={5}><AiOutlineArrowDown/></Title>
                              </Anchor>
                            </Button>
                            <Button radius="md" style={{background:"#fff",color:"#2d2d2d",borderRadius:"16px"}}>Other stuff</Button>
                            
                          </Flex>
                </Flex>
            </Group>
    {/* </Container> */}
</div>
    </MantineThemeProvider>
    </>
  )
}

export default Hero;