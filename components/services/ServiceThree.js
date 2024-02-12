import Link from 'next/link';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import {camelCaseToDashed} from '../../helpers/utilities';
import SectionTitle from '../common/SectionTitle';
import { useRouter } from 'next/router';
///////////////////////// THIS IS FOR ABOUT US PAGE ///////////////////////////
const ServiceThree = () => {

    const router = useRouter();
    const { locale } = router;

    const ttl = locale === 'fr' ? "Pourquoi devriez-vous travailler avec nous ?" : "Why should you work with us?";
    const subt = locale === 'fr' ? "Pourquoi devriez-vous travailler avec nous ?" : "Our values";
    const desc = locale === 'fr' ? "Notre agence de marketing digital vous fournit une variété de services, de la création de sites Web aux campagnes de marketing intuitives, pour obtenir plus d'engagement, plus de prospects et plus de ventes." : "Our digital marketing agency provides you with a variety of services, from website creation to intuitive marketing campaigns, to get more engagement, more leads and more sales.";
    const ServiceData=locale==='fr'?require('../../locales/fr/Services.json'):require('../../locales/en/Services.json');

    const [servicesOurValues,setServicesOurValues] = useState([]);

    const getServicesByCategory = () => {
        const ourValues = ServiceData.filter(
            (service) => service.category === "Our values"
        );

        setServicesOurValues(ourValues);
    };

    const serviceColor = (index) => {
        if (index === 1) return "color-var--2"
        else if (index === 2) return "color-var--3"
        else if (index === 3) return "color-var--4"
        else if (index === 4) return "color-var--5"
        else if (index === 5) return "color-var--2"
        else ""
    }

    useEffect(() => {
        getServicesByCategory();
    }, []);

    return (
        <div className="axil-service-area ax-section-gap bg-color-lightest">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title={ttl}
                            subtitle={subt}
                            description={desc}
                            color="extra08-color"
                            alignment="center"
                        />
                    </div>
                </div>
                <div className="row">
                    {servicesOurValues?.map((service, index) => (
                        <div className="col-lg-4 col-md-6 col-12 mt--50 mt_md--40 mt_sm--30" key={`service-${index}`}>
                            <div
                                className={`axil-service-style--3 ${serviceColor(index)}`}
                            >
                                <div className="icon">
                                    <Image
                                        width={50}
                                        height={49}
                                        src={service.imageLayer}
                                        alt="Icon Images"
                                        layout="fixed"
                                    />
                                    <div className="text">{index + 1}</div>
                                </div>
                                <div className="content">
                                    <h4 className="title">
                                    {service.title}
                                    </h4>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceThree;
