"use client"
import { Card, Image, Text, Badge, Button, Group,Container,Flex, Grid } from '@mantine/core';
import { MdPadding } from 'react-icons/md';
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
        <div className={classis.grid}>
        {
    myCard.map((item,index)=>(
      // <Grid.Col span={4}>
    <Card shadow="sm" padding="lg" radius="md" withBorder key={index} >
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

      <Group justify="space-between"  mt="md" mb="xs" >
        <Text fw={500} >{item.Heading}</Text>
        <Badge color="pink" variant="light">
          {item.Badge}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {item.Subheading}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md" mt-15px >
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