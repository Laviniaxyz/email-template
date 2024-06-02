import {
    Button,
    Column,
    Container,
    Font,
    Head,
    Heading,
    Html, Img, Row,
    Section,
    Tailwind,
    Text,
} from "@react-email/components";
import * as React from "react";

const COLORS = {
    orange: "#FF5900",
    black: "#000000",
    gray: "#FAFAFA",
    white:"#FFFFFF"
}

const TITLE_STYLE = "inline text-2xl md:text-4xl"
const H1_STYLE = "font-medium text-2xl md:text-4xl mb-0"
const H2_STYLE = "font-medium break-words text-xl md:text-2xl mb-4"
const H_STYLE = "font-medium break-words text-xl md:text-2xl mb-1"
const P_STYLE = " break-words text-sm md:text-base "
const TABLE_STYLE_CLASS = "pr-2 pl-2 md:pl-8 md:pr-8"
const TBODY_STYLE = {
    backgroundColor: COLORS.white
}
const ADD_MARGINS = "pl-4 pr-4"

const SECTION_STYLE = {
    marginBottom: 14,
}
const BUTTON_STYLE = {
    fontWeight: "bold",
    borderRadius: 2,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    marginTop: 24,
    marginBottom: 24
}

const ICONS_URL = {
    customer: "https://image.s51.sfmc-content.com/lib/fe3411737364047c7d1474/m/1/f2445a77-fe2e-414d-a52a-964e676a48ec.png",
    dialogue: "https://image.s51.sfmc-content.com/lib/fe3411737364047c7d1474/m/1/e9ca7fe4-0c78-4f41-991d-e3d292323abc.png",
    savings: "https://image.s51.sfmc-content.com/lib/fe3411737364047c7d1474/m/1/1e451fab-c617-4d2a-913f-978cd91be778.png",
    okay: "https://image.s51.sfmc-content.com/lib/fe3411737364047c7d1474/m/1/69ab7724-56af-4fc9-be48-9d438f7931f8.png",
    medal: "https://image.s51.sfmc-content.com/lib/fe3411737364047c7d1474/m/1/e6ca84ac-4131-4979-8001-421e29961926.png"
}

const ICONS = {
    size: "w-4/6 md:w-6/6",
    style:{ marginRight: 4, width: 60}
}
const IMAGE = {
    url: "https://image.s51.sfmc-content.com/lib/fe3411737364047c7d1474/m/1/e5a6d5a3-0e1a-430e-9965-8229ca24da80.jpg",
    style: { width: 200 }
}

