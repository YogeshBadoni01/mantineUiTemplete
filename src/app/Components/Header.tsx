
"use client"
import {HoverCard,Group,Button, Badge,  Divider,  Box,  Burger,  Drawer,Title,Code,Flex,Avatar,    ScrollArea,  rem} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import classes from './HeaderMegaMenu.module.css';
import Link from 'next/link';
import classis from './Responsive.module.css'

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  // const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
//  const classess =(classis.aheader,classis.padding)
  return (
    <div className={(classis.padding,classis.aheader) } >
            <Box >
      <header className={classes.header}>
        <Group justify="space-between" h="100%">
        <Badge visibleFrom="sm" color="yellow" my='sm' >A simple Mantine template</Badge>
            <Group>
                <Group h="100%" gap={0} visibleFrom="sm">
                    <Link href="/" className={classes.link} >
                        <Title order={5}>Carousel</Title>
                    </Link>
                
                    <Link href="#" className={classes.link}>
                        <Title order={5}>Cards</Title>
                    </Link>
                    <Link href="#" className={classes.link}>
                        <Title order={5}>FAQs</Title>
                    </Link>
                </Group>
                <Group visibleFrom="sm">
                    <Button variant="default" component={Link} href={'https://mantine.dev/'}><Title order={5}>Check out Mantine</Title></Button>
                    
                </Group>
            </Group>


          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        title="Menu"
        hiddenFrom="sm"
        zIndex={1000000}
        position='right'
        padding={"24px"}
        size={320}

      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md" >
         <Flex justify="flex-start"  pb="xl" px="md" gap={"30px"} direction={'column'} color='white'>
           
            <Flex gap={"10px"} direction={'column'}>
              <Link href="/" className={classes.link}>
              <Title order={2}>Carousel</Title>
              </Link>
          
              <Link href="#" className={classes.link}>
              <Title order={2}>Cards</Title>
                  
              </Link>
              <Link href="#" className={classes.link}>
              <Title order={2}>FAQs</Title>
              </Link>
            </Flex>

            <Flex gap={"10px"} direction={'column'} fs={"16px"}>
              <Link href="#" className={classes.link}>
                  Contact
              </Link>
              <Link  href="#" className={classes.link} color='#1c7ed6'>
                  example@gmail.com
              </Link>
            </Flex>
            
            <Group >
              <Code color="yellow" c="white" pb={"6px"} p={"15px"} style={{width:("fit-content"),display:"flex",gap:"6px", flexDirection:"column"}}  maw={"370px"}>
              Template made by
              <Flex align={"center"} gap={"16px"}>
              <Avatar color="cyan" radius="xl">GDC</Avatar>
              <Group w={"min-content"}>
                  <Title order={5} fz={"12px"}>Giuseppetm</Title>
                  <Title order={6} fz={"12px"}>giuseppe.delcampo@outlook.com</Title>
              </Group>
              </Flex>
              </Code>
            </Group>

          </Flex >
         
        </ScrollArea> 
        
      </Drawer>
    </Box>
    </div>
  );
}