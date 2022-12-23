import FAQ from "../components/FAQ";

function FAQpage(){
    const drops = [
        {
            id: '1',
            label: 'pergunta1',
            content: 'resposta1',
        },
        {
            id: '2',
            label: 'pergunta2',
            content: 'resposta2',
        },
        {
            id: '3',
            label: 'pergunta3',
            content: 'resposta3',
        },
    ];

    return <FAQ drops={drops} />;
}

export default FAQpage;

