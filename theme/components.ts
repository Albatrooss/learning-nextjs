import styled from 'styled-components';

export const Title = styled.h1`
    color: ${({theme}) => theme.black};
    padding-bottom: 20px;
    text-align: center;
`;

interface TextProps {
    align?: 'center' | 'right' | 'left'
}
export const Text = styled.p<TextProps>`
  color: #777;
  text-align: ${({ align }) => align ? align : 'left'};
`;

export const AButton = styled.a`
    display: block;
    width: 150px;
    padding: 8px 0;
    margin: 20px auto;
    background: ${({ theme }) => theme.primary};
    border-radius: 4px;
    color: ${({ theme }) => theme.white};
    text-align: center;
    cursor: pointer;
`;

export const ALink = styled.a`
    color: #4979FF;
    text-decoration: underline;
    cursor: pointer;
`;