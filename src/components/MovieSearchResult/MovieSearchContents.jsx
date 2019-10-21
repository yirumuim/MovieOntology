import React from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const MovieSearchContents = (props) => {
  const { searchResult } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <Typography variant="h3">조커(Joker, 2019)</Typography>
        <Typography variant="h6">
          <table>
            <tbody>
              <tr>
                <td>장르</td>
                <td>액션, 드라마, 스릴러</td>
              </tr>
              <tr>
                <td>감독</td>
                <td>토드 필립스</td>
              </tr>
              <tr>
                <td>관객수</td>
                <td>2,589,600명</td>
              </tr>
              <tr>
                <td>출연배우</td>
                <td>호아킨 피닉스, 재지 비츠</td>
              </tr>
              <tr>
                <td>검색결과</td>
                <td>{searchResult}</td>
              </tr>
            </tbody>
          </table>
        </Typography>
      </div>
    </MuiThemeProvider>
  );
};

export default MovieSearchContents;
