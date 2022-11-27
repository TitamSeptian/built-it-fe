import {
    Container,
    Heading,
    Accordion,
    AccordionItem,
    AccordionButton,
    Box,
    AccordionPanel,
    AccordionIcon,
    Center
} from "@chakra-ui/react";

export default function FaqSection() {
    const faqs = [
        {
            id: 1,
            question: "What is the best way to contact you?",
            answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nisl elit aliquam nisl, eget aliquam nisl elit quis nisl. Donec auctor, nisl eget aliquam tincidunt, nisl elit aliquam nisl, eget aliquam nisl elit quis nisl.'
        },
        {
            id: 2,
            question: "What is the best way to contact you?",
            answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nisl elit aliquam nisl, eget aliquam nisl elit quis nisl. Donec auctor, nisl eget aliquam tincidunt, nisl elit aliquam nisl, eget aliquam nisl elit quis nisl.'
        },
        {
            id: 3,
            question: "What is the best way to contact you?",
            answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nisl elit aliquam nisl, eget aliquam nisl elit quis nisl. Donec auctor, nisl eget aliquam tincidunt, nisl elit aliquam nisl, eget aliquam nisl elit quis nisl.'
        },
        {
            id: 4,
            question: "What is the best way to contact you?",
            answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nisl elit aliquam nisl, eget aliquam nisl elit quis nisl. Donec auctor, nisl eget aliquam tincidunt, nisl elit aliquam nisl, eget aliquam nisl elit quis nisl.'
        },
        {
            id: 5,
            question: "What is the best way to contact you?",
            answer: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget aliquam tincidunt, nisl elit aliquam nisl, eget aliquam nisl elit quis nisl. Donec auctor, nisl eget aliquam tincidunt, nisl elit aliquam nisl, eget aliquam nisl elit quis nisl.'
        },
    ]
    return (
        <div>
            <Container maxW={"container.xl"} my={"10"} >
                <Center my={'10'}>
                    <Heading as="h1" size="xl">

                        Frequently Asked Questionss
                    </Heading>
                </Center>
                <Accordion allowMultiple>
                    {faqs.map((faq) => (

                        <AccordionItem key={faq.id} borderRadius={"xl"}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        {faq.question}
                                    </Box>
                                    <AccordionIcon/>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {faq.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    ))}

                </Accordion>
            </Container>
        </div>
    )
}