import styled from "styled-components";

export const Progress = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ul {
    margin-top: 40px;

    li {
        display: flex;
      justify-content: center;
      align-items: center;
      width: 980px;
      margin-bottom: 20px;

      .skill-icon {
        max-width: 200px;
        height: 50px;
        margin-right: 20px;
      }

      .ability-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 800px;
        height: 32px;
        padding: 0 1px;
        background-color: #eee;
        border-radius: 5px;
        box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.3);
        margin-left: 20px;
        position: relative;
      }

      p {
        display: none;
      }
    }
  }

  @keyframes SkillUp {
    0% {
      width: 10%;
    }

    100% {
      width: 100%;
    }
  }
`;

export const Ability = styled.div`
  width: ${(props) => props.$ability}%;
  .ability-percent {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 30px;
    padding: 0 20px;
    border-radius: 0 15px 15px 0;
    background: ${(props) => {
        if (props.$ability >= 60) {
            return 'linear-gradient(90deg, rgba(76, 175, 80, 1) 0%, rgba(56, 142, 60, 1) 100%)'; // Green for 60%+
        } else if (props.$ability >= 40) {
            return 'linear-gradient(90deg, rgba(255, 235, 59, 1) 0%, rgba(253, 216, 53, 1) 100%)'; // Yellow for 40%-59%
        } else if (props.$ability >= 20) {
            return 'linear-gradient(90deg, rgba(255, 152, 0, 1) 0%, rgba(251, 140, 0, 1) 100%)'; // Orange for 20%-39%
        } else {
            return 'linear-gradient(90deg, rgba(244, 67, 54, 1) 0%, rgba(211, 47, 47, 1) 100%)'; // Red for <20%
        }
    }};
    animation: SkillUp 4s linear;

    .percent {
      color: #fff;
      font-size: 18px;
    }
  }
`;
