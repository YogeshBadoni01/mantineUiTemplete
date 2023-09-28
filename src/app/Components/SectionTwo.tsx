import React from 'react'
import { Container,Grid,GridCol, Title,Text,Button,Image } from '@mantine/core'
// import Image from 'next/image'
import classis from './Responsive.module.css'

const SectionOne = () => {
  return (
    <>
    <div className={classis.padding}>

        <Container>
            <Grid grow>
                    <GridCol span={3}>
                    <Image
                        radius="md"
                        h={200}
                        w="auto"
                        fit="contain"
                        src="/image/image2.png"
                        />
                    </GridCol>
                    <GridCol span={7} >
                        <Title order={1}  mb={'12px'} mt={'31px'}className={classis.heading}>Put something here too</Title>
                        <Text mb={"20px"}>Dennis Farina is unique among thespians in that he was one of the few to achieve success as a "late-bloomer." He did not start acting until he was 37 years old, after stints in the military and 18 years on the Chicago Police Department.</Text>
                        <Button style={{background:"#fab005"}}> Tell me more</Button>
                    </GridCol>
            </Grid>
        </Container>
    </div>


    </>
  )
}

export default SectionOne