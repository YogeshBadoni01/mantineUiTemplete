import { Accordion, Text, Container, Title, Badge,Group, Flex ,Box} from '@mantine/core';
import { FiCoffee, FiCloudSnow, FiAnchor } from "react-icons/fi";
import classis from './Responsive.module.css'

const FAQs = () => {
    //const theme = useMantineTheme();

    return (
        <div className={classis.padding} style={{color:"#000"}}>

            <Container>
                <Box mb={'30px'} >
                    <div style={{ textAlign: 'left',color:"#fff" }}><Badge variant="filled" color="yellow">FAQs</Badge></div>
                    <Text color="black">
                        <Title order={1} style={{ marginTop: "10px" }} className={classis.heading} >Woah, Frequently asked questions here</Title>
                    </Text>
                </Box>

                <Accordion variant="contained">
                    <Accordion.Item value="item1" style={{color:"#000"}}>
                        <Accordion.Control icon={<FiCoffee size={20} color={"#fab005"} />}>
                            <Text style={{color:"#000"}}>Is Dennis Farina famous?</Text>
                        </Accordion.Control>
                        <Accordion.Panel>Yes, of course.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item2" style={{color:"#000"}}>
                        <Accordion.Control icon={<FiCloudSnow size={20} color={"#fab005"} />}>
<Text style={{color:"#000"}}>                            Are pineapples good?</Text>
                        </Accordion.Control>
                        <Accordion.Panel>Unfortunately no.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item3" style={{color:"#000"}}>
                        <Accordion.Control icon={<FiAnchor size={20} color={"#fab005"} />}>
                            <Text style={{color:"#000"}}>Do you like yellow?</Text>
                        </Accordion.Control>
                        <Accordion.Panel>Oh yes!</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );

};

export default FAQs;