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
          <Button variant="default" display={"inline-block"} w={"fit-content"} component={Link} href={'/https://mantine.dev'} style={{textAlign:"Center",color:"#228be6",border:"none"}} color="blue" bg='white'>Check out Mantine</Button>
          
        </div>
        <div color="#fab005" style={{padding:"8px"}} className={classis.code} >
             <Code  c="white" pb={"6px"} p={"15px"} style={{width:("fit-content"),background:"#f8f9fa",textAlign:"left"}} color="#2d2d2d" bg={"transprant"} className={classis.codeDiv} >
             Template made by
             <Flex align={"center"} gap={"16px"}>
             <Avatar color="cyan" radius="xl" style={{backgroundColor:"#fff9db",color:"#fab005"}}>GDC</Avatar>
             <Group w={"min-content"} color="#2d2d2d" style={{display:"flex",justifyContent:"flex-start",alignItems:"flex-start",flexWrap:"nowrap",flexDirection:"column",gap:"0",fontWeight:"500"}}>
                <Title order={5} fw={500} >Giuseppetm</Title>
                <Title order={6} fw={500}>giuseppe.delcampo@outlook.com</Title>
             </Group>
             </Flex>
            </Code>
        </div>
      </Container>
     
    </footer>
  );
}
export default FooterLinks;