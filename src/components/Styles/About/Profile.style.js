import styled from 'styled-components'

export const Profile = styled.div`
    width: 540px;
    height: 360px;
    font-size: 20px;
    text-align: left;
    color: rgba(0, 0, 0, 0.7);

    ul {
        width: 480px;
        margin: 10px auto;
        padding: 10px 20px;

        li {
            display: flex;
            align-items: center;
            margin-bottom: 16px;

            span {
                padding-left: 30px;
            }
        }
    }
`;