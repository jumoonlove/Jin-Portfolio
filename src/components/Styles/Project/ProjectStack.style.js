import styled from "styled-components";

export const ProjectStack = styled.div`
    margin-top: 20px;
    ul {
        list-style: none;
        padding: 0;

        li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 8px;
            font-size: 16px;
        }

        li .stack-title {
            align-content: center;
            font-weight: bold;
            margin-right: 10px;
        }

        li .stack-description {
            text-align: right;
            flex: 1;
        }
    }
`;
