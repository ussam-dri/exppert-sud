import CounterCardOne from "./CounterCardOne";
import SectionTitle from "../common/SectionTitle";
import { useRouter } from 'next/router';
const CounterTwo = () => {
    const router = useRouter();
    const { locale } = router;
        const CounterData=locale==="fr"?require('../../locales/fr/counters.json'):require('../../locales/en/counters.json')
    const ttl=locale==="fr"?"Qu'est-ce qui nous rend spécial ?":"What makes us special? ";
    const tag=locale==='fr'?"experts en domaine":"experts in field";
    const desc=locale==="fr"?"Dévoiler notre caractère unique: Découvrez comment nous allions créativité et précision stratégique, pour obtenir des résultats exceptionnels grâce à une réflexion innovante et une excellence constante.":"Unveiling Our Uniqueness: Discover how we blend creativity with strategic precision, delivering exceptional results through innovative thinking and relentless excellence.";
    const counterClass = (i) => {
        if (i === 0) return "axil-counterup text-center counter-1";
        else if (i === 1)
            return "axil-counterup text-center color-style-two mt--60 mt_mobile--40";
        else if (i === 2)
            return "axil-counterup text-center color-style-three mt_mobile--40";
        else if (i === 3)
            return "axil-counterup text-center color-style-four mt--60 mt_mobile--40";
    };

    return (
        <div className="axil-counterup-area ax-section-gap bg-color-white">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-12">
                        <SectionTitle
                            title={ttl}
                            subtitle={tag}
                            description={desc}
                            color="extra08-color"
                            alignment="left"
                        />
                      
                    </div>

                    <div className="col-lg-6 offset-xl-1 col-12 mt_md--40 mt_sm--40">
                        <div className="row">
                            {CounterData?.map((counter, index) => (
                                <CounterCardOne
                                    key={`counter-${index}`}
                                    column="col-lg-6 col-md-6 col-sm-6 col-6"
                                    counterClass={counterClass(index)}
                                    data={counter}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterTwo;
