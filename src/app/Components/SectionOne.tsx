import React from 'react'
import { Container,Grid,GridCol, Title,Text,Button,Image } from '@mantine/core'
// import Image from 'next/image'
import classis from './Responsive.module.css'

const SectionOne = () => {
  return (
    <>
    <div className={classis.padding}>

        <Container>
            <Grid grow className={classis.sectionflex}>
                    <GridCol span={7} style={{color:"#000" }} >
                        <Title order={1}  mb={'12px'} mt={'31px'} className={classis.heading}>You can put whatever you want here</Title>
                        <Text mb={"20px"}>Dennis Farina was one of Hollywood's busiest actors and a familiar face to moviegoers and television viewers alike. In 1998's "Saving Private Ryan," directed by Steven Spielberg, Farina played "Col. Anderson," a pivotal role in the film.</Text>
                        <Button style={{background:"#fab005"}}> Check it out</Button>
                    </GridCol>
                    <GridCol span={3}>
                    <Image
                        radius="md"
                        h={200}
                        w="auto"
                        fit="contain"
                        src="/image/image1.png"
                        />
                    </GridCol>
            </Grid>
        </Container>
    </div>


    </>
  )
}

export default SectionOne