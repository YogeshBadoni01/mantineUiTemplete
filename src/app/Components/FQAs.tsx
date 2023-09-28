import { Accordion, Text, Container, Title, Badge,Group, Flex ,Box} from '@mantine/core';
import { FiCoffee, FiCloudSnow, FiAnchor } from "react-icons/fi";
import classis from './Responsive.module.css'

const FAQs = () => {
    //const theme = useMantineTheme();

    return (
        <div className={classis.padding}>

            <Container>
                <Box mb={'30px'} >
                    <div style={{ textAlign: 'left' }}><Badge variant="filled" color="yellow">FAQs</Badge></div>
                    <Text color="black">
                        <Title order={1} style={{ marginTop: 10 }} className={classis.heading} color="white">Woah, Frequently asked questions here</Title>
                    </Text>
                </Box>

                <Accordion variant="contained">
                    <Accordion.Item value="item1">
                        <Accordion.Control icon={<FiCoffee size={20} color={"#fab005"} />}>
                            Is Dennis Farina famous?
                        </Accordion.Control>
                        <Accordion.Panel>Yes, of course.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item2">
                        <Accordion.Control icon={<FiCloudSnow size={20} color={"#fab005"} />}>
                            Are pineapples good?
                        </Accordion.Control>
                        <Accordion.Panel>Unfortunately no.</Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="item3">
                        <Accordion.Control icon={<FiAnchor size={20} color={"#fab005"} />}>
                            Do you like yellow?
                        </Accordion.Control>
                        <Accordion.Panel>Oh yes!</Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );

};

export default FAQs;