import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Bio } from '../../data/constants';
import {
    FooterContainer,
    FooterWrapper,
    Logo,
    Nav,
    NavLink,
    SocialMediaIcon,
    SocialMediaIcons
} from "./styled";



function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <Logo>Alexander Razhechkin</Logo>
                <Nav>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#education">Education</NavLink>
                </Nav>
                <SocialMediaIcons>
                    <SocialMediaIcon href={Bio.telegram} target="display"><TelegramIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.linkedin} target="display"><LinkedInIcon /></SocialMediaIcon>
                    <SocialMediaIcon href={Bio.github} target="display"><GitHubIcon /></SocialMediaIcon>
                </SocialMediaIcons>

            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;