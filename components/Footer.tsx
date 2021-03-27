import styled from "styled-components";

const Ftr = styled.footer`
    display: block;
    text-align: center;
    padding: 30px 0;
    margin-top: 60px;
    color: #777;
    border-top: 1px solid #eaeaea;
`;

const Footer = () => {
    return (
        <Ftr>
            &#169; 2021 Ninja
        </Ftr>
    )
}

export default Footer;