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

const TITLE_STYLE = {
    fontSize: "1.6rem",
    display: "inline"
}
const H1_STYLE = {
    fontWeight: 600,
    fontSize: "1.5rem",
}

const WHITE_BG = {
    backgroundColor: COLORS.white
}

const H_STYLE = {
    fontWeight: 570,
    overflowWrap: "break-word",
    wordWrap: "break-word",
    whiteSpace: "normal",
    fontSize: "1.2rem",
}
const H2_STYLE = {
    ...H_STYLE,
    marginBottom: "1rem",
}

const H2_STYLE_IN_SECTION = {
    ...H_STYLE,
    marginBottom: "0.25rem"
}

const P_STYLE = {
    overflowWrap: "break-word",
    wordWrap: "break-word",
    whiteSpace: "normal",
    fontSize: "1rem"
}

const TABLE_STYLE = {
    backgroundColor: COLORS.gray,
    tableLayout: 'fixed',
    border: 0,
    paddingRight: "5%",
    paddingLeft: "5%",
}
const TBODY_STYLE = {
    backgroundColor: COLORS.white
}
const ADD_PADDING = {
    paddingLeft: 16,
    paddingRight: 16
}

const SECTION_STYLE_CSS = {
    marginBottom: 22,
}
const BUTTON_STYLE = {
    fontWeight: "bold",
    borderRadius: 2,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginTop: 24,
    marginBottom: 24,
    fontSize: "1rem"
}

const ICONS_URL = {
    customer: "https://image.s51.sfmc-content.com/lib/fe3411737364047c7d1474/m/1/f2445a77-fe2e-414d-a52a-964e676a48ec.png",
    dialogue: "https://image.s51.sfmc-content.com/lib/fe3411737364047c7d1474/m/1/e9ca7fe4-0c78-4f41-991d-e3d292323abc.png",
    savings: "https://image.s51.sfmc-content.com/lib/fe3411737364047c7d1474/m/1/1e451fab-c617-4d2a-913f-978cd91be778.png",
    okay: "https://image.s51.sfmc-content.com/lib/fe3411737364047c7d1474/m/1/69ab7724-56af-4fc9-be48-9d438f7931f8.png",
    medal: "https://image.s51.sfmc-content.com/lib/fe3411737364047c7d1474/m/1/e6ca84ac-4131-4979-8001-421e29961926.png"
}

