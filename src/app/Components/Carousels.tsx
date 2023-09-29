
"use client"
import { Carousel } from '@mantine/carousel';
import { Title,Text,Flex, Group,Container } from '@mantine/core';
import '@mantine/carousel/styles.css';
import classis from './Responsive.module.css';
// import { MdPadding } from 'react-icons/md';

export default function Carousels() {
  const Slide =[
    {
      Number:1,
      Text:"Write something here."
    },
    {
      Number:2,
      Text:"Something here too."
    },
    {
      Number:3,
      Text:"Mh, maybe here too?"
    },
    {
      Number:4,
      Text:"If you'd like to you could do that here..."
    },
    {
      Number:5,
      Text:"Woah, you are quite convincing.."
    },
    {
      Number:6,
      Text:"And we are done with the cards!"
    },
  
  ]
  return (
    <>
    <div className={classis.padding}>

    <Container>

    <Flex justify={'center'} direction={'column'} align={'center'}  >

    <Title mb={'12px'} mt={'31px'} className={classis.heading } style={{color:"#000"}}>Explain something in this carousel </Title>
    <Text mb={'25px'} style={{color:"#000"}}>You can insert images or some texts if you need.</Text>

    <Carousel
      withIndicators
      height={"300px"}
      slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
      slideGap={{ base: 0, sm: 'md' }}
      loop
      align="start"
      >

        {
          Slide.map((item,index)=>(
            
            <Carousel.Slide >
              <div className="" style={{height:"100%",background:"#fab005",borderRadius:"15px",color:"#000"}} >
                <Flex justify={'center'} align={'center'} style={{height:"300px"}} direction={'column'} gap={"15px"}>
                    <Title order={2} fs={"32px"}>{item.Number}</Title>
                    <Text>{item.Text}</Text>
                </Flex>
            </div>
            </Carousel.Slide>
          ))
        }
    
    </Carousel>
    </Flex>
        </Container>
    </div>
      </>
  );
}
