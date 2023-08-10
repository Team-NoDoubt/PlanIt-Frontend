import * as S from "./style";

const TimeTable = () => {
  return (
    <S.container>
      <S.Class>
        <option disabled selected hidden>
          학년
        </option>
        <option>1학년</option>
        <option>2학년</option>
        <option>3학년</option>
      </S.Class>
      <S.Class>
        <option disabled selected hidden>
          반
        </option>
        <option>1반</option>
        <option>2반</option>
        <option>3반</option>
        <option>4반</option>
      </S.Class>
      <S.Table>
        <S.Day>
          <span>월</span>
          <span>화</span>
          <span>수</span>
          <span>목</span>
          <span>금</span>
        </S.Day>
        <table>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
          </tr>
          <tr>
            <td>창체</td>
            <td>운건</td>
            <td>영어</td>
            <td>성직</td>
            <td>운체</td>
            <td>운건</td>
            <td>데베</td>
          </tr>
          <tr>
            <td>수학</td>
            <td>성직</td>
            <td>한국사</td>
            <td>데베</td>
            <td>영어</td>
            <td>한국사</td>
            <td>운체</td>
          </tr>
          <tr>
            <td>문학</td>
            <td>운체</td>
            <td>데베</td>
            <td>한국사</td>
            <td>수학</td>
            <td>자바</td>
            <td>자바</td>
          </tr>
          <tr>
            <td>자바</td>
            <td>자바</td>
            <td>수학</td>
            <td>문학</td>
            <td>운체</td>
            <td>창체</td>
            <td>창체</td>
          </tr>
          <tr>
            <td>영어</td>
            <td>빅분</td>
            <td>빅분</td>
            <td>빅분</td>
            <td>데베</td>
            <td></td>
            <td></td>
          </tr>
        </table>
      </S.Table>
    </S.container>
  );
};

export default TimeTable;