const  EmailBenefits = () =>  {
    return (
        <Html>
            <Tailwind>
                <Head>
                    <Font fontFamily={"Lato"} fallbackFontFamily={"Verdana"} fontStyle={"normal"}/>
                </Head >
                <Container
                    className={"w-full h-full"}
                    style={{color: COLORS.black,}}
                >
                    <table
                        className={TABLE_STYLE_CLASS}
                        cellPadding="0"
                        cellSpacing="0"
                        align="center"
                        width="100%"
                        style={{
                            backgroundColor: COLORS.gray,
                            tableLayout: 'fixed',
                            border: 0,
                        }}
                    >
                        <tbody>
                            <tr>
                                <td align={"center"}
                                    style={{
                                        backgroundColor: COLORS.white,
                                        width: "85%",
                                        marginBottom: 24
                                }}
                                    className={"bg-white"}
                                >
                                    <Heading className={`${ADD_MARGINS} ${TITLE_STYLE}`}>
                                        <span className={"font-normal"}>{"hazel"}</span>
                                        <span className={"font-normal"} style={{color: COLORS.orange}}>{"heart"}</span>
                                        <span className={"font-semibold"}>{"wood"}</span>
                                    </Heading>
                                </td>
                                <td align={"right"} className={"bg-white"}>
                                    <Img
                                        src={`https://i.imgur.com/vtKYTGu.png`}
                                        alt={"logo"}
                                        className={"w-14 md:w-24"}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <Container style={{color: COLORS.black}}>
                        <table
                            className={TABLE_STYLE_CLASS}
                            cellPadding="0"
                            cellSpacing="0"
                            align="center"
                            width="100%"
                            style={{
                                backgroundColor: COLORS.gray,
                                    tableLayout: 'fixed',
                                    border: 0,
                                }}>
                                <tbody style={TBODY_STYLE}>
                                <tr>
                                    <td align="left">
                                        <div className={`${ADD_MARGINS} ${H1_STYLE}`}
                                             style={{
                                                 color: COLORS.orange,
                                             }}>
                                            {"Email Marketing"}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <div className={`${ADD_MARGINS} ${H2_STYLE}`}>
                                            {"and Its Benefits for Small and Medium Business"}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <div className={`${ADD_MARGINS} ${P_STYLE}`} style={{marginBottom: 16}}>
                                            {"Email marketing is a promotional method that involves sending emails to promote products. Communication and consumer trust are considered effective in building customer loyalty through this method"}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <div className={`${ADD_MARGINS} ${P_STYLE}`}>
                                            {"If you're launching a business in this digital era, it seems necessary to think about using email, because it will bring you many benefits, such as:"}
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <Container>
                                <table
                                    className={TABLE_STYLE_CLASS}
                                    cellPadding="0"
                                    cellSpacing="0"
                                    align="center"
                                    width="100%"
                                    style={{
                                        backgroundColor: COLORS.gray,
                                        tableLayout: 'fixed',
                                        border: 0,
                                    }}>
                                    <tbody style={TBODY_STYLE}>
                                    <tr>
                                        <td align="center" valign="middle">
                                            <Button
                                                href={"https://www.hazelheartwood.com/the-veehof-practice"}
                                                // className={"py-2 px-4 my-2 md:py-3 md:px-8 md:my-4"}
                                                style={{
                                                    ...BUTTON_STYLE,
                                                    color: "#FFFFFF",
                                                    backgroundColor: "#FF5900",
                                                }}>
                                                Discover how we do it
                                            </Button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Container>
                            <Container>
                                <table
                                    className={TABLE_STYLE_CLASS}
                                    cellPadding="0"
                                    cellSpacing="0"
                                    align="center"
                                    width="100%"
                                    style={{
                                        backgroundColor: COLORS.gray,
                                        tableLayout: 'fixed',
                                        border: 0,
                                        width: "100%",
                                    }}>
                                    <tbody style={TBODY_STYLE}>
                                    <tr>
                                        <td>
                                            <Section
                                                style={{...SECTION_STYLE, paddingLeft: 8}}
                                                className={ADD_MARGINS}
                                            >
                                                <Row>
                                                    <Column style={ICONS.style}>
                                                        <Img
                                                            src={ICONS_URL.customer}
                                                            width={ICONS.style.width}
                                                            className={ICONS.size}
                                                            alt={'customer-icon'}
                                                        />
                                                    </Column>
                                                    <Column className="w-4/5">
                                                        <div>
                                                            <div className={H_STYLE}>Easier to Get Customer Data</div>
                                                            <div className={P_STYLE}>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Phasellus
                                                                nibh sapien, porta sed nunc at, luctus sodales lectus.
                                                            </div>
                                                        </div>
                                                    </Column>
                                                </Row>
                                            </Section>
                                            <Section style={{...SECTION_STYLE}} className={ADD_MARGINS}>
                                                <Row>
                                                    <Column>
                                                        <Img
                                                            src={ICONS_URL.dialogue}
                                                            width={ICONS.style.width}
                                                            className={ICONS.size}
                                                            alt={'dialogue-icon'}

                                                        />
                                                    </Column>
                                                    <Column className="w-4/5">
                                                        <div>
                                                            <div className={H_STYLE}>
                                                                Communication with Customers Feels More Personal
                                                            </div>
                                                            <div className={P_STYLE}>
                                                                Mauris maximus id ex vel commodo. Maecenas pulvinar arcu
                                                                augue, nec
                                                                accumsan nisi lobortis id. Nulla eu iaculis est, sed
                                                                blandit lorem.
                                                                Vivamus nec lorem ligula.
                                                            </div>
                                                        </div>
                                                    </Column>
                                                </Row>
                                            </Section>
                                            <Section style={SECTION_STYLE} className={ADD_MARGINS}>
                                                <Row>
                                                    <Column style={ICONS.style}>
                                                        <Img
                                                            src={ICONS_URL.savings}
                                                            width={ICONS.style.width}
                                                            className={ICONS.size}
                                                            alt={'savings-icon'}
                                                        />
                                                    </Column>
                                                    <Column className="w-4/5">
                                                        <div>
                                                            <div className={H_STYLE}>Save Money</div>
                                                            <div className={P_STYLE}>Lorem ipsum dolor sit amet,
                                                                consectetur
                                                                adipiscing elit. Phasellus nibh sapien, porta sed nunc
                                                                at, luctus
                                                                sodales lectus.
                                                            </div>
                                                        </div>
                                                    </Column>
                                                </Row>
                                            </Section>
                                            <Section style={SECTION_STYLE} className={ADD_MARGINS}>
                                                <Row>
                                                    <Column style={ICONS.style}>
                                                        <Img
                                                            src={ICONS_URL.okay}
                                                            width={ICONS.style.width}
                                                            className={ICONS.size}
                                                            alt={'okay-icon'}
                                                        />
                                                    </Column>
                                                    <Column className="w-4/5">
                                                        <div>
                                                            <div className={H_STYLE}>
                                                                Easy to Evaluate
                                                            </div>
                                                            <div className={P_STYLE}>
                                                                Mauris maximus id ex vel commodo. Maecenas pulvinar arcu
                                                                augue, nec
                                                                accumsan nisi lobortis id. Nulla eu iaculis est, sed
                                                                blandit lorem.
                                                                Vivamus nec lorem ligula.
                                                            </div>
                                                        </div>
                                                    </Column>
                                                </Row>
                                            </Section>
                                            <Section style={SECTION_STYLE} className={ADD_MARGINS}>
                                                <Row>
                                                    <Column style={ICONS.style}>
                                                        <Img
                                                            src={ICONS_URL.medal}
                                                            width={ICONS.style.width}
                                                            className={ICONS.size}
                                                            alt={'medal-icon'}

                                                        />
                                                    </Column>
                                                    <Column className="w-4/5">
                                                        <div>
                                                            <div className={H_STYLE}>Build Credibility</div>
                                                            <div className={P_STYLE}>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                                Phasellus
                                                                nibh sapien, porta sed nunc at, luctus sodales lectus.
                                                            </div>
                                                        </div>
                                                    </Column>
                                                </Row>
                                            </Section>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Container>
                            <Container style={{color: COLORS.black}}>
                                <table
                                    className={`${TABLE_STYLE_CLASS} pb-2 md:pb-8`}
                                    cellPadding="0"
                                    cellSpacing="0"
                                    align="center"
                                    width="100%"
                                    style={{
                                        backgroundColor: COLORS.gray,
                                        tableLayout: 'fixed',
                                        border: 0,
                                        backgroundImage: "url('https://i.imgur.com/ZAwVVx6.png')",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                    }}>
                                    <tbody className={"bg-white"}>
                                    <tr className={"bg-white"}>
                                        <td align="center" valign="middle">
                                            <Button
                                                href={"https://www.hazelheartwood.com/"}
                                                className={"py-2 px-8 my-2 md:py-3 md:px-16 md:my-4"}
                                                style={{
                                                    ...BUTTON_STYLE,
                                                    border: "4px solid #FF5900",
                                                    color: COLORS.black,

                                                }}>
                                                get in touch
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr className={"bg-white"}>
                                        <td align="center" valign="middle">
                                            <Heading className={"text-base"}
                                                     style={{fontWeight: "normal"}}>
                                                <span>{"contact us via: hello@hazel"}</span>
                                                <span style={{color: COLORS.orange}}>{"heart"}</span>
                                                <span>{"wood.com"}</span>
                                            </Heading>
                                        </td>
                                    </tr>
                                    <tr className={"bg-white"}>
                                        <td align="center" valign="middle">
                                            <Img
                                                src={IMAGE.url}
                                                width={IMAGE.style.width}
                                                className={"pb-2 md:pb-8"}
                                                alt={"employees-group-photo"}
                                            />
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </Container>
                        </Container>
                </Container>
            </Tailwind>
        </Html>
);
}

export default EmailBenefits