const ICONS = {
    size: "w-4/6",
    style:{ paddingRight: 4 }
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
                </Head>
                    <Container
                        className={"w-full h-full"}
                        style={{color: COLORS.black}}
                    >
                        <table
                            cellPadding="0"
                            cellSpacing="0"
                            align="center"
                            width="100%"
                            style={{
                                ...TABLE_STYLE,
                                background: "linear-gradient(to top, #FAFAFA, #FAFAFACC)",
                            }}
                        >
                            <tbody>
                            <tr>
                                <td align={"center"}
                                    style={{
                                        width: "90%",
                                        marginBottom: 24,
                                        ...WHITE_BG,
                                    }}
                                >
                                    <Heading style={{...ADD_PADDING, ...TITLE_STYLE}} className={"md:text-4xl"}>
                                        <span style={{fontWeight: "normal"}}>{"hazel"}</span>
                                        <span style={{color: COLORS.orange, fontWeight: "bold"}}>{"heart"}</span>
                                        <span style={{fontWeight: "bold"}}>{"wood"}</span>
                                    </Heading>
                                </td>
                                <td align={"right"} style={{...WHITE_BG, width: "22%"}} >
                                    <Img
                                        src={`https://i.imgur.com/cIULQdK.png`}
                                        alt={"logo"}
                                        className={"w-14 md:w-28"}
                                    />
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <Container style={{color: COLORS.black}}>
                            <table
                                cellPadding="0"
                                cellSpacing="0"
                                align="center"
                                width="100%"
                                style={TABLE_STYLE}

                            >
                                <tbody style={TBODY_STYLE}>
                                <tr>
                                    <td align="left">
                                        <div
                                             style={{
                                                 color: COLORS.orange,
                                                 ...H1_STYLE,
                                                 ...ADD_PADDING
                                             }}>
                                            {"Email Marketing"}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <div
                                            style={{...H2_STYLE, ...ADD_PADDING}}
                                        >
                                            {"and Its Benefits for Small and Medium Business"}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <div
                                            style={{
                                                marginBottom: 16,
                                                ...ADD_PADDING,
                                                ...P_STYLE
                                        }}>
                                            {"Email marketing is a promotional method that involves sending emails to promote products. Communication and consumer trust are considered effective in building customer loyalty through this method"}
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="left">
                                        <div
                                            style={{...P_STYLE, ...ADD_PADDING}}
                                        >
                                            {"If you're launching a business in this digital era, it seems necessary to think about using email, because it will bring you many benefits, such as:"}
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <Container>
                                <table
                                    cellPadding="0"
                                    cellSpacing="0"
                                    align="center"
                                    width="100%"
                                    style={{
                                        backgroundColor: COLORS.gray,
                                        tableLayout: 'fixed',
                                        border: 0,
                                        ...TABLE_STYLE
                                    }}>
                                    <tbody style={TBODY_STYLE}>
                                    <tr>
                                        <td align="center" valign="middle">
                                            <Button
                                                href={"https://www.hazelheartwood.com/the-veehof-practice"}
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
                                    cellPadding="0"
                                    cellSpacing="0"
                                    align="center"
                                    width="100%"
                                    style={TABLE_STYLE}
                                >
                                    <tbody style={TBODY_STYLE}>
                                    <tr>
                                        <td>
                                            <Section
                                                style={{...SECTION_STYLE_CSS, ...ADD_PADDING}}
                                            >
                                                <Row>
                                                    <Column style={ICONS.style}>
                                                        <Img
                                                            src={ICONS_URL.customer}
                                                            className={ICONS.size}
                                                            alt={'customer-icon'}
                                                        />
                                                    </Column>
                                                    <Column className="w-4/5">
                                                        <div>
                                                            <div style={H2_STYLE_IN_SECTION}>Easier to Get Customer Data</div>
                                                            <div style={P_STYLE}>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh sapien, porta sed nunc at, luctus sodales lectus.
                                                            </div>
                                                        </div>
                                                    </Column>
                                                </Row>
                                            </Section>
                                            <Section style={{...SECTION_STYLE_CSS, ...ADD_PADDING}} >
                                                <Row>
                                                    <Column>
                                                        <Img
                                                            src={ICONS_URL.dialogue}
                                                            className={ICONS.size}
                                                            alt={'dialogue-icon'}

                                                        />
                                                    </Column>
                                                    <Column className="w-4/5">
                                                        <div>
                                                            <div style={H2_STYLE_IN_SECTION}>
                                                                Communication with Customers Feels More Personal
                                                            </div>
                                                            <div style={P_STYLE}>
                                                                Mauris maximus id ex vel commodo. Maecenas pulvinar arcu augue, nec accumsan nisi lobortis id. Nulla eu iaculis est, sed blandit lorem. Vivamus nec lorem ligula.
                                                            </div>
                                                        </div>
                                                    </Column>
                                                </Row>
                                            </Section>
                                            <Section style={{...SECTION_STYLE_CSS, ...ADD_PADDING}}>
                                                <Row>
                                                    <Column style={ICONS.style}>
                                                        <Img
                                                            src={ICONS_URL.savings}
                                                            className={ICONS.size}
                                                            alt={'savings-icon'}
                                                        />
                                                    </Column>
                                                    <Column className="w-4/5">
                                                        <div>
                                                            <div style={H2_STYLE_IN_SECTION}>Save Money</div>
                                                            <div style={P_STYLE}>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh sapien, porta sed nunc at, luctus sodales lectus.
                                                            </div>
                                                        </div>
                                                    </Column>
                                                </Row>
                                            </Section>
                                            <Section style={{...SECTION_STYLE_CSS, ...ADD_PADDING}}>
                                                <Row>
                                                    <Column style={ICONS.style}>
                                                        <Img
                                                            src={ICONS_URL.okay}
                                                            className={ICONS.size}
                                                            alt={'okay-icon'}
                                                        />
                                                    </Column>
                                                    <Column className="w-4/5">
                                                        <div>
                                                            <div style={H2_STYLE_IN_SECTION}>
                                                                Easy to Evaluate
                                                            </div>
                                                            <div style={P_STYLE}>
                                                                Mauris maximus id ex vel commodo. Maecenas pulvinar arcu augue, nec accumsan nisi lobortis id. Nulla eu iaculis est, sed blandit lorem. Vivamus nec lorem ligula.
                                                            </div>
                                                        </div>
                                                    </Column>
                                                </Row>
                                            </Section>
                                            <Section style={{...SECTION_STYLE_CSS, ...ADD_PADDING}}>
                                                <Row>
                                                    <Column style={ICONS.style}>
                                                        <Img
                                                            src={ICONS_URL.medal}
                                                            className={ICONS.size}
                                                            alt={'medal-icon'}
                                                        />
                                                    </Column>
                                                    <Column className="w-4/5">
                                                        <div>
                                                            <div style={H2_STYLE_IN_SECTION}>Build Credibility</div>
                                                            <div style={P_STYLE}>
                                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nibh sapien, porta sed nunc at, luctus sodales lectus.
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
                                    cellPadding="0"
                                    cellSpacing="0"
                                    align="center"
                                    width="100%"
                                    style={{
                                        backgroundImage: "url('https://i.imgur.com/ZAwVVx6.png')",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        paddingBottom: "2rem",
                                        ...TABLE_STYLE
                                    }}>
                                    <tbody style={WHITE_BG}>
                                    <tr style={WHITE_BG}>
                                        <td align="center" valign="middle">
                                            <Button
                                                href={"https://www.hazelheartwood.com/"}
                                                style={{
                                                    ...BUTTON_STYLE,
                                                    border: "4px solid #FF5900",
                                                    color: COLORS.black,

                                                }}>
                                                get in touch
                                            </Button>
                                        </td>
                                    </tr>
                                    <tr style={WHITE_BG}>
                                        <td align="center" valign="middle">
                                            <div style={{fontWeight: "normal", fontSize: 16, marginBottom: 24}}>
                                            <a href="mailto:hello@hazelheartwood.com"  style={{ color: COLORS.black, textDecoration: "none"}}>
                                                <span>{"contact us via: hello@hazel"}</span>
                                                <span style={{color: COLORS.orange}}>{"heart"}</span>
                                                <span style={{color: COLORS.black, textDecoration: "none"}}>{"wood.com"}</span>
                                            </a>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr style={WHITE_BG}>
                                        <td align="center" valign="middle">
                                            <Img
                                                src={IMAGE.url}
                                                width={IMAGE.style.width}
                                                className={"pb-4 md:pb-8"}
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
