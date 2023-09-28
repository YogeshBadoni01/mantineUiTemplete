"use client"
import Link from 'next/link';
import { Text, Container, ActionIcon, Group, rem,Title,Flex,Avatar, Anchor,Code,Button, Center } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import classes from './FooterLinks.module.css';
import classis from './Responsive.module.css'



export function FooterLinks() {
 

  return (
    <footer className={classis.footer} >
      <Container  className={classis.footerflex}>
        <div style={{padding:"8px",display:"flex", flexDirection:"column", gap:"15px"}} className={classis.footerleft} >
          <Title order={4}>Simple Mantine template</Title>
          <Text >You can do anything you want with this template, from portfolios to other stuff.</Text>
          <Text >You can find the illustrations I used on 
            <Anchor component={Link} href="https://icons8.com"  > www.icons8.com</Anchor>
          </Text>
          <Button variant="default" display={"inline-block"} w={"fit-content"} component={Link} href={'/https://mantine.dev'} style={{textAlign:"Center"}} color="blue" bg='white'>Check out Mantine</Button>
          
        </div>
        <div color="#fab005" style={{padding:"8px"}} className={classis.code} >
             <Code  c="white" pb={"6px"} p={"15px"} style={{width:("fit-content"),background:"#f8f9fa"}} color="#2d2d2d" bg={"transprant"} className={classis.codeDiv} >
             Template made by
             <Flex align={"center"} gap={"16px"}>
             <Avatar color="cyan" radius="xl">GDC</Avatar>
             <Group w={"min-content"} color="#2d2d2d">
                <Title order={5} >Giuseppetm</Title>
                <Title order={6}>giuseppe.delcampo@outlook.com</Title>
             </Group>
             </Flex>
            </Code>
        </div>
      </Container>
     
    </footer>
  );
}
export default FooterLinks;