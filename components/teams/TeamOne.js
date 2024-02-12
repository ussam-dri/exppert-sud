import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import Link from "next/link";
import { useRouter } from "next/router";
const TeamOne = () => {
    const router = useRouter();
    const { locale } = router;

    const desc=locale==='fr'?"Développeur de médias numériques: piloter le développement de sites Web dynamiques et polyvalents, intégrant des éléments multimédias et des fonctionnalités interactives pour amplifier la narration et l'engagement de la marque sur diverses plateformes.":"Digital Media Developer: Driving dynamic and versatile website development, incorporating multimedia elements and interactive features to amplify brand storytelling and engagement across diverse platforms";
    return (
        <div className="axil-team-area shape-position ax-section-gap bg-color-white">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-6">
                        <div className="thumbnail">
                            <div className="image">
                                <Image
                                    width={630}
                                    height={514}
                                    src="/images/team/teams.jpg"
                                    alt="Team Images"
                                />
                            </div>
                            <div className="total-team-button">
                                <Link href="/team">
                                    <a>
                                        <span>5+</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xl-5 offset-xl-1 mt_md--40 mt_sm--40">
                        <div className="content">
                            <div className="inner">
                                <SectionTitle
                                    title="❝Alone we can do so little .Together we can do so much❞"
                                    subtitle="team"
                                    description={desc}
                                    color="extra08-color"
                                    alignment="left"
                                />
                                <div className="axil-button-group mt--40">
                                    <Link href="/team">
                                        <a className="axil-button btn-large btn-transparent">
                                            <span className="button-text">Team</span>
                                            <span className="button-icon"></span>
                                        </a>
                                    </Link>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-group">
                <div className="shape shape-1 customOne">
                    <i className="icon icon-shape-06"></i>
                </div>
                <div className="shape shape-2">
                    <i className="icon icon-shape-13"></i>
                </div>
                <div className="shape shape-3">
                    <i className="icon icon-shape-14"></i>
                </div>
            </div>
        </div>
    );
};

export default TeamOne;
