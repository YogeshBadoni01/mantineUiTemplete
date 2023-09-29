"use client"
import { Card, Image, Text, Badge, Button, Group,Container,Flex, Grid,Title, Center } from '@mantine/core';
import classis from './Responsive.module.css';



function Cards() {
    const myCard = [
        {
            Image:"image/image3.png",
            Heading:"History of Dennis Farina   ",
            Badge:"Cool badge ",
            Subheading:"Discover the career of Dennis Farina and his roles in movies!",
        },
        {
            Image:"image/image4.png",
            Heading:"Career of Dennis Farina",
            Badge:"Cool badge 2",
            Subheading:"Dennis Farina had a really great career with many opportunities!",
        },
        {
            Image:"image/image5.png",
            Heading:"Major roles of Dennis Farina",
            Badge:"Cool badge 3",
            Subheading:"Discover the major roles of Dennis Farina and something else!",
        },
    ]
  return (
    <>
    <section className="" style={{padding:"4rem 60px"}}>
        <Container>
          <Title order={1} style={{color:"#000",textAlign:"center"}} mt={"31px"} mb={"12px"}>These cards are really nice</Title>
        <div className={classis.grid}>
        {
    myCard.map((item,index)=>(
      // <Grid.Col span={4}>
    <Card shadow="sm" padding="lg" radius="md"  key={index} style={{background: "transparent", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)"}} >
      <Card.Section>
        <Image
          src={item.Image}
          // height={160}
          alt={item.Heading}
          mb={"10px"}
          width={"100%"}
          height={"auto"}
          />
      </Card.Section>

      <Group justify="space-between"  mt="md" mb="xs" style={{color:"#000" }} >
        <Text fw={500} >{item.Heading}</Text>
        <Badge color="pink" variant="light" style={{backgroundColor:"#fff9db",color:"#fab005",fontSize:"13px",border:0}}>
          {item.Badge}
        </Badge>
      </Group>

      <Group style={{color:"#000"}}>

      <Text size="sm"  style={{color:"#000"}} >
        {item.Subheading}
      </Text>
      </Group>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md" mt-15px style={{backgroundColor:"#fff9db",color:"#fab005"}} >
        Find out
      </Button>
    </Card>
    // </Grid.Col>
    ))
}
        </div>
        </Container>

    </section>
    </>
  );
}
export default Cards